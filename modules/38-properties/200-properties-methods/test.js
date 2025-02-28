import { expect, test, vi } from 'vitest'

const expected = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  await import('./index.js')

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(expected)
})
