import { useState } from 'react';

const DESTINATIONS = [
  {
    id: 'manta',
    badge: 'Manta Point',
    badgeId: 'Manta Point',
    badgeZh: '蝠鲼点',
    badgeJa: 'マンタポイント',
    badgeKo: '만타 포인트',
    title: 'Manta Ray Marine Protection Zone',
    titleId: 'Zona Perlindungan Pari Manta',
    titleZh: '蝠鲼海洋保护区',
    titleJa: 'マンタ海洋保護区',
    titleKo: '만타가오리 해양보호구역',
    price: '$35',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Ethical Snorkeling & Wildlife Monitoring',
    tagId: 'Snorkeling Etis & Pemantauan Satwa',
    tagZh: '生态浮潜与野生动物监测',
    tagJa: '倫理的シュノーケリング＆野生動物モニタリング',
    tagKo: '윤리적 스노클링 & 야생동물 모니터링',
    img: '/images/foto tambahan/manta point.jpeg',
    highlight: 'KONSERVASI LAUT',
    wide: false,
  },
  {
    id: 'kelingking',
    badge: 'Kelingking Beach',
    badgeId: 'Pantai Kelingking',
    badgeZh: '精灵坠崖海滩',
    badgeJa: 'クリンキンビーチ',
    badgeKo: '켈링킹 비치',
    title: 'Karst Cliff Reserve & Coastal Savanna',
    titleId: 'Cagar Tebing Karst & Sabana Pesisir',
    titleZh: '喀斯特峭壁保护区与滨海草甸',
    titleJa: 'カルスト断崖保護区＆沿岸サバンナ',
    titleKo: '카르스트 절벽 보호구 & 해안 사바나',
    price: '$28',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Low-Impact Trekking & Geology Education',
    tagId: 'Trekking Minim Jejak & Edukasi Geologi',
    tagZh: '低影响徒步与地质科普',
    tagJa: '低負荷トレッキング＆地質学教育',
    tagKo: '저충격 트레킹 & 지질 교육',
    img: '/images/foto tambahan/kelingking.jpeg',
    highlight: 'EKOSISTEM PESISIR',
    wide: false,
  },
  {
    id: 'broken',
    badge: 'Broken Beach',
    badgeId: 'Broken Beach (Pasih Uug)',
    badgeZh: '天仙裂痕石拱海滩',
    badgeJa: 'ブロークンビーチ',
    badgeKo: '브로큰 비치',
    title: 'Natural Arch Geological Heritage Site',
    titleId: 'Situs Geologi Lengkungan Karang',
    titleZh: '天然石拱地质遗址',
    titleJa: '天然アーチ地質遺産サイト',
    titleKo: '천연 아치 지질 유산 사이트',
    price: '$30',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Erosion Observation & Cliff Conservation',
    tagId: 'Observasi Abrasi & Pelestarian Tebing',
    tagZh: '侵蚀观察与悬崖保护',
    tagJa: '浸食観察＆断崖保全',
    tagKo: '침식 관찰 & 절벽 보전',
    img: '/images/foto tambahan/broken.jpeg',
    highlight: 'GEOPARK ALAMI',
    wide: true,
  },
  {
    id: 'angel',
    badge: "Angel's Billabong",
    badgeId: "Angel's Billabong",
    badgeZh: '天神浴池',
    badgeJa: 'エンジェルズ・ビラボン',
    badgeKo: '엔젤스 빌라봉',
    title: 'Tidal Pool Ecosystem & Reef Conservation',
    titleId: 'Ekosistem Kolam Pasang Surut',
    titleZh: '潮汐池生态系统与珊瑚保育',
    titleJa: '潮汐プール生態系＆サンゴ保全',
    titleKo: '조수 웅덩이 생태계 & 산호 보전',
    price: '$25',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Zero-Waste Eco Tour & Reef Care',
    tagId: 'Wisata Tanpa Sampah & Pelestarian Karang',
    tagZh: '零废弃生态游与珊瑚保育',
    tagJa: 'ゼロウェイストエコツアー＆珊瑚ケア',
    tagKo: '제로 웨이스트 에코 투어 & 산호 보호',
    img: '/images/foto tambahan/anggels billabong.jpeg',
    highlight: 'BIOTA PASANG SURUT',
    wide: true,
  },
  {
    id: 'diamond',
    badge: 'Diamond Beach',
    badgeId: 'Pantai Diamond',
    badgeZh: '钻石海滩',
    badgeJa: 'ダイヤモンドビーチ',
    badgeKo: '다이아몬드 비치',
    title: 'Green Turtle Sanctuary & Coral Reef',
    titleId: 'Suaka Penyu Hijau & Terumbu Karang',
    titleZh: '绿海龟保护区与珊瑚礁',
    titleJa: 'アオウミガメ保護区＆サンゴ礁',
    titleKo: '초록 바다거북 보호구 & 산호초',
    price: '$32',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Coral Restoration & Turtle Watching',
    tagId: 'Restorasi Karang & Pengamatan Penyu',
    tagZh: '珊瑚修复与海龟观察',
    tagJa: 'サンゴ修復＆ウミガメ観察',
    tagKo: '산호 복원 & 거북이 관찰',
    img: '/images/foto tambahan/diamond.jpeg',
    highlight: 'HABITAT PENYU',
    wide: false,
  },
  {
    id: 'crystal',
    badge: 'Crystal Bay',
    badgeId: 'Teluk Crystal Bay',
    badgeZh: '水晶湾',
    badgeJa: 'クリスタルベイ',
    badgeKo: '크리스탈 베이',
    title: 'Marine Park & Coral Transplantation Garden',
    titleId: 'Taman Laut & Transplantasi Karang',
    titleZh: '海洋公园与珊瑚移植花园',
    titleJa: '海洋公園＆サンゴ移植ガーデン',
    titleKo: '해양공원 & 산호 이식 정원',
    price: '$26',
    unit: '/Per person',
    unitId: '/Per orang',
    unitZh: '/每人',
    unitJa: '/1名様',
    unitKo: '/인당',
    tag: 'Coral Adoption & Eco Diving',
    tagId: 'Adopsi Terumbu Karang & Selam Ramah Alam',
    tagZh: '认养珊瑚与生态潜水',
    tagJa: 'サンゴ養子縁組＆エコダイビング',
    tagKo: '산호 입양 & 에코 다이빙',
    img: '/images/foto tambahan/terumbu karang.jpeg',
    highlight: 'REHABILITASI KARANG',
    wide: false,
  },
];

