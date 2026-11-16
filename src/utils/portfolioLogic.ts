export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function filterOrganizations<T extends { category: string }>(
  items: T[],
  selectedCategory: string,
  allLabel = 'All Highlights',
  limit?: number
): T[] {
  const filtered =
    selectedCategory === allLabel
      ? items
      : items.filter((item) => item.category === selectedCategory);
  return typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
}

export function validateContactForm(values: ContactFormValues): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (values.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = 'Please enter a short subject.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function cycleIndex(current: number, delta: number, total: number): number {
  if (total <= 0) return 0;
  return (current + delta + total) % total;
}

export function calculateScrollProgress(
  scrollY: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) return 0;
  const percent = (scrollY / maxScroll) * 100;
  return Math.max(0, Math.min(100, percent));
}
