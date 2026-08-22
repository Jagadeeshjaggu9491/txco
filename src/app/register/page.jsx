'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import gsap from 'gsap';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.15, ease: 'power3.out' }
      );
    }
    if (cardRef.current) {
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)' },
        '-=0.3'
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    if (!agreed) {
      setError('Please agree to the Terms of Service & Privacy Policy.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Top Hero Banner */}
        <section className="products-hero-section">
          <div className="products-hero-grid" ref={heroRef}>
            <div>
              <h1 className="products-hero-title">
                CREATE ACCOUNT
              </h1>
              <p className="products-hero-subtitle">
                Register for corporate access to instant quotation tools, technical datasheets, CAD 3D libraries, and material test certificates.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/images/home-services.png"
                alt="TXCO Portal Registration"
                className="products-hero-banner-img"
              />
            </div>
          </div>
        </section>

        {/* Registration Card Section */}
        <section className="auth-page-section">
          <div className="auth-card-container" ref={cardRef}>
            <div className="auth-card-header">
              <span className="auth-badge">
                <ShieldCheck size={14} />
                <span>NEW CLIENT REGISTRATION</span>
              </span>
              <h2 className="auth-card-title">
                Create an Account
              </h2>
              <p className="auth-card-subtitle">
                Join top global EPCs, refinery operators, and valve OEMs worldwide.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#052C58', marginBottom: '0.6rem' }}>
                  Account Created Successfully
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.8rem' }}>
                  Welcome to TXCO Sealing Products! A verification email has been sent to <strong>{email}</strong>.
                </p>
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <button className="txco-btn txco-btn-primary" style={{ width: '100%' }}>
                    <span>Proceed to Sign In</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form">
                {/* Error Alert if any */}
                {error && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', color: '#b91c1c', fontSize: '0.86rem', fontWeight: '500' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{error}</span>
                  </div>
                )}

                {/* 1. Name Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="register-name">
                    Full Name / Contact Person
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <User size={18} />
                    </span>
                    <input
                      id="register-name"
                      type="text"
                      required
                      placeholder="e.g. Alexander Mitchell"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                </div>

                {/* 2. Email Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="register-email">
                    Corporate Email Address
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Mail size={18} />
                    </span>
                    <input
                      id="register-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                </div>

                {/* 3. Password Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="register-password">
                    Password
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Lock size={18} />
                    </span>
                    <input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Minimum 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="auth-input"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="auth-input-toggle"
                      aria-label="Toggle Password Visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* 4. Confirm Password Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="register-confirm-password">
                    Confirm Password
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Lock size={18} />
                    </span>
                    <input
                      id="register-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="auth-input"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="auth-input-toggle"
                      aria-label="Toggle Confirm Password Visibility"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="auth-checkbox-row" style={{ alignItems: 'flex-start' }}>
                  <label className="auth-checkbox-label" style={{ alignItems: 'flex-start', lineHeight: '1.4' }}>
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="auth-checkbox"
                      style={{ marginTop: '0.15rem' }}
                    />
                    <span>
                      I agree to TXCO <Link href="/resources" style={{ color: '#114680', textDecoration: 'underline' }}>Terms of Service</Link> & <Link href="/resources" style={{ color: '#114680', textDecoration: 'underline' }}>Privacy Policy</Link>.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="auth-submit-btn">
                  <span>Create Account</span>
                  <ArrowRight size={16} />
                </button>

                {/* Switch to Login */}
                <div className="auth-switch-prompt">
                  <span>Already have an account?</span>
                  <Link href="/login" className="auth-switch-link">
                    Sign In
                  </Link>
                </div>

                {/* Security Footer */}
                <div className="auth-security-notice">
                  <ShieldCheck size={14} color="#16a34a" />
                  <span>ISO 9001:2015 Certified & Data Protected</span>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
