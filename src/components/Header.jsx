'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Search, Menu, X, ChevronRight, User, ShoppingCart, ChevronDown, Check, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { utilityNavLinks, mainNavigationMenu } from '@/data/navigationData';
import { getCartCount } from '@/utils/cartManager';
import { getCurrentUser } from '@/utils/authManager';
import { applyLanguage, getSelectedLanguage, LANGUAGE_OPTIONS } from '@/components/GoogleTranslate';

const languagesList = LANGUAGE_OPTIONS.map((item) => item.name);

function isMenuMatchPath(menu, currentPath) {
  if (!menu || !currentPath || currentPath === '/') return false;

  // Direct match on main link (e.g. /about, /services, /products)
  if (
    menu.href &&
    menu.href !== '/' &&
    menu.href !== '#' &&
    (currentPath === menu.href || currentPath.startsWith(menu.href + '/'))
  ) {
    return true;
  }

  // Check direct child items (e.g. Quality Policy [/quality-policy], HSE Policy [/hse-policy], Careers [/careers])
  if (Array.isArray(menu.items)) {
    const hasItemMatch = menu.items.some((item) => {
      if (!item.href || item.href === '/' || item.href === '#') return false;
      // Exclude utility pages like contact or catalogues from lighting up dropdown parent menus
      if (item.href === '/contact' || item.href === '/catalogues') return false;
      const cleanHref = item.href.split('?')[0];
      return currentPath === cleanHref || currentPath.startsWith(cleanHref + '/');
    });
    if (hasItemMatch) return true;
  }

  // Check categories and nested children (e.g. Products, Industries)
  if (Array.isArray(menu.categories)) {
    const hasCategoryMatch = menu.categories.some((cat) => {
      if (cat.href && cat.href !== '/' && cat.href !== '#') {
        const cleanCatHref = cat.href.split('?')[0];
        if (currentPath === cleanCatHref || currentPath.startsWith(cleanCatHref + '/')) {
          return true;
        }
      }
      if (Array.isArray(cat.children)) {
        return cat.children.some((child) => {
          if (!child.href || child.href === '/' || child.href === '#') return false;
          const cleanChildHref = child.href.split('?')[0];
          return currentPath === cleanChildHref || currentPath.startsWith(cleanChildHref + '/');
        });
      }
      return false;
    });
    if (hasCategoryMatch) return true;
  }

  return false;
}

const HERO_PAGES = [
  '/',
  '/about',
  '/industries',
  '/services',
  '/contact',
  '/careers',
  '/quality-policy',
  '/hse-policy',
  '/catalogues',
  '/cart',
  '/certifications',
  '/blog',
  '/news',
  '/faqs',
  '/resources',
  '/stock-list',
  '/products',
  '/login',
  '/register',
];

