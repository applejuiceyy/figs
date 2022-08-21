import semver from "semver";

const semverSymbol = Symbol("semver");
const versionSchemas = [/^rc-([0-9]+)$/, /^pre-([0-9]+)$/, semverSymbol]

const comparators = {
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
    "=": (a, b) => a === b,
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a >= b
}

export class ExampleExtractor {
    /**
     * 
     * @param {{[item: string]: {versions: string[]}}} examples 
     */
    constructor (examples) {

        this.examples = examples;
    }

    /**
     * 
     * @param {string} requestedVersion 
     */
    getExamples(requestedVersion) {
        let comparer = null;

        for (let i = 0; i < versionSchemas.length; i++) {
            let version = versionSchemas[i];

            if (version === semverSymbol) {
                let clean = semver.valid(requestedVersion);

                if (clean !== null) {
                    comparer = (version) => semver.satisfies(clean, version);
                    break;
                }
            }
            else {
                let test = version.exec(requestedVersion);
                let versionReg = version;

                if (test) {
                    let requestedVersion = test[1];

                    comparer = (version) => {
                        version = version.trim();
                        let entries = Object.entries(comparators);

                        for (let i = 0; i < entries.length; i++) {
                            let [starter, comparator] = entries[i];

                            if (version.startsWith(starter)) {
                                let chopped = version.substring(starter.length);

                                let chopTest = versionReg.exec(chopped.trim());

                                if (chopTest !== null) {
                                    let exampleVersion = chopTest[1];

                                    if (comparator(requestedVersion, exampleVersion)) {
                                        return true;
                                    }
                                }
                            }
                        }

                        return false;
                    };

                    break;
                }
            }
        }
        
        if (comparer === null) {
            throw "Version has unknown schema"
        }

        let entries = Object.entries(this.examples);
        let filtered = {};

        for (let entryIdx = 0; entryIdx < entries.length; entryIdx++) {
            let applies = false;

            if ("versions" in entries[entryIdx][1]) {
                for (let v = 0; v < entries[entryIdx][1].versions.length; v++) {
                    let version = entries[entryIdx][1].versions[v];
    
                    if (version === "*" || comparer(version)) {
                        applies = true;
                        break;
                    }
                }
            }
            else {
                applies = true;
            }


            if (applies) {
                filtered[entries[entryIdx][0]] = entries[entryIdx][1];
            }
        }

        return filtered;
    }

    injectExamples(docs, examples) {
        let entries = Object.entries(examples);

        for (let i = 0; i < entries.length; i++) {
            let [qualifiedName, example] = entries[i];
            
            let cls;
            let meth;

            if (qualifiedName.indexOf(".") === -1) {
                cls = qualifiedName;
                meth = null;
            }
            else {
                [cls, meth] = qualifiedName.split(".");
            }

            let clsObj;
            if (cls in docs.types) {
                clsObj = docs.types[cls];
            }
            else if (cls in docs.lists) {
                clsObj = docs.lists[cls];
            }
            else {
                clsObj = docs.types.globals;
                meth = cls;
                cls = "globals";
            }

            let subject;
            if (meth === null) {
                subject = clsObj;
            }
            else {
                let found = false;

                if ("methods" in clsObj) {
                    let j = clsObj.methods.find(val => val.name === meth);

                    if (j !== undefined) {
                        subject = j;
                        found = true;
                    }
                }

                if ("fields" in clsObj && !found) {
                    let j = clsObj.fields.find(val => val.name === meth);

                    if (j !== undefined) {
                        subject = j;
                    }
                }
            }

            subject.example = example.content;
        }
    }
} 