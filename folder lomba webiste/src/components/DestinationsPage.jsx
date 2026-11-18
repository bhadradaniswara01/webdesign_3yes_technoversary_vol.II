import { useState } from 'react';
import FooterSection from './FooterSection';
import { DESTINATIONS_DATA } from '../data/destinationSpotsData';

// Halaman Destinations hanya menampilkan 2 card utama.
// Spot lain digabung ke dalam card induknya lewat `includes`.
const PARENT_OF = {
  broken: 'kelingking',
  angel: 'kelingking',
  diamond: 'manta',
  crystal: 'manta',
};

const DESTINATION_CARDS = [
  { ...DESTINATIONS_DATA.find((d) => d.id === 'manta'), includes: ['diamond', 'crystal'] },
  { ...DESTINATIONS_DATA.find((d) => d.id === 'kelingking'), includes: ['broken', 'angel'] },
];

const POLAROIDS_LIST = [
  {
    id: 'kelingking',
    title: { en: 'Kelingking Beach', id: 'Pantai Kelingking', zh: '精灵海滩', ja: 'クリンキン', ko: '켈링킹 비치' },
    img: '/images/foto tambahan/kelingking.jpeg',
    cls: 'plan-polaroid--top-left',
    tapeCls: 'polaroid-tape--terracotta',
  },
  {
    id: 'broken',
    title: { en: 'Broken Beach', id: 'Broken Beach', zh: '天仙裂痕', ja: 'ブロークン', ko: '브로큰 비치' },
    img: '/images/foto tambahan/broken.jpeg',
    cls: 'plan-polaroid--mid-left',
    tapeCls: 'polaroid-tape--cream',
  },
  {
    id: 'angel',
    title: { en: "Angel's Billabong", id: "Angel's Billabong", zh: '天神浴池', ja: 'エンジェルズ', ko: '엔젤스 빌라봉' },
    img: '/images/foto tambahan/anggels billabong.jpeg',
    cls: 'plan-polaroid--bottom-left',
    tapeCls: 'polaroid-tape--terracotta',
  },
  {
    id: 'manta',
    title: { en: 'Manta Point', id: 'Manta Point', zh: '蝠鲼潜点', ja: 'マンタポイント', ko: '만타 포인트' },
    img: '/images/foto tambahan/manta point.jpeg',
    cls: 'plan-polaroid--top-right',
    tapeCls: 'polaroid-tape--terracotta',
  },
  {
    id: 'diamond',
    title: { en: 'Diamond Beach', id: 'Pantai Diamond', zh: '钻石海滩', ja: 'ダイヤモンド', ko: '다이아몬드' },
    img: '/images/foto tambahan/diamond.jpeg',
    cls: 'plan-polaroid--mid-right',
    tapeCls: 'polaroid-tape--cream',
  },
  {
    id: 'crystal',
    title: { en: 'Crystal Bay', id: 'Crystal Bay', zh: '水晶湾', ja: 'クリスタルベイ', ko: '크리스탈 베이' },
    img: '/images/foto tambahan/terumbu karang.jpeg',
    cls: 'plan-polaroid--bottom-right',
    tapeCls: 'polaroid-tape--cream',
  },
];

