import { useEffect, useRef, useState } from 'react';

// Lokasi wisata — koordinat disesuaikan dengan Google Maps Nusa Penida
// Peta referensi: Crystal Bay kiri-atas, Kelingking kiri-tengah,
// Diamond kanan-bawah, Manta Point bawah-kiri
const PINS = [
  {
    id: 'crystal',
    name: 'Crystal Bay',
    sub: 'Coral Restoration · Ethical Diving',
    subId: 'Restorasi Karang · Selam Etis',
    subZh: '珊瑚修复 · 生态潜水',
    subJa: 'サンゴ修復 · エコダイビング',
    subKo: '산호 복원 · 에코 다이빙',
    x: 9,
    y: 36,
    thumb: '/images/frame underground nusa penida/frame-0060.jpg',
    cardSide: 'right',
  },
  {
    id: 'broken',
    name: 'Broken Beach',
    sub: 'Natural Geopark · Karst Arch',
    subId: 'Geopark Alami · Lengkungan Karang',
    subZh: '天然地质公园 · 石拱奇观',
    subJa: '天然ジオパーク · カルストアーチ',
    subKo: '천연 지오파크 · 카르스트 아치',
    x: 14,
    y: 26,
    thumb: '/images/frame underground nusa penida/frame-0030.jpg',
    cardSide: 'right',
  },
  {
    id: 'angel',
    name: "Angel's Billabong",
    sub: 'Coral Ecosystem · Tidal Pool',
    subId: 'Ekosistem Karang · Pasang Surut',
    subZh: '珊瑚生态 · 潮汐池',
    subJa: 'サンゴ生態系 · 潮汐プール',
    subKo: '산호 생태계 · 조수 웅덩이',
    x: 22,
    y: 18,
    thumb: '/images/frame underground nusa penida/frame-0010.jpg',
    cardSide: 'right',
  },
  {
    id: 'kelingking',
    name: 'Kelingking Beach',
    sub: 'Karst Cliffs · Coastal Savanna',
    subId: 'Tebing Karst · Sabana Pesisir',
    subZh: '喀斯特峭壁 · 滨海草甸',
    subJa: 'カルスト断崖 · 沿岸サバンナ',
    subKo: '카르스트 절벽 · 해안 사바나',
    x: 25,
    y: 46,
    thumb: '/images/frame underground nusa penida/frame-0010.jpg',
    cardSide: 'right',
  },
  {
    id: 'diamond',
    name: 'Diamond Beach',
    sub: 'Turtle Habitat · Coastal Shore',
    subId: 'Habitat Penyu · Pantai Pesisir',
    subZh: '海龟栖息地 · 海岸线',
    subJa: 'ウミガメの生息地 · 海岸',
    subKo: '거북이 서식지 · 해안가',
    x: 86,
    y: 48,
    thumb: '/images/frame underground nusa penida/frame-0130.jpg',
    cardSide: 'left',
  },
  {
    id: 'manta',
    name: 'Manta Point',
    sub: 'Manta Ray Sanctuary · Marine Conservation',
    subId: 'Suaka Pari Manta · Konservasi Laut',
    subZh: '蝠鲼保护区 · 海洋保育',
    subJa: 'マンタ保護区 · 海洋保全',
    subKo: '만타가오리 보호구 · 해양 보전',
    x: 44,
    y: 74,
    thumb: '/images/frame underground nusa penida/frame-0100.jpg',
    cardSide: 'right',
  },
];

const HERO_TEXTS = {
  en: {
    eyebrow: 'EXPLORE & PRESERVE —',
    h1Line1: 'Nusa Penida',
    h1Line2: 'Explore, Protect, Sustain',
    lead1: 'Discover 6 geological wonders and marine sanctuaries',
    lead2: 'through sustainable travel that supports local conservation.',
    cta: 'Explore Destinations',
    drag: 'DRAG THE LANDSCAPE',
  },
  id: {
    eyebrow: 'JELAJAHI & LESTARIKAN —',
    h1Line1: 'Nusa Penida',
    h1Line2: 'Jelajahi, Jaga Alamnya',
    lead1: 'Eksplorasi 6 keajaiban geologi dan surga bahari',
    lead2: 'melalui perjalanan wisata berkelanjutan yang mendukung konservasi lokal.',
    cta: 'Jelajahi Destinasi',
    drag: 'GESER PANORAMA PETA',
  },
  zh: {
    eyebrow: '探索与守护 —',
    h1Line1: '努沙佩尼达',
    h1Line2: '探索、守护、共生',
    lead1: '探访6处地质奇观与海洋圣地，',
    lead2: '以可持续旅行方式支持当地自然保育。',
    cta: '探索热门目的地',
    drag: '拖动全景地图',
  },
  ja: {
    eyebrow: '探索し、守ろう —',
    h1Line1: 'ヌサペニダ',
    h1Line2: '探索し、守り、共に生きる',
    lead1: '6つの地質の奇跡と海洋の聖域を巡り、',
    lead2: '地域の保全を支えるサステナブルな旅を体験。',
    cta: 'おすすめ目的地を見る',
    drag: 'パノラマをドラッグ',
  },
  ko: {
    eyebrow: '탐험하고 보존하세요 —',
    h1Line1: '누사 페니다',
    h1Line2: '탐험하고, 지키고, 함께 살아가다',
    lead1: '6개의 지질 경이와 해양 보호구역을 탐험하며,',
    lead2: '지역 보전을 지원하는 지속 가능한 여행을 경험하세요.',
    cta: '여행지 둘러보기',
    drag: '지도를 드래그하여 탐색',
  },
};

