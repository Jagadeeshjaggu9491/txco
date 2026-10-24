'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  KeyRound,
  RotateCcw,
  Sparkles,
  Check,
  ArrowLeft,
} from 'lucide-react';
import gsap from 'gsap';
import {
  registerUser,
  sendRegistrationOTP,
  verifyRegistrationOTP,
  checkEmailExists,
} from '@/utils/authManager';

export default function RegisterPage() {
  const router = useRouter();

  // Step 1: 'email' | Step 2: 'otp' | Step 3: 'password' | Step 4: 'success'
  const [currentStep, setCurrentStep] = useState(1);

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Status & Timing States
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const cardRef = useRef(null);
  const otpInputRef = useRef(null);

  // Animation on mount
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)', delay: 0.15 }
      );
    }
  }, []);

  // Resend Countdown Timer
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendTimer]);

  // =========================================================================
  // STEP 1 HANDLER: Send OTP to provided email
  // =========================================================================
  const handleStep1Submit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('Please enter a valid corporate email address.');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);

    try {
      const res = await sendRegistrationOTP(cleanEmail, name.trim());

      if (!res.success) {
        setError(res.message);
        setLoading(false);
        return;
      }

      setCurrentStep(2);
      setResendTimer(30);
      setOtp('');
      setTimeout(() => {
        if (otpInputRef.current) otpInputRef.current.focus();
      }, 200);
    } catch (err) {
      setError('Failed to send verification code. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    setError('');
    setLoading(true);
    try {
      const res = await sendRegistrationOTP(email, name.trim());
      if (!res.success) {
        setError(res.message);
        setLoading(false);
        return;
      }
      setResendTimer(30);
    } catch (err) {
      setError('Failed to resend code.');
    } finally {
      setLoading(false);
    }
  };

  // =========================================================================
  // STEP 2 HANDLER: Verify OTP matching
  // =========================================================================
  const handleStep2Submit = (e) => {
    e.preventDefault();
    setError('');

    const cleanOtp = otp.trim();
    if (!cleanOtp || cleanOtp.length !== 6) {
      setError('Please enter the complete 6-digit OTP code.');
      return;
    }

    const verification = verifyRegistrationOTP(email, cleanOtp);

    if (!verification.success) {
      setError(verification.message);
      return;
    }

    // OTP matched successfully -> Open Step 3
    setCurrentStep(3);
  };

  // =========================================================================
  // STEP 3 HANDLER: Create Password and Finalize Account Creation
  // =========================================================================
  const handleStep3Submit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    if (!agreed) {
      setError('Please agree to TXCO Terms of Service & Privacy Policy.');
      return;
    }

    setLoading(true);

    try {
      const res = await registerUser({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company.trim(),
        password,
        role: 'customer',
      });

      if (!res.success) {
        setError(res.message || 'Registration failed.');
        setLoading(false);
        return;
      }

      // Done: Account created! Advance to Step 4 (Success view)
      setCurrentStep(4);
    } catch (err) {
      setError('An error occurred during account creation. Please try again.');
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
          title="CREATE ACCOUNT"
          subtitle="Register for instant access to TXCO engineering documents, certified 3D CAD models, material test certificates, and personalized pricing."
          bgImage="/images/log-in-page-banner-img.avif"
          bgPosition="center"
        />

        {/* Multi-step Registration Section */}
        <section className="auth-page-section">
          <div className="auth-card-container" ref={cardRef}>
            {/* 3-Step Visual Progress Stepper */}
            {currentStep < 4 && (
              <div className="auth-stepper">
                {/* Step 1 */}
                <div className="auth-step-item">
                  <div
                    className={`auth-step-circle ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''
                      }`}
                  >
                    {currentStep > 1 ? <Check size={16} /> : '1'}
                  </div>
                  <span
                    className={`auth-step-label ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''
                      }`}
                  >
                    Email
                  </span>
                </div>

                <div
                  className={`auth-step-connector ${currentStep > 1 ? 'completed' : ''}`}
                ></div>

                {/* Step 2 */}
                <div className="auth-step-item">
                  <div
                    className={`auth-step-circle ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''
                      }`}
                  >
                    {currentStep > 2 ? <Check size={16} /> : '2'}
                  </div>
                  <span
                    className={`auth-step-label ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''
                      }`}
                  >
                    OTP
                  </span>
                </div>

                <div
                  className={`auth-step-connector ${currentStep > 2 ? 'completed' : ''}`}
                ></div>

                {/* Step 3 */}
                <div className="auth-step-item">
                  <div
                    className={`auth-step-circle ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''
                      }`}
                  >
                    3
                  </div>
                  <span
                    className={`auth-step-label ${currentStep === 3 ? 'active' : ''
                      }`}
                  >
                    Password
                  </span>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#fef2f2',
                  border: '1.5px solid #fecaca',
                  borderRadius: '8px',
                  color: '#dc2626',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  marginBottom: '1.4rem',
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            {/* ===============================================================
                STEP 1: ASK MAIL & USER DETAILS
                =============================================================== */}
            {currentStep === 1 && (
              <>
                <div className="auth-card-header">
                  <h2 className="auth-card-title">Create an Account</h2>
                  <p className="auth-card-subtitle">
                    Step 1 of 3: Enter your email to receive a 6-digit verification code.
                  </p>
                </div>

                <form onSubmit={handleStep1Submit} className="auth-form">
                  {/* Email Field */}
                  <div className="auth-form-group">
                    <label className="auth-label" htmlFor="register-email">
                      Email Address *
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
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="auth-form-group">
                    <label className="auth-label" htmlFor="register-name">
                      Full Name / Contact Person *
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

                  {/* Company Name */}
                  <div className="auth-form-group">
                    <label className="auth-label" htmlFor="register-company">
                      Company / Organization Name
                    </label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon">
                        <Building2 size={18} />
                      </span>
                      <input
                        id="register-company"
                        type="text"
                        placeholder="e.g. Aramco / Shell / EPC Contractor"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="auth-input"
                      />
                    </div>
                  </div>

                  {/* Submit Step 1 Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="auth-submit-btn"
                    style={{ marginTop: '0.8rem' }}
                  >
                    <span>{loading ? 'Sending Code...' : 'Send Verification OTP'}</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="auth-switch-prompt">
                    <span>Already registered?</span>
                    <Link href="/login" className="auth-switch-link">
                      Sign In
                    </Link>
                  </div>
                </form>
              </>
            )}

            {/* ===============================================================
                STEP 2: ASK OTP & VERIFY MATCH
                =============================================================== */}
            {currentStep === 2 && (
              <>
                <div className="auth-card-header">
                  <h2 className="auth-card-title">Enter Verification OTP</h2>
                  <p className="auth-card-subtitle">
                    Step 2 of 3: We have sent a 6-digit code to <strong>{email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(1);
                      setError('');
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0284c7',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      marginTop: '0.4rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <ArrowLeft size={13} />
                    <span>Change email address</span>
                  </button>
                </div>

                <form onSubmit={handleStep2Submit} className="auth-form">
                  {/* Hostinger Email Sent Notification */}
                  <div
                    style={{
                      padding: '0.9rem 1.1rem',
                      backgroundColor: '#f0f9ff',
                      border: '1.5px solid #bae6fd',
                      borderRadius: '8px',
                      color: '#0369a1',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      lineHeight: '1.5',
                    }}
                  >
                    <Mail size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#0284c7' }} />
                    <div>
                      We have sent a 6-digit verification code to <strong>{email}</strong> from <strong>txco@iadesigns.in</strong>. Please check your inbox (or spam folder) and enter it below.
                    </div>
                  </div>

                  {/* 6-Digit OTP Input */}
                  <div className="auth-form-group">
                    <label className="auth-label" style={{ textAlign: 'center' }}>
                      6-Digit Security Code
                    </label>
                    <input
                      ref={otpInputRef}
                      type="text"
                      maxLength={6}
                      required
                      placeholder="••••••"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                      className="auth-otp-input-field"
                      autoFocus
                    />
                  </div>

                  {/* Resend Code Action */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '0.86rem',
                      color: '#64748b',
                    }}
                  >
                    {resendTimer > 0 ? (
                      <span>Resend code in <strong>{resendTimer}s</strong></span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        disabled={loading}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#052C58',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <RotateCcw size={14} />
                        <span>Resend Verification Code</span>
                      </button>
                    )}
                  </div>

                  {/* Verify OTP Button */}
                  <button
                    type="submit"
                    className="auth-submit-btn"
                    style={{ marginTop: '0.8rem' }}
                  >
                    <span>Verify Code & Continue</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}

            {/* ===============================================================
                STEP 3: CREATE PASSWORD AND CONFIRM PASSWORD
                =============================================================== */}
            {currentStep === 3 && (
              <>
                <div className="auth-card-header">
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      backgroundColor: '#ecfdf5',
                      color: '#047857',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '0.8rem',
                      border: '1px solid #a7f3d0',
                    }}
                  >
                    <CheckCircle2 size={14} />
                    <span>Email Verified: {email}</span>
                  </div>

                  <h2 className="auth-card-title">Set Your Password</h2>
                  <p className="auth-card-subtitle">
                    Step 3 of 3: Create a secure password to complete your account setup.
                  </p>
                </div>

                <form onSubmit={handleStep3Submit} className="auth-form">
                  {/* Create Password */}
                  <div className="auth-form-group">
                    <label className="auth-label" htmlFor="register-password">
                      Create Password *
                    </label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon">
                        <Lock size={18} />
                      </span>
                      <input
                        id="register-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="At least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        autoFocus
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

                  {/* Confirm Password */}
                  <div className="auth-form-group">
                    <label className="auth-label" htmlFor="register-confirm-password">
                      Confirm Password *
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

                  {/* Terms Checkbox */}
                  <div className="auth-checkbox-row" style={{ alignItems: 'flex-start' }}>
                    <label
                      className="auth-checkbox-label"
                      style={{ alignItems: 'flex-start', lineHeight: '1.4' }}
                    >
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="auth-checkbox"
                        style={{ marginTop: '0.15rem' }}
                      />
                      <span>
                        I agree to TXCO{' '}
                        <Link
                          href="/resources"
                          style={{ color: '#052C58', textDecoration: 'underline' }}
                        >
                          Terms of Service
                        </Link>{' '}
                        &{' '}
                        <Link
                          href="/resources"
                          style={{ color: '#052C58', textDecoration: 'underline' }}
                        >
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Complete Registration Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="auth-submit-btn"
                    style={{ marginTop: '0.8rem' }}
                  >
                    <span>{loading ? 'Creating Account...' : 'Complete Account Creation'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}

            {/* ===============================================================
                STEP 4: DONE ACCOUNT CREATED (SUCCESS)
                =============================================================== */}
            {currentStep === 4 && (
              <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.4rem auto',
                    boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    color: '#052C58',
                    marginBottom: '0.5rem',
                  }}
                >
                  Done! Account Created
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#64748b',
                    lineHeight: '1.55',
                    marginBottom: '1.8rem',
                  }}
                >
                  Welcome to TXCO Sealing Products, <strong>{name}</strong>! Your account has been verified and registered successfully.
                </p>

                {/* Account Summary Card */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1.2rem',
                    textAlign: 'left',
                    marginBottom: '1.8rem',
                    fontSize: '0.88rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div>
                    <span style={{ color: '#64748b' }}>Account Email: </span>
                    <strong style={{ color: '#052C58' }}>{email}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Contact Name: </span>
                    <strong style={{ color: '#052C58' }}>{name}</strong>
                  </div>
                  {company && (
                    <div>
                      <span style={{ color: '#64748b' }}>Company: </span>
                      <strong style={{ color: '#052C58' }}>{company}</strong>
                    </div>
                  )}
                  <div>
                    <span style={{ color: '#64748b' }}>Status: </span>
                    <span style={{ color: '#16a34a', fontWeight: 700 }}>● Verified Customer</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link href="/login" style={{ textDecoration: 'none' }}>
                    <button className="auth-submit-btn" style={{ margin: 0 }}>
                      <span>Sign In with Your Password</span>
                      <ArrowRight size={16} />
                    </button>
                  </Link>

                  <Link href="/stock-list" style={{ textDecoration: 'none' }}>
                    <button
                      type="button"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        color: '#334155',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                      }}
                    >
                      Browse Live Stock Inventory
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
