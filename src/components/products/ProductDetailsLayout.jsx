'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft, Play, ArrowRight, Download, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { TableFigureIcon } from '@/components/products/EngineeringProductDiagrams';

// Helper to render markdown bold **text** as <strong>text</strong>
function renderFormattedText(text) {
  if (!text) return null;
  if (typeof text !== 'string') return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderEngineeringTable(tableData, anchorId) {
  if (!tableData) return null;
  return (
    <div id={anchorId} className="product-details-table-wrapper">
      <table className="product-details-table">
        <thead>
          <tr>
            {tableData.headers.map((th, thIdx) => (
              <th key={thIdx}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rIdx) => {
            const hasFigureCol = tableData.headers.some((h) =>
              h.toUpperCase().includes('FIGURE')
            );

            if (Array.isArray(row.cells)) {
              return (
                <tr key={rIdx}>
                  {row.cells.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={cIdx === 0 ? 'product-details-table-first-col' : ''}
                    >
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
            ].filter((v, idx) => idx < tableData.headers.length);

            return (
              <tr key={rIdx}>
                {values.map((val, vIdx) => (
                  <td
                    key={vIdx}
                    className={vIdx === 0 ? 'product-details-table-first-col' : ''}
                  >
                    {val || '—'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {tableData.footnote && (
        <div className="product-details-table-footnote">
          {tableData.footnote.split('\n').map((line, lIdx) => (
            <div key={lIdx}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
}

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

  // If product data explicitly specifies an image (e.g. Planiflex, Spiral Wound, etc.)
  if (pData?.image && !pData.image.includes('place-holder')) {
    return pData.image;
  }

  const pTitle = (pData?.title || '').toLowerCase();
  const subTitle = (subcategory?.subcategoryTitle || '').toLowerCase();
  const isNonMetallic = subTitle.includes('non-metallic');

  if (pTitle.includes('planiflex') || pTitle.includes('compressed') || pTitle.includes('asbestos-free')) {
    return '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif';
  }
  if (pTitle.includes('rubber-coated') || pTitle.includes('rubber coated')) {
    return '/images/products/new/Rubber-Coated RTJ Gaskets.png';
  }
  if (pTitle.includes('ptfe-insert') || pTitle.includes('ptfe insert')) {
    return '/images/products/new/PTFE-Insert RTJ Gaskets.png';
  }
  if (pTitle.includes('protective-coated') || pTitle.includes('protective coated')) {
    return '/images/products/new/Protective-Coated RTJ Gaskets.png';
  }
  if (pTitle.includes('lens ring') || pTitle.includes('lens-ring') || pTitle.includes('din 2696')) {
    return '/images/products/new/Lens Rings (DIN 2696).png';
  }
  if (pTitle.includes('blind rtj') || pTitle.includes('blind gasket') || pTitle.includes('spectacle blind')) {
    return '/images/products/new/Blind RTJ Gaskets.png';
  }
  if (pTitle.includes('serrated') || pTitle.includes('soft-material') || pTitle.includes('soft material')) {
    return '/images/products/new/Soft_Material_Serrated_RTJ_Gaskets_Banner.png';
  }
  if (pTitle.includes('srx') || pTitle.includes('sbx') || pTitle.includes('ix gasket')) {
    return '/images/products/new/SRX_SBX_Gaskets_Banner.png';
  }
  if (pTitle.includes('rx') || pTitle.includes('bx') || pTitle.includes('bonnet ring')) {
    return '/images/products/new/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner.png';
  }
  if (pTitle.includes('custom machined') || pTitle.includes('delta gasket') || pTitle.includes('bridgeman') || pTitle.includes('weld-lip') || pTitle.includes('weld lip')) {
    return '/images/products/new/Custom_Machined_Metallic_Ring_Seals_Banner.png';
  }
  if (!isNonMetallic && (pTitle.includes('ring type joint') || pTitle.includes('rtj') || subTitle === 'metallic gaskets')) {
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

      // Only scroll to top if user was scrolled down deep
      if (window.scrollY > 250) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
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

  const scrollToTechnicalData = () => {
    if (typeof window === 'undefined') return;
    const el =
      document.getElementById('technical-data') ||
      document.querySelector('.product-details-table-wrapper') ||
      document.getElementById('product-dimensions') ||
      document.querySelector('.product-details-full-width-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToDimensions = () => {
    if (typeof window === 'undefined') return;
    const el =
      document.getElementById('product-dimensions') ||
      document.getElementById('technical-data') ||
      document.querySelector('.product-details-table-wrapper') ||
      document.querySelector('.product-details-full-width-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Section 0 is the primary overview section
  const sec0 = productData?.sections?.[0];
  const remainingSections = (productData?.sections || []).slice(1);

  // Intro paragraphs for the top left column
  const sec0Paragraphs = sec0?.paragraphs || [];
  // If sec0 has bullets or subParagraphs, show first 2 paragraphs in upper column
  const topOverviewParagraphs =
    sec0?.bullets?.length || sec0?.subParagraphs?.length
      ? sec0Paragraphs.slice(0, 2)
      : sec0Paragraphs;
  const lowerSec0Paragraphs =
    sec0?.bullets?.length || sec0?.subParagraphs?.length
      ? sec0Paragraphs.slice(2)
      : [];

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

        // Recalculate ScrollTrigger positions once intro completes
        tl.add(() => {
          if (typeof window !== 'undefined') {
            ScrollTrigger.refresh();
          }
        });
      }, contentRef);

      return () => ctx.revert();
    }
  }, [activeProductId]);

  // Ensure ScrollTrigger updates whenever activeProductId changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 120);
    return () => clearTimeout(timer);
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

            {/* 2-Column Overview Layout matching client screenshot */}
            <div className="product-details-2col-layout">
              {/* Left Column (58-60% width) */}
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

                {/* Main Product Title */}
                <h1 className="product-details-main-heading">
                  {productData?.title || subcategoryData?.subcategoryTitle}
                </h1>

                {/* Technical Quick Jump Buttons (Matching Screenshot) */}
                {/* <div className="product-details-tech-actions">
                  <button
                    type="button"
                    className="product-details-tech-btn"
                    onClick={scrollToTechnicalData}
                    aria-label="Technical Data"
                  >
                    <span>
                      {productData.techDataButtonText ||
                        `TECHNICAL DATA OF ${productData?.title || subcategoryData?.subcategoryTitle || 'PRODUCT'}`}
                    </span>
                    <span className="product-details-tech-btn-arrow">&rarr;</span>
                  </button>

                  <button
                    type="button"
                    className="product-details-tech-btn"
                    onClick={scrollToDimensions}
                    aria-label="Sheet Dimensions & Dimensional Tolerances"
                  >
                    <span>
                      {productData.dimensionsButtonText ||
                        'SHEET DIMENSIONS AND DIMENSIONAL TOLERANCES'}
                    </span>
                    <span className="product-details-tech-btn-arrow">&rarr;</span>
                  </button>
                </div> */}

                {/* Overview Paragraphs */}
                {topOverviewParagraphs.map((pText, pIdx) => (
                  <p key={pIdx} className="product-details-paragraph">
                    {renderFormattedText(pText)}
                  </p>
                ))}

                {/* Bullet Points / Models List (Matching Screenshot) */}
                {sec0?.bullets && sec0.bullets.length > 0 ? (
                  <>
                    <p className="product-details-models-lead">
                      {renderFormattedText(
                        sec0.bulletsIntro ||
                        `The ${productData?.title || subcategoryData?.subcategoryTitle} line includes the following models:`
                      )}
                    </p>
                    <ul className="product-details-client-bullets">
                      {sec0.bullets.map((bItem, bIdx) => {
                        const { title, desc } = splitPointItem(bItem);
                        return (
                          <li key={bIdx}>
                            <strong>{title}</strong>
                            {desc ? ` – ${desc}` : ''}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : remainingSections.length > 0 && remainingSections.some((s) => s.bullets?.length || s.heading) ? (
                  <>
                    <p className="product-details-models-lead">
                      The <strong>{productData?.title || subcategoryData?.subcategoryTitle} line</strong> includes the following models:
                    </p>
                    <ul className="product-details-client-bullets">
                      {remainingSections.map((sec, sIdx) => {
                        const firstBullet = sec.bullets?.[0] ? splitPointItem(sec.bullets[0]) : null;
                        return (
                          <li key={sIdx}>
                            <strong>{sec.heading}</strong>
                            {firstBullet?.desc
                              ? ` – ${firstBullet.desc}`
                              : firstBullet?.title
                                ? ` – ${firstBullet.title}`
                                : sec.paragraphs?.[0]
                                  ? ` – ${sec.paragraphs[0]}`
                                  : ''}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </div>

              {/* Right Column (40-42% width) - Side-by-side with overview */}
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

            {/* Full Width Lower Content Area (Matching Screenshot) */}
            <div className="product-details-full-width-content">
              {/* Lower Sec0 Paragraphs (if any) */}
              {lowerSec0Paragraphs.map((pText, pIdx) => (
                <p key={`lower-p-${pIdx}`} className="product-details-paragraph">
                  {renderFormattedText(pText)}
                </p>
              ))}

              {/* Sec0 Sub Paragraphs (e.g. Planiflex compressed fiber sheets details) */}
              {sec0?.subParagraphs &&
                sec0.subParagraphs.map((spText, spIdx) => (
                  <p key={`sp-${spIdx}`} className="product-details-paragraph">
                    {renderFormattedText(spText)}
                  </p>
                ))}

              {/* Sec0 Table (if any) */}
              {sec0?.table && renderEngineeringTable(sec0.table, 'technical-data')}

              {/* Sec0 Assembly Diagram (if any) */}
              {sec0?.showAssemblyDiagram && (
                <div className="product-details-image-box d-none">
                  <img
                    src={
                      sec0.image ||
                      productData?.image ||
                      ((subcategoryData?.subcategoryTitle?.toLowerCase().includes('flange') || subcategoryData?.parentCategoryTitle?.toLowerCase().includes('flange'))
                        ? '/images/product-detials-images/flanges-product-detials-place-holder-img.png'
                        : (subcategoryData?.subcategoryTitle?.toLowerCase().includes('valve') || subcategoryData?.parentCategoryTitle?.toLowerCase().includes('valve'))
                          ? '/images/product-detials-images/valve-components-product-detials-place-holder-img.png'
                          : '/images/product-detials-images/gaskets-product-detials-place-holder-img.png')
                    }
                    alt={sec0.heading || productData?.title || 'Product Details Technical Drawing'}
                    className="product-details-image"
                  />
                </div>
              )}

              {/* Subsequent Section Blocks */}
              {remainingSections.map((sec, idx) => (
                <div key={`rem-sec-${idx}`} id={idx === 0 ? 'product-dimensions' : undefined} className="product-details-section-block">
                  {/* Header Bar with User Styled Cool Grey Background */}
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
                        {renderFormattedText(pText)}
                      </p>
                    ))}

                  {/* Bullets Intro */}
                  {sec.bulletsIntro && (
                    <p className="product-details-bullets-intro">
                      {renderFormattedText(sec.bulletsIntro)}
                    </p>
                  )}

                  {/* Bullets List / Points */}
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
                        {renderFormattedText(spText)}
                      </p>
                    ))}

                  {/* Engineering Specification Table */}
                  {sec.table && renderEngineeringTable(sec.table, idx === 0 ? 'technical-data' : undefined)}
                </div>
              ))}
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
