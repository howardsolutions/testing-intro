import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime('2024-02-09');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback after delay', () => {
    const callback = vi.fn();

    delay(callback);
    // vi.advanceTimersByTime(2000);
    // another way to do that .advanceTimersToNextTimer() - forward time until setTimeOut is called
    vi.advanceTimersToNextTimer();

    expect(callback).toHaveBeenCalled();
  });
});
