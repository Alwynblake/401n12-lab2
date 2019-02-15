'use strict';

const FlyingVehicle = function(name, wingType){
    this.name = name;
    this.wingType = wingType;
};

FlyingVehicle.prototype.takeOff = () => {
    return 'Taking-off';
};

FlyingVehicle.prototype.land = () => {
    return 'Landing';
};

const Airplane = function(name) {
    FlyingVehicle.call(this,name,'fixed')
}

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name) {
    FlyingVehicle.call(this, name, 'rotary');

};
Helicopter.prototype = new FlyingVehicle();
Helicopter.prototype.hover = () => {
    return 'stay put';
};

module.exports ={Airplane, Helicopter};