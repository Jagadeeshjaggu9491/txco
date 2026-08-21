'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { faqCategories, faqItemsList } from '@/data/faqsData';
import { Search, X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FaqsAccordion() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const sectionRef = useRef(null);
  const searchRef = useRef(null);
  const pillsRef = useRef(null);
  const itemsRef = useRef([]);
  const sidebarRef = useRef(null);

  itemsRef.current = [];

  const addToItemsRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const filteredFaqs = faqItemsList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Topics' || item.category === selectedCategory;

    const matchesSearch =
      !searchQuery.trim() ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  // Initial Entrance Animation with ScrollTrigger
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (searchRef.current) {
        tl.fromTo(
          searchRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.05,
            ease: 'power3.out',
          },
          '-=0.35'
        );
      }

      if (itemsRef.current.length > 0) {
        tl.fromTo(
          itemsRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      if (sidebarRef.current) {
        tl.fromTo(
          sidebarRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter change animation
  useEffect(() => {
    if (itemsRef.current.length > 0) {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [selectedCategory, searchQuery]);

  return (
    <section ref={sectionRef} className="faqs-main-section">
      <div className="faqs-container">
        {/* Search Input Bar */}
        <div ref={searchRef} className="faqs-search-wrapper">
          <Search size={20} color="#64748b" style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword, standard (API 6A, ASME), or gasket type..."
            className="faqs-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.2rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Clear Search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div ref={pillsRef} className="faqs-categories-bar">
          {faqCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenFaqIndex(0);
                }}
                className={`faq-category-pill ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-Column FAQs Layout */}
        <div className="faqs-layout-grid">
          {/* Left Column: Interactive Accordion */}
          <div>
            {filteredFaqs.length > 0 ? (
              <div className="faq-accordion-list">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.id}
                      ref={addToItemsRef}
                      className={`faq-item-box ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="faq-question-btn"
                      >
                        <span className="faq-question-title">
                          {faq.question}
                        </span>

                        <div className="faq-icon-circle">
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="faq-answer-box">
                          <p className="faq-answer-text">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white, #ffffff)',
                  borderRadius: '16px',
                  padding: '4rem 2rem',
                  textAlign: 'center',
                  border: '1.5px solid var(--border-light, #edf2f7)',
                }}
              >
                <HelpCircle size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '0.5rem' }}>
                  No matching questions found
                </h3>
                <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  We couldn't find any questions matching "{searchQuery}". Try using broader keywords or explore all topics.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Topics');
                  }}
                  className="txco-btn txco-btn-steel"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Support & RFQ Sidebar Card */}
          <aside className="faq-support-sidebar">
            <div ref={sidebarRef} className="faq-help-card">
              <span className="faq-help-badge">
                ENGINEERING DESK
              </span>

              <h3 className="faq-help-title">
                Can't find what you're looking for?
              </h3>

              <p className="faq-help-desc">
                Our plant engineers and material metallurgists in Hyderabad are available to answer your specific dimensional, torque, and material compatibility requirements.
              </p>

              <div style={{ marginBottom: '1.8rem' }}>
                <div className="faq-contact-item">
                  <Phone size={18} color="var(--slate-blue, #114680)" />
                  <a href="tel:+916302152938" style={{ color: '#1e293b', textDecoration: 'none' }}>
                    +91 6302 152 938
                  </a>
                </div>

                <div className="faq-contact-item">
                  <Mail size={18} color="var(--slate-blue, #114680)" />
                  <a href="mailto:info@txco.co" style={{ color: '#1e293b', textDecoration: 'none' }}>
                    info@txco.co
                  </a>
                </div>

                <div className="faq-contact-item">
                  <ShieldCheck size={18} color="var(--slate-blue, #114680)" />
                  <span style={{ color: 'var(--text-secondary, #475569)', fontSize: '0.86rem' }}>
                    EN 10204 3.1 & 3.2 Traceability
                  </span>
                </div>
              </div>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  className="txco-btn txco-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Submit Custom RFQ</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
