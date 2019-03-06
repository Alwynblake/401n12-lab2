'use strict';

const SeaCreature = function (eyes, limbs) {
  this.eyes = eyes;
  this.limbs = limbs;
  this.breathe = () => {
    return 'Breathing';
  };
  this.eat = () => {
    return 'Yummy';
  };
};

function Fish() {
  const newFish = Object.assign(
    {},
    { swim },
    new SeaCreature(2, 'fins'),
  );
  function swim() {
    return 'swim swim Swimming';
  }
  return Object.freeze(newFish);
}
function Lobster() {
  const newLobster = Object.assign(
    {},
    { jump },
    new SeaCreature(2, 'legs'),
  );
  function jump() {
    return 'jump jump jumping';
  }
  return Object.freeze(newLobster);
}

module.exports = { Fish, Lobster };
