import CraftJourneysSection from './CraftJourneysSection';
import IncludedExperienceSection from './IncludedExperienceSection';
import TravelerReviewsSection from './TravelerReviewsSection';
import FooterSection from './FooterSection';

const TEXT = {
  en: {
    heroTitle: 'About Us',
    heroSubtitle: 'A small island team, born and raised on Nusa Penida, sharing its wild side with the world.',
    storyEyebrow: 'OUR STORY',
    storyTitle: 'Locals first. Travelers second.',
    storyBody: [
      'Nusa Penida Journeys started with a handful of local guides who were tired of watching visitors rush through the island’s most beautiful places on crowded schedules.',
      'Today we design small-group and private journeys that move at the island’s pace — from first-light cliff walks to quiet snorkels with manta rays — always with respect for the reef, the community and the ceremonies that shape daily life here.',
    ],
    stats: [
      ['3,800+', 'Happy travelers'],
      ['4.9★', 'Average rating'],
      ['25+', 'Local guides'],
      ['100%', 'No-touch marine ethics'],
    ],
    valuesEyebrow: 'WHAT WE STAND FOR',
    values: [
      ['🌿', 'Responsible by default', 'Reef-safe practices, small groups and strict no-touch wildlife rules on every trip.'],
      ['🤝', 'Rooted in community', 'Local guides, family-run warungs and fair pay — your trip stays on the island.'],
      ['🛟', 'Safety without fuss', 'Licensed boats, trained crew, marine insurance and a 24/7 island concierge.'],
    ],
  },
  id: {
    heroTitle: 'Tentang Kami',
    heroSubtitle: 'Tim pulau kecil yang lahir dan besar di Nusa Penida, berbagi sisi liarnya dengan dunia.',
    storyEyebrow: 'KISAH KAMI',
    storyTitle: 'Warga lokal dulu. Wisatawan kemudian.',
    storyBody: [
      'Nusa Penida Journeys bermula dari beberapa pemandu lokal yang lelah melihat pengunjung terburu-buru melewati tempat terindah di pulau ini.',
      'Kini kami merancang perjalanan privat dan grup kecil yang mengikuti ritme pulau — dari jalan kaki tebing saat fajar hingga snorkeling tenang bersama pari manta — selalu dengan menghormati terumbu, masyarakat, dan upacara adat di sini.',
    ],
    stats: [
      ['3.800+', 'Wisatawan puas'],
      ['4,9★', 'Rating rata-rata'],
      ['25+', 'Pemandu lokal'],
      ['100%', 'Etika laut tanpa sentuh'],
    ],
    valuesEyebrow: 'YANG KAMI PEGANG',
    values: [
      ['🌿', 'Bertanggung jawab', 'Praktik ramah terumbu, grup kecil, dan aturan tanpa sentuh satwa laut di setiap trip.'],
      ['🤝', 'Berakar di komunitas', 'Pemandu lokal, warung keluarga, dan upah adil — manfaatnya tetap di pulau.'],
      ['🛟', 'Aman tanpa ribet', 'Boat berlisensi, kru terlatih, asuransi laut, dan concierge pulau 24/7.'],
    ],
  },
  zh: {
    heroTitle: '关于我们',
    heroSubtitle: '一支在努沙佩尼达土生土长的小团队，向世界分享这座岛的野性之美。',
    storyEyebrow: '我们的故事',
    storyTitle: '先是本地人，再是旅行者。',
    storyBody: [
      'Nusa Penida Journeys 起源于几位本地向导，他们不愿再看到游客匆匆赶场，错过岛上最美的风景。',
      '如今，我们设计小团与私人行程，依循海岛的节奏——从晨光悬崖徒步到与蝠鲼静谧浮潜——始终尊重珊瑚礁、社区与当地的宗教仪式。',
    ],
    stats: [
      ['3,800+', '满意旅客'],
      ['4.9★', '平均评分'],
      ['25+', '本地向导'],
      ['100%', '零接触海洋准则'],
    ],
    valuesEyebrow: '我们的理念',
    values: [
      ['🌿', '默认负责任', '每次行程均采用珊瑚友好做法、小团出行与零接触野生动物准则。'],
      ['🤝', '扎根社区', '本地向导、家庭式小餐馆与公平薪酬——收益留在岛上。'],
      ['🛟', '安心无忧', '持证船只、专业船员、海上保险与全天候岛上礼宾。'],
    ],
  },
  ja: {
    heroTitle: '私たちについて',
    heroSubtitle: 'ヌサペニダで生まれ育った小さな島チームが、島の野性味を世界へ届けます。',
    storyEyebrow: '私たちの物語',
    storyTitle: 'まず地元の人、次に旅人。',
    storyBody: [
      'Nusa Penida Journeysは、慌ただしい日程で島の絶景を駆け足で巡る旅行者を見て心を痛めた、数名の地元ガイドから始まりました。',
      '現在は島のペースに合わせた少人数・プライベートの旅をご提案しています。夜明けの断崖ウォークからマンタとの静かなシュノーケリングまで、サンゴ礁、地域社会、そして島の儀式への敬意を忘れません。',
    ],
    stats: [
      ['3,800+', 'ご満足いただいた旅行者'],
      ['4.9★', '平均評価'],
      ['25+', '地元ガイド'],
      ['100%', 'ノー・タッチ海洋倫理'],
    ],
    valuesEyebrow: '私たちの信念',
    values: [
      ['🌿', '責任ある旅を標準に', 'サンゴに優しい実践、少人数制、野生生物に触れない規則を全ての旅で徹底。'],
      ['🤝', '地域とともに', '地元ガイド、家族経営のワルン、適正な報酬。利益は島に還元されます。'],
      ['🛟', '安心を、さりげなく', '認可ボート、訓練されたクルー、海上保険、24時間対応の島コンシェルジュ。'],
    ],
  },
  ko: {
    heroTitle: '회사 소개',
    heroSubtitle: '누사 페니다에서 나고 자란 작은 섬 팀이 섬의 야생미를 세상과 나눕니다.',
    storyEyebrow: '우리의 이야기',
    storyTitle: '현지인이 먼저, 여행자는 그다음.',
    storyBody: [
      'Nusa Penida Journeys는 빡빡한 일정으로 섬의 가장 아름다운 곳을 서둘러 지나치는 여행자들을 안타깝게 여긴 현지 가이드 몇 명에서 시작되었습니다.',
      '지금은 섬의 속도에 맞춘 소규모·프라이빗 여정을 설계합니다. 새벽 절벽 트레킹부터 만타가오리와의 고요한 스노클링까지, 산호초와 지역 사회, 섬의 의식을 늘 존중합니다.',
    ],
    stats: [
      ['3,800+', '만족한 여행자'],
      ['4.9★', '평균 평점'],
      ['25+', '현지 가이드'],
      ['100%', '노-터치 해양 윤리'],
    ],
    valuesEyebrow: '우리가 지키는 것',
    values: [
      ['🌿', '기본이 책임 여행', '모든 여정에서 산호 친화 방식, 소규모 인원, 야생동물 노-터치 원칙을 지킵니다.'],
      ['🤝', '지역 사회와 함께', '현지 가이드, 가족 운영 와룽, 공정한 보수. 수익은 섬에 남습니다.'],
      ['🛟', '번거로움 없는 안전', '공인 보트, 훈련된 크루, 해상 보험, 24시간 섬 컨시어지.'],
    ],
  },
};


