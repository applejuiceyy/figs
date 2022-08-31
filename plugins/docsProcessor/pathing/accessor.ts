import { Validator } from "./validator";

export type HistoryTracker = {track: {value: any, keyForNext: any}[], current: any}

export abstract class Accessor {
    valueValidator: Validator | null;
    abstract canBranch: boolean;

    constructor() {
        this.valueValidator = null;
    }

    get(g: HistoryTracker[]) {
        let ret = this._get(g);

        let validator = this.valueValidator;
        if (validator === null) {
            return ret;
        }
        
        return ret.filter(val => (validator as Validator).validated(val.current));
    }

    abstract _get(g: HistoryTracker[]): HistoryTracker[]
    abstract set(obj: HistoryTracker[], value: any): boolean

    validatorValid(obj) {
        if (this.valueValidator === null) {
            return true
        }
        return this.valueValidator.validated(obj);
    }
}

export class FieldAccessor extends Accessor {
    path: any;
    constructor (path) {
        super();
        this.path = path;
    }

    _get(ret: HistoryTracker[]): HistoryTracker[] {
        let filtered = ret.map(val => {
            return this.path in val.current ? {track: [...val.track, {value: val.current, keyForNext: this.path}], current: val.current[this.path]} : undefined
        });

        return filtered.filter(val => val !== undefined) as HistoryTracker[];
    }

    set(obj: HistoryTracker[], value) {
        obj.forEach(val => {
            if (this.validatorValid(val.current[this.path])) {
                val.current[this.path] = value;
            }
        })

        return false;
    }

    canBranch = false
}

export class WildCardAccessor extends Accessor {
    _get(arr: HistoryTracker[]): HistoryTracker[] {
        let ret: HistoryTracker[] = [];
        arr.forEach(val => {
            let values = Object.entries(val.current);

            for (let i = 0; i < values.length; i++) {
                ret.push({track: [...val.track, {value: val.current, keyForNext: values[i][0]}], current: values[i][1]})
            }
        })
        return ret;
    }

    set(obj: HistoryTracker[], value) {
        obj.forEach(val => {
            Object.entries(val.current).forEach(v => {
                if (this.validatorValid(v[1])) {
                    val.current[v[0]] = value;
                }
            })
        })

        return false;
    }

    canBranch = true
}

export class BackwardsAccessor extends Accessor {
    _get(arr: HistoryTracker[]): HistoryTracker[] {
        return arr.map(val => {
            let last = val.track.pop();

            if (last === undefined) {
                throw "Cannot go back"
            }

            return {current: last.value, track: val.track};
        });
    }

    set(obj: HistoryTracker[], value) {
        obj.forEach(val => {
            let last = val.track[val.track.length - 1];
            let almostLast = val.track[val.track.length - 2];

            if (this.validatorValid(last.value)) {
                almostLast.value[almostLast.keyForNext] = value;
            }
        })

        return true;
    }

    canBranch = false
}

export class InPlaceAccessor extends Accessor {
    _get(arr: HistoryTracker[]): HistoryTracker[] {
        return arr;
    }

    set(obj: HistoryTracker[], value) {
        obj.forEach(val => {
            let last = val.track[val.track.length - 1];

            if (this.validatorValid(val.current)) {
                last.value[last.keyForNext] = value;
            }

            val.current = value;
        })

        return false;
    }

    canBranch = false
}