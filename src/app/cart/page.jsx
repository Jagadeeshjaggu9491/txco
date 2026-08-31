'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import {
  ShoppingCart,
  Trash2,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  RotateCcw,
  FileText,
  Building2,
  User,
  Mail,
  ChevronLeft,
} from 'lucide-react';
import {
  getCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from '@/utils/cartManager';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState('cart'); // 'cart' | 'review' | 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    note: '',
  });
  const [submittedRfqNumber, setSubmittedRfqNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load items & listen for updates
  useEffect(() => {
    const syncCart = () => {
      setCartItems(getCart());
      setIsLoaded(true);
    };

    syncCart();
    window.addEventListener('cart-updated', syncCart);
    window.addEventListener('storage', syncCart);

    return () => {
      window.removeEventListener('cart-updated', syncCart);
      window.removeEventListener('storage', syncCart);
    };
  }, []);

  // Quantity Change
  const handleQuantityChange = (itemCode, newQty) => {
    const updated = updateCartQuantity(itemCode, newQty);
    setCartItems(updated);
  };

  // Remove Item
  const handleRemoveItem = (itemCode) => {
    const updated = removeFromCart(itemCode);
    setCartItems(updated);
  };

  // Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit RFQ Request
  const handleSubmitRFQ = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill in your Name, Company, and Email.');
      return;
    }

    setIsSubmitting(true);

    // Simulate RFQ generation
    setTimeout(() => {
      const rfqNum = `RFQ-TXCO-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRfqNumber(rfqNum);
      setCurrentStep('confirmed');
      setIsSubmitting(false);

      // Clear Cart
      clearCart();
      setCartItems([]);
    }, 600);
  };

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Top Hero Banner */}
        <PageHero
          title="QUOTATION CART (RFQ)"
          subtitle="Review your selected gasket profiles, flange specs, and valve sealing items before submitting for instant engineering quotation."
          bgImage="/images/banner/txco-page-banner.avif"
          bgPosition="center bottom"
        />

        {/* Main Cart Content Area */}
        <section className="cart-page-section">
          <div className="cart-container">
            {!isLoaded ? (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748b' }}>
                Loading cart items...
              </div>
            ) : currentStep === 'confirmed' ? (
              /* Step 3: Confirmation Screen */
              <div className="rfq-success-card">
                <div className="rfq-success-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-family-heading)',
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#052C58',
                    marginBottom: '0.6rem',
                  }}
                >
                  RFQ Submitted Successfully!
                </h2>
                <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Thank you, <strong>{formData.name}</strong>. Your quotation request has been received by the TXCO technical sales team.
                </p>
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '1rem',
                    margin: '1.8rem 0',
                    fontSize: '0.92rem',
                    color: '#1e293b',
                  }}
                >
                  <div>
                    Quotation Reference Number: <strong style={{ color: '#00529b' }}>{submittedRfqNumber}</strong>
                  </div>
                  <div style={{ marginTop: '0.35rem', fontSize: '0.84rem', color: '#64748b' }}>
                    Confirmation email sent to: <strong>{formData.email}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/stock-list" className="cart-btn-primary">
                    <span>Back to Stock List</span>
                    <ArrowRight size={15} />
                  </Link>
                  <Link href="/catalogues" className="cart-btn-secondary" style={{ backgroundColor: '#475569' }}>
                    <FileText size={15} />
                    <span>Browse Catalogues</span>
                  </Link>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="cart-empty-box">
                <div className="cart-empty-icon">
                  <ShoppingCart size={36} />
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-family-heading)',
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#052C58',
                    margin: 0,
                  }}
                >
                  Your Quotation Cart is Empty
                </h2>
                <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '540px', lineHeight: '1.6', margin: 0 }}>
                  You haven&apos;t added any industrial gaskets, flanges, or sealing components to your RFQ cart yet. Browse our live inventory to add items.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                  <Link href="/stock-list" style={{ textDecoration: 'none' }}>
                    <button type="button" className="txco-btn txco-btn-steel">
                      <span>EXPLORE STOCK LIST</span>
                      <div className="txco-btn-icon-circle">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="13 5 20 12 13 19" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                  <Link href="/products" style={{ textDecoration: 'none' }}>
                    <button type="button" className="txco-btn txco-btn-steel" style={{ background: '#f1f5f9', color: '#334155' }}>
                      <span>BROWSE PRODUCTS</span>
                      <div className="txco-btn-icon-circle" style={{ background: '#e2e8f0' }}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="13 5 20 12 13 19" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ) : currentStep === 'cart' ? (
              /* Step 1: Cart Items Table (Matching Reference Screenshot 1) */
              <div>
                <div className="cart-table-wrapper">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th style={{ width: '32%' }}>Code</th>
                        <th style={{ width: '45%' }}>Product</th>
                        <th style={{ width: '15%' }}>Quantity</th>
                        <th style={{ width: '8%', textAlign: 'center' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.itemCode}>
                          <td className="cart-item-code">{item.itemCode}</td>
                          <td className="cart-item-product">
                            {item.product || `${item.profile || 'Gasket'} (${item.material || ''})`}
                          </td>
                          <td>
                            <div className="cart-qty-control">
                              <button
                                type="button"
                                className="cart-qty-btn"
                                onClick={() => handleQuantityChange(item.itemCode, (item.quantity || 1) - 1)}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity || 1}
                                onChange={(e) => handleQuantityChange(item.itemCode, e.target.value)}
                                className="cart-qty-input"
                              />
                              <button
                                type="button"
                                className="cart-qty-btn"
                                onClick={() => handleQuantityChange(item.itemCode, (item.quantity || 1) + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.itemCode)}
                              className="cart-remove-btn"
                              title="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Actions matching Screenshot 1 with txco-btn-steel */}
                <div className="cart-actions-bar" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link href="/stock-list" style={{ textDecoration: 'none' }}>
                    <button type="button" className="txco-btn txco-btn-steel">
                      <span>BACK TO THE STORE</span>
                      <div className="txco-btn-icon-circle">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="13 5 20 12 13 19" />
                        </svg>
                      </div>
                    </button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setCurrentStep('review')}
                    className="txco-btn txco-btn-steel"
                  >
                    <span>REQUEST A QUOTE</span>
                    <div className="txco-btn-icon-circle">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <polyline points="13 5 20 12 13 19" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Products Review & RFQ Details Form (Matching Reference Screenshot 2) */
              <div>
                <h2 className="rfq-review-header-title">Products review</h2>

                {/* Summary Table */}
                <div className="cart-table-wrapper" style={{ marginBottom: '2.5rem' }}>
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th style={{ width: '35%' }}>Code</th>
                        <th style={{ width: '45%' }}>Product</th>
                        <th style={{ width: '20%' }}>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.itemCode}>
                          <td className="cart-item-code">{item.itemCode}</td>
                          <td className="cart-item-product">
                            {item.product || `${item.profile || 'Gasket'} (${item.material || ''})`}
                          </td>
                          <td style={{ fontWeight: 600, color: '#0f172a' }}>{item.quantity || 1}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* RFQ User Details Form */}
                <form onSubmit={handleSubmitRFQ}>
                  <div className="rfq-form-grid">
                    <div className="rfq-form-group">
                      <label htmlFor="rfq-name" className="rfq-form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="rfq-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rfq-form-input"
                        placeholder="Your Full Name"
                      />
                    </div>

                    <div className="rfq-form-group">
                      <label htmlFor="rfq-company" className="rfq-form-label">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="rfq-company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="rfq-form-input"
                        placeholder="Company / Organization Name"
                      />
                    </div>

                    <div className="rfq-form-group">
                      <label htmlFor="rfq-email" className="rfq-form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="rfq-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rfq-form-input"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div className="rfq-form-group full-width">
                      <label htmlFor="rfq-note" className="rfq-form-label">
                        Note
                      </label>
                      <textarea
                        id="rfq-note"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        className="rfq-form-textarea"
                        placeholder="Add project specifications, required delivery timeline, delivery location, or special testing requirements..."
                      />
                    </div>
                  </div>

                  {/* Form Submission Actions with txco-btn-steel */}
                  <div className="rfq-submit-row" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="txco-btn txco-btn-steel"
                    >
                      <span>{isSubmitting ? 'PROCESSING...' : 'CONFIRM PURCHASE'}</span>
                      <div className="txco-btn-icon-circle">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="13 5 20 12 13 19" />
                        </svg>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep('cart')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'inherit',
                      }}
                    >
                      <ChevronLeft size={16} />
                      <span>Back to Edit Cart</span>
                    </button>
                  </div>
                </form>
              </div>
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
