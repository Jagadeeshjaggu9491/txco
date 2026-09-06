'use client';

import React, { useEffect, useRef, useState } from 'react';
import { certificatesList } from '@/data/certificationsData';
import CertificatePdfCard from './CertificatePdfCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink, Download, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationsGrid() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedCert, setSelectedCert] = useState(null);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section ref={sectionRef} className="certifications-grid-section">
      <div className="certifications-grid-container">
        {/* Section Heading & Filter Header */}
        <div className="certifications-section-header">
          <div className="certifications-header-tag">
            <ShieldCheck size={18} color="#114680" />
            <span>ACCEDITED QUALITY & SAFETY</span>
          </div>
          <h2 className="certifications-section-title">
            Official Quality & Compliance Certifications
          </h2>
          <p className="certifications-section-desc">
            Explore and download our official ISO compliance certificates. Click on any certificate below to view the full verified PDF document.
          </p>
        </div>

        {/* 3-Column Certificates Grid */}
        <div className="certifications-cards-grid">
          {certificatesList.map((item) => (
            <div
              key={item.id}
              ref={addToCardsRef}
              className="certificate-card-wrapper"
            >
              <CertificatePdfCard
                item={item}
                onSelectForModal={(cert) => setSelectedCert(cert)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal Viewer */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div
            className="cert-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-block">
                <ShieldCheck size={20} className="cert-modal-icon" />
                <div>
                  <h3 className="cert-modal-title">{selectedCert.title}</h3>
                  <span className="cert-modal-subtitle">{selectedCert.standard} • {selectedCert.category}</span>
                </div>
              </div>
              <button
                type="button"
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                title="Close Viewer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body - PDF Iframe Viewer */}
            <div className="cert-modal-body">
              <iframe
                src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                title={selectedCert.title}
                className="cert-pdf-iframe"
              />
            </div>

            {/* Modal Footer */}
            <div className="cert-modal-footer">
              <span className="cert-modal-filename">{selectedCert.fileName}</span>
              <div className="cert-modal-actions">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn cert-modal-btn-outline"
                >
                  <ExternalLink size={15} />
                  <span>Open Full Window</span>
                </a>
                <a
                  href={selectedCert.pdfUrl}
                  download={selectedCert.fileName}
                  className="cert-modal-btn cert-modal-btn-fill"
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
