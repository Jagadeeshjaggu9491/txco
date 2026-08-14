'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, X, Clock, ArrowRight, Tag, Layers, Wrench, ShieldCheck } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'Spiral Wound Gaskets',
    'Flange Isolation Kits',
    'High Temp PTFE Seals',
    'Expansion Joints',
    'Fasteners & Bolting',
    'Reverse Engineering Services',
  ]);

  const allProducts = [
    {
      id: 1,
      title: 'Gaskets, Kits & Seals',
      category: 'Sealing Products',
      description: 'High-performance standard and custom sealing gaskets for critical industrial applications.',
      image: '/images/home-products.png',
      tags: ['Gaskets', 'Seals', 'Flange'],
    },
    {
      id: 2,
      title: 'Hoses & Expansion Joints',
      category: 'Sealing Products',
      description: 'Flexible metallic and synthetic expansion joints built to withstand thermal expansion and vibration.',
      image: '/images/home-services.png',
      tags: ['Hoses', 'Expansion Joints'],
    },
    {
      id: 3,
      title: 'Fasteners & Bolting',
      category: 'Sealing Products',
      description: 'Heavy hex bolts, stud bolts, and specialty fasteners engineered for high-pressure flange assemblies.',
      image: '/images/home-innovations.png',
      tags: ['Bolts', 'Fasteners', 'Hardware'],
    },
    {
      id: 4,
      title: 'Reverse Engineering',
      category: 'Engineered Solutions',
      description: '3D scanning and precision dimensioning services to reproduce hard-to-find components.',
      image: '/images/home-services.png',
      tags: ['Engineering', '3D Scanning', 'Custom'],
    },
    {
      id: 5,
      title: 'Custom Gasket Engineering',
      category: 'Engineered Solutions',
      description: 'Tailored sealing design and material selection for extreme temperatures and harsh chemicals.',
      image: '/images/home-innovations.png',
      tags: ['Custom', 'CAD', 'Materials'],
    },
    {
      id: 6,
      title: 'Field Measurement & Support',
      category: 'Technical Services',
      description: 'On-site technical support teams available 24/7 for accurate flange measuring and bolt-up protocols.',
      image: '/images/home-services.png',
      tags: ['Field Support', 'Measurement', '24/7'],
    },
  ];

  const handleSelectRecent = (term) => {
    setQuery(term);
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
  };

  const filteredProducts = allProducts.filter((product) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <Header />
      <main style={{ width: '100%', minHeight: '80vh', backgroundColor: '#f8fafc', paddingBottom: '5rem' }}>
        {/* Top Search Hero Banner */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#1d2744',
            color: '#ffffff',
            padding: '4rem 1.5rem 4.5rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h1
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                letterSpacing: '0.05em',
                marginBottom: '0.8rem',
                textTransform: 'uppercase',
              }}
            >
              Search TXCO Products & Services
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', marginBottom: '2.2rem' }}>
              Find custom gaskets, bolting solutions, technical services, and industry specifications.
            </p>

            {/* Main Search Input Box */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '0.4rem 0.6rem 0.4rem 1.2rem',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Search size={22} color="#64748b" style={{ flexShrink: 0, marginRight: '0.8rem' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product name, category, or application..."
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.05rem',
                  color: '#1e293b',
                  backgroundColor: 'transparent',
                  padding: '0.7rem 0',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.4rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Clear Search"
                >
                  <X size={20} />
                </button>
              )}
              <button
                style={{
                  padding: '0.8rem 1.8rem',
                  backgroundColor: '#344473',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginLeft: '0.5rem',
                  flexShrink: 0,
                }}
              >
                <span>SEARCH</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Search Body Content */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          {/* Recent Searches Section */}
          {recentSearches.length > 0 && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.8rem 2rem',
                border: '1px solid #e2e8f0',
                marginBottom: '3rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#1d2744' }}>
                  <Clock size={18} color="#344473" />
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Recent Searches
                  </h3>
                </div>
                <button
                  onClick={handleClearRecent}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Clear Recent
                </button>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {recentSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectRecent(term)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.55rem 1.1rem',
                      backgroundColor: query === term ? '#1d2744' : '#f1f5f9',
                      color: query === term ? '#ffffff' : '#334155',
                      border: '1px solid ' + (query === term ? '#1d2744' : '#cbd5e1'),
                      borderRadius: '30px',
                      fontSize: '0.88rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Tag size={14} color={query === term ? '#ffffff' : '#64748b'} />
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Categories Bar */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1d2744',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Popular Categories
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
              }}
              className="quick-categories-grid"
            >
              <div
                onClick={() => setQuery('Sealing Products')}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ backgroundColor: '#eef2f9', padding: '0.75rem', borderRadius: '8px', color: '#1d2744' }}>
                  <Layers size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>Sealing Products</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Gaskets, Seals & Kits</span>
                </div>
              </div>

              <div
                onClick={() => setQuery('Engineered Solutions')}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ backgroundColor: '#eef2f9', padding: '0.75rem', borderRadius: '8px', color: '#1d2744' }}>
                  <Wrench size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>Engineered Solutions</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Custom Machining</span>
                </div>
              </div>

              <div
                onClick={() => setQuery('Technical Services')}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ backgroundColor: '#eef2f9', padding: '0.75rem', borderRadius: '8px', color: '#1d2744' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>Technical Services</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>24/7 Field Measurement</span>
                </div>
              </div>

              <div
                onClick={() => setQuery('')}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ backgroundColor: '#eef2f9', padding: '0.75rem', borderRadius: '8px', color: '#1d2744' }}>
                  <Search size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>Browse All</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>View Full Catalog</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results Heading */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1d2744',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {query ? `Search Results for "${query}"` : 'All Products & Services'}
            </h3>
            <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>
              {filteredProducts.length} items found
            </span>
          </div>

          {/* Search Results Grid */}
          {filteredProducts.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
              }}
              className="results-grid"
            >
              {filteredProducts.map((item, idx) => (
                <div
                  key={item.id || idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <div style={{ width: '100%', height: '200px', backgroundColor: '#f1f5f9', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#344473',
                        letterSpacing: '0.08em',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.6rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', flexGrow: 1, marginBottom: '1.2rem' }}>
                      {item.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            fontWeight: '500',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <button
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: '#1d2744',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '0px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '4rem 2rem',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '0.5rem' }}>No results found</h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We couldn't find anything matching "{query}". Try checking for typos or searching for general keywords.
              </p>
              <button
                onClick={() => setQuery('')}
                style={{
                  padding: '0.75rem 1.8rem',
                  backgroundColor: '#344473',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 1024px) {
          .quick-categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .results-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .quick-categories-grid {
            grid-template-columns: 1fr !important;
          }
          .results-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
