'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const LANGUAGE_OPTIONS = [
  { name: 'English', code: 'en' },
  { name: 'Germany', code: 'de' },
  { name: 'Spanish', code: 'es' },
  { name: 'French', code: 'fr' },
];

export function getSelectedLanguage() {
  if (typeof window === 'undefined') return 'English';
  try {
    const saved = localStorage.getItem('txco_selected_language');
    if (saved && LANGUAGE_OPTIONS.some((l) => l.name === saved)) {
      return saved;
    }
    // Check cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
    if (match) {
      const code = match[1].toLowerCase();
      const found = LANGUAGE_OPTIONS.find((l) => l.code === code);
      if (found) return found.name;
    }
  } catch (e) {
    // ignore
  }
  return 'English';
}

export function applyLanguage(langName) {
  if (typeof window === 'undefined') return;

  const target = LANGUAGE_OPTIONS.find((l) => l.name === langName) || LANGUAGE_OPTIONS[0];
  const langCode = target.code;

  try {
    localStorage.setItem('txco_selected_language', target.name);
  } catch (e) {
    // ignore
  }

  // Set googtrans cookie for domain and root path
  const domain = window.location.hostname;
  const cookieVal = `/en/${langCode}`;

  document.cookie = `googtrans=${cookieVal}; path=/;`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain};`;

  const domainParts = domain.split('.');
  if (domainParts.length > 1) {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${domainParts.slice(-2).join('.')};`;
  }

  // Trigger Google Translate combo element
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
    if (langCode === 'en') {
      // Clean reload when switching back to English to clear translation artifacts
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  } else {
    // If combo is not in DOM yet, reload with the cookie set
    window.location.reload();
  }

  // Dispatch custom event for UI components to synchronize
  window.dispatchEvent(new CustomEvent('language-changed', { detail: target.name }));
}

export default function GoogleTranslate() {
  const pathname = usePathname();

  useEffect(() => {
    // Define global initialization callback
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,de,es,fr',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        // Apply saved language if any after combo renders
        const savedLang = getSelectedLanguage();
        if (savedLang && savedLang !== 'English') {
          const target = LANGUAGE_OPTIONS.find((l) => l.name === savedLang);
          if (target) {
            const checkComboInterval = setInterval(() => {
              const combo = document.querySelector('.goog-te-combo');
              if (combo) {
                clearInterval(checkComboInterval);
                if (combo.value !== target.code) {
                  combo.value = target.code;
                  combo.dispatchEvent(new Event('change'));
                }
              }
            }, 100);

            setTimeout(() => clearInterval(checkComboInterval), 4000);
          }
        }
      }
    };

    // Load Google Translate script once
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Re-verify translation on route change in Next.js
  useEffect(() => {
    const savedLang = getSelectedLanguage();
    if (savedLang && savedLang !== 'English') {
      const target = LANGUAGE_OPTIONS.find((l) => l.name === savedLang);
      if (target) {
        const timer = setTimeout(() => {
          const combo = document.querySelector('.goog-te-combo');
          if (combo && combo.value !== target.code) {
            combo.value = target.code;
            combo.dispatchEvent(new Event('change'));
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
