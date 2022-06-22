const romanToInt = require('./13-Roman-To-Integer');

test('romanToInt test', () => {
  expect(romanToInt('I')).toBe(1);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
