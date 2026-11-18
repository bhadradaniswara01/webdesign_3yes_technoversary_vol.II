import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getMantaChapterForProgress,
  MANTA_CHAPTERS,
  TOTAL_MANTA_FRAMES,
} from '../data/mantaCinemaData';
import { MANTA_PACKAGES_DATA } from '../data/mantaPackagesData';
import FooterSection from './FooterSection';
import IncludedSpotsSection from './IncludedSpotsSection';
import MantaPhotoboothSection from './MantaPhotoboothSection';

function drawCoverImage(ctx, img, width, height) {
  if (!img || !img.naturalWidth || !img.naturalHeight) return;

  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = width / height;

  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (canvasRatio > imgRatio) {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawHeight = height;
    drawWidth = height * imgRatio;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

function renderRuleIcon(type) {
  switch (type) {
    case 'trash':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      );
    case 'shield':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'hand':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      );
    case 'distance':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case 'flash':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'coral':
    default:
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 12h20" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M12 2v10" />
          <circle cx="12" cy="15" r="3" />
        </svg>
      );
  }
}

export default function MantaScrollCinema({
  getBestFrame,
  onBackToHero,
  lang = 'en',
}) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const packagesSectionRef = useRef(null);
  const expeditionTrackRef = useRef(null);
  const [isExpeditionPaused, setIsExpeditionPaused] = useState(false);

  const targetProgressRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(MANTA_CHAPTERS[0]);

  // Data terjemahan paket, edukasi & aturan konservasi
  const t = MANTA_PACKAGES_DATA[lang] || MANTA_PACKAGES_DATA.en;

  // Welcome flash state — tampil sekilas saat pertama masuk
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Perbarui progress scroll
  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
      const raw = Math.min(1, Math.max(0, -rect.top / maxScroll));
      targetProgressRef.current = raw;
      setScrollProgress(raw);
      setActiveChapter(getMantaChapterForProgress(raw));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Sinkronkan resolusi canvas
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      viewportRef.current = { width, height, dpr };
      lastDrawnIndexRef.current = -1;
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(stage);
    window.addEventListener('resize', handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animasi frame lerp halus di canvas
  useEffect(() => {
    let animId = 0;

    const render = () => {
      const targetFrame = targetProgressRef.current * (TOTAL_MANTA_FRAMES - 1);
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.22;

      const roundedIndex = Math.max(
        0,
        Math.min(TOTAL_MANTA_FRAMES - 1, Math.round(currentFrameRef.current))
      );

      const canvas = canvasRef.current;
      if (canvas && roundedIndex !== lastDrawnIndexRef.current) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = getBestFrame(roundedIndex);
          if (img) {
            drawCoverImage(ctx, img, canvas.width, canvas.height);
            lastDrawnIndexRef.current = roundedIndex;
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [getBestFrame]);

  // IntersectionObserver untuk animasi masuk kartu & edukasi yang halus
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('manta-revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const items = document.querySelectorAll('.manta-reveal-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [lang]);

  // Auto-scroll animation untuk paket ekspedisi Manta Point (pause saat kursor di atasnya)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const step = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isExpeditionPaused && expeditionTrackRef.current) {
        const track = expeditionTrackRef.current;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll > 10) {
          const delta = dt * 0.04;
          if (track.scrollLeft >= maxScroll - 1) {
            track.scrollLeft = 0;
          } else {
            track.scrollLeft += delta;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isExpeditionPaused]);

  // Lompat ke progres tertentu saat mengklik babak
  const jumpToProgress = useCallback((progress) => {
    const track = trackRef.current;
    if (!track) return;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
    const targetY = trackTop + progress * maxScroll;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, []);

  // Gulir langsung ke bagian paket wisata
  const scrollToPackages = useCallback(() => {
    if (packagesSectionRef.current) {
      packagesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Ambil judul & deskripsi sesuai bahasa
  const cardTitle =
    lang === 'id'
      ? activeChapter.titleId
      : lang === 'zh'
      ? activeChapter.titleZh
      : lang === 'ja'
      ? activeChapter.titleJa
      : lang === 'ko'
      ? activeChapter.titleKo
      : activeChapter.title;

  const cardDesc =
    lang === 'id'
      ? activeChapter.descriptionId
      : lang === 'zh'
      ? activeChapter.descriptionZh
      : lang === 'ja'
      ? activeChapter.descriptionJa
      : lang === 'ko'
      ? activeChapter.descriptionKo
      : activeChapter.description;

  const cardTag =
    lang === 'ja'
      ? activeChapter.tagJa
      : lang === 'ko'
      ? activeChapter.tagKo
      : activeChapter.tag;

  const cardArrow =
    lang === 'ja'
      ? activeChapter.arrowTextJa
      : lang === 'ko'
      ? activeChapter.arrowTextKo
      : activeChapter.arrowText;

  const welcomeTitle =
    lang === 'id'
      ? 'Selamat Datang di Kedalaman'
      : lang === 'zh'
      ? '潜入神秘深蓝'
      : lang === 'ja'
      ? '神秘の深海へようこそ'
      : lang === 'ko'
      ? '신비로운 심해로의 초대'
      : 'Welcome to the Deep';

  const welcomeHint =
    lang === 'id'
      ? '↓ gulir untuk mulai'
      : lang === 'zh'
      ? '↓ 向下滑动开启'
      : lang === 'ja'
      ? '↓ スクロールして開始'
      : lang === 'ko'
      ? '↓ 스크롤하여 시작하기'
      : '↓ scroll to begin';

  return (
    <div className="manta-cinema-page">
      {/* Tombol Kembali ke Hero — Kiri Atas */}
      <button
        type="button"
        className="manta-back-btn"
        onClick={onBackToHero}
        aria-label={t.backToHome}
      >
        <span className="manta-back-arrow">←</span>
        <span className="manta-back-text">{t.backToHome}</span>
      </button>
      {/* ── STAGE KANVAS FRAME SEQUENCE (Fixed Viewport Background) ── */}
      <div
        className={`manta-stage${scrollProgress >= 0.96 ? ' manta-stage--at-end' : ''}`}
        ref={stageRef}
      >
        {/* Kanvas Frame Sequence */}
        <canvas ref={canvasRef} className="manta-canvas" />

        {/* Gradien Vignette */}
        <div className="manta-vignette" />

        {/* Welcome Flash — tampil sekilas saat pertama masuk */}
        <div
          className={`manta-welcome${showWelcome ? '' : ' manta-welcome--out'}`}
          aria-hidden="true"
        >
          <span className="manta-welcome__eyebrow">MANTA POINT · NUSA PENIDA</span>
          <span className="manta-welcome__title">{welcomeTitle}</span>
          <span className="manta-welcome__hint">{welcomeHint}</span>
        </div>

        {/* Floating Narrative Card — posisi dinamis per chapter (Tanpa teks frame-frame) */}
        <div className={`manta-narrative-wrap manta-narrative-wrap--${activeChapter.cardPos}`}>
          <div className="manta-card" key={activeChapter.id}>
            <div className="manta-card__meta">
              <span className="manta-card__tag">{cardTag}</span>
              <span className="manta-card__depth">{activeChapter.depth}</span>
            </div>

            <h2 className="manta-card__title">{cardTitle}</h2>
            <p className="manta-card__desc">{cardDesc}</p>

            <div className="manta-card__footer">
              <div
                className="manta-card__arrow-row"
                onClick={scrollProgress > 0.85 ? scrollToPackages : undefined}
                style={{ cursor: scrollProgress > 0.85 ? 'pointer' : 'default' }}
              >
                <span className="manta-card__arrow-icon">↓</span>
                <span className="manta-card__arrow-text">
                  {scrollProgress > 0.85
                    ? lang === 'id'
                      ? 'Lihat Paket Wisata & Edukasi ↓'
                      : lang === 'zh'
                      ? '查看航线与生态科普 ↓'
                      : lang === 'ja'
                      ? 'ツアー＆解説を見る ↓'
                      : lang === 'ko'
                      ? '투어 패키지 & 생태 정보 보기 ↓'
                      : 'Explore Tours & Marine Education ↓'
                    : cardArrow}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue — vertikal di kiri tengah */}
        <div className="manta-scroll-cue" aria-hidden="true">
          <span className="manta-cue-label">SCROLL</span>
          <div className="manta-cue-line">
            <div className="manta-cue-runner" />
          </div>
          <div className="manta-cue-chevrons">
            <span className="manta-cue-chev manta-cue-chev--1">›</span>
            <span className="manta-cue-chev manta-cue-chev--2">›</span>
            <span className="manta-cue-chev manta-cue-chev--3">›</span>
          </div>
        </div>

        {/* Scrub Bar Vertikal — kanan bawah */}
        <aside className="manta-scrub-side">
          <span className="manta-scrub-side__label">
            {lang === 'id'
              ? 'GULIR'
              : lang === 'zh'
              ? '滚动'
              : lang === 'ja'
              ? 'スクロール'
              : lang === 'ko'
              ? '스크롤'
              : 'SCROLL'}
          </span>
          <div className="manta-scrub-side__track">
            <div
              className="manta-scrub-side__fill"
              style={{ height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
            />
            {MANTA_CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                type="button"
                className={`manta-scrub-pip-v ${
                  activeChapter.id === ch.id ? 'manta-scrub-pip-v--active' : ''
                }`}
                style={{ top: `${ch.start * 100}%` }}
                onClick={() => jumpToProgress(ch.start + 0.05)}
                title={ch.shortLabel}
              />
            ))}
          </div>
        </aside>

        {/* Petunjuk Gulir ke Bawah Saat Babak Terakhir Tercapai */}
        <div
          className={`manta-peek-cue${scrollProgress >= 0.88 ? ' manta-peek-cue--visible' : ''}`}
          onClick={scrollToPackages}
          role="button"
          tabIndex={0}
        >
          <span className="manta-peek-cue__text">
            {lang === 'id'
              ? 'Gulir ke bawah untuk paket wisata & edukasi'
              : lang === 'zh'
              ? '向下滑动查看航线与生态科普'
              : lang === 'ja'
              ? 'スクロールしてツアー＆解説を見る'
              : lang === 'ko'
              ? '스크롤하여 투어 & 생태 정보 보기'
              : 'Scroll down for tours & marine education'}
          </span>
          <span className="manta-peek-cue__arrow">↓</span>
        </div>
      </div>

      {/* ── VIRTUAL SCROLL TRACK 420vh (Memberi Jarak Scroll untuk Scrubbing Frame) ── */}
      <div id="manta-cinema" className="manta-track" ref={trackRef} />

      {/* ── BAGIAN POST-SCROLL: SHEET YANG MENIMPA/SLIDE UP ATAS CANVAS ── */}
      <div className="manta-post-scroll" ref={packagesSectionRef}>
        {/* Handle Sheet Dekoratif */}
        <div className="manta-sheet-handle-wrap" onClick={scrollToPackages}>
          <div className="manta-sheet-handle" />
        </div>

        {/* SECTION 1: HOW TO GET THERE / PAKET WISATA (Gaya Framer Sesuai Gambar Referensi) */}
        <section className="manta-packages-section">
          <div className="manta-packages-container">
            {/* Header: Title kiri, link armada kanan */}
            <div className="manta-packages-header manta-reveal-item">
              <div>
                <span className="manta-section-eyebrow">{t.sectionEyebrow}</span>
                <h2 className="manta-section-title">{t.sectionTitle}</h2>
              </div>
              <a
                href="https://wa.me/?text=Halo%20Concierge,%20saya%20ingin%20melihat%20katalog%20armada%20ekspedisi%20Manta%20Point"
                target="_blank"
                rel="noopener noreferrer"
                className="manta-fleet-link"
              >
                {t.fleetLink}
              </a>
            </div>

            {/* 3 Kartu Paket Berjejer Horizontal dengan Auto-Scroll */}
            <div
              className="manta-packages-grid"
              ref={expeditionTrackRef}
              onMouseEnter={() => setIsExpeditionPaused(true)}
              onMouseLeave={() => setIsExpeditionPaused(false)}
              onTouchStart={() => setIsExpeditionPaused(true)}
              onTouchEnd={() => setIsExpeditionPaused(false)}
            >
              {t.packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  className="manta-pkg-card manta-reveal-item"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  {/* Gambar Landscape dengan Rasio Elegan */}
                  <div className="manta-pkg-media">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="manta-pkg-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Konten Kartu */}
                  <div className="manta-pkg-body">
                    <span className="manta-pkg-cat">{pkg.category}</span>
                    <h3 className="manta-pkg-title">{pkg.title}</h3>

                    {/* Spesifikasi 3 Kolom dengan Pembatas Halus */}
                    <div className="manta-pkg-specs">
                      {pkg.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="manta-pkg-spec-col">
                          <span className="manta-pkg-spec-label">{sp.label}</span>
                          <span className="manta-pkg-spec-val">{sp.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Baris Harga & Tombol Panah Kuadrat */}
                    <div className="manta-pkg-bottom">
                      <div className="manta-pkg-price-wrap">
                        <span className="manta-pkg-price">{pkg.price}</span>
                        <span className="manta-pkg-unit">{pkg.priceUnit}</span>
                      </div>
                      <a
                        href={`https://wa.me/?text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(
                          pkg.title
                        )}%20ke%20Manta%20Point`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="manta-pkg-btn"
                        aria-label={`Pesan ${pkg.title}`}
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1B: CARD SPOT TAMBAHAN */}
        <IncludedSpotsSection parent="manta" lang={lang} />

        {/* SECTION 2: KARTU EDUKASI BAHARI ZIG-ZAG (Alternating Bands: Biru - Putih - Biru) */}
        <section className="manta-edu-section">
          {/* Band 1 (Biru): Header + Kartu 1 (The Natural Cleaning Station) */}
          <div className="manta-edu-band manta-edu-band--blue manta-edu-band--header">
            <div className="manta-edu-container">
              <div className="manta-edu-header manta-reveal-item">
                <span className="manta-section-eyebrow">{t.education.sectionEyebrow}</span>
                <h2 className="manta-edu-main-title">{t.education.sectionTitle}</h2>
                <p className="manta-edu-main-sub">{t.education.sectionSubtitle}</p>
              </div>

              {t.education.cards[0] && (
                <article
                  className={`manta-edu-card manta-edu-card--${t.education.cards[0].layout} manta-reveal-item`}
                >
                  <div className="manta-edu-content">
                    <span className="manta-edu-badge">{t.education.cards[0].badge}</span>
                    <h3 className="manta-edu-title">{t.education.cards[0].title}</h3>
                    <p className="manta-edu-desc">{t.education.cards[0].desc}</p>

                    <div className="manta-edu-highlights">
                      {t.education.cards[0].highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="manta-edu-hl-item">
                          <div className="manta-edu-hl-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          <div className="manta-edu-hl-text">
                            <h4 className="manta-edu-hl-title">{hl.title}</h4>
                            <p className="manta-edu-hl-detail">{hl.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="manta-edu-visual">
                    <div className="manta-edu-img-frame">
                      <img
                        src={t.education.cards[0].image}
                        alt={t.education.cards[0].title}
                        className="manta-edu-img"
                        loading="lazy"
                      />
                    </div>
                    <p className="manta-edu-caption">{t.education.cards[0].caption}</p>
                  </div>
                </article>
              )}
            </div>
          </div>

          {/* Band 2 (Putih): Kartu 2 (Ethical Swimming Code) */}
          {t.education.cards[1] && (
            <div className="manta-edu-band manta-edu-band--white">
              <div className="manta-edu-container">
                <article
                  className={`manta-edu-card manta-edu-card--${t.education.cards[1].layout} manta-reveal-item`}
                >
                  <div className="manta-edu-content">
                    <span className="manta-edu-badge">{t.education.cards[1].badge}</span>
                    <h3 className="manta-edu-title">{t.education.cards[1].title}</h3>
                    <p className="manta-edu-desc">{t.education.cards[1].desc}</p>

                    <div className="manta-edu-highlights">
                      {t.education.cards[1].highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="manta-edu-hl-item">
                          <div className="manta-edu-hl-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          <div className="manta-edu-hl-text">
                            <h4 className="manta-edu-hl-title">{hl.title}</h4>
                            <p className="manta-edu-hl-detail">{hl.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="manta-edu-visual">
                    <div className="manta-edu-img-frame">
                      <img
                        src={t.education.cards[1].image}
                        alt={t.education.cards[1].title}
                        className="manta-edu-img"
                        loading="lazy"
                      />
                    </div>
                    <p className="manta-edu-caption">{t.education.cards[1].caption}</p>
                  </div>
                </article>
              </div>
            </div>
          )}

          {/* Band 3 (Biru): Kartu 3 (Oceanography & Marine Upwelling) */}
          {t.education.cards[2] && (
            <div className="manta-edu-band manta-edu-band--blue">
              <div className="manta-edu-container">
                <article
                  className={`manta-edu-card manta-edu-card--${t.education.cards[2].layout} manta-reveal-item`}
                >
                  <div className="manta-edu-content">
                    <span className="manta-edu-badge">{t.education.cards[2].badge}</span>
                    <h3 className="manta-edu-title">{t.education.cards[2].title}</h3>
                    <p className="manta-edu-desc">{t.education.cards[2].desc}</p>

                    <div className="manta-edu-highlights">
                      {t.education.cards[2].highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="manta-edu-hl-item">
                          <div className="manta-edu-hl-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          <div className="manta-edu-hl-text">
                            <h4 className="manta-edu-hl-title">{hl.title}</h4>
                            <p className="manta-edu-hl-detail">{hl.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="manta-edu-visual">
                    <div className="manta-edu-img-frame">
                      <img
                        src={t.education.cards[2].image}
                        alt={t.education.cards[2].title}
                        className="manta-edu-img"
                        loading="lazy"
                      />
                    </div>
                    <p className="manta-edu-caption">{t.education.cards[2].caption}</p>
                  </div>
                </article>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 3: VIRTUAL PHOTOBOOTH & SOUVENIR FRAME MAKER (BOOTH FOTO KENANGAN MANTA POINT) */}
        <MantaPhotoboothSection lang={lang} />

        {/* SECTION 4: 6 PRINSIP MENJAGA KELESTARIAN (KARTU KOTAK KECIL DENGAN IKON SVG — TANPA EMOJI) */}
        <section className="manta-rules-section">
          <div className="manta-rules-container">
            <div className="manta-rules-header manta-reveal-item">
              <span className="manta-section-eyebrow">{t.rules.sectionEyebrow}</span>
              <h2 className="manta-rules-title">{t.rules.sectionTitle}</h2>
              <p className="manta-rules-sub">{t.rules.sectionSubtitle}</p>
            </div>

            {/* 6 Kartu Kotak Kecil */}
            <div className="manta-rules-grid">
              {t.rules.items.map((rule, idx) => (
                <div
                  key={rule.id}
                  className="manta-rule-card manta-reveal-item"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="manta-rule-icon-wrap">
                    {renderRuleIcon(rule.iconType)}
                  </div>
                  <h4 className="manta-rule-card-title">{rule.title}</h4>
                  <p className="manta-rule-card-desc">{rule.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Action CTA */}
            <div className="manta-bottom-cta manta-reveal-item">
              <a
                href="https://wa.me/?text=Halo%20Concierge,%20saya%20ingin%20konsultasi%20ekspedisi%20Manta%20Point%20Nusa%20Penida"
                target="_blank"
                rel="noopener noreferrer"
                className="manta-cta-btn manta-cta-btn--primary"
              >
                {t.bookConcierge}
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: FULL FOOTER SECTION (Di Bagian Paling Akhir) */}
        <FooterSection lang={lang} />
      </div>
    </div>
  );
}