// Konten tambahan halaman About (misi/visi, perjalanan, tim, CTA)
// TODO: ganti nama tim & tahun perjalanan dengan data asli
const TEAM = [
  { name: 'I Wayan Sudarma', initials: 'WS' },
  { name: 'Ni Made Ayu Lestari', initials: 'AL' },
  { name: 'I Ketut Arya Putra', initials: 'KA' },
];

const EXTRA = {
  en: {
    missionEyebrow: 'MISSION & VISION',
    mission: ['Our mission', 'To share Nusa Penida through small, safe and respectful journeys that benefit the island’s people and protect its reef and cliffs.'],
    vision: ['Our vision', 'To be the most trusted local guide team in Bali’s islands — a model for travel that gives back more than it takes.'],
    timelineEyebrow: 'OUR JOURNEY',
    timeline: [
      ['2018', 'A few local guides start leading friends and family around the island.'],
      ['2020', 'First small-group manta snorkel trips with strict no-touch rules.'],
      ['2022', 'Reef-safe code introduced and a community fund started with local villages.'],
      ['2026', 'Over 3,800 travelers hosted and 25+ local guides on the team.'],
    ],
    teamEyebrow: 'MEET THE TEAM',
    teamTitle: 'The people behind your trip',
    roles: ['Founder & Lead Guide', 'Marine Safety Lead', 'Guest Experience Manager'],
    ctaTitle: 'Ready to meet the island?',
    ctaText: 'Tell us your dates and we will design the rest.',
    ctaBtn: 'Book Your Journey',
  },
  id: {
    missionEyebrow: 'MISI & VISI',
    mission: ['Misi kami', 'Memperkenalkan Nusa Penida lewat perjalanan kecil, aman, dan penuh hormat yang bermanfaat bagi warga pulau serta menjaga terumbu dan tebingnya.'],
    vision: ['Visi kami', 'Menjadi tim pemandu lokal paling tepercaya di pulau-pulau Bali — contoh wisata yang memberi lebih banyak daripada mengambil.'],
    timelineEyebrow: 'PERJALANAN KAMI',
    timeline: [
      ['2018', 'Beberapa pemandu lokal mulai mengantar teman dan keluarga berkeliling pulau.'],
      ['2020', 'Trip snorkeling manta grup kecil pertama dengan aturan tanpa sentuh yang ketat.'],
      ['2022', 'Kode ramah terumbu diperkenalkan dan dana komunitas bersama desa dimulai.'],
      ['2026', 'Lebih dari 3.800 wisatawan dilayani dan 25+ pemandu lokal dalam tim.'],
    ],
    teamEyebrow: 'KENALI TIM KAMI',
    teamTitle: 'Orang-orang di balik perjalananmu',
    roles: ['Pendiri & Pemandu Utama', 'Kepala Keselamatan Laut', 'Manajer Pengalaman Tamu'],
    ctaTitle: 'Siap berkenalan dengan pulau ini?',
    ctaText: 'Beri tahu tanggalmu, sisanya kami yang rancang.',
    ctaBtn: 'Pesan Perjalananmu',
  },
  zh: {
    missionEyebrow: '使命与愿景',
    mission: ['我们的使命', '通过小团、安全且尊重当地的旅程分享努沙佩尼达，造福岛民并守护珊瑚礁与悬崖。'],
    vision: ['我们的愿景', '成为巴厘岛周边岛屿最值得信赖的本地向导团队，成为回馈多于索取的旅行典范。'],
    timelineEyebrow: '我们的历程',
    timeline: [
      ['2018', '几位本地向导开始带朋友和家人游览全岛。'],
      ['2020', '首批严格遵守零接触规则的小团蝠鲼浮潜行程。'],
      ['2022', '推出珊瑚友好准则，并与当地村落共同设立社区基金。'],
      ['2026', '累计接待超过3,800位旅客，团队拥有25+位本地向导。'],
    ],
    teamEyebrow: '认识团队',
    teamTitle: '您旅程背后的人',
    roles: ['创始人兼首席向导', '海上安全负责人', '客户体验经理'],
    ctaTitle: '准备好认识这座岛了吗？',
    ctaText: '告诉我们您的日期，其余交给我们设计。',
    ctaBtn: '预订您的旅程',
  },
  ja: {
    missionEyebrow: 'ミッション＆ビジョン',
    mission: ['私たちのミッション', '少人数で安全、敬意あるツアーを通じてヌサペニダの魅力を伝え、島の人々に貢献しながらサンゴ礁と断崖を守ります。'],
    vision: ['私たちのビジョン', 'バリ島周辺の島々で最も信頼される地元ガイドチームとなり、与える以上に還元する旅のモデルを目指します。'],
    timelineEyebrow: '私たちの歩み',
    timeline: [
      ['2018', '数名の地元ガイドが友人や家族を島内へ案内し始める。'],
      ['2020', 'ノー・タッチを徹底した少人数マンタ・シュノーケリングを開始。'],
      ['2022', 'サンゴに優しい行動規範を導入し、地元の村と地域基金を設立。'],
      ['2026', '累計3,800人以上をご案内、地元ガイドは25名以上に。'],
    ],
    teamEyebrow: 'チーム紹介',
    teamTitle: 'あなたの旅を支える人たち',
    roles: ['創業者兼リードガイド', '海上安全責任者', 'ゲスト体験マネージャー'],
    ctaTitle: '島に会いに行きませんか？',
    ctaText: 'ご希望の日程をお知らせください。あとは私たちにお任せを。',
    ctaBtn: '旅を予約する',
  },
  ko: {
    missionEyebrow: '미션 & 비전',
    mission: ['우리의 미션', '소규모의 안전하고 존중하는 여정으로 누사 페니다를 소개하며, 섬 주민에게 이익이 되고 산호초와 절벽을 보호합니다.'],
    vision: ['우리의 비전', '발리 섬들에서 가장 신뢰받는 현지 가이드 팀이 되어, 받는 것보다 더 많이 돌려주는 여행의 본보기가 되는 것입니다.'],
    timelineEyebrow: '우리의 여정',
    timeline: [
      ['2018', '현지 가이드 몇 명이 친구와 가족을 섬 곳곳으로 안내하기 시작했습니다.'],
      ['2020', '노-터치 원칙을 엄격히 지키는 소규모 만타 스노클링을 시작했습니다.'],
      ['2022', '산호 친화 수칙을 도입하고 지역 마을과 함께 공동체 기금을 만들었습니다.'],
      ['2026', '누적 3,800명 이상의 여행자와 25명 이상의 현지 가이드가 함께합니다.'],
    ],
    teamEyebrow: '팀 소개',
    teamTitle: '여행 뒤에 있는 사람들',
    roles: ['설립자 & 리드 가이드', '해상 안전 책임자', '게스트 경험 매니저'],
    ctaTitle: '섬을 만날 준비 되셨나요?',
    ctaText: '날짜를 알려주시면 나머지는 저희가 설계합니다.',
    ctaBtn: '여행 예약하기',
  },
};