const PAGE_TEXT = {
  en: {
    includesLabel: 'Also includes',
    heroTitle: 'Destinations',
    heroSubtitle: 'Explore our breathtaking destinations carefully selected for unforgettable adventures.',
    all: 'All',
    marine: 'Marine Sanctuaries',
    cliff: 'Karst Cliffs',
    beach: 'Pristine Beaches',
    tidal: 'Geopark & Tidal Pools',
    exploreBtn: 'Explore',
    cinemaBtn: 'Open 3D Manta Cinema',
    backMapBtn: 'Explore on Island Map',
    closeBtn: 'Close',
    conservationFocus: 'Conservation Focus',
    certifiedGuides: 'Certified Local Guides',
    zeroPlastic: '100% Zero-Plastic Pledge',
    wildlifeCare: 'Strict Wildlife Distance Rules',
    planJourneyTitle: 'Plan a Journey',
    planJourneyHeading: "TELL US WHERE YOU DREAM OF GOING. WE'LL PLAN THE WHOLE JOURNEY.",
    planJourneyReply: 'we reply within 24 hours',
    planJourneyBtn: 'Start Planning',
    inquiryTitle: 'Plan Your Bespoke Nusa Penida Journey',
    inquirySubtitle: 'Select your preferred eco-destinations and travel style. Our native curators will tailor your private itinerary.',
    destOfInterest: 'Destinations of Interest',
    travelDuration: 'Estimated Trip Duration',
    duration1: '1 Day Island Expedition',
    duration2: '2 Days · 1 Night Clifftop Villa',
    duration3: '3 Days · 2 Nights Complete Island',
    guestCount: 'Guests Count',
    guests1: '1 - 2 Guests (Private Duo)',
    guests2: '3 - 5 Guests (Family / Friends)',
    guests3: '6+ Guests (Private Charter)',
    nameField: 'Full Name',
    contactField: 'Email or WhatsApp',
    notesField: 'Special Requests / Eco Preferences',
    notesPlaceholder: 'e.g. Vegetarian dining, private drone recording, sunrise photography...',
    sendBtn: 'Send Custom Travel Inquiry',
    successTitle: 'Inquiry Received!',
    successDesc: 'Thank you! Our Nusa Penida concierge will reach out within 24 hours with your customized itinerary.',
  },
  id: {
    includesLabel: 'Termasuk juga',
    heroTitle: 'Destinasi',
    heroSubtitle: 'Jelajahi surga destinasi menakjubkan yang dipilih khusus untuk petualangan tak terlupakan.',
    all: 'Semua',
    marine: 'Konservasi Bahari',
    cliff: 'Tebing Karst',
    beach: 'Pantai Lestari',
    tidal: 'Geopark & Kolam Pasang',
    exploreBtn: 'Lihat Detail',
    cinemaBtn: 'Buka Cinema Manta 3D',
    backMapBtn: 'Lihat di Peta Pulau',
    closeBtn: 'Tutup',
    conservationFocus: 'Fokus Konservasi',
    certifiedGuides: 'Pemandu Lokal Berlisensi',
    zeroPlastic: 'Komitmen Bebas Sampah Plastik',
    wildlifeCare: 'Aturan Jarak Aman Satwa Liar',
    planJourneyTitle: 'Plan a Journey',
    planJourneyHeading: 'CERITAKAN KE MANA ANDA INGIN BERPETUALANG. KAMI AKAN MERANCANG SELURUH PERJALANAN ANDA.',
    planJourneyReply: 'kami merespons dalam 24 jam',
    planJourneyBtn: 'Mulai Perencanaan',
    inquiryTitle: 'Rancang Ekspedisi Impian Nusa Penida Anda',
    inquirySubtitle: 'Pilih destinasi favorit dan gaya perjalanan Anda. Tim kurator lokal kami akan menyiapkan rencana terkurasi khusus untuk Anda.',
    destOfInterest: 'Destinasi yang Ingin Dikunjungi',
    travelDuration: 'Durasi Perjalanan',
    duration1: '1 Hari Ekspedisi Kilat',
    duration2: '2 Hari 1 Malam Villa Tebing',
    duration3: '3 Hari 2 Malam Eksplorasi Penuh',
    guestCount: 'Jumlah Wisatawan',
    guests1: '1 - 2 Orang (Privat Duo)',
    guests2: '3 - 5 Orang (Keluarga / Sahabat)',
    guests3: '6+ Orang (Charter Eksklusif)',
    nameField: 'Nama Lengkap',
    contactField: 'Email atau Nomor WhatsApp',
    notesField: 'Catatan Khusus / Preferensi Konservasi',
    notesPlaceholder: 'Contoh: Makanan organik lokal, dokumentasi drone 4K, fotografi fajar...',
    sendBtn: 'Kirim Rencana Perjalanan',
    successTitle: 'Rencana Perjalanan Diterima!',
    successDesc: 'Terima kasih! Tim kurator Nusa Penida kami akan menghubungi Anda dalam waktu 24 jam dengan rute personal terperinci.',
  },
  zh: {
    includesLabel: '同时包含',
    heroTitle: '精选目的地',
    heroSubtitle: '探索精心挑选的令人叹为观止的绝美目的地，开启难忘海岛之旅。',
    all: '全部',
    marine: '海洋生态保护区',
    cliff: '喀斯特悬崖',
    beach: '原始白沙海滩',
    tidal: '地质公园与潮汐池',
    exploreBtn: '了解详情',
    cinemaBtn: '开启3D蝠鲼电影全景',
    backMapBtn: '在海岛地图中查看',
    closeBtn: '关闭',
    conservationFocus: '生态保护重点',
    certifiedGuides: '持证当地专属向导',
    zeroPlastic: '100% 零塑料承诺',
    wildlifeCare: '严格遵守野生动物安全观察距离',
    planJourneyTitle: 'Plan a Journey',
    planJourneyHeading: '告诉我们您梦想去往何方，我们将为您定制整场旅程。',
    planJourneyReply: '我们将在24小时内答复',
    planJourneyBtn: '开始定制旅程',
    inquiryTitle: '定制您的专属佩尼达岛私人探索',
    inquirySubtitle: '选择您心仪的生态目的地与出行方式，当地专属向导团队将为您打磨无缝旅行方案。',
    destOfInterest: '意向目的地',
    travelDuration: '预计行程天数',
    duration1: '1日 环岛经典探索',
    duration2: '2天1晚 崖畔独栋生态庄园',
    duration3: '3天2晚 全岛深度慢游',
    guestCount: '同行人数',
    guests1: '1 - 2 位 (专属双人游)',
    guests2: '3 - 5 位 (家庭亲友团)',
    guests3: '6位以上 (私人独立包团)',
    nameField: '您的姓名',
    contactField: '电子邮箱或微信/电话',
    notesField: '特别需求 / 生态出行偏好',
    notesPlaceholder: '例如：有机餐食、大疆4K航拍跟拍、日出摄影点位...',
    sendBtn: '提交定制需求',
    successTitle: '定制需求已提交！',
    successDesc: '非常感谢！佩尼达岛当地私人管家团队将在24小时内联系您并奉上专属路书。',
  },
  ja: {
    includesLabel: 'あわせて巡る',
    heroTitle: '厳選目的地',
    heroSubtitle: '忘れられない冒険のために厳選された、息をのむほど美しい目的地を巡る。',
    all: 'すべて',
    marine: '海洋保護水域',
    cliff: 'カルスト断崖',
    beach: '原生白砂ビーチ',
    tidal: 'ジオパーク＆潮汐プール',
    exploreBtn: '詳細を見る',
    cinemaBtn: '3Dマンタシネマを開く',
    backMapBtn: 'アイランドマップで見る',
    closeBtn: '閉じる',
    conservationFocus: '保全の取り組み',
    certifiedGuides: '公認ローカルガイド同行',
    zeroPlastic: '100% プラスチックフリー誓約',
    wildlifeCare: '海洋生物の安全距離ルール厳守',
    planJourneyTitle: 'Plan a Journey',
    planJourneyHeading: '行きたい夢の場所をお聞かせください。私たちが旅のすべてを設計します。',
    planJourneyReply: '24時間以内にご返答いたします',
    planJourneyBtn: '旅の計画を始める',
    inquiryTitle: 'ヌサペニダ オーダーメイド旅程のご相談',
    inquirySubtitle: 'ご希望の訪問地や旅のスタイルを選択してください。専任の現地コンシェルジュが特別な旅程をご提案します。',
    destOfInterest: '訪れたいスポット',
    travelDuration: 'ご希望の日程',
    duration1: '1日 アイランド日帰りツアー',
    duration2: '2泊1日 絶景クリフヴィラ滞在',
    duration3: '3泊2日 完全プライベート周遊',
    guestCount: 'ご参加人数',
    guests1: '1〜2名（プライベートペア）',
    guests2: '3〜5名（ご家族・ご友人）',
    guests3: '6名以上（グループ貸切）',
    nameField: 'お名前',
    contactField: 'メールアドレスまたはLINE/電話',
    notesField: 'ご要望・エコ旅のご希望',
    notesPlaceholder: '例：オーガニック食事、4Kドローン撮影同行、早朝サンライズ観賞...',
    sendBtn: '旅程プランをリクエスト',
    successTitle: 'リクエストを受け付けました！',
    successDesc: 'ありがとうございます。24時間以内に専任チームよりカスタム旅程をご案内いたします。',
  },
  ko: {
    includesLabel: '함께 포함',
    heroTitle: '추천 여행지',
    heroSubtitle: '잊지 못할 여정을 위해 엄선된 경이로운 자연과 숨겨진 명소를 탐험하세요.',
    all: '전체',
    marine: '해양 보호구역',
    cliff: '카르스트 절벽',
    beach: '자연 백사장',
    tidal: '지질공원 & 조수웅덩이',
    exploreBtn: '자세히 보기',
    cinemaBtn: '3D 만타 시네마 열기',
    backMapBtn: '아일랜드 맵에서 보기',
    closeBtn: '닫기',
    conservationFocus: '생태 보전 핵심',
    certifiedGuides: '현지 전문 공인 가이드 동행',
    zeroPlastic: '100% 무플라스틱 원칙',
    wildlifeCare: '해양 야생생물 보호거리 엄격 준수',
    planJourneyTitle: 'Plan a Journey',
    planJourneyHeading: '꿈꾸는 여행지를 들려주세요. 모든 여정을 완벽하게 설계해 드립니다.',
    planJourneyReply: '24시간 이내에 답변 드립니다',
    planJourneyBtn: '맞춤 여행 시작하기',
    inquiryTitle: '나만의 누사 페니다 비스포크 투어 문의',
    inquirySubtitle: '선호하는 명소와 여행 일정을 선택해 주세요. 현지 전문 큐레이터가 최적의 프라이빗 코스를 구성해 드립니다.',
    destOfInterest: '방문 희망 명소',
    travelDuration: '여행 예상 일정',
    duration1: '1일 데이 투어',
    duration2: '2박 1일 절벽 프라이빗 빌라',
    duration3: '3박 2일 섬 전체 심층 탐험',
    guestCount: '여행 인원',
    guests1: '1 - 2명 (프라이빗 듀오)',
    guests2: '3 - 5명 (가족 / 친구)',
    guests3: '6명 이상 (단독 전용 차터)',
    nameField: '성함',
    contactField: '이메일 또는 연락처',
    notesField: '특별 요청사항 / 에코 투어 희망',
    notesPlaceholder: '예: 비건 오가닉 밀, 4K 드론 영상 촬영 동행, 일출 출사...',
    sendBtn: '맞춤 투어 견적 요청',
    successTitle: '문의가 접수되었습니다!',
    successDesc: '감사합니다! 누사 페니다 현지 전담 팀이 24시간 이내에 맞춤형 세부 일정을 전달해 드립니다.',
  },
};

