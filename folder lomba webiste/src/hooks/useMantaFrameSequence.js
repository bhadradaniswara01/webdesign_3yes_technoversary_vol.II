import { useCallback, useEffect, useRef, useState } from 'react';
import { getMantaFrameUrl, TOTAL_MANTA_FRAMES } from '../data/mantaCinemaData';

/**
 * Mengelola preloading 273 frame bawah laut Manta Point ke memori browser
 * dengan prioritas: frame awal, frame milestone (kelipatan 10), lalu sisanya secara asynchronous.
 */
export function useMantaFrameSequence() {
  const framesRef = useRef(new Array(TOTAL_MANTA_FRAMES).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const loadedSet = new Set();

    // Urutan antrean prioritas
    const queue = [];
    const seen = new Set();
    const pushIndex = (idx) => {
      if (!seen.has(idx) && idx >= 0 && idx < TOTAL_MANTA_FRAMES) {
        seen.add(idx);
        queue.push(idx);
      }
    };

    // 1. Frame awal
    pushIndex(0);
    // 2. Tiap kelipatan 10 untuk scrubber cepat
    for (let step = 0; step < TOTAL_MANTA_FRAMES; step += 10) {
      pushIndex(step);
    }
    // 3. Frame sisanya secara berurutan
    for (let i = 0; i < TOTAL_MANTA_FRAMES; i += 1) {
      pushIndex(i);
    }

    let cursor = 0;
    const CONCURRENCY = 8;

    const markLoaded = (index, img) => {
      if (cancelled) return;
      if (img) {
        framesRef.current[index] = img;
      }
      if (!loadedSet.has(index)) {
        loadedSet.add(index);
        const count = loadedSet.size;
        setLoadedCount(count);
        // Cukup 20 frame awal termuat, scroll cinema sudah siap dinikmati tanpa delay
        if (count >= 20 || count === TOTAL_MANTA_FRAMES) {
          setIsReady(true);
        }
      }
    };

    const loadNext = () => {
      if (cancelled || cursor >= queue.length) return;
      const frameIndex = queue[cursor];
      cursor += 1;

      const img = new Image();
      img.decoding = 'async';
      img.src = getMantaFrameUrl(frameIndex + 1);

      const finish = (success) => {
        markLoaded(frameIndex, success ? img : null);
        loadNext();
      };

      img.onload = () => {
        if (typeof img.decode === 'function') {
          img.decode().then(() => finish(true)).catch(() => finish(true));
        } else {
          finish(true);
        }
      };
      img.onerror = () => finish(false);
    };

    for (let w = 0; w < CONCURRENCY; w += 1) {
      loadNext();
    }

    const fallbackTimer = setTimeout(() => {
      if (!cancelled) setIsReady(true);
    }, 2500);

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
  }, []);

  /**
   * Mengambil frame yang diminta atau frame terdekat yang sudah termuat
   */
  const getBestFrame = useCallback((zeroBasedIndex) => {
    const frames = framesRef.current;
    const clamped = Math.max(0, Math.min(TOTAL_MANTA_FRAMES - 1, Math.round(zeroBasedIndex)));
    if (frames[clamped]) return frames[clamped];

    for (let offset = 1; offset < TOTAL_MANTA_FRAMES; offset += 1) {
      if (clamped - offset >= 0 && frames[clamped - offset]) {
        return frames[clamped - offset];
      }
      if (clamped + offset < TOTAL_MANTA_FRAMES && frames[clamped + offset]) {
        return frames[clamped + offset];
      }
    }
    return null;
  }, []);

  return {
    loadedCount,
    totalFrames: TOTAL_MANTA_FRAMES,
    progressPercent: Math.round((loadedCount / TOTAL_MANTA_FRAMES) * 100),
    isReady,
    getBestFrame,
  };
}
