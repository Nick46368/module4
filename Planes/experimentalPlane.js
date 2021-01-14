const Plane = require('../Planes/Plane');

class ExperimentalPlane extends Plane {
    constructor(planeParams) {
        super(planeParams);
    }

    get classificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = ExperimentalPlane;