import { useState } from 'react';
import { Check } from 'lucide-react';
import {
  CERTIFICATIONS_ENTRIES,
  DESIGN_SKILLS,
  DEV_SKILLS,
  EDUCATION_ENTRIES,
  EXPERIENCE_ENTRIES,
  INTERVIEW_ENTRIES,
  KEY_PROJECT_ENTRIES,
  LANGUAGES_AND_INTERESTS,
  ResumeEntry,
  SkillMetric,
} from '../data/portfolioData';

type ResumeTab = 'education' | 'skills' | 'experience' | 'activities';

const RESUME_TABS: { id: ResumeTab; label: string }[] = [
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Professional Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'activities', label: 'Activities & Awards' },
];

function TimelineColumn({
  kicker,
  heading,
  items,
}: {
  kicker: string;
  heading: string;
  items: ResumeEntry[];
}) {
  return (
    <div>
      <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#FF014F] mb-2">
        {kicker}
      </p>
      <h3 className="font-display font-bold text-3xl text-[#1E2125] mb-8">
        {heading}
      </h3>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-7 sm:p-9 rounded-xl neu-card hover:bg-white/90 transition-all duration-200"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#DCE1E4]">
              <div>
                <h4 className="font-display font-semibold text-[20px] text-[#1E2125]">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#6E737B] mt-1">{item.subtitle}</p>
              </div>
              <span className="px-3.5 py-1.5 rounded-md neu-card-soft text-[13px] font-semibold text-[#FF014F] tabular-nums whitespace-nowrap shrink-0">
                {item.score}
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-[1.75] text-[#3C3E41]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillListColumn({
  kicker,
  heading,
  skills,
}: {
  kicker: string;
  heading: string;
  skills: SkillMetric[];
}) {
  return (
    <div>
      <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#FF014F] mb-2">
        {kicker}
      </p>
      <h3 className="font-display font-bold text-3xl text-[#1E2125] mb-8">
        {heading}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-5 rounded-xl neu-card flex items-center gap-4 hover:bg-white/90 transition-all duration-200"
          >
            <span className="w-9 h-9 rounded-lg neu-card-soft flex items-center justify-center text-[#FF014F] shrink-0">
              <Check className="w-4 h-4" />
            </span>
            <span className="font-display text-[15px] font-semibold text-[#1E2125]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<ResumeTab>('education');

  return (
    <section
      id="resume"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          EDUCATION · EXPERIENCE · CERTIFICATIONS
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          My Resume
        </h2>
      </div>

      {/* Tab Bar */}
      <div
        role="tablist"
        aria-label="Resume sections"
        className="grid grid-cols-2 lg:grid-cols-4 rounded-xl neu-card p-1.5 mb-14"
      >
        {RESUME_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 sm:py-5 px-4 rounded-lg text-sm sm:text-base font-medium transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] ${
                isActive
                  ? 'neu-card text-[#FF014F] font-semibold'
                  : 'text-[#1E2125] hover:text-[#FF014F]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'education' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <TimelineColumn
            kicker="Academic Background"
            heading="Education & Training"
            items={EDUCATION_ENTRIES}
          />
          <TimelineColumn
            kicker="Programs & Diplomas"
            heading="Certifications"
            items={CERTIFICATIONS_ENTRIES}
          />
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <SkillListColumn
            kicker="Core Competencies"
            heading="Sales, Marketing & Strategy"
            skills={DESIGN_SKILLS}
          />
          <SkillListColumn
            kicker="Technical & Communication"
            heading="Analytics, Python & Languages"
            skills={DEV_SKILLS}
          />
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <TimelineColumn
            kicker="09/2026 - Current"
            heading="Professional Experience"
            items={EXPERIENCE_ENTRIES}
          />
          <TimelineColumn
            kicker="IPMAT 2027 · Entrance UG"
            heading="Key Projects"
            items={KEY_PROJECT_ENTRIES}
          />
        </div>
      )}

      {activeTab === 'activities' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <TimelineColumn
            kicker="Conclaves & Competitions"
            heading="Activities"
            items={INTERVIEW_ENTRIES}
          />
          <TimelineColumn
            kicker="Fluency & Pursuits"
            heading="Languages & Interests"
            items={LANGUAGES_AND_INTERESTS}
          />
        </div>
      )}
    </section>
  );
}
