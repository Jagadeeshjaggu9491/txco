'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  getStockItems,
  syncRemoteStockItems,
  addStockItem,
  updateStockItem,
  deleteStockItem,
  resetStockItems,
} from '@/utils/stockManager';
import {
  getCurrentUser,
  getRegisteredUsers,
  syncRemoteUsers,
  loginUser,
  logoutUser,
} from '@/utils/authManager';
import {
  stockCategories,
  stockMaterials,
  stockProfiles,
  stockPressureClasses,
} from '@/data/stockListData';
import {
  Boxes,
  Package,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  Search,
  Plus,
  Edit2,
  Trash2,
  RotateCcw,
  LogOut,
  ExternalLink,
  Users,
  Database,
  BarChart3,
  Shield,
  ShieldAlert,
  ArrowRight,
  X,
  Save,
  Menu as MenuIcon,
  ChevronRight,
  Building,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Server,
  RefreshCw,
  Home,
  Check,
  FileCheck2,
  PackageCheck,
  FileText,
  Award,
  MessageSquare,
} from 'lucide-react';
import {
  getStoredPurchaseOrders,
  saveStoredPurchaseOrder,
  deleteStoredPurchaseOrder,
  getStoredTestCertificates,
  saveStoredTestCertificate,
  deleteStoredTestCertificate,
} from '@/data/portalData';
import InvoiceModal from '@/components/portal/InvoiceModal';
import TestCertificateModal from '@/components/portal/TestCertificateModal';
import EnquiriesHub from '@/components/admin/EnquiriesHub';
import '@/styles/admin-dashboard.css';
import '@/styles/client-portal.css';

