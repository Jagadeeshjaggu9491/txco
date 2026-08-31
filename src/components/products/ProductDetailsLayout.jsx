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

// Smart helper to highlight lead-in line as an h5 title and remaining text as description
function splitPointItem(item) {
  if (typeof item !== 'string') return { title: '', desc: item };

  const text = item.trim();

  // 1. Explicit colon (e.g. "Type R – Oval: Designed for...")
  const colonIdx = text.indexOf(':');
  if (colonIdx > 0 && colonIdx <= 65) {
    return {
      title: text.substring(0, colonIdx).trim(),
      desc: text.substring(colonIdx + 1).trim(),
    };
  }

  // 2. Dash separator (e.g. "AF-110 – High temperature synthetic...")
  const dashMatch = text.match(/^([^\n—–]{3,55})\s+[—–]\s+(.*)$/);
  if (dashMatch) {
    return {
      title: dashMatch[1].trim(),
      desc: dashMatch[2].trim(),
    };
  }

  // 3. Natural clause breaking keywords
  const keywords = [
    ' designed for ',
    ' consist of ',
    ' consists of ',
    ' engineered for ',
    ' suitable for ',
    ' provides ',
    ' commonly used in ',
    ' commonly used ',
    ' manufactured from ',
    ' features ',
  ];

  for (const kw of keywords) {
    const kwIdx = text.indexOf(kw);
    if (kwIdx >= 15 && kwIdx <= 65) {
      const isActionVerb = kw.includes('designed') || kw.includes('engineered') || kw.includes('manufactured');
      if (isActionVerb) {
        return {
          title: text.substring(0, kwIdx).trim(),
          desc: (text.substring(kwIdx + 1).charAt(0).toUpperCase() + text.substring(kwIdx + 2)).trim(),
        };
      } else {
        return {
          title: (text.substring(0, kwIdx) + kw).trim(),
          desc: text.substring(kwIdx + kw.length).trim(),
        };
      }
    }
  }

  // 4. First comma split if title length is balanced
  const commaIdx = text.indexOf(',');
  if (commaIdx >= 18 && commaIdx <= 55) {
    return {
      title: text.substring(0, commaIdx).trim(),
      desc: text.substring(commaIdx + 1).trim(),
    };
  }

  // 5. If under 55 characters, render whole string as the bold title
  if (text.length <= 55) {
    return {
      title: text,
      desc: '',
    };
  }

  // 6. Split after 5-6 words for longer points
  const words = text.split(' ');
  if (words.length > 6) {
    return {
      title: words.slice(0, 5).join(' '),
      desc: words.slice(5).join(' '),
    };
  }

  return {
    title: text,
    desc: '',
  };
}

