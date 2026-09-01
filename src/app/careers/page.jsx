'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { careersPageData } from '@/data/careersData';
import '@/styles/careers.css';
import { ArrowRight, Check, X, Briefcase, Mail } from 'lucide-react';

export default function CareersPage() {
  const { hero, card, benefits } = careersPageData;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const handleOpenApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful application submission
    setSubmitted(true);
  };

  return (
    <div className="careers-page-wrapper">
      <Header />

      {/* 1. Top Page Hero Banner (Same as About Us page) */}
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImage="/images/banner/txco-page-banner.avif"
        bgPosition="center bottom"
      />

      {/* 2. Main Careers Card (Matches Exact Screenshot Layout) */}
      <main className="careers-main-container">
        <div className="careers-card">
          {/* Top Blue Accent Line */}
          <div className="careers-card-top-bar" />

          <div className="careers-card-body">
            {/* Left Column: Heading + Team Circle Image */}
            <div className="careers-left-column">
              <h2 className="careers-left-heading">{card.heading}</h2>
              <div className="careers-left-image-wrapper">
                <img
                  src={card.image}
                  alt="TXCO Team Unity"
                  className="careers-left-image"
                />
              </div>
              <p className="careers-left-tagline">
                Join our innovative engineering and manufacturing family. We are always looking for passionate talent to grow with us.
              </p>
            </div>

            {/* Right Column: Job Postings List */}
            <div className="careers-right-column">
              <div className="careers-jobs-list">
                {card.jobs.map((job) => (
                  <div key={job.id} className="careers-job-item">
                    <h3 className="careers-job-title">{job.title}</h3>
                    <p className="careers-job-qualification">
                      <strong>Qualification :</strong> {job.qualification}
                    </p>
                    {job.description && (
                      <p className="careers-job-desc">{job.description}</p>
                    )}
                    <button
                      type="button"
                      onClick={() => handleOpenApply(job.title)}
                      className="careers-apply-link"
                    >
                      Apply Now <span className="careers-apply-arrow">&rarr;</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom Contact Text */}
              <div className="careers-contact-note">
                {card.contactNote}{' '}
                <a
                  href={`mailto:${card.contactEmail}`}
                  className="careers-contact-email-link"
                >
                  {card.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Why Work at TXCO Benefits */}
      <section className="careers-benefits-section">
        <h2 className="careers-benefits-heading">Why Build Your Career at TXCO?</h2>
        <div className="careers-benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="careers-benefit-card">
              <h3 className="careers-benefit-title">{b.title}</h3>
              <p className="careers-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Application Modal */}
      {modalOpen && (
        <div className="careers-modal-overlay" onClick={handleCloseModal}>
          <div
            className="careers-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="careers-modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <h3 className="careers-modal-title">Apply for Position</h3>
                <p className="careers-modal-subtitle">
                  Selected Role: <strong>{selectedJob}</strong>
                </p>

                <form onSubmit={handleSubmit} className="careers-form">
                  <div className="careers-form-group">
                    <label className="careers-form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="careers-form-input"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="careers-form-input"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="careers-form-input"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">Position</label>
                    <select
                      className="careers-form-select"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                    >
                      {card.jobs.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">
                      Total Experience (Years)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3 Years"
                      className="careers-form-input"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                    />
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">
                      Resume / Portfolio Link or Cover Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Paste your LinkedIn / Google Drive resume link or brief introduction..."
                      className="careers-form-textarea"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button type="submit" className="txco-btn txco-btn-primary careers-form-submit-btn">
                    <span>Submit Application</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="careers-form-success">
                <div className="careers-form-success-icon">
                  <Check size={28} />
                </div>
                <h3 className="careers-modal-title">Application Received!</h3>
                <p className="careers-benefit-desc" style={{ marginTop: '0.8rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your application for <strong>{formData.position}</strong> has been submitted. Our HR recruitment team will review your profile and reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="txco-btn txco-btn-primary careers-form-submit-btn"
                  style={{ marginTop: '1.5rem' }}
                >
                  <span>Done</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Contact Section */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
