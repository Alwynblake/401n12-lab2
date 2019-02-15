'use strict'

const FlyingVehicle = function(name, wingType) {
    this.name = name;
    this.wingType = wingType;
    this.takeOff = () => {
        return 'Taking-off';
    };
    this.land = () => {
        return 'Landing';
    };
};

function Airplane(name) {
    const plane = Object.assign(
        {},
        new FlyingVehicle(name, 'fixed')
    );
    return Object.freeze(plane);
};

function Helicopter(name) {
    const chopper = Object.assign(
        {},
        {hover},
        new FlyingVehicle(name, 'rotary')
    );
    function hover() {
        return 'stay put';
    }
    return Object.freeze(chopper);
}
module.exports ={Airplane, Helicopter};
