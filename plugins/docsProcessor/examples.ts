import includes from "./version";

export class ExampleExtractor {
    examples: {[item: string]: {versions: string[], content: string}}

    constructor (examples: {[item: string]: {versions: string[], content: string}}) {
        this.examples = examples;
    }

    /**
     * 
     * @param {string} requestedVersion 
     */
    getExamples(requestedVersion: string) {
        let filtered: {[i: string]: {versions: string[], content: string}} = {};
        let entries = Object.entries(this.examples);
        for (let entryIdx = 0; entryIdx < entries.length; entryIdx++) {
            if (includes(entries[entryIdx][1].versions, requestedVersion)) {
                filtered[entries[entryIdx][0]] = entries[entryIdx][1];
            }
        }

        return filtered;
    }

    injectExamples(docs: any, examples: ExampleExtractor["examples"], version: string) {
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
                        found = true;
                    }
                }

                if (!found) {
                    console.warn(`Example injection could not find ${qualifiedName} in ${version}`)
                    continue
                }
            }

            subject.example = example;
        }
    }
} 