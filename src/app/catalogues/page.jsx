'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { Eye, Download, Search, X, FileText, CheckCircle2, ChevronRight, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { catalogueCategories, cataloguesList } from '@/data/cataloguesData';

export default function CataloguesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Catalogues');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const gridRef = useRef(null);

  const filteredCatalogues = cataloguesList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Catalogues' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standards.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item, e) => {
    e.stopPropagation();
    setDownloadSuccess(item.title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Top Hero Section */}
        <PageHero
          title="PRODUCT CATALOGUES"
          subtitle="Download official engineering product brochures, technical dimension manuals, torque guidelines, and material specifications for TXCO industrial sealing solutions."
          bgImage="/images/banner/txco-page-banner.avif"
        />

        {/* Download Success Toast */}
        {downloadSuccess && (
          <div
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              backgroundColor: '#052C58',
              color: '#ffffff',
              padding: '1rem 1.4rem',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              zIndex: 10000,
              fontSize: '0.9rem',
              fontWeight: '600',
              border: '1px solid #1e3a8a',
            }}
          >
            <CheckCircle2 size={20} color="#4ade80" />
            <span>Downloading {downloadSuccess}...</span>
          </div>
        )}

        {/* Catalogues Section */}
        <section className="catalogues-section">
          <div className="catalogues-container">
            {/* Filter and Search Bar */}
            <div className="catalogues-filter-bar">
              {/* Category Pills */}
              <div className="catalogues-categories-pills">
                {catalogueCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`catalogue-category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Live Search */}
              <div className="catalogues-search-box">
                <Search size={16} className="catalogues-search-icon" />
                <input
                  type="text"
                  placeholder="Search catalogue, standard, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="catalogues-search-input"
                />
              </div>
            </div>

            {/* Catalogues Cards Grid: 3 per row flexbox */}
            {filteredCatalogues.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <FileText size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#052C58', marginBottom: '0.5rem' }}>
                  No Catalogues Found
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Try adjusting your search query or selecting a different product category filter.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Catalogues');
                    setSearchQuery('');
                  }}
                  className="txco-btn txco-btn-steel"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              <div className="catalogues-flex-grid" ref={gridRef}>
                {filteredCatalogues.map((item) => (
                  <div key={item.id} className="catalogue-card-item">
                    <div className="catalogue-card">
                      {/* Document Preview Thumbnail */}
                      <div className="catalogue-thumb-box">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="catalogue-thumb-img"
                          onError={(e) => {
                            e.currentTarget.src = '/images/resources/trusted-partner-blue.png';
                          }}
                        />
                        <div className="catalogue-badge-overlay">
                          <span className="catalogue-tag-pill">{item.category}</span>
                          <span className="catalogue-pdf-pill">PDF</span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="catalogue-body">
                        <div className="catalogue-standards">
                          {item.standards}
                        </div>
                        <h3 className="catalogue-title">
                          {item.title}
                        </h3>
                        <p className="catalogue-desc">
                          {item.description}
                        </p>

                        <div className="catalogue-meta-row">
                          <span>{item.edition}</span>
                          <span>{item.pages} • {item.fileSize}</span>
                        </div>
                      </div>

                      {/* Dual Action Buttons: View & Download */}
                      <div className="catalogue-actions-group">
                        <Link
                          href={`/catalogues/browse/${item.id}`}
                          className="catalogue-btn-view"
                          style={{ textDecoration: 'none' }}
                        >
                          <Eye size={15} />
                          <span>View</span>
                        </Link>

                        <a
                          href={item.pdfUrl}
                          download
                          onClick={(e) => {
                            e.preventDefault();
                            handleDownload(item);
                          }}
                          className="catalogue-btn-download"
                        >
                          <Download size={15} />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}


          </div>
        </section>


        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
