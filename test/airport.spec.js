const assert = require('chai').assert;
const Airport = require('../Airport/Airport');
const planes = require('../Airport/testData');

describe('My test will work with different types of planes', () => {

    const airport = new Airport(planes);

    it('should have military Planes with transport type', () => {
        assert.isNotEmpty(airport.getMilitaryPlaneByType('Transport'), 'Hey Pedro, there is no TRANSplane!');
    });

    it('should check passenger plane with max capacity', () => {
        let actualPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.deepEqual(actualPlaneWithMaxPassengersCapacity, planes.filter(plane => plane.model === 'Boeing-747')[0], 'This is not needed plane');
    });

    it('should sort passenger plane with max load capacity', () => {
        let planesSortedByMaxLoadCapacity = airport.sortPlanesByCharacteristics('maxLoadCapacity');
        assert.deepEqual(planesSortedByMaxLoadCapacity, planes.sort((a, b)  => (a['maxLoadCapacity'] > b['maxLoadCapacity'] ? 1 : -1)));
    });

    it('should test that has at least one bomber in military planes', () => {
        assert.isNotEmpty(airport.getMilitaryPlaneByType('Bomber'), 'Hey Pedro, there is no BOMBER plane!');
    })

    it('should check that experimental planes has classification level higher than unclassified', () => {
        const experimentalPlanes = airport.getPlanesByCategory('Experimental');
        assert.isNotEmpty(experimentalPlanes.filter(plane => plane.classificationLevel !== 'Unclassified'));
    });

});



