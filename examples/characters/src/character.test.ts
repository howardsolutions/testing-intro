import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character('Howard', "Phung", "Senior Software ML Engineer");
  });

  it(
    'should create a character with a first name, last name, and role',
    () => {
      // expect(character).toMatchObject(character);
      expect(character).toEqual(expect.objectContaining({
        firstName: "Howard",
        lastName: "Phung",
        role: "Senior Software ML Engineer"
      }))
    },
  );

  it('should allow you to increase the level', () => {
    const initialLevel = character.level;

    character.levelUp();
    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const currentLastModified = character.lastModified;
    const initialLevel = character.level;


    character.levelUp();

    expect(character.level).toBeGreaterThan(initialLevel);

    expect(character).not.toBe(currentLastModified)
  });
});
