const ClassificationLevel = require('../models/ClassificationLevel');
const ExperimentalType = require('../models/ExperimentalType');
const MilitaryType = require('../models/MilitaryType');
const PlaneType = require('../models/PlaneType');
const ExperimentalPlane = require('../Planes/ExperimentalPlane');
const MilitaryPlane = require('../Planes/MilitaryPlane');
const PassengerPlane = require('../Planes/PassengerPlane');

const planes = [
    new PassengerPlane({model: 'Boeing-737', maxSpeed: 900, maxFlightDistance: 12000, maxLoadCapacity: 60500, planeType: PlaneType.PASSENGER, passengersCapacity:164 }),
    new PassengerPlane({model: 'Boeing-737-800', maxSpeed: 940, maxFlightDistance: 12300, maxLoadCapacity: 63870, planeType: PlaneType.PASSENGER, passengersCapacity: 192}),
    new PassengerPlane({model: 'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, planeType: PlaneType.PASSENGER, passengersCapacity: 242}),
    new PassengerPlane({model: 'Airbus A320', maxSpeed: 930, maxFlightDistance: 11800, maxLoadCapacity: 65500, planeType: PlaneType.PASSENGER, passengersCapacity: 188}),
    new PassengerPlane({model: 'Airbus A330', maxSpeed: 990, maxFlightDistance: 14800, maxLoadCapacity: 80500, planeType: PlaneType.PASSENGER, passengersCapacity: 222}),
    new PassengerPlane({model: 'Embraer 190', maxSpeed: 870, maxFlightDistance: 8100, maxLoadCapacity: 30800, planeType: PlaneType.PASSENGER, passengersCapacity: 64}),
    new PassengerPlane({model: 'Sukhoi Superjet 100', maxSpeed: 870, maxFlightDistance: 11500, maxLoadCapacity: 50500, planeType: PlaneType.PASSENGER, passengersCapacity: 140}),
    new PassengerPlane({model: 'Bombardier CS300', maxSpeed: 920, maxFlightDistance: 11000, maxLoadCapacity: 60700, planeType: PlaneType.PASSENGER, passengersCapacity: 196}),
    new MilitaryPlane({model: 'B-1B Lancer', maxSpeed: 1050, maxFlightDistance: 21000, maxLoadCapacity: 80000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.BOMBER}),
    new MilitaryPlane({model: 'B-2 Spirit', maxSpeed: 1030, maxFlightDistance: 22000, maxLoadCapacity: 70000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.BOMBER}),
    new MilitaryPlane({model: 'B-52 Stratofortress', maxSpeed: 1000, maxFlightDistance: 20000, maxLoadCapacity: 80000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.BOMBER}),
    new MilitaryPlane({model: 'F-15', maxSpeed: 1500, maxFlightDistance: 12000, maxLoadCapacity: 10000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.FIGHTER}),
    new MilitaryPlane({model: 'F-22', maxSpeed: 1550, maxFlightDistance: 13000, maxLoadCapacity: 11000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.FIGHTER}),
    new MilitaryPlane({model: 'C-130 Hercules', maxSpeed: 650, maxFlightDistance: 5000, maxLoadCapacity: 110000, planeType: PlaneType.MILITARY, militaryType: MilitaryType.TRANSPORT}),
    new PassengerPlane({model: 'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, planeType: PlaneType.PASSENGER, passengersCapacity: 242}),
    new ExperimentalPlane({model: "Bell X-14", maxSpeed: 277, maxFlightDistance: 482, maxLoadCapacity: 500, planeType: PlaneType.EXPERIMENTAL, classificationLevel: ClassificationLevel.SECRET}, ExperimentalType.HIGH_ALTITUDE),
    new ExperimentalPlane({model: "Ryan X-13 Vertijet", maxSpeed: 560, maxFlightDistance: 307, maxLoadCapacity: 500, planeType: PlaneType.EXPERIMENTAL, classificationLevel:ClassificationLevel.TOP_SECRET}, ExperimentalType.VERTICAL_TAKE_OFF_AND_LANDING),
];

module.exports = planes;