import { useEffect, useRef, useState } from 'react';

const REVIEW_TEXTS = {
  en: {
    eyebrow: 'Loved by travelers',
    mainQuote1: '«An expedition that reshapes around you — ',
    mainQuote2: 'tides, weather, and calm moments.»',
    reviewerTopName: 'David & Maya Thorne',
    reviewerTopTag: 'Nusa Penida Eco Journey',
    cards: [
      {
        id: '1',
        variant: 'portrait',
        img: '/images/foto tambahan/manta point.jpeg',
        hasReview: true,
        tag: 'Traveler',
        quote:
          'Big swells hit Manta Point. Our guide shifted our snorkel route to a sheltered bay before we even noticed. Flawless care!',
        author: 'Sofia Delgado',
        trip: '3-day Manta Tour',
        initials: 'SD',
        avatarColor: '#f59e0b',
        hangClass: 'hang-top-right',
      },
      {
        id: '2',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/tebing bagus.jpeg',
        hasReview: false,
      },
      {
        id: '3',
        variant: 'tall',
        img: '/images/foto tambahan/kelingking.jpeg',
        hasReview: true,
        tag: 'Verified trip',
        quote:
          'Reached Kelingking at sunrise with zero crowds. Watching the dawn break over the ridge in total silence was pure bliss.',
        author: 'Marco Bianchi',
        trip: 'Clifftop Sunrise Trek',
        initials: 'MB',
        avatarColor: '#10b981',
        hangClass: 'hang-bottom-right',
      },
      {
        id: '4',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/diamond.jpeg',
        hasReview: false,
      },
      {
        id: '5',
        variant: 'tall',
        img: '/images/foto tambahan/anggels billabong.jpeg',
        hasReview: true,
        tag: 'Verified trip',
        quote:
          'Swimming at Angel’s Billabong before high tide. The native knowledge of ocean tides made all the difference.',
        author: 'Kenji & Yuka Takahashi',
        trip: 'All-Inclusive Island Tour',
        initials: 'KT',
        avatarColor: '#ec4899',
        hangClass: 'hang-bottom-left',
      },
    ],
  },
  id: {
    eyebrow: 'Pilihan Favorit Wisatawan',
    mainQuote1: '«Ekspedisi yang menyesuaikan diri dengan Anda — ',
    mainQuote2: 'cuaca, pasang laut, dan langkah santai.»',
    reviewerTopName: 'Wayan & Maya',
    reviewerTopTag: 'Konservasi Nusa Penida',
    cards: [
      {
        id: '1',
        variant: 'portrait',
        img: '/images/foto tambahan/manta point.jpeg',
        hasReview: true,
        tag: 'Wisatawan',
        quote:
          'Ombak sempat naik di Manta Point, tapi pemandu langsung mengalihkan rute ke teluk yang tenang. Sangat profesional!',
        author: 'Sofia Delgado',
        trip: 'Tur 3 Hari Pari Manta',
        initials: 'SD',
        avatarColor: '#f59e0b',
        hangClass: 'hang-top-right',
      },
      {
        id: '2',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/tebing bagus.jpeg',
        hasReview: false,
      },
      {
        id: '3',
        variant: 'tall',
        img: '/images/foto tambahan/kelingking.jpeg',
        hasReview: true,
        tag: 'Perjalanan Terverifikasi',
        quote:
          'Tiba di tebing Kelingking saat fajar dalam keheningan total tanpa keramaian. Pemandangan terbaik dalam hidup kami.',
        author: 'Marco Bianchi',
        trip: 'Trekking Tebing Fajar',
        initials: 'MB',
        avatarColor: '#10b981',
        hangClass: 'hang-bottom-right',
      },
      {
        id: '4',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/diamond.jpeg',
        hasReview: false,
      },
      {
        id: '5',
        variant: 'tall',
        img: '/images/foto tambahan/anggels billabong.jpeg',
        hasReview: true,
        tag: 'Perjalanan Terverifikasi',
        quote:
          'Berenang di kolam pasang alami Angel’s Billabong sebelum air pasang. Pengetahuan lokal pemandu luar biasa.',
        author: 'Kenji & Yuka Takahashi',
        trip: 'Tur Pulau 6 Ikon',
        initials: 'KT',
        avatarColor: '#ec4899',
        hangClass: 'hang-bottom-left',
      },
    ],
  },
  zh: {
    eyebrow: '深受全球旅行者信赖',
    mainQuote1: '«真正依您的节奏重塑的探险之旅 — ',
    mainQuote2: '海浪、潮汐与从容步调。»',
    reviewerTopName: '王晨与李悦',
    reviewerTopTag: '努沙佩尼达生态之旅',
    cards: [
      {
        id: '1',
        variant: 'portrait',
        img: '/images/foto tambahan/manta point.jpeg',
        hasReview: true,
        tag: '真实旅行者',
        quote:
          '蝠鲼点潮涌突变时，向导迅速将浮潜路线调整至避风宁静海湾，体验极致从容！',
        author: 'Sofia Delgado',
        trip: '3日蝠鲼与珊瑚游',
        initials: 'SD',
        avatarColor: '#f59e0b',
        hangClass: 'hang-top-right',
      },
      {
        id: '2',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/tebing bagus.jpeg',
        hasReview: false,
      },
      {
        id: '3',
        variant: 'tall',
        img: '/images/foto tambahan/kelingking.jpeg',
        hasReview: true,
        tag: '官方认证行程',
        quote:
          '清晨零游客时分登上海崖顶峰，金光洒满碧海，绝对是此生难忘的绝美晨曦。',
        author: 'Marco Bianchi',
        trip: '喀斯特日出探险',
        initials: 'MB',
        avatarColor: '#10b981',
        hangClass: 'hang-bottom-right',
      },
      {
        id: '4',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/diamond.jpeg',
        hasReview: false,
      },
      {
        id: '5',
        variant: 'tall',
        img: '/images/foto tambahan/anggels billabong.jpeg',
        hasReview: true,
        tag: '官方认证行程',
        quote:
          '在涨潮前进入天神无边浴池。深谙海洋潮汐规律的本地向导让整个旅程从容尊享。',
        author: '高桥健司与由香',
        trip: '全景海岛生态包车',
        initials: 'KT',
        avatarColor: '#ec4899',
        hangClass: 'hang-bottom-left',
      },
    ],
  },
  ja: {
    eyebrow: '世界中の旅人に選ばれる理由',
    mainQuote1: '«あなたに合わせて再設計される旅 — ',
    mainQuote2: '波も、潮の満ち引きも、心地よい歩調で。»',
    reviewerTopName: '佐藤 健一 & 美咲',
    reviewerTopTag: 'ヌサペニダエコツアー',
    cards: [
      {
        id: '1',
        variant: 'portrait',
        img: '/images/foto tambahan/manta point.jpeg',
        hasReview: true,
        tag: '認証トラベラー',
        quote:
          'マンタポイントで波が高くなった際、ガイドが即座に波静かな入り江へ案内してくれました。完璧なケア！',
        author: 'Sofia Delgado',
        trip: '3日間マンタツアー',
        initials: 'SD',
        avatarColor: '#f59e0b',
        hangClass: 'hang-top-right',
      },
      {
        id: '2',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/tebing bagus.jpeg',
        hasReview: false,
      },
      {
        id: '3',
        variant: 'tall',
        img: '/images/foto tambahan/kelingking.jpeg',
        hasReview: true,
        tag: '認定トリップ',
        quote:
          '混雑のない夜明けにクリンキンビーチへ。朝陽に染まる絶景は一生の宝物です。',
        author: 'Marco Bianchi',
        trip: '断崖日出トレッキング',
        initials: 'MB',
        avatarColor: '#10b981',
        hangClass: 'hang-bottom-right',
      },
      {
        id: '4',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/diamond.jpeg',
        hasReview: false,
      },
      {
        id: '5',
        variant: 'tall',
        img: '/images/foto tambahan/anggels billabong.jpeg',
        hasReview: true,
        tag: '認定トリップ',
        quote:
          '満潮前のエンジェルズ・ビラボン遊泳。地元の海を知り尽くしたガイドのおかげで安心でした。',
        author: '高橋 健司 & 由香',
        trip: 'オールインクルーシブ島巡り',
        initials: 'KT',
        avatarColor: '#ec4899',
        hangClass: 'hang-bottom-left',
      },
    ],
  },
  ko: {
    eyebrow: '글로벌 여행자가 사랑한 순간들',
    mainQuote1: '«당신의 호흡에 맞춰 유연하게 흐르는 여정 — ',
    mainQuote2: '바다 조류, 날씨, 그리고 여유로운 발걸음.»',
    reviewerTopName: '이민호 & 정수진',
    reviewerTopTag: '누사 페니다 에코 저니',
    cards: [
      {
        id: '1',
        variant: 'portrait',
        img: '/images/foto tambahan/manta point.jpeg',
        hasReview: true,
        tag: '인증 여행자',
        quote:
          '만타 포인트 파도가 거세지자 가이드가 즉시 잔잔한 비밀 만으로 코스를 변경해 주었습니다. 완벽한 전문성!',
        author: 'Sofia Delgado',
        trip: '3일 만타 투어',
        initials: 'SD',
        avatarColor: '#f59e0b',
        hangClass: 'hang-top-right',
      },
      {
        id: '2',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/tebing bagus.jpeg',
        hasReview: false,
      },
      {
        id: '3',
        variant: 'tall',
        img: '/images/foto tambahan/kelingking.jpeg',
        hasReview: true,
        tag: '공식 인증 여행',
        quote:
          '인파가 없는 새벽녘 켈링킹 절벽에서 맞이한 황금빛 일출 파노라마는 평생 잊지 못할 것입니다.',
        author: 'Marco Bianchi',
        trip: '절벽 일출 트레킹',
        initials: 'MB',
        avatarColor: '#10b981',
        hangClass: 'hang-bottom-right',
      },
      {
        id: '4',
        variant: 'landscape-scenic',
        img: '/images/foto tambahan/diamond.jpeg',
        hasReview: false,
      },
      {
        id: '5',
        variant: 'tall',
        img: '/images/foto tambahan/anggels billabong.jpeg',
        hasReview: true,
        tag: '공식 인증 여행',
        quote:
          '밀물 전 잔잔한 엔젤스 빌라봉 유영. 조류를 꿰뚫고 있는 현지 전문가의 세심함이 돋보였습니다.',
        author: '타카하시 켄지 & 유카',
        trip: '올인클루시브 에코 투어',
        initials: 'KT',
        avatarColor: '#ec4899',
        hangClass: 'hang-bottom-left',
      },
    ],
  },
};

