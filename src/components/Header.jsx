'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Globe, Search, Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubitemIndex, setActiveSubitemIndex] = useState(1); // Default active subitem index for Products (Gaskets, Kits, and Seals)

  const leaveTimeoutRef = useRef(null);

  const handleMouseEnterMenu = (menuKey) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveMenu(menuKey);
    // Reset to first item with children if available
    setActiveSubitemIndex(menuKey === 'products' ? 1 : 0);
  };

  const handleMouseLeaveMenu = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const menuData = {
    industries: {
      title: 'Industries',
      href: '/industries',
      items: [
        { name: 'All Industries', href: '/industries' },
        { name: 'Chemical', href: '/industries/chemical' },
        { name: 'Energy', href: '/industries/energy' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Metals and Mining', href: '/industries/metals-mining' },
      ],
    },
    products: {
      title: 'Products',
      href: '/products',
      items: [
        { name: 'All Products', href: '/products' },
        {
          name: 'Gaskets, Kits, and Seals',
          href: '/products/gaskets-kits-seals',
          children: [
            { name: 'Metallic', href: '/products/gaskets/metallic' },
            { name: 'Semi-Metallic Gaskets', href: '/products/gaskets/semi-metallic' },
            { name: 'Non-Metallic', href: '/products/gaskets/non-metallic' },
            { name: 'Flange Isolation Gaskets and Kits', href: '/products/gaskets/flange-isolation' },
            { name: 'Blinds and Seals', href: '/products/gaskets/blinds-seals' },
          ],
        },
        {
          name: 'Hoses and Expansion Joints',
          href: '/products/hoses-expansion',
          children: [
            { name: 'Metallic Hoses', href: '/products/hoses/metallic' },
            { name: 'Expansion Joints', href: '/products/hoses/expansion' },
          ],
        },
        {
          name: 'Fasteners',
          href: '/products/fasteners',
          children: [
            { name: 'Heavy Hex Bolts', href: '/products/fasteners/hex-bolts' },
            { name: 'Stud Bolts & Nuts', href: '/products/fasteners/stud-bolts' },
          ],
        },
      ],
    },
    services: {
      title: 'Services',
      href: '/services',
      items: [
        { name: 'All Services', href: '/services' },
        { name: 'Reverse Engineering', href: '/services/reverse' },
        { name: 'Custom Gasket Engineering', href: '/services/engineering' },
        { name: 'Field Support', href: '/services/field-support' },
        { name: 'Training', href: '/services/training' },
      ],
    },
    resources: {
      title: 'Resources',
      href: '/resources',
      items: [
        { name: 'Blog', href: '/resources/blog' },
        { name: 'FAQs', href: '/resources/faqs' },
        { name: 'News', href: '/resources/news' },
        { name: 'Resource Library', href: '/resources/library' },
      ],
    },
    about: {
      title: 'About Us',
      href: '/about',
      items: [
        { name: 'Careers', href: '/about/careers' },
        { name: 'Company', href: '/about/company' },
        { name: 'History', href: '/about/history' },
        { name: 'Locations', href: '/about/locations' },
        { name: 'Sustainability', href: '/about/sustainability' },
      ],
    },
  };

  const currentMenu = activeMenu ? menuData[activeMenu] : null;
  const currentSubitem = currentMenu && currentMenu.items[activeSubitemIndex];
  const hasSubChildren = currentSubitem && currentSubitem.children && currentSubitem.children.length > 0;

  return (
    <header style={{ width: '100%', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'relative', zIndex: 100 }}>
      {/* Top Utility Bar */}
      <div
        style={{
          borderBottom: '1px solid #f1f5f9',
          fontSize: '0.88rem',
          color: '#334155',
          padding: '0.5rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#334155', fontWeight: '500', textDecoration: 'none' }}>Home</Link>
            <Link href="/contact" style={{ color: '#334155', fontWeight: '500', textDecoration: 'none' }}>Contact</Link>
            <Link href="/downloads" style={{ color: '#334155', fontWeight: '500', textDecoration: 'none' }}>Downloads</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: '500' }}>
              <Globe size={16} color="#475569" />
              <span>Germany</span>
            </div>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link href="/search" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', textDecoration: 'none', color: '#334155', fontWeight: '500' }}>
              <Search size={16} color="#475569" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar & Logo */}
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '1.1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Main Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
            position: 'relative',
          }}
          className="main-nav-desktop"
        >
          {Object.keys(menuData).map((key) => {
            const menu = menuData[key];
            const isActive = activeMenu === key;

            return (
              <div
                key={key}
                onMouseEnter={() => handleMouseEnterMenu(key)}
                onMouseLeave={handleMouseLeaveMenu}
                style={{ position: 'relative', padding: '0.5rem 0' }}
              >
                <Link
                  href={menu.href}
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: '600',
                    color: '#1d2744',
                    textDecoration: 'none',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid #344473' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {menu.title}
                </Link>
              </div>
            );
          })}

          <Link href="/login" style={{ fontSize: '1.08rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none', transition: 'color 0.2s ease' }}>
            Customer Login
          </Link>
        </nav>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem' }}
          className="mobile-nav-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} color="#1d2744" /> : <Menu size={28} color="#1d2744" />}
        </button>

        {/* Prominent Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo/logo.png"
            alt="TXCO Sealing Products Logo"
            className="header-logo-img"
            style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* Desktop Mega Menu Dropdown Panel */}
      {currentMenu && (
        <div
          onMouseEnter={() => {
            if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeaveMenu}
          style={{
            position: 'absolute',
            top: '100%',
            left: activeMenu === 'products' ? '120px' : activeMenu === 'industries' ? '20px' : activeMenu === 'services' ? '240px' : activeMenu === 'resources' ? '340px' : '420px',
            display: 'flex',
            backgroundColor: '#e6e3da', // Soft warm beige matching reference screenshot
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.16)',
            zIndex: 200,
            animation: 'fadeInDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            border: '1px solid #dcd8cd',
          }}
          className="mega-menu-dropdown"
        >
          {/* Primary Column */}
          <div
            style={{
              width: '260px',
              display: 'flex',
              flexDirection: 'column',
              padding: '0.4rem 0',
            }}
          >
            {currentMenu.items.map((item, idx) => {
              const isSelected = activeSubitemIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveSubitemIndex(idx)}
                  style={{
                    padding: '0.85rem 1.4rem',
                    backgroundColor: isSelected ? '#0b2b48' : 'transparent', // Dark navy blue background when active/hovered matching screenshot
                    color: isSelected ? '#ffffff' : '#222222',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: isSelected ? '600' : '500',
                      color: isSelected ? '#ffffff' : '#222222',
                      textDecoration: 'none',
                      flexGrow: 1,
                    }}
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

          {/* Secondary Submenu Column (Appears when Level 1 item has children) */}
          {hasSubChildren && (
            <div
              style={{
                width: '320px',
                backgroundColor: '#e8e5dc', // Warm beige background matching reference
                borderLeft: '1px solid #d8d4c8',
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem 0',
                animation: 'fadeInRight 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              {currentSubitem.children.map((child, cIdx) => (
                <Link
                  key={cIdx}
                  href={child.href}
                  onClick={() => setActiveMenu(null)}
                  style={{
                    padding: '0.85rem 1.4rem',
                    fontSize: '0.96rem',
                    fontWeight: '500',
                    color: '#222222',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(11, 43, 72, 0.08)';
                    e.currentTarget.style.color = '#0b2b48';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#222222';
                  }}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile / Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '2px solid #e2e8f0',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            zIndex: 90,
          }}
        >
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none' }}>
            Industries
          </Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none' }}>
            Products
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none' }}>
            Services
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none' }}>
            Resources
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1d2744', textDecoration: 'none' }}>
            About Us
          </Link>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.15rem', fontWeight: '600', color: '#344473', textDecoration: 'none' }}>
            Customer Login
          </Link>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 960px) {
          .main-nav-desktop {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
          .mega-menu-dropdown {
            display: none !important;
          }
        }
        @media (max-width: 576px) {
          .header-logo-img {
            height: 52px !important;
          }
        }
      `}</style>
    </header>
  );
}
