'use strict';

const SeaCreature = function (eyes, limbs) {
  this.eyes = eyes;
  this.limbs = limbs;
};

SeaCreature.prototype.breathe = () => {
  return 'Breathing';
};

SeaCreature.prototype.eat = () => {
  return 'Eating';
};
const Fish = function () {
  SeaCreature.call(this, 2, 'fins');
};
Fish.prototype = new SeaCreature();
Fish.prototype.swim = () => {
  return 'Swim swim swimming';
};
const Lobster = function () {
  SeaCreature.call(this, 2, 'legs');
};
Lobster.prototype = new SeaCreature();
Lobster.prototype.jump = () => {
  return 'Jump jump jumping';
};
module.exports = { Fish, Lobster };
