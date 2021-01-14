const Plane = require('../Planes/Plane');

class PassengerPlane extends Plane {
    constructor(planeParams) {
        super(planeParams);
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;