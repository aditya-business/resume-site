import { useEffect, useState } from 'react';
import { FileText, Linkedin, Mail } from 'lucide-react';
import { HERO_ROLES, PROFILE_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenDemos: () => void;
  onTalkToMe: () => void;
}

export function HeroSection({ onOpenDemos, onTalkToMe }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(HERO_ROLES[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const currentRole = HERO_ROLES[roleIndex];
    let timeout: number;

    if (!isDeleting && charIndex === currentRole.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      }, 280);
    } else {
      const speed = isDeleting ? 42 : 78;
      timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);
    }

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedRole = HERO_ROLES[roleIndex].slice(0, charIndex);

  return (
    <section
      id="home"
      className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-20 lg:pt-14 lg:pb-24"
    >
      {/* Floating Right-Edge Quick Section Directory Tab */}
      <button
        type="button"
        onClick={onOpenDemos}
        aria-label="Browse portfolio sections"
        className="hidden lg:flex fixed right-0 top-36 z-30 items-center justify-center py-4 px-2 rounded-l-md bg-gradient-to-b from-[#15B890] to-[#1D78B8] text-white shadow-md hover:px-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
      >
        <span
          className="text-[10px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          QUICK NAV
        </span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Student Identity & Action Tiles */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#6E737B] mb-4">
            UNDERGRADUATE STUDENT · IIM BANGALORE &amp; BHU
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-[54px] leading-[1.18] text-[#1E2125] tracking-tight">
            <span className="block">
              Hi, I’m <span className="text-[#FF014F]">{PROFILE_INFO.fullName}</span>
            </span>
            <span className="block mt-1 min-h-[1.22em]">
              <span className="text-[#FF014F]">a</span>{' '}
              <span>{displayedRole}</span>
              <span
                aria-hidden="true"
                className="text-[#FF014F] font-light typing-cursor ml-0.5"
              >
                |
              </span>
            </span>
          </h1>

          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.85] text-[#3C3E41] max-w-[580px]">
            {PROFILE_INFO.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onTalkToMe}
              className="px-6 py-3.5 rounded-md neu-btn neu-btn-accent text-[#FF014F] text-xs font-semibold uppercase tracking-[0.08em] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
            >
              Talk to me
            </button>
            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-md neu-btn text-[#1E2125] hover:text-[#FF014F] text-xs font-semibold uppercase tracking-[0.08em] inline-flex items-center gap-2"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#FF014F]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="px-5 py-3.5 rounded-md neu-btn text-[#1E2125] hover:text-[#FF014F] text-xs font-semibold uppercase tracking-[0.08em] inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF014F]" />
              <span>Email Me</span>
            </a>
          </div>

          {/* Bottom Icon Cluster */}
          <div className="mt-12 lg:mt-14">
            {/* CONNECT & CV */}
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6E737B] mb-5">
                CONNECT &amp; CV
              </p>
              <div className="flex items-center gap-4 sm:gap-5">
                <a
                  href={PROFILE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aditya Singh on LinkedIn"
                  title={PROFILE_INFO.linkedinHandle}
                  className="w-14 h-14 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.75} />
                </a>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  aria-label={`Email Aditya Singh at ${PROFILE_INFO.email}`}
                  title={PROFILE_INFO.email}
                  className="w-14 h-14 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </a>
                <a
                  href={PROFILE_INFO.cvPdfPath}
                  download="Aditya_Singh_CV.pdf"
                  aria-label="Download Aditya Singh CV PDF"
                  title="Download Full CV (PDF)"
                  className="w-14 h-14 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
                >
                  <FileText className="w-5 h-5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Attached Portrait of Aditya Singh */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] p-4 sm:p-5 rounded-2xl neu-card">
            <div className="aspect-square rounded-xl overflow-hidden bg-white">
              <img
                src={PROFILE_INFO.portraitPath}
                alt="Aditya Singh — Undergraduate Student at IIM Bangalore and BHU"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
