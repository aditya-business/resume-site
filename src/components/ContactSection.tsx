import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import {
  ContactFormErrors,
  ContactFormValues,
  validateContactForm,
} from '../utils/portfolioLogic';

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(values);
    if (!result.isValid) {
      setErrors(result.errors);
      setSubmittedName(null);
      return;
    }

    setErrors({});
    setSubmittedName(values.name.trim());
    setValues(INITIAL_VALUES);
  };

  return (
    <section
      id="contacts"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          TALK TO ME
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          Let&apos;s Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Profile Info Card */}
        <div className="lg:col-span-5 p-8 rounded-2xl neu-card flex flex-col justify-between">
          <div>
            <div className="aspect-square max-h-[280px] mx-auto rounded-xl overflow-hidden bg-white border border-[#DCE1E4] flex items-center justify-center mb-7">
              <img
                src={PROFILE_INFO.portraitPath}
                alt={`${PROFILE_INFO.fullName} portrait`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <h3 className="font-display font-bold text-[26px] text-[#1E2125]">
              {PROFILE_INFO.fullName}
            </h3>
            <p className="text-[14px] text-[#6E737B] mt-1">
              {PROFILE_INFO.headlineRole}
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#3C3E41]">
              I&apos;m an undergraduate student at IIM Bangalore and BHU
              currently interning in sales and marketing at Entrance UG. Feel
              free to reach out about internships, student projects, or case
              competitions!
            </p>

            <div className="mt-6 space-y-2 text-[14px] sm:text-[15px] text-[#3C3E41]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF014F] shrink-0" />
                <span>{PROFILE_INFO.location}</span>
              </p>
              <p>
                <span className="text-[#6E737B]">Phone: </span>
                <a
                  href={`tel:${PROFILE_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-[#1E2125] hover:text-[#FF014F] transition-colors"
                >
                  {PROFILE_INFO.phone}
                </a>
              </p>
              <p>
                <span className="text-[#6E737B]">Email: </span>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="font-medium text-[#1E2125] hover:text-[#FF014F] transition-colors break-all"
                >
                  {PROFILE_INFO.email}
                </a>
              </p>
              <p>
                <span className="text-[#6E737B]">LinkedIn: </span>
                <a
                  href={PROFILE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1E2125] hover:text-[#FF014F] transition-colors break-all"
                >
                  {PROFILE_INFO.linkedinHandle}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#DCE1E4]">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#1E2125] mb-4">
              RESUME &amp; CONNECT
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PROFILE_INFO.resumePdfPath}
                download="Aditya_Singh_Resume.pdf"
                className="px-4 py-3 rounded-md neu-btn neu-btn-accent text-xs font-semibold uppercase tracking-wider text-[#FF014F] inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
              <a
                href={PROFILE_INFO.cvPdfPath}
                download="Aditya_Singh_CV.pdf"
                className="px-4 py-3 rounded-md neu-btn text-xs font-semibold uppercase tracking-wider text-[#1E2125] hover:text-[#FF014F] inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Full CV PDF</span>
              </a>
              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Aditya Singh on LinkedIn"
                className="w-11 h-11 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                aria-label="Email Aditya Singh"
                className="w-11 h-11 rounded-md neu-btn neu-btn-accent flex items-center justify-center text-[#1E2125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Validated Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl neu-card">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {submittedName && (
              <div
                role="status"
                className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you, <strong>{submittedName}</strong>. Your message has
                  been sent and Aditya Singh will reply shortly.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[#3C3E41] mb-2"
                >
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Alex Morgan"
                  className="w-full h-13 px-4 rounded-md neu-input text-[14px] text-[#1E2125]"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-[#FF014F]">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[#3C3E41] mb-2"
                >
                  PHONE NUMBER
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="+91 98765 43210"
                  className="w-full h-13 px-4 rounded-md neu-input text-[14px] text-[#1E2125]"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-[#FF014F]">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[#3C3E41] mb-2"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="alex@company.com"
                className="w-full h-13 px-4 rounded-md neu-input text-[14px] text-[#1E2125]"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-[#FF014F]">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[#3C3E41] mb-2"
              >
                SUBJECT
              </label>
              <input
                id="contact-subject"
                type="text"
                value={values.subject}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, subject: e.target.value }))
                }
                placeholder="Marketing Strategy & SEO Collaboration"
                className="w-full h-13 px-4 rounded-md neu-input text-[14px] text-[#1E2125]"
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-[#FF014F]">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[#3C3E41] mb-2"
              >
                YOUR MESSAGE
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Share your internship, collaboration, or student project details..."
                className="w-full p-4 rounded-md neu-input text-[14px] text-[#1E2125] resize-y"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-[#FF014F]">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md neu-btn neu-btn-accent text-[#FF014F] font-semibold text-xs sm:text-sm uppercase tracking-[0.1em] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
            >
              <span>SEND MESSAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
