import React from 'react';

const translations = {
  en: {
    tagline: 'Your gateway to the raw beauty of Nusa Penida — cliffs, crystals, mantas, and silence.',
    cta: 'Plan Your Escape',
    newsletter: 'Island drops, hidden gems & early-bird offers — straight to your inbox.',
    emailPlaceholder: 'Your e-mail',
    columns: {
      destinations: {
        heading: 'DESTINATIONS',
        links: ['Kelingking Beach', 'Manta Point', 'Broken Beach', "Angel's Billabong", 'Diamond Beach', 'Crystal Bay'],
      },
      experiences: {
        heading: 'EXPERIENCES',
        links: ['Snorkeling & Diving', 'Sunrise Trekking', 'Manta Ray Swim', 'Cliffside Picnic', 'Waterfalls Tour', 'Island Hopping'],
      },
      company: {
        heading: 'COMPANY',
        links: ['About Us', 'Our Guides', 'Reviews', 'Blog', 'Contact'],
      },
    },
    copyright: '© 2026 Nusa Penida Journeys. All rights reserved.',
  },
  id: {
    tagline: 'Pintu gerbang menuju keindahan liar Nusa Penida — tebing, kristal, pari, dan kesunyian.',
    cta: 'Rencanakan Perjalanan',
    newsletter: 'Info pulau, permata tersembunyi & penawaran spesial — langsung ke kotak masukmu.',
    emailPlaceholder: 'Alamat e-mail',
    columns: {
      destinations: {
        heading: 'DESTINASI',
        links: ['Pantai Kelingking', 'Manta Point', 'Broken Beach', "Angel's Billabong", 'Pantai Diamond', 'Crystal Bay'],
      },
      experiences: {
        heading: 'PENGALAMAN',
        links: ['Snorkeling & Menyelam', 'Trekking Matahari Terbit', 'Berenang dengan Manta', 'Piknik di Tebing', 'Tur Air Terjun', 'Island Hopping'],
      },
      company: {
        heading: 'PERUSAHAAN',
        links: ['Tentang Kami', 'Pemandu Kami', 'Ulasan', 'Blog', 'Kontak'],
      },
    },
    copyright: '© 2026 Nusa Penida Journeys. Semua hak dilindungi.',
  },
  zh: {
    tagline: '通往努沙佩尼达原始之美的门户——悬崖、水晶、蝠鲼与宁静。',
    cta: '规划您的旅程',
    newsletter: '岛屿资讯、隐藏宝地与早鸟优惠——直达您的邮箱。',
    emailPlaceholder: '您的邮箱',
    columns: {
      destinations: {
        heading: '目的地',
        links: ['克林金海滩', '蝠鲼点', '破碎海滩', '天使比拉邦', '钻石海滩', '水晶湾'],
      },
      experiences: {
        heading: '体验项目',
        links: ['浮潜与潜水', '日出徒步', '与蝠鲼共游', '悬崖野餐', '瀑布游览', '跳岛之旅'],
      },
      company: {
        heading: '关于我们',
        links: ['关于我们', '我们的导游', '评价', '博客', '联系我们'],
      },
    },
    copyright: '© 2026 努沙佩尼达旅程。保留所有权利。',
  },
  ja: {
    tagline: 'ヌサペニダの原始的な美しさへの扉—崖、クリスタル、マンタ、そして静寂。',
    cta: '旅を計画する',
    newsletter: '島の情報、穴場スポット、早期割引をメールでお届けします。',
    emailPlaceholder: 'メールアドレス',
    columns: {
      destinations: {
        heading: '目的地',
        links: ['クリンキン・ビーチ', 'マンタポイント', 'ブロークン・ビーチ', 'エンジェルス・ビラボン', 'ダイヤモンドビーチ', 'クリスタル・ベイ'],
      },
      experiences: {
        heading: '体験',
        links: ['シュノーケル＆ダイビング', '日の出トレッキング', 'マンタと一緒に泳ぐ', '崖の上のピクニック', '滝ツアー', '島巡り'],
      },
      company: {
        heading: '会社情報',
        links: ['私たちについて', 'ガイド紹介', 'レビュー', 'ブログ', 'お問い合わせ'],
      },
    },
    copyright: '© 2026 ヌサペニダジャーニーズ。全著作権所有。',
  },
  ko: {
    tagline: '누사 페니다의 거친 아름다움으로 가는 관문 — 절벽, 크리스탈, 만타, 그리고 고요함.',
    cta: '여행 계획하기',
    newsletter: '섬 소식, 숨겨진 보석 & 얼리버드 혜택 — 받은 편지함으로 바로 받으세요.',
    emailPlaceholder: '이메일 주소',
    columns: {
      destinations: {
        heading: '여행지',
        links: ['클링킹 해변', '만타 포인트', '브로큰 비치', '엔젤스 빌라봉', '다이아몬드 해변', '크리스탈 베이'],
      },
      experiences: {
        heading: '체험',
        links: ['스노클링 & 다이빙', '일출 트레킹', '만타레이와 수영', '절벽 피크닉', '폭포 투어', '섬 호핑'],
      },
      company: {
        heading: '회사 소개',
        links: ['회사 소개', '가이드 소개', '리뷰', '블로그', '문의하기'],
      },
    },
    copyright: '© 2026 누사 페니다 저니스. 모든 권리 보유.',
  },
};

export default function FooterSection({ lang = 'en' }) {
  const t = translations[lang] || translations.en;
  const [email, setEmail] = React.useState('');

  return (
    <footer className="site-footer">
      {/* ── TOP CONTENT ── */}
      <div className="footer-top">
        {/* Left: Brand + tagline + CTA */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            <span>NUSA PENIDA</span>
          </div>
          <p className="footer-tagline">{t.tagline}</p>
          <a href="#hero" className="footer-cta-btn">
            <span>{t.cta}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Middle: Link columns */}
        <div className="footer-links-grid">
          {Object.values(t.columns).map((col) => (
            <div key={col.heading} className="footer-link-col">
              <h4 className="footer-col-heading">{col.heading}</h4>
              <ul className="footer-link-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: Newsletter */}
        <div className="footer-newsletter-col">
          <h4 className="footer-col-heading">NEWSLETTER</h4>
          <p className="footer-newsletter-desc">{t.newsletter}</p>
          <div className="footer-email-row">
            <input
              type="email"
              className="footer-email-input"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="footer-email-btn" aria-label="Subscribe">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="footer-divider" />

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <span className="footer-copyright">{t.copyright}</span>
        <div className="footer-socials">
          {/* Instagram */}
          <a href="#" className="footer-social-btn" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* Pinterest */}
          <a href="#" className="footer-social-btn" aria-label="Pinterest">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.1-2.37 3.1-5.17 0-2.14-1.44-3.74-4.04-3.74-2.94 0-4.77 2.2-4.77 4.65 0 .84.24 1.44.62 1.9.07.08.08.16.06.25l-.23.93c-.04.14-.13.18-.3.11-1.11-.46-1.63-1.7-1.63-3.1 0-2.9 2.44-6.37 7.3-6.37 3.9 0 6.47 2.83 6.47 5.87 0 4.01-2.22 7-5.49 7-1.1 0-2.14-.6-2.5-1.27l-.69 2.65c-.25.96-.93 2.16-1.38 2.89.78.24 1.6.37 2.46.37 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" className="footer-social-btn" aria-label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── HUGE BRAND WORDMARK (HOLIVORA style) ── */}
      <div className="footer-wordmark" aria-hidden="true">
        NUSA PENIDA
      </div>
    </footer>
  );
}
