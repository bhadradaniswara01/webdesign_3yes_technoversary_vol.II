import { useState } from 'react';
import TripPlannerSection from './TripPlannerSection';
import FooterSection from './FooterSection';
import ContactSection from './ContactSection';
import FaqSection from './FaqSection';

const PACKAGES = [
  { id: 'manta', icon: '🌊' },
  { id: 'kelingking', icon: '🏔️' },
  { id: 'escape', icon: '🏝️' },
  { id: 'custom', icon: '✨' },
];

const TEXT = {
  en: {
    heroTitle: 'Book Your Journey',
    heroSubtitle: 'Tell us when you want to go. Our island team replies within 24 hours with a tailored itinerary.',
    formEyebrow: 'RESERVATION REQUEST',
    formTitle: 'Plan your Nusa Penida escape',
    formSub: 'No payment required now — we confirm availability first.',
    packageLabel: 'Choose an experience',
    packages: {
      manta: ['Manta Point Safari', 'Half-day · Snorkeling with manta rays'],
      kelingking: ['Kelingking Sunset', 'Half-day · T-Rex cliff & beach'],
      escape: ['3D2N Luxury Escape', 'Full island · VIP boat & private 4WD'],
      custom: ['Custom Journey', 'Tell us what you have in mind'],
    },
    date: 'Travel date',
    guests: 'Guests',
    guestsUnit: (n) => (n === 1 ? '1 guest' : `${n} guests`),
    name: 'Full name',
    namePh: 'Your name',
    contact: 'Email or WhatsApp',
    contactPh: 'you@email.com / +62…',
    notes: 'Special requests',
    notesPh: 'Hotel pick-up, diving experience, dietary needs…',
    submit: 'Send Reservation Request',
    successTitle: 'Request received!',
    successText: 'Thank you — our concierge will contact you within 24 hours to confirm your journey.',
    again: 'Make another request',
    asideTitle: 'Every booking includes',
    perks: [
      'Private licensed island guide',
      'Hotel pick-up & drop-off',
      'Marine insurance & safety gear',
      'Free date change for weather',
    ],
    asideNote: 'Questions? Chat with our team on WhatsApp anytime.',
    stepsTitle: 'How booking works',
    steps: [
      ['Send request', 'Pick your experience and preferred date.'],
      ['We confirm', 'Availability and a tailored quote within 24 hours.'],
      ['Enjoy the island', 'Your guide meets you on the day. Simple.'],
    ],
  },
  id: {
    heroTitle: 'Pesan Perjalananmu',
    heroSubtitle: 'Beri tahu kapan kamu ingin berangkat. Tim pulau kami membalas dalam 24 jam dengan itinerari khusus.',
    formEyebrow: 'PERMINTAAN RESERVASI',
    formTitle: 'Rencanakan pelarian ke Nusa Penida',
    formSub: 'Tanpa pembayaran sekarang — kami konfirmasi ketersediaan dulu.',
    packageLabel: 'Pilih pengalaman',
    packages: {
      manta: ['Safari Manta Point', 'Setengah hari · Snorkeling bersama pari manta'],
      kelingking: ['Sunset Kelingking', 'Setengah hari · Tebing T-Rex & pantai'],
      escape: ['Escape Mewah 3H2M', 'Keliling pulau · Boat VIP & 4WD privat'],
      custom: ['Perjalanan Kustom', 'Ceritakan yang kamu inginkan'],
    },
    date: 'Tanggal perjalanan',
    guests: 'Jumlah tamu',
    guestsUnit: (n) => `${n} tamu`,
    name: 'Nama lengkap',
    namePh: 'Nama kamu',
    contact: 'Email atau WhatsApp',
    contactPh: 'kamu@email.com / +62…',
    notes: 'Permintaan khusus',
    notesPh: 'Jemput hotel, pengalaman menyelam, kebutuhan makanan…',
    submit: 'Kirim Permintaan Reservasi',
    successTitle: 'Permintaan diterima!',
    successText: 'Terima kasih — concierge kami akan menghubungi kamu dalam 24 jam untuk konfirmasi.',
    again: 'Buat permintaan lain',
    asideTitle: 'Setiap pemesanan termasuk',
    perks: [
      'Pemandu pulau berlisensi privat',
      'Antar-jemput hotel',
      'Asuransi laut & perlengkapan keselamatan',
      'Gratis ubah tanggal jika cuaca buruk',
    ],
    asideNote: 'Ada pertanyaan? Chat tim kami lewat WhatsApp kapan saja.',
    stepsTitle: 'Cara memesan',
    steps: [
      ['Kirim permintaan', 'Pilih pengalaman dan tanggal yang diinginkan.'],
      ['Kami konfirmasi', 'Ketersediaan dan penawaran dalam 24 jam.'],
      ['Nikmati pulau', 'Pemandu menemuimu di hari-H. Mudah.'],
    ],
  },
  zh: {
    heroTitle: '预订您的旅程',
    heroSubtitle: '告诉我们出发时间，岛上团队将在24小时内回复专属行程。',
    formEyebrow: '预订申请',
    formTitle: '规划您的努沙佩尼达之旅',
    formSub: '现在无需付款——我们会先确认档期。',
    packageLabel: '选择体验',
    packages: {
      manta: ['蝠鲼点之旅', '半日 · 与蝠鲼一起浮潜'],
      kelingking: ['克林金日落', '半日 · 霸王龙悬崖与海滩'],
      escape: ['3天2晚奢华之旅', '环岛 · VIP快艇与私人四驱'],
      custom: ['定制行程', '告诉我们您的想法'],
    },
    date: '出行日期',
    guests: '人数',
    guestsUnit: (n) => `${n} 位`,
    name: '姓名',
    namePh: '您的姓名',
    contact: '邮箱或 WhatsApp',
    contactPh: 'you@email.com / +62…',
    notes: '特殊需求',
    notesPh: '酒店接送、潜水经验、饮食需求…',
    submit: '提交预订申请',
    successTitle: '已收到申请！',
    successText: '感谢您——我们的礼宾团队将在24小时内联系您确认行程。',
    again: '再提交一个申请',
    asideTitle: '每笔预订均包含',
    perks: ['持证私人岛屿向导', '酒店接送', '海上保险与安全装备', '天气原因免费改期'],
    asideNote: '有疑问？随时通过 WhatsApp 联系我们。',
    stepsTitle: '预订流程',
    steps: [
      ['提交申请', '选择体验和期望日期。'],
      ['我们确认', '24小时内确认档期并报价。'],
      ['尽享海岛', '当天向导与您会合，就这么简单。'],
    ],
  },
  ja: {
    heroTitle: '旅を予約する',
    heroSubtitle: 'ご希望の日程をお知らせください。島のチームが24時間以内に専用プランをご提案します。',
    formEyebrow: '予約リクエスト',
    formTitle: 'ヌサペニダの旅を計画',
    formSub: '今はお支払い不要です。まず空き状況を確認します。',
    packageLabel: '体験を選ぶ',
    packages: {
      manta: ['マンタポイント・サファリ', '半日 · マンタとシュノーケリング'],
      kelingking: ['ケリンキング・サンセット', '半日 · T-Rex崖とビーチ'],
      escape: ['3泊2日ラグジュアリー', '島一周 · VIPボート＆専用4WD'],
      custom: ['カスタム旅程', 'ご希望をお聞かせください'],
    },
    date: '旅行日',
    guests: '人数',
    guestsUnit: (n) => `${n}名`,
    name: 'お名前',
    namePh: 'お名前',
    contact: 'メールまたはWhatsApp',
    contactPh: 'you@email.com / +62…',
    notes: 'ご要望',
    notesPh: 'ホテル送迎、ダイビング経験、食事制限など…',
    submit: '予約リクエストを送信',
    successTitle: 'リクエストを受け付けました！',
    successText: 'ありがとうございます。24時間以内にコンシェルジュよりご連絡します。',
    again: '別のリクエストを送る',
    asideTitle: '全ての予約に含まれるもの',
    perks: ['認定プライベートガイド', 'ホテル送迎', '海上保険・安全装備', '悪天候時は日程変更無料'],
    asideNote: 'ご質問はWhatsAppでいつでもどうぞ。',
    stepsTitle: 'ご予約の流れ',
    steps: [
      ['リクエスト送信', '体験とご希望日を選択。'],
      ['確認', '24時間以内に空き状況とお見積り。'],
      ['島を満喫', '当日ガイドがお迎えします。'],
    ],
  },
  ko: {
    heroTitle: '여행 예약하기',
    heroSubtitle: '원하시는 날짜를 알려주세요. 현지 팀이 24시간 내에 맞춤 일정을 보내드립니다.',
    formEyebrow: '예약 요청',
    formTitle: '누사 페니다 여행 계획하기',
    formSub: '지금은 결제가 필요 없습니다. 먼저 예약 가능 여부를 확인합니다.',
    packageLabel: '체험 선택',
    packages: {
      manta: ['만타 포인트 사파리', '반일 · 만타가오리와 스노클링'],
      kelingking: ['켈링킹 선셋', '반일 · T-Rex 절벽 & 해변'],
      escape: ['3박 4일 럭셔리', '섬 일주 · VIP 보트 & 프라이빗 4WD'],
      custom: ['맞춤 여행', '원하시는 여행을 알려주세요'],
    },
    date: '여행 날짜',
    guests: '인원',
    guestsUnit: (n) => `${n}명`,
    name: '이름',
    namePh: '이름',
    contact: '이메일 또는 WhatsApp',
    contactPh: 'you@email.com / +62…',
    notes: '요청 사항',
    notesPh: '호텔 픽업, 다이빙 경험, 식단 요구 등…',
    submit: '예약 요청 보내기',
    successTitle: '요청이 접수되었습니다!',
    successText: '감사합니다. 컨시어지가 24시간 내에 연락드려 일정을 확정합니다.',
    again: '다른 요청 보내기',
    asideTitle: '모든 예약에 포함',
    perks: ['공인 프라이빗 가이드', '호텔 픽업 & 드롭오프', '해상 보험 및 안전 장비', '날씨로 인한 무료 날짜 변경'],
    asideNote: '궁금한 점은 WhatsApp으로 언제든 문의하세요.',
    stepsTitle: '예약 방법',
    steps: [
      ['요청 보내기', '체험과 희망 날짜를 선택하세요.'],
      ['확인', '24시간 내 예약 가능 여부와 견적을 안내합니다.'],
      ['섬을 만끽', '당일 가이드가 직접 만나드립니다.'],
    ],
  },
};

