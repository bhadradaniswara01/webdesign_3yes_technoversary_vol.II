import { useEffect, useRef, useState } from 'react';

const FLOATING_CARDS = [
  {
    id: 'kelingking',
    title: {
      en: 'Kelingking Beach',
      id: 'Pantai Kelingking',
      zh: '恐龙湾精灵悬崖',
      ja: 'クリンキンビーチ',
      ko: '켈링킹 비치',
    },
    tag: {
      en: 'T-Rex Karst Cliff',
      id: 'Tebing Karst Ikonik',
      zh: '标志喀斯特绝壁',
      ja: '絶景カルスト断崖',
      ko: '아이코닉 카르스트',
    },
    img: '/images/foto tambahan/kelingking.jpeg',
    posClass: 'hero-float-card--top-left',
  },
  {
    id: 'broken',
    title: {
      en: 'Broken Beach',
      id: 'Broken Beach',
      zh: '天仙裂痕海蚀拱',
      ja: 'ブロークンビーチ',
      ko: '브로큰 비치',
    },
    tag: {
      en: 'Natural Karst Arch',
      id: 'Lengkungan Karang Alami',
      zh: '天然海洋石拱',
      ja: '天然カルストアーチ',
      ko: '천연 해식 아치',
    },
    img: '/images/foto tambahan/broken.jpeg',
    posClass: 'hero-float-card--top-right',
  },
  {
    id: 'manta',
    title: {
      en: 'Manta Point',
      id: 'Manta Point',
      zh: '蝠鲼海域生态区',
      ja: 'マンタポイント',
      ko: '만타 포인트',
    },
    tag: {
      en: 'Oceanic Sanctuary',
      id: 'Suaka Pari Manta',
      zh: '海洋生物庇护所',
      ja: '海洋保護区',
      ko: '해양 생태 보호구',
    },
    img: '/images/foto tambahan/manta point.jpeg',
    posClass: 'hero-float-card--bottom-left',
  },
  {
    id: 'diamond',
    title: {
      en: 'Diamond Beach',
      id: 'Pantai Diamond',
      zh: '钻石海滩石阶',
      ja: 'ダイヤモンドビーチ',
      ko: '다이아몬드 비치',
    },
    tag: {
      en: 'Cliffside Staircase',
      id: 'Tangga Tebing Putih',
      zh: '绝壁白沙仙境',
      ja: '白亜の断崖階段',
      ko: '절벽 해안 계단',
    },
    img: '/images/foto tambahan/diamond.jpeg',
    posClass: 'hero-float-card--bottom-right',
  },
];

const HERO_COPY = {
  en: {
    titleLine1: 'Welcome to',
    titleLine2: 'Nusa Penida',
    subtitle: 'Curated Journeys Designed To Be Felt, Not Rushed.',
    cta: 'Book a trip',
    metricRating: '4.9 stars (541k Reviews)',
    metricTravellers: '50k travellers',
    metricFollowers: '1+ million followers',
  },
  id: {
    titleLine1: 'Selamat Datang di',
    titleLine2: 'Nusa Penida',
    subtitle: 'Nikmati Liburan Impian yang Dirancang untuk Diresapi, Bukan Tergesa.',
    cta: 'Pesan Sekarang',
    metricRating: 'Rating 4.9 (541 rb Ulasan)',
    metricTravellers: '50 rb Wisatawan',
    metricFollowers: '1+ Juta Pengikut',
  },
  zh: {
    titleLine1: '欢迎探索',
    titleLine2: '努沙佩尼达',
    subtitle: '精心策划的海岛度假，慢享自由与海风。',
    cta: '预订旅程',
    metricRating: '4.9分好评 (54.1万条评价)',
    metricTravellers: '5万+位探索者',
    metricFollowers: '100万+关注者',
  },
  ja: {
    titleLine1: 'ようこそ、',
    titleLine2: 'ヌサペニダへ',
    subtitle: '心で深く感じる、極上のアイランドバケーション。',
    cta: '旅を予約する',
    metricRating: '4.9星高評価 (54.1万件)',
    metricTravellers: '5万人以上の旅人',
    metricFollowers: '100万人以上のフォロワー',
  },
  ko: {
    titleLine1: '환영합니다,',
    titleLine2: '누사 페니다',
    subtitle: '재촉하지 않고 온전히 교감하는 완벽한 아일랜드 휴가.',
    cta: '여행 예약하기',
    metricRating: '4.9점 최고 평점 (54.1만 리뷰)',
    metricTravellers: '5만 명의 여행자',
    metricFollowers: '100만 명 이상의 팔로워',
  },
};

