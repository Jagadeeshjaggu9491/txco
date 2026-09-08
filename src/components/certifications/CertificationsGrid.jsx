'use client';

import React, { useEffect, useRef, useState } from 'react';
import { certificatesList } from '@/data/certificationsData';
import CertificatePdfCard from './CertificatePdfCard';
import CatalogueFlipbookViewer from '@/components/catalogues/CatalogueFlipbookViewer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

      {/* Interactive Flipbook / Catalogue-style PDF Reader Modal */}
      {selectedCert && (
        <CatalogueFlipbookViewer
          catalogueItem={{
            id: selectedCert.id,
            title: `${selectedCert.standard} - ${selectedCert.title}`,
            pdfUrl: selectedCert.pdfUrl,
            fileName: selectedCert.fileName,
          }}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
