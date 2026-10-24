'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserCheck,
  AlertCircle,
  UserPlus,
  Settings,
  LogOut,
  PackageCheck,
} from 'lucide-react';
import gsap from 'gsap';
import { loginUser, getCurrentUser, logoutUser } from '@/utils/authManager';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorType, setErrorType] = useState(null); // 'email_not_found' | 'wrong_password' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const cardRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    // If already logged in, show current session
    const existing = getCurrentUser();
    if (existing) {
      setAuthenticatedUser(existing);
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)', delay: 0.2 }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorType(null);
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await loginUser(email, password);

      if (!res.success) {
        setErrorType(res.error);
        setErrorMessage(res.message);

        // Auto-focus relevant field based on error
        if (res.error === 'email_not_found' && emailInputRef.current) {
          emailInputRef.current.focus();
        } else if (res.error === 'wrong_password' && passwordInputRef.current) {
          passwordInputRef.current.focus();
        }

        setLoading(false);
        return;
      }

      // Success
      setAuthenticatedUser(res.user);
      if (res.user.role === 'admin') {
        router.push('/admin/stock');
      } else {
        router.push('/portal');
      }
    } catch (err) {
      setErrorType('server_error');
      setErrorMessage('Unable to connect to authentication server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Top Hero Banner */}
        <PageHero
          title="CUSTOMER & ADMIN PORTAL"
          subtitle="Access industrial sealing documentation, real-time stock lists, certified CAD models, and manage inventory operations."
          bgImage="/images/log-in-page-banner-img.avif"
          bgPosition="center"
        />

        {/* Login Card Section */}
        <section className="auth-page-section">
          <div className="auth-card-container" ref={cardRef}>
            <div className="auth-card-header">
              <h2 className="auth-card-title">
                {authenticatedUser ? 'Account Dashboard' : 'Welcome Back'}
              </h2>
              <p className="auth-card-subtitle">
                {authenticatedUser
                  ? `Signed in as ${authenticatedUser.name} (${authenticatedUser.role === 'admin' ? 'Administrator' : 'Customer'})`
                  : 'Sign in with your corporate credentials to manage your industrial sealing projects.'}
              </p>
            </div>

            {authenticatedUser ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: authenticatedUser.role === 'admin' ? '#fef3c7' : '#dcfce7',
                    color: authenticatedUser.role === 'admin' ? '#d97706' : '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.2rem auto',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                  }}
                >
                  {authenticatedUser.role === 'admin' ? (
                    <Settings size={34} />
                  ) : (
                    <UserCheck size={34} />
                  )}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.8rem',
                    borderRadius: '9999px',
                    backgroundColor: authenticatedUser.role === 'admin' ? '#052C58' : '#018F5D',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '0.8rem',
                  }}
                >
                  {authenticatedUser.role === 'admin' ? 'Administrator Access' : 'Verified Customer'}
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#052C58',
                    marginBottom: '0.4rem',
                  }}
                >
                  {authenticatedUser.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '0.2rem' }}>
                  {authenticatedUser.email}
                </p>
                {authenticatedUser.company && (
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.8rem' }}>
                    {authenticatedUser.company}
                  </p>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    maxWidth: '360px',
                    margin: '1.5rem auto 0 auto',
                  }}
                >
                  <Link href="/portal" style={{ textDecoration: 'none' }}>
                    <button
                      className="txco-btn txco-btn-primary"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        backgroundColor: '#6366f1',
                      }}
                    >
                      <PackageCheck size={17} />
                      <span>Open Client Portal (POs &amp; Test Certificates)</span>
                    </button>
                  </Link>

                  {authenticatedUser.role === 'admin' && (
                    <Link href="/admin/stock" style={{ textDecoration: 'none' }}>
                      <button
                        className="txco-btn txco-btn-primary"
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          backgroundColor: '#052C58',
                        }}
                      >
                        <Settings size={17} />
                        <span>Open Admin Panel (Stock Management)</span>
                      </button>
                    </Link>
                  )}

                  <Link href="/stock-list" style={{ textDecoration: 'none' }}>
                    <button
                      className="txco-btn txco-btn-secondary"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span>View Live Stock List</span>
                      <ArrowRight size={16} />
                    </button>
                  </Link>

                  <Link href="/products" style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        color: '#334155',
                        fontWeight: '600',
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Browse Product Catalog
                    </button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      logoutUser();
                      setAuthenticatedUser(null);
                      setEmail('');
                      setPassword('');
                      setErrorType(null);
                      setErrorMessage('');
                    }}
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #fecaca',
                      backgroundColor: '#fef2f2',
                      color: '#dc2626',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: '0.5rem',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <LogOut size={16} />
                    <span>Sign Out of Account</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form">
                {/* 1. Error Banner: Email Not in Database */}
                {errorType === 'email_not_found' && (
                  <div
                    style={{
                      padding: '1rem',
                      backgroundColor: '#fef2f2',
                      border: '1.5px solid #f87171',
                      borderRadius: '8px',
                      color: '#991b1b',
                      fontSize: '0.9rem',
                      lineHeight: '1.45',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <AlertCircle size={20} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ fontWeight: '700', marginBottom: '0.2rem' }}>
                          Account Not Found
                        </div>
                        <div style={{ color: '#7f1d1d' }}>
                          {errorMessage || "we can't find any account on this mail please create a account"}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid #fecaca' }}>
                      <Link
                        href={`/register?email=${encodeURIComponent(email)}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.55rem 1rem',
                          backgroundColor: '#dc2626',
                          color: '#ffffff',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '0.84rem',
                          fontWeight: '600',
                          boxShadow: '0 2px 6px rgba(220, 38, 38, 0.25)',
                        }}
                      >
                        <UserPlus size={15} />
                        <span>Create an Account Now</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 2. Error Banner: Wrong Password */}
                {errorType === 'wrong_password' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#fffbeb',
                      border: '1.5px solid #f59e0b',
                      borderRadius: '8px',
                      color: '#92400e',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                    }}
                  >
                    <AlertCircle size={18} style={{ color: '#d97706', flexShrink: 0 }} />
                    <span>{errorMessage || 'please check your password'}</span>
                  </div>
                )}

                {/* General Server Error */}
                {errorType === 'server_error' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '8px',
                      color: '#b91c1c',
                      fontSize: '0.88rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Email Field */}
                <div className="auth-form-group">
                  <label className="auth-label" htmlFor="login-email">
                    Email Address
                  </label>
                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">
                      <Mail
                        size={18}
                        color={errorType === 'email_not_found' ? '#dc2626' : undefined}
                      />
                    </span>
                    <input
                      ref={emailInputRef}
                      id="login-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorType) {
                          setErrorType(null);
                          setErrorMessage('');
                        }
                      }}
                      className="auth-input"
                      style={
                        errorType === 'email_not_found'
                          ? { borderColor: '#dc2626', backgroundColor: '#fef2f2' }
                          : {}
                      }
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
                      <Lock
                        size={18}
                        color={errorType === 'wrong_password' ? '#d97706' : undefined}
                      />
                    </span>
                    <input
                      ref={passwordInputRef}
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errorType === 'wrong_password') {
                          setErrorType(null);
                          setErrorMessage('');
                        }
                      }}
                      className="auth-input"
                      style={
                        errorType === 'wrong_password'
                          ? { borderColor: '#d97706', backgroundColor: '#fffbeb' }
                          : {}
                      }
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
                <button type="submit" disabled={loading} className="auth-submit-btn">
                  <span>{loading ? 'Validating credentials...' : 'Sign In to Portal'}</span>
                  <ArrowRight size={16} />
                </button>

                {/* Switch to Registration */}
                <div className="auth-switch-prompt">
                  <span>Don’t have an engineering account?</span>
                  <Link href="/register" className="auth-switch-link">
                    Create Account
                  </Link>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
