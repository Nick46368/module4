const Plane = require('../Planes/Plane');

class MilitaryPlane extends Plane {
    constructor(planeParams, militaryType) {
        super(planeParams);
        this._militaryType = militaryType;
    }

    get militaryType() {
        return this._militaryType;
    }
}

module.exports = MilitaryPlane;

