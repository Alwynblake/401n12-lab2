'use strict';

class FlyingVehicle {
  constructor(name, wingType) {
    this.name = name;
    this.wingType = wingType;
  }

  takeOff() {
    return 'Taking-off';
  }

  land() {
    return 'Landing';
  }
}
class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name, 'fixed');
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name, 'rotary');
  }

  hover() {
    return 'stay put!';
  }
}
module.exports = { Airplane, Helicopter };// so test can access both
