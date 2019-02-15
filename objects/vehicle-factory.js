'use strict';
const Vehicle = function(name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.drive = () => {
        return 'Moving Forward';
    };
    this.stop = () => {
        return 'Stopping';
    };
};

//create a brand new object and store it inside the newCar variable.
function CarFactory(name) {
 const newCar = Object.assign(
     {},
     new Vehicle(name, 4)
 )
    return Object.freeze(newCar)
}
//create a brand new object and store it inside the MotorcycleFactor variable.
function MotorcycleFactory(name) {
    const newMotorcycle = Object.assign(
        {},
        {wheelie},
        new Vehicle(name, 2)
    );
    function wheelie() {
        return "Wheee!";
    }
    return Object.freeze(newMotorcycle)
}

module.exports = {CarFactory, MotorcycleFactory};


