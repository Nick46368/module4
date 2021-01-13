const Plane = require('../Planes/Plane');

class ExperimentalPlane extends Plane {
    constructor(planeParams, type, classificationLevel) {
        super(planeParams);
        this._type = type;
        this._classificationLevel = classificationLevel;
    }

    get type() {
        return this._type;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = ExperimentalPlane;