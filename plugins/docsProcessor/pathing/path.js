export default class Path {
    constructor(accessors) {
        this.accessors = accessors;
    }

    get(obj) {
        return this.getWithHistory([[obj]]).map(val => val[val.length - 1]);
    }

    getSingle(obj) {
        if (this.canBranch) {
            return null;
        }

        return this.get(obj)[0];
    }

    getWithHistory(ret) {
        for (let i = 0; i < this.accessors.length; i++) {
            let accessor = this.accessors[i];

            ret = accessor.get(ret);
        }

        return ret
    }

    set(obj, value) {
        this.setWithHistory([[obj]], value);
    }

    setWithHistory(obj, value) {
        for (let i = 0; i < this.accessors.length - 1; i++) {
            let accessor = this.accessors[i];

            obj = accessor.get(obj);
        }

        obj.forEach(val => this.accessors[this.accessors.length - 1].set(val[val.length - 1], value));
    }

    get canBranch() {
        return this.accessors.filter(val => val.canBranch).length > 0
    }
}
