import { useEffect, useRef, useState } from 'react';

const ARCHIVE_TEXTS = {
  en: {
    brand: 'NUSA PENIDA ARCHIVES',
    titleLine1: 'Trips Worth',
    titleLine2: 'Taking',
    subtitle:
      'Six timeless sanctuaries sculpted by ocean swells into limestone cliffs. From silent encounters with oceanic mantas to world-famous clifftop panoramas.',
    bookCta: '↳ PLAN YOUR 6-DESTINATION ESCAPE',
    destinations: [
      { num: '01', name: 'KELINGKING BEACH', label: 'Kelingking' },
      { num: '02', name: 'MANTA POINT', label: 'Manta Point' },
      { num: '03', name: 'BROKEN BEACH', label: 'Broken Beach' },
      { num: '04', name: "ANGEL'S BILLABONG", label: "Angel's Billabong" },
      { num: '05', name: 'DIAMOND BEACH', label: 'Diamond Beach' },
      { num: '06', name: 'CRYSTAL BAY', label: 'Crystal Bay' },
    ],
  },
  id: {
    brand: 'ARSIP NUSA PENIDA',
    titleLine1: 'Petualangan yang',
    titleLine2: 'Wajib Dijalani',
    subtitle:
      'Enam mahakarya alam yang terukir di tebing karang Nusa Penida. Dari berenang bersama pari manta raksasa hingga panorama senja terindah di Bali.',
    bookCta: '↳ RENCANAKAN 6 DESTINASI IMPIAN',
    destinations: [
      { num: '01', name: 'PANTAI KELINGKING', label: 'Kelingking' },
      { num: '02', name: 'MANTA POINT', label: 'Manta Point' },
      { num: '03', name: 'BROKEN BEACH', label: 'Broken Beach' },
      { num: '04', name: "ANGEL'S BILLABONG", label: "Angel's Billabong" },
      { num: '05', name: 'PANTAI DIAMOND', label: 'Diamond Beach' },
      { num: '06', name: 'TELUK CRYSTAL BAY', label: 'Crystal Bay' },
    ],
  },
  zh: {
    brand: '努沙佩尼达典藏档案',
    titleLine1: '不虚此生的',
    titleLine2: '传奇之旅',
    subtitle:
      '大自然在海崖绝壁上镌刻的六大旷世秘境。从深海蝠鲼同游到震撼世界的恐龙湾悬崖，尽享纯粹无瑕的海岛奇迹。',
    bookCta: '↳ 定制6大经典胜地航线',
    destinations: [
      { num: '01', name: '精灵坠崖霸王龙海滩', label: 'Kelingking' },
      { num: '02', name: '蝠鲼海域生态保护区', label: 'Manta Point' },
      { num: '03', name: '天仙裂痕海蚀天然石拱', label: 'Broken Beach' },
      { num: '04', name: '天神无边天然潮汐池', label: "Angel's Billabong" },
      { num: '05', name: '钻石海滩绝壁石阶', label: 'Diamond Beach' },
      { num: '06', name: '水晶湾金色日落圣境', label: 'Crystal Bay' },
    ],
  },
  ja: {
    brand: 'ヌサペニダ アーカイブ',
    titleLine1: '人生で一度は',
    titleLine2: '訪れるべき絶景',
    subtitle:
      '大自然が白亜の断崖に刻み込んだ6つの奇跡。野生マンタとの優雅な出会いから世界屈指の断崖絶景まで、心揺さぶる旅へ。',
    bookCta: '↳ 6大絶景ツアーを計画する',
    destinations: [
      { num: '01', name: 'クリンキンビーチ', label: 'Kelingking' },
      { num: '02', name: 'マンタポイント', label: 'Manta Point' },
      { num: '03', name: 'ブロークンビーチ', label: 'Broken Beach' },
      { num: '04', name: 'エンジェルズ・ビラボン', label: "Angel's Billabong" },
      { num: '05', name: 'ダイヤモンドビーチ', label: 'Diamond Beach' },
      { num: '06', name: 'クリスタルベイ', label: 'Crystal Bay' },
    ],
  },
  ko: {
    brand: '누사 페니다 아카이브',
    titleLine1: '살아가며 반드시',
    titleLine2: '만나야 할 순간',
    subtitle:
      '자연이 석회암 절벽에 빚어낸 6가지 불멸의 걸작. 거대한 만타가오리와의 유영부터 눈부신 카르스트 해안 절경까지.',
    bookCta: '↳ 6대 시그니처 익스페디션 설계',
    destinations: [
      { num: '01', name: '켈링킹 비치', label: 'Kelingking' },
      { num: '02', name: '만타 포인트', label: 'Manta Point' },
      { num: '03', name: '브로큰 비치', label: 'Broken Beach' },
      { num: '04', name: '엔젤스 빌라봉', label: "Angel's Billabong" },
      { num: '05', name: '다이아몬드 비치', label: 'Diamond Beach' },
      { num: '06', name: '크리스탈 베이', label: 'Crystal Bay' },
    ],
  },
};

