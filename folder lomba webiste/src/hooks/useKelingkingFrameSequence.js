import { useCallback, useEffect, useRef, useState } from 'react';
import { getKelingkingFrameUrl, TOTAL_KELINGKING_FRAMES } from '../data/kelingkingCinemaData';

/**
 * Mengelola preloading 425 frame Kelingking Beach ke memori browser
 * dengan prioritas: frame awal, frame milestone (kelipatan 10), lalu sisanya secara asynchronous.
 */
export function useKelingkingFrameSequence() {
  const framesRef = useRef(new Array(TOTAL_KELINGKING_FRAMES).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const loadedSet = new Set();

    // Urutan antrean prioritas
    const queue = [];
    const seen = new Set();
    const pushIndex = (idx) => {
      if (!seen.has(idx) && idx >= 0 && idx < TOTAL_KELINGKING_FRAMES) {
        seen.add(idx);
        queue.push(idx);
      }
    };

    // 1. Frame awal
    pushIndex(0);
    // 2. Tiap kelipatan 10 untuk scrubber cepat
    for (let step = 0; step < TOTAL_KELINGKING_FRAMES; step += 10) {
      pushIndex(step);
    }
    // 3. Frame sisanya secara berurutan
    for (let i = 0; i < TOTAL_KELINGKING_FRAMES; i += 1) {
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
        if (count >= 20 || count === TOTAL_KELINGKING_FRAMES) {
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
      img.src = getKelingkingFrameUrl(frameIndex + 1);

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
    const clamped = Math.max(0, Math.min(TOTAL_KELINGKING_FRAMES - 1, Math.round(zeroBasedIndex)));

    if (frames[clamped]) {
      return frames[clamped];
    }

    // Cari frame terdekat yang sudah termuat
    for (let offset = 1; offset < TOTAL_KELINGKING_FRAMES; offset += 1) {
      const up = clamped + offset;
      if (up < TOTAL_KELINGKING_FRAMES && frames[up]) return frames[up];
      const down = clamped - offset;
      if (down >= 0 && frames[down]) return frames[down];
    }

    return null;
  }, []);

  return {
    loadedCount,
    totalFrames: TOTAL_KELINGKING_FRAMES,
    isReady,
    getBestFrame,
  };
}
