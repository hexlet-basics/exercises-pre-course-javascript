import { expect, test, vi } from 'vitest'

const expected = '243\n2';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  await import('./index.js')

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(expected)
})
