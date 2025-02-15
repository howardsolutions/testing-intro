import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two possitive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('subtract', () => {
    it('should subtract one from another', () => {
        expect(subtract(4, 2)).toBe(2);
      });
});

describe('multiply', () => {
    it("should mutiply two number", () => {
        expect(multiply(2, 2)).toBe(4)
    })
});

describe('divide', () => {
    it("should divide by one number", () => {
        expect(divide(4, 2)).toBe(2)
    })
});
