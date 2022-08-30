class Accessor {
    constructor() {
        this.valueValidator = null;
    }

    get(g) {
        let ret = this._get(g);

        if (this.valueValidator === null) {
            return ret;
        }

        return ret.filter(val => this.valueValidator.validated(val[val.length - 1]));
    }

    validatorValid(obj) {
        if (this.valueValidator === null) {
            return true
        }
        return this.valueValidator.validated(obj);
    }
}

export class FieldAccessor extends Accessor {
    constructor (path) {
        super();
        this.path = path;
    }

    _get(ret) {
        let filtered = ret.map(val => {
            let last = val[val.length - 1];
            return this.path in last ? [...val, last[this.path]] : undefined
        });

        return filtered.filter(val => val !== undefined);
    }

    set(obj, value) {
        if (this.path in obj && this.validatorValid(obj[this.path])) {
            obj[this.path] = value;
        }
    }

    canBranch = false
}

export class WildCardAccessor extends Accessor {
    _get(arr) {
        let ret = [];
        arr.forEach(val => {
            let values = Object.values(val[val.length - 1]);
            for (let i = 0; i < values.length; i++) {
                ret.push([...val, values[i]])
            }
        })
        return ret;
    }

    set(obj, value) {
        console.log(obj);
        Object.entries(obj).forEach(val => {
            if (this.validatorValid(val[1])) {
                obj[val[0]] = value;
            }
        })
    }

    canBranch = true
}

export class BackwardsAccessor extends Accessor {
    _get(arr) {
        return arr.map(val => {
            let cpy = [...val];
            cpy.pop();
            return cpy;
        });
    }

    set() {
        throw "Cannot set value of a backwards accessor"
    }

    canBranch = false
}