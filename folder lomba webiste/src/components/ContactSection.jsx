import { useState } from 'react';

// TODO: ganti dengan data kontak asli sebelum website dipublikasikan
const CONTACT = {
  whatsappDisplay: '+62 812-0000-0000',
  whatsappLink: 'https://wa.me/6281200000000',
  email: 'hello@nusapenidajourneys.com',
  address: 'Jl. Raya Toyapakeh, Nusa Penida, Klungkung, Bali 80771',
  hours: '08:00 – 20:00 WITA',
};

const TEXT = {
  en: {
    eyebrow: 'CONTACT',
    title: 'Talk to our island team',
    sub: 'Questions before you book? Reach us any way you like — a real person on Nusa Penida will reply.',
    cards: { whatsapp: 'WhatsApp', email: 'Email', visit: 'Visit us', hours: 'Opening hours' },
    hoursNote: 'Every day, including public holidays',
    formTitle: 'Send us a message',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    messagePh: 'How can we help?',
    send: 'Send Message',
    successTitle: 'Message sent!',
    successText: 'Thank you — we will get back to you within 24 hours.',
    again: 'Send another message',
  },
  id: {
    eyebrow: 'KONTAK',
    title: 'Hubungi tim pulau kami',
    sub: 'Ada pertanyaan sebelum memesan? Hubungi kami lewat cara apa pun — orang sungguhan di Nusa Penida akan membalas.',
    cards: { whatsapp: 'WhatsApp', email: 'Email', visit: 'Kunjungi kami', hours: 'Jam operasional' },
    hoursNote: 'Setiap hari, termasuk hari libur nasional',
    formTitle: 'Kirim pesan untuk kami',
    name: 'Nama kamu',
    email: 'Email',
    message: 'Pesan',
    messagePh: 'Ada yang bisa kami bantu?',
    send: 'Kirim Pesan',
    successTitle: 'Pesan terkirim!',
    successText: 'Terima kasih — kami akan membalas dalam 24 jam.',
    again: 'Kirim pesan lain',
  },
  zh: {
    eyebrow: '联系我们',
    title: '联系我们的岛上团队',
    sub: '预订前有疑问？随时联系我们——努沙佩尼达的真人团队会回复您。',
    cards: { whatsapp: 'WhatsApp', email: '邮箱', visit: '到访我们', hours: '营业时间' },
    hoursNote: '每天营业，含公共假日',
    formTitle: '给我们留言',
    name: '您的姓名',
    email: '邮箱',
    message: '留言',
    messagePh: '有什么可以帮您？',
    send: '发送留言',
    successTitle: '留言已发送！',
    successText: '感谢您——我们将在24小时内回复。',
    again: '再发一条留言',
  },
  ja: {
    eyebrow: 'お問い合わせ',
    title: '島のチームにご相談ください',
    sub: 'ご予約前のご質問もお気軽に。ヌサペニダにいるスタッフが直接お返事します。',
    cards: { whatsapp: 'WhatsApp', email: 'メール', visit: '来店', hours: '営業時間' },
    hoursNote: '祝日を含め毎日営業',
    formTitle: 'メッセージを送る',
    name: 'お名前',
    email: 'メールアドレス',
    message: 'メッセージ',
    messagePh: 'ご用件をご記入ください',
    send: '送信する',
    successTitle: '送信しました！',
    successText: 'ありがとうございます。24時間以内にご返信します。',
    again: '別のメッセージを送る',
  },
  ko: {
    eyebrow: '문의하기',
    title: '현지 팀에게 문의하세요',
    sub: '예약 전에 궁금한 점이 있으신가요? 누사 페니다의 실제 담당자가 답변해 드립니다.',
    cards: { whatsapp: 'WhatsApp', email: '이메일', visit: '방문하기', hours: '운영 시간' },
    hoursNote: '공휴일 포함 매일 운영',
    formTitle: '메시지 보내기',
    name: '이름',
    email: '이메일',
    message: '메시지',
    messagePh: '무엇을 도와드릴까요?',
    send: '메시지 보내기',
    successTitle: '메시지가 전송되었습니다!',
    successText: '감사합니다. 24시간 내에 답변드리겠습니다.',
    again: '다른 메시지 보내기',
  },
};

export default function ContactSection({ lang = 'en' }) {
  const t = TEXT[lang] || TEXT.en;
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: '💬', label: t.cards.whatsapp, value: CONTACT.whatsappDisplay, href: CONTACT.whatsappLink },
    { icon: '✉️', label: t.cards.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: '📍', label: t.cards.visit, value: CONTACT.address },
    { icon: '🕗', label: t.cards.hours, value: CONTACT.hours, note: t.hoursNote },
  ];

  return (
    <section id="book-contact" className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__head reveal-header">
          <span className="book-page__eyebrow">{t.eyebrow}</span>
          <h2 className="contact-section__title">{t.title}</h2>
          <p className="contact-section__sub">{t.sub}</p>
        </div>

        <div className="contact-section__grid">
          <div className="contact-section__cards reveal-stagger">
            {cards.map((c) => {
              const body = (
                <>
                  <span className="contact-section__icon" aria-hidden="true">{c.icon}</span>
                  <div>
                    <small>{c.label}</small>
                    <strong>{c.value}</strong>
                    {c.note && <em>{c.note}</em>}
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-section__card reveal-card"
                >
                  {body}
                </a>
              ) : (
                <div key={c.label} className="contact-section__card reveal-card">{body}</div>
              );
            })}
          </div>

          <div className="book-page__card contact-section__form-card">
            {sent ? (
              <div className="book-page__success" role="status">
                <div className="book-page__success-icon" aria-hidden="true">✓</div>
                <h2>{t.successTitle}</h2>
                <p>{t.successText}</p>
                <button type="button" className="book-page__btn" onClick={() => setSent(false)}>
                  {t.again}
                </button>
              </div>
            ) : (
              <form
                className="book-page__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 className="contact-section__form-title">{t.formTitle}</h3>
                <label className="book-page__field">
                  <span className="book-page__label">{t.name}</span>
                  <input type="text" required className="book-page__input" />
                </label>
                <label className="book-page__field">
                  <span className="book-page__label">{t.email}</span>
                  <input type="email" required className="book-page__input" />
                </label>
                <label className="book-page__field">
                  <span className="book-page__label">{t.message}</span>
                  <textarea rows={4} required placeholder={t.messagePh} className="book-page__input book-page__textarea" />
                </label>
                <button type="submit" className="book-page__btn book-page__btn--full">{t.send}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
