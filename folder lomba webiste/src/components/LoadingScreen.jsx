export default function LoadingScreen({
  loadedCount,
  totalFrames,
  progressPercent,
  isReady,
  onSkip,
}) {
  return (
    <div
      className={`loading-curtain ${isReady ? 'loading-curtain--done' : ''}`}
      aria-hidden={isReady}
    >
      <div className="loading-curtain__glow" />
      <div className="loading-curtain__card">
        <div className="loading-curtain__sonar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <p className="loading-curtain__eyebrow">NUSA PENIDA · BALI</p>
        <h2 className="loading-curtain__title">Menyiapkan Ruang 3D</h2>
        <p className="loading-curtain__desc">
          Menyelaraskan {totalFrames} frame sinematik untuk pengalaman scroll interaktif.
        </p>

        <div className="loading-curtain__bar-wrap" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="loading-curtain__bar-fill"
            style={{ width: `${Math.min(100, progressPercent)}%` }}
          />
        </div>

        <div className="loading-curtain__meta">
          <span>
            FRAME {String(loadedCount).padStart(3, '0')} / {totalFrames}
          </span>
          <span>{progressPercent}%</span>
        </div>

        {!isReady && loadedCount >= 1 && (
          <button type="button" className="loading-curtain__skip" onClick={onSkip}>
            Masuk Sekarang →
          </button>
        )}
      </div>
    </div>
  );
}