export default function AdminStockDashboard() {
  const router = useRouter();

  // Auth & Navigation States
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('stock'); // 'stock' | 'pos' | 'certificates' | 'enquiries' | 'users'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Inventory Data
  const [items, setItems] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Customer Portal POs & Test Certificates States
  const [posList, setPosList] = useState([]);
  const [tcsList, setTcsList] = useState([]);
  const [poSearch, setPoSearch] = useState('');
  const [poStatusFilter, setPoStatusFilter] = useState('All');
  const [tcSearch, setTcSearch] = useState('');
  const [tcMaterialFilter, setTcMaterialFilter] = useState('All');

  // PO & TC Modals & Preview States
  const [isAddPoModalOpen, setIsAddPoModalOpen] = useState(false);
  const [isEditPoModalOpen, setIsEditPoModalOpen] = useState(false);
  const [deletePoConfirm, setDeletePoConfirm] = useState(null);

  const [isAddTcModalOpen, setIsAddTcModalOpen] = useState(false);
  const [isEditTcModalOpen, setIsEditTcModalOpen] = useState(false);
  const [deleteTcConfirm, setDeleteTcConfirm] = useState(null);

  const [previewInvoice, setPreviewInvoice] = useState(null);
  const [previewTc, setPreviewTc] = useState(null);

  // Modals for Stock
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Metallurgy Presets for Quick Form Population
  const TC_PRESETS = {
    ss316: {
      material: 'SS316',
      unsNumber: 'UNS S31600',
      astmSpec: 'ASTM A 182 / A 182M',
      meltingPractice: 'Electric Induction Furnace',
      mfgMethod: 'Forged & CNC Machined',
      heatTreatment: 'Solution annealed at 1050°C soaking for 3 hours after Water Quenched',
      mech: { tensileStd: 515, tensileAct: 582, yieldStd: 205, yieldAct: 248, elongStd: 50, elongAct: 56.4, hardnessStd: 83, hardnessAct: '76 - 78' },
      chem: [
        { elem: 'C%', min: '-', max: 0.08, act: 0.028 },
        { elem: 'Mn%', min: '-', max: 2.00, act: 1.190 },
        { elem: 'P%', min: '-', max: 0.045, act: 0.033 },
        { elem: 'S%', min: '-', max: 0.030, act: 0.007 },
        { elem: 'Si%', min: '-', max: 1.00, act: 0.628 },
        { elem: 'Ni%', min: 10.00, max: 14.00, act: 12.030 },
        { elem: 'Cr%', min: 16.00, max: 18.00, act: 16.670 },
        { elem: 'Mo%', min: 2.00, max: 3.00, act: 2.130 },
      ],
    },
    inconel625: {
      material: 'Inconel 625 / Alloy 625',
      unsNumber: 'UNS N06625',
      astmSpec: 'ASTM B 564 / ASME SB 564',
      meltingPractice: 'VIM + ESR',
      mfgMethod: 'Hot Forged & Precision CNC Turned',
      heatTreatment: 'Annealed at 980°C for 2 hours, Air Cooled',
      mech: { tensileStd: 827, tensileAct: 935, yieldStd: 414, yieldAct: 512, elongStd: 30, elongAct: 42.0, hardnessStd: 25, hardnessAct: '20 - 22 HRC' },
      chem: [
        { elem: 'C%', min: '-', max: 0.10, act: 0.035 },
        { elem: 'Mn%', min: '-', max: 0.50, act: 0.220 },
        { elem: 'P%', min: '-', max: 0.015, act: 0.009 },
        { elem: 'S%', min: '-', max: 0.015, act: 0.004 },
        { elem: 'Si%', min: '-', max: 0.50, act: 0.280 },
        { elem: 'Ni%', min: 58.00, max: '-', act: 61.500 },
        { elem: 'Cr%', min: 20.00, max: 23.00, act: 22.400 },
        { elem: 'Mo%', min: 8.00, max: 10.00, act: 9.250 },
      ],
    },
    duplex2507: {
      material: 'Super Duplex 2507',
      unsNumber: 'UNS S32750',
      astmSpec: 'ASTM A 182 / A 182M F53',
      meltingPractice: 'AOD + EAF',
      mfgMethod: 'Forged & Finish Machined',
      heatTreatment: 'Solution annealed at 1080°C followed by rapid water quench',
      mech: { tensileStd: 750, tensileAct: 840, yieldStd: 550, yieldAct: 630, elongStd: 25, elongAct: 32.5, hardnessStd: 32, hardnessAct: '28 HRC' },
      chem: [
        { elem: 'C%', min: '-', max: 0.030, act: 0.018 },
        { elem: 'Mn%', min: '-', max: 1.20, act: 0.850 },
        { elem: 'P%', min: '-', max: 0.035, act: 0.022 },
        { elem: 'S%', min: '-', max: 0.020, act: 0.005 },
        { elem: 'Si%', min: '-', max: 0.80, act: 0.450 },
        { elem: 'Ni%', min: 6.00, max: 8.00, act: 7.120 },
        { elem: 'Cr%', min: 24.00, max: 26.00, act: 25.300 },
        { elem: 'Mo%', min: 3.00, max: 5.00, act: 3.850 },
      ],
    },
    softIron: {
      material: 'Soft Iron',
      unsNumber: 'UNS K01501',
      astmSpec: 'ASME B16.20 Soft Iron',
      meltingPractice: 'Electric Arc Furnace',
      mfgMethod: 'Cold Rolled & Annealed',
      heatTreatment: 'Full Dead Soft Anneal at 900°C',
      mech: { tensileStd: 350, tensileAct: 380, yieldStd: 180, yieldAct: 210, elongStd: 40, elongAct: 46.0, hardnessStd: 90, hardnessAct: '84 HRB max' },
      chem: [
        { elem: 'C%', min: '-', max: 0.06, act: 0.025 },
        { elem: 'Mn%', min: '-', max: 0.40, act: 0.280 },
        { elem: 'P%', min: '-', max: 0.025, act: 0.012 },
        { elem: 'S%', min: '-', max: 0.025, act: 0.008 },
        { elem: 'Si%', min: '-', max: 0.10, act: 0.040 },
        { elem: 'Ni%', min: '-', max: '-', act: '-' },
        { elem: 'Cr%', min: '-', max: '-', act: '-' },
        { elem: 'Mo%', min: '-', max: '-', act: '-' },
      ],
    },
  };

  const defaultPoForm = {
    poNumber: '',
    customerName: '',
    poDate: '07 / 01 / 2025',
    orderDate: '06 / 01 / 2025',
    orderId: '42510',
    status: 'Completed',
    deliveryStatus: 'Delivered',
    currency: 'GBP',
    invoiceNumber: '20384/A dt. 18.04.2025',
    exporterRef: '0411023390',
    buyersOrderRef: '',
    portOfLoading: 'CHENNAI, INDIA',
    portOfDischarge: 'UNITED KINGDOM',
    preCarriage: 'AIR (DHL EXPRESS)',
    items: [
      {
        serialNo: 1,
        item: 'R 55 OCT Alloy 625',
        orderQty: 2,
        rawMaterialProcessing: true,
        heatTreatment: true,
        finalMachining: true,
        inspectionQA: true,
        otherProcess: true,
        platingProcess: true,
        packing: true,
        pendingQty: 0,
        invoiceLabel: 'Invoice 19694 (Qty: 2)',
        invoiceNo: '19694',
        tcName: 'E-42510-1',
        hsnCode: '73269099',
        unitPrice: 285.0,
      },
    ],
  };

  const defaultTcForm = {
    id: '',
    customerName: '',
    poNumber: '',
    poDate: '18/02/2025',
    orderId: '41563',
    orderDate: '17/02/2025',
    tcId: '50705',
    tcName: 'E-41563-1',
    tcDate: '18/02/2025',
    ring: 'SR 24 OCT',
    material: 'SS316',
    heatCode: '24L-18C051',
    unsNumber: 'UNS S31600',
    quantity: "2 No's",
    astmSpec: 'ASTM A 182 / A 182M',
    meltingPractice: 'Electric Induction Furnace',
    mfgMethod: 'Forged & CNC Machined',
    batchNo: '241121A01',
    heatTreatment: 'Solution annealed at 1050°C soaking for 3 hours after Water Quenched',
    mech: {
      tensileStd: 515,
      tensileAct: 582,
      yieldStd: 205,
      yieldAct: 248,
      elongStd: 50,
      elongAct: 56.4,
      hardnessStd: 83,
      hardnessAct: '76 - 78',
    },
    chem: [
      { elem: 'C%', min: '-', max: 0.08, act: 0.028 },
      { elem: 'Mn%', min: '-', max: 2.00, act: 1.190 },
      { elem: 'P%', min: '-', max: 0.045, act: 0.033 },
      { elem: 'S%', min: '-', max: 0.030, act: 0.007 },
      { elem: 'Si%', min: '-', max: 1.00, act: 0.628 },
      { elem: 'Ni%', min: 10.00, max: 14.00, act: 12.030 },
      { elem: 'Cr%', min: 16.00, max: 18.00, act: 16.670 },
      { elem: 'Mo%', min: 2.00, max: 3.00, act: 2.130 },
    ],
  };

  const [poFormData, setPoFormData] = useState(defaultPoForm);
  const [tcFormData, setTcFormData] = useState(defaultTcForm);

  // Admin Login Gate State (when unauthenticated)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Add / Edit Form State for Stock
  const [formData, setFormData] = useState({
    itemCode: '',
    product: '',
    category: 'Metallic Gaskets',
    profile: 'Style R Octagonal RTJ',
    material: 'SS 316 / 316L',
    pressureClass: 'Class 1500',
    npsSize: '2"',
    ringNumber: 'R-24',
    quantity: 100,
    status: 'In Stock',
    location: 'Warehouse A - Bay 12',
    standard: 'ASME B16.20 / API 6A',
  });

  // Sync auth, stock, users & portal data (Local Cache + Hostinger Remote MySQL)
  useEffect(() => {
    const syncData = () => {
      setCurrentUser(getCurrentUser());
      setItems(getStockItems());
      setUsersList(getRegisteredUsers());
      setPosList(getStoredPurchaseOrders());
      setTcsList(getStoredTestCertificates());
    };

    syncData();

    // Background fetch live data from Hostinger MySQL API
    syncRemoteStockItems().then((liveItems) => {
      if (liveItems && liveItems.length > 0) setItems(liveItems);
    });
    syncRemoteUsers().then((liveUsers) => {
      if (liveUsers && liveUsers.length > 0) setUsersList(liveUsers);
    });

    window.addEventListener('auth-changed', syncData);
    window.addEventListener('stock-updated', syncData);
    window.addEventListener('txco_stock_updated', syncData);
    window.addEventListener('storage', syncData);
    window.addEventListener('txco_portal_data_updated', syncData);

    return () => {
      window.removeEventListener('auth-changed', syncData);
      window.removeEventListener('stock-updated', syncData);
      window.removeEventListener('txco_stock_updated', syncData);
      window.removeEventListener('storage', syncData);
      window.removeEventListener('txco_portal_data_updated', syncData);
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Sign Out Handler - Guaranteed Rock Solid
  const handleSignOut = () => {
    logoutUser();
    setCurrentUser(null);
    showToast('Signed out of Administrator Console.');
    router.push('/login');
  };

  // Admin Gate Login
  const handleAdminGateLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await loginUser(loginEmail, loginPassword);
      if (!res.success) {
        setLoginError(res.message);
        setLoginLoading(false);
        return;
      }

      if (res.user.role !== 'admin') {
        setLoginError('Account verified, but administrator privileges are required to access this dashboard.');
        setLoginLoading(false);
        return;
      }

      setCurrentUser(res.user);
      showToast('Authenticated as Administrator.');
    } catch (err) {
      setLoginError('Failed to authenticate. Please check your connection.');
    } finally {
      setLoginLoading(false);
    }
  };

  // KPI Metrics Calculation
  const metrics = useMemo(() => {
    const totalSkus = items.length;
    const inStockCount = items.filter((i) => i.status === 'In Stock').length;
    const readyToShipCount = items.filter((i) => i.status === 'Ready to Ship').length;
    const leadTimeCount = items.filter((i) => i.status.includes('Lead Time')).length;
    const totalUnits = items.reduce((acc, curr) => acc + (Number(curr.quantity) || 0), 0);
    const lowStockCount = items.filter((i) => (Number(i.quantity) || 0) < 50).length;

    return {
      totalSkus,
      inStockCount,
      readyToShipCount,
      leadTimeCount,
      totalUnits,
      lowStockCount,
    };
  }, [items]);

  // Filtered Items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCat = selectedCategory === 'All Categories' || item.category === selectedCategory;
      const matchStat = selectedStatus === 'All Statuses' || item.status === selectedStatus;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.itemCode.toLowerCase().includes(q) ||
        item.product.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        (item.ringNumber && item.ringNumber.toLowerCase().includes(q)) ||
        (item.npsSize && item.npsSize.toLowerCase().includes(q));

      return matchCat && matchStat && matchSearch;
    });
  }, [items, selectedCategory, selectedStatus, searchQuery]);

  // Quick Quantity Stepper
  const handleQuickQtyAdjust = async (item, delta) => {
    const newQty = Math.max(0, (Number(item.quantity) || 0) + delta);
    await updateStockItem(item.id || item.itemCode, { quantity: newQty });
  };

  // Reset Defaults
  const handleResetDefaults = () => {
    if (confirm('Reset entire inventory back to factory default 15 items?')) {
      resetStockItems();
      showToast('Inventory reset to factory default data.');
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      itemCode: item.itemCode,
      product: item.product,
      category: item.category,
      profile: item.profile,
      material: item.material,
      pressureClass: item.pressureClass,
      npsSize: item.npsSize,
      ringNumber: item.ringNumber || '',
      quantity: item.quantity,
      status: item.status,
      location: item.location || 'Warehouse A - Bay 12',
      standard: item.standard || 'ASME B16.20 / API 6A',
    });
    setIsEditModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;
    await updateStockItem(editingItem.id || editingItem.itemCode, formData);
    setIsEditModalOpen(false);
    setEditingItem(null);
    showToast(`Updated ${formData.itemCode} successfully.`);
  };

  // Save Add
  const handleSaveAdd = async (e) => {
    e.preventDefault();
    if (!formData.itemCode.trim() || !formData.product.trim()) {
      alert('Please fill out Item Code and Product description.');
      return;
    }
    await addStockItem(formData);
    setIsAddModalOpen(false);
    showToast(`Added ${formData.itemCode} to live inventory.`);
  };

  // Delete
  const handleDeleteItem = async (id) => {
    await deleteStockItem(id);
    setDeleteConfirmId(null);
    showToast('Item removed from inventory.');
  };

  // =========================================================================
  // PURCHASE ORDERS (PO) HANDLERS
  // =========================================================================
  const handleOpenAddPo = () => {
    const randomOrderId = `${Math.floor(42000 + Math.random() * 5000)}`;
    const randomPoNum = `${Math.floor(23800 + Math.random() * 500)}`;
    setPoFormData({
      ...defaultPoForm,
      poNumber: randomPoNum,
      orderId: randomOrderId,
      invoiceNumber: `20${Math.floor(300 + Math.random() * 600)}/A dt. ${new Date().toLocaleDateString('en-GB')}`,
      items: [
        {
          serialNo: 1,
          item: 'R 55 OCT Alloy 625',
          orderQty: 2,
          rawMaterialProcessing: true,
          heatTreatment: true,
          finalMachining: true,
          inspectionQA: true,
          otherProcess: true,
          platingProcess: true,
          packing: true,
          pendingQty: 0,
          invoiceLabel: `Invoice 19${Math.floor(600 + Math.random() * 300)} (Qty: 2)`,
          invoiceNo: `19${Math.floor(600 + Math.random() * 300)}`,
          tcName: `E-${randomOrderId}-1`,
          hsnCode: '73269099',
          unitPrice: 285.0,
        },
      ],
    });
    setIsAddPoModalOpen(true);
  };

  const handleOpenEditPo = (po) => {
    setPoFormData(JSON.parse(JSON.stringify(po)));
    setIsEditPoModalOpen(true);
  };

  const handleSavePoSubmit = (e) => {
    e.preventDefault();
    if (!poFormData.poNumber?.trim()) {
      alert('Please provide a valid Purchase Order number.');
      return;
    }
    if (!poFormData.customerName?.trim()) {
      alert('Please specify the customer or client company name.');
      return;
    }

    const saved = saveStoredPurchaseOrder({
      ...poFormData,
      totalItems: poFormData.items?.length || 0,
    });
    setPosList(saved);
    setIsAddPoModalOpen(false);
    setIsEditPoModalOpen(false);
    showToast(`Purchase Order #${poFormData.poNumber} successfully saved.`);
  };

  const handleDeletePoSubmit = (poNumber) => {
    const updated = deleteStoredPurchaseOrder(poNumber);
    setPosList(updated);
    setDeletePoConfirm(null);
    showToast(`Purchase Order #${poNumber} deleted from system.`);
  };

  const handleAddPoItem = () => {
    const nextSerial = (poFormData.items?.length || 0) + 1;
    const invNo = `19${Math.floor(500 + Math.random() * 400)}`;
    const newItem = {
      serialNo: nextSerial,
      item: 'R 24 OCT SS316',
      orderQty: 2,
      rawMaterialProcessing: true,
      heatTreatment: true,
      finalMachining: true,
      inspectionQA: true,
      otherProcess: true,
      platingProcess: true,
      packing: true,
      pendingQty: 0,
      invoiceLabel: `Invoice ${invNo} (Qty: 2)`,
      invoiceNo: invNo,
      tcName: `E-${poFormData.orderId || '42000'}-${nextSerial}`,
      hsnCode: '73269099',
      unitPrice: 195.0,
    };
    setPoFormData({
      ...poFormData,
      items: [...(poFormData.items || []), newItem],
    });
  };

  const handleRemovePoItem = (idx) => {
    if ((poFormData.items?.length || 0) <= 1) {
      alert('A Purchase Order must contain at least one line item.');
      return;
    }
    const updated = poFormData.items.filter((_, i) => i !== idx).map((it, i) => ({
      ...it,
      serialNo: i + 1,
    }));
    setPoFormData({
      ...poFormData,
      items: updated,
    });
  };

  const handleToggleAllStages = (itemIdx, status) => {
    const itemsCopy = [...(poFormData.items || [])];
    if (!itemsCopy[itemIdx]) return;
    itemsCopy[itemIdx] = {
      ...itemsCopy[itemIdx],
      rawMaterialProcessing: status,
      heatTreatment: status,
      finalMachining: status,
      inspectionQA: status,
      otherProcess: status,
      platingProcess: status,
      packing: status,
    };
    setPoFormData({
      ...poFormData,
      items: itemsCopy,
    });
  };

  // =========================================================================
  // TEST CERTIFICATES (TC) HANDLERS
  // =========================================================================
  const handleOpenAddTc = () => {
    const tcNum = `${Math.floor(50700 + Math.random() * 3000)}`;
    const orderNum = `${Math.floor(41500 + Math.random() * 3000)}`;
    setTcFormData({
      ...defaultTcForm,
      id: `TC-${Date.now()}`,
      tcId: tcNum,
      orderId: orderNum,
      tcName: `E-${orderNum}-1`,
    });
    setIsAddTcModalOpen(true);
  };

  const handleOpenEditTc = (tc) => {
    setTcFormData(JSON.parse(JSON.stringify(tc)));
    setIsEditTcModalOpen(true);
  };

  const handleSaveTcSubmit = (e) => {
    e.preventDefault();
    if (!tcFormData.tcName?.trim()) {
      alert('Please specify the Test Certificate Name (e.g. E-41563-1).');
      return;
    }
    if (!tcFormData.customerName?.trim()) {
      alert('Please provide the Customer Name.');
      return;
    }

    const tcRecord = {
      ...tcFormData,
      id: tcFormData.id || `TC-${Date.now()}`,
    };
    const saved = saveStoredTestCertificate(tcRecord);
    setTcsList(saved);
    setIsAddTcModalOpen(false);
    setIsEditTcModalOpen(false);
    showToast(`Test Certificate ${tcFormData.tcName} successfully saved.`);
  };

  const handleDeleteTcSubmit = (id) => {
    const updated = deleteStoredTestCertificate(id);
    setTcsList(updated);
    setDeleteTcConfirm(null);
    showToast(`Test Certificate removed.`);
  };

  const handleApplyTcPreset = (presetKey) => {
    const preset = TC_PRESETS[presetKey];
    if (!preset) return;
    setTcFormData((prev) => ({
      ...prev,
      material: preset.material,
      unsNumber: preset.unsNumber,
      astmSpec: preset.astmSpec,
      meltingPractice: preset.meltingPractice,
      mfgMethod: preset.mfgMethod,
      heatTreatment: preset.heatTreatment,
      mech: { ...preset.mech },
      chem: JSON.parse(JSON.stringify(preset.chem)),
    }));
    showToast(`Applied ${preset.material} metallurgy & chemical test specifications.`);
  };

  // =========================================================================
  // FILTERED LISTS FOR POS & TEST CERTIFICATES
  // =========================================================================
  const filteredPos = useMemo(() => {
    return posList.filter((po) => {
      const q = poSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        po.poNumber?.toLowerCase().includes(q) ||
        po.customerName?.toLowerCase().includes(q) ||
        po.orderId?.toLowerCase().includes(q) ||
        po.items?.some((it) => it.item?.toLowerCase().includes(q));

      const matchStatus =
        poStatusFilter === 'All' ||
        po.status?.toLowerCase() === poStatusFilter.toLowerCase();

      return matchSearch && matchStatus;
    });
  }, [posList, poSearch, poStatusFilter]);

  const filteredTcs = useMemo(() => {
    return tcsList.filter((tc) => {
      const q = tcSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        tc.tcName?.toLowerCase().includes(q) ||
        tc.tcId?.toLowerCase().includes(q) ||
        tc.poNumber?.toLowerCase().includes(q) ||
        tc.customerName?.toLowerCase().includes(q) ||
        tc.heatCode?.toLowerCase().includes(q) ||
        tc.ring?.toLowerCase().includes(q) ||
        tc.material?.toLowerCase().includes(q);

      const matchMaterial =
        tcMaterialFilter === 'All' ||
        tc.material?.toLowerCase().includes(tcMaterialFilter.toLowerCase());

      return matchSearch && matchMaterial;
    });
  }, [tcsList, tcSearch, tcMaterialFilter]);

  const userIsAdmin = currentUser && currentUser.role === 'admin';

  // =========================================================================
  // VIEW 1: UNAUTHENTICATED ADMIN LOGIN GATE
  // =========================================================================
  if (!userIsAdmin) {
    return (
      <div className="admin-login-gate">
        <div className="admin-gate-card">
          <div className="admin-gate-icon-circle">
            <img
              src="/images/logo/txco-logo-new.avif"
              alt="TXCO Logo"
              className="admin-gate-logo"
            />
          </div>

          <h2 className="admin-gate-title">TXCO Operations Console</h2>
          <p className="admin-gate-sub">
            Administrative privileges are required to access live stock inventory and warehouse metrics.
          </p>

          {loginError && (
            <div
              style={{
                padding: '0.8rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                color: '#dc2626',
                fontSize: '0.86rem',
                marginBottom: '1.2rem',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <AlertTriangle size={18} style={{ flexShrink: 0 }} />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleAdminGateLogin} style={{ display: 'flex', flexTrans: 'column', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '0.35rem' }}>
                Administrator Email
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  placeholder="admin@txco.com"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '0.35rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.7rem 2.6rem 0.7rem 2.4rem',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                  }}
                  aria-label="Toggle Password Visibility"
                  title={showLoginPassword ? 'Hide password' : 'Show password'}
                >
                  {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="admin-btn-primary"
              style={{
                width: '100%',
                padding: '0.8rem',
                justifyContent: 'center',
                fontSize: '0.95rem',
                marginTop: '0.5rem',
              }}
            >
              {loginLoading ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Unlock Admin Dashboard</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div style={{ marginTop: '1.4rem' }}>
            <Link
              href="/"
              style={{
                color: '#64748b',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Home size={14} />
              <span>Return to TXCO Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTICATED MODERN ENTERPRISE DASHBOARD
  // =========================================================================
  return (
    <div className="admin-layout-root">
      {/* Toast Alert */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            backgroundColor: '#052C58',
            color: '#ffffff',
            padding: '0.8rem 1.4rem',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.92rem',
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} color="#018F5D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ===================================================================
          LEFT DASHBOARD SIDEBAR
          =================================================================== */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="admin-sidebar-header">
          <Link href="/admin/stock" className="admin-brand-link">
            <img
              src="/images/logo/txco-footer-logo.avif"
              alt="TXCO Logo"
              className="admin-brand-logo"
            />
          </Link>
        </div>

        {/* Sidebar Nav Items */}
        <div className="admin-sidebar-nav">
          <div className="admin-nav-section-title">Operations</div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('stock');
              setSidebarOpen(false);
            }}
            className={`admin-nav-item ${activeTab === 'stock' ? 'active' : ''}`}
          >
            <div className="admin-nav-item-content">
              <Boxes size={18} />
              <span>Stock & Inventory</span>
            </div>
            <span className="admin-nav-pill">{items.length}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('pos');
              setSidebarOpen(false);
            }}
            className={`admin-nav-item ${activeTab === 'pos' ? 'active' : ''}`}
          >
            <div className="admin-nav-item-content">
              <PackageCheck size={18} />
              <span>Purchase Orders (POs)</span>
            </div>
            <span className="admin-nav-pill">{posList.length}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('certificates');
              setSidebarOpen(false);
            }}
            className={`admin-nav-item ${activeTab === 'certificates' ? 'active' : ''}`}
          >
            <div className="admin-nav-item-content">
              <FileCheck2 size={18} />
              <span>Test Certificates</span>
            </div>
            <span className="admin-nav-pill">{tcsList.length}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('enquiries');
              setSidebarOpen(false);
            }}
            className={`admin-nav-item ${activeTab === 'enquiries' ? 'active' : ''}`}
          >
            <div className="admin-nav-item-content">
              <MessageSquare size={18} />
              <span>Customer Inquiries</span>
            </div>
            <span className="admin-nav-pill" style={{ backgroundColor: '#018F5D', color: '#ffffff' }}>Live</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('users');
              setSidebarOpen(false);
            }}
            className={`admin-nav-item ${activeTab === 'users' ? 'active' : ''}`}
          >
            <div className="admin-nav-item-content">
              <Users size={18} />
              <span>Registered Accounts</span>
            </div>
            <span className="admin-nav-pill">{usersList.length}</span>
          </button>

          <div className="admin-nav-section-title" style={{ marginTop: '0.8rem' }}>
            External Navigation
          </div>

          <Link
            href="/portal"
            target="_blank"
            className="admin-nav-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="admin-nav-item-content">
              <FileCheck2 size={18} />
              <span>Client Portal (POs &amp; TCs)</span>
            </div>
          </Link>

          <Link
            href="/stock-list"
            target="_blank"
            className="admin-nav-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="admin-nav-item-content">
              <ExternalLink size={18} />
              <span>Public Stock List</span>
            </div>
          </Link>

          <Link
            href="/"
            className="admin-nav-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="admin-nav-item-content">
              <Home size={18} />
              <span>Main Website</span>
            </div>
          </Link>
        </div>

        {/* Sidebar Footer with Profile & WORKING Sign Out */}
        <div className="admin-sidebar-footer">
          <div className="admin-user-profile-badge">
            <div className="admin-avatar">
              {currentUser.name
                ? currentUser.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase()
                : 'AD'}
            </div>
            <div className="admin-user-details">
              <div className="admin-user-name">{currentUser.name}</div>
              <div className="admin-user-role">
                <Shield size={11} />
                <span>Super Administrator</span>
              </div>
            </div>
          </div>

          {/* Dedicated Working Sign Out Button */}
          <button
            type="button"
            onClick={handleSignOut}
            className="admin-sidebar-signout-btn"
            title="Log out of admin session and return to login screen"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ===================================================================
          MAIN CONTENT AREA
          =================================================================== */}
      <div className="admin-main">
        {/* Top Header Bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="admin-mobile-toggle"
              aria-label="Toggle Navigation"
            >
              <MenuIcon size={22} />
            </button>

            <div className="admin-breadcrumb">
              <span className="admin-breadcrumb-root">Admin Console</span>
              <ChevronRight size={14} color="#94a3b8" />
              <span className="admin-breadcrumb-current">
                {activeTab === 'stock' && 'Stock & Inventory Management'}
                {activeTab === 'pos' && 'Customer Purchase Orders & Stages'}
                {activeTab === 'certificates' && 'EN 10204-3.1 Test Certificates'}
                {activeTab === 'enquiries' && 'Customer Enquiries & RFQ Hub'}
                {activeTab === 'users' && 'Registered Customer Accounts'}
              </span>
            </div>
          </div>

          <div className="admin-topbar-right">
            {activeTab === 'stock' && (
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    itemCode: `TXCO-${Math.floor(1000 + Math.random() * 9000)}`,
                    product: '',
                    category: 'Metallic Gaskets',
                    profile: 'Style R Octagonal RTJ',
                    material: 'SS 316 / 316L',
                    pressureClass: 'Class 1500',
                    npsSize: '2"',
                    ringNumber: 'R-24',
                    quantity: 50,
                    status: 'In Stock',
                    location: 'Warehouse A - Bay 12',
                    standard: 'ASME B16.20 / API 6A',
                  });
                  setIsAddModalOpen(true);
                }}
                className="admin-btn-primary"
              >
                <Plus size={16} />
                <span>Add Stock Item</span>
              </button>
            )}

            {activeTab === 'pos' && (
              <button
                type="button"
                onClick={handleOpenAddPo}
                className="admin-btn-primary"
              >
                <Plus size={16} />
                <span>Add Purchase Order</span>
              </button>
            )}

            {activeTab === 'certificates' && (
              <button
                type="button"
                onClick={handleOpenAddTc}
                className="admin-btn-primary"
              >
                <Plus size={16} />
                <span>Add Test Certificate</span>
              </button>
            )}

            {/* Quick Topbar Sign Out Button */}
            <button
              type="button"
              onClick={handleSignOut}
              className="admin-top-signout-btn"
              title="Log out"
            >
              <LogOut size={15} />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <div className="admin-content-wrapper">
          {/* ===============================================================
              TAB 1: STOCK & INVENTORY MANAGEMENT
              =============================================================== */}
          {activeTab === 'stock' && (
            <>
              {/* 5 KPI Stat Cards */}
              <div className="admin-kpi-grid">
                <div className="admin-kpi-card">
                  <div className="admin-kpi-header">
                    <span className="admin-kpi-title">Total Active SKUs</span>
                    <div className="admin-kpi-icon-box" style={{ background: '#f1f5f9', color: '#052C58' }}>
                      <Package size={20} />
                    </div>
                  </div>
                  <div className="admin-kpi-value">{metrics.totalSkus}</div>
                  <div className="admin-kpi-sub">
                    <span>{metrics.totalUnits.toLocaleString()} units across bays</span>
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div className="admin-kpi-header">
                    <span className="admin-kpi-title">In Stock</span>
                    <div className="admin-kpi-icon-box" style={{ background: '#ecfdf5', color: '#047857' }}>
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="admin-kpi-value" style={{ color: '#047857' }}>
                    {metrics.inStockCount}
                  </div>
                  <div className="admin-kpi-sub" style={{ color: '#047857' }}>
                    <span>Ready for instant dispatch</span>
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div className="admin-kpi-header">
                    <span className="admin-kpi-title">Ready to Ship</span>
                    <div className="admin-kpi-icon-box" style={{ background: '#f0f9ff', color: '#0284c7' }}>
                      <TrendingUp size={20} />
                    </div>
                  </div>
                  <div className="admin-kpi-value" style={{ color: '#0284c7' }}>
                    {metrics.readyToShipCount}
                  </div>
                  <div className="admin-kpi-sub" style={{ color: '#0284c7' }}>
                    <span>Packaged & certified</span>
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div className="admin-kpi-header">
                    <span className="admin-kpi-title">Lead Time / MTO</span>
                    <div className="admin-kpi-icon-box" style={{ background: '#fffbeb', color: '#b45309' }}>
                      <Clock size={20} />
                    </div>
                  </div>
                  <div className="admin-kpi-value" style={{ color: '#b45309' }}>
                    {metrics.leadTimeCount}
                  </div>
                  <div className="admin-kpi-sub" style={{ color: '#b45309' }}>
                    <span>Custom fast-track fab</span>
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div className="admin-kpi-header">
                    <span className="admin-kpi-title">Low Stock Alert</span>
                    <div className="admin-kpi-icon-box" style={{ background: '#fef2f2', color: '#dc2626' }}>
                      <AlertTriangle size={20} />
                    </div>
                  </div>
                  <div className="admin-kpi-value" style={{ color: metrics.lowStockCount > 0 ? '#dc2626' : '#64748b' }}>
                    {metrics.lowStockCount}
                  </div>
                  <div className="admin-kpi-sub">
                    <span>Items with &lt; 50 units</span>
                  </div>
                </div>
              </div>

              {/* Toolbar & Filter Card */}
              <div className="admin-toolbar-card">
                <div className="admin-search-row">
                  <div className="admin-search-input-wrapper">
                    <Search size={16} />
                    <input
                      type="text"
                      className="admin-search-input"
                      placeholder="Search by SKU Code, Product Name, Material, or Ring Number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <select
                    className="admin-filter-select"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="All Statuses">All Statuses</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Ready to Ship">Ready to Ship</option>
                    <option value="Lead Time (2-3 Days)">Lead Time (2-3 Days)</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="admin-btn-secondary"
                    title="Reset inventory to default 15 items"
                  >
                    <RotateCcw size={15} />
                    <span>Reset Defaults</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        itemCode: `TXCO-${Math.floor(1000 + Math.random() * 9000)}`,
                        product: '',
                        category: 'Metallic Gaskets',
                        profile: 'Style R Octagonal RTJ',
                        material: 'SS 316 / 316L',
                        pressureClass: 'Class 1500',
                        npsSize: '2"',
                        ringNumber: 'R-24',
                        quantity: 50,
                        status: 'In Stock',
                        location: 'Warehouse A - Bay 12',
                        standard: 'ASME B16.20 / API 6A',
                      });
                      setIsAddModalOpen(true);
                    }}
                    className="admin-btn-primary"
                  >
                    <Plus size={15} />
                    <span>+ Add Item</span>
                  </button>
                </div>

                {/* Category Pills */}
                <div className="admin-category-pills-row">
                  {stockCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`admin-cat-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Enterprise Data Table */}
              <div className="admin-table-card">
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Item Code & Description</th>
                        <th>Category & Profile</th>
                        <th>Material & Rating</th>
                        <th>Size / Ring</th>
                        <th>Location</th>
                        <th style={{ textAlign: 'center' }}>In Stock Units</th>
                        <th>Status</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.length === 0 ? (
                        <tr>
                          <td colSpan="8" style={{ padding: '3.5rem', textAlign: 'center', color: '#94a3b8' }}>
                            <Boxes size={36} style={{ margin: '0 auto 0.8rem auto', opacity: 0.5 }} />
                            <div>No stock items match your search and filter criteria.</div>
                          </td>
                        </tr>
                      ) : (
                        filteredItems.map((item) => (
                          <tr key={item.id || item.itemCode}>
                            {/* SKU & Product */}
                            <td>
                              <span className="admin-sku-badge">{item.itemCode}</span>
                              <div style={{ fontWeight: 600, color: '#1e293b', marginTop: '0.2rem' }}>
                                {item.product}
                              </div>
                            </td>

                            {/* Category & Profile */}
                            <td>
                              <div style={{ fontWeight: 600, color: '#052C58' }}>{item.category}</div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.profile}</div>
                            </td>

                            {/* Material & Pressure Class */}
                            <td>
                              <div style={{ fontWeight: 600, color: '#018F5D' }}>{item.material}</div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.pressureClass}</div>
                            </td>

                            {/* Size & Ring */}
                            <td>
                              <div style={{ fontWeight: 600, color: '#1e293b' }}>{item.npsSize}</div>
                              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                                {item.ringNumber ? `Ring: ${item.ringNumber}` : 'Standard'}
                              </div>
                            </td>

                            {/* Warehouse Bay */}
                            <td>
                              <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 500 }}>
                                {item.location || 'Warehouse A - Bay 12'}
                              </div>
                            </td>

                            {/* Quantity with Steppers */}
                            <td style={{ textAlign: 'center' }}>
                              <div className="admin-qty-stepper">
                                <button
                                  type="button"
                                  onClick={() => handleQuickQtyAdjust(item, -10)}
                                  className="admin-stepper-btn"
                                  title="Decrease by 10"
                                >
                                  -
                                </button>
                                <span className="admin-stepper-val">{item.quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => handleQuickQtyAdjust(item, 10)}
                                  className="admin-stepper-btn"
                                  title="Increase by 10"
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* Status Badge */}
                            <td>
                              <span
                                className={`admin-status-badge ${
                                  item.status === 'In Stock'
                                    ? 'in-stock'
                                    : item.status === 'Ready to Ship'
                                    ? 'ready-to-ship'
                                    : 'lead-time'
                                }`}
                              >
                                {item.status}
                              </span>
                            </td>

                            {/* Actions */}
                            <td>
                              <div className="admin-action-btn-group">
                                <button
                                  type="button"
                                  onClick={() => handleOpenEdit(item)}
                                  className="admin-icon-btn edit"
                                  title="Edit Item Details"
                                >
                                  <Edit2 size={16} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDeleteConfirmId(item.id || item.itemCode)}
                                  className="admin-icon-btn delete"
                                  title="Delete Item"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  style={{
                    padding: '1rem 1.4rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: '#64748b',
                  }}
                >
                  <div>
                    Showing <strong>{filteredItems.length}</strong> of <strong>{items.length}</strong> inventory items
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>Storage Engine: <strong>Local Cache + Hostinger Prepared</strong></span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ===============================================================
              TAB: PURCHASE ORDERS & MANUFACTURING PROGRESS
              =============================================================== */}
          {activeTab === 'pos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div className="admin-table-card">
                <div className="admin-toolbar">
                  <div className="admin-search-box">
                    <Search size={18} className="admin-search-icon" />
                    <input
                      type="text"
                      placeholder="Search PO Number, Customer Name, or Line Item..."
                      value={poSearch}
                      onChange={(e) => setPoSearch(e.target.value)}
                      className="admin-search-input"
                    />
                  </div>

                  <div className="admin-filters-group">
                    <select
                      value={poStatusFilter}
                      onChange={(e) => setPoStatusFilter(e.target.value)}
                      className="admin-filter-select"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Pending">Pending</option>
                    </select>

                    <button
                      type="button"
                      onClick={handleOpenAddPo}
                      className="admin-btn-primary"
                    >
                      <Plus size={15} />
                      <span>+ Add PO</span>
                    </button>
                  </div>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>PO Number &amp; Order ID</th>
                        <th>Customer &amp; Buyer Ref</th>
                        <th>PO / Order Dates</th>
                        <th>Items &amp; Progress</th>
                        <th>Status</th>
                        <th>Invoices &amp; Previews</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPos.length === 0 ? (
                        <tr>
                          <td colSpan="7" style={{ padding: '3.5rem', textAlign: 'center', color: '#94a3b8' }}>
                            <PackageCheck size={36} style={{ margin: '0 auto 0.8rem auto', opacity: 0.5 }} />
                            <div>No Purchase Orders found matching your query.</div>
                            <button
                              type="button"
                              onClick={handleOpenAddPo}
                              className="admin-btn-primary"
                              style={{ marginTop: '0.8rem', display: 'inline-flex' }}
                            >
                              <Plus size={15} />
                              <span>Create New PO</span>
                            </button>
                          </td>
                        </tr>
                      ) : (
                        filteredPos.map((po) => {
                          const totalItems = po.items?.length || 0;
                          const completedItems = po.items?.filter(
                            (it) => it.packing && it.inspectionQA && it.finalMachining
                          ).length || 0;

                          return (
                            <tr key={po.poNumber}>
                              <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span className="admin-sku-badge">PO #{po.poNumber}</span>
                                </div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem' }}>
                                  Order ID: <strong>{po.orderId}</strong>
                                </div>
                              </td>

                              <td>
                                <div style={{ fontWeight: 700, color: '#052C58' }}>{po.customerName}</div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                  {po.buyersOrderRef || `${po.currency || 'GBP'} · Dest: ${po.portOfDischarge || 'Export'}`}
                                </div>
                              </td>

                              <td>
                                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>
                                  PO: {po.poDate}
                                </div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                  Order: {po.orderDate}
                                </div>
                              </td>

                              <td>
                                <div style={{ fontWeight: 600, color: '#0f172a' }}>
                                  {totalItems} {totalItems === 1 ? 'Product' : 'Products'}
                                </div>
                                <div style={{ fontSize: '0.76rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                  <CheckCircle2 size={12} />
                                  <span>{completedItems}/{totalItems} Stages Verified</span>
                                </div>
                              </td>

                              <td>
                                <span
                                  className={`admin-status-badge ${
                                    po.status === 'Completed'
                                      ? 'in-stock'
                                      : po.status === 'In Progress'
                                      ? 'ready-to-ship'
                                      : 'lead-time'
                                  }`}
                                >
                                  {po.status}
                                </span>
                                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '0.2rem' }}>
                                  {po.deliveryStatus || 'In Production'}
                                </div>
                              </td>

                              <td>
                                {po.items && po.items.length > 0 ? (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    <button
                                      type="button"
                                      className="admin-btn-preview-link"
                                      onClick={() => setPreviewInvoice({ po, item: po.items[0] })}
                                      title="Click to preview the customer invoice PDF"
                                    >
                                      <FileText size={14} />
                                      <span>{po.items[0].invoiceLabel || `INV-${po.items[0].invoiceNo}`}</span>
                                    </button>
                                    {po.items.length > 1 && (
                                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                                        +{po.items.length - 1} more invoice slips
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>No Invoices</span>
                                )}
                              </td>

                              <td>
                                <div className="admin-action-btn-group">
                                  <button
                                    type="button"
                                    onClick={() => setPreviewInvoice({ po, item: po.items?.[0] })}
                                    className="admin-icon-btn edit"
                                    title="Preview Invoice PDF"
                                  >
                                    <Eye size={16} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleOpenEditPo(po)}
                                    className="admin-icon-btn edit"
                                    title="Edit PO & Manufacturing Checklist"
                                  >
                                    <Edit2 size={16} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setDeletePoConfirm(po.poNumber)}
                                    className="admin-icon-btn delete"
                                    title="Delete Purchase Order"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  style={{
                    padding: '1rem 1.4rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: '#64748b',
                  }}
                >
                  <div>
                    Showing <strong>{filteredPos.length}</strong> of <strong>{posList.length}</strong> purchase orders
                  </div>
                  <div>
                    Portal Sync: <strong style={{ color: '#018F5D' }}>Active (Instant Customer Updates)</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===============================================================
              TAB: TEST CERTIFICATES (EN 10204-3.1)
              =============================================================== */}
          {activeTab === 'certificates' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div className="admin-table-card">
                <div className="admin-toolbar">
                  <div className="admin-search-box">
                    <Search size={18} className="admin-search-icon" />
                    <input
                      type="text"
                      placeholder="Search TC Name, PO Number, Ring, or Heat Code..."
                      value={tcSearch}
                      onChange={(e) => setTcSearch(e.target.value)}
                      className="admin-search-input"
                    />
                  </div>

                  <div className="admin-filters-group">
                    <select
                      value={tcMaterialFilter}
                      onChange={(e) => setTcMaterialFilter(e.target.value)}
                      className="admin-filter-select"
                    >
                      <option value="All">All Materials</option>
                      <option value="SS316">SS 316 / 316L</option>
                      <option value="625">Alloy 625 / Inconel</option>
                      <option value="2507">Super Duplex 2507</option>
                      <option value="Soft Iron">Soft Iron</option>
                    </select>

                    <button
                      type="button"
                      onClick={handleOpenAddTc}
                      className="admin-btn-primary"
                    >
                      <Plus size={15} />
                      <span>+ Add Certificate</span>
                    </button>
                  </div>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>TC Identifier &amp; ID</th>
                        <th>Customer Name</th>
                        <th>PO Number &amp; Date</th>
                        <th>Ring Profile &amp; Qty</th>
                        <th>Material &amp; Heat Code</th>
                        <th>ASTM Spec &amp; Batch</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTcs.length === 0 ? (
                        <tr>
                          <td colSpan="7" style={{ padding: '3.5rem', textAlign: 'center', color: '#94a3b8' }}>
                            <FileCheck2 size={36} style={{ margin: '0 auto 0.8rem auto', opacity: 0.5 }} />
                            <div>No EN 10204-3.1 Test Certificates found matching criteria.</div>
                            <button
                              type="button"
                              onClick={handleOpenAddTc}
                              className="admin-btn-primary"
                              style={{ marginTop: '0.8rem', display: 'inline-flex' }}
                            >
                              <Plus size={15} />
                              <span>Create Test Certificate</span>
                            </button>
                          </td>
                        </tr>
                      ) : (
                        filteredTcs.map((tc) => (
                          <tr key={tc.id || tc.tcId}>
                            <td>
                              <button
                                type="button"
                                className="admin-btn-preview-link"
                                onClick={() => setPreviewTc(tc)}
                                title="Preview EN 10204-3.1 Certificate PDF"
                              >
                                <Award size={14} />
                                <strong>{tc.tcName}</strong>
                              </button>
                              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem' }}>
                                TC #{tc.tcId} · Date: {tc.tcDate}
                              </div>
                            </td>

                            <td>
                              <div style={{ fontWeight: 700, color: '#052C58' }}>{tc.customerName}</div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                Order: {tc.orderId} ({tc.orderDate})
                              </div>
                            </td>

                            <td>
                              <div style={{ fontWeight: 600, color: '#1e293b' }}>PO# {tc.poNumber}</div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Date: {tc.poDate}</div>
                            </td>

                            <td>
                              <span className="admin-badge-ring">{tc.ring}</span>
                              <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '0.2rem' }}>
                                Qty: <strong>{tc.quantity}</strong>
                              </div>
                            </td>

                            <td>
                              <span className="admin-badge-mat">{tc.material}</span>
                              <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '0.2rem' }}>
                                Heat: <code>{tc.heatCode}</code>
                              </div>
                            </td>

                            <td>
                              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                                {tc.astmSpec}
                              </div>
                              <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                                Batch: {tc.batchNo}
                              </div>
                            </td>

                            <td>
                              <div className="admin-action-btn-group">
                                <button
                                  type="button"
                                  onClick={() => setPreviewTc(tc)}
                                  className="admin-icon-btn edit"
                                  title="Preview EN 10204-3.1 Inspection PDF"
                                >
                                  <Eye size={16} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenEditTc(tc)}
                                  className="admin-icon-btn edit"
                                  title="Edit Certificate Specs"
                                >
                                  <Edit2 size={16} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDeleteTcConfirm(tc.id)}
                                  className="admin-icon-btn delete"
                                  title="Delete Certificate"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  style={{
                    padding: '1rem 1.4rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: '#64748b',
                  }}
                >
                  <div>
                    Showing <strong>{filteredTcs.length}</strong> of <strong>{tcsList.length}</strong> test certificates
                  </div>
                  <div>
                    Standard: <strong>EN 10204 Type 3.1 Certified</strong>
                  </div>
                </div>
              </div>
            </div>
          )}



          {/* ===============================================================
              TAB 3: REGISTERED ACCOUNTS
              =============================================================== */}
          {activeTab === 'users' && (
            <div className="admin-table-card">
              <div style={{ padding: '1.4rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#052C58' }}>Registered User Accounts</h3>
                  <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                    Accounts created via the TXCO registration portal (/register)
                  </div>
                </div>
                <span className="admin-status-badge in-stock">
                  {usersList.length} Active Accounts
                </span>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Email Address</th>
                      <th>Company</th>
                      <th>Role</th>
                      <th>Registered Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.map((user) => (
                      <tr key={user.id || user.email}>
                        <td style={{ fontWeight: 600, color: '#052C58' }}>{user.name}</td>
                        <td style={{ color: '#475569' }}>{user.email}</td>
                        <td style={{ color: '#334155' }}>{user.company || 'Direct Client'}</td>
                        <td>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f1f5f9',
                              color: user.role === 'admin' ? '#1d4ed8' : '#475569',
                            }}
                          >
                            {user.role ? user.role.toUpperCase() : 'CUSTOMER'}
                          </span>
                        </td>
                        <td style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                          {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Active'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ===============================================================
              TAB 4: CUSTOMER ENQUIRIES & RFQs (Contact Page & Chatbot)
              =============================================================== */}
          {activeTab === 'enquiries' && (
            <EnquiriesHub onToast={(msg) => setToastMessage(msg)} />
          )}


        </div>
      </div>

      {/* ===================================================================
          MODAL: ADD NEW STOCK ITEM
          =================================================================== */}
      {isAddModalOpen && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add New Stock Item</h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveAdd}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Item Code / SKU *</label>
                    <input
                      type="text"
                      required
                      value={formData.itemCode}
                      onChange={(e) => setFormData({ ...formData, itemCode: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. TXCO-RTJ-316-24"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Product Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Style R Octagonal Ring Joint"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockCategories.filter((c) => c !== 'All Categories').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Profile / Type</label>
                    <select
                      value={formData.profile}
                      onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockProfiles.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Material</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockMaterials.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Pressure Class</label>
                    <select
                      value={formData.pressureClass}
                      onChange={(e) => setFormData({ ...formData, pressureClass: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockPressureClasses.map((cl) => (
                        <option key={cl} value={cl}>{cl}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">NPS Size</label>
                    <input
                      type="text"
                      value={formData.npsSize}
                      onChange={(e) => setFormData({ ...formData, npsSize: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 2 inch, 4 inch"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Ring Number / Code</label>
                    <input
                      type="text"
                      value={formData.ringNumber}
                      onChange={(e) => setFormData({ ...formData, ringNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. R-24, RX-35"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Initial Quantity in Stock</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                      className="admin-form-input"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="admin-form-select"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Ready to Ship">Ready to Ship</option>
                      <option value="Lead Time (2-3 Days)">Lead Time (2-3 Days)</option>
                    </select>
                  </div>

                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Warehouse Storage Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Warehouse A - Bay 12"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  <Save size={16} />
                  <span>Save Item</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: EDIT STOCK ITEM
          =================================================================== */}
      {isEditModalOpen && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Edit Stock Item: {formData.itemCode}</h3>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Item Code / SKU</label>
                    <input
                      type="text"
                      required
                      value={formData.itemCode}
                      onChange={(e) => setFormData({ ...formData, itemCode: e.target.value })}
                      className="admin-form-input"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Product Name</label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="admin-form-input"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockCategories.filter((c) => c !== 'All Categories').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Profile / Type</label>
                    <select
                      value={formData.profile}
                      onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockProfiles.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Material</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockMaterials.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Pressure Class</label>
                    <select
                      value={formData.pressureClass}
                      onChange={(e) => setFormData({ ...formData, pressureClass: e.target.value })}
                      className="admin-form-select"
                    >
                      {stockPressureClasses.map((cl) => (
                        <option key={cl} value={cl}>{cl}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">NPS Size</label>
                    <input
                      type="text"
                      value={formData.npsSize}
                      onChange={(e) => setFormData({ ...formData, npsSize: e.target.value })}
                      className="admin-form-input"
                      placeholder='e.g. 2", 4"'
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Ring Number / Code</label>
                    <input
                      type="text"
                      value={formData.ringNumber}
                      onChange={(e) => setFormData({ ...formData, ringNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. R-24, RX-35, or -"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Manufacturing Standard</label>
                    <input
                      type="text"
                      value={formData.standard}
                      onChange={(e) => setFormData({ ...formData, standard: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. ASME B16.20 / API 6A"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Quantity in Stock</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                      className="admin-form-input"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="admin-form-select"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Ready to Ship">Ready to Ship</option>
                      <option value="Lead Time (2-3 Days)">Lead Time (2-3 Days)</option>
                    </select>
                  </div>

                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Warehouse Storage Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="admin-form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  <Save size={16} />
                  <span>Update Item</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: DELETE CONFIRMATION
          =================================================================== */}
      {deleteConfirmId && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box" style={{ maxWidth: '420px', textAlign: 'center', padding: '2rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto',
              }}
            >
              <Trash2 size={28} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#052C58', marginBottom: '0.5rem' }}>
              Confirm Deletion
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Are you sure you want to remove item <strong>{deleteConfirmId}</strong> from the inventory catalog? This action will sync immediately.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="admin-btn-secondary"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteItem(deleteConfirmId)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '7px',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Yes, Delete Item
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ===================================================================
          MODAL: ADD / EDIT PURCHASE ORDER (WITH 7-STAGE CHECKLIST)
          =================================================================== */}
      {(isAddPoModalOpen || isEditPoModalOpen) && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box modal-xl">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {isAddPoModalOpen ? 'Create New Purchase Order' : `Edit Purchase Order #${poFormData.poNumber}`}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddPoModalOpen(false);
                  setIsEditPoModalOpen(false);
                }}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSavePoSubmit}>
              <div className="admin-modal-body">
                {/* Section 1: Order Information */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  1. Order &amp; Customer Information
                </div>
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">PO Number *</label>
                    <input
                      type="text"
                      required
                      value={poFormData.poNumber}
                      onChange={(e) => setPoFormData({ ...poFormData, poNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 23848"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Customer / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={poFormData.customerName}
                      onChange={(e) => setPoFormData({ ...poFormData, customerName: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Per A Cause Engineering Ltd."
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">PO Date</label>
                    <input
                      type="text"
                      value={poFormData.poDate}
                      onChange={(e) => setPoFormData({ ...poFormData, poDate: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 07 / 01 / 2025"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Order Date</label>
                    <input
                      type="text"
                      value={poFormData.orderDate}
                      onChange={(e) => setPoFormData({ ...poFormData, orderDate: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 06 / 01 / 2025"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Order ID / Tracking ID</label>
                    <input
                      type="text"
                      value={poFormData.orderId}
                      onChange={(e) => setPoFormData({ ...poFormData, orderId: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 42510"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Status</label>
                    <select
                      value={poFormData.status}
                      onChange={(e) => setPoFormData({ ...poFormData, status: e.target.value })}
                      className="admin-form-select"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Delivery Status</label>
                    <input
                      type="text"
                      value={poFormData.deliveryStatus}
                      onChange={(e) => setPoFormData({ ...poFormData, deliveryStatus: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Dispatched via Air Freight (DHL)"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Currency</label>
                    <select
                      value={poFormData.currency}
                      onChange={(e) => setPoFormData({ ...poFormData, currency: e.target.value })}
                      className="admin-form-select"
                    >
                      <option value="GBP">GBP (£)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                  </div>
                </div>

                {/* Section 2: Export & Shipping References */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', margin: '1.2rem 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  2. Shipping &amp; Master Invoice Details
                </div>
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Master Invoice Number</label>
                    <input
                      type="text"
                      value={poFormData.invoiceNumber}
                      onChange={(e) => setPoFormData({ ...poFormData, invoiceNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 20384/A dt. 18.04.2025"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Exporter Ref</label>
                    <input
                      type="text"
                      value={poFormData.exporterRef}
                      onChange={(e) => setPoFormData({ ...poFormData, exporterRef: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 0411023390"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Port of Loading</label>
                    <input
                      type="text"
                      value={poFormData.portOfLoading}
                      onChange={(e) => setPoFormData({ ...poFormData, portOfLoading: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. CHENNAI, INDIA"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Port of Discharge / Destination</label>
                    <input
                      type="text"
                      value={poFormData.portOfDischarge}
                      onChange={(e) => setPoFormData({ ...poFormData, portOfDischarge: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. UNITED KINGDOM"
                    />
                  </div>
                </div>

                {/* Section 3: Line Items & 7-Stage Manufacturing Progress */}
                <div className="admin-po-items-section">
                  <div className="admin-po-items-header">
                    <div>
                      <div className="admin-po-items-title">
                        Order Products &amp; 7-Stage Manufacturing Checklist
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        Each stage selected will appear as a green checkmark in the customer portal real-time tracking table.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddPoItem}
                      className="admin-btn-primary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                    >
                      <Plus size={14} />
                      <span>+ Add Line Item</span>
                    </button>
                  </div>

                  {poFormData.items?.map((item, idx) => (
                    <div key={idx} className="admin-po-item-card">
                      <div className="admin-po-item-card-header">
                        <span className="admin-item-badge">Product Item #{idx + 1}</span>
                        {poFormData.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemovePoItem(idx)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ef4444',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.2rem',
                            }}
                          >
                            <Trash2 size={13} />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="admin-form-grid" style={{ marginBottom: '0.75rem' }}>
                        <div className="admin-form-group">
                          <label className="admin-form-label">Item / Product Name *</label>
                          <input
                            type="text"
                            required
                            value={item.item}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].item = e.target.value;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                            placeholder="e.g. R 55 OCT Alloy 625"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Order Qty</label>
                          <input
                            type="number"
                            min="1"
                            value={item.orderQty}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].orderQty = Number(e.target.value) || 1;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Unit Price ({poFormData.currency})</label>
                          <input
                            type="number"
                            step="0.01"
                            value={item.unitPrice}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].unitPrice = Number(e.target.value) || 0;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Pending Qty</label>
                          <input
                            type="number"
                            min="0"
                            value={item.pendingQty}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].pendingQty = Number(e.target.value) || 0;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Invoice Label</label>
                          <input
                            type="text"
                            value={item.invoiceLabel}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].invoiceLabel = e.target.value;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                            placeholder="e.g. Invoice 19694 (Qty: 2)"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Invoice No</label>
                          <input
                            type="text"
                            value={item.invoiceNo}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].invoiceNo = e.target.value;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                            placeholder="e.g. 19694"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">Test Cert Ref (TC)</label>
                          <input
                            type="text"
                            value={item.tcName}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].tcName = e.target.value;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                            placeholder="e.g. E-42510-1"
                          />
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-form-label">HSN Code</label>
                          <input
                            type="text"
                            value={item.hsnCode}
                            onChange={(e) => {
                              const updated = [...poFormData.items];
                              updated[idx].hsnCode = e.target.value;
                              setPoFormData({ ...poFormData, items: updated });
                            }}
                            className="admin-form-input"
                            placeholder="e.g. 73269099"
                          />
                        </div>
                      </div>

                      {/* 7 Manufacturing Stage Checkboxes */}
                      <div className="admin-stages-title">
                        <span>7 Manufacturing Stages Progress:</span>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                          <button
                            type="button"
                            className="admin-stages-quick-btn"
                            onClick={() => handleToggleAllStages(idx, true)}
                          >
                            Mark All 7 Completed
                          </button>
                          <button
                            type="button"
                            className="admin-stages-quick-btn"
                            style={{ color: '#64748b' }}
                            onClick={() => handleToggleAllStages(idx, false)}
                          >
                            Uncheck All
                          </button>
                        </div>
                      </div>

                      <div className="admin-stages-grid">
                        {[
                          { key: 'rawMaterialProcessing', label: '1. Raw Material' },
                          { key: 'heatTreatment', label: '2. Heat Treatment' },
                          { key: 'finalMachining', label: '3. Final Machining' },
                          { key: 'inspectionQA', label: '4. QA & Inspection' },
                          { key: 'otherProcess', label: '5. Other Process' },
                          { key: 'platingProcess', label: '6. Plating Process' },
                          { key: 'packing', label: '7. Final Packing' },
                        ].map((stage) => {
                          const isChecked = Boolean(item[stage.key]);
                          return (
                            <label
                              key={stage.key}
                              className={`admin-stage-checkbox-pill ${isChecked ? 'active' : ''}`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => {
                                  const updated = [...poFormData.items];
                                  updated[idx][stage.key] = e.target.checked;
                                  setPoFormData({ ...poFormData, items: updated });
                                }}
                              />
                              <span>{stage.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddPoModalOpen(false);
                    setIsEditPoModalOpen(false);
                  }}
                  className="admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  <Save size={16} />
                  <span>Save Purchase Order</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: ADD / EDIT TEST CERTIFICATE (EN 10204-3.1)
          =================================================================== */}
      {(isAddTcModalOpen || isEditTcModalOpen) && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box modal-xl">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {isAddTcModalOpen ? 'Create Test Certificate (EN 10204-3.1)' : `Edit Test Certificate ${tcFormData.tcName}`}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddTcModalOpen(false);
                  setIsEditTcModalOpen(false);
                }}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveTcSubmit}>
              <div className="admin-modal-body">
                {/* Metallurgy Quick Presets */}
                <div className="admin-presets-bar">
                  <span className="admin-preset-label">Quick Metallurgy Presets:</span>
                  <button
                    type="button"
                    onClick={() => handleApplyTcPreset('ss316')}
                    className="admin-preset-btn"
                  >
                    Load SS 316 / 316L
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyTcPreset('inconel625')}
                    className="admin-preset-btn"
                  >
                    Load Inconel 625
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyTcPreset('duplex2507')}
                    className="admin-preset-btn"
                  >
                    Load Super Duplex 2507
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyTcPreset('softIron')}
                    className="admin-preset-btn"
                  >
                    Load Soft Iron
                  </button>
                </div>

                {/* Section 1: Certificate & Order Metadata */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  1. Identification &amp; Customer References
                </div>
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Certificate Name / Code *</label>
                    <input
                      type="text"
                      required
                      value={tcFormData.tcName}
                      onChange={(e) => setTcFormData({ ...tcFormData, tcName: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. E-41563-1"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Internal TC ID</label>
                    <input
                      type="text"
                      value={tcFormData.tcId}
                      onChange={(e) => setTcFormData({ ...tcFormData, tcId: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 50705"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Issue Date</label>
                    <input
                      type="text"
                      value={tcFormData.tcDate}
                      onChange={(e) => setTcFormData({ ...tcFormData, tcDate: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 18/02/2025"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Customer Name *</label>
                    <input
                      type="text"
                      required
                      value={tcFormData.customerName}
                      onChange={(e) => setTcFormData({ ...tcFormData, customerName: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Shell Global Solutions International"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">PO Number</label>
                    <input
                      type="text"
                      value={tcFormData.poNumber}
                      onChange={(e) => setTcFormData({ ...tcFormData, poNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 23457"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">PO Date</label>
                    <input
                      type="text"
                      value={tcFormData.poDate}
                      onChange={(e) => setTcFormData({ ...tcFormData, poDate: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 18/02/2025"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Order ID</label>
                    <input
                      type="text"
                      value={tcFormData.orderId}
                      onChange={(e) => setTcFormData({ ...tcFormData, orderId: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 41563"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Quantity</label>
                    <input
                      type="text"
                      value={tcFormData.quantity}
                      onChange={(e) => setTcFormData({ ...tcFormData, quantity: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 2 No's"
                    />
                  </div>
                </div>

                {/* Section 2: Material & Technical Specs */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', margin: '1.2rem 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  2. Material &amp; Manufacturing Specifications
                </div>
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Ring Profile / Dimensions</label>
                    <input
                      type="text"
                      value={tcFormData.ring}
                      onChange={(e) => setTcFormData({ ...tcFormData, ring: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. SR 24 OCT or R 55 OCT"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Material Grade</label>
                    <input
                      type="text"
                      value={tcFormData.material}
                      onChange={(e) => setTcFormData({ ...tcFormData, material: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. SS316 or Alloy 625"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Heat Code</label>
                    <input
                      type="text"
                      value={tcFormData.heatCode}
                      onChange={(e) => setTcFormData({ ...tcFormData, heatCode: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 24L-18C051"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">UNS Number</label>
                    <input
                      type="text"
                      value={tcFormData.unsNumber}
                      onChange={(e) => setTcFormData({ ...tcFormData, unsNumber: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. UNS S31600"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">ASTM Specification</label>
                    <input
                      type="text"
                      value={tcFormData.astmSpec}
                      onChange={(e) => setTcFormData({ ...tcFormData, astmSpec: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. ASTM A 182 / A 182M"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Batch Number</label>
                    <input
                      type="text"
                      value={tcFormData.batchNo}
                      onChange={(e) => setTcFormData({ ...tcFormData, batchNo: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. 241121A01"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Melting Practice</label>
                    <input
                      type="text"
                      value={tcFormData.meltingPractice}
                      onChange={(e) => setTcFormData({ ...tcFormData, meltingPractice: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Electric Induction Furnace"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Manufacturing Method</label>
                    <input
                      type="text"
                      value={tcFormData.mfgMethod}
                      onChange={(e) => setTcFormData({ ...tcFormData, mfgMethod: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Forged & CNC Machined"
                    />
                  </div>

                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Heat Treatment Record</label>
                    <input
                      type="text"
                      value={tcFormData.heatTreatment}
                      onChange={(e) => setTcFormData({ ...tcFormData, heatTreatment: e.target.value })}
                      className="admin-form-input"
                      placeholder="e.g. Solution annealed at 1050°C soaking for 3 hours after Water Quenched"
                    />
                  </div>
                </div>

                {/* Section 3: Mechanical Properties */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', margin: '1.2rem 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  3. Mechanical Properties Testing (Room Temperature)
                </div>
                <div className="admin-mech-grid">
                  <div className="admin-mech-box">
                    <div className="admin-mech-box-title">Tensile Strength (N/mm²)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Std Min</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.tensileStd || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, tensileStd: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Actual</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.tensileAct || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, tensileAct: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="admin-mech-box">
                    <div className="admin-mech-box-title">Yield Strength 0.2% (N/mm²)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Std Min</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.yieldStd || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, yieldStd: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Actual</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.yieldAct || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, yieldAct: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="admin-mech-box">
                    <div className="admin-mech-box-title">Elongation (%)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Std Min</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.elongStd || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, elongStd: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Actual</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.elongAct || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, elongAct: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="admin-mech-box">
                    <div className="admin-mech-box-title">Hardness (HRB / HB)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Std Max</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.hardnessStd || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, hardnessStd: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Actual</label>
                        <input
                          type="text"
                          value={tcFormData.mech?.hardnessAct || ''}
                          onChange={(e) =>
                            setTcFormData({
                              ...tcFormData,
                              mech: { ...tcFormData.mech, hardnessAct: e.target.value },
                            })
                          }
                          className="admin-chem-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Chemical Composition */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#052C58', margin: '1.2rem 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  4. Chemical Composition Analysis (% by weight)
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="admin-chem-table">
                    <thead>
                      <tr>
                        <th>Element</th>
                        {tcFormData.chem?.map((c, i) => (
                          <th key={i}>{c.elem}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600, color: '#64748b' }}>Min %</td>
                        {tcFormData.chem?.map((c, i) => (
                          <td key={i}>
                            <input
                              type="text"
                              value={c.min}
                              onChange={(e) => {
                                const chemCopy = [...tcFormData.chem];
                                chemCopy[i].min = e.target.value;
                                setTcFormData({ ...tcFormData, chem: chemCopy });
                              }}
                              className="admin-chem-input"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, color: '#64748b' }}>Max %</td>
                        {tcFormData.chem?.map((c, i) => (
                          <td key={i}>
                            <input
                              type="text"
                              value={c.max}
                              onChange={(e) => {
                                const chemCopy = [...tcFormData.chem];
                                chemCopy[i].max = e.target.value;
                                setTcFormData({ ...tcFormData, chem: chemCopy });
                              }}
                              className="admin-chem-input"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, color: '#052C58' }}>Actual Found %</td>
                        {tcFormData.chem?.map((c, i) => (
                          <td key={i}>
                            <input
                              type="text"
                              value={c.act}
                              onChange={(e) => {
                                const chemCopy = [...tcFormData.chem];
                                chemCopy[i].act = e.target.value;
                                setTcFormData({ ...tcFormData, chem: chemCopy });
                              }}
                              className="admin-chem-input"
                              style={{ fontWeight: 700, color: '#018F5D' }}
                            />
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddTcModalOpen(false);
                    setIsEditTcModalOpen(false);
                  }}
                  className="admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  <Save size={16} />
                  <span>Save Test Certificate</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: CONFIRM DELETE PURCHASE ORDER
          =================================================================== */}
      {deletePoConfirm && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box" style={{ maxWidth: '420px', textAlign: 'center', padding: '2rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto',
              }}
            >
              <Trash2 size={28} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#052C58', marginBottom: '0.5rem' }}>
              Confirm Delete PO #{deletePoConfirm}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Are you sure you want to delete this purchase order and all its linked line items? This will immediately remove it from the customer portal.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setDeletePoConfirm(null)}
                className="admin-btn-secondary"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeletePoSubmit(deletePoConfirm)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '7px',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Yes, Delete PO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: CONFIRM DELETE TEST CERTIFICATE
          =================================================================== */}
      {deleteTcConfirm && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box" style={{ maxWidth: '420px', textAlign: 'center', padding: '2rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto',
              }}
            >
              <Trash2 size={28} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#052C58', marginBottom: '0.5rem' }}>
              Confirm Delete Certificate
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Are you sure you want to remove this EN 10204-3.1 test certificate? It will no longer be visible in the customer certificate viewer.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setDeleteTcConfirm(null)}
                className="admin-btn-secondary"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteTcSubmit(deleteTcConfirm)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '7px',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Yes, Delete Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          HIGH-FIDELITY PDF MODALS: INVOICES & TEST CERTIFICATES
          =================================================================== */}
      <InvoiceModal
        isOpen={Boolean(previewInvoice)}
        onClose={() => setPreviewInvoice(null)}
        poData={previewInvoice?.po}
        invoiceItem={previewInvoice?.item}
      />

      <TestCertificateModal
        isOpen={Boolean(previewTc)}
        onClose={() => setPreviewTc(null)}
        tcData={previewTc}
      />
    </div>
  );
}
