const isValid = require('./20-Valid-Parenthesis');

test('isValid test', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
});
