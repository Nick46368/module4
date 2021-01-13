class Plane {
    constructor(planeParams) {
        this._model = planeParams.model;
        this._maxSpeed = planeParams.maxSpeed;
        this._maxFlightDistance = planeParams.maxFlightDistance;
        this._maxLoadCapacity = planeParams.maxLoadCapacity;
        this._planeType = planeParams.planeType;
    }

    get model() {
        return this._model;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    get maxFlightDistance() {
        return this._maxFlightDistance;
    }

    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    get planeType() {
        return this._planeType;
    }
}

module.exports = Plane;
