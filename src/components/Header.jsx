'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Search, Menu, X, ChevronRight, User, ShoppingCart, ChevronDown, Check } from 'lucide-react';
import { utilityNavLinks, mainNavigationMenu } from '@/data/navigationData';
import { getCartCount } from '@/utils/cartManager';
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

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubitemIndex, setActiveSubitemIndex] = useState(0);
  const [activeTertiaryIndex, setActiveTertiaryIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for sticky main nav bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 42) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className={`site-header ${isHomePage ? 'header-hero-mode' : ''}`}>
      {/* 
        UNSCROLLED HEADER LAYOUT (Matches Attached Screenshot Exactly):
        - Left block with Row 1 (utility) & Row 2 (main nav + customer login)
        - Right block with txco Logo
        - Gradient background from white to transparent
      */}
      <div className={`header-hero-unscrolled ${isScrolled ? 'is-scrolled-hidden' : ''}`}>
        <div className="header-hero-container">
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

              {/* Customer Login link on the right of bottom row */}
              <Link href="/login" className="header-hero-nav-link customer-login-link">
                Customer Login
              </Link>
            </nav>
          </div>

          {/* Mobile Hamburger Toggle for Unscrolled */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle hero-mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={28} color="#1d2744" /> : <Menu size={28} color="#1d2744" />}
          </button>

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
      </div>

      {/* 
        STICKY HEADER BAR:
        - Activated when user scrolls down (window.scrollY > 42)
        - Preserves existing header bar with #062F5C navy background, white links & white logo
      */}

    </header>
  );
}
