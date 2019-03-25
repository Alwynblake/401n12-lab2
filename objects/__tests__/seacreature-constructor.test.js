'use strict';

const Seacreature = require('../seacreature-constructor.js');

describe('Sea Creature', () => {
  describe('Fish', () => {
    const fish = new Seacreature.Fish('foo');

    it('has two eyes', () => {
      expect(fish.eyes).toEqual(2);
    });

    it('has fins', () => {
      expect(fish.limbs).toEqual('fins');
    });

    it('can breathe', () => {
      expect(fish.breathe()).toBeTruthy();
    });

    it('can eat', () => {
      expect(fish.eat()).toBeTruthy();
    });
    it('can swim', () => {
      expect(fish.swim()).toBeTruthy();
    });

    it('cannot jump', () => {
      expect(fish.jump).toBeUndefined();
    });
  });

  describe('Lobster', () => {
    const lobster = new Seacreature.Lobster('foo');

    it('has two eyes', () => {
      expect(lobster.eyes).toEqual(2);
    });

    it('has legs', () => {
      expect(lobster.limbs).toEqual('legs');
    });

    it('can breathe', () => {
      expect(lobster.breathe()).toBeTruthy();
    });

    it('can eat', () => {
      expect(lobster.eat()).toBeTruthy();
    });
    it('can jump', () => {
      expect(lobster.jump()).toBeTruthy();
    });

    it('cannot swim', () => {
      expect(lobster.swim).toBeUndefined();
    });
  });
});
