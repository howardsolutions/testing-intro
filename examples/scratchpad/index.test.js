import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a super simple test', () => {
  console.log('Hello world');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello world');
  expect(logSpy).toHaveBeenCalledOnce();
});

test('a super simple test with mock', () => {
  const mockFn = vi.fn();

  mockFn('Hello world');

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('Hello world');
  expect(mockFn).toHaveBeenCalledOnce();
});

test('a super simple test with mock', () => {
  const result = Math.random();
  expect(result).toBe(0.5);
});
