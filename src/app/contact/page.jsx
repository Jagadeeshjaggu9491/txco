'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  UploadCloud,
  ShieldCheck,
  Award,
  Settings,
  HelpCircle,
  Globe2,
  Building2,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  contactHeroData,
  directChannelsData,
  inquiryTypesList,
  industriesList,
  txcoAdvantagesList,
  globalHubsData,
  contactFaqsData,
  facilityMapData,
} from '@/data/contactData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const formSectionRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Oil & Gas',
    inquiryType: 'Request for Quote (RFQ)',
    message: '',
    attachmentName: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  // Active FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        );
      }

      // Info Cards animation
      if (cardsRef.current) {
        gsap.fromTo(
          '.contact-card-item',
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, attachmentName: file.name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
    }, 900);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <>
      <Header />

      <main style={{ width: '100%', backgroundColor: 'var(--bg-light-surface)', color: 'var(--dark-navy)', overflow: 'hidden' }}>
        {/* =========================================================================
            1. HERO SECTION (Matching About Us Hero)
        ========================================================================= */}
        <section ref={heroRef} className="contact-hero-section">
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <h1 ref={titleRef} className="contact-hero-title">
                {contactHeroData.title}
              </h1>

              <p ref={subtitleRef} className="contact-hero-subtitle">
                {contactHeroData.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK CONTACT DETAILS (3-Column Cards Grid)
        ========================================================================= */}
        <section ref={cardsRef} className="contact-direct-section">
          <div className="txco-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge" style={{ color: 'var(--slate-blue)' }}>
                DIRECT CHANNELS
              </span>
              <h2 className="section-title section-title-center">
                How Would You Like to Connect?
              </h2>
            </div>

            <div className="grid-3-col contact-channel-grid">
              {directChannelsData.map((channel, idx) => (
                <div key={idx} className="contact-card-item contact-channel-card">
                  <div>
                    <div className="contact-icon-box" style={{ backgroundColor: channel.iconBg }}>
                      {channel.type === 'phone' && <Phone size={26} />}
                      {channel.type === 'email' && <Mail size={26} />}
                      {channel.type === 'location' && <MapPin size={26} />}
                    </div>

                    <h3 className="contact-card-heading">
                      {channel.title}
                    </h3>

                    <p className="contact-card-text">
                      {channel.description}
                    </p>
                  </div>

                  <div>
                    {channel.actionHref ? (
                      <a href={channel.actionHref} className="contact-action-link">
                        {channel.mainActionText}
                      </a>
                    ) : (
                      <span className="contact-action-link" style={{ cursor: 'default' }}>
                        {channel.mainActionText}
                      </span>
                    )}
                    <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {channel.subText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN RFQ & TECHNICAL INQUIRY FORM SECTION
        ========================================================================= */}
        <section ref={formSectionRef} className="contact-form-section">
          <div className="txco-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.35fr 0.85fr',
                gap: '3rem',
                alignItems: 'flex-start',
              }}
              className="contact-form-layout-grid"
            >
              {/* Left Column: Interactive RFQ Form Card */}
              <div className="rfq-form-card">
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <MessageSquare size={20} color="var(--slate-blue)" />
                    <span className="section-badge" style={{ margin: 0, color: 'var(--slate-blue)' }}>
                      FAST RFQ & INQUIRY
                    </span>
                  </div>

                  <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', marginBottom: '0.6rem' }}>
                    Request a Technical Quote
                  </h2>

                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    Please fill out the form below. Our engineering and estimating team will evaluate your requirements
                    and respond promptly with quotation and technical specifications.
                  </p>
                </div>

                {/* Inquiry Type Selector Pills */}
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '0.8rem',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Select Inquiry Category <span style={{ color: '#e11d48' }}>*</span>
                  </label>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {inquiryTypesList.map((type, idx) => {
                      const isSelected = formData.inquiryType === type;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type }))}
                          className={`inquiry-pill-btn ${isSelected ? 'selected' : ''}`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Elements */}
                {formStatus.isSubmitted ? (
                  <div
                    style={{
                      padding: '3rem 2rem',
                      backgroundColor: '#f0fdf4',
                      borderRadius: '16px',
                      border: '1.5px solid #bbf7d0',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <CheckCircle2 size={54} color="#16a34a" />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#166534', margin: 0 }}>
                      Thank You! Your Inquiry Has Been Received.
                    </h3>
                    <p style={{ fontSize: '0.98rem', color: '#15803d', maxWidth: '520px', lineHeight: '1.6' }}>
                      A technical sales engineer from TXCO Sealing Products has been assigned to your request and will
                      contact you within 2–4 business hours at <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          company: '',
                          industry: 'Oil & Gas',
                          inquiryType: 'Request for Quote (RFQ)',
                          message: '',
                          attachmentName: '',
                        });
                      }}
                      className="txco-btn"
                      style={{ marginTop: '1rem', backgroundColor: '#166534', color: '#ffffff' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                    {formStatus.error && (
                      <div
                        style={{
                          padding: '0.9rem 1.2rem',
                          backgroundColor: '#fef2f2',
                          border: '1px solid #fecaca',
                          borderRadius: '8px',
                          color: '#b91c1c',
                          fontSize: '0.88rem',
                          fontWeight: '500',
                        }}
                      >
                        {formStatus.error}
                      </div>
                    )}

                    {/* Row 1: Name & Business Email */}
                    <div className="grid-2-col">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                          Full Name <span style={{ color: '#e11d48' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className="contact-form-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                          Business Email <span style={{ color: '#e11d48' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. john@company.com"
                          className="contact-form-input"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid-2-col">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                          Phone Number / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +1 (555) 019-2834"
                          className="contact-form-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Acme Petrochem LLC"
                          className="contact-form-input"
                        />
                      </div>
                    </div>

                    {/* Row 3: Industry */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                        Target Industry / Application
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="contact-form-select"
                      >
                        {industriesList.map((ind, i) => (
                          <option key={i} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                        Project Details / Part Specifications <span style={{ color: '#e11d48' }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please include dimensions, gasket types (e.g. Ring Type Joint R/RX/BX, Spiral Wound, Kammprofile), material grade (316L, Inconel, Monel, PTFE), pressure ratings (Class 150 - 2500), or quantity required..."
                        className="contact-form-textarea"
                      />
                    </div>

                    {/* Row 5: Attachment */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-body)', marginBottom: '0.45rem' }}>
                        Attach Drawing / Specification Sheet (Optional)
                      </label>

                      <label className="contact-file-upload-box">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.dwg,.dxf,.step,.stp,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"
                          style={{ display: 'none' }}
                        />
                        <UploadCloud size={22} color="var(--primary-navy)" />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {formData.attachmentName ? (
                            <strong style={{ color: 'var(--primary-navy)' }}>Attached: {formData.attachmentName}</strong>
                          ) : (
                            'Upload CAD (.DWG, .DXF, .STEP), PDF spec sheets or images (Max 25MB)'
                          )}
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className="txco-btn txco-btn-primary"
                      style={{
                        padding: '1.1rem 2.2rem',
                        fontSize: '0.98rem',
                        justifyContent: 'center',
                        marginTop: '0.5rem',
                      }}
                    >
                      {formStatus.isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit RFQ & Inquiry</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Reassurance Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="advantage-card">
                  <span className="section-badge" style={{ color: 'var(--slate-blue)' }}>
                    THE TXCO ADVANTAGE
                  </span>

                  <h3 className="section-title" style={{ fontSize: '1.35rem', marginBottom: '1.4rem' }}>
                    Why Engineers Choose TXCO
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                    {txcoAdvantagesList.map((adv, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div className="advantage-icon-box">
                          {adv.icon === 'Award' && <Award size={20} />}
                          {adv.icon === 'Settings' && <Settings size={20} />}
                          {adv.icon === 'Sparkles' && <Sparkles size={20} />}
                          {adv.icon === 'Clock' && <Clock size={20} />}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.2rem' }}>
                            {adv.title}
                          </h4>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                            {adv.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Hotline Banner */}
                <div
                  style={{
                    backgroundColor: 'var(--slate-blue)',
                    backgroundImage: 'var(--brand-gradient)',
                    borderRadius: 'var(--radius-2xl)',
                    padding: '2.2rem',
                    color: 'var(--text-white)',
                    boxShadow: '0 10px 28px rgba(17, 70, 128, 0.25)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: '#93c5fd',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    HAVE AN URGENT REQUIREMENT?
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.8rem' }}>
                    Speak Directly With Our Plant Engineers
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5', marginBottom: '1.4rem' }}>
                    Call our direct engineering support desk right now for immediate dimensional validation and rapid quoting.
                  </p>
                  <a
                    href="tel:+916302152938"
                    className="txco-btn txco-btn-white"
                  >
                    <Phone size={18} />
                    <span>+91 6302 152 938</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. GLOBAL PRESENCE & REGIONAL HUBS
        ========================================================================= */}
        <section style={{ width: '100%', backgroundColor: 'var(--bg-pure-white)', padding: '5rem 2rem', borderTop: '1px solid var(--border-light)' }}>
          <div className="txco-container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-badge" style={{ color: 'var(--slate-blue)' }}>
                INTERNATIONAL REACH
              </span>
              <h2 className="section-title section-title-center">
                Global Supply & Support Network
              </h2>
              <p className="section-subtitle section-subtitle-center">
                With our central manufacturing hub in Hyderabad and international partner distribution desks across
                Europe and the Middle East, TXCO delivers mission-critical sealing products anywhere in the world.
              </p>
            </div>

            <div className="grid-4-col">
              {globalHubsData.map((hub, idx) => (
                <div
                  key={idx}
                  className={`global-hub-card ${hub.badge ? 'primary-hq' : ''}`}
                >
                  {hub.badge && (
                    <div className="global-hq-badge">
                      {hub.badge}
                    </div>
                  )}
                  {hub.badge ? (
                    <Building2 size={28} color="var(--slate-blue)" style={{ marginBottom: '1rem' }} />
                  ) : (
                    <Globe2 size={28} color="var(--primary-navy)" style={{ marginBottom: '1rem' }} />
                  )}
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
                    {hub.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {hub.description}
                  </p>
                  <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--primary-navy)', display: 'block' }}>
                    {hub.contact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
        ========================================================================= */}
        <section style={{ width: '100%', backgroundColor: 'var(--bg-light-surface)', padding: '5rem 2rem 5.5rem 2rem', borderTop: '1px solid var(--border-light)' }}>
          <div className="txco-container-narrow">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <HelpCircle size={18} color="var(--slate-blue)" />
                <span className="section-badge" style={{ color: 'var(--slate-blue)', margin: 0 }}>
                  QUESTIONS & ANSWERS
                </span>
              </div>
              <h2 className="section-title section-title-center">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactFaqsData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="faq-question-btn"
                    >
                      <span style={{ fontSize: '1.02rem', fontWeight: '700', color: isOpen ? 'var(--primary-navy)' : '#1e293b' }}>
                        {faq.q}
                      </span>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? 'var(--primary-navy)' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.2s',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-content">
                        <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. INTERACTIVE MAP & FACILITY DIRECTIONS
        ========================================================================= */}
        <section style={{ width: '100%', backgroundColor: 'var(--bg-pure-white)', padding: '5rem 2rem', borderTop: '1px solid var(--border-light)' }}>
          <div className="txco-container">
            <div className="facility-map-box">
              <div>
                <span className="section-badge" style={{ color: 'var(--slate-blue)' }}>
                  VISIT OUR FACILITY
                </span>
                <h3 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
                  Plant & Office Location
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.6rem' }}>
                  Clients and third-party inspectors (TPI) are always welcome to visit our testing laboratories and
                  manufacturing floor in Hyderabad for factory acceptance tests (FAT) and live witness audits.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <MapPin size={18} color="var(--primary-navy)" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      {facilityMapData.address}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Phone size={18} color="var(--primary-navy)" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      {facilityMapData.phone}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Mail size={18} color="var(--primary-navy)" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      {facilityMapData.email}
                    </span>
                  </div>
                </div>

                <a
                  href={facilityMapData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="txco-btn txco-btn-primary"
                >
                  <span>Open In Google Maps</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Styled Map Frame */}
              <div className="facility-map-iframe-wrapper">
                <iframe
                  title="TXCO Facility Location Map"
                  src={facilityMapData.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
