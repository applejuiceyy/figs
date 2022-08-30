class Validator {
    constructor(inverted) {
        this.inverted = inverted;
    }

    validated (testing) {
        return this._validated(testing) !== this.inverted;
    }
}

export class ObjValidator extends Validator {
    constructor(inverted, obj, tight=false) {
        super(inverted);
        this.obj = obj;
        this.tight = tight;
    }

    _validated(testing) {
        if (this.tight && Object.keys(testing).length !== Object.keys(this.obj).length) {
            return false;
        }

        let entries = Object.entries(this.obj);

        for (let i = 0; i < entries.length; i++) {
            if (!entries[i][1].validated(testing[entries[i][0]])) {
                return false;
            }
        }

        return true;
    }
}

export class GenericEqualityValidator extends Validator {
    constructor (inverted, obj) {
        super(inverted);
        this.obj = obj;
    }

    _validated(testing) {
        return testing === this.obj;
    }
}

export class TypeValidator extends Validator {
    constructor (inverted, type) {
        super(inverted);
        this.type = type;
    }

    _validated(testing) {
        return typeof testing === this.type;
    }
}

export class AndValidator extends Validator {
    constructor (inverted, ...validators) {
        super(inverted);
        this.validators = validators;
    }

    _validated(testing) {
        return this.validators.filter(val => val.validated(testing)).length === this.validators.length;
    }
}

export class OrValidator extends Validator {
    constructor (inverted, ...validators) {
        super(inverted);
        this.validators = validators;
    }

    _validated(testing) {
        return this.validators.filter(val => val.validated(testing)).length > 0;
    }
}