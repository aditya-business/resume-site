import { useEffect } from 'react';
import {
  Check,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from 'lucide-react';
import {
  BlogPost,
  FeatureItem,
  PortfolioItem,
  PROFILE_INFO,
} from '../data/portfolioData';
import { PortfolioPreviewGraphic } from './PortfolioSection';

export type ModalState =
  | { type: 'feature'; data: FeatureItem }
  | { type: 'project'; data: PortfolioItem }
  | { type: 'blog'; data: BlogPost }
  | { type: 'demos' }
  | { type: 'talk' }
  | null;

interface DetailModalProps {
  modal: ModalState;
  onClose: () => void;
  onNavigateSection: (href: string) => void;
}

export function DetailModal({
  modal,
  onClose,
  onNavigateSection,
}: DetailModalProps) {
  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-[3px]"
      role="dialog"
      aria-modal="true"
      aria-label={modal.type === 'talk' ? 'Talk to Aditya Singh' : 'Details modal'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#212428] border border-[#2E3239] p-6 sm:p-10 shadow-2xl text-[#D9D9D9]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full neu-btn flex items-center justify-center text-[#FF014F] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
        >
          <X className="w-5 h-5" />
        </button>

        {modal.type === 'talk' && (
          <div className="pr-4">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#FF014F]">
              TALK TO ME
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#D9D9D9] mt-2">
              Let&apos;s Connect — {PROFILE_INFO.fullName}
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] leading-[1.8] text-[#D9D9D9]/90">
              I&apos;m an undergraduate student at IIM Bangalore and BHU
              currently interning in sales &amp; marketing at Entrance UG. Always
              happy to chat about internships, student projects, case
              competitions, or marketing ideas.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl neu-btn flex items-center gap-3.5 text-[#D9D9D9] hover:text-[#FF014F]"
              >
                <span className="w-10 h-10 rounded-lg neu-card-soft flex items-center justify-center text-[#FF014F] shrink-0">
                  <Linkedin className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9BA3B0]">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium truncate">
                    {PROFILE_INFO.linkedinHandle}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="p-4 rounded-xl neu-btn flex items-center gap-3.5 text-[#D9D9D9] hover:text-[#FF014F]"
              >
                <span className="w-10 h-10 rounded-lg neu-card-soft flex items-center justify-center text-[#FF014F] shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9BA3B0]">
                    Email
                  </p>
                  <p className="text-sm font-medium truncate">
                    {PROFILE_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PROFILE_INFO.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-xl neu-btn flex items-center gap-3.5 text-[#D9D9D9] hover:text-[#FF014F]"
              >
                <span className="w-10 h-10 rounded-lg neu-card-soft flex items-center justify-center text-[#FF014F] shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9BA3B0]">
                    Phone
                  </p>
                  <p className="text-sm font-medium">{PROFILE_INFO.phone}</p>
                </div>
              </a>

              <div className="p-4 rounded-xl neu-card flex items-center gap-3.5 text-[#D9D9D9]">
                <span className="w-10 h-10 rounded-lg neu-card-soft flex items-center justify-center text-[#FF014F] shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9BA3B0]">
                    Location
                  </p>
                  <p className="text-sm font-medium">{PROFILE_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateSection('#contacts');
                }}
                className="px-6 py-3 rounded-md neu-btn neu-btn-accent text-[#FF014F] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Send a Message
              </button>
              <a
                href={PROFILE_INFO.resumePdfPath}
                download="Aditya_Singh_Resume.pdf"
                className="px-6 py-3 rounded-md neu-btn text-[#D9D9D9] hover:text-[#FF014F] text-xs font-semibold uppercase tracking-wider"
              >
                Download Resume PDF
              </a>
            </div>
          </div>
        )}

        {modal.type === 'feature' && (
          <div className="pr-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#FF014F]">
              LEARNING &amp; EXPERIENCE
            </p>
            <h2 className="font-display font-bold text-3xl text-[#D9D9D9] mt-2">
              {modal.data.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#D9D9D9]/90">
              {modal.data.description}
            </p>

            <div className="mt-6 pt-6 border-t border-[#2E3239]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9] mb-3">
                What I&apos;ve Worked On
              </p>
              <ul className="space-y-2.5">
                {modal.data.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[#D9D9D9]/90"
                  >
                    <Check className="w-4 h-4 text-[#FF014F] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#9BA3B0]">
                Context: <strong className="text-[#D9D9D9]">{modal.data.contextLabel}</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateSection('#contacts');
                }}
                className="px-6 py-3 rounded-md neu-btn neu-btn-accent text-[#FF014F] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Talk to Me
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateSection('#resume');
                }}
                className="px-6 py-3 rounded-md neu-btn text-[#D9D9D9] hover:text-[#FF014F] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                View Resume
              </button>
            </div>
          </div>
        )}

        {modal.type === 'project' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div
              className={`md:col-span-6 rounded-xl overflow-hidden shadow-md ${
                modal.data.imagePath
                  ? modal.data.imageModalAspect === 'landscape'
                    ? 'aspect-[16/9] w-full'
                    : modal.data.imageModalAspect === 'square'
                      ? 'aspect-square max-h-[380px] mx-auto w-full'
                      : 'aspect-[4/5] max-h-[440px] mx-auto w-full'
                  : 'aspect-[4/3]'
              }`}
            >
              <PortfolioPreviewGraphic
                variant={modal.data.previewVariant}
                imagePath={modal.data.imagePath}
                imageBg={modal.data.imageBg}
                imageFit={modal.data.imageFit}
                title={modal.data.title}
              />
            </div>
            <div className="md:col-span-6 pr-4">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#FF014F]">
                Project — {modal.data.category}
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#D9D9D9] mt-2 leading-snug">
                {modal.data.title}
              </h2>
              <p className="mt-4 text-sm leading-[1.75] text-[#D9D9D9]/90">
                {modal.data.summary}
              </p>
              <div className="mt-5 space-y-1.5 text-xs text-[#9BA3B0]">
                <p>
                  Organization:{' '}
                  <strong className="text-[#D9D9D9]">{modal.data.organization}</strong>
                </p>
                <p>
                  Role: <strong className="text-[#D9D9D9]">{modal.data.roleSummary}</strong>
                </p>
                <p>
                  Timeline: <strong className="text-[#D9D9D9]">{modal.data.date}</strong>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigateSection('#contacts');
                  }}
                  className="px-5 py-3 rounded-md neu-btn neu-btn-accent text-xs font-semibold uppercase tracking-wider text-[#FF014F] cursor-pointer"
                >
                  Talk About This
                </button>
              </div>
            </div>
          </div>
        )}

        {modal.type === 'blog' && (
          <div className="pr-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#9BA3B0]">
              <span className="text-[#FF014F] font-semibold uppercase tracking-wider">
                {modal.data.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{modal.data.date}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {modal.data.readTime}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#D9D9D9] mt-3">
              {modal.data.title}
            </h2>
            <p className="mt-2 text-xs text-[#9BA3B0]">
              Notes by {modal.data.author}
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#D9D9D9]/90">
              {modal.data.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {modal.type === 'demos' && (
          <div className="pr-4">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#FF014F]">
              SECTION DIRECTORY
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#D9D9D9] mt-2">
              Jump to Portfolio Sections
            </h2>
            <p className="mt-2 text-sm text-[#D9D9D9]/85">
              Navigate directly to any section of Aditya Singh&apos;s student
              portfolio and CV.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Hero & Intro', href: '#home' },
                { label: 'Skills & Practice', href: '#features' },
                { label: 'Projects & Cases', href: '#portfolio' },
                { label: 'Resume & CV', href: '#resume' },
                { label: 'Peer Feedback', href: '#testimonial' },
                { label: 'Organizations', href: '#clients' },
                { label: 'What I Study', href: '#coursework' },
                { label: 'Student Notes', href: '#blog' },
                { label: 'Talk to Me', href: '#contacts' },
              ].map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigateSection(item.href);
                  }}
                  className="p-4 rounded-xl neu-btn text-left font-display font-semibold text-sm text-[#D9D9D9] hover:text-[#FF014F] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
