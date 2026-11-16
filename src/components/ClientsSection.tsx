import { useState } from 'react';
import { CLIENT_BRANDS, CLIENT_CATEGORIES } from '../data/portfolioData';
import { filterOrganizations } from '../utils/portfolioLogic';

export function ClientsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Highlights');

  const visibleClients = filterOrganizations(
    CLIENT_BRANDS,
    selectedCategory,
    'All Highlights'
  );

  return (
    <section
      id="clients"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          CREDENTIALS &amp; AFFILIATIONS
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          Organizations &amp; Programs
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Vertical Filter Tabs */}
        <div className="lg:col-span-4 rounded-xl neu-card p-2">
          <div role="tablist" aria-label="Affiliation category filter" className="flex flex-col">
            {CLIENT_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-7 py-5 rounded-lg text-[15px] font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] ${
                    active
                      ? 'neu-card text-[#FF014F] font-semibold'
                      : 'text-[#1E2125] hover:text-[#FF014F]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Organizations Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleClients.map((client) => (
            <div
              key={client.id}
              className="rounded-xl neu-card flex flex-col justify-between overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col items-center justify-center text-center border-b border-[#DCE1E4]">
                {client.logoPath ? (
                  <div
                    className={`w-20 h-20 flex items-center justify-center mb-4 overflow-hidden border border-[#DCE1E4] shadow-sm ${
                      client.logoFit === 'cover-circle'
                        ? 'rounded-full bg-white'
                        : client.logoFit === 'full'
                          ? 'rounded-xl bg-[#0A2229]'
                          : 'rounded-xl bg-white p-2'
                    }`}
                  >
                    <img
                      src={client.logoPath}
                      alt={`${client.name} logo`}
                      referrerPolicy="no-referrer"
                      className={
                        client.logoFit === 'cover-circle'
                          ? 'w-full h-full object-cover object-center scale-[1.06]'
                          : client.logoFit === 'full'
                            ? 'w-full h-full object-cover'
                            : 'w-full h-full object-contain'
                      }
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-[#ECF0F3] border border-[#DCE1E4] flex items-center justify-center font-display font-bold text-xl text-[#1E2125] mb-4">
                    {client.name
                      .replace(/[()]/g, '')
                      .split(' ')
                      .filter(Boolean)
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                )}
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#6E737B] uppercase">
                  {client.tagline}
                </span>
              </div>
              <div className="py-4 px-5 text-center">
                <p className="text-[15px] font-medium text-[#3C3E41]">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
