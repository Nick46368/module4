const { MilitaryType, ExperimentalType, ClassificationLevel, PlaneType } = require('../models/moduleExporter');
const { MilitaryPlane, PassengerPlane, ExperimentalPlane } = require('../Planes/moduleExporter')

const planes = [
    new PassengerPlane({model: 'Boeing-737', maxSpeed: 900, maxFlightDistance: 12000, maxLoadCapacity: 60500, planeType: PlaneType.PASSENGER}, 164),
    new PassengerPlane({model: 'Boeing-737-800', maxSpeed: 940, maxFlightDistance: 12300, maxLoadCapacity: 63870, planeType: PlaneType.PASSENGER}, 192),
    new PassengerPlane({model: 'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, planeType: PlaneType.PASSENGER}, 242),
    new PassengerPlane({model: 'Airbus A320', maxSpeed: 930, maxFlightDistance: 11800, maxLoadCapacity: 65500, planeType: PlaneType.PASSENGER}, 188),
    new PassengerPlane({model: 'Airbus A330', maxSpeed: 990, maxFlightDistance: 14800, maxLoadCapacity: 80500, planeType: PlaneType.PASSENGER}, 222),
    new PassengerPlane({model: 'Embraer 190', maxSpeed: 870, maxFlightDistance: 8100, maxLoadCapacity: 30800, planeType: PlaneType.PASSENGER}, 64),
    new PassengerPlane({model: 'Sukhoi Superjet 100', maxSpeed: 870, maxFlightDistance: 11500, maxLoadCapacity: 50500, planeType: PlaneType.PASSENGER}, 140),
    new PassengerPlane({model: 'Bombardier CS300', maxSpeed: 920, maxFlightDistance: 11000, maxLoadCapacity: 60700, planeType: PlaneType.PASSENGER}, 196),
    new MilitaryPlane({model: 'B-1B Lancer', maxSpeed: 1050, maxFlightDistance: 21000, maxLoadCapacity: 80000, planeType: PlaneType.MILITARY}, MilitaryType.BOMBER),
    new MilitaryPlane({model: 'B-2 Spirit', maxSpeed: 1030, maxFlightDistance: 22000, maxLoadCapacity: 70000, planeType: PlaneType.MILITARY}, MilitaryType.BOMBER),
    new MilitaryPlane({model: 'B-52 Stratofortress', maxSpeed: 1000, maxFlightDistance: 20000, maxLoadCapacity: 80000, planeType: PlaneType.MILITARY}, MilitaryType.BOMBER),
    new MilitaryPlane({model: 'F-15', maxSpeed: 1500, maxFlightDistance: 12000, maxLoadCapacity: 10000, planeType: PlaneType.MILITARY}, MilitaryType.FIGHTER),
    new MilitaryPlane({model: 'F-22', maxSpeed: 1550, maxFlightDistance: 13000, maxLoadCapacity: 11000, planeType: PlaneType.MILITARY}, MilitaryType.FIGHTER),
    new MilitaryPlane({model: 'C-130 Hercules', maxSpeed: 650, maxFlightDistance: 5000, maxLoadCapacity: 110000, planeType: PlaneType.MILITARY}, MilitaryType.TRANSPORT),
    new PassengerPlane({model: 'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, planeType: PlaneType.PASSENGER}, 242),
    new ExperimentalPlane({model: "Bell X-14", maxSpeed: 277, maxFlightDistance: 482, maxLoadCapacity: 500, planeType: PlaneType.EXPERIMENTAL}, ExperimentalType.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane({model: "Ryan X-13 Vertijet", maxSpeed: 560, maxFlightDistance: 307, maxLoadCapacity: 500, planeType: PlaneType.EXPERIMENTAL}, ExperimentalType.VERTICAL_TAKE_OFF_AND_LANDING, ClassificationLevel.TOP_SECRET),
];

module.exports = planes;