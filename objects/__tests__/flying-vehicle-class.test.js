'use strict';

const Vehicle = require('../flying-vehicle-class.js');

describe('Flying Vehicles', () => {

    describe('Airplane', () => {

        let airplane = new Vehicle.Airplane('foo');

        it('has fixed wings', () => {
            expect(airplane.wingType).toEqual('fixed');
        });

        it('can take-off', () => {
            expect(airplane.takeOff()).toBeTruthy();
        });

        it('can land', () => {
            expect(airplane.land()).toBeTruthy();
        });

        it('cannot do hover', () => {
            expect(airplane.hover).toBeUndefined();
        });

    });

    describe('Helicopter', () => {

        let helicopter = new Vehicle.Helicopter('foo');

        it('has rotary wings', () => {
            expect(helicopter.wingType).toEqual('rotary');
        });

        it('can take-off', () => {
            expect(helicopter.takeOff()).toBeTruthy();
        });

        it('can land', () => {
            expect(helicopter.land()).toBeTruthy();
        });

        it('can hover', () => {
            expect(helicopter.hover()).toBeTruthy();
        });

    });

});
