import { useState } from 'react';
import { Linkedin, Mail, Menu, MessageCircle, X } from 'lucide-react';
import { NAV_LINKS, PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onTalkToMe: () => void;
}

export function Navbar({ activeSection, onTalkToMe }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#212428]/95 backdrop-blur-sm border-b border-[#2E3239]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 h-20 lg:h-24 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] rounded-full pr-2"
        >
          <span className="w-11 h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-white border-2 border-[#2E3239] flex items-center justify-center shrink-0">
            <img
              src={PROFILE_INFO.portraitPath}
              alt={`${PROFILE_INFO.fullName} avatar`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </span>
          <span className="font-display font-bold text-base lg:text-lg tracking-[0.06em] text-[#D9D9D9] group-hover:text-[#FF014F] transition-colors whitespace-nowrap shrink-0">
            {PROFILE_INFO.shortBrand}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-[12px] font-medium tracking-[0.05em] uppercase whitespace-nowrap shrink-0 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] rounded ${
                  isActive
                    ? 'text-[#FF014F]'
                    : 'text-[#D9D9D9] hover:text-[#FF014F]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions: LinkedIn, Email, Talk to me */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aditya Singh on LinkedIn"
            title={PROFILE_INFO.linkedinHandle}
            className="w-10 h-10 rounded-full bg-[#2A2E34] border border-[#383D45] flex items-center justify-center text-[#E5E7EB] hover:bg-[#FF014F] hover:border-[#FF014F] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
          >
            <Linkedin className="w-4 h-4" strokeWidth={1.8} />
          </a>

          <a
            href={`mailto:${PROFILE_INFO.email}`}
            aria-label={`Email Aditya Singh at ${PROFILE_INFO.email}`}
            title={PROFILE_INFO.email}
            className="w-10 h-10 rounded-full bg-[#2A2E34] border border-[#383D45] flex items-center justify-center text-[#E5E7EB] hover:bg-[#FF014F] hover:border-[#FF014F] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
          >
            <Mail className="w-4 h-4" strokeWidth={1.8} />
          </a>

          <button
            type="button"
            onClick={onTalkToMe}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#2A2E34] border border-[#383D45] text-[#FF014F] hover:bg-[#FF014F] hover:border-[#FF014F] hover:text-white text-[12px] font-semibold uppercase tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Talk to me</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="xl:hidden w-10 h-10 rounded-full bg-[#2A2E34] border border-[#383D45] flex items-center justify-center text-[#FF014F] hover:bg-[#32373E] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#212428] border-t border-[#2E3239] px-6 py-6">
          <nav aria-label="Mobile Navigation" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-md text-xs font-medium uppercase tracking-wider whitespace-nowrap ${
                    isActive
                      ? 'text-[#FF014F] bg-[#2A2E34]'
                      : 'text-[#D9D9D9] hover:text-[#FF014F]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#2E3239] flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onTalkToMe();
              }}
              className="flex-1 py-3 px-4 rounded-md bg-[#2A2E34] border border-[#383D45] text-[#FF014F] hover:bg-[#FF014F] hover:border-[#FF014F] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
            >
              Talk to me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
