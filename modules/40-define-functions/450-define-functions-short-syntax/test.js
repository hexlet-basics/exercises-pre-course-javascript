// @ts-check

import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  const expected1 = 'Daenerys';
  const actual1 = f('daenerys');
  expect(f(actual1)).toEqual(expected1);

  expect(f('hexlet')).toEqual('Hexlet');
});
