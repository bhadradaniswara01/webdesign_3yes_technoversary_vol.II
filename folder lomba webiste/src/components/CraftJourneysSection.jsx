import { useEffect, useRef, useState } from 'react';

const JOURNEY_CARDS = [
  {
    id: 'descent',
    title: 'Ocean Descent',
    titleId: 'Menyelam ke Samudra',
    titleZh: '潜入蔚蓝海域',
    titleJa: '深海へのダイブ',
    titleKo: '푸른 바다 다이빙',
    tag: 'TURQUOISE WATER',
    img: '/images/foto tambahan/menyelam.jpeg',
    fannedRotate: -4,
    fannedY: 10,
  },
  {
    id: 'manta',
    title: 'Manta Haven',
    titleId: 'Suaka Pari Manta',
    titleZh: '蝠鲼天然乐园',
    titleJa: 'マンタの楽園',
    titleKo: '만타가오리 안식처',
    tag: 'WILD SANCTUARY',
    img: '/images/foto tambahan/manta.jpeg',
    fannedRotate: -7,
    fannedY: -12,
  },
  {
    id: 'reef',
    title: 'Coral & Turtle',
    titleId: 'Terumbu & Penyu Laut',
    titleZh: '珊瑚花园与海龟',
    titleJa: '珊瑚とウミガメ',
    titleKo: '산호 정원 & 바다거북',
    tag: 'LIVING REEF',
    img: '/images/foto tambahan/penyu.jpeg',
    fannedRotate: 1,
    fannedY: 8,
  },
  {
    id: 'aerial',
    title: 'Karst Paradise',
    titleId: 'Tebing Karst Purba',
    titleZh: '喀斯特仙境',
    titleJa: 'カルストの絶景',
    titleKo: '카르스트 지상낙원',
    tag: 'AERIAL VIEW',
    img: '/images/foto tambahan/tebing bagus1.jpeg',
    fannedRotate: 7,
    fannedY: -10,
  },
];

const TEXT_DATA = {
  en: {
    badge: 'Our Philosophy',
    h1Line1: "We don't sell trips.",
    h1Line2: 'We craft journeys.',
    quote:
      '"We built this journey for the traveler we used to be — curious, wild at heart, and seeking the raw, untamed soul of Nusa Penida."',
    clickHint: 'Click any photo to explore Manta Point',
  },
  id: {
    badge: 'Filosofi Kami',
    h1Line1: 'Bukan sekadar perjalanan.',
    h1Line2: 'Kami merajut cerita petualangan.',
    quote:
      '"Kami merancang petualangan ini bagi jiwa penjelajah sejati — yang haus keindahan murni, berani melangkah, dan mencintai alam liar Nusa Penida."',
    clickHint: 'Klik foto untuk menjelajahi Manta Point',
  },
  zh: {
    badge: '我们的初心',
    h1Line1: '我们不只售卖旅行。',
    h1Line2: '我们雕琢真正触动心灵的生命旅程。',
    quote:
      '“我们为那些渴望真正探索的旅行者打造这段旅程——心怀好奇，向往纯粹，寻找努沙佩尼达最原始壮丽的自然灵魂。”',
    clickHint: '点击照片探索蝠鲼点',
  },
  ja: {
    badge: '私たちのフィロソフィー',
    h1Line1: '単なる旅行の販売ではありません。',
    h1Line2: '心震える本物の旅を紡ぎます。',
    quote:
      '「かつて私たちが憧れた旅人のためにデザインしました——好奇心に満ち、ありのままのヌサペニダの魂を追い求めて。」',
    clickHint: '写真をクリックしてマンタポイントを探索',
  },
  ko: {
    badge: '우리의 여행 철학',
    h1Line1: '단순한 패키지 여행이 아닙니다.',
    h1Line2: '가슴 뛰는 여정을 직접 디자인합니다.',
    quote:
      '“우리가 꿈꿔왔던 진정한 모험가를 위해 설계했습니다. 순수한 호기심과 가공되지 않은 누사 페니다의 야생을 향해.”',
    clickHint: '사진을 클릭하여 만타 포인트를 탐험하세요',
  },
};

export default function CraftJourneysSection({ lang = 'en', onExploreManta, onSelectLocation }) {
  const sectionRef = useRef(null);
  const [fanned, setFanned] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Ketika pengunjung menggulir ke seksi ini, kartu bergerak dari posisi lurus ke miring dinamis
          if (entry.isIntersecting) {
            setFanned(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const t = TEXT_DATA[lang] || TEXT_DATA.en;

  return (
    <section className="craft-section" ref={sectionRef}>
      <div className="craft-container">
        {/* Badge Tilted Pill */}
        <div className="craft-badge-wrap reveal-header">
          <span className="craft-badge">{t.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="craft-title reveal-header">
          <span>{t.h1Line1}</span>
          <br />
          <span>{t.h1Line2}</span>
        </h2>

        {/* 4 Cards Gallery — Starts straight, fans out on view */}
        <div
          className={`craft-cards reveal-stagger ${fanned ? 'craft-cards--fanned' : ''}`}
          role="region"
          aria-label="Photo journey gallery"
        >
          {JOURNEY_CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;

            // Kartu mulai lurus (0deg, 0px), saat masuk halaman bergerak miring sesuai fannedRotate
            const rotateDeg = isHovered ? 0 : fanned ? card.fannedRotate : 0;
            const translateYPx = isHovered ? -16 : fanned ? card.fannedY : 0;
            const scale = isHovered ? 1.05 : 1;
            const zIndex = isHovered ? 12 : fanned ? 2 : 1;

            const cardTitle =
              lang === 'id'
                ? card.titleId
                : lang === 'zh'
                ? card.titleZh
                : lang === 'ja'
                ? card.titleJa
                : lang === 'ko'
                ? card.titleKo
                : card.title;

            return (
              <div
                key={card.id}
                className={`craft-card reveal-card ${isHovered ? 'craft-card--hover' : ''}`}
                style={{
                  transform: `rotate(${rotateDeg}deg) translateY(${translateYPx}px) scale(${scale})`,
                  zIndex,
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  if (card.id === 'aerial' && onSelectLocation) {
                    onSelectLocation({ id: 'kelingking' });
                  } else if (onSelectLocation) {
                    onSelectLocation({ id: 'manta' });
                  } else {
                    onExploreManta?.();
                  }
                }}
                title={t.clickHint}
              >
                <div className="craft-card__inner">
                  <img
                    src={card.img}
                    alt={cardTitle}
                    className="craft-card__img"
                    loading="lazy"
                  />
                  <div className="craft-card__glass-overlay">
                    <span className="craft-card__tag">{card.tag}</span>
                    <h3 className="craft-card__name">{cardTitle}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <p className="craft-quote reveal-header">{t.quote}</p>
      </div>
    </section>
  );
}
