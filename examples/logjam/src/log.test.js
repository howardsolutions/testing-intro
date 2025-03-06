import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  //   describe('development', () => {
  //     beforeEach(() => {
  //       vi.stubEnv('MODE', 'development');
  //     });

  //     afterEach(() => {
  //       vi.resetAllMocks();
  //     });

  //     it('logs to the console in development mode', () => {
  //       const logSpy = vi.spyOn(console, 'log');

  //       log('hello');

  //       expect(logSpy).toHaveBeenCalled();
  //       expect(logSpy).toHaveBeenCalledWith('hello');
  //     });
  //   });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('send to the server the message', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('hello', { mode: 'production', productionCallback: logSpy });

      // expect(logSpy).not.toHaveBeenCalled();
      expect(sendToServer).toHaveBeenCalled();
    });
  });
});
