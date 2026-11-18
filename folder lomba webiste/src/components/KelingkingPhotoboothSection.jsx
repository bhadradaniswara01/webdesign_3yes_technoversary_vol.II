import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEFAULT_KELINGKING_SLOTS,
  KELINGKING_FRAME_CONFIG,
  KELINGKING_PHOTOBOOTH_TEXTS,
} from '../data/kelingkingPhotoboothData';

/**
 * Memuat gambar HTML secara asinkron dengan crossOrigin anonymous
 */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      const fallback = new Image();
      fallback.onload = () => resolve(fallback);
      fallback.onerror = (err) => reject(err);
      fallback.src = src;
    };
    img.src = src;
  });
}

/**
 * Menggambar satu foto ke dalam slot polaroid dengan orientasi rotasi & object-fit cover
 */
function renderSlotToCanvas(ctx, img, slot) {
  const { cx, cy, width, height, angle } = slot;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((angle * Math.PI) / 180);

  if (img && img.naturalWidth && img.naturalHeight) {
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const targetRatio = width / height;

    let sx = 0;
    let sy = 0;
    let sWidth = imgW;
    let sHeight = imgH;

    if (imgRatio > targetRatio) {
      sWidth = imgH * targetRatio;
      sx = (imgW - sWidth) / 2;
    } else {
      sHeight = imgW / targetRatio;
      sy = (imgH - sHeight) / 2;
    }

    const bleed = 20;
    const drawW = width + bleed;
    const drawH = height + bleed;

    ctx.drawImage(
      img,
      sx,
      sy,
      sWidth,
      sHeight,
      -drawW / 2,
      -drawH / 2,
      drawW,
      drawH
    );
  } else {
    // Tampilan placeholder kosong jika belum diunggah
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(-width / 2, -height / 2, width, height);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 5]);
    ctx.strokeRect(-width / 2 + 5, -height / 2 + 5, width - 10, height - 10);
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '600 24px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`+ 0${slot.id}`, 0, 0);
  }

  ctx.restore();
}