const SUBNAV = {
  en: { booking: 'Booking', contact: 'Contact', faq: 'FAQ' },
  id: { booking: 'Pemesanan', contact: 'Kontak', faq: 'FAQ' },
  zh: { booking: '预订', contact: '联系我们', faq: '常见问题' },
  ja: { booking: '予約', contact: 'お問い合わせ', faq: 'よくある質問' },
  ko: { booking: '예약', contact: '문의하기', faq: '자주 묻는 질문' },
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const todayISO = () => new Date().toISOString().slice(0, 10);

export default function BookPage({ lang = 'en' }) {
  const t = TEXT[lang] || TEXT.en;
  const nav = SUBNAV[lang] || SUBNAV.en;
  const [pkg, setPkg] = useState('escape');
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="dest-page book-page">
      <section className="dest-page__hero">
        <img
          src="/images/foto tambahan/tebing bagus1.jpeg"
          alt=""
          className="dest-page__hero-bg-img"
        />
        <div className="dest-page__hero-overlay" />
        <div className="dest-page__hero-inner">
          <h1 className="dest-page__hero-title">{t.heroTitle}</h1>
          <p className="dest-page__hero-subtitle">{t.heroSubtitle}</p>
        </div>
      </section>

      <nav className="book-page__subnav" aria-label="Booking sections">
        <button type="button" onClick={() => scrollToId('book-form')}>{nav.booking}</button>
        <button type="button" onClick={() => scrollToId('book-contact')}>{nav.contact}</button>
        <button type="button" onClick={() => scrollToId('book-faq')}>{nav.faq}</button>
      </nav>

      <section id="book-form" className="book-page__content">
        <div className="book-page__grid">
          <div className="book-page__card">
            {submitted ? (
              <div className="book-page__success" role="status">
                <div className="book-page__success-icon" aria-hidden="true">✓</div>
                <h2>{t.successTitle}</h2>
                <p>{t.successText}</p>
                <button type="button" className="book-page__btn" onClick={() => setSubmitted(false)}>
                  {t.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="book-page__form">
                <span className="book-page__eyebrow">{t.formEyebrow}</span>
                <h2 className="book-page__title">{t.formTitle}</h2>
                <p className="book-page__sub">{t.formSub}</p>

                <fieldset className="book-page__field">
                  <legend className="book-page__label">{t.packageLabel}</legend>
                  <div className="book-page__packages">
                    {PACKAGES.map((p) => {
                      const [name, desc] = t.packages[p.id];
                      return (
                        <button
                          key={p.id}
                          type="button"
                          aria-pressed={pkg === p.id}
                          className={`book-page__pkg ${pkg === p.id ? 'book-page__pkg--active' : ''}`}
                          onClick={() => setPkg(p.id)}
                        >
                          <span className="book-page__pkg-icon" aria-hidden="true">{p.icon}</span>
                          <span className="book-page__pkg-name">{name}</span>
                          <span className="book-page__pkg-desc">{desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="book-page__row">
                  <label className="book-page__field">
                    <span className="book-page__label">{t.date}</span>
                    <input type="date" required min={todayISO()} className="book-page__input" />
                  </label>
                  <div className="book-page__field">
                    <span className="book-page__label">{t.guests}</span>
                    <div className="book-page__stepper">
                      <button
                        type="button"
                        aria-label="-"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        disabled={guests <= 1}
                      >
                        −
                      </button>
                      <span>{t.guestsUnit(guests)}</span>
                      <button
                        type="button"
                        aria-label="+"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        disabled={guests >= 20}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="book-page__row">
                  <label className="book-page__field">
                    <span className="book-page__label">{t.name}</span>
                    <input type="text" required placeholder={t.namePh} className="book-page__input" />
                  </label>
                  <label className="book-page__field">
                    <span className="book-page__label">{t.contact}</span>
                    <input type="text" required placeholder={t.contactPh} className="book-page__input" />
                  </label>
                </div>

                <label className="book-page__field">
                  <span className="book-page__label">{t.notes}</span>
                  <textarea rows={3} placeholder={t.notesPh} className="book-page__input book-page__textarea" />
                </label>

                <button type="submit" className="book-page__btn book-page__btn--full">
                  {t.submit}
                </button>
              </form>
            )}
          </div>

          <aside className="book-page__aside">
            <div className="book-page__card book-page__card--dark">
              <h3>{t.asideTitle}</h3>
              <ul>
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="book-page__aside-note">{t.asideNote}</p>
            </div>

            <div className="book-page__card">
              <h3 className="book-page__steps-title">{t.stepsTitle}</h3>
              <ol className="book-page__steps">
                {t.steps.map(([title, desc], i) => (
                  <li key={title}>
                    <span className="book-page__step-num">{i + 1}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Itinerary / concierge preview (dulu bagian dari Home) */}
      <TripPlannerSection lang={lang} />

      {/* Contact → FAQ */}
      <ContactSection lang={lang} />
      <FaqSection lang={lang} />

      <FooterSection lang={lang} />
    </div>
  );
}
