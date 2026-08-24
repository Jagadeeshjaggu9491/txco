'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft, Play, ArrowRight, Download } from 'lucide-react';
import gsap from 'gsap';
import { TableFigureIcon } from '@/components/products/EngineeringProductDiagrams';

export default function ProductDetailsLayout({ subcategoryData }) {
  const searchParams = useSearchParams();
  const initialProductParam =
    searchParams.get('product') || (subcategoryData?.productsList?.[0]?.id ?? '');

  const defaultProductId =
    subcategoryData?.productsList?.find((p) => p.id === initialProductParam)?.id ||
    subcategoryData?.productsList?.[0]?.id;

  const [activeProductId, setActiveProductId] = useState(defaultProductId);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  const productData =
    subcategoryData?.productDetails?.[activeProductId] ||
    subcategoryData?.productDetails?.[subcategoryData?.productsList?.[0]?.id] || {
      title: subcategoryData?.subcategoryTitle,
      downloadTitle: subcategoryData?.subcategoryTitle,
      sections: [
        {
          heading: subcategoryData?.subcategoryTitle,
          paragraphs: [
            'Precision-engineered sealing solutions for demanding industrial applications. Designed for reliable sealing performance across high-pressure, high-temperature, and critical service environments.',
          ],
          showAssemblyDiagram: true,
          diagramType: 'weld-lip',
        },
      ],
    };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }
  }, [activeProductId]);

  if (!subcategoryData) return null;

  const totalProductsCount = subcategoryData?.productsList?.length || 0;

  return (
    <>
      <Header />
      <main className="product-details-main">
        <section className="product-details-section">
          <div className="product-details-container">
            {/* Top Navigation & Subcategory Header Bar */}
            <div className="product-details-header-bar">
              <div>
                {/* Breadcrumb back to Parent Category */}
                <div>
                  <Link
                    href={subcategoryData.parentCategoryHref || '/products'}
                    className="product-details-breadcrumb"
                  >
                    <ChevronLeft size={16} strokeWidth={2.8} />
                    <span>{subcategoryData.parentCategoryTitle || 'PRODUCTS'}</span>
                  </Link>
                </div>

                {/* Subcategory Title */}
                <h1 className="product-details-title">
                  {subcategoryData.subcategoryTitle}
                </h1>
              </div>

              {/* Top Right Actions: Product Download & Sidebar Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                {isSidebarCollapsed && (
                  <button
                    type="button"
                    onClick={() => setIsSidebarCollapsed(false)}
                    className="product-sidebar-toggle-btn"
                    style={{ padding: '0.55rem 0.95rem', fontSize: '0.82rem', borderRadius: '24px' }}
                    title="Show products list sidebar"
                  >
                    <ChevronLeft size={15} style={{ transform: 'rotate(180deg)' }} />
                    <span>Show Products ({totalProductsCount})</span>
                  </button>
                )}

                <Link
                  href="/downloads"
                  className="product-details-download-btn"
                >
                  <span>{productData.downloadTitle || subcategoryData.subcategoryTitle}</span>
                  <Download size={14} />
                </Link>
              </div>
            </div>

            {/* Split Two-Column Layout */}
            <div className={`product-details-split-grid ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
              {/* Left Sidebar Navigation */}
              <aside className={`product-details-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                {isSidebarCollapsed ? (
                  /* Compact Rail Expand Button */
                  <button
                    type="button"
                    onClick={() => setIsSidebarCollapsed(false)}
                    className="product-sidebar-collapsed-btn"
                    title="Expand products sidebar"
                  >
                    <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                    <span className="product-sidebar-collapsed-text">
                      Products ({totalProductsCount})
                    </span>
                  </button>
                ) : (
                  <>
                    {/* Top Sidebar Header with Collapse Button */}
                    <div className="product-sidebar-top-control">
                      <span className="product-sidebar-label">
                        PROFILES ({totalProductsCount})
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsSidebarCollapsed(true)}
                        className="product-sidebar-toggle-btn"
                        title="Collapse sidebar to read full width"
                      >
                        <ChevronLeft size={13} strokeWidth={2.5} />
                        <span>Hide</span>
                      </button>
                    </div>

                    {/* Subcategory Products List */}
                    <div className="product-details-nav-list">
                      {subcategoryData.productsList &&
                        subcategoryData.productsList.map((item) => {
                          const isActive = activeProductId === item.id;

                          return (
                            <button
                              key={item.id}
                              onClick={() => setActiveProductId(item.id)}
                              type="button"
                              className={`product-details-nav-item ${isActive ? 'active' : ''}`}
                            >
                              <span>{item.title}</span>
                              {isActive && (
                                <Play
                                  size={10}
                                  fill="var(--primary-navy, #052C58)"
                                  color="var(--primary-navy, #052C58)"
                                  style={{ flexShrink: 0 }}
                                />
                              )}
                            </button>
                          );
                        })}
                    </div>

                    {/* Contact Our Experts Button */}
                    <div>
                      <Link
                        href="/contact"
                        className="product-details-contact-btn"
                      >
                        <span>CONTACT OUR EXPERTS</span>
                        <div className="product-details-contact-icon-circle">
                          <ArrowRight size={13} color="#114680" strokeWidth={2.8} />
                        </div>
                      </Link>
                    </div>
                  </>
                )}
              </aside>

              {/* Right Content Panel matching user screenshot */}
              <div
                ref={contentRef}
                className="product-details-content-panel"
              >
                {productData.sections &&
                  productData.sections.map((sec, idx) => (
                    <div key={idx} className="product-details-section-block">
                      {/* Header Bar with Light Lavender Blue Background */}
                      <div className="product-details-banner-header">
                        <h2 className="product-details-banner-title">
                          {sec.heading}
                        </h2>
                      </div>

                      {/* Paragraphs */}
                      {sec.paragraphs &&
                        sec.paragraphs.map((pText, pIdx) => (
                          <p
                            key={pIdx}
                            className="product-details-paragraph"
                          >
                            {pText}
                          </p>
                        ))}

                      {/* Product Assembly & Detail Image */}
                      {sec.showAssemblyDiagram && (
                        <div className="product-details-image-box">
                          <img
                            src={sec.image || productData?.image || '/images/products/product-details-image.avif'}
                            alt={sec.heading || productData?.title || 'Product Details Technical Drawing'}
                            className="product-details-image"
                          />
                        </div>
                      )}

                      {/* Bullet Points Intro and List */}
                      {sec.bulletsIntro && (
                        <p className="product-details-bullets-intro">
                          {sec.bulletsIntro}
                        </p>
                      )}

                      {sec.bullets && (
                        <ul className="product-details-bullets-list">
                          {sec.bullets.map((bItem, bIdx) => (
                            <li key={bIdx}>
                              {bItem}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Sub Paragraphs */}
                      {sec.subParagraphs &&
                        sec.subParagraphs.map((spText, spIdx) => (
                          <p
                            key={spIdx}
                            className="product-details-paragraph"
                          >
                            {spText}
                          </p>
                        ))}

                      {/* Engineering Specification Table */}
                      {sec.table && (
                        <div className="product-details-table-wrapper">
                          <table className="product-details-table">
                            <thead>
                              <tr>
                                {sec.table.headers.map((th, thIdx) => (
                                  <th
                                    key={thIdx}
                                    style={{
                                      textAlign: thIdx === 0 ? 'center' : thIdx === 1 ? 'center' : 'left',
                                    }}
                                  >
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.table.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  <td style={{ textAlign: 'center', fontWeight: '700', color: '#052C58' }}>
                                    {row.code}
                                  </td>
                                  <td style={{ textAlign: 'center', minWidth: '90px' }}>
                                    <TableFigureIcon type={row.figureType || 'membrane'} />
                                  </td>
                                  <td style={{ minWidth: '220px' }}>
                                    {row.description}
                                  </td>
                                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', color: '#1e293b' }}>
                                    {row.thickness}
                                  </td>
                                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', color: '#1e293b' }}>
                                    {row.reweld}
                                  </td>
                                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap', color: '#1e293b' }}>
                                    {row.radial}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          {sec.table.footnote && (
                            <div className="product-details-table-footnote">
                              {sec.table.footnote.split('\n').map((line, lIdx) => (
                                <div key={lIdx}>{line}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
