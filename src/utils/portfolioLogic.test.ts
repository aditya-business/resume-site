import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateScrollProgress,
  cycleIndex,
  filterOrganizations,
  validateContactForm,
} from './portfolioLogic';

test('filterOrganizations returns only matching category items when filtered', () => {
  const items = [
    { name: 'IIM Bangalore', category: 'Universities' },
    { name: 'Entrance UG', category: 'Internship' },
    { name: 'UNHRC Veto Conclave', category: 'Competitions' },
    { name: 'IIM Rohtak', category: 'Competitions' },
  ];
  const competitions = filterOrganizations(items, 'Competitions', 'All Highlights');
  assert.deepEqual(
    competitions.map((i) => i.name),
    ['UNHRC Veto Conclave', 'IIM Rohtak']
  );

  const universities = filterOrganizations(items, 'Universities', 'All Highlights');
  assert.deepEqual(
    universities.map((i) => i.name),
    ['IIM Bangalore']
  );

  const all = filterOrganizations(items, 'All Highlights', 'All Highlights');
  assert.equal(all.length, 4);
});

test('contact form validation rejects empty or malformed fields and accepts valid input', () => {
  const invalid = validateContactForm({
    name: '',
    phone: 'abc',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Alex Morgan',
    phone: '+91 98765 43210',
    email: 'alex@example.com',
    subject: 'Internship Inquiry',
    message: 'Would love to connect about a summer marketing internship.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('carousel cycleIndex wraps cleanly in both directions', () => {
  assert.equal(cycleIndex(0, -1, 3), 2);
  assert.equal(cycleIndex(2, 1, 3), 0);
  assert.equal(cycleIndex(1, 1, 3), 2);
});

test('calculateScrollProgress computes clamped scroll percentage', () => {
  assert.equal(calculateScrollProgress(0, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(500, 2000, 1000), 50);
  assert.equal(calculateScrollProgress(1000, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(1200, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(-20, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(100, 900, 1000), 0);
});
