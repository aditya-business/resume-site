import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export function PortfolioPreviewGraphic({
  variant,
  imagePath,
  imageBg,
  imageFit = 'contain',
  title,
}: {
  variant: PortfolioItem['previewVariant'];
  imagePath?: string;
  imageBg?: string;
  imageFit?: 'contain' | 'cover';
  title?: string;
}) {
  if (imagePath) {
    const isLightBg = imageBg?.toUpperCase() === '#FFFFFF';
    const isCover = imageFit === 'cover';
    return (
      <div
        style={{ backgroundColor: imageBg ?? '#062B34' }}
        className={`w-full h-full flex items-center justify-center ${
          isLightBg && !isCover ? 'border border-[#DCE1E4] p-1.5' : ''
        }`}
      >
        <img
          src={imagePath}
          alt={title ? `${title} preview` : 'Project preview'}
          referrerPolicy="no-referrer"
          className={`w-full h-full ${isCover ? 'object-cover object-center' : 'object-contain'}`}
        />
      </div>
    );
  }

  switch (variant) {
    case 'dashboard':
      return (
        <div className="w-full h-full bg-[#14171C] p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF014F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3F47]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3F47]" />
            </div>
            <span className="text-[10px] tracking-widest uppercase text-slate-400">
              SPECIAL 50 · IPMAT
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 my-3">
            <div className="col-span-2 rounded-lg bg-[#1E222A] p-3 border border-white/5">
              <div className="h-2 w-16 bg-[#FF014F] rounded mb-2" />
              <div className="h-2 w-28 bg-slate-600 rounded mb-3" />
              <div className="flex items-end gap-1.5 h-12">
                <div className="w-full bg-slate-700 rounded-t h-5" />
                <div className="w-full bg-slate-600 rounded-t h-8" />
                <div className="w-full bg-[#FF014F] rounded-t h-11" />
                <div className="w-full bg-slate-600 rounded-t h-7" />
                <div className="w-full bg-slate-500 rounded-t h-9" />
              </div>
            </div>
            <div className="rounded-lg bg-[#1E222A] p-3 border border-white/5 flex flex-col justify-between">
              <div className="w-7 h-7 rounded-md bg-[#FF014F]/20 border border-[#FF014F]/40" />
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-slate-500 rounded" />
                <div className="h-2 w-2/3 bg-slate-700 rounded" />
              </div>
            </div>
          </div>
          <div className="h-2 w-1/2 bg-slate-700/70 rounded" />
        </div>
      );
    case 'mobile':
      return (
        <div className="w-full h-full bg-[#16191F] p-5 flex items-center justify-center gap-4">
          <div className="w-24 h-40 rounded-2xl bg-[#21252E] border border-white/10 p-2.5 flex flex-col justify-between shadow-lg">
            <div className="w-8 h-1 bg-slate-600 rounded-full mx-auto" />
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-gradient-to-br from-[#FF014F] to-[#9b0836]" />
              <div className="h-2 w-14 bg-slate-500 rounded" />
              <div className="h-2 w-10 bg-slate-700 rounded" />
            </div>
            <div className="h-5 rounded-md bg-white/10" />
          </div>
          <div className="w-24 h-36 rounded-2xl bg-[#1D2027] border border-white/10 p-2.5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-4 h-4 rounded-full bg-[#FF014F]/30" />
              <div className="w-6 h-1.5 bg-slate-600 rounded" />
            </div>
            <div className="space-y-1.5">
              <div className="h-6 rounded bg-slate-800" />
              <div className="h-6 rounded bg-slate-800" />
              <div className="h-6 rounded bg-[#FF014F]/25" />
            </div>
            <div className="h-2 w-12 bg-slate-600 rounded" />
          </div>
        </div>
      );
    case 'brand':
      return (
        <div className="w-full h-full bg-[#181B20] p-6 flex flex-col items-center justify-center text-white">
          <div className="w-20 h-20 rounded-2xl border-2 border-[#FF014F] rotate-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl border border-white/60 -rotate-12 flex items-center justify-center font-display font-bold text-lg tracking-wider">
              MF
            </div>
          </div>
          <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-slate-300">
            McKinsey Forward
          </p>
        </div>
      );
    case 'ecommerce':
      return (
        <div className="w-full h-full bg-[#171A20] p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="h-2.5 w-14 bg-white/80 rounded" />
            <div className="w-5 h-5 rounded-full bg-[#FF014F]" />
          </div>
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="rounded-lg bg-[#22262F] p-3 border border-white/5">
              <div className="h-14 rounded bg-gradient-to-tr from-[#2E333E] to-[#3B414F] mb-2" />
              <div className="h-2 w-12 bg-slate-400 rounded mb-1" />
              <div className="h-2 w-8 bg-[#FF014F] rounded" />
            </div>
            <div className="rounded-lg bg-[#22262F] p-3 border border-white/5">
              <div className="h-14 rounded bg-gradient-to-tr from-[#3B1825] to-[#FF014F]/40 mb-2" />
              <div className="h-2 w-12 bg-slate-400 rounded mb-1" />
              <div className="h-2 w-8 bg-slate-500 rounded" />
            </div>
          </div>
          <div className="h-2 w-24 bg-slate-700 rounded" />
        </div>
      );
    case 'analytics':
      return (
        <div className="w-full h-full bg-[#12161E] p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-widest">
            <span>SEO &amp; CTR Lift</span>
            <span className="text-[#FF014F] font-semibold tabular-nums">Top Rank</span>
          </div>
          <svg viewBox="0 0 220 90" className="w-full h-24" aria-hidden="true">
            <polyline
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              points="0,70 220,70"
            />
            <polyline
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              points="0,40 220,40"
            />
            <path
              d="M10,72 Q45,60 70,52 T130,36 T185,20 L210,16"
              fill="none"
              stroke="#FF014F"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="130" cy="36" r="4" fill="#FFFFFF" />
            <circle cx="210" cy="16" r="4" fill="#FF014F" />
          </svg>
          <div className="flex gap-2">
            <div className="h-2 w-16 bg-slate-600 rounded" />
            <div className="h-2 w-10 bg-slate-700 rounded" />
          </div>
        </div>
      );
    case 'editorial':
      return (
        <div className="w-full h-full bg-[#1C1F26] p-6 flex flex-col justify-between text-white">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#FF014F]">
            UNHRC · IIM Rohtak
          </div>
          <div className="space-y-2">
            <div className="h-3.5 w-4/5 bg-white/90 rounded" />
            <div className="h-3.5 w-3/5 bg-white/75 rounded" />
            <div className="h-2 w-full bg-slate-600 rounded mt-3" />
            <div className="h-2 w-5/6 bg-slate-600 rounded" />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="h-2 w-20 bg-slate-500 rounded" />
            <div className="h-2 w-8 bg-[#FF014F] rounded" />
          </div>
        </div>
      );
  }
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          INTERNSHIP PROJECTS · COMPETITIONS · ACTIVITIES
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          Projects &amp; Initiatives
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_ITEMS.map((project) => (
          <article
            key={project.id}
            className="group p-7 rounded-2xl neu-card flex flex-col justify-between transition-transform duration-300"
          >
            <div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] transition-transform duration-300 group-hover:scale-[1.02]"
                aria-label={`View details for ${project.title}`}
              >
                <PortfolioPreviewGraphic
                  variant={project.previewVariant}
                  imagePath={project.imagePath}
                  imageBg={project.imageBg}
                  imageFit={project.imageFit}
                  title={project.title}
                />
              </button>

              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#FF014F]">
                  {project.category}
                </span>
                <span className="text-[12px] text-[#6E737B]">
                  {project.date}
                </span>
              </div>

              <h3 className="mt-3">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left font-display font-semibold text-[20px] leading-[1.4] text-[#1E2125] hover:text-[#FF014F] transition-colors inline-flex items-start gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] rounded"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF014F]" />
                </button>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
