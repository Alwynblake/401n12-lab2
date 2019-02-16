'use strict';

class SeaCreature {
    constructor(eyes, limbs) {
        this.eyes = eyes;
        this.limbs = limbs;
    }
    breathe(){
        return 'breathing';
    }
    eat(){
        return 'eating';
    }
}
class Fish extends SeaCreature{
    constructor(){
        super(2, 'fins');
    }
    swim() {
        return 'Swim swim swimming';
    }
}
class Lobster extends SeaCreature{
    constructor(){
        super(2,'legs');
    }
    jump() {
        return 'Jump jump jumping';
    }
}
module.exports = {Fish, Lobster};