const TEXT_DATA = {
  en: {
    badge: 'Ecotourism & Conservation',
    h1Line1: 'Sustainable Travel Trails',
    h1Line2: 'Explore & Preserve',
    moreBtn: 'View on 3D Map',
    exploreHint: 'Click to explore on 3D Map / Cinema',
  },
  id: {
    badge: 'Ekowisata & Konservasi',
    h1Line1: 'Jejak Wisata Berkelanjutan',
    h1Line2: 'Jelajahi & Lestarikan',
    moreBtn: 'Lihat di Peta 3D',
    exploreHint: 'Klik untuk menjelajah di Peta 3D / Cinema',
  },
  zh: {
    badge: '生态旅游与保育',
    h1Line1: '可持续旅行足迹',
    h1Line2: '探索与守护',
    moreBtn: '在3D全景地图查看',
    exploreHint: '点击在3D全景地图/水下影院中探索',
  },
  ja: {
    badge: 'エコツーリズム＆保全',
    h1Line1: 'サステナブルな旅の軌跡',
    h1Line2: '探索し、守ろう',
    moreBtn: '3Dマップで全景を見る',
    exploreHint: 'クリックして3Dマップ／水下シネマを体験',
  },
  ko: {
    badge: '에코투어리즘 & 보전',
    h1Line1: '지속 가능한 여행의 발자취',
    h1Line2: '탐험하고 보존하세요',
    moreBtn: '3D 지도로 전체 보기',
    exploreHint: '클릭하여 3D 지도 및 수중 시네마 탐험',
  },
};

