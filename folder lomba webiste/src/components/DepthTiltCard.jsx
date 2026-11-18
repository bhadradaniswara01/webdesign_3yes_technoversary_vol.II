import { useRef, useState } from 'react';

/**
 * Kartu dengan efek kedalaman 3D interaktif mengikuti posisi kursor pengguna.
 */
export default function DepthTiltCard({ children, className = '', accent = '#38bdf8' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50, hovered: false });

  const handleMouseMove = (event) => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * 14;
    const rx = (0.5 - py) * 14;

    setTilt({
      rx,
      ry,
      mx: px * 100,
      my: py * 100,
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50, hovered: false });
  };

  return (
    <div
      ref={cardRef}
      className={`depth-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--card-accent': accent,
        '--mx': `${tilt.mx}%`,
        '--my': `${tilt.my}%`,
        transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${tilt.hovered ? -4 : 0}px)`,
      }}
    >
      <div className="depth-card__glare" aria-hidden="true" />
      {children}
    </div>
  );
}