const SLIDE_COUNT = 5;

function LocationPin({ pin, index, visible, onSelectPin, lang = 'en' }) {
  const subText =
    lang === 'id'
      ? pin.subId
      : lang === 'zh'
      ? pin.subZh
      : lang === 'ja'
      ? pin.subJa
      : lang === 'ko'
      ? pin.subKo
      : pin.sub;

  return (
    <div
      className={`pin ${visible ? 'pin--in' : ''}`}
      style={{
        left: `${pin.x}%`,
        top: `${pin.y}%`,
        '--delay': `${0.5 + index * 0.18}s`,
      }}
    >
      {/* White dot */}
      <div className="pin__dot" aria-hidden="true" />

      {/* Vertical line */}
      <div className="pin__line" />

      {/* Card — always visible, matches reference style */}
      <div className={`pin__card pin__card--${pin.cardSide}`}>
        <img
          className="pin__thumb"
          src={pin.thumb}
          alt={pin.name}
          loading="lazy"
        />
        <div className="pin__info">
          <span className="pin__name">{pin.name}</span>
          <span className="pin__sub">{subText}</span>
        </div>
      </div>
    </div>
  );
}

export default function IslandMapSection({
  onScrollToSection,
  onSelectLocation,
  isZooming,
  zoomTarget = 'manta',
  lang = 'en',
}) {
  const [visible, setVisible] = useState(false);
  const [slide, setSlide] = useState(1);
  const heroRef = useRef(null);

  const t = HERO_TEXTS[lang] || HERO_TEXTS.en;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setSlide((p) => (p >= SLIDE_COUNT ? 1 : p + 1)), 3800);
    return () => clearInterval(iv);
  }, []);

  // Subtle parallax on mouse move
  const handleMouseMove = (e) => {
    const bg = heroRef.current?.querySelector('.hero__img');
    if (!bg) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 12;
    const y = ((e.clientY - top) / height - 0.5) * 8;
    bg.style.transform = `scale(1.06) translate(${x}px,${y}px)`;
  };
  const handleMouseLeave = () => {
    const bg = heroRef.current?.querySelector('.hero__img');
    if (bg) bg.style.transform = 'scale(1.06) translate(0,0)';
  };

  return (
    <section
      id="island-map"
      className={`hero-map-section ${isZooming ? 'hero--zooming' : ''}`}
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* BG Image */}
      <div className="hero__bg">
        <img
          className="hero__img"
          src="/images/foto tambahan/Nusa Penida Aerial Paradise.png"
          alt="Nusa Penida Aerial"
          style={
            isZooming
              ? {
                  transformOrigin: zoomTarget === 'kelingking' ? '25% 46%' : '44% 74%',
                }
              : undefined
          }
        />
        {/* Natural overlay — dark bottom-left, subtle top */}
        <div className="hero__grad" />
      </div>

      {/* Pins */}
      <div className="hero__pins" aria-hidden="false">
        {PINS.map((pin, i) => (
          <LocationPin
            key={pin.id}
            pin={pin}
            index={i}
            visible={visible}
            onSelectPin={onSelectLocation}
            lang={lang}
          />
        ))}
      </div>

      {/* Slide numbers — kanan tengah */}
      <div className="hero__slides" aria-hidden="true">
        {Array.from({ length: SLIDE_COUNT }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            className={`hero__slide ${slide === n ? 'hero__slide--on' : ''}`}
            onClick={() => setSlide(n)}
          >
            {String(n).padStart(2, '0')}
          </button>
        ))}
      </div>

      {/* Hero Body — kiri bawah */}
      <div className="hero__body">
        <p className="hero__eyebrow">{t.eyebrow}</p>
        <h1 className="hero__h1">
          <span>{t.h1Line1}</span>
          <br />
          <span>{t.h1Line2}</span>
        </h1>
        <p className="hero__lead">
          {t.lead1}
          <br />
          {t.lead2}
        </p>

        <button
          type="button"
          className="hero__cta"
          onClick={() => onScrollToSection?.('destinations')}
        >
          <span>{t.cta}</span>
          <span className="hero__cta-circle">→</span>
        </button>

        <div className="hero__drag" aria-hidden="true">
          <span>❖</span>
          <span>{t.drag}</span>
        </div>
      </div>
    </section>
  );
}
