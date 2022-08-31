import semver from "semver";

const semverSymbol: unique symbol = Symbol("semver");
const versionSchemas = [/^rc-([0-9]+)$/, /^pre-([0-9]+)$/, semverSymbol]

const comparators: {[item: string]: (a: number, b: number) => boolean} = {
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
    "=": (a, b) => a === b,
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a >= b
}

export default function includes(pattern, requestedVersion) {
    let comparer: ((value: string) => boolean) | null = null;

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
            let versionReg = (version as RegExp);
            let test = versionReg.exec(requestedVersion);

            if (test) {
                let requestedVersion = Number.parseInt(test[1]);

                comparer = (version) => {
                    version = version.trim();
                    let entries = Object.entries(comparators);

                    for (let i = 0; i < entries.length; i++) {
                        let [starter, comparator] = entries[i];

                        if (version.startsWith(starter)) {
                            let chopped = version.substring(starter.length);

                            let chopTest = versionReg.exec(chopped.trim());

                            if (chopTest !== null) {
                                let exampleVersion = Number.parseInt(chopTest[1]);

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

    if (pattern !== undefined) {
        for (let v = 0; v < pattern.length; v++) {
            let version = pattern[v];

            if (version === "*" || comparer(version)) {
                return true;
            }
        }
    }
    else {
        return true;
    }

    return false;
}