export default function HeroSection({
  onScrollToSection,
  onSelectLocation,
  isZooming,
  lang = 'en',
}) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const t = HERO_COPY[lang] || HERO_COPY.en;

  // Autoplay fallback ensuring video continues playing smoothly
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handled silently
      });
    }
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (card) => {
    if (onSelectLocation) {
      onSelectLocation({ id: card.id });
    } else {
      onScrollToSection?.('destinations');
    }
  };

  return (
    <section id="home" className={`hero-traavellio ${isZooming ? 'hero-traavellio--zooming' : ''} ${isLoaded ? 'hero-traavellio--loaded' : ''}`}>
      {/* Background Video Player */}
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video-el"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/foto tambahan/Nusa Penida Aerial Paradise.png"
        >
          <source src="/images/video-awal.mp4" type="video/mp4" />
          <source src="/images/video awal.mov" type="video/quicktime" />
        </video>
        {/* Cinematic Vignette Overlay — preserves white text legibility while showcasing ocean beauty */}
        <div className="hero-video-overlay" />
      </div>

      {/* 4 Floating Tilted Photo Cards (Matching Reference Layout) */}
      <div className="hero-floating-cards" aria-label="Featured destinations">
        {FLOATING_CARDS.map((card) => {
          const cardTitle = card.title[lang] || card.title.en;
          const cardTag = card.tag[lang] || card.tag.en;

          return (
            <button
              key={card.id}
              type="button"
              className={`hero-float-card ${card.posClass}`}
              onClick={() => handleCardClick(card)}
              title={`${cardTitle} — ${cardTag}`}
              aria-label={`Explore ${cardTitle}`}
            >
              <div className="hero-float-card__frame">
                <img
                  src={card.img}
                  alt={cardTitle}
                  className="hero-float-card__img"
                  loading="eager"
                />
                <div className="hero-float-card__caption">
                  <span className="hero-float-card__name">{cardTitle}</span>
                  <span className="hero-float-card__tag">{cardTag} ↗</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Center Hero Content (Exact Reference Typography & Pill Button) */}
      <div className="hero-center-content">
        <h1 className="hero-center-title">
          <span className="hero-title-line">{t.titleLine1}</span>
          <span className="hero-title-line">{t.titleLine2}</span>
        </h1>

        <p className="hero-center-subtitle">{t.subtitle}</p>

        {/* Center Pill Action Button */}
        <div className="hero-center-cta-wrap">
          <button
            type="button"
            className="hero-pill-cta"
            onClick={() => onScrollToSection?.('planner')}
          >
            <span>{t.cta}</span>
            <span className="hero-pill-cta__icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Social Proof Metrics Bar (Matching Reference Layout) */}
      <div className="hero-bottom-metrics" aria-label="Ratings and statistics">
        {/* Google Reviews */}
        <div className="hero-metric-item">
          <svg className="hero-metric-icon hero-metric-icon--google" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span className="hero-metric-text">{t.metricRating}</span>
        </div>

        {/* Travellers Count */}
        <div className="hero-metric-item">
          <svg className="hero-metric-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="hero-metric-text">{t.metricTravellers}</span>
        </div>

        {/* Environmental / Community Metric */}
        <div className="hero-metric-item">
          <svg className="hero-metric-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="hero-metric-text">{t.metricFollowers}</span>
        </div>
      </div>
    </section>
  );
}
