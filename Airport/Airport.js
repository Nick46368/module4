class Airport {

    constructor(planes) {
        this._planes = planes;
    }

    get planes() {
        return this._planes;
    }

    getPlanesByCategory(purpose) {
        return this.planes.filter(plane => plane.planeType === purpose);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        return this.getPlanesByCategory('Passenger')
            .reduce((prev, current) => ((prev.getPassengersCapacity() > current.getPassengersCapacity()) ? prev : current));
    }

    getMilitaryPlaneByType(type) {
        const militaryPlane = this.getPlanesByCategory('Military');
        return militaryPlane.filter(plane => plane.militaryType === type);
    }

    sortPlanesByCharacteristics(criteria) {
        return this.planes.sort((a, b)  => (a[criteria] > b[criteria] ? 1 : -1));
    }

}

module.exports = Airport;
