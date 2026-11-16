import { useEffect, useState } from 'react';
import { calculateScrollProgress } from '../utils/portfolioLogic';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const next = calculateScrollProgress(
        window.scrollY,
        doc.scrollHeight,
        window.innerHeight
      );
      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/10 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#f02981] to-[#FF014F] transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