export default function DestinationsPage({ lang = 'en', onBackToHero, onSelectLocation }) {
  const [selectedDest, setSelectedDest] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [selectedSpots, setSelectedSpots] = useState(['manta', 'kelingking']);

  const t = PAGE_TEXT[lang] || PAGE_TEXT.en;

  const handleCardClick = (dest) => {
    if (dest.id === 'manta') {
      onSelectLocation?.({ id: 'manta' });
    } else {
      setSelectedDest(dest);
    }
  };

  const handleActionClick = (dest) => {
    if (dest.id === 'manta') {
      onSelectLocation?.({ id: 'manta' });
    } else if (dest.id === 'kelingking') {
      onSelectLocation?.({ id: 'kelingking' });
    } else {
      onBackToHero?.();
      setTimeout(() => {
        onSelectLocation?.({ id: dest.id });
      }, 150);
    }
  };

  const toggleSpot = (id) => {
    setSelectedSpots((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setIsInquiryOpen(false);
    }, 2800);
  };

  return (
    <div className="dest-page">
      {/* Hero Banner with Actual High-Res Aerial Ocean Boat Panorama Background */}
      <section className="dest-page__hero">
        <img
          src="/images/foto tambahan/kelingking.jpeg"
          alt="Destinations Aerial Ocean Panorama"
          className="dest-page__hero-bg-img"
        />
        <div className="dest-page__hero-overlay" />
        <div className="dest-page__hero-inner">
          <h1 className="dest-page__hero-title">{t.heroTitle}</h1>
          <p className="dest-page__hero-subtitle">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Main Content Area: Category Filter Bar + 3-Column Bento Cards */}
      <section className="dest-page__content">
        <div className="dest-page__container">
          {/* 3-Column Destination Cards Grid (No Price, Names Matching Map, Luxury Framer Style) */}
          <div className="dest-page__grid">
            {DESTINATION_CARDS.map((dest) => {
              const badgeText = dest.badge[lang] || dest.badge.en;
              const titleText = dest.title[lang] || dest.title.en;
              const subtextText = dest.subtext[lang] || dest.subtext.en;

              return (
                <article
                  key={dest.id}
                  className="dest-card"
                  onClick={() => handleCardClick(dest)}
                >
                  {/* Photo Container with Top-Left Badge */}
                  <div className="dest-card__img-box">
                    <img
                      src={dest.img}
                      alt={titleText}
                      className="dest-card__img"
                      loading="lazy"
                    />
                    <span className="dest-card__badge">{badgeText}</span>
                  </div>

                  {/* Card Info Details */}
                  <div className="dest-card__details">
                    <h2 className="dest-card__title">{titleText}</h2>
                    <p className="dest-card__subtext">{subtextText}</p>

                    <div className="dest-card__includes">
                      <span className="dest-card__includes-label">{t.includesLabel}</span>
                      <div className="dest-card__includes-list">
                        {dest.includes.map((incId) => {
                          const inc = DESTINATIONS_DATA.find((d) => d.id === incId);
                          if (!inc) return null;
                          const incName = inc.title[lang] || inc.title.en;
                          return (
                            <span key={incId} className="dest-card__include-chip">
                              <img src={inc.img} alt="" loading="lazy" />
                              <span>{incName}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="dest-card__meta">
                      <div className="dest-card__location">
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
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{dest.location}</span>
                      </div>

                      <div className="dest-card__rating">
                        <span className="dest-card__stars">{dest.rating}</span>
                        <span className="dest-card__reviews">{dest.reviewsCount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Circular Action Arrow */}
                  <div
                    className="dest-card__action-btn"
                    aria-label={t.exploreBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (dest.id === 'manta') {
                        onSelectLocation?.({ id: 'manta' });
                      } else if (dest.id === 'kelingking') {
                        onSelectLocation?.({ id: 'kelingking' });
                      } else {
                        handleCardClick(dest);
                      }
                    }}
                  >
                    <span>↗</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION: PLAN A JOURNEY (Inspired by FarAway Reference)
          Edge-to-Edge Full-Width Scenic Misty Mountain Canvas
          ══════════════════════════════════════════════════════════ */}
      <section className="plan-journey-section">
        <h2 className="plan-journey__title">{t.planJourneyTitle}</h2>

        <div className="plan-journey__stage">
          {/* Polaroids Scattered on Left and Right (Exact Reference Layout) */}
          {POLAROIDS_LIST.map((p) => {
            const label = p.title[lang] || p.title.en;
            return (
              <div
                key={p.id}
                className={`plan-polaroid ${p.cls}`}
                onClick={() => {
                  const targetId = PARENT_OF[p.id] || p.id;
                  onSelectLocation?.({ id: targetId });
                }}
                title={`Detail ${label}`}
              >
                <div className={`polaroid-tape ${p.tapeCls}`} />
                <div className="plan-polaroid__photo-box">
                  <img src={p.img} alt={label} className="plan-polaroid__img" loading="lazy" />
                </div>
                <span className="plan-polaroid__caption">{label}</span>
              </div>
            );
          })}

          {/* Central Pinned Parchment Note */}
          <div className="plan-journey__note">
            {/* 3D Realistic Red Pushpin */}
            <div className="plan-journey__pushpin" aria-hidden="true">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none">
                <ellipse cx="18" cy="41" rx="9" ry="3.5" fill="rgba(0,0,0,0.22)" />
                <path d="M18 19 L18 41" stroke="#52525b" strokeWidth="2.8" strokeLinecap="round" />
                <circle cx="18" cy="14" r="12" fill="url(#pinRadial)" />
                <circle cx="15" cy="11" r="3.8" fill="#fca5a5" opacity="0.85" />
                <defs>
                  <radialGradient id="pinRadial" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="65%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <h3 className="plan-journey__note-heading">{t.planJourneyHeading}</h3>
            <p className="plan-journey__note-reply">{t.planJourneyReply}</p>

            <button
              type="button"
              className="plan-journey__start-btn"
              onClick={() => setIsInquiryOpen(true)}
            >
              <span className="plan-journey__start-arrow">↳</span>
              <span>{t.planJourneyBtn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal on Destination Click */}
      {selectedDest && (
        <div
          className="dest-modal-backdrop"
          onClick={() => setSelectedDest(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="dest-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="dest-modal__close-btn"
              onClick={() => setSelectedDest(null)}
              aria-label={t.closeBtn}
            >
              ✕
            </button>

            <div className="dest-modal__hero">
              <img
                src={selectedDest.img}
                alt={selectedDest.title[lang] || selectedDest.title.en}
                className="dest-modal__img"
              />
              <span className="dest-modal__badge">
                {selectedDest.badge[lang] || selectedDest.badge.en}
              </span>
            </div>

            <div className="dest-modal__body">
              <h3 className="dest-modal__title">
                {selectedDest.title[lang] || selectedDest.title.en}
              </h3>

              <div className="dest-modal__subtext">
                {selectedDest.subtext[lang] || selectedDest.subtext.en}
              </div>

              <p className="dest-modal__desc">
                {selectedDest.desc[lang] || selectedDest.desc.en}
              </p>

              <div className="dest-modal__commitments">
                <div className="dest-modal__pill">
                  <span className="dest-modal__pill-icon">✓</span>
                  <span>{t.certifiedGuides}</span>
                </div>
                <div className="dest-modal__pill">
                  <span className="dest-modal__pill-icon">✓</span>
                  <span>{t.zeroPlastic}</span>
                </div>
                <div className="dest-modal__pill">
                  <span className="dest-modal__pill-icon">✓</span>
                  <span>{t.wildlifeCare}</span>
                </div>
              </div>

              <div className="dest-modal__actions">
                {selectedDest.id === 'manta' ? (
                  <button
                    type="button"
                    className="dest-modal__btn dest-modal__btn--primary"
                    onClick={() => {
                      setSelectedDest(null);
                      handleActionClick(selectedDest);
                    }}
                  >
                    <span>{t.cinemaBtn}</span>
                    <span>↗</span>
                  </button>
                ) : selectedDest.id === 'kelingking' ? (
                  <button
                    type="button"
                    className="dest-modal__btn dest-modal__btn--primary"
                    onClick={() => {
                      setSelectedDest(null);
                      handleActionClick(selectedDest);
                    }}
                  >
                    <span>{lang === 'id' ? 'Buka Cinema Kelingking 3D' : 'Open Kelingking 3D Cinema'}</span>
                    <span>↗</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="dest-modal__btn dest-modal__btn--primary"
                    onClick={() => {
                      setSelectedDest(null);
                      handleActionClick(selectedDest);
                    }}
                  >
                    <span>{t.backMapBtn}</span>
                    <span>↗</span>
                  </button>
                )}

                <button
                  type="button"
                  className="dest-modal__btn dest-modal__btn--secondary"
                  onClick={() => setSelectedDest(null)}
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Custom Journey Planner Modal (Triggered by "Plan a Journey") */}
      {isInquiryOpen && (
        <div
          className="dest-modal-backdrop"
          onClick={() => setIsInquiryOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="dest-modal dest-modal--inquiry"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="dest-modal__close-btn"
              onClick={() => setIsInquiryOpen(false)}
              aria-label={t.closeBtn}
            >
              ✕
            </button>

            <div className="dest-inquiry__header">
              <span className="dest-inquiry__eyebrow">BESPOKE ISLAND CONCIERGE</span>
              <h3 className="dest-inquiry__title">{t.inquiryTitle}</h3>
              <p className="dest-inquiry__sub">{t.inquirySubtitle}</p>
            </div>

            {inquirySubmitted ? (
              <div className="dest-inquiry__success">
                <div className="dest-inquiry__success-icon">✓</div>
                <h4>{t.successTitle}</h4>
                <p>{t.successDesc}</p>
              </div>
            ) : (
              <form className="dest-inquiry__form" onSubmit={handleInquirySubmit}>
                {/* Spot Checkboxes */}
                <div className="dest-inquiry__group">
                  <label className="dest-inquiry__label">{t.destOfInterest}</label>
                  <div className="dest-inquiry__spots">
                    {DESTINATIONS_DATA.map((dest) => {
                      const isSelected = selectedSpots.includes(dest.id);
                      const spotName = dest.title[lang] || dest.title.en;
                      return (
                        <button
                          key={dest.id}
                          type="button"
                          className={`dest-inquiry__spot-chip ${isSelected ? 'dest-inquiry__spot-chip--selected' : ''}`}
                          onClick={() => toggleSpot(dest.id)}
                        >
                          <span>{isSelected ? '✓' : '+'}</span>
                          <span>{spotName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Duration & Guest Row */}
                <div className="dest-inquiry__row">
                  <div className="dest-inquiry__group">
                    <label className="dest-inquiry__label">{t.travelDuration}</label>
                    <select className="dest-inquiry__select" defaultValue="2days">
                      <option value="1day">{t.duration1}</option>
                      <option value="2days">{t.duration2}</option>
                      <option value="3days">{t.duration3}</option>
                    </select>
                  </div>
                  <div className="dest-inquiry__group">
                    <label className="dest-inquiry__label">{t.guestCount}</label>
                    <select className="dest-inquiry__select" defaultValue="duo">
                      <option value="duo">{t.guests1}</option>
                      <option value="friends">{t.guests2}</option>
                      <option value="charter">{t.guests3}</option>
                    </select>
                  </div>
                </div>

                {/* Name & Contact Row */}
                <div className="dest-inquiry__row">
                  <div className="dest-inquiry__group">
                    <label className="dest-inquiry__label">{t.nameField}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Traveler"
                      className="dest-inquiry__input"
                    />
                  </div>
                  <div className="dest-inquiry__group">
                    <label className="dest-inquiry__label">{t.contactField}</label>
                    <input
                      type="text"
                      required
                      placeholder="alex@gmail.com / +62..."
                      className="dest-inquiry__input"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="dest-inquiry__group">
                  <label className="dest-inquiry__label">{t.notesField}</label>
                  <textarea
                    rows={2}
                    placeholder={t.notesPlaceholder}
                    className="dest-inquiry__textarea"
                  />
                </div>

                {/* Submit Action */}
                <div className="dest-inquiry__actions">
                  <button type="submit" className="dest-inquiry__submit-btn">
                    <span>{t.sendBtn}</span>
                    <span>→</span>
                  </button>
                  <button
                    type="button"
                    className="dest-inquiry__home-btn"
                    onClick={() => {
                      setIsInquiryOpen(false);
                      onBackToHero?.();
                      setTimeout(() => {
                        const el = document.getElementById('planner');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 150);
                    }}
                  >
                    Buka Trip Planner di Home
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer Section at Bottom */}
      <FooterSection lang={lang} />
    </div>
  );
}