export default function TopDestinationsSection({ lang = 'en', onSelectManta, onSelectLocation, onNavigateToDestinations }) {
  const [hoveredId, setHoveredId] = useState(null);

  const t = TEXT_DATA[lang] || TEXT_DATA.en;

  const handleCardClick = (dest) => {
    if (dest.id === 'manta') {
      onSelectManta?.();
    } else {
      onSelectLocation?.({ id: dest.id });
    }
  };

  return (
    <section id="destinations" className="top-dest-section">
      <div className="top-dest-container">
        {/* Header Bar: Title + Tilted Badge on Left, Action Pill on Right */}
        <div className="top-dest-header reveal-header">
          <div className="top-dest-header__left">
            <div className="top-dest-badge-wrap">
              <span className="top-dest-badge">{t.badge}</span>
            </div>
            <h2 className="top-dest-title">
              <span>{t.h1Line1}</span>
              <br />
              <span>{t.h1Line2}</span>
            </h2>
          </div>

          <div className="top-dest-header__right">
            <button
              type="button"
              className="top-dest-more-btn"
              onClick={() => {
                if (onNavigateToDestinations) {
                  onNavigateToDestinations();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              <span>{t.moreBtn}</span>
            </button>
          </div>
        </div>

        {/* 6 Destination Cards Grid (Dynamic Asymmetric Widths with Wide Cards) */}
        <div className="top-dest-grid reveal-stagger">
          {DESTINATIONS.map((dest) => {
            const isHovered = hoveredId === dest.id;

            const badgeText =
              lang === 'id'
                ? dest.badgeId
                : lang === 'zh'
                ? dest.badgeZh
                : lang === 'ja'
                ? dest.badgeJa
                : lang === 'ko'
                ? dest.badgeKo
                : dest.badge;

            const titleText =
              lang === 'id'
                ? dest.titleId
                : lang === 'zh'
                ? dest.titleZh
                : lang === 'ja'
                ? dest.titleJa
                : lang === 'ko'
                ? dest.titleKo
                : dest.title;

            const tagText =
              lang === 'id'
                ? dest.tagId
                : lang === 'zh'
                ? dest.tagZh
                : lang === 'ja'
                ? dest.tagJa
                : lang === 'ko'
                ? dest.tagKo
                : dest.tag;

            return (
              <div
                key={dest.id}
                className={`top-dest-card reveal-card ${dest.wide ? 'top-dest-card--wide' : ''} ${isHovered ? 'top-dest-card--hover' : ''}`}
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(dest)}
                title={t.exploreHint}
              >
                {/* Photo Media Box */}
                <div className="top-dest-card__media">
                  <img
                    src={dest.img}
                    alt={titleText}
                    className="top-dest-card__img"
                    loading="lazy"
                  />

                  {/* Frosted Location Pill Tag at Top-Left */}
                  <div className="top-dest-card__location-pill">
                    <svg
                      width="12"
                      height="12"
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
                    <span>{badgeText}</span>
                  </div>

                  {/* Highlight Chip on Top-Right */}
                  {dest.highlight && (
                    <span className="top-dest-card__highlight-chip">{dest.highlight}</span>
                  )}

                  {/* Arrow Action Floating Circle */}
                  <div className="top-dest-card__arrow-circle">
                    <span>↗</span>
                  </div>
                </div>

                {/* Information Under the Photo */}
                <div className="top-dest-card__info">
                  <h3 className="top-dest-card__title">{titleText}</h3>
                  <div className="top-dest-card__meta">
                    <span className="top-dest-card__tag">{tagText}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
