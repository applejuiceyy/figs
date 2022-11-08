import { Accessor, HistoryTracker } from "./accessor";

export default class Path {
    accessors: Accessor[];

    constructor(accessors) {
        this.accessors = accessors;
    }

    get(obj: any) {
        return this.getWithHistory([{track: [], current: obj}]).map(val => val.current);
    }

    getSingle(obj: any) {
        if (this.canBranch) {
            return null;
        }

        return this.get(obj)[0];
    }

    getWithHistory(ret: HistoryTracker[]) {
        for (let i = 0; i < this.accessors.length; i++) {
            let accessor = this.accessors[i];

            ret = accessor.get(ret);
        }

        return ret
    }

    set(obj: any, value: any) {
        this.setWithHistory([{track: [], current: obj}], value);
    }

    setWithHistory(obj: HistoryTracker[], value: any) {
        for (let i = 0; i < this.accessors.length - 1; i++) {
            let accessor = this.accessors[i];

            obj = accessor.get(obj);
        }

        return this.accessors[this.accessors.length - 1].set(obj, value);
    }

    get canBranch() {
        return this.accessors.filter(val => val.canBranch).length > 0
    }
}
