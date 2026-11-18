import { useEffect, useState } from 'react';

const NAV_LABELS = {
  en: {
    home: 'Home',
    destinations: 'Destinations',
    maps: 'Map',
    book: 'Book',
    gallery: 'Gallery',
    about: 'About',
    cta: 'Plan Your Trip',
  },
  id: {
    home: 'Home',
    destinations: 'Destinasi',
    maps: 'Peta',
    book: 'Pemesanan',
    gallery: 'Galeri',
    about: 'Tentang',
    cta: 'Rencanakan Perjalanan',
  },
  zh: {
    home: '首页',
    destinations: '目的地',
    maps: '地图',
    book: '预订',
    gallery: '画廊',
    about: '关于',
    cta: '规划行程',
  },
  ja: {
    home: 'ホーム',
    destinations: '目的地',
    maps: 'マップ',
    book: '予約',
    gallery: 'ギャラリー',
    about: '会社概要',
    cta: '旅を計画する',
  },
  ko: {
    home: '홈',
    destinations: '추천 여행지',
    maps: '지도',
    book: '예약',
    gallery: '갤러리',
    about: '소개',
    cta: '여행 계획하기',
  },
};

const LANG_CONFIG = [
  { code: 'en', flag: '🇬🇧', label: 'English', short: 'EN' },
  { code: 'id', flag: '🇮🇩', label: 'Indonesia', short: 'ID' },
  { code: 'zh', flag: '🇨🇳', label: '中文', short: '中' },
  { code: 'ja', flag: '🇯🇵', label: '日本語', short: '日' },
  { code: 'ko', flag: '🇰🇷', label: '한국어', short: '한' },
];

const LANG_FLAGS = { en: '🇬🇧', id: '🇮🇩', zh: '🇨🇳', ja: '🇯🇵', ko: '🇰🇷' };
const LANG_NAMES = { en: 'EN', id: 'ID', zh: '中', ja: '日', ko: '한' };

export default function Navbar({ onScrollToSection, isZooming, page, onBackToHero, onNavigateToPage, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup dropdown saat klik luar
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener('click', close, { once: true });
    return () => window.removeEventListener('click', close);
  }, [langOpen]);

  const labels = NAV_LABELS[lang] || NAV_LABELS.en;

  const navLinks = [
    { label: labels.home, id: 'home' },
    { label: labels.destinations, id: 'destinations' },
    { label: labels.book, id: 'book' },
    { label: labels.gallery, id: 'gallery' },
    { label: labels.about, id: 'about' },
  ];

  const goBackToHome = () => {
    if (onNavigateToPage) {
      onNavigateToPage('hero');
    } else {
      onBackToHero?.();
    }
  };

  const handleLinkClick = (id) => {
    if (id === 'home') {
      if (page !== 'hero') {
        goBackToHome();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'destinations') {
      if (onNavigateToPage) {
        onNavigateToPage('destinations');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onScrollToSection?.('destinations');
      }
    } else if (id === 'island-map') {
      if (page !== 'hero') {
        goBackToHome();
        setTimeout(() => onScrollToSection?.('island-map'), 150);
      } else {
        onScrollToSection?.('island-map');
      }
    } else if (id === 'book' || id === 'about') {
      // Halaman terpisah (bukan scroll ke section Home)
      onNavigateToPage?.(id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (id === 'gallery') {
      if (page !== 'hero') {
        goBackToHome();
        setTimeout(() => onScrollToSection?.('archive'), 150);
      } else {
        onScrollToSection?.('archive');
      }
    } else {
      if (page !== 'hero') {
        goBackToHome();
        setTimeout(() => onScrollToSection?.(id), 150);
      } else {
        onScrollToSection?.(id);
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isZooming ? ' navbar--hidden' : ''}`}>
      <div className="navbar__inner">
        {/* Logo — klik untuk kembali ke Home/Peta Pulau */}
        <button
          type="button"
          className="navbar__logo"
          onClick={() => {
            if (page !== 'hero') {
              goBackToHome();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Home"
        >
          <img
            src="/images/foto tambahan/logo.png"
            alt="Nusa Penida Logo"
            className="navbar__logo-img"
          />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">NUSA</span>
            <span className="navbar__logo-sub">PENIDA</span>
          </div>
        </button>

        {/* Nav Links Pill — Termasuk Menu Home */}
        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              (link.id === 'home' && page === 'hero') ||
              (link.id === 'destinations' && page === 'destinations') ||
              (link.id === 'book' && page === 'book') ||
              (link.id === 'about' && page === 'about');
            return (
              <button
                key={link.id}
                type="button"
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Language Switcher + CTA + Hamburger */}
        <div className="navbar__right">
          {/* Language Switcher */}
          <div className="lang-switcher" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lang-switcher__btn"
              onClick={() => setLangOpen((p) => !p)}
              aria-label="Change language"
            >
              <span className="lang-switcher__flag">{LANG_FLAGS[lang]}</span>
              <span className="lang-switcher__code">{LANG_NAMES[lang]}</span>
              <span className="lang-switcher__chevron">{langOpen ? '▲' : '▼'}</span>
            </button>

            {langOpen && (
              <div className="lang-switcher__dropdown">
                {LANG_CONFIG.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    className={`lang-switcher__option ${lang === item.code ? 'lang-switcher__option--active' : ''}`}
                    onClick={() => {
                      onLangChange?.(item.code);
                      setLangOpen(false);
                    }}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="navbar__cta"
            onClick={() => {
              if (page !== 'hero') {
                goBackToHome();
                setTimeout(() => onScrollToSection?.('destinations'), 150);
              } else {
                onScrollToSection?.('destinations');
              }
            }}
          >
            {labels.cta}
          </button>

          <button
            type="button"
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
