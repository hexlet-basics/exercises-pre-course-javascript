import { expect, test, vi } from 'vitest'

const expected = 'King Balon the 6th has 102 rooms.';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  await import('./index.js')

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(expected)
})
