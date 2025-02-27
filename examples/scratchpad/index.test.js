import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('Hello world');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello world');
  expect(logSpy).toHaveBeenCalledOnce();
});
