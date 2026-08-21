'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Search, Menu, X, ChevronRight } from 'lucide-react';
import { utilityNavLinks, mainNavigationMenu } from '@/data/navigationData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubitemIndex, setActiveSubitemIndex] = useState(1);

  const leaveTimeoutRef = useRef(null);

  const handleMouseEnterMenu = (menuKey) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveMenu(menuKey);
    setActiveSubitemIndex(menuKey === 'products' ? 1 : 0);
  };

  const handleMouseLeaveMenu = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const currentMenu = activeMenu ? mainNavigationMenu[activeMenu] : null;
  const currentSubitem = currentMenu && currentMenu.items[activeSubitemIndex];
  const hasSubChildren = currentSubitem && currentSubitem.children && currentSubitem.children.length > 0;

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

          <div className="header-top-right">
            <div className="header-country-select">
              <Globe size={16} color="#475569" />
              <span>Germany</span>
            </div>
            <span className="header-divider">|</span>
            <Link href="/search" className="header-search-link">
              <Search size={16} color="#475569" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar & Logo */}
      <div className="header-main-nav">
        {/* Main Nav Links */}
        <nav className="header-nav-list">
          {Object.keys(mainNavigationMenu).map((key) => {
            const menu = mainNavigationMenu[key];
            const isActive = activeMenu === key;

            return (
              <div
                key={key}
                onMouseEnter={() => handleMouseEnterMenu(key)}
                onMouseLeave={handleMouseLeaveMenu}
                className="nav-item-wrapper"
              >
                <Link
                  href={menu.href}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  {menu.title}
                </Link>

                {/* Desktop Mega Menu Dropdown Panel aligned exactly to this nav link's left */}
                {isActive && (
                  <div
                    onMouseEnter={() => {
                      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
                    }}
                    onMouseLeave={handleMouseLeaveMenu}
                    className="mega-menu-dropdown"
                  >
                    {/* Primary Column */}
                    <div className="mega-menu-primary-col">
                      {menu.items.map((item, idx) => {
                        const isSelected = activeSubitemIndex === idx;

                        return (
                          <div
                            key={idx}
                            onMouseEnter={() => setActiveSubitemIndex(idx)}
                            className={`mega-menu-item ${isSelected ? 'active' : ''}`}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
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

                    {/* Secondary Submenu Column */}
                    {hasSubChildren && (
                      <div className="mega-menu-secondary-col">
                        {currentSubitem.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            onClick={() => setActiveMenu(null)}
                            className="mega-submenu-link"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <Link href="/login" className="nav-customer-login">
            Customer Login
          </Link>
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
            src="/images/logo/logo.png"
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
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link" style={{ color: '#344473' }}>
            Customer Login
          </Link>
        </div>
      )}
    </header>
  );
}