export default function AboutPage({ lang = 'en', onSelectLocation, onNavigateToPage }) {
  const t = TEXT[lang] || TEXT.en;
  const x = EXTRA[lang] || EXTRA.en;

  return (
    <div className="dest-page about-page">
      <section className="dest-page__hero">
        <img src="/images/foto tambahan/menyelam.jpeg" alt="" className="dest-page__hero-bg-img" />
        <div className="dest-page__hero-overlay" />
        <div className="dest-page__hero-inner">
          <h1 className="dest-page__hero-title">{t.heroTitle}</h1>
          <p className="dest-page__hero-subtitle">{t.heroSubtitle}</p>
        </div>
      </section>

      <section className="about-page__story">
        <div className="about-page__story-inner">
          <div className="about-page__story-text reveal-header">
            <span className="book-page__eyebrow">{t.storyEyebrow}</span>
            <h2 className="about-page__story-title">{t.storyTitle}</h2>
            {t.storyBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="about-page__stats reveal-stagger">
            {t.stats.map(([num, label]) => (
              <div key={label} className="about-page__stat reveal-card">
                <strong>{num}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__mission">
        <div className="about-page__mission-inner">
          <span className="book-page__eyebrow reveal-header">{x.missionEyebrow}</span>
          <div className="about-page__mission-grid reveal-stagger">
            {[x.mission, x.vision].map(([title, text], i) => (
              <div key={title} className="about-page__mission-card reveal-card">
                <span aria-hidden="true">{i === 0 ? '🎯' : '🔭'}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CraftJourneysSection lang={lang} onSelectLocation={onSelectLocation} />

      <section className="about-page__values">
        <div className="about-page__values-inner">
          <span className="book-page__eyebrow reveal-header">{t.valuesEyebrow}</span>
          <div className="about-page__values-grid reveal-stagger">
            {t.values.map(([icon, title, desc]) => (
              <div key={title} className="about-page__value reveal-card">
                <span aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__timeline">
        <div className="about-page__timeline-inner">
          <span className="book-page__eyebrow reveal-header">{x.timelineEyebrow}</span>
          <ol className="about-page__timeline-list reveal-stagger">
            {x.timeline.map(([year, text]) => (
              <li key={year} className="about-page__timeline-item reveal-card">
                <strong>{year}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-page__team">
        <div className="about-page__team-inner">
          <span className="book-page__eyebrow reveal-header">{x.teamEyebrow}</span>
          <h2 className="about-page__team-title reveal-header">{x.teamTitle}</h2>
          <div className="about-page__team-grid reveal-stagger">
            {TEAM.map((m, i) => (
              <div key={m.name} className="about-page__member reveal-card">
                <div className="about-page__avatar" aria-hidden="true">{m.initials}</div>
                <h3>{m.name}</h3>
                <p>{x.roles[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="about-page__cta-inner reveal-header">
          <h2>{x.ctaTitle}</h2>
          <p>{x.ctaText}</p>
          <button
            type="button"
            className="book-page__btn"
            onClick={() => {
              onNavigateToPage?.('book');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          >
            {x.ctaBtn}
          </button>
        </div>
      </section>

      <IncludedExperienceSection lang={lang} />
      <TravelerReviewsSection lang={lang} />
      <FooterSection lang={lang} />
    </div>
  );
}
