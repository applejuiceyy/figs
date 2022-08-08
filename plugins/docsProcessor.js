import fs from "node:fs/promises";
import path from "node:path";

const docsPath = "./docs";
const folders = (await fs.readdir(docsPath)).filter(val => val !== "latest.txt");

async function maybePromise(what) {
    if ("then" in what && typeof what.then === "function") {
        return await what;
    }

    return what;
}

export default function docsProcessor() {
    const moduleNamespace = "docs:"

    return {
        name: 'vite-plugin-docs-processor',

        /**
         * 
         * @param {string} id 
         */
        resolveId(id) {
            if (id.startsWith(moduleNamespace)) {
                return "\0" + id;
            }
        },

        /**
         * 
         * @param {string} id 
         */
        async load(id) {
            if (id.startsWith("\0" + moduleNamespace)) {
                let relevant = id.substring(moduleNamespace.length + 1);


                if (relevant === "all") {
                    let versions = folders;

                    let entries = versions.map(element => {
                        return `"${element}": async () => (await import("docs:v-${element}")).default`
                    });

                    return `export default {${entries.join(",")}}`
                }
                else if(relevant === "latest") {
                    return `export default "${(await fs.readFile(path.join(docsPath, "latest.txt"), {encoding: "utf-8"})).replace("\\", "\\\\").replace("\"", "\\\"")}"`
                }
                else if(relevant.startsWith("v-")){
                    let relevantId = relevant.substring(2);

                    let version;
                    let language;

                    if (relevantId.includes(":")) {
                        let pos = relevantId.indexOf(":");

                        version = relevantId.substring(0, pos);
                        language = relevantId.substring(pos + 1);
                    }
                    else {
                        version = relevantId;
                        language = null;
                    }

                    if (folders.includes(version)) {
                        let folder = path.join(docsPath, version);

                        let docsContent = await fs.readFile(path.join(folder, "docs.json"), {encoding: "utf-8"});
                        let docsVersion = await fs.readFile(path.join(folder, "version.txt"), {encoding: "utf-8"});

                        let transformer = await import(path.join(import.meta.url, "..", "version", `${docsVersion}.js`));

                        let docsJson = JSON.parse(docsContent);

                        if (language === null) {
                            let transformed = await maybePromise(transformer.transform(JSON.parse(docsContent), folder));
                            let result = JSON.stringify(transformed.result);

                            result = result.substring(1, result.length - 1); // take off {}

                            if (!transformed.languages.includes("en_us")) {
                                throw "Docs has no \"en_us\" language, which is mandatory"
                            }
                            let entries = [];
                            
                            for (let i = 0; i < transformed.languages.length; i++) {
                                let el = transformed.languages[i];

                                if (el === "en_us") {
                                    entries.push(`${el}: ${JSON.stringify(await maybePromise(transformer.language(docsJson, el, folder)))}`);
                                }
                                else {
                                    entries.push(`"${el}": async () => (await import("docs:v-${version}:${el}")).default`);
                                }
                            }

                            return `export default {${result},languages:{${entries.join(",")}}}`;
                        }
                        else {
                            let transformed = await maybePromise(transformer.language(docsJson, language, folder));

                            return `export default ${JSON.stringify(transformed)}`;
                        }
                    }
                }
            }
        },

        enforce: "pre"
    }
}