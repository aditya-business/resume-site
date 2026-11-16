import { useState } from 'react';
import { BookOpen, Check } from 'lucide-react';
import { COURSEWORK_TABS, CourseworkTab } from '../data/portfolioData';

interface CourseworkSectionProps {
  onTalkToMe: () => void;
}

export function CourseworkSection({ onTalkToMe }: CourseworkSectionProps) {
  const [selectedId, setSelectedId] = useState<CourseworkTab['id']>('iimb');
  const activeTab =
    COURSEWORK_TABS.find((t) => t.id === selectedId) ?? COURSEWORK_TABS[0];

  return (
    <section
      id="coursework"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sticky Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
            ACADEMIC JOURNEY
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
            What I&apos;m Studying
          </h2>
          <p className="mt-5 text-[15px] leading-[1.8] text-[#3C3E41] max-w-md">
            Balancing management, psychology, economics, and computer
            applications across IIM Bangalore and Banaras Hindu University while
            applying what I learn in real internship projects.
          </p>
        </div>

        {/* Right Interactive Coursework Card */}
        <div className="lg:col-span-7 rounded-2xl neu-card overflow-hidden">
          <div
            role="tablist"
            aria-label="Academic programmes"
            className="grid grid-cols-3 border-b border-[#DCE1E4]"
          >
            {COURSEWORK_TABS.map((tab) => {
              const isSelected = tab.id === selectedId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(tab.id)}
                  className={`py-5 px-3 sm:px-4 text-xs sm:text-sm md:text-base font-medium transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] ${
                    isSelected
                      ? 'neu-card text-[#FF014F] font-semibold'
                      : 'text-[#1E2125] hover:text-[#FF014F]'
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          <div className="p-8 sm:p-11">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-[28px] text-[#1E2125]">
                  {activeTab.title}
                </h3>
                <p className="text-[14px] text-[#6E737B] mt-1">
                  {activeTab.subtitle}
                </p>
              </div>
              <div className="px-4 py-2.5 rounded-lg neu-card-soft font-display font-semibold text-xs sm:text-sm text-[#FF014F] whitespace-nowrap">
                {activeTab.statusBadge}
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-[1.8] text-[#3C3E41]">
              {activeTab.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {activeTab.topics.map((topic, idx) => (
                <div
                  key={`${activeTab.id}-${idx}`}
                  className="flex items-center gap-2.5 text-[14px] text-[#3C3E41]"
                >
                  <Check
                    className="w-4 h-4 text-[#FF014F] shrink-0"
                    strokeWidth={2.2}
                  />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onTalkToMe}
              className="mt-10 w-full py-4 px-6 rounded-lg neu-btn neu-btn-accent text-[#FF014F] font-semibold text-sm uppercase tracking-[0.08em] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
            >
              <span>Talk to me about collaborations</span>
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-[12px] text-[#6E737B]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{activeTab.timelineInfo}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
