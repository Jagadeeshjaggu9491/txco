'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  FileCheck2,
  PackageCheck,
  CheckCircle2,
  LogOut,
  Sun,
  Moon,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Clock,
  Filter,
} from 'lucide-react';
import {
  mockPurchaseOrders,
  mockTestCertificates,
  getStoredPurchaseOrders,
  getStoredTestCertificates,
} from '@/data/portalData';
import { getCurrentUser, logoutUser, isLoggedIn } from '@/utils/authManager';
import InvoiceModal from '@/components/portal/InvoiceModal';
import TestCertificateModal from '@/components/portal/TestCertificateModal';
import '@/styles/client-portal.css';

export default function ClientPortalPage() {
  const router = useRouter();

  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Dynamic Data Lists (Synchronized with Admin Console)
  const [purchaseOrders, setPurchaseOrders] = useState(mockPurchaseOrders);
  const [testCertificates, setTestCertificates] = useState(mockTestCertificates);

  // Portal Navigation State ('search-po' | 'test-certificate')
  const [activeTab, setActiveTab] = useState('search-po');

  // PO View State (null = Search PO List View; object = PO Details View)
  const [selectedPo, setSelectedPo] = useState(null); // Defaults to Search PO list view as requested

  // Modal Viewers
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [activeTc, setActiveTc] = useState(null);

  // Filters for Search PO
  const [poSearchQuery, setPoSearchQuery] = useState('');

  // 5 Filters for Test Certificate (Matching Screenshot 4)
  const [filterPoNumber, setFilterPoNumber] = useState('');
  const [filterRing, setFilterRing] = useState('');
  const [filterTcName, setFilterTcName] = useState('');
  const [filterHeatCode, setFilterHeatCode] = useState('');
  const [filterMaterial, setFilterMaterial] = useState('');

  // Pagination for Test Certificate (8 per page)
  const [tcPage, setTcPage] = useState(1);
  const tcPageSize = 8;

  // Initialize Auth & Synchronize Portal Data
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    } else {
      // Default fallback demo user matching client screenshot
      setCurrentUser({
        name: 'Bhanu Prakash',
        email: 'bhanu@txco.com',
        company: 'PER A CAUSE',
        role: 'customer',
      });
    }

    const loadPortalData = () => {
      setPurchaseOrders(getStoredPurchaseOrders());
      setTestCertificates(getStoredTestCertificates());
    };

    loadPortalData();
    window.addEventListener('txco_portal_data_updated', loadPortalData);
    return () => window.removeEventListener('txco_portal_data_updated', loadPortalData);
  }, []);

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  // Filtered PO List
  const filteredPurchaseOrders = useMemo(() => {
    const q = poSearchQuery.toLowerCase().trim();
    if (!q) return purchaseOrders;
    return purchaseOrders.filter(
      (po) =>
        po.poNumber?.toLowerCase().includes(q) ||
        po.customerName?.toLowerCase().includes(q) ||
        po.orderId?.toLowerCase().includes(q) ||
        po.items?.some((item) => item.item?.toLowerCase().includes(q))
    );
  }, [poSearchQuery, purchaseOrders]);

  // Filtered Test Certificates
  const filteredTestCertificates = useMemo(() => {
    return testCertificates.filter((tc) => {
      const matchPo = !filterPoNumber.trim() || tc.poNumber?.toLowerCase().includes(filterPoNumber.toLowerCase().trim());
      const matchRing = !filterRing.trim() || tc.ring?.toLowerCase().includes(filterRing.toLowerCase().trim());
      const matchTc = !filterTcName.trim() || tc.tcName?.toLowerCase().includes(filterTcName.toLowerCase().trim());
      const matchHeat = !filterHeatCode.trim() || tc.heatCode?.toLowerCase().includes(filterHeatCode.toLowerCase().trim());
      const matchMat = !filterMaterial.trim() || tc.material?.toLowerCase().includes(filterMaterial.toLowerCase().trim());

      return matchPo && matchRing && matchTc && matchHeat && matchMat;
    });
  }, [filterPoNumber, filterRing, filterTcName, filterHeatCode, filterMaterial, testCertificates]);

  // Paginated Test Certificates
  const paginatedTcs = useMemo(() => {
    const start = (tcPage - 1) * tcPageSize;
    return filteredTestCertificates.slice(start, start + tcPageSize);
  }, [filteredTestCertificates, tcPage]);

  const totalTcPages = Math.ceil(filteredTestCertificates.length / tcPageSize) || 1;

  return (
    <div className={`client-portal-wrapper ${darkMode ? 'dark-theme' : ''}`}>
      {/* ------------------------------------------------------------------
          Left Sidebar (Matching Screenshots)
          ------------------------------------------------------------------ */}
      <aside className="portal-sidebar no-print">
        <div className="portal-sidebar-top">
          {/* Brand Logo & Theme Toggle */}
          <div className="portal-brand-header">
            <Link href="/" className="portal-logo-link" title="Return to Home">
              <img
                src="/images/logo/txco-logo-new.avif"
                alt="TXCO Sealing Products"
                className="portal-logo-img"
              />
            </Link>

          </div>

          {/* Navigation Pill Buttons */}
          <nav className="portal-nav-menu">
            <button
              type="button"
              className={`portal-nav-item ${activeTab === 'search-po' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('search-po');
                setSelectedPo(null);
              }}
            >
              <PackageCheck size={18} />
              <span>Search PO</span>
            </button>

            <button
              type="button"
              className={`portal-nav-item ${activeTab === 'test-certificate' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('test-certificate');
              }}
            >
              <FileCheck2 size={18} />
              <span>Test Certificate</span>
            </button>
          </nav>
        </div>

        {/* Bottom User Profile & Logout */}
        <div className="portal-sidebar-bottom">
          <div className="portal-user-badge">
            <div className="portal-user-avatar">
              {currentUser?.name?.charAt(0) || 'B'}
            </div>
            <div className="portal-user-info">
              <span className="portal-user-name">{currentUser?.name || 'Bhanu Prakash'}</span>
              <span className="portal-user-company">{currentUser?.company || 'PER A CAUSE'}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="portal-logout-btn"
            title="Sign out of customer portal"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------------
          Main Workspace
          ------------------------------------------------------------------ */}
      <main className="portal-main-content">
        {/* ================================================================
            TAB 1: SEARCH PO / PO DETAILS
            ================================================================ */}
        {activeTab === 'search-po' && (
          <div className="portal-card">
            {selectedPo ? (
              /* VIEW A: PO Details View (Exact Match for Screenshot 1 & 2) */
              <div>
                <h1 className="portal-view-title">PO Details</h1>

                {/* 3 Meta Header Cards */}
                <div className="po-details-meta-row">
                  <div className="po-meta-card">
                    <span className="po-meta-label">Customer Name</span>
                    <span className="po-meta-value">{selectedPo.customerName}</span>
                  </div>

                  <div className="po-meta-card">
                    <span className="po-meta-label">PO Date</span>
                    <span className="po-meta-value">{selectedPo.poDate}</span>
                  </div>

                  <div className="po-meta-card">
                    <span className="po-meta-label">Order Date</span>
                    <span className="po-meta-value">{selectedPo.orderDate}</span>
                  </div>
                </div>

                {/* Process Milestone Progress Table */}
                <div className="po-table-container">
                  <table className="po-details-table">
                    <thead>
                      <tr>
                        <th style={{ width: '70px' }}>SERIAL NO</th>
                        <th style={{ width: '170px' }}>ITEM</th>
                        <th style={{ width: '85px' }}>ORDER QTY</th>
                        <th>RAW MATERIAL<br />PROCESSING</th>
                        <th>HEAT<br />TREATMENT</th>
                        <th>FINAL<br />MACHINING</th>
                        <th>INSPECTION<br />&amp; QA</th>
                        <th>OTHER<br />PROCESS</th>
                        <th>PLATING<br />PROCESS</th>
                        <th>PACKING</th>
                        <th style={{ width: '85px' }}>PENDING<br />QTY</th>
                        <th style={{ width: '160px' }}>INVOICE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPo.items.map((item) => (
                        <tr key={item.serialNo}>
                          <td>{item.serialNo}</td>
                          <td><strong>{item.item}</strong></td>
                          <td>{item.orderQty}</td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>
                            <span className="process-check-icon">
                              <CheckCircle2 size={18} fill="#22c55e" color="#ffffff" />
                            </span>
                          </td>
                          <td>{item.pendingQty}</td>
                          <td>
                            <button
                              type="button"
                              className="invoice-link-btn"
                              onClick={() => setActiveInvoice(item)}
                              title="Click to view full export invoice PDF"
                            >
                              {item.invoiceLabel}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Navigation */}
                <div>
                  <button
                    type="button"
                    className="back-to-po-btn"
                    onClick={() => setSelectedPo(null)}
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Search PO</span>
                  </button>
                </div>
              </div>
            ) : (
              /* VIEW B: Search PO Master List */
              <div>
                <div className="search-po-header">
                  <h1 className="portal-view-title" style={{ margin: 0 }}>Search Purchase Orders</h1>
                  <div className="search-input-wrapper">
                    <Search size={16} className="search-input-icon" />
                    <input
                      type="text"
                      className="search-input-field"
                      placeholder="Search PO Number, Item or Order..."
                      value={poSearchQuery}
                      onChange={(e) => setPoSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="po-table-container">
                  <table className="po-list-table">
                    <thead>
                      <tr>
                        <th>PO NUMBER</th>
                        <th>CUSTOMER NAME</th>
                        <th>PO DATE</th>
                        <th>ORDER DATE</th>
                        <th>TOTAL ITEMS</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPurchaseOrders.map((po) => (
                        <tr key={po.poNumber}>
                          <td>
                            <button
                              type="button"
                              className="po-number-link"
                              onClick={() => setSelectedPo(po)}
                            >
                              PO# {po.poNumber}
                            </button>
                          </td>
                          <td><strong>{po.customerName}</strong></td>
                          <td>{po.poDate}</td>
                          <td>{po.orderDate}</td>
                          <td>{po.items.length} Products</td>
                          <td>
                            <span className="po-status-badge completed">{po.status}</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="invoice-link-btn"
                              onClick={() => setSelectedPo(po)}
                            >
                              View Details &rarr;
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================
            TAB 2: TEST CERTIFICATE (Exact Match for Screenshot 4 & 5)
            ================================================================ */}
        {activeTab === 'test-certificate' && (
          <div className="portal-card">
            <h1 className="portal-view-title">Test Certificate</h1>

            {/* 5 Search Filter Input Boxes */}
            <div className="tc-filter-grid">
              <input
                type="text"
                className="tc-filter-input"
                placeholder="Search By PO Number"
                value={filterPoNumber}
                onChange={(e) => {
                  setFilterPoNumber(e.target.value);
                  setTcPage(1);
                }}
              />
              <input
                type="text"
                className="tc-filter-input"
                placeholder="Search By Ring"
                value={filterRing}
                onChange={(e) => {
                  setFilterRing(e.target.value);
                  setTcPage(1);
                }}
              />
              <input
                type="text"
                className="tc-filter-input"
                placeholder="Search By TC Name"
                value={filterTcName}
                onChange={(e) => {
                  setFilterTcName(e.target.value);
                  setTcPage(1);
                }}
              />
              <input
                type="text"
                className="tc-filter-input"
                placeholder="Search By Heat Code"
                value={filterHeatCode}
                onChange={(e) => {
                  setFilterHeatCode(e.target.value);
                  setTcPage(1);
                }}
              />
            </div>

            <div className="tc-filter-row-bottom">
              <input
                type="text"
                className="tc-filter-input"
                placeholder="Search By Material"
                value={filterMaterial}
                onChange={(e) => {
                  setFilterMaterial(e.target.value);
                  setTcPage(1);
                }}
              />
            </div>

            {/* Test Certificate 10-Column Data Table */}
            <div className="tc-table-wrapper">
              <table className="tc-data-portal-table">
                <thead>
                  <tr>
                    <th>CUSTOMER NAME</th>
                    <th>PO NUMBER</th>
                    <th>PO DATE</th>
                    <th>ORDER ID</th>
                    <th>ORDER DATE</th>
                    <th>TC ID</th>
                    <th>TC NAME</th>
                    <th>TC DATE</th>
                    <th>RING</th>
                    <th>MATERIAL</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTcs.map((tc) => (
                    <tr key={tc.id}>
                      <td><strong>{tc.customerName}</strong></td>
                      <td>{tc.poNumber}</td>
                      <td>{tc.poDate}</td>
                      <td>{tc.orderId}</td>
                      <td>{tc.orderDate}</td>
                      <td>{tc.tcId}</td>
                      <td>
                        <button
                          type="button"
                          className="tc-link-btn"
                          onClick={() => setActiveTc(tc)}
                          title="Click to view EN 10204-3.1 inspection certificate PDF"
                        >
                          {tc.tcName}
                        </button>
                      </td>
                      <td>{tc.tcDate}</td>
                      <td>{tc.ring}</td>
                      <td>{tc.material}</td>
                    </tr>
                  ))}
                  {paginatedTcs.length === 0 && (
                    <tr>
                      <td colSpan="10" style={{ textAlign: 'center', padding: '2.5rem', color: '#94a3b8' }}>
                        No test certificates found matching your search parameters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="tc-pagination-row">
              <div className="tc-entries-text">
                Showing {Math.min((tcPage - 1) * tcPageSize + 1, filteredTestCertificates.length)} to{' '}
                {Math.min(tcPage * tcPageSize, filteredTestCertificates.length)} of {filteredTestCertificates.length} entries
              </div>

              <div className="tc-pagination-controls">
                <button
                  type="button"
                  className="tc-page-btn"
                  onClick={() => setTcPage(1)}
                  disabled={tcPage === 1}
                  title="First Page"
                >
                  <ChevronsLeft size={14} />
                </button>
                <button
                  type="button"
                  className="tc-page-btn"
                  onClick={() => setTcPage((p) => Math.max(1, p - 1))}
                  disabled={tcPage === 1}
                  title="Previous Page"
                >
                  <ChevronLeft size={14} />
                </button>

                {Array.from({ length: totalTcPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`tc-page-btn ${tcPage === num ? 'active' : ''}`}
                    onClick={() => setTcPage(num)}
                  >
                    {num}
                  </button>
                ))}

                <button
                  type="button"
                  className="tc-page-btn"
                  onClick={() => setTcPage((p) => Math.min(totalTcPages, p + 1))}
                  disabled={tcPage === totalTcPages}
                  title="Next Page"
                >
                  <ChevronRight size={14} />
                </button>
                <button
                  type="button"
                  className="tc-page-btn"
                  onClick={() => setTcPage(totalTcPages)}
                  disabled={tcPage === totalTcPages}
                  title="Last Page"
                >
                  <ChevronsRight size={14} />
                </button>
              </div>
            </div>

            {/* Exact Footer Disclaimer Note from Screenshot 4 */}
            <div className="tc-disclaimer-note">
              At this time, only 3.1 Test Certificates can be viewed through this portal. Additional documents will be made available in future updates.
            </div>
          </div>
        )}
      </main>

      {/* ------------------------------------------------------------------
          High-Fidelity PDF Modals (Invoices & Test Certificates)
          ------------------------------------------------------------------ */}
      <InvoiceModal
        isOpen={Boolean(activeInvoice)}
        onClose={() => setActiveInvoice(null)}
        poData={selectedPo}
        invoiceItem={activeInvoice}
      />

      <TestCertificateModal
        isOpen={Boolean(activeTc)}
        onClose={() => setActiveTc(null)}
        tcData={activeTc}
      />
    </div>
  );
}
