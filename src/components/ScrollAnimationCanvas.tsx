import { useEffect, useRef } from 'react';

export function ScrollAnimationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const TOTAL_FRAMES = 300;
    const CONCURRENCY = 6;
    const FRAME_PATH = (i: number) =>
      `/frames/frame_${String(i + 1).padStart(4, '0')}.jpg`;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const frames = new Array<HTMLImageElement | null>(TOTAL_FRAMES).fill(null);
    const requested = new Uint8Array(TOTAL_FRAMES);

    let canvasW = 0;
    let canvasH = 0;
    let dpr = 1;
    let lastRenderedIndex = -1;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastTime = performance.now();
    let isTicking = false;
    let activeWorkers = 0;
    let isDestroyed = false;

    /* ---------- HiDPI / Retina Canvas Resize ---------- */
    function onResize() {
      if (isDestroyed || !canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvasW = Math.round(vw * dpr);
      canvasH = Math.round(vh * dpr);

      if (canvas.width !== canvasW || canvas.height !== canvasH) {
        canvas.width = canvasW;
        canvas.height = canvasH;
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
        }
        lastRenderedIndex = -1;
        renderCurrentFrame();
      }
    }

    /* ---------- High Quality Cover-Fit Draw ---------- */
    function drawImageCover(img: HTMLImageElement) {
      if (!img || !canvas || !ctx) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) * 0.5;
      const dy = (ch - dh) * 0.5;

      ctx.drawImage(img, dx, dy, dw, dh);
    }

    /* ---------- Nearest Loaded Frame Search ---------- */
    function findBestFrameIndex(idealIndex: number) {
      if (frames[idealIndex]) return idealIndex;
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = idealIndex - offset;
        if (prev >= 0 && frames[prev]) return prev;
        const next = idealIndex + offset;
        if (next < TOTAL_FRAMES && frames[next]) return next;
      }
      return -1;
    }

    function renderCurrentFrame() {
      const ideal = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgress))
      );
      const best = findBestFrameIndex(ideal);
      if (best < 0) return;

      if (best !== lastRenderedIndex) {
        drawImageCover(frames[best]!);
        lastRenderedIndex = best;
      }
    }

    /* ---------- Scroll Mapping & Physics ---------- */
    function updateScrollTarget() {
      if (isDestroyed) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      targetProgress = ratio * (TOTAL_FRAMES - 1);
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(tick);
      }
    }

    function tick(now: number) {
      if (isDestroyed) return;
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      // Snappy and buttery exponential damping
      const speed = 14;
      const factor = 1 - Math.exp(-dt * speed);
      currentProgress += (targetProgress - currentProgress) * factor;

      const delta = Math.abs(targetProgress - currentProgress);
      if (delta < 0.002) {
        currentProgress = targetProgress;
      }

      renderCurrentFrame();

      if (delta >= 0.002) {
        requestAnimationFrame(tick);
      } else {
        isTicking = false;
      }
    }

    /* ---------- Priority Preloader ---------- */
    function getNextIndexToLoad() {
      let bestIndex = -1;
      let minDistance = Infinity;
      const center = Math.round(targetProgress);

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!requested[i]) {
          const dist = Math.abs(i - center);
          if (dist < minDistance) {
            minDistance = dist;
            bestIndex = i;
          }
        }
      }
      return bestIndex;
    }

    function spawnWorker() {
      if (isDestroyed || activeWorkers >= CONCURRENCY) return;
      const nextIdx = getNextIndexToLoad();
      if (nextIdx === -1) return;

      requested[nextIdx] = 1;
      activeWorkers++;

      const img = new Image();
      img.decoding = 'async';
      img.src = FRAME_PATH(nextIdx);

      const onDone = () => {
        activeWorkers--;
        if (isDestroyed) return;
        img
          .decode()
          .then(() => {
            frames[nextIdx] = img;
            if (nextIdx === 0 && canvas && !canvas.classList.contains('ready')) {
              canvas.classList.add('ready');
              renderCurrentFrame();
            } else {
              const currentTarget = Math.round(currentProgress);
              if (Math.abs(nextIdx - currentTarget) <= 1) {
                renderCurrentFrame();
              }
            }
          })
          .catch(() => {
            frames[nextIdx] = img;
          })
          .finally(() => {
            spawnWorker();
          });
      };

      img.onload = onDone;
      img.onerror = () => {
        activeWorkers--;
        if (!isDestroyed) spawnWorker();
      };
    }

    function pumpLoader() {
      while (activeWorkers < CONCURRENCY) {
        const idx = getNextIndexToLoad();
        if (idx === -1) break;
        spawnWorker();
      }
    }

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('scroll', pumpLoader, { passive: true });

    onResize();
    updateScrollTarget();
    currentProgress = targetProgress;

    // Load first frame immediately
    requested[0] = 1;
    activeWorkers++;
    const firstImg = new Image();
    firstImg.decoding = 'async';
    firstImg.src = FRAME_PATH(0);
    firstImg.onload = () => {
      activeWorkers--;
      firstImg
        .decode()
        .then(() => {
          frames[0] = firstImg;
          if (canvas) {
            canvas.classList.add('ready');
          }
          renderCurrentFrame();
        })
        .catch(() => {
          frames[0] = firstImg;
          if (canvas) {
            canvas.classList.add('ready');
          }
          renderCurrentFrame();
        })
        .finally(() => {
          pumpLoader();
        });
    };
    firstImg.onerror = () => {
      activeWorkers--;
      pumpLoader();
    };

    return () => {
      isDestroyed = true;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('scroll', pumpLoader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="scroll-animation-canvas"
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen object-cover pointer-events-none -z-10 bg-black opacity-0 transition-opacity duration-700 [&.ready]:opacity-100"
    />
  );
}

