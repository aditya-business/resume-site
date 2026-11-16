import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-14 flex flex-col items-center text-center relative">
      <a
        href="#home"
        className="flex flex-col items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] rounded-lg p-2"
      >
        <span className="w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-[#DCE1E4] shadow-sm flex items-center justify-center">
          <img
            src={PROFILE_INFO.portraitPath}
            alt={`${PROFILE_INFO.fullName} avatar`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </span>
        <span className="font-display font-bold text-lg tracking-[0.06em] text-[#1E2125] group-hover:text-[#FF014F] transition-colors">
          {PROFILE_INFO.fullName.toUpperCase()}
        </span>
      </a>

      <p className="mt-4 text-[14px] text-[#6E737B]">
        &copy; 2026. All rights reserved by {PROFILE_INFO.fullName}.
      </p>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="mt-6 sm:mt-0 sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2 w-12 h-12 rounded-full neu-btn flex items-center justify-center text-[#FF014F] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