export default function KelingkingPhotoboothSection({ lang = 'id' }) {
  const [photos, setPhotos] = useState(() =>
    DEFAULT_KELINGKING_SLOTS.map((s) => s.defaultImage)
  );

  const [activeSlotIndex, setActiveSlotIndex] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const canvasRef = useRef(null);
  const batchFileInputRef = useRef(null);
  const singleFileInputRef = useRef(null);
  const imageCacheRef = useRef(new Map());

  const texts = KELINGKING_PHOTOBOOTH_TEXTS[lang] || KELINGKING_PHOTOBOOTH_TEXTS.id;

  const filledCount = photos.filter(Boolean).length;
  const isComplete = filledCount >= 6;
  const remainingCount = Math.max(0, 6 - filledCount);

  const getCachedImage = useCallback(async (src) => {
    if (!src) return null;
    if (imageCacheRef.current.has(src)) {
      return imageCacheRef.current.get(src);
    }
    try {
      const img = await loadImage(src);
      if (img) imageCacheRef.current.set(src, img);
      return img;
    } catch (err) {
      console.warn('Gagal memuat gambar:', src, err);
      return null;
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    async function drawPreview() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const targetW = KELINGKING_FRAME_CONFIG.width;
      const targetH = KELINGKING_FRAME_CONFIG.height;

      canvas.width = targetW;
      canvas.height = targetH;
      ctx.clearRect(0, 0, targetW, targetH);

      // Gambar 6 slot foto pengguna
      for (let i = 0; i < DEFAULT_KELINGKING_SLOTS.length; i++) {
        const slot = DEFAULT_KELINGKING_SLOTS[i];
        const photoSrc = photos[i];
        let img = null;
        if (photoSrc) {
          img = await getCachedImage(photoSrc);
        }
        if (isCancelled) return;
        renderSlotToCanvas(ctx, img, slot);
      }

      // Gambar frame kayu dan ornamen Kelingking Beach di atas foto
      const frameImg = await getCachedImage(KELINGKING_FRAME_CONFIG.src);
      if (isCancelled) return;
      if (frameImg) {
        ctx.drawImage(frameImg, 0, 0, targetW, targetH);
      }
    }

    drawPreview();

    return () => {
      isCancelled = true;
    };
  }, [photos, getCachedImage]);

  const handleUseDummy = () => {
    setPhotos(DEFAULT_KELINGKING_SLOTS.map((s) => s.defaultImage));
  };

  const handleReset = () => {
    setPhotos(Array(6).fill(null));
  };

  const handleSlotSelect = (index) => {
    setActiveSlotIndex(index);
    if (singleFileInputRef.current) {
      singleFileInputRef.current.value = '';
      singleFileInputRef.current.click();
    }
  };

  const handleSingleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || activeSlotIndex === null) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (dataUrl) {
        setPhotos((prev) => {
          const next = [...prev];
          next[activeSlotIndex] = dataUrl;
          return next;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (index, e) => {
    e.stopPropagation();
    setPhotos((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  const handleBatchFileChange = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 6);
    if (!files.length) return;

    let processed = 0;
    const newPhotos = [...photos];

    files.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result;
        if (dataUrl) {
          newPhotos[idx] = dataUrl;
        }
        processed++;
        if (processed === files.length) {
          setPhotos([...newPhotos]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDownload = async () => {
    if (!isComplete || isDownloading) return;
    setIsDownloading(true);

    try {
      const offscreen = document.createElement('canvas');
      offscreen.width = KELINGKING_FRAME_CONFIG.width;
      offscreen.height = KELINGKING_FRAME_CONFIG.height;
      const ctx = offscreen.getContext('2d');

      if (!ctx) throw new Error('Gagal menginisialisasi 2D Canvas');

      for (let i = 0; i < DEFAULT_KELINGKING_SLOTS.length; i++) {
        const slot = DEFAULT_KELINGKING_SLOTS[i];
        const photoSrc = photos[i];
        const img = await getCachedImage(photoSrc);
        renderSlotToCanvas(ctx, img, slot);
      }

      const frameImg = await getCachedImage(KELINGKING_FRAME_CONFIG.src);
      if (frameImg) {
        ctx.drawImage(
          frameImg,
          0,
          0,
          KELINGKING_FRAME_CONFIG.width,
          KELINGKING_FRAME_CONFIG.height
        );
      }

      offscreen.toBlob(
        (blob) => {
          if (!blob) {
            setIsDownloading(false);
            return;
          }
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Kelingking-Beach-Keepsake-${Date.now()}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          setIsDownloading(false);
          setDownloadSuccess(true);
          setTimeout(() => setDownloadSuccess(false), 4500);
        },
        'image/png',
        1.0
      );
    } catch (err) {
      console.error('Gagal mengunduh bingkai foto:', err);
      setIsDownloading(false);
    }
  };

  return (
    <section className="manta-photobooth-section" id="kelingking-photobooth">
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={batchFileInputRef}
        onChange={handleBatchFileChange}
        accept="image/*"
        multiple
        style={{ display: 'none' }}
      />
      <input
        type="file"
        ref={singleFileInputRef}
        onChange={handleSingleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      <div className="manta-photobooth-container">
        {/* Header Section */}
        <div className="manta-photobooth-header manta-reveal-item">
          <span className="manta-section-eyebrow">{texts.eyebrow}</span>
          <h2 className="manta-photobooth-title">{texts.title}</h2>
          <p className="manta-photobooth-subtitle">{texts.subtitle}</p>
        </div>

        {/* Notifikasi Unduh Berhasil */}
        {downloadSuccess && (
          <div className="manta-photobooth-toast" role="status">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{texts.downloadSuccess}</span>
          </div>
        )}

        {/* Main 2-Column Stage */}
        <div className="manta-photobooth-stage">
          {/* KOLOM KIRI: Frame Preview (Clean Minimalist Floating Frame) */}
          <div className="manta-photobooth-visual manta-reveal-item">
            <div className="manta-frame-stage">
              {/* Teks Resolusi Cetak Bersih Tanpa Background Box */}
              <div className="manta-frame-res-caption">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{texts.frameBadge}</span>
              </div>

              {/* Viewport Frame yang proporsional 1011 : 1800 */}
              <div
                className="manta-frame-viewport"
                style={{
                  aspectRatio: `${KELINGKING_FRAME_CONFIG.width} / ${KELINGKING_FRAME_CONFIG.height}`,
                }}
              >
                <canvas ref={canvasRef} className="manta-frame-canvas" />

                {/* Hotspots interaktif di atas slot polaroid */}
                <div className="manta-frame-hotspots" aria-hidden="true">
                  {DEFAULT_KELINGKING_SLOTS.map((slot, idx) => {
                    const leftPct =
                      ((slot.cx - slot.width / 2) / KELINGKING_FRAME_CONFIG.width) *
                      100;
                    const topPct =
                      ((slot.cy - slot.height / 2) / KELINGKING_FRAME_CONFIG.height) *
                      100;
                    const wPct =
                      (slot.width / KELINGKING_FRAME_CONFIG.width) * 100;
                    const hPct =
                      (slot.height / KELINGKING_FRAME_CONFIG.height) * 100;

                    return (
                      <button
                        key={slot.id}
                        type="button"
                        className={`manta-frame-hotspot ${
                          photos[idx]
                            ? 'manta-frame-hotspot--filled'
                            : 'manta-frame-hotspot--empty'
                        }`}
                        style={{
                          left: `${leftPct}%`,
                          top: `${topPct}%`,
                          width: `${wPct}%`,
                          height: `${hPct}%`,
                          transform: `rotate(${slot.angle}deg)`,
                        }}
                        onClick={() => handleSlotSelect(idx)}
                        title={`Ganti Slot 0${slot.id}`}
                      >
                        <span className="manta-frame-hotspot__pill">
                          {photos[idx] ? `0${slot.id} ✓` : `+ 0${slot.id}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="manta-frame-meta-row">
                <span className="manta-frame-live-indicator">
                  <span className="manta-frame-live-dot" />
                  {texts.livePreviewBadge}
                </span>
                <span className="manta-frame-meta-count">
                  {texts.progressText(filledCount, 6)}
                </span>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Studio Control Console & 6-Slot Manager */}
          <div className="manta-photobooth-controls manta-reveal-item">
            {/* Action Bar Atas */}
            <div className="manta-booth-actions">
              <button
                type="button"
                className="manta-booth-btn manta-booth-btn--primary"
                onClick={() => batchFileInputRef.current?.click()}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>{texts.uploadBatchBtn}</span>
              </button>
              <button
                type="button"
                className="manta-booth-btn manta-booth-btn--secondary"
                onClick={handleUseDummy}
                title="Muat ulang 6 foto dummy contoh"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span>{texts.useDummyBtn}</span>
              </button>
              <button
                type="button"
                className="manta-booth-btn manta-booth-btn--ghost"
                onClick={handleReset}
                title="Kosongkan foto untuk mencoba upload dari awal"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span>{texts.resetBtn}</span>
              </button>
            </div>

            {/* Requirement / Progress Bar Card */}
            <div
              className={`manta-progress-card ${
                isComplete
                  ? 'manta-progress-card--ready'
                  : 'manta-progress-card--pending'
              }`}
            >
              <div className="manta-progress-card__header">
                <span className="manta-progress-card__status">
                  {isComplete ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  <span>
                    {isComplete
                      ? lang === 'id'
                        ? 'Siap Diunduh'
                        : 'Ready to Download'
                      : lang === 'id'
                      ? 'Menunggu Foto'
                      : 'Awaiting Photos'}
                  </span>
                </span>
                <span className="manta-progress-card__count">
                  {texts.progressText(filledCount, 6)}
                </span>
              </div>

              {/* Bar Indikator */}
              <div className="manta-progress-track">
                <div
                  className="manta-progress-fill"
                  style={{ width: `${(filledCount / 6) * 100}%` }}
                />
              </div>

              <p className="manta-progress-card__message">
                {isComplete
                  ? texts.readyNote
                  : texts.requirementNote(remainingCount)}
              </p>
            </div>

            {/* 6-Slot Management Grid */}
            <div className="manta-slots-grid">
              {DEFAULT_KELINGKING_SLOTS.map((slot, idx) => {
                const photoSrc = photos[idx];
                const label = slot.labels[lang] || slot.labels.id;

                return (
                  <div
                    key={slot.id}
                    className={`manta-slot-card ${
                      photoSrc
                        ? 'manta-slot-card--filled'
                        : 'manta-slot-card--empty'
                    }`}
                    onClick={() => handleSlotSelect(idx)}
                  >
                    {/* Thumbnail Slot */}
                    <div className="manta-slot-thumb-wrap">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={`Slot ${slot.id}`}
                          className="manta-slot-thumb"
                        />
                      ) : (
                        <div className="manta-slot-thumb-placeholder">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                        </div>
                      )}
                      <span className="manta-slot-num">0{slot.id}</span>
                    </div>

                    {/* Info Slot & Tombol Ganti/Hapus */}
                    <div className="manta-slot-info">
                      <h4 className="manta-slot-label">{label}</h4>
                      <div className="manta-slot-actions">
                        <button
                          type="button"
                          className="manta-slot-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSlotSelect(idx);
                          }}
                        >
                          {photoSrc ? texts.slotChange : texts.slotUpload}
                        </button>
                        {photoSrc && (
                          <button
                            type="button"
                            className="manta-slot-remove-btn"
                            onClick={(e) => handleRemovePhoto(idx, e)}
                            title={texts.slotRemove}
                            aria-label={texts.slotRemove}
                          >
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tombol Unduh Utama */}
            <div className="manta-download-wrap">
              <button
                type="button"
                className={`manta-download-btn ${
                  isComplete
                    ? 'manta-download-btn--active'
                    : 'manta-download-btn--disabled'
                }`}
                disabled={!isComplete || isDownloading}
                onClick={handleDownload}
                title={
                  isComplete
                    ? 'Klik untuk mengunduh gambar hasil photobooth'
                    : 'Unggah minimal 6 foto untuk membuka tombol ini'
                }
              >
                {isDownloading ? (
                  <>
                    <span className="manta-download-spinner" />
                    <span>{texts.downloading}</span>
                  </>
                ) : isComplete ? (
                  <>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>{texts.downloadBtnReady}</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{texts.downloadBtnLocked}</span>
                  </>
                )}
              </button>

              <p className="manta-download-hint">{texts.tipBox}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
