const Plane = require('../Planes/Plane');

class MilitaryPlane extends Plane {
    constructor(planeParams) {
        super(planeParams);
    }

    get militaryType() {
        return this._militaryType;
    }
}

module.exports = MilitaryPlane;