export default function Header({ heroMode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Header hero overlay mode: floating transparent header over hero sections
  const isHeroMode =
    heroMode !== undefined
      ? Boolean(heroMode)
      : isHomePage ||
        HERO_PAGES.some(
          (route) =>
            (pathname === route || pathname.startsWith(route + '/')) &&
            !pathname.startsWith('/admin') &&
            !pathname.startsWith('/portal')
        );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [mobileSubExpanded, setMobileSubExpanded] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubitemIndex, setActiveSubitemIndex] = useState(0);
  const [activeTertiaryIndex, setActiveTertiaryIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [authUser, setAuthUser] = useState(null);

  const toggleMobileSection = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileSubSection = (subKey) => {
    setMobileSubExpanded((prev) => ({
      ...prev,
      [subKey]: !prev[subKey],
    }));
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  }, [pathname]);

  // Synchronize authenticated user
  useEffect(() => {
    const syncAuth = () => setAuthUser(getCurrentUser());
    syncAuth();
    window.addEventListener('auth-changed', syncAuth);
    window.addEventListener('storage', syncAuth);

    return () => {
      window.removeEventListener('auth-changed', syncAuth);
      window.removeEventListener('storage', syncAuth);
    };
  }, []);

  // Synchronize language state on client load and updates
  useEffect(() => {
    setSelectedLanguage(getSelectedLanguage());

    const handleLangChange = (e) => {
      if (e?.detail) {
        setSelectedLanguage(e.detail);
      }
    };

    window.addEventListener('language-changed', handleLangChange);
    return () => window.removeEventListener('language-changed', handleLangChange);
  }, []);

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

  // Helper to render the desktop mega menu dropdown
  const renderMegaMenu = (menu) => (
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
                className="mega-menu-link"
              >
                <span>{item.name}</span>
                {item.children && item.children.length > 0 && (
                  <ChevronRight size={14} className="chevron-icon" />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Subitem Column (Level 2) */}
      {hasSubChildren && (
        <div className="mega-menu-subitem-col">
          {currentSubitem.children.map((child, cIdx) => {
            const hasTertiary = child.children && child.children.length > 0;
            const isTertiaryActive = activeTertiaryIndex === cIdx;

            if (hasTertiary) {
              return (
                <div
                  key={cIdx}
                  onMouseEnter={() => setActiveTertiaryIndex(cIdx)}
                  className={`mega-submenu-parent ${isTertiaryActive ? 'active' : ''}`}
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
                    <span>{child.name}</span>
                    <ChevronRight size={14} className="chevron-icon" />
                  </Link>
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

      {/* Tertiary Column (Level 3) */}
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
  );

  return (
    <header className={`site-header ${isHeroMode ? 'header-hero-mode' : ''} ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
      {/* Main Header Layout */}
      <div className="header-hero-unscrolled">
        {/* Desktop Header Layout */}
        <div className="header-hero-container desktop-header-only">
          {/* Left Column */}
          <div className="header-hero-left-col">
            {/* Top Row: Utility Navigation */}
            <div className="header-hero-row-top">
              <Link
                href="/"
                className={`header-hero-util-link ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className={`header-hero-util-link ${pathname === '/contact' || pathname.startsWith('/contact/') ? 'active' : ''}`}
              >
                Contact
              </Link>
              <Link
                href="/catalogues"
                className={`header-hero-util-link ${pathname === '/catalogues' || pathname.startsWith('/catalogues/') || pathname === '/downloads' ? 'active' : ''}`}
              >
                Downloads
              </Link>

              {/* Country / Language Selector */}
              <div
                className="country-dropdown-wrapper"
                onMouseEnter={handleCountryMouseEnter}
                onMouseLeave={handleCountryMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                  className={`header-hero-util-btn country-btn ${countryMenuOpen ? 'active' : ''}`}
                  aria-expanded={countryMenuOpen}
                  aria-haspopup="true"
                >
                  <Globe size={15} color="#1d2744" style={{ flexShrink: 0 }} />
                  <span>{selectedLanguage}</span>
                  <ChevronDown
                    size={13}
                    color="#1d2744"
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
                            applyLanguage(lang);
                            setCountryMenuOpen(false);
                          }}
                        >
                          <span>{lang}</span>
                          {isSelected && <Check size={14} style={{ marginLeft: 'auto' }} />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <span className="header-hero-divider">|</span>

              {/* Search Toggle */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="header-hero-util-btn search-btn"
                  title="Search products and catalogues"
                >
                  <Search size={15} color="#1d2744" />
                  <span>Search</span>
                </button>

                {/* Popover search bar */}
                {searchOpen && (
                  <div className="header-hero-search-popover">
                    <Search size={16} color="#64748b" />
                    <input
                      type="text"
                      placeholder="Search products, RTJ, gaskets..."
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          window.location.href = `/products?q=${encodeURIComponent(e.target.value)}`;
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="search-close-btn"
                    >
                      <X size={15} />
                    </button>
                  </div>
                )}
              </div>
              <span className="header-hero-divider">|</span>

              {/* Cart Button */}
              <Link
                href="/cart"
                className={`header-hero-util-btn cart-btn ${pathname === '/cart' ? 'active' : ''}`}
                title="View Shopping Cart"
              >
                <div className="header-cart-icon-wrapper">
                  <ShoppingCart size={15} />
                  {cartCount > 0 && (
                    <span className="header-cart-badge">{cartCount}</span>
                  )}
                </div>
                <span>Cart{cartCount > 0 ? ` (${cartCount})` : ''}</span>
              </Link>
            </div>

            {/* Bottom Row: Main Navigation Links */}
            <nav
              className="header-hero-row-bottom"
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
                const isDropdownOpen = activeMenu === key;
                const isPageActive = isMenuMatchPath(menu, pathname);
                const isActive = isDropdownOpen || isPageActive;

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
                      className={`header-hero-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {menu.title}
                    </Link>

                    {isDropdownOpen && renderMegaMenu(menu)}
                  </div>
                );
              })}

              {/* Customer Login / Portal link on the right of bottom row */}
              <Link
                href={authUser ? (authUser.role === 'admin' ? '/admin/stock' : '/portal') : '/login'}
                className="header-hero-nav-link customer-login-link"
              >
                {authUser ? (authUser.role === 'admin' ? `Admin: ${authUser.name?.split(' ')[0]}` : `Portal: ${authUser.name?.split(' ')[0] || 'User'}`) : 'Customer Login'}
              </Link>
            </nav>
          </div>

          {/* Right Column: TXCO Logo */}
          <div className="header-hero-right-col">
            <Link href="/" className="header-hero-logo-link">
              <img
                src="/images/logo/txco-logo-new.avif"
                alt="TXCO Sealing Products Logo"
                className="header-hero-logo-img"
              />
            </Link>
          </div>
        </div>

        {/* Dedicated Mobile Header Bar */}
        <div className="mobile-header-bar">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mobile-logo-link">
            <img
              src="/images/logo/txco-logo-new.avif"
              alt="TXCO Sealing Products Logo"
              className="mobile-logo-img"
            />
          </Link>

          <div className="mobile-header-actions">
            <button
              type="button"
              onClick={() => {
                setMobileSearchOpen(!mobileSearchOpen);
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
              className={`mobile-header-icon-btn ${mobileSearchOpen ? 'active' : ''}`}
              aria-label="Search products"
            >
              <Search size={21} color="#1d2744" />
            </button>

            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-header-icon-btn mobile-cart-icon-btn"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={21} color="#1d2744" />
              {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileSearchOpen) setMobileSearchOpen(false);
              }}
              className="mobile-header-icon-btn mobile-hamburger-btn"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={26} color="#1d2744" /> : <Menu size={26} color="#1d2744" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Search Input Bar (when tapped from top bar) */}
        {mobileSearchOpen && (
          <div className="mobile-header-search-bar">
            <Search size={18} color="#64748b" />
            <input
              type="text"
              placeholder="Search products, RTJ, gaskets..."
              value={mobileSearchQuery}
              onChange={(e) => setMobileSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && mobileSearchQuery.trim()) {
                  window.location.href = `/products?q=${encodeURIComponent(mobileSearchQuery.trim())}`;
                  setMobileSearchOpen(false);
                }
              }}
              autoFocus
            />
            {mobileSearchQuery.trim() && (
              <button
                type="button"
                onClick={() => {
                  window.location.href = `/products?q=${encodeURIComponent(mobileSearchQuery.trim())}`;
                  setMobileSearchOpen(false);
                }}
                className="mobile-search-go-btn"
              >
                Go
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileSearchOpen(false)}
              className="mobile-search-close-btn"
              aria-label="Close search"
            >
              <X size={18} color="#64748b" />
            </button>
          </div>
        )}
      </div>

      {/* Full Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {/* Mobile Search Bar inside Drawer */}
          <div className="mobile-drawer-search">
            <Search size={18} color="#64748b" className="drawer-search-icon" />
            <input
              type="text"
              placeholder="Search products, RTJ, gaskets..."
              value={mobileSearchQuery}
              onChange={(e) => setMobileSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && mobileSearchQuery.trim()) {
                  window.location.href = `/products?q=${encodeURIComponent(mobileSearchQuery.trim())}`;
                  setMobileMenuOpen(false);
                }
              }}
            />
            {mobileSearchQuery.trim() && (
              <button
                type="button"
                onClick={() => {
                  window.location.href = `/products?q=${encodeURIComponent(mobileSearchQuery.trim())}`;
                  setMobileMenuOpen(false);
                }}
                className="drawer-search-btn"
              >
                Go
              </button>
            )}
          </div>

          {/* Navigation Links with Multi-Level Expandable Accordions */}
          <div className="mobile-drawer-nav">
            {/* Home */}
            <div className="mobile-nav-item">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link-direct ${pathname === '/' ? 'active' : ''}`}
              >
                <span>Home</span>
              </Link>
            </div>

            {/* Main Navigation Menu with Expandable Accordions */}
            {Object.keys(mainNavigationMenu).map((key) => {
              const menu = mainNavigationMenu[key];
              const isSectionOpen = Boolean(mobileExpanded[key]);
              const isPageActive = isMenuMatchPath(menu, pathname);

              return (
                <div key={key} className={`mobile-nav-item accordion-item ${isSectionOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(key)}
                    className={`mobile-accordion-toggle ${isPageActive ? 'page-active' : ''} ${isSectionOpen ? 'open' : ''}`}
                    aria-expanded={isSectionOpen}
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      size={18}
                      className={`mobile-chevron ${isSectionOpen ? 'rotated' : ''}`}
                    />
                  </button>

                  {isSectionOpen && (
                    <div className="mobile-accordion-content">
                      {/* Top Action: View Overview Page */}
                      <Link
                        href={menu.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-overview-link"
                      >
                        <span>View All {menu.title}</span>
                        <ArrowRight size={14} />
                      </Link>

                      {/* Sub-items (Direct or Nested) */}
                      {menu.items.map((subItem, sIdx) => {
                        const subKey = `${key}-${sIdx}`;
                        const hasChildren = Array.isArray(subItem.children) && subItem.children.length > 0;
                        const isSubOpen = Boolean(mobileSubExpanded[subKey]);

                        if (hasChildren) {
                          return (
                            <div key={sIdx} className={`mobile-sub-accordion ${isSubOpen ? 'open' : ''}`}>
                              <button
                                type="button"
                                onClick={() => toggleMobileSubSection(subKey)}
                                className={`mobile-sub-toggle ${isSubOpen ? 'open' : ''}`}
                                aria-expanded={isSubOpen}
                              >
                                <span>{subItem.name}</span>
                                <ChevronDown
                                  size={16}
                                  className={`mobile-sub-chevron ${isSubOpen ? 'rotated' : ''}`}
                                />
                              </button>

                              {isSubOpen && (
                                <div className="mobile-sub-content">
                                  {subItem.href && subItem.href !== '#' && (
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="mobile-sub-overview-link"
                                    >
                                      <span>All {subItem.name}</span>
                                      <ArrowRight size={13} />
                                    </Link>
                                  )}
                                  {subItem.children.map((child, cIdx) => (
                                    <Link
                                      key={cIdx}
                                      href={child.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="mobile-child-link"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        // Direct sub-item (no children)
                        return (
                          <Link
                            key={sIdx}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="mobile-sub-link-direct"
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Downloads / Catalogues */}
            <div className="mobile-nav-item">
              <Link
                href="/catalogues"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link-direct ${pathname === '/catalogues' || pathname.startsWith('/catalogues/') ? 'active' : ''}`}
              >
                <span>Downloads & Catalogues</span>
              </Link>
            </div>

            {/* Contact */}
            <div className="mobile-nav-item">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link-direct ${pathname === '/contact' || pathname.startsWith('/contact/') ? 'active' : ''}`}
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Customer Login / Portal */}
            <div className="mobile-nav-item">
              <Link
                href={authUser ? (authUser.role === 'admin' ? '/admin/stock' : '/portal') : '/login'}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link-direct customer-link"
              >
                <User size={18} color="#018F5D" />
                <span>
                  {authUser
                    ? authUser.role === 'admin'
                      ? `Admin: ${authUser.name?.split(' ')[0]}`
                      : `Portal: ${authUser.name?.split(' ')[0] || 'User'}`
                    : 'Customer Login / Portal'}
                </span>
              </Link>
            </div>

            {/* Shopping Cart */}
            <div className="mobile-nav-item">
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link-direct cart-link ${pathname === '/cart' ? 'active' : ''}`}
              >
                <div className="mobile-cart-icon-wrapper">
                  <ShoppingCart size={18} color="#052C58" />
                  {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
                </div>
                <span>Shopping Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
              </Link>
            </div>
          </div>

          {/* Quick Direct Support Action Buttons */}
          <div className="mobile-drawer-support">
            <div className="mobile-support-header">DIRECT ENGINEERING HOTLINE</div>
            <div className="mobile-support-buttons">
              <a
                href="https://wa.me/919553125566"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-support-btn whatsapp-btn"
              >
                <MessageCircle size={17} />
                <span>WhatsApp: +91 9553125566</span>
              </a>
              <a
                href="tel:+919553125566"
                className="mobile-support-btn phone-btn"
              >
                <Phone size={17} />
                <span>Call: +91 9553125566</span>
              </a>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mobile-drawer-lang">
            <div className="mobile-lang-header">
              <Globe size={16} />
              <span>Select Language</span>
            </div>
            <div className="mobile-lang-grid">
              {languagesList.map((lang) => {
                const isSelected = selectedLanguage === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      applyLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`mobile-lang-pill ${isSelected ? 'active' : ''}`}
                  >
                    <span>{lang}</span>
                    {isSelected && <Check size={13} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
