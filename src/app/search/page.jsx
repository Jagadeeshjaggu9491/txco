'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, X, Clock, ArrowRight, Tag, Layers, Wrench, ShieldCheck } from 'lucide-react';
import { defaultRecentSearches, searchCategories, allCatalogProducts } from '@/data/searchData';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(defaultRecentSearches);

  const handleSelectRecent = (term) => {
    setQuery(term);
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
  };

  const filteredProducts = allCatalogProducts.filter((product) => {
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
      <main style={{ width: '100%', minHeight: '80vh', backgroundColor: 'var(--bg-light-surface)', paddingBottom: '5rem' }}>
        {/* Top Search Hero Banner */}
        <section className="search-hero-section">
          <div className="search-hero-container">
            <h1 className="search-hero-title">
              Search TXCO Products & Services
            </h1>
            <p className="search-hero-desc">
              Find custom gaskets, bolting solutions, technical services, and industry specifications.
            </p>

            {/* Main Search Input Box */}
            <div className="search-input-wrapper">
              <Search size={22} color="#64748b" style={{ flexShrink: 0, marginRight: '0.8rem' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product name, category, or application..."
                className="search-text-input"
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
                className="txco-btn txco-btn-steel"
                style={{ marginLeft: '0.5rem', flexShrink: 0 }}
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
            <div className="search-recent-box">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--dark-navy)' }}>
                  <Clock size={18} color="var(--accent-blue)" />
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Recent Searches
                  </h3>
                </div>
                <button
                  onClick={handleClearRecent}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
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
                    className={`recent-tag-pill ${query === term ? 'active' : ''}`}
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
                color: 'var(--dark-navy)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Popular Categories
            </h3>
            <div className="grid-4-col quick-categories-grid">
              {searchCategories.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={() => setQuery(cat.queryValue)}
                  className="category-quick-card"
                >
                  <div className="category-icon-box">
                    {cat.iconName === 'Layers' && <Layers size={22} />}
                    {cat.iconName === 'Wrench' && <Wrench size={22} />}
                    {cat.iconName === 'ShieldCheck' && <ShieldCheck size={22} />}
                    {cat.iconName === 'Search' && <Search size={22} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>{cat.title}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Results Heading */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--dark-navy)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {query ? `Search Results for "${query}"` : 'All Products & Services'}
            </h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>
              {filteredProducts.length} items found
            </span>
          </div>

          {/* Search Results Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid-3-col search-results-grid">
              {filteredProducts.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="search-result-card"
                >
                  <div className="result-card-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="result-card-img"
                    />
                  </div>
                  <div className="result-card-body">
                    <span className="result-card-category">
                      {item.category}
                    </span>
                    <h4 className="result-card-title">
                      {item.title}
                    </h4>
                    <p className="result-card-desc">
                      {item.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                      {item.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.75rem',
                            backgroundColor: '#f1f5f9',
                            color: 'var(--text-secondary)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            fontWeight: '500',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <button className="txco-btn txco-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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
                backgroundColor: 'var(--bg-pure-white)',
                borderRadius: '12px',
                padding: '4rem 2rem',
                textAlign: 'center',
                border: '1px solid var(--border-light)',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '0.5rem' }}>No results found</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We couldn't find anything matching "{query}". Try checking for typos or searching for general keywords.
              </p>
              <button
                onClick={() => setQuery('')}
                className="txco-btn txco-btn-steel"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
