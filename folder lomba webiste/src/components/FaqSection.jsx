import { useState } from 'react';

const TEXT = {
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    sub: 'Quick answers to what travelers ask us most.',
    items: [
      ['Do I have to pay when I send a request?', 'No. Sending a reservation request is free. We confirm availability first and share the quote and payment details afterwards.'],
      ['What if the weather is bad on my day?', 'Safety comes first. If sea or road conditions are unsafe we move your trip to another date for free.'],
      ['Is hotel pick-up included?', 'Yes, pick-up and drop-off within Nusa Penida is included. Fast-boat transfers from mainland Bali can be arranged on request.'],
      ['Can non-swimmers or children join?', 'Yes. Life jackets and a guide stay with you in the water, and we adjust routes for children and non-swimmers. Tell us in the special requests field.'],
      ['How big are the groups?', 'We keep groups small — usually up to 8 guests — and offer private journeys for couples, families and friends.'],
      ['What should I bring?', 'Sunscreen (reef-safe if possible), a hat, a towel, a change of clothes and some cash for local warungs. We provide snorkel gear and safety equipment.'],
    ],
  },
  id: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering diajukan',
    sub: 'Jawaban singkat untuk hal yang paling sering ditanyakan wisatawan.',
    items: [
      ['Apakah harus bayar saat mengirim permintaan?', 'Tidak. Mengirim permintaan reservasi gratis. Kami konfirmasi ketersediaan dulu, lalu kirim penawaran dan detail pembayaran.'],
      ['Bagaimana kalau cuaca buruk di hari keberangkatan?', 'Keselamatan nomor satu. Jika kondisi laut atau jalan tidak aman, trip dipindah ke tanggal lain tanpa biaya.'],
      ['Apakah termasuk jemput di hotel?', 'Ya, antar-jemput di dalam Nusa Penida sudah termasuk. Transfer fast boat dari Bali daratan bisa diatur sesuai permintaan.'],
      ['Apakah yang tidak bisa berenang atau anak-anak boleh ikut?', 'Boleh. Pelampung dan pemandu mendampingi di air, dan rute disesuaikan untuk anak serta non-perenang. Cukup tulis di kolom permintaan khusus.'],
      ['Berapa besar grupnya?', 'Kami menjaga grup tetap kecil — biasanya maksimal 8 tamu — dan menyediakan trip privat untuk pasangan, keluarga, dan teman.'],
      ['Apa yang perlu dibawa?', 'Tabir surya (sebaiknya ramah terumbu), topi, handuk, baju ganti, dan uang tunai untuk warung lokal. Perlengkapan snorkel dan keselamatan kami sediakan.'],
    ],
  },
  zh: {
    eyebrow: '常见问题',
    title: '常见问题解答',
    sub: '旅客最常问的问题，快速解答。',
    items: [
      ['提交申请时需要付款吗？', '不需要。提交预订申请完全免费。我们会先确认档期，再提供报价与付款方式。'],
      ['出行当天天气不好怎么办？', '安全第一。若海况或路况不安全，我们会免费为您改期。'],
      ['包含酒店接送吗？', '包含。努沙佩尼达岛内接送已含在内，巴厘岛本岛的快艇接驳可按需安排。'],
      ['不会游泳的人或儿童可以参加吗？', '可以。水中全程有救生衣和向导陪同，儿童与不会游泳者的路线会相应调整。请在特殊需求栏中告知我们。'],
      ['每团有多少人？', '我们坚持小团出行——通常不超过8位——也为情侣、家庭和朋友提供私人行程。'],
      ['需要带什么？', '防晒霜（最好是珊瑚友好型）、帽子、毛巾、换洗衣物，以及在当地小餐馆使用的现金。浮潜与安全装备由我们提供。'],
    ],
  },
  ja: {
    eyebrow: 'よくある質問',
    title: 'よくあるご質問',
    sub: '旅行者の皆さまからよくいただく質問にお答えします。',
    items: [
      ['リクエスト送信時に支払いは必要ですか？', '不要です。予約リクエストの送信は無料で、空き状況を確認した後にお見積りとお支払い方法をご案内します。'],
      ['当日の天候が悪い場合は？', '安全が最優先です。海や道路の状況が危険な場合は、無料で別日程に振り替えます。'],
      ['ホテル送迎は含まれていますか？', 'はい、ヌサペニダ島内の送迎は含まれます。バリ本島からの高速船送迎もご希望に応じて手配可能です。'],
      ['泳げない方やお子様も参加できますか？', 'はい。水中ではライフジャケットとガイドが同行し、お子様や泳げない方向けにルートを調整します。ご要望欄にお書きください。'],
      ['グループの人数は？', '少人数制で、通常は最大8名です。カップル、ご家族、ご友人向けのプライベートツアーもご用意しています。'],
      ['持ち物は何が必要ですか？', '日焼け止め（できればサンゴに優しいもの）、帽子、タオル、着替え、地元ワルン用の現金。シュノーケル用具と安全装備はこちらでご用意します。'],
    ],
  },
  ko: {
    eyebrow: '자주 묻는 질문',
    title: '자주 묻는 질문',
    sub: '여행자분들이 가장 많이 문의하시는 내용을 정리했습니다.',
    items: [
      ['요청을 보낼 때 결제해야 하나요?', '아니요. 예약 요청은 무료입니다. 먼저 예약 가능 여부를 확인한 뒤 견적과 결제 안내를 드립니다.'],
      ['당일 날씨가 나쁘면 어떻게 되나요?', '안전이 최우선입니다. 바다나 도로 상황이 위험하면 무료로 다른 날짜로 변경해 드립니다.'],
      ['호텔 픽업이 포함되나요?', '네, 누사 페니다 섬 내 픽업과 드롭오프가 포함됩니다. 발리 본섬에서의 쾌속선 이동은 요청 시 준비해 드립니다.'],
      ['수영을 못하거나 아이도 참여할 수 있나요?', '네. 물속에서 구명조끼와 가이드가 함께하며, 아이와 수영을 못하는 분을 위해 코스를 조정합니다. 요청 사항에 알려주세요.'],
      ['그룹 인원은 어느 정도인가요?', '소규모로 운영하며 보통 최대 8명입니다. 커플, 가족, 친구를 위한 프라이빗 여정도 있습니다.'],
      ['무엇을 챙겨야 하나요?', '선크림(가능하면 산호 친화형), 모자, 수건, 갈아입을 옷, 현지 와룽에서 쓸 현금을 준비하세요. 스노클 장비와 안전 장비는 저희가 제공합니다.'],
    ],
  },
};

export default function FaqSection({ lang = 'en' }) {
  const t = TEXT[lang] || TEXT.en;
  const [open, setOpen] = useState(0);

  return (
    <section id="book-faq" className="faq-section">
      <div className="faq-section__inner">
        <div className="faq-section__head reveal-header">
          <span className="book-page__eyebrow">{t.eyebrow}</span>
          <h2 className="faq-section__title">{t.title}</h2>
          <p className="faq-section__sub">{t.sub}</p>
        </div>

        <div className="faq-section__list">
          {t.items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`faq-section__item ${isOpen ? 'faq-section__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-section__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{q}</span>
                  <span className="faq-section__chevron" aria-hidden="true">+</span>
                </button>
                <div id={`faq-panel-${i}`} className="faq-section__a" role="region" hidden={!isOpen}>
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
