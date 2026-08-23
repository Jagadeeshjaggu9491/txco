'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import {
  stockCategories,
  stockMaterials,
  stockProfiles,
  stockPressureClasses,
  stockItemsList,
} from '@/data/stockListData';
import {
  Search,
  RotateCcw,
  CheckCircle2,
  Package,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { addToCart } from '@/utils/cartManager';

export default function StockListPage({ initialCategory = 'All Categories' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('All Materials');
  const [selectedProfile, setSelectedProfile] = useState('All Profiles');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [rfqAddedItem, setRfqAddedItem] = useState(null);

  const heroRef = useRef(null);
  const filterRef = useRef(null);

  // GSAP Intro Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.15 }
      );
    }

    if (filterRef.current) {
      tl.fromTo(
        filterRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );
    }
  }, []);

  // Filtered Items Computation
  const filteredItems = useMemo(() => {
    return stockItemsList.filter((item) => {
      // Category Filter
      const matchCategory =
        selectedCategory === 'All Categories' || item.category === selectedCategory;

      // Material Filter
      const matchMaterial =
        selectedMaterial === 'All Materials' ||
        item.material.toLowerCase().includes(selectedMaterial.toLowerCase().replace(/ \/ .*/, ''));

      // Profile Filter
      const matchProfile =
        selectedProfile === 'All Profiles' || item.profile === selectedProfile;

      // Pressure Class Filter
      const matchClass =
        selectedClass === 'All Classes' || item.pressureClass.includes(selectedClass);

      // In Stock Only Filter
      const matchInStock = !inStockOnly || item.status === 'In Stock';

      // Text Search Filter
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.itemCode.toLowerCase().includes(query) ||
        item.ringNumber.toLowerCase().includes(query) ||
        item.profile.toLowerCase().includes(query) ||
        item.material.toLowerCase().includes(query) ||
        item.npsSize.toLowerCase().includes(query) ||
        item.standard.toLowerCase().includes(query) ||
        item.pressureClass.toLowerCase().includes(query);

      return (
        matchCategory &&
        matchMaterial &&
        matchProfile &&
        matchClass &&
        matchInStock &&
        matchSearch
      );
    });
  }, [
    selectedCategory,
    searchQuery,
    selectedMaterial,
    selectedProfile,
    selectedClass,
    inStockOnly,
  ]);

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSearchQuery('');
    setSelectedMaterial('All Materials');
    setSelectedProfile('All Profiles');
    setSelectedClass('All Classes');
    setInStockOnly(false);
  };

  // Add to RFQ Action
  const handleAddToRFQ = (item) => {
    addToCart(item, 1);
    setRfqAddedItem(item);
    setTimeout(() => {
      setRfqAddedItem(null);
    }, 4000);
  };

  return (
    <>
      <Header />
      <main className="stock-list-main">
        {/* Top Hero Banner */}
        <PageHero
          title="LIVE INVENTORY & STOCK LIST"
          subtitle="Browse our real-time stock list of precision-engineered industrial gaskets, RTJ rings, spiral wound gaskets, flanges, and valve sealing components ready for fast dispatch."
          bgImage="/images/banner/txco-page-banner.avif"
        />

        {/* Main Stock List & Filters Container */}
        <div className="txco-container" style={{ padding: '3rem 0rem' }}>
          {/* Filter & Search Control Box */}
          <div className="stock-filter-box" ref={filterRef}>
            <div className="stock-filter-top-row">
              {/* Search Bar */}
              <div className="stock-search-input-wrapper">
                <Search size={18} className="stock-search-icon" />
                <input
                  type="text"
                  placeholder="Search by Item Code, Ring # (e.g. R24, BX155), Size, Material..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="stock-search-input"
                />
              </div>

              {/* In-Stock Toggle */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.86rem', fontWeight: '600', color: '#334155' }}>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--primary-navy, #052C58)', cursor: 'pointer' }}
                />
                <span>Show In-Stock Only</span>
              </label>
            </div>

            {/* Select Dropdown Filters */}
            <div className="stock-filter-selects-grid">
              {/* Category Filter */}
              <div className="stock-filter-group">
                <label className="stock-filter-label">Product Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="stock-filter-select"
                >
                  {stockCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Filter */}
              <div className="stock-filter-group">
                <label className="stock-filter-label">Material Grade</label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="stock-filter-select"
                >
                  {stockMaterials.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Profile Filter */}
              <div className="stock-filter-group">
                <label className="stock-filter-label">Gasket Profile / Style</label>
                <select
                  value={selectedProfile}
                  onChange={(e) => setSelectedProfile(e.target.value)}
                  className="stock-filter-select"
                >
                  {stockProfiles.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pressure Class Filter */}
              <div className="stock-filter-group">
                <label className="stock-filter-label">Pressure Class</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="stock-filter-select"
                >
                  {stockPressureClasses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="stock-reset-btn"
                title="Reset all search filters"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Live Inventory Data Table Card */}
          <div className="stock-table-card">
            <div className="stock-table-header-info">
              <div className="stock-count-text">
                Showing <span className="stock-count-number">{filteredItems.length}</span> items matching your selection in <span style={{ color: '#052C58', fontWeight: '700' }}>{selectedCategory}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  All items supplied with 3.1 Mill Test Certificates
                </span>
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#ffffff' }}>
                <Package size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#052C58', marginBottom: '0.5rem' }}>
                  No stock items match your search
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', maxWidth: '460px', margin: '0 auto 1.5rem auto' }}>
                  We offer fast-track custom CNC machining and manufacturing for bespoke gasket sizes and exotic alloys.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="txco-btn txco-btn-primary"
                  style={{ padding: '0.65rem 1.4rem' }}
                >
                  <RotateCcw size={15} />
                  <span>Clear Filters</span>
                </button>
              </div>
            ) : (
              <div className="stock-table-responsive">
                <table className="stock-data-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '170px' }}>Item Code</th>
                      <th style={{ minWidth: '200px' }}>Product Profile</th>
                      <th style={{ minWidth: '150px' }}>Size & Class</th>
                      <th style={{ minWidth: '180px' }}>Material Grade</th>
                      <th style={{ minWidth: '160px' }}>Standard</th>
                      <th style={{ minWidth: '140px', textAlign: 'center' }}>Availability</th>
                      <th style={{ minWidth: '130px', textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr key={item.id}>
                        {/* Item Code & Ring # */}
                        <td>
                          <span className="stock-item-code">{item.itemCode}</span>
                          {item.ringNumber && item.ringNumber !== 'N/A' && (
                            <span className="stock-item-ring-badge">
                              Ring #{item.ringNumber}
                            </span>
                          )}
                        </td>

                        {/* Profile & Category */}
                        <td>
                          <div className="stock-item-profile-name">{item.profile}</div>
                          <div className="stock-item-standard-sub">{item.category}</div>
                        </td>

                        {/* Size & Class */}
                        <td>
                          <div style={{ fontWeight: '700', color: '#052C58' }}>{item.npsSize}</div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.pressureClass}</div>
                        </td>

                        {/* Material & Hardness */}
                        <td>
                          <div style={{ fontWeight: '600', color: '#1e293b' }}>{item.material}</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{item.hardness}</div>
                        </td>

                        {/* Standard */}
                        <td>
                          <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#334155' }}>
                            {item.standard}
                          </div>
                        </td>

                        {/* Stock Status Badge */}
                        <td style={{ textAlign: 'center' }}>
                          <span
                            className={`stock-status-badge ${item.quantity > 50 ? 'in-stock' : 'low-stock'
                              }`}
                          >
                            <span className="stock-status-dot" />
                            <span>{item.status} ({item.quantity} pcs)</span>
                          </span>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>
                            {item.leadTime}
                          </div>
                        </td>

                        {/* Add to RFQ Button */}
                        <td style={{ textAlign: 'center' }}>
                          <button
                            type="button"
                            onClick={() => handleAddToRFQ(item)}
                            className="stock-action-rfq-btn"
                          >
                            <ShoppingCart size={14} />
                            <span>Add to RFQ</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Floating RFQ Toast Notification */}
        {rfqAddedItem && (
          <div className="stock-rfq-toast">
            <CheckCircle2 size={24} color="#4ade80" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.92rem' }}>
                Added to Quotation Cart!
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                {rfqAddedItem.itemCode} ({rfqAddedItem.profile} - {rfqAddedItem.npsSize})
              </div>
            </div>
            <Link
              href="/cart"
              style={{
                backgroundColor: '#ffffff',
                color: '#052C58',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: '700',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>View Cart</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        )}

        {/* Supporting Global Sections */}
        <IndustrialSealingProducts />
        <DiscoverEngineeredSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
