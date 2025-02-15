import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two possitive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
  
  it('should add two negative numberss', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get real angry if you give a string that cannot be parsed into a number', () => {
    expect(() => add('2', 'haha')).toThrow('one of the params is not a number');
  });
});

describe('subtract', () => {
    it('should subtract one from another', () => {
        expect(subtract(4, 2)).toBe(2);
      });

    it("should default undefined values to 0", () => {
      expect(subtract(3)).toBe(3);
      expect(subtract(undefined, 3)).toBe(-3);
    })
    it("should default to 0 if either argument is null", () => {
      expect(subtract(null, 3)).toBe(-3);
      expect(subtract(4, null)).toBe(4);
    })
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
    it("should return null if dividing by 0", () => {
        expect(divide(4, 0)).toBeNull()
    })   
});
