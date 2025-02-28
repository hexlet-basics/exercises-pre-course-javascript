import { test, expect } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('hey')).toBe('yeh');
  expect(f('Hey')).toBe('Hey');
  expect(f('')).toBe('');
});