export default function ProductDetailsLayout({ subcategoryData }) {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product');

  const defaultProductId =
    subcategoryData?.productsList?.find((p) => p.id === productParam)?.id ||
    subcategoryData?.productsList?.[0]?.id;

  const [activeProductId, setActiveProductId] = useState(defaultProductId);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  // Synchronize active product when URL query parameter changes (e.g. clicking header navbar links)
  useEffect(() => {
    if (productParam) {
      const matched = subcategoryData?.productsList?.find((p) => p.id === productParam);
      if (matched) {
        setActiveProductId(matched.id);
      }
    } else if (subcategoryData?.productsList?.[0]?.id) {
      setActiveProductId(subcategoryData.productsList[0].id);
    }
  }, [productParam, subcategoryData]);

  const handleProductSelect = (id) => {
    setActiveProductId(id);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('product', id);
      window.history.pushState({}, '', url.toString());

      // Scroll window to starting top position
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

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
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            {/* Top Navigation Bar: Breadcrumb on Left, Download on Right */}
            <div className="product-details-header-bar">
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
                  <div className="product-details-download-icon-circle">
                    <Download size={13} strokeWidth={2.4} />
                  </div>
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
                    {/* Subcategory / Category Title in Sidebar */}
                    <div className="product-sidebar-title-box">
                      <h2 className="product-sidebar-category-title">
                        {subcategoryData.subcategoryTitle}
                      </h2>
                    </div>

                    {/* Subcategory Products List */}
                    <div className="product-details-nav-list">
                      {subcategoryData.productsList &&
                        subcategoryData.productsList.map((item) => {
                          const isActive = activeProductId === item.id;

                          return (
                            <button
                              key={item.id}
                              onClick={() => handleProductSelect(item.id)}
                              type="button"
                              className={`product-details-nav-item ${isActive ? 'active' : ''}`}
                            >
                              <span>{item.title}</span>
                              {isActive && (
                                <Play
                                  size={11}
                                  fill="#018f5d"
                                  color="#018f5d"
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
                {/* Top Hero Banner matching UI screenshot */}
                <div
                  className="product-details-hero-banner"
                  style={
                    productData?.bannerImage
                      ? { backgroundImage: `url('${productData.bannerImage}')` }
                      : undefined
                  }
                >
                  <h1 className="product-details-hero-title">
                    {productData?.title || subcategoryData?.subcategoryTitle}
                  </h1>
                </div>

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
                        <div className="product-details-image-box d-none">
                          <img
                            src={
                              sec.image ||
                              productData?.image ||
                              ((subcategoryData?.subcategoryTitle?.toLowerCase().includes('flange') || subcategoryData?.parentCategoryTitle?.toLowerCase().includes('flange'))
                                ? '/images/product-detials-images/flanges-product-detials-place-holder-img.png'
                                : (subcategoryData?.subcategoryTitle?.toLowerCase().includes('valve') || subcategoryData?.parentCategoryTitle?.toLowerCase().includes('valve'))
                                  ? '/images/product-detials-images/valve-components-product-detials-place-holder-img.png'
                                  : '/images/product-detials-images/gaskets-product-detials-place-holder-img.png')
                            }
                            alt={sec.heading || productData?.title || 'Product Details Technical Drawing'}
                            className="product-details-image"
                          />
                        </div>
                      )}

                      {/* Bullet Points Intro and Box Grid */}
                      {sec.bulletsIntro && (
                        <p className="product-details-bullets-intro">
                          {sec.bulletsIntro}
                        </p>
                      )}

                      {sec.bullets && (
                        <div className="product-details-points-grid">
                          {sec.bullets.map((bItem, bIdx) => {
                            const { title, desc } = splitPointItem(bItem);

                            return (
                              <div key={bIdx} className="product-details-point-card">
                                {title && (
                                  <h5 className="product-details-point-title">
                                    {title}
                                  </h5>
                                )}
                                {desc && (
                                  <p className="product-details-point-desc">
                                    {desc}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
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
                                  <th key={thIdx}>
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.table.rows.map((row, rIdx) => {
                                const hasFigureCol = sec.table.headers.some(h => h.toUpperCase().includes('FIGURE'));

                                if (Array.isArray(row.cells)) {
                                  return (
                                    <tr key={rIdx}>
                                      {row.cells.map((cell, cIdx) => (
                                        <td key={cIdx} className={cIdx === 0 ? 'product-details-table-first-col' : ''}>
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  );
                                }

                                if (hasFigureCol) {
                                  return (
                                    <tr key={rIdx}>
                                      <td className="product-details-table-first-col">{row.code}</td>
                                      <td className="product-details-table-figure-col">
                                        <TableFigureIcon type={row.figureType || 'membrane'} />
                                      </td>
                                      <td>{row.description}</td>
                                      {row.thickness !== undefined && <td>{row.thickness}</td>}
                                      {row.reweld !== undefined && <td>{row.reweld}</td>}
                                      {row.radial !== undefined && <td>{row.radial}</td>}
                                    </tr>
                                  );
                                }

                                const values = [
                                  row.code,
                                  row.description,
                                  row.thickness,
                                  row.reweld,
                                  row.radial,
                                ].filter((v, idx) => idx < sec.table.headers.length);

                                return (
                                  <tr key={rIdx}>
                                    {values.map((val, vIdx) => (
                                      <td key={vIdx} className={vIdx === 0 ? 'product-details-table-first-col' : ''}>
                                        {val || '—'}
                                      </td>
                                    ))}
                                  </tr>
                                );
                              })}
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
