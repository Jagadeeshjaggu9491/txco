'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Download,
  RotateCcw,
  LayoutGrid,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

export default function CatalogueFlipbookViewer({ catalogueItem }) {
  const pdfUrl = catalogueItem?.pdfUrl || '/images/catalogues/TXCO-Global-Corporate-Presentation.pdf';

  const [pdfDoc, setPdfDoc] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 1-based odd number for left page of spread: [1, 2], [3, 4], ...
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // 3D Leaf Flip State
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('forward');
  const [flipTriggered, setFlipTriggered] = useState(false);

  // Page Images Cache
  const [pageImages, setPageImages] = useState({});

  const containerRef = useRef(null);

  // Detect Mobile Screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load PDF document using PDF.js
  useEffect(() => {
    let isMounted = true;

    async function loadPdf() {
      try {
        setLoading(true);
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const doc = await loadingTask.promise;

        if (isMounted) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF:', err);
        setLoading(false);
      }
    }

    loadPdf();
    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  // Render individual page to Image Data URL
  const renderPageToDataUrl = useCallback(
    async (pageNum) => {
      if (!pdfDoc || pageNum < 1 || pageNum > totalPages) return null;
      if (pageImages[pageNum]) return pageImages[pageNum];

      try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d');

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        setPageImages((prev) => ({ ...prev, [pageNum]: dataUrl }));
        return dataUrl;
      } catch (err) {
        console.warn(`Error rendering page ${pageNum}:`, err);
        return null;
      }
    },
    [pdfDoc, totalPages, pageImages]
  );

  // Pre-render surrounding pages for instantaneous page-turning
  useEffect(() => {
    if (!pdfDoc || totalPages === 0) return;

    const pagesToRender = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
    ].filter((p) => p >= 1 && p <= totalPages);

    pagesToRender.forEach((p) => {
      if (!pageImages[p]) {
        renderPageToDataUrl(p);
      }
    });
  }, [pdfDoc, currentPage, totalPages, renderPageToDataUrl, pageImages]);

  // Smooth Next Page Flip
  const handleNextPage = () => {
    if (isFlipping) return;
    const step = isMobile ? 1 : 2;

    if (currentPage + step <= totalPages + 1) {
      if (isMobile) {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        return;
      }

      setIsFlipping(true);
      setFlipDirection('forward');
      setFlipTriggered(false);

      requestAnimationFrame(() => {
        setFlipTriggered(true);
      });

      setTimeout(() => {
        setCurrentPage((prev) => Math.min(prev + 2, totalPages));
        setIsFlipping(false);
        setFlipTriggered(false);
      }, 550);
    }
  };

  // Smooth Prev Page Flip
  const handlePrevPage = () => {
    if (isFlipping) return;
    const step = isMobile ? 1 : 2;

    if (currentPage > 1) {
      if (isMobile) {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        return;
      }

      setIsFlipping(true);
      setFlipDirection('backward');
      setFlipTriggered(false);

      requestAnimationFrame(() => {
        setFlipTriggered(true);
      });

      setTimeout(() => {
        setCurrentPage((prev) => Math.max(prev - 2, 1));
        setIsFlipping(false);
        setFlipTriggered(false);
      }, 550);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevPage();
      } else if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Page input jump
  const handlePageInput = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      const target = isMobile ? val : val % 2 === 0 ? val - 1 : val;
      setCurrentPage(target);
    }
  };

  // Active spread pages
  const leftPageNum = currentPage;
  const rightPageNum = currentPage + 1;

  // Pages under / during flip
  const underLeftNum = flipDirection === 'backward' ? currentPage - 2 : leftPageNum;
  const underRightNum = flipDirection === 'forward' ? currentPage + 3 : rightPageNum;

  const turningFrontNum = flipDirection === 'forward' ? rightPageNum : currentPage - 1;
  const turningBackNum = flipDirection === 'forward' ? currentPage + 2 : currentPage;

  return (
    <div className="flipbook-fullscreen-wrapper" ref={containerRef}>
      {/* 1. Top Control Toolbar */}
      <header className="flipbook-top-bar">
        {/* Exit Reader */}
        <Link href="/catalogues" className="flipbook-back-btn">
          <ArrowLeft size={16} />
          <span>Exit Reader</span>
        </Link>

        {/* Document Title */}
        <div className="flipbook-title-block">
          <BookOpen size={18} color="#38bdf8" />
          <span className="flipbook-title-text">
            {catalogueItem?.title || 'TXCO Global Corporate Presentation'}
          </span>
        </div>

        {/* View & Tool Actions */}
        <div className="flipbook-tools">
          {/* Zoom Out */}
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
            className="flipbook-tool-btn"
            title="Zoom Out"
          >
            <ZoomOut size={17} />
          </button>

          {/* Reset Zoom */}
          <button
            type="button"
            onClick={() => setZoomLevel(1)}
            className="flipbook-tool-btn"
            title="Reset Zoom (100%)"
          >
            <RotateCcw size={16} />
          </button>

          {/* Zoom In */}
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
            className="flipbook-tool-btn"
            title="Zoom In"
          >
            <ZoomIn size={17} />
          </button>

          {/* Thumbnails Drawer Toggle */}
          <button
            type="button"
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="flipbook-tool-btn"
            style={{ backgroundColor: showThumbnails ? 'rgba(56, 189, 248, 0.25)' : undefined }}
            title="Thumbnails Drawer"
          >
            <LayoutGrid size={17} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flipbook-tool-btn"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>

          {/* Direct Download Button */}
          <a
            href={pdfUrl}
            download
            className="flipbook-download-btn"
            title="Download PDF"
          >
            <Download size={15} />
            <span>Download</span>
          </a>
        </div>
      </header>

      {/* 2. Main Flipbook Stage */}
      <main className="flipbook-stage-area">
        {/* Left Side Floating Arrow */}
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage <= 1 || isFlipping}
          className="flipbook-arrow-btn flipbook-arrow-left"
          aria-label="Previous Page"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Side Floating Arrow */}
        <button
          type="button"
          onClick={handleNextPage}
          disabled={
            (isMobile ? currentPage >= totalPages : currentPage + 1 >= totalPages) || isFlipping
          }
          className="flipbook-arrow-btn flipbook-arrow-right"
          aria-label="Next Page"
        >
          <ChevronRight size={30} />
        </button>

        {/* Book Container with Perspective */}
        <div
          className="flipbook-book-perspective"
          style={{
            transform: `scale(${zoomLevel})`,
          }}
        >
          {loading ? (
            <div style={{ color: '#94a3b8', textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.6rem' }}>
                Loading Interactive 3D Flipbook...
              </div>
              <div style={{ fontSize: '0.85rem' }}>Preparing pages from PDF presentation</div>
            </div>
          ) : isMobile ? (
            /* Single Page View for Mobile Devices */
            <div
              className="flipbook-mobile-page"
              onClick={handleNextPage}
              style={{ cursor: 'pointer' }}
            >
              {pageImages[currentPage] ? (
                <img
                  src={pageImages[currentPage]}
                  alt={`Page ${currentPage}`}
                  style={{ maxWidth: '88vw', maxHeight: '72vh', objectFit: 'contain', display: 'block', backgroundColor: '#ffffff' }}
                />
              ) : (
                <div style={{ width: '85vw', height: '65vh', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                  Loading Page {currentPage}...
                </div>
              )}
            </div>
          ) : (
            /* Double-Page Spread View with Real 3D Turning Leaf */
            <div className="flipbook-spread-container">
              {/* Underneath Base Left Page */}
              <div
                className="flipbook-page-canvas-box left-page"
                onClick={handlePrevPage}
                style={{ cursor: currentPage > 1 ? 'pointer' : 'default' }}
              >
                {pageImages[isFlipping ? underLeftNum : leftPageNum] ? (
                  <img
                    src={pageImages[isFlipping ? underLeftNum : leftPageNum]}
                    alt={`Page ${isFlipping ? underLeftNum : leftPageNum}`}
                    style={{ maxWidth: '42vw', maxHeight: '76vh', objectFit: 'contain', display: 'block' }}
                  />
                ) : (
                  <div style={{ width: '42vw', height: '76vh', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                    {underLeftNum >= 1 ? `Loading Page ${underLeftNum}...` : ''}
                  </div>
                )}
              </div>

              {/* Underneath Base Right Page */}
              <div
                className="flipbook-page-canvas-box right-page"
                onClick={handleNextPage}
                style={{ cursor: currentPage + 1 < totalPages ? 'pointer' : 'default' }}
              >
                {pageImages[isFlipping ? underRightNum : rightPageNum] ? (
                  <img
                    src={pageImages[isFlipping ? underRightNum : rightPageNum]}
                    alt={`Page ${isFlipping ? underRightNum : rightPageNum}`}
                    style={{ maxWidth: '42vw', maxHeight: '76vh', objectFit: 'contain', display: 'block' }}
                  />
                ) : (
                  <div style={{ width: '42vw', height: '76vh', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                    {underRightNum <= totalPages ? `Loading Page ${underRightNum}...` : 'End of Catalogue'}
                  </div>
                )}
              </div>

              {/* 3D Flipping Leaf (Active only during page turn) */}
              {isFlipping && (
                <div
                  className={`flipbook-turning-leaf turning-${flipDirection} ${flipTriggered ? 'flipped' : ''}`}
                >
                  {/* Front Face of Turning Leaf */}
                  <div className="flipbook-leaf-face flipbook-leaf-front">
                    {pageImages[turningFrontNum] && (
                      <img
                        src={pageImages[turningFrontNum]}
                        alt={`Page ${turningFrontNum}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    )}
                    <div className="flipbook-leaf-shade" />
                  </div>

                  {/* Back Face of Turning Leaf */}
                  <div className="flipbook-leaf-face flipbook-leaf-back">
                    {pageImages[turningBackNum] && (
                      <img
                        src={pageImages[turningBackNum]}
                        alt={`Page ${turningBackNum}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    )}
                    <div className="flipbook-leaf-shade" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* 3. Slide-out Thumbnails Drawer */}
      {showThumbnails && totalPages > 0 && (
        <div className="flipbook-thumbnails-drawer">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isSelected = isMobile
              ? currentPage === pageNum
              : currentPage === pageNum || currentPage + 1 === pageNum;

            return (
              <div
                key={pageNum}
                onClick={() => {
                  const target = isMobile ? pageNum : pageNum % 2 === 0 ? pageNum - 1 : pageNum;
                  setCurrentPage(target);
                  setShowThumbnails(false);
                }}
                className={`flipbook-thumbnail-item ${isSelected ? 'active' : ''}`}
              >
                <div className="flipbook-thumbnail-canvas" style={{ overflow: 'hidden' }}>
                  {pageImages[pageNum] ? (
                    <img
                      src={pageImages[pageNum]}
                      alt={`Thumbnail Page ${pageNum}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#052C58', fontWeight: '700' }}>
                      {pageNum}
                    </div>
                  )}
                </div>
                <span className="flipbook-thumbnail-label">Page {pageNum}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Bottom Control Bar */}
      <footer className="flipbook-bottom-bar">
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage <= 1 || isFlipping}
          className="flipbook-tool-btn"
          title="Previous Page"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Indicator & Jump Input */}
        <div className="flipbook-page-indicator">
          <span>Page</span>
          <input
            type="number"
            min={1}
            max={totalPages || 1}
            value={currentPage}
            onChange={handlePageInput}
            className="flipbook-page-input"
          />
          <span>of {totalPages || 1}</span>
        </div>

        <button
          type="button"
          onClick={handleNextPage}
          disabled={
            (isMobile ? currentPage >= totalPages : currentPage + 1 >= totalPages) || isFlipping
          }
          className="flipbook-tool-btn"
          title="Next Page"
        >
          <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
}
