'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Search, Menu, X, ChevronRight, User, ShoppingCart, ChevronDown, Check } from 'lucide-react';
import { utilityNavLinks, mainNavigationMenu } from '@/data/navigationData';
import { getCartCount } from '@/utils/cartManager';

const languagesList = ['English', 'Germany', 'Spanish', 'French'];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubitemIndex, setActiveSubitemIndex] = useState(0);
  const [activeTertiaryIndex, setActiveTertiaryIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const countryMenuTimeoutRef = useRef(null);

  const handleCountryMouseEnter = () => {
    if (countryMenuTimeoutRef.current) {
      clearTimeout(countryMenuTimeoutRef.current);
      countryMenuTimeoutRef.current = null;
    }
    setCountryMenuOpen(true);
  };

  const handleCountryMouseLeave = () => {
    if (countryMenuTimeoutRef.current) clearTimeout(countryMenuTimeoutRef.current);
    countryMenuTimeoutRef.current = setTimeout(() => {
      setCountryMenuOpen(false);
    }, 240);
  };

  // Sync cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    updateCartCount();
    window.addEventListener('cart-updated', updateCartCount);
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('cart-updated', updateCartCount);
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const leaveTimeoutRef = useRef(null);

  const handleMouseEnterMenu = (menuKey) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (activeMenu !== menuKey) {
      setActiveMenu(menuKey);
      setActiveSubitemIndex(0);
      setActiveTertiaryIndex(0);
    }
  };

  const handleMouseLeaveMenu = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 280);
  };

  const currentMenu = activeMenu ? mainNavigationMenu[activeMenu] : null;
  const currentSubitem = currentMenu && currentMenu.items[activeSubitemIndex];
  const hasSubChildren = currentSubitem && currentSubitem.children && currentSubitem.children.length > 0;

  const currentTertiaryItem = hasSubChildren && currentSubitem.children[activeTertiaryIndex];
  const hasTertiaryChildren = currentTertiaryItem && currentTertiaryItem.children && currentTertiaryItem.children.length > 0;

  return (
    <header className="site-header">
      {/* Top Utility Bar */}
      <div className="header-top-bar">
        <div className="header-top-content">
          <div className="header-top-links">
            {utilityNavLinks.map((item, idx) => {
              const isPageActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`header-top-link ${isPageActive ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="header-top-right" style={{ position: 'relative' }}>
            {/* Custom Country / Region Megamenu Selector */}
            <div
              className="country-dropdown-wrapper"
              onMouseEnter={handleCountryMouseEnter}
              onMouseLeave={handleCountryMouseLeave}
            >
              <button
                type="button"
                onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                className={`country-dropdown-btn ${countryMenuOpen ? 'active' : ''}`}
                aria-expanded={countryMenuOpen}
                aria-haspopup="true"
              >
                <Globe size={15} color={countryMenuOpen ? '#052C58' : '#475569'} style={{ flexShrink: 0 }} />
                <span>{selectedLanguage}</span>
                <ChevronDown
                  size={13}
                  className={`country-dropdown-chevron ${countryMenuOpen ? 'open' : ''}`}
                />
              </button>

              {countryMenuOpen && (
                <div className="country-dropdown-menu">
                  {languagesList.map((lang) => {
                    const isSelected = selectedLanguage === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        className={`country-dropdown-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setCountryMenuOpen(false);
                        }}
                      >
                        <span>{lang}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <span className="header-divider">|</span>
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="header-search-link header-search-btn"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                color: searchOpen ? 'var(--primary-navy)' : 'inherit',
              }}
              title="Search products and catalogues"
            >
              <Search size={16} color={searchOpen ? '#052C58' : '#475569'} />
              <span>Search</span>
            </button>
            <span className="header-divider">|</span>
            <Link href="/login" className="header-search-link">
              <User size={16} color="#475569" />
              <span>Login</span>
            </Link>
            <span className="header-divider">|</span>
            <Link
              href="/cart"
              className="header-search-link"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <ShoppingCart size={17} color="#475569" />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-9px',
                      backgroundColor: '#00529b',
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      minWidth: '17px',
                      height: '17px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: 1,
                      padding: '0 2px',
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
            </Link>

            {/* In-Header Expandable Search Bar Popover */}
            {searchOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '0.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 12px 30px rgba(5, 44, 88, 0.18)',
                  border: '1.5px solid #cbd5e1',
                  padding: '0.6rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  zIndex: 999,
                  minWidth: '280px',
                }}
              >
                <Search size={16} color="#64748b" />
                <input
                  type="text"
                  placeholder="Search products, RTJ, gaskets..."
                  autoFocus
                  style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.86rem',
                    width: '100%',
                    fontFamily: 'inherit',
                    color: '#1e293b',
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      window.location.href = `/products?q=${encodeURIComponent(e.target.value)}`;
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.1rem',
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar & Logo */}
      <div className="header-main-nav">
        {/* Main Nav Links */}
        <nav
          className="header-nav-list"
          onMouseEnter={() => {
            if (leaveTimeoutRef.current) {
              clearTimeout(leaveTimeoutRef.current);
              leaveTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeaveMenu}
        >
          {Object.keys(mainNavigationMenu).map((key) => {
            const menu = mainNavigationMenu[key];
            const isActive = activeMenu === key;

            return (
              <div
                key={key}
                onMouseEnter={() => handleMouseEnterMenu(key)}
                className="nav-item-wrapper"
              >
                <Link
                  href={menu.href}
                  onClick={(e) => {
                    if (menu.href === '#' || !menu.href) {
                      e.preventDefault();
                    }
                  }}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  {menu.title}
                </Link>

                {/* Desktop Mega Menu Dropdown Panel aligned exactly to this nav link's left */}
                {isActive && (
                  <div
                    onMouseEnter={() => {
                      if (leaveTimeoutRef.current) {
                        clearTimeout(leaveTimeoutRef.current);
                        leaveTimeoutRef.current = null;
                      }
                    }}
                    className="mega-menu-dropdown"
                  >
                    {/* Primary Column (Level 1) */}
                    <div className="mega-menu-primary-col">
                      {menu.items.map((item, idx) => {
                        const isSelected = activeSubitemIndex === idx;

                        return (
                          <div
                            key={idx}
                            onMouseEnter={() => {
                              setActiveSubitemIndex(idx);
                              setActiveTertiaryIndex(0);
                            }}
                            className={`mega-menu-item ${isSelected ? 'active' : ''}`}
                          >
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                if (item.href === '#' || !item.href) {
                                  e.preventDefault();
                                } else {
                                  setActiveMenu(null);
                                }
                              }}
                              className="mega-menu-item-link"
                            >
                              {item.name}
                            </Link>

                            {item.children && item.children.length > 0 && (
                              <ChevronRight size={16} color={isSelected ? '#ffffff' : '#555555'} />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Secondary Submenu Column (Level 2) */}
                    {hasSubChildren && (
                      <div className="mega-menu-secondary-col">
                        {currentSubitem.children.map((child, cIdx) => {
                          const hasNestedChildren = child.children && child.children.length > 0;
                          const isSubSelected = activeTertiaryIndex === cIdx;

                          if (hasNestedChildren) {
                            return (
                              <div
                                key={cIdx}
                                onMouseEnter={() => setActiveTertiaryIndex(cIdx)}
                                className={`mega-menu-subitem ${isSubSelected ? 'active' : ''}`}
                              >
                                <Link
                                  href={child.href}
                                  onClick={(e) => {
                                    if (child.href === '#' || !child.href) {
                                      e.preventDefault();
                                    } else {
                                      setActiveMenu(null);
                                    }
                                  }}
                                  className="mega-submenu-link"
                                >
                                  {child.name}
                                </Link>
                                <ChevronRight size={15} color={isSubSelected ? '#ffffff' : '#666666'} />
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={cIdx}
                              href={child.href}
                              onClick={(e) => {
                                if (child.href === '#' || !child.href) {
                                  e.preventDefault();
                                } else {
                                  setActiveMenu(null);
                                }
                              }}
                              className="mega-submenu-link-standalone"
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Tertiary Column (Level 3 - e.g. RTJ Variants) */}
                    {hasTertiaryChildren && (
                      <div className="mega-menu-tertiary-col">
                        {currentTertiaryItem.children.map((tert, tIdx) => (
                          <Link
                            key={tIdx}
                            href={tert.href}
                            onClick={(e) => {
                              if (tert.href === '#' || !tert.href) {
                                e.preventDefault();
                              } else {
                                setActiveMenu(null);
                              }
                            }}
                            className="mega-tertiary-link"
                          >
                            {tert.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}


        </nav>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} color="#1d2744" /> : <Menu size={28} color="#1d2744" />}
        </button>

        {/* Brand Logo */}
        <Link href="/" className="header-logo-link">
          <img
            src="/images/logo/txco-logo-new.avif"
            alt="TXCO Sealing Products Logo"
            className="header-logo-img"
          />
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">
            Industries
          </Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">
            Products
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">
            Services
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">
            Resources
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">
            About Us
          </Link>

        </div>
      )}
    </header>
  );
}
