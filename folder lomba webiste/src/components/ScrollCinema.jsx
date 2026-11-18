import { useEffect, useRef, useState } from 'react';
import { CHAPTERS, getChapterForProgress, TOTAL_FRAMES } from '../data/expeditionData';

/**
 * Menggambar HTMLImageElement ke kanvas dengan perilaku setara object-fit: cover.
 */
function drawCoverImage(ctx, img, width, height) {
  if (!img || !img.naturalWidth || !img.naturalHeight) return;

  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = width / height;

  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (canvasRatio > imgRatio) {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawHeight = height;
    drawWidth = height * imgRatio;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export default function ScrollCinema({
  trackRef,
  getBestFrame,
  loadedCount,
  onProgressChange,
  onJumpToChapter,
  onJumpToSection,
  onReplayTop,
}) {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasWrapRef = useRef(null);
  const hudRef = useRef(null);

  const targetProgressRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const lastLoadedRef = useRef(0);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });

  const [displayFrame, setDisplayFrame] = useState(1);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);

  // Pantau progres scroll track relatif terhadap viewport.
  useEffect(() => {
    const updateScrollTarget = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
      const raw = Math.min(1, Math.max(0, -rect.top / maxScroll));
      targetProgressRef.current = raw;
      onProgressChange?.(raw, getChapterForProgress(raw));
    };

    updateScrollTarget();
    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('resize', updateScrollTarget);
    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('resize', updateScrollTarget);
    };
  }, [trackRef, onProgressChange]);

  // Sinkronkan ukuran kanvas dengan rasio piksel perangkat.
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      viewportRef.current = { width, height, dpr };
      lastDrawnIndexRef.current = -1;
    };

    resizeCanvas();
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(stage);
    window.addEventListener('resize', resizeCanvas);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Tangkap gerakan kursor untuk efek perspektif 3D.
  useEffect(() => {
    const handlePointerMove = (event) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      pointerTargetRef.current = { x: nx, y: ny };
    };

    const handlePointerLeave = () => {
      pointerTargetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  // Loop 60fps: interpolasi frame + animasi 3D perspektif + render kanvas.
  useEffect(() => {
    let rafId = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lastReportedFrame = -1;
    let lastChapterId = '';

    const tick = () => {
      const targetFrame = targetProgressRef.current * (TOTAL_FRAMES - 1);
      if (reducedMotion) {
        currentFrameRef.current = targetFrame;
      } else {
        currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.14;
      }

      const smoothedProgress = currentFrameRef.current / (TOTAL_FRAMES - 1);
      const roundedIndex = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );

      // Update efek 3D langsung pada DOM node tanpa memicu re-render React.
      if (!reducedMotion) {
        pointerCurrentRef.current.x +=
          (pointerTargetRef.current.x - pointerCurrentRef.current.x) * 0.08;
        pointerCurrentRef.current.y +=
          (pointerTargetRef.current.y - pointerCurrentRef.current.y) * 0.08;

        const px = pointerCurrentRef.current.x;
        const py = pointerCurrentRef.current.y;
        const depthScale = 1.045 + Math.sin(smoothedProgress * Math.PI) * 0.045;

        if (canvasWrapRef.current) {
          canvasWrapRef.current.style.transform = `perspective(1400px) rotateY(${(
            px * 2.4
          ).toFixed(3)}deg) rotateX(${(-py * 2.0).toFixed(3)}deg) scale(${depthScale.toFixed(
            4
          )})`;
        }

        if (hudRef.current) {
          hudRef.current.style.transform = `translate3d(${(-px * 14).toFixed(
            2
          )}px, ${(-py * 10).toFixed(2)}px, 0)`;
        }
      }

      // Render kanvas hanya ketika frame berubah atau ada frame baru termuat.
      const canvas = canvasRef.current;
      const ctx = canvas ? canvas.getContext('2d') : null;
      if (
        ctx &&
        (roundedIndex !== lastDrawnIndexRef.current ||
          lastLoadedRef.current !== loadedCount)
      ) {
        const frameImg = getBestFrame(roundedIndex);
        if (frameImg) {
          const { width, height, dpr } = viewportRef.current;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          drawCoverImage(ctx, frameImg, width, height);
          lastDrawnIndexRef.current = roundedIndex;
          lastLoadedRef.current = loadedCount;
        }
      }

      const nextDisplayFrame = roundedIndex + 1;
      if (nextDisplayFrame !== lastReportedFrame) {
        lastReportedFrame = nextDisplayFrame;
        setDisplayFrame(nextDisplayFrame);
        setSmoothProgress(smoothedProgress);
      }

      const chapter = getChapterForProgress(smoothedProgress);
      if (chapter.id !== lastChapterId) {
        lastChapterId = chapter.id;
        setActiveChapter(chapter);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [getBestFrame, loadedCount]);

  // Hitung opacity & jarak masuk chapter agar teks muncul halus sesuai zona scroll.
  const chapterRange = Math.max(0.01, activeChapter.end - activeChapter.start);
  const localProgress = Math.min(
    1,
    Math.max(0, (smoothProgress - activeChapter.start) / chapterRange)
  );
  const isFirstChapter = activeChapter.id === CHAPTERS[0].id;
  const isLastChapter = activeChapter.id === CHAPTERS[CHAPTERS.length - 1].id;

  return (
    <section ref={trackRef} className="cinema-track" aria-label="Pengalaman Video Scroll 3D">
      <div
        ref={stageRef}
        className="cinema-stage"
        style={{
          '--chapter-accent': activeChapter.accent,
          '--chapter-glow': activeChapter.glow,
        }}
      >
        {/* Layer Kanvas 3D */}
        <div ref={canvasWrapRef} className="cinema-canvas-wrap">
          <canvas ref={canvasRef} className="cinema-canvas" />
        </div>

        {/* Pencahayaan Atmosfer & Scrim Kontras */}
        <div className="cinema-atmosphere" aria-hidden="true" />
        <div className="cinema-vignette" aria-hidden="true" />

        {/* Garis Grid Sudut Sinematik */}
        <div className="cinema-reticle" aria-hidden="true">
          <span className="cinema-reticle__corner cinema-reticle__corner--tl" />
          <span className="cinema-reticle__corner cinema-reticle__corner--tr" />
          <span className="cinema-reticle__corner cinema-reticle__corner--bl" />
          <span className="cinema-reticle__corner cinema-reticle__corner--br" />
        </div>

        {/* Layer HUD & Cerita Berparalaks 3D */}
        <div ref={hudRef} className="cinema-hud">
          {/* Telemetry Kiri Atas */}
          <div className="cinema-telemetry">
            <div className="telemetry-pill">
              <span className="telemetry-pill__dot" />
              <span>{activeChapter.zone}</span>
            </div>
            <div className="telemetry-stats">
              <div>
                <span className="telemetry-label">ELEVASI</span>
                <strong className="telemetry-value">{activeChapter.altitude}</strong>
              </div>
              <div>
                <span className="telemetry-label">FRAME</span>
                <strong className="telemetry-value">
                  {String(displayFrame).padStart(3, '0')} / {TOTAL_FRAMES}
                </strong>
              </div>
              <div className="telemetry-coords">
                <span className="telemetry-label">KOORDINAT</span>
                <strong className="telemetry-value">8°45&apos;04&quot;S 115°28&apos;E</strong>
              </div>
            </div>
          </div>

          {/* Kartu Cerita Utama */}
          <div
            key={activeChapter.id}
            className={`cinema-story cinema-story--${activeChapter.align}`}
          >
            <p className="cinema-story__eyebrow">{activeChapter.eyebrow}</p>
            <h1 className="cinema-story__title">{activeChapter.title}</h1>
            <p className="cinema-story__desc">{activeChapter.description}</p>

            {/* Progress bar lokal babak aktif */}
            <div className="cinema-story__chapter-meter" aria-hidden="true">
              <div
                className="cinema-story__chapter-fill"
                style={{ width: `${Math.round(localProgress * 100)}%` }}
              />
            </div>

            {isLastChapter && (
              <div className="cinema-story__cta-group">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onJumpToSection('destinasi')}
                >
                  Jelajahi Destinasi ↓
                </button>
                <button type="button" className="btn-ghost" onClick={onReplayTop}>
                  Ulangi Perjalanan ↑
                </button>
              </div>
            )}
          </div>

          {/* Timeline Scrubber Vertikal Kanan */}
          <aside className="cinema-timeline" aria-label="Timeline Babak">
            <div className="cinema-timeline__track">
              <div
                className="cinema-timeline__fill"
                style={{ height: `${Math.round(smoothProgress * 100)}%` }}
              />
            </div>
            <div className="cinema-timeline__nodes">
              {CHAPTERS.map((chapter, index) => {
                const active = chapter.id === activeChapter.id;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    className={`cinema-timeline__node ${
                      active ? 'cinema-timeline__node--active' : ''
                    }`}
                    onClick={() => onJumpToChapter(chapter)}
                    title={`Lompat ke ${chapter.shortLabel}`}
                  >
                    <span className="cinema-timeline__label">
                      0{index + 1} · {chapter.shortLabel}
                    </span>
                    <span className="cinema-timeline__dot" />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Petunjuk Scroll Bawah */}
          <div
            className={`cinema-scroll-cue ${
              isFirstChapter && smoothProgress < 0.08 ? '' : 'cinema-scroll-cue--hidden'
            }`}
          >
            <div className="cinema-scroll-cue__mouse" aria-hidden="true">
              <span />
            </div>
            <span>Gulir untuk Menyelam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
