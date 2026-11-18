import { useCallback, useEffect, useRef, useState } from 'react';
import { getFrameUrl, TOTAL_FRAMES } from '../data/expeditionData';

/**
 * Mengelola preloading seluruh frame gambar ke memori browser dengan antrean
 * terprioritas sehingga scrub scroll dan playback berlangsung mulus tanpa kedip.
 */
export function useFrameSequence() {
  const framesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const loadedSet = new Set();

    // Urutan prioritas: frame awal, frame kelipatan 8 (preview cepat), lalu sisanya.
    const queue = [];
    const seen = new Set();
    const pushIndex = (idx) => {
      if (!seen.has(idx)) {
        seen.add(idx);
        queue.push(idx);
      }
    };

    pushIndex(0);
    for (let step = 0; step < TOTAL_FRAMES; step += 8) {
      pushIndex(step);
    }
    for (let i = 0; i < TOTAL_FRAMES; i += 1) {
      pushIndex(i);
    }

    let cursor = 0;
    const CONCURRENCY = 10;

    const markLoaded = (index, img) => {
      if (cancelled) return;
      if (img) {
        framesRef.current[index] = img;
      }
      if (!loadedSet.has(index)) {
        loadedSet.add(index);
        const count = loadedSet.size;
        setLoadedCount(count);
        // Buka tirai loading begitu semua keyframe utama atau minimal 25% termuat (atau selesai).
        if (count >= 48 || count === TOTAL_FRAMES) {
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
      img.src = getFrameUrl(frameIndex + 1);

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

    // Fallback pengaman agar pengguna tidak pernah tertahan jika koneksi sangat lambat.
    const fallbackTimer = setTimeout(() => {
      if (!cancelled) setIsReady(true);
    }, 3500);

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
  }, []);

  /**
   * Mengambil frame yang diminta, atau frame terdekat yang sudah selesai dimuat
   * agar kanvas tidak pernah kosong ketika user melakukan scroll cepat.
   * @param {number} zeroBasedIndex
   * @returns {HTMLImageElement | null}
   */
  const getBestFrame = useCallback((zeroBasedIndex) => {
    const frames = framesRef.current;
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(zeroBasedIndex)));
    if (frames[clamped]) return frames[clamped];

    for (let offset = 1; offset < TOTAL_FRAMES; offset += 1) {
      if (clamped - offset >= 0 && frames[clamped - offset]) {
        return frames[clamped - offset];
      }
      if (clamped + offset < TOTAL_FRAMES && frames[clamped + offset]) {
        return frames[clamped + offset];
      }
    }
    return null;
  }, []);

  const forceEnter = useCallback(() => setIsReady(true), []);

  return {
    loadedCount,
    totalFrames: TOTAL_FRAMES,
    progressPercent: Math.round((loadedCount / TOTAL_FRAMES) * 100),
    isReady,
    forceEnter,
    getBestFrame,
  };
}
