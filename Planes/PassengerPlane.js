const Plane = require('../Planes/Plane');

class PassengerPlane extends Plane {
    constructor(planeParams, passengersCapacity) {
        super(planeParams);
        this._passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;