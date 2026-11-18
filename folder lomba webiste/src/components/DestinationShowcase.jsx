import { useEffect, useState } from 'react';
import {
  EXPEDITION_PACKAGES,
  FRAME_MILESTONES,
  getFrameUrl,
  HIGHLIGHT_REALMS,
  TOTAL_FRAMES,
} from '../data/expeditionData';
import DepthTiltCard from './DepthTiltCard';

export default function DestinationShowcase({ onJumpToFrame, onReplayTop }) {
  const [labFrame, setLabFrame] = useState(64);
  const [isLabPlaying, setIsLabPlaying] = useState(false);
  const [selectedPkgId, setSelectedPkgId] = useState(EXPEDITION_PACKAGES[0].id);
  const [bookingModalPkg, setBookingModalPkg] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const selectedPackage =
    EXPEDITION_PACKAGES.find((p) => p.id === selectedPkgId) || EXPEDITION_PACKAGES[0];

  // Playback otomatis mini di Lab Frame Interaktif.
  useEffect(() => {
    if (!isLabPlaying) return undefined;
    const timer = setInterval(() => {
      setLabFrame((prev) => (prev >= TOTAL_FRAMES ? 1 : prev + 1));
    }, 45);
    return () => clearInterval(timer);
  }, [isLabPlaying]);

  const activeMilestone = FRAME_MILESTONES.reduce((closest, item) =>
    Math.abs(item.frame - labFrame) < Math.abs(closest.frame - labFrame) ? item : closest
  );

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="showcase">
      {/* Bagian 1: Tiga Dimensi Alam (3D Tilt Bento) */}
      <section id="destinasi" className="showcase-section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">EKSPLORASI TIGA ZONA</span>
            <h2 className="section-title">Dari Puncak Karst hingga Dasar Terumbu</h2>
            <p className="section-subtitle">
              Arahkan kursor pada setiap kartu untuk merasakan efek kedalaman 3D dari tiga babak
              utama ekspedisi Nusa Penida.
            </p>
          </div>

          <div className="realms-grid">
            {HIGHLIGHT_REALMS.map((realm) => (
              <DepthTiltCard key={realm.id} accent={realm.accent} className="realm-card">
                <div className="realm-card__media">
                  <img
                    src={getFrameUrl(realm.frame)}
                    alt={realm.title}
                    loading="lazy"
                  />
                  <span className="realm-card__tag">{realm.tag}</span>
                </div>

                <div className="realm-card__body">
                  <p className="realm-card__sub">{realm.subtitle}</p>
                  <h3 className="realm-card__title">{realm.title}</h3>
                  <p className="realm-card__desc">{realm.description}</p>

                  <div className="realm-card__metrics">
                    {realm.metrics.map((m) => (
                      <div key={m.label} className="realm-metric">
                        <span>{m.label}</span>
                        <strong>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="realm-card__jump"
                    onClick={() => onJumpToFrame(realm.frame)}
                  >
                    Lihat di Layar 3D (Frame {String(realm.frame).padStart(3, '0')}) →
                  </button>
                </div>
              </DepthTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 2: Lab Eksplorasi Frame Interaktif */}
      <section id="lab-frame" className="showcase-section showcase-section--alt">
        <div className="container">
          <div className="lab-layout">
            <div className="lab-info">
              <span className="section-eyebrow">FRAME SCRUBBER INTERAKTIF</span>
              <h2 className="section-title">Kendalikan 192 Frame Secara Presisi</h2>
              <p className="section-subtitle">
                Setiap frame video diekstrak menjadi urutan gambar resolusi tinggi yang merespons
                kecepatan scroll secara langsung. Geser slider di bawah untuk meninjau setiap sudut
                kamera dari udara ke bawah laut.
              </p>

              <div className="lab-stats-row">
                <div className="lab-stat">
                  <span>FRAME AKTIF</span>
                  <strong>
                    #{String(labFrame).padStart(3, '0')} / {TOTAL_FRAMES}
                  </strong>
                </div>
                <div className="lab-stat">
                  <span>ZONA KAMERA</span>
                  <strong>{activeMilestone.label}</strong>
                </div>
                <div className="lab-stat">
                  <span>ESTIMASI KETINGGIAN</span>
                  <strong>{activeMilestone.elevation}</strong>
                </div>
              </div>

              <div className="lab-controls">
                <div className="lab-slider-head">
                  <label htmlFor="frame-scrubber">Geser Frame ({labFrame})</label>
                  <button
                    type="button"
                    className="btn-mini"
                    onClick={() => setIsLabPlaying((prev) => !prev)}
                  >
                    {isLabPlaying ? '❚❚ Jeda Preview' : '▶ Putar Preview'}
                  </button>
                </div>

                <input
                  id="frame-scrubber"
                  type="range"
                  min={1}
                  max={TOTAL_FRAMES}
                  value={labFrame}
                  onChange={(e) => {
                    setIsLabPlaying(false);
                    setLabFrame(Number(e.target.value));
                  }}
                  className="lab-range"
                />

                <div className="lab-milestones">
                  {FRAME_MILESTONES.map((item) => (
                    <button
                      key={item.frame}
                      type="button"
                      className={`milestone-chip ${
                        Math.abs(labFrame - item.frame) <= 8 ? 'milestone-chip--active' : ''
                      }`}
                      onClick={() => {
                        setIsLabPlaying(false);
                        setLabFrame(item.frame);
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lab-stage">
              <DepthTiltCard accent="#22d3ee" className="lab-preview-card">
                <div className="lab-preview-card__chrome">
                  <div className="lab-preview-card__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="lab-preview-card__badge">
                    frame-{String(labFrame).padStart(4, '0')}.jpg
                  </span>
                </div>
                <div className="lab-preview-card__screen">
                  <img
                    src={getFrameUrl(labFrame)}
                    alt={`Preview frame ${labFrame} - ${activeMilestone.label}`}
                  />
                  <div className="lab-preview-card__overlay">
                    <span>{activeMilestone.elevation}</span>
                    <span>{activeMilestone.label}</span>
                  </div>
                </div>
              </DepthTiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 3: Paket & Itinerary Ekspedisi */}
      <section id="paket" className="showcase-section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="section-eyebrow">RENCANAKAN PERJALANAN</span>
            <h2 className="section-title">Pilih Format Ekspedisi Anda</h2>
            <p className="section-subtitle">
              Dari jelajah darat dan snorkeling satu hari hingga pelayaran privat mengelilingi tebing
              barat Nusa Penida.
            </p>
          </div>

          <div className="package-tabs" role="tablist" aria-label="Pilihan Paket Ekspedisi">
            {EXPEDITION_PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                aria-selected={pkg.id === selectedPackage.id}
                className={`package-tab ${
                  pkg.id === selectedPackage.id ? 'package-tab--active' : ''
                }`}
                onClick={() => setSelectedPkgId(pkg.id)}
              >
                <span>{pkg.name}</span>
                <small>{pkg.badge}</small>
              </button>
            ))}
          </div>

          <div className="package-panel">
            <div className="package-panel__main">
              <div className="package-panel__meta">
                <span className="package-badge">{selectedPackage.badge}</span>
                <span className="package-duration">{selectedPackage.duration}</span>
              </div>
              <h3 className="package-panel__title">{selectedPackage.name}</h3>
              <p className="package-panel__summary">{selectedPackage.summary}</p>

              <ul className="package-panel__list">
                {selectedPackage.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="package-panel__aside">
              <span className="package-price-label">Mulai dari</span>
              <div className="package-price">
                <strong>{selectedPackage.price}</strong>
                <span>{selectedPackage.unit}</span>
              </div>
              <button
                type="button"
                className="btn-primary btn-primary--full"
                onClick={() => {
                  setBookingSuccess(false);
                  setBookingModalPkg(selectedPackage);
                }}
              >
                Ajukan Reservasi →
              </button>
              <button
                type="button"
                className="btn-ghost btn-ghost--full"
                onClick={onReplayTop}
              >
                Tonton Ulang Animasi 3D ↑
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong className="site-footer__brand">NUSA//3D EXPEDITION</strong>
            <p className="site-footer__note">
              Pengalaman Landing Page Scroll 3D · 192 Frame Berurutan · Nusa Penida, Bali
            </p>
          </div>
          <button type="button" className="btn-mini" onClick={onReplayTop}>
            Kembali ke Puncak ↑
          </button>
        </div>
      </footer>

      {/* Modal Simulasi Reservasi */}
      {bookingModalPkg && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setBookingModalPkg(null)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setBookingModalPkg(null)}
              aria-label="Tutup"
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div className="modal-success">
                <span className="modal-success__icon">✓</span>
                <h3 id="modal-title">Permintaan Ekspedisi Diterima!</h3>
                <p>
                  Tim kurator perjalanan untuk paket <strong>{bookingModalPkg.name}</strong> akan
                  segera menghubungi Anda dengan jadwal pasang surut dan ketersediaan armada.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setBookingModalPkg(null)}
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="modal-form">
                <span className="section-eyebrow">RESERVASI CEPAT</span>
                <h3 id="modal-title">{bookingModalPkg.name}</h3>
                <p className="modal-form__sub">
                  {bookingModalPkg.duration} · {bookingModalPkg.price} {bookingModalPkg.unit}
                </p>

                <label className="form-field">
                  <span>Nama Lengkap</span>
                  <input type="text" required placeholder="Contoh: Raka Mahendra" />
                </label>
                <label className="form-field">
                  <span>Email / WhatsApp</span>
                  <input type="text" required placeholder="raka@example.com / 0812..." />
                </label>
                <label className="form-field">
                  <span>Tanggal Keberangkatan</span>
                  <input type="date" required />
                </label>

                <button type="submit" className="btn-primary btn-primary--full">
                  Konfirmasi Jadwal
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
