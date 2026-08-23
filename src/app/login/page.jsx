'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import gsap from 'gsap';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)', delay: 0.2 }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Top Hero Banner */}
        <PageHero
          title="CUSTOMER PORTAL"
          subtitle="Access your engineering datasheets, material test reports (MTRs), CAD models, RFQ tracking, and custom manufacturing orders."
          bgImage="/images/log-in-page-banner-img.avif"
          bgPosition="center"
        />

        {/* Login Card Section */}
        <section className="auth-page-section">
          <div className="auth-card-container" ref={cardRef}>
            <div className="auth-card-header">

              <h2 className="auth-card-title">
                Welcome Back
              </h2>
              <p className="auth-card-subtitle">
                Sign in with your corporate credentials to manage your industrial sealing projects.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <UserCheck size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#052C58', marginBottom: '0.6rem' }}>
                  Authenticated Successfully
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.8rem' }}>
                  Welcome back! Redirecting you to your engineering dashboard and project library...
                </p>
                <Link href="/products" style={{ textDecoration: 'none' }}>
                  <button className="txco-btn txco-btn-primary" style={{ width: '100%' }}>
                    <span>Browse Product Catalog</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form">
                {/* Email Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="login-email">
                    Corporate Email Address
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Mail size={18} />
                    </span>
                    <input
                      id="login-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="login-password">
                    Password
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Lock size={18} />
                    </span>
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
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

                {/* Remember Me & Forgot Password */}
                <div className="auth-checkbox-row">
                  <label className="auth-checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="auth-checkbox"
                    />
                    <span>Remember this device</span>
                  </label>
                  <Link href="/contact" className="auth-forgot-link">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button type="submit" className="auth-submit-btn">
                  <span>Sign In to Portal</span>
                  <ArrowRight size={16} />
                </button>

                {/* Switch to Registration */}
                <div className="auth-switch-prompt">
                  <span>Don’t have an engineering account?</span>
                  <Link href="/register" className="auth-switch-link">
                    Create Account
                  </Link>
                </div>

                {/* Security Footer */}
                <div className="auth-security-notice">
                  <ShieldCheck size={14} color="#16a34a" />
                  <span>256-bit SSL Encrypted & API 6A Spec Compliant</span>
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
