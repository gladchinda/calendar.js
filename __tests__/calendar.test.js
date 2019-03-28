/* eslint-disable no-undef */
/* eslint-env node, es6, jest */
import calendar from '../src';

test('calendar()', () => {
  const C = calendar();
  const today = new Date();

  expect(C.month).toBe(today.getMonth());
  expect(C.year).toBe(today.getFullYear());
});
