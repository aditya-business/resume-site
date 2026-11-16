import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { cycleIndex } from '../utils/portfolioLogic';

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  const handleStep = (delta: number) => {
    setActiveIndex((prev) => cycleIndex(prev, delta, TESTIMONIALS.length));
  };

  return (
    <section
      id="testimonial"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          MENTORS &amp; PEERS
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          Feedback &amp; Collaboration
        </h2>
      </div>

      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Client Profile Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl neu-card flex flex-col justify-between">
            {current.logoPath ? (
              <div
                className={`aspect-[4/3] rounded-xl overflow-hidden border border-[#DCE1E4] flex items-center justify-center mb-6 ${
                  current.logoFit === 'full' ? 'bg-[#0A2229]' : 'bg-white p-6'
                }`}
              >
                <img
                  src={current.logoPath}
                  alt={`${current.company} logo`}
                  referrerPolicy="no-referrer"
                  className={
                    current.logoFit === 'full'
                      ? 'h-full w-full object-contain'
                      : 'max-h-full max-w-full object-contain'
                  }
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#23272E] to-[#14171C] flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-[#FF014F]/15 border-2 border-[#FF014F]/60 flex items-center justify-center font-display font-bold text-3xl text-white">
                  {current.initials}
                </div>
              </div>
            )}
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#FF014F]">
                {current.company}
              </p>
              <h3 className="font-display font-bold text-2xl text-[#1E2125] mt-1.5">
                {current.name}
              </h3>
              <p className="text-[14px] text-[#6E737B] mt-1">{current.role}</p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <Quote className="w-12 h-12 text-[#C8CFD6]" strokeWidth={1.4} />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleStep(-1)}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStep(1)}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl neu-card flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DCE1E4]">
                <div>
                  <h4 className="font-display font-semibold text-xl sm:text-2xl text-[#1E2125]">
                    {current.projectTitle}
                  </h4>
                  <p className="text-[13px] text-[#6E737B] mt-1">
                    {current.platformMeta}
                  </p>
                </div>

                <div
                  className="px-3.5 py-2 rounded-md neu-card-soft flex items-center gap-1"
                  aria-label={`Rated ${current.rating} out of 5 stars`}
                >
                  {Array.from({ length: current.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[1.85] text-[#3C3E41]">
                {current.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] ${
                idx === activeIndex ? 'bg-[#FF014F]' : 'bg-[#C8CFD6] hover:bg-[#9BA3AC]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
