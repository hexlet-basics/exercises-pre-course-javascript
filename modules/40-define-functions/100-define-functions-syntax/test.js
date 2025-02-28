import { expect, test, vi } from 'vitest'
import f from './index.js';

const expected = 'Winter is coming';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  f();

  const firstArg = consoleLogSpy.mock.calls[0]?.[0];

  expect(firstArg).toBe(expected)
})
