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
        return this.getPlanesByCategory('Military').filter(plane => plane.militaryType === type);
    }

    sortPlanesByCriteria(criterion) {
        return this.planes.sort((a, b)  => (a[criterion] > b[criterion] ? 1 : -1));
    }

}

module.exports = Airport;
