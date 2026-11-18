// Section card spot tambahan di dalam halaman detail (Kelingking / Manta).
// Kelingking -> Broken Beach & Angel's Billabong
// Manta      -> Diamond Beach & Crystal Bay
import { DESTINATIONS_DATA } from '../data/destinationSpotsData';

const SECTION_TEXT = {
  kelingking: {
    en: { eyebrow: 'ALSO IN THIS EXPEDITION', title: 'Nearby Wonders on the West Coast' },
    id: { eyebrow: 'TERMASUK DALAM EKSPEDISI INI', title: 'Keajaiban Lain di Pesisir Barat' },
    zh: { eyebrow: '本次行程同时包含', title: '西海岸的更多奇景' },
    ja: { eyebrow: 'この旅程に含まれるスポット', title: '西海岸のもうひとつの絶景' },
    ko: { eyebrow: '이 일정에 함께 포함', title: '서부 해안의 또 다른 명소' },
  },
  manta: {
    en: { eyebrow: 'ALSO IN THIS EXPEDITION', title: 'More Blue Escapes Along the Coast' },
    id: { eyebrow: 'TERMASUK DALAM EKSPEDISI INI', title: 'Destinasi Biru Lainnya di Sepanjang Pesisir' },
    zh: { eyebrow: '本次行程同时包含', title: '沿岸更多蔚蓝秘境' },
    ja: { eyebrow: 'この旅程に含まれるスポット', title: '海岸沿いのもうひとつの青い楽園' },
    ko: { eyebrow: '이 일정에 함께 포함', title: '해안을 따라 만나는 또 다른 블루 명소' },
  },
};

const SPOT_IDS = {
  kelingking: ['broken', 'angel'],
  manta: ['diamond', 'crystal'],
};

export default function IncludedSpotsSection({ parent = 'kelingking', lang = 'en' }) {
  const txt = (SECTION_TEXT[parent] || SECTION_TEXT.kelingking)[lang] || SECTION_TEXT[parent].en;
  const spots = (SPOT_IDS[parent] || [])
    .map((id) => DESTINATIONS_DATA.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <section className="manta-packages-section inc-spots-section" id={`${parent}-included-spots`}>
      <div className="manta-packages-container">
        <div className="manta-packages-header manta-reveal-item">
          <div>
            <span className="manta-section-eyebrow">{txt.eyebrow}</span>
            <h2 className="manta-section-title">{txt.title}</h2>
          </div>
        </div>

        <div className="inc-spots-grid">
          {spots.map((spot, idx) => {
            const title = spot.title[lang] || spot.title.en;
            return (
              <article
                key={spot.id}
                className="inc-spot-card manta-reveal-item"
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                <div className="inc-spot-card__media">
                  <img src={spot.img} alt={title} loading="lazy" />
                  <span className="inc-spot-card__badge">{spot.badge[lang] || spot.badge.en}</span>
                </div>
                <div className="inc-spot-card__body">
                  <h3 className="inc-spot-card__title">{title}</h3>
                  <p className="inc-spot-card__subtext">{spot.subtext[lang] || spot.subtext.en}</p>
                  <p className="inc-spot-card__desc">{spot.desc[lang] || spot.desc.en}</p>
                  <div className="inc-spot-card__meta">
                    <span>{spot.location}</span>
                    <span className="inc-spot-card__rating">
                      <span className="inc-spot-card__stars">{spot.rating}</span> {spot.reviewsCount}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
