'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft, Play, ArrowRight, Download, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { TableFigureIcon } from '@/components/products/EngineeringProductDiagrams';

// Smart helper to highlight lead-in line as an h5 title and remaining text as description
function splitPointItem(item) {
  if (typeof item === 'object' && item !== null) {
    return {
      title: item.title || item.heading || '',
      desc: item.desc || item.description || item.text || '',
    };
  }
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
    ' where ',
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

// Mapping for images from public/images/products/new
const NEW_PRODUCT_IMAGES = {
  'about-metallic-gaskets': '/images/products/new/Ring Type Joint (RTJ) Gaskets (R – Oval & Octagonal).png',
  'ring-type-joint-rtj': '/images/products/new/Ring Type Joint (RTJ) Gaskets (R – Oval & Octagonal).png',
  'rubber-coated-rtj': '/images/products/new/Rubber-Coated RTJ Gaskets.png',
  'ptfe-insert-rtj': '/images/products/new/PTFE-Insert RTJ Gaskets.png',
  'protective-coated-rtj': '/images/products/new/Protective-Coated RTJ Gaskets.png',
  'bonnet-rings': '/images/products/new/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner.png',
  'lens-rings': '/images/products/new/Lens Rings (DIN 2696).png',
  'blind-gaskets': '/images/products/new/Blind RTJ Gaskets.png',
  'vx-ax-gaskets': '/images/products/new/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner.png',
  'ix-gaskets': '/images/products/new/SRX_SBX_Gaskets_Banner.png',
  'delta-gaskets': '/images/products/new/Custom_Machined_Metallic_Ring_Seals_Banner.png',
  'bridge-gaskets': '/images/products/new/Custom_Machined_Metallic_Ring_Seals_Banner.png',
  'spectacle-blind-gaskets': '/images/products/new/Blind RTJ Gaskets.png',
  'transition-rtj': '/images/products/new/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner.png',
  'soft-material-seated-rtj': '/images/products/new/Soft_Material_Serrated_RTJ_Gaskets_Banner.png',
  'weld-lip-seals': '/images/products/new/Custom_Machined_Metallic_Ring_Seals_Banner.png',
};

function getFeaturedProductImage(productId, pData, subcategory) {
  if (productId && NEW_PRODUCT_IMAGES[productId]) {
    return NEW_PRODUCT_IMAGES[productId];
  }
  const title = ((pData?.title || '') + ' ' + (subcategory?.subcategoryTitle || '')).toLowerCase();

  if (title.includes('rubber-coated') || title.includes('rubber coated')) {
    return '/images/products/new/Rubber-Coated RTJ Gaskets.png';
  }
  if (title.includes('ptfe-insert') || title.includes('ptfe insert')) {
    return '/images/products/new/PTFE-Insert RTJ Gaskets.png';
  }
  if (title.includes('protective-coated') || title.includes('protective coated')) {
    return '/images/products/new/Protective-Coated RTJ Gaskets.png';
  }
  if (title.includes('lens ring') || title.includes('lens-ring') || title.includes('din 2696')) {
    return '/images/products/new/Lens Rings (DIN 2696).png';
  }
  if (title.includes('blind rtj') || title.includes('blind gasket') || title.includes('spectacle blind')) {
    return '/images/products/new/Blind RTJ Gaskets.png';
  }
  if (title.includes('serrated') || title.includes('soft-material') || title.includes('soft material')) {
    return '/images/products/new/Soft_Material_Serrated_RTJ_Gaskets_Banner.png';
  }
  if (title.includes('srx') || title.includes('sbx') || title.includes('ix gasket')) {
    return '/images/products/new/SRX_SBX_Gaskets_Banner.png';
  }
  if (title.includes('rx') || title.includes('bx') || title.includes('bonnet ring')) {
    return '/images/products/new/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner.png';
  }
  if (title.includes('custom machined') || title.includes('delta gasket') || title.includes('bridgeman') || title.includes('weld-lip') || title.includes('weld lip')) {
    return '/images/products/new/Custom_Machined_Metallic_Ring_Seals_Banner.png';
  }
  if (title.includes('ring type joint') || title.includes('rtj') || title.includes('metallic gasket')) {
    return '/images/products/new/Ring Type Joint (RTJ) Gaskets (R – Oval & Octagonal).png';
  }

  return pData?.newImage || pData?.image || null;
}

export default function ProductDetailsLayout({ subcategoryData }) {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product');

  const defaultProductId =
    subcategoryData?.productsList?.find((p) => p.id === productParam)?.id ||
    subcategoryData?.productsList?.[0]?.id;

  const [activeProductId, setActiveProductId] = useState(defaultProductId);
  const headerBarRef = useRef(null);
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

  const featuredProductImage = getFeaturedProductImage(
    activeProductId,
    productData,
    subcategoryData
  );

  // Initial Page Mount Intro Animation for Header
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (headerBarRef.current) {
        tl.fromTo(
          headerBarRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Product Selection / Content Intro Animation
  useEffect(() => {
    if (contentRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        const breadcrumbs = contentRef.current.querySelector('.product-details-content-breadcrumbs');
        const mainHeading = contentRef.current.querySelector('.product-details-main-heading');
        const sectionBanners = contentRef.current.querySelectorAll('.product-details-banner-header');
        const paragraphs = contentRef.current.querySelectorAll('.product-details-paragraph');
        const pointCards = contentRef.current.querySelectorAll('.product-details-point-card');
        const tables = contentRef.current.querySelectorAll('.product-details-table-wrapper');
        const stickyImg = document.querySelector('.product-details-sticky-img');

        if (breadcrumbs) {
          tl.fromTo(
            breadcrumbs,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
        }

        if (mainHeading) {
          tl.fromTo(
            mainHeading,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
            '-=0.25'
          );
        }

        if (stickyImg) {
          tl.fromTo(
            stickyImg,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.4'
          );
        }

        if (sectionBanners.length > 0) {
          tl.fromTo(
            sectionBanners,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' },
            '-=0.3'
          );
        }

        if (paragraphs.length > 0) {
          tl.fromTo(
            paragraphs,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power2.out' },
            '-=0.35'
          );
        }

        if (pointCards.length > 0) {
          tl.fromTo(
            pointCards,
            { y: 24, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.035,
              ease: 'power2.out',
            },
            '-=0.35'
          );
        }

        if (tables.length > 0) {
          tl.fromTo(
            tables,
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: 'power3.out' },
            '-=0.3'
          );
        }
      }, contentRef);

      return () => ctx.revert();
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
            <div ref={headerBarRef} className="product-details-header-bar">
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

              {/* Top Right Actions: Product Dropdown Selector & Download */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Product Dropdown Selector on top of content */}
                {subcategoryData?.productsList && subcategoryData.productsList.length > 0 && (
                  <div className="product-details-dropdown-box">
                    <label className="product-details-dropdown-label" htmlFor="product-details-select-input">
                      Select Product:
                    </label>
                    <div className="product-details-select-wrapper">
                      <select
                        id="product-details-select-input"
                        value={activeProductId}
                        onChange={(e) => handleProductSelect(e.target.value)}
                        className="product-details-select-input"
                        aria-label="Select Product"
                      >
                        {subcategoryData.productsList.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="product-details-select-arrow" />
                    </div>
                  </div>
                )}

                <Link
                  href="/catalogues"
                  className="product-details-download-btn"
                >
                  <span>{productData.downloadTitle || subcategoryData.subcategoryTitle}</span>
                  <div className="product-details-download-icon-circle">
                    <Download size={13} strokeWidth={2.4} />
                  </div>
                </Link>
              </div>
            </div>

            {/* 65% Left Content / 35% Right Sticky Image Layout */}
            <div className="product-details-2col-layout">
              {/* Left Column (65% width) */}
              <div
                ref={contentRef}
                className="product-details-col-left"
              >
                {/* Content Breadcrumbs */}
                <div className="product-details-content-breadcrumbs">
                  <Link href="/products" className="product-details-breadcrumb-link">
                    {subcategoryData.parentCategoryTitle || 'PRODUCTS'}
                  </Link>
                  <span className="product-details-breadcrumb-sep">/</span>
                  <Link
                    href={subcategoryData.parentCategoryHref || '/products'}
                    className="product-details-breadcrumb-link"
                  >
                    {subcategoryData.subcategoryTitle}
                  </Link>
                  <span className="product-details-breadcrumb-sep">/</span>
                  <span className="product-details-breadcrumb-current">
                    {productData?.title || subcategoryData?.subcategoryTitle}
                  </span>
                </div>

                {/* Main Product Title matching attached UI screenshot */}
                <h1 className="product-details-main-heading">
                  {productData?.title || subcategoryData?.subcategoryTitle}
                </h1>

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
                            const { title, desc } = sec.bulletsAsHeadings
                              ? { title: typeof bItem === 'string' ? bItem : bItem.title, desc: '' }
                              : splitPointItem(bItem);

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

              {/* Right Column (35% width) - Sticky to screen */}
              <div className="product-details-col-right">
                {featuredProductImage && (
                  <div className="product-details-sticky-img-box">
                    <img
                      src={encodeURI(featuredProductImage)}
                      alt={productData?.title || subcategoryData?.subcategoryTitle || 'Product Image'}
                      className="product-details-sticky-img"
                    />
                  </div>
                )}
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
