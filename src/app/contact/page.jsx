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
  FileText,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const heroRef = useRef(null);
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

  // Inquiry category pills
  const inquiryTypes = [
    'Request for Quote (RFQ)',
    'Custom Gasket Engineering',
    'Industrial Fasteners & Bolting',
    'Hoses & Expansion Joints',
    '24/7 Field Support & Measurement',
    'General Inquiry',
  ];

  const industriesList = [
    'Oil & Gas',
    'Petrochemical & Refining',
    'Power Generation',
    'Chemical Processing',
    'EPC & Heavy Engineering',
    'Metals & Mining',
    'Water & Wastewater',
    'Other Industry',
  ];

  const faqs = [
    {
      q: 'What is the standard turnaround time for RFQ (Request for Quote)?',
      a: 'Standard product quotes are provided within 2 to 4 business hours. For custom-engineered gaskets or non-standard flange drawings requiring material engineering review, we typically provide comprehensive quotations and technical feasibility assessments within 24 hours.',
    },
    {
      q: 'Do you provide Material Test Reports (MTR) and Mill Certifications?',
      a: 'Yes, all TXCO sealing products, gaskets, and fasteners come with 100% material traceability and certified EN 10204 3.1 / 3.2 Material Test Reports (MTR), PMI test records, and dimensional inspection reports upon request.',
    },
    {
      q: 'Can TXCO manufacture custom gaskets from CAD drawings or sample parts?',
      a: 'Absolutely. We offer complete reverse engineering and custom gasket design services. You can send us CAD files (.DXF, .DWG, .STEP), sample worn parts, or request our on-site technical team for precision laser dimensioning and field measurement.',
    },
    {
      q: 'Do you support emergency turnarounds (TAR) and plant shutdowns?',
      a: 'Yes. TXCO maintains dedicated 24/7 rapid response teams for industrial turnarounds, unexpected outages, and emergency gasket fabrication to prevent costly plant downtime.',
    },
    {
      q: 'Where do you ship your sealing products?',
      a: 'From our state-of-the-art manufacturing facility in Hyderabad, India, we ship worldwide across North America, Europe, the Middle East, and Asia Pacific with streamlined customs clearance and express logistics.',
    },
  ];

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.contact-hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );

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

    // Simulate reliable submission
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

      <main style={{ width: '100%', backgroundColor: '#f8fafc', color: '#1d2744', overflow: 'hidden' }}>
        {/* =========================================================================
            1. HERO SECTION (Aligned with TXCO Brand Gradient & Pattern Overlay)
        ========================================================================= */}
        <section
          ref={heroRef}
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#052C58',
            backgroundImage: 'linear-gradient(135deg, #114680 0%, #052C58 100%)',
            color: '#ffffff',
            padding: '4.5rem 2rem 5.5rem 2rem',
            overflow: 'hidden',
          }}
        >
          {/* Background Vector Art Pattern Overlay */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: '-45px',
              width: '100%',
              height: '75%',
              backgroundImage: "url('/images/products/products-bg.png')",
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
              opacity: 0.75,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Breadcrumb Navigation */}
            <div className="contact-hero-anim" style={{ marginBottom: '1.2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#93c5fd',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}>
                  HOME
                </Link>
                <ChevronRight size={14} />
                <span style={{ color: '#ffffff' }}>CONTACT US</span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 0.85fr',
                gap: '3rem',
                alignItems: 'center',
              }}
              className="hero-grid"
            >
              <div>
                <h1
                  className="contact-hero-anim"
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    lineHeight: '1.15',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    marginBottom: '1.2rem',
                  }}
                >
                  Get In Touch With TXCO
                </h1>

                <p
                  className="contact-hero-anim"
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    fontWeight: '300',
                    lineHeight: '1.65',
                    color: 'rgba(255, 255, 255, 0.92)',
                    maxWidth: '580px',
                    marginBottom: '2rem',
                  }}
                >
                  Connect directly with our engineering specialists and global sales teams for technical consultations,
                  fast RFQ turnarounds, and custom industrial sealing solutions.
                </p>

                {/* Hero Quick Highlights Badges */}
                <div
                  className="contact-hero-anim"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.45rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    <Clock size={16} color="#60a5fa" />
                    <span>Fast RFQ Turnaround</span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.45rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    <ShieldCheck size={16} color="#60a5fa" />
                    <span>100% Certified Traceability</span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.45rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    <Globe2 size={16} color="#60a5fa" />
                    <span>Worldwide Logistics</span>
                  </div>
                </div>
              </div>

              {/* Right Graphic Preview */}
              <div
                className="contact-hero-anim hero-img-col"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/images/contact-img.png"
                  alt="TXCO Precision Industrial Sealing Products"
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK CONTACT DETAILS (3-Column Interactive Cards Grid)
        ========================================================================= */}
        <section
          ref={cardsRef}
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '4rem 2rem 4.5rem 2rem',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#114680',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '0.5rem',
                }}
              >
                DIRECT CHANNELS
              </span>
              <h2
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                How Would You Like to Connect?
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
              }}
              className="contact-cards-grid"
            >
              {/* Card 1: Direct Hotline & Phone */}
              <div
                className="contact-card-item"
                style={{
                  backgroundColor: '#f4f3fe', // Lavender tint matching industrial products theme
                  borderRadius: '20px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(17, 70, 128, 0.18)',
                  boxShadow: '0 6px 18px rgba(5, 44, 88, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(5, 44, 88, 0.12)';
                  e.currentTarget.style.borderColor = '#114680';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(5, 44, 88, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(17, 70, 128, 0.18)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      backgroundColor: '#114680',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      boxShadow: '0 4px 12px rgba(17, 70, 128, 0.25)',
                    }}
                  >
                    <Phone size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#052C58',
                      marginBottom: '0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Call Our Specialists
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.55', marginBottom: '1.4rem' }}>
                    Speak directly with our technical sales engineers for immediate product availability, pricing, or
                    emergency support.
                  </p>
                </div>

                <div>
                  <a
                    href="tel:+916302152938"
                    style={{
                      display: 'inline-block',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#052C58',
                      textDecoration: 'none',
                      marginBottom: '0.4rem',
                    }}
                  >
                    +91 6302 152 938
                  </a>
                  <span style={{ display: 'block', fontSize: '0.82rem', color: '#64748b' }}>
                    Mon - Sat: 9:00 AM – 7:00 PM IST (24/7 Hotline for Outages)
                  </span>
                </div>
              </div>

              {/* Card 2: Email & Technical RFQs */}
              <div
                className="contact-card-item"
                style={{
                  backgroundColor: '#f4f3fe',
                  borderRadius: '20px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(17, 70, 128, 0.18)',
                  boxShadow: '0 6px 18px rgba(5, 44, 88, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(5, 44, 88, 0.12)';
                  e.currentTarget.style.borderColor = '#114680';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(5, 44, 88, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(17, 70, 128, 0.18)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      backgroundColor: '#052C58',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      boxShadow: '0 4px 12px rgba(5, 44, 88, 0.25)',
                    }}
                  >
                    <Mail size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#052C58',
                      marginBottom: '0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Send An RFQ Email
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.55', marginBottom: '1.4rem' }}>
                    Send your project data sheets, material specifications, or CAD files directly to our engineering desk.
                  </p>
                </div>

                <div>
                  <a
                    href="mailto:info@txco.co"
                    style={{
                      display: 'inline-block',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#114680',
                      textDecoration: 'none',
                      marginBottom: '0.4rem',
                    }}
                  >
                    info@txco.co
                  </a>
                  <span style={{ display: 'block', fontSize: '0.82rem', color: '#64748b' }}>
                    Guaranteed response within 2–4 business hours
                  </span>
                </div>
              </div>

              {/* Card 3: Global HQ & Manufacturing Hub */}
              <div
                className="contact-card-item"
                style={{
                  backgroundColor: '#f4f3fe',
                  borderRadius: '20px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(17, 70, 128, 0.18)',
                  boxShadow: '0 6px 18px rgba(5, 44, 88, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(5, 44, 88, 0.12)';
                  e.currentTarget.style.borderColor = '#114680';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(5, 44, 88, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(17, 70, 128, 0.18)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      backgroundColor: '#344473',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      boxShadow: '0 4px 12px rgba(52, 68, 115, 0.25)',
                    }}
                  >
                    <MapPin size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#052C58',
                      marginBottom: '0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Headquarters & Plant
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.55', marginBottom: '1.4rem' }}>
                    Industrial Manufacturing Hub & Advanced Testing Center located in Hyderabad, India, serving global customers.
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: '#052C58',
                      marginBottom: '0.3rem',
                    }}
                  >
                    TXCO Sealing Products, LLC
                  </span>
                  <span style={{ display: 'block', fontSize: '0.84rem', color: '#64748b' }}>
                    Industrial Park, Hyderabad, Telangana, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN RFQ & TECHNICAL INQUIRY FORM SECTION (2-Column Layout)
        ========================================================================= */}
        <section
          ref={formSectionRef}
          style={{
            width: '100%',
            backgroundColor: '#f2f6fc', // Signature TXCO cool blue-grey background
            padding: '5rem 2rem 5.5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.35fr 0.85fr',
                gap: '3rem',
                alignItems: 'flex-start',
              }}
              className="form-grid-container"
            >
              {/* Left Column: Interactive RFQ Form Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '3rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 12px 36px rgba(5, 44, 88, 0.07)',
                }}
                className="form-card-wrapper"
              >
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <MessageSquare size={20} color="#114680" />
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: '#114680',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      FAST RFQ & INQUIRY
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Open Sans', -apple-system, sans-serif",
                      fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                      fontWeight: '700',
                      color: '#052C58',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Request a Technical Quote
                  </h2>

                  <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
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
                    {inquiryTypes.map((type, idx) => {
                      const isSelected = formData.inquiryType === type;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type }))}
                          style={{
                            padding: '0.55rem 1.1rem',
                            borderRadius: '30px',
                            border: isSelected ? '1.5px solid #052C58' : '1.5px solid #cbd5e1',
                            backgroundColor: isSelected ? '#052C58' : '#ffffff',
                            color: isSelected ? '#ffffff' : '#334155',
                            fontSize: '0.84rem',
                            fontWeight: isSelected ? '600' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
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
                      style={{
                        marginTop: '1rem',
                        padding: '0.75rem 1.8rem',
                        backgroundColor: '#166534',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="form-row-2">
                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            color: '#334155',
                            marginBottom: '0.45rem',
                          }}
                        >
                          Full Name <span style={{ color: '#e11d48' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid #cbd5e1',
                            outline: 'none',
                            fontSize: '0.95rem',
                            color: '#1e293b',
                            backgroundColor: '#f8fafc',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#052C58')}
                          onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            color: '#334155',
                            marginBottom: '0.45rem',
                          }}
                        >
                          Business Email <span style={{ color: '#e11d48' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. john@company.com"
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid #cbd5e1',
                            outline: 'none',
                            fontSize: '0.95rem',
                            color: '#1e293b',
                            backgroundColor: '#f8fafc',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#052C58')}
                          onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Company Name */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="form-row-2">
                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            color: '#334155',
                            marginBottom: '0.45rem',
                          }}
                        >
                          Phone Number / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +1 (555) 019-2834"
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid #cbd5e1',
                            outline: 'none',
                            fontSize: '0.95rem',
                            color: '#1e293b',
                            backgroundColor: '#f8fafc',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#052C58')}
                          onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            color: '#334155',
                            marginBottom: '0.45rem',
                          }}
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Acme Petrochem LLC"
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid #cbd5e1',
                            outline: 'none',
                            fontSize: '0.95rem',
                            color: '#1e293b',
                            backgroundColor: '#f8fafc',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#052C58')}
                          onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                        />
                      </div>
                    </div>

                    {/* Row 3: Industry Sector Selection */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: '600',
                          color: '#334155',
                          marginBottom: '0.45rem',
                        }}
                      >
                        Target Industry / Application
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.95rem',
                          color: '#1e293b',
                          backgroundColor: '#f8fafc',
                          cursor: 'pointer',
                        }}
                      >
                        {industriesList.map((ind, i) => (
                          <option key={i} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message / Technical Specs */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: '600',
                          color: '#334155',
                          marginBottom: '0.45rem',
                        }}
                      >
                        Project Details / Part Specifications <span style={{ color: '#e11d48' }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please include dimensions, gasket types (e.g. Ring Type Joint R/RX/BX, Spiral Wound, Kammprofile), material grade (316L, Inconel, Monel, PTFE), pressure ratings (Class 150 - 2500), or quantity required..."
                        style={{
                          width: '100%',
                          padding: '0.9rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.95rem',
                          color: '#1e293b',
                          backgroundColor: '#f8fafc',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          lineHeight: '1.5',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#052C58')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>

                    {/* Row 5: Drawing & Spec Sheet File Attachment */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: '600',
                          color: '#334155',
                          marginBottom: '0.45rem',
                        }}
                      >
                        Attach Drawing / Specification Sheet (Optional)
                      </label>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.8rem',
                          padding: '1.2rem',
                          border: '2px dashed #cbd5e1',
                          borderRadius: '8px',
                          backgroundColor: '#f8fafc',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#052C58';
                          e.currentTarget.style.backgroundColor = '#f1f5f9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#cbd5e1';
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                        }}
                      >
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.dwg,.dxf,.step,.stp,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"
                          style={{ display: 'none' }}
                        />
                        <UploadCloud size={22} color="#052C58" />
                        <span style={{ fontSize: '0.9rem', color: '#475569' }}>
                          {formData.attachmentName ? (
                            <strong style={{ color: '#052C58' }}>Attached: {formData.attachmentName}</strong>
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
                      style={{
                        padding: '1.1rem 2.2rem',
                        backgroundColor: '#052C58',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.98rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: formStatus.isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.7rem',
                        marginTop: '0.5rem',
                        boxShadow: '0 4px 14px rgba(5, 44, 88, 0.25)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!formStatus.isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#114680';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!formStatus.isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#052C58';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <span>Transmitting Inquiry...</span>
                        </>
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

              {/* Right Column: Why Work With TXCO Reassurance Box */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Value Card 1 */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 24px rgba(5, 44, 88, 0.05)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: '#114680',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    THE TXCO ADVANTAGE
                  </span>

                  <h3
                    style={{
                      fontFamily: "'Open Sans', -apple-system, sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: '#052C58',
                      marginBottom: '1.4rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Why Engineers Choose TXCO
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: '#f4f3fe',
                          color: '#114680',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.2rem' }}>
                          API & ASME Standards Compliance
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                          Precision engineered to API 6A, API 17D, ASME B16.20, and DIN EN 1514 manufacturing tolerances.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: '#f4f3fe',
                          color: '#114680',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Settings size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.2rem' }}>
                          Custom CAD & Reverse Engineering
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                          In-house tooling, CNC waterjet cutting, and CAD modeling for specialized equipment and obsolete flange configurations.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: '#f4f3fe',
                          color: '#114680',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.2rem' }}>
                          Exotic Alloy Metallurgy
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                          Extensive stock of Inconel 625/825, Monel 400, Hastelloy C-276, Super Duplex, Titanium, and high-temp PTFE.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: '#f4f3fe',
                          color: '#114680',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.2rem' }}>
                          Emergency Turnaround (TAR)
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                          Same-day and 24-hour expedited fabrication available for critical refinery and offshore emergency requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Hotline Banner */}
                <div
                  style={{
                    backgroundColor: '#114680',
                    backgroundImage: 'linear-gradient(135deg, #114680 0%, #052C58 100%)',
                    borderRadius: '20px',
                    padding: '2.2rem',
                    color: '#ffffff',
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
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      backgroundColor: '#ffffff',
                      color: '#052C58',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
            4. GLOBAL PRESENCE & REGIONAL HUBS (Germany, Middle East, Asia, USA)
        ========================================================================= */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '5rem 2rem 5rem 2rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#114680',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '0.5rem',
                }}
              >
                INTERNATIONAL REACH
              </span>
              <h2
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                }}
              >
                Global Supply & Support Network
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
                With our central manufacturing hub in Hyderabad and international partner distribution desks across
                Europe and the Middle East, TXCO delivers mission-critical sealing products anywhere in the world.
              </p>
            </div>

            {/* 4 Regional Hubs Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.8rem',
              }}
              className="global-hubs-grid"
            >
              {/* Hub 1: Hyderabad Central HQ */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '2rem 1.6rem',
                  border: '1.5px solid #114680',
                  boxShadow: '0 4px 14px rgba(5, 44, 88, 0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#114680',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  Global HQ
                </div>
                <Building2 size={28} color="#114680" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#052C58', marginBottom: '0.4rem' }}>
                  Hyderabad, India
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Central Manufacturing Facility, Hydro-testing Labs & Global Engineering Office.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#052C58', display: 'block' }}>
                  HQ Hotline: +91 6302 152 938
                </span>
              </div>

              {/* Hub 2: Germany / Europe Desk */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem 1.6rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Globe2 size={28} color="#052C58" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#052C58', marginBottom: '0.4rem' }}>
                  Germany & Europe
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Dedicated sales desk & logistics coordination for DIN EN standard compliant projects.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#052C58', display: 'block' }}>
                  europe@txco.co
                </span>
              </div>

              {/* Hub 3: Middle East / Gulf */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem 1.6rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Globe2 size={28} color="#052C58" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#052C58', marginBottom: '0.4rem' }}>
                  Middle East (GCC)
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Upstream & downstream oilfield sealing support for Saudi Arabia, UAE, Oman & Qatar.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#052C58', display: 'block' }}>
                  gulf.sales@txco.co
                </span>
              </div>

              {/* Hub 4: North America Logistics */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem 1.6rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Globe2 size={28} color="#052C58" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#052C58', marginBottom: '0.4rem' }}>
                  Americas & APAC
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Direct maritime & express air freight channels to major ports in the USA, Canada & Singapore.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#052C58', display: 'block' }}>
                  export@txco.co
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
        ========================================================================= */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#f8fafc',
            padding: '5rem 2rem 5.5rem 2rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <HelpCircle size={18} color="#114680" />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: '#114680',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  QUESTIONS & ANSWERS
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                Frequently Asked Inquiries
              </h2>
            </div>

            {/* Accordion Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '14px',
                      border: isOpen ? '1.5px solid #114680' : '1px solid #e2e8f0',
                      boxShadow: isOpen ? '0 8px 20px rgba(5, 44, 88, 0.06)' : '0 2px 6px rgba(0,0,0,0.02)',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.3rem 1.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        gap: '1rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: '700',
                          color: isOpen ? '#052C58' : '#1e293b',
                          lineHeight: '1.4',
                        }}
                      >
                        {faq.q}
                      </span>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? '#052C58' : '#f1f5f9',
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
                      <div
                        style={{
                          padding: '0 1.6rem 1.4rem 1.6rem',
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '1rem',
                        }}
                      >
                        <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.65', margin: 0 }}>
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
        <section
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '5rem 2rem 5rem 2rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.3fr',
                gap: '3rem',
                alignItems: 'center',
                backgroundColor: '#f4f3fe',
                borderRadius: '24px',
                padding: '3rem',
                border: '1.5px solid rgba(17, 70, 128, 0.15)',
              }}
              className="map-container-grid"
            >
              <div>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: '#114680',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  VISIT OUR FACILITY
                </span>
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: '1.85rem',
                    fontWeight: '700',
                    color: '#052C58',
                    marginBottom: '1rem',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Plant & Office Location
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.6rem' }}>
                  Clients and third-party inspectors (TPI) are always welcome to visit our testing laboratories and
                  manufacturing floor in Hyderabad for factory acceptance tests (FAT) and live witness audits.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <MapPin size={18} color="#052C58" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      TXCO Sealing Products, LLC — Hyderabad Industrial Zone, India
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Phone size={18} color="#052C58" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      +91 6302 152 938
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Mail size={18} color="#052C58" />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600' }}>
                      info@txco.co
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Hyderabad,Telangana,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.6rem',
                    backgroundColor: '#052C58',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#114680')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#052C58')}
                >
                  <span>Open In Google Maps</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Styled Map / Facility Preview Frame */}
              <div
                style={{
                  width: '100%',
                  height: '340px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                }}
              >
                <iframe
                  title="TXCO Facility Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160408479!2d78.26795874288126!3d17.412299801334812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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

      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .global-hubs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .form-grid-container {
            grid-template-columns: 1fr !important;
          }
          .map-container-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-img-col {
            margin-top: 1rem;
          }
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .global-hubs-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
          .form-card-wrapper {
            padding: 1.8rem !important;
          }
        }
      `}</style>
    </>
  );
}