export default function TravelerReviewsSection({ lang = 'en' }) {
  const t = REVIEW_TEXTS[lang] || REVIEW_TEXTS.en;
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous/stepped auto-scrolling with pause on hover/touch
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 30) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 490, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -490, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 490, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        {/* Top Header: Loved by travelers + Two-Tone Quote + Reviewer Pill + Arrows */}
        <div className="reviews-header reveal-header">
          <div className="reviews-header__left">
            <div className="reviews-eyebrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="reviews-main-quote">
              {t.mainQuote1}
              <span className="reviews-quote--muted">{t.mainQuote2}</span>
            </h2>
          </div>

          <div className="reviews-header__right">
            <div className="reviews-profile-pill">
              <div className="reviews-profile-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4.5" fill="#334155" />
                  <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="#334155" />
                </svg>
              </div>
              <div className="reviews-profile-info">
                <div className="reviews-profile-name-row">
                  <span className="reviews-profile-name">{t.reviewerTopName}</span>
                  <svg
                    className="reviews-verified-icon-inline"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="reviews-profile-sub">{t.reviewerTopTag}</span>
              </div>
            </div>

            <div className="reviews-nav-arrows">
              <button
                type="button"
                className="reviews-nav-btn"
                onClick={handleScrollLeft}
                aria-label="Previous review"
              >
                ‹
              </button>
              <button
                type="button"
                className="reviews-nav-btn"
                onClick={handleScrollRight}
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Auto-scrolling Review Track matching Nomia Reference: Varied card sizes & protruding review boxes */}
        <div
          className="reviews-track reveal-stagger"
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {t.cards.map((card) => (
            <div
              key={card.id}
              className={`review-card review-card--${card.variant} reveal-card`}
            >
              {/* Photo Box with Rounded Corners */}
              <div className="review-card__photo-box">
                <img
                  src={card.img}
                  alt={card.author || 'Nusa Penida scenery'}
                  className="review-card__photo"
                  loading="lazy"
                />
              </div>

              {/* Floating White Review Card — Slightly overlapping/hanging outside the photo border */}
              {card.hasReview && (
                <div
                  className={`review-card__floating-box review-card__floating-box--${card.hangClass}`}
                >
                  <div className="review-card__top-row">
                    <span className="review-card__badge">{card.tag}</span>
                    <div className="review-card__plane-icon">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                      </svg>
                    </div>
                  </div>

                  <p className="review-card__quote">{card.quote}</p>

                  <div className="review-card__author-row">
                    <div
                      className="review-card__author-avatar"
                      style={{ backgroundColor: card.avatarColor }}
                    >
                      <span>{card.initials}</span>
                    </div>
                    <div className="review-card__author-details">
                      <span className="review-card__author-name">{card.author}</span>
                      <span className="review-card__author-origin">{card.trip}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