// 6 Authentic High-Resolution Photos corresponding strictly to the 6 destinations
const POLAROIDS_6 = [
  {
    id: 'kelingking',
    key: '01',
    img: '/images/foto tambahan/kelingking.jpeg',
    rotate: -3.5,
    shiftX: -8,
    shiftY: -6,
  },
  {
    id: 'manta',
    key: '02',
    img: '/images/foto tambahan/manta point.jpeg',
    rotate: 3.2,
    shiftX: 10,
    shiftY: -12,
  },
  {
    id: 'broken',
    key: '03',
    img: '/images/foto tambahan/broken.jpeg',
    rotate: -2.2,
    shiftX: -14,
    shiftY: 8,
  },
  {
    id: 'angel',
    key: '04',
    img: '/images/foto tambahan/anggels billabong.jpeg',
    rotate: 3.8,
    shiftX: 12,
    shiftY: 4,
  },
  {
    id: 'diamond',
    key: '05',
    img: '/images/foto tambahan/diamond.jpeg',
    rotate: -3.2,
    shiftX: -10,
    shiftY: 14,
  },
  {
    id: 'crystal',
    key: '06',
    img: '/images/foto tambahan/terumbu karang.jpeg',
    rotate: 2.4,
    shiftX: 8,
    shiftY: 10,
  },
];

export default function IslandArchivesSection({ lang = 'en' }) {
  const t = ARCHIVE_TEXTS[lang] || ARCHIVE_TEXTS.en;
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null);

  // Smooth emergence triggered on scroll when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const target = sectionRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="archive-section" id="archive" ref={sectionRef}>
      <div className="archive-container">
        {/* Left Side: Brand, Editorial Title, Subtitle, 6 Numbered Destinations, CTA */}
        <div className="archive-left">
          <span className="archive-brand">{t.brand}</span>

          <h2 className="archive-title">
            <span>{t.titleLine1}</span>
            <br />
            <span className="archive-title--accent">{t.titleLine2}</span>
          </h2>

          <p className="archive-desc">{t.subtitle}</p>

          <div className="archive-destinations-list">
            {t.destinations.map((dest) => (
              <div key={dest.num} className="archive-dest-item">
                <span className="archive-dest-num">{dest.num}</span>
                <span className="archive-dest-name">{dest.name}</span>
              </div>
            ))}
          </div>

          <a
            href="#destinations"
            className="archive-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.bookCta}
          </a>
        </div>

        {/* Right Side: Organic Scattered Polaroid Collage (FarAway Inspired) with Scroll Emergence */}
        <div className="archive-scatter-canvas">
          {POLAROIDS_6.map((p, index) => {
            const destMeta = t.destinations[index] || {};
            const isHovered = hoveredPolaroid === p.id;

            return (
              <div
                key={p.id}
                className={`archive-polaroid ${isRevealed ? 'archive-polaroid--revealed' : ''} ${
                  isHovered ? 'archive-polaroid--hovered' : ''
                }`}
                style={{
                  '--target-rotate': `${p.rotate}deg`,
                  '--target-x': `${p.shiftX}px`,
                  '--target-y': `${p.shiftY}px`,
                  '--delay': `${index * 130}ms`,
                }}
                onMouseEnter={() => setHoveredPolaroid(p.id)}
                onMouseLeave={() => setHoveredPolaroid(null)}
              >
                {/* Pure Polaroid Photo Frame — No badges, no heavy text */}
                <div className="archive-polaroid__photo-frame">
                  <img
                    src={p.img}
                    alt={destMeta.label || p.id}
                    className="archive-polaroid__img"
                    loading="lazy"
                  />
                </div>

                {/* Polaroid Bottom Margin Chin: Delicate subtle handwritten caption */}
                <div className="archive-polaroid__chin">
                  <span className="archive-polaroid__handwritten">
                    {destMeta.label || p.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
