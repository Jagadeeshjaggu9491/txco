'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Eye, Download, ShieldCheck, FileText, ExternalLink } from 'lucide-react';

export default function CertificatePdfCard({ item, onSelectForModal }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [renderFailed, setRenderFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function renderPdfThumbnail() {
      if (typeof window === 'undefined' || !item?.pdfUrl) return;
      try {
        setLoading(true);
        setRenderFailed(false);

        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument({ url: item.pdfUrl });
        const doc = await loadingTask.promise;
        const page = await doc.getPage(1);

        if (!isMounted) return;

        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d');

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.warn('PDF canvas render fallback active:', err);
        if (isMounted) {
          setRenderFailed(true);
          setLoading(false);
        }
      }
    }

    renderPdfThumbnail();

    return () => {
      isMounted = false;
    };
  }, [item?.pdfUrl]);

  return (
    <div className="certificate-card-item">
      {/* Category Badge Header */}
      <div className="certificate-card-badge">
        <ShieldCheck size={16} />
        <span>{item.standard}</span>
      </div>

      {/* Certificate Frame / Preview */}
      <div 
        className="certificate-img-frame"
        onClick={() => onSelectForModal ? onSelectForModal(item) : window.open(item.pdfUrl, '_blank')}
        title={`Click to preview ${item.title}`}
      >
        {loading && (
          <div className="certificate-pdf-skeleton">
            <div className="pdf-skeleton-spinner"></div>
            <span>Rendering Certificate...</span>
          </div>
        )}

        {renderFailed ? (
          <div className="certificate-pdf-fallback-box">
            <FileText size={48} className="pdf-fallback-icon" />
            <span className="pdf-fallback-standard">{item.standard}</span>
            <span className="pdf-fallback-tag">PDF Certificate</span>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="certificate-pdf-canvas"
            style={{ display: loading ? 'none' : 'block' }}
          />
        )}

        <div className="certificate-frame-hover-overlay">
          <span className="hover-preview-btn">
            <Eye size={18} />
            Preview Document
          </span>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="certificate-card-content">
        <h3 className="certificate-title">{item.title}</h3>
        <p className="certificate-description">{item.description}</p>

        {/* Action Buttons */}
        <div className="certificate-action-buttons">
          <button
            type="button"
            className="cert-btn cert-btn-primary"
            onClick={() => onSelectForModal ? onSelectForModal(item) : window.open(item.pdfUrl, '_blank')}
          >
            <Eye size={15} />
            <span>View PDF</span>
          </button>

          <a
            href={item.pdfUrl}
            download={item.fileName || 'certificate.pdf'}
            className="cert-btn cert-btn-secondary"
            title={`Download ${item.title}`}
          >
            <Download size={15} />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}
