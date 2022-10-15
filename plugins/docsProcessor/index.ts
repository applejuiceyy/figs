import fs from "node:fs/promises";
import path from "node:path";
import { ExampleExtractor } from "./examples.js";
import yaml from "yaml";
import executeFile from "./overrider/interpreter.js";
import util from "node:util"

const docsPath = "./docs";

async function maybePromise(what) {
    if ("then" in what && typeof what.then === "function") {
        return await what;
    }

    return what;
}

function transformContent(str) {
    return str.replaceAll("u", "uwu").replaceAll("d", "w").replaceAll("b", "w").replaceAll("g", "w").replaceAll("t", "w") + (Math.random() > 0.8 ? " >w<" : " :3");
}

/** @type {() => import('vite').Plugin} */
export default async function docsProcessor() {
    const moduleNamespace = "docs:";

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
            const readFile = (file) => {
                return fs.readFile(file, {encoding: "utf-8"});
            }

            const readDir = (file) => {
                return fs.readdir(file);
            }
            
            if (id.startsWith("\0" + moduleNamespace)) {
                let relevant = id.substring(moduleNamespace.length + 1);

                const folders = await readDir(path.join(docsPath, "versions"));

                if (relevant === "all") {
                    let versions = folders;

                    let entries = versions.map(element => {
                        return `"${element}": async () => (await import("docs:v-${element}")).default`
                    });

                    return `export default {${entries.join(",")}}`
                }
                else if(relevant === "latest") {
                    return `export default "${(await readFile(path.join(docsPath, "latest.txt"))).replace("\\", "\\\\").replace("\"", "\\\"")}"`
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
                        let folder = path.join(docsPath, "versions", version);

                        let docsContent = await readFile(path.join(folder, "docs.json"));
                        let docsVersion = await readFile(path.join(folder, "version.txt"));

                        let transformer = await import(path.join(import.meta.url, "..", "version", `${docsVersion}.js`));

                        let docsJson = JSON.parse(docsContent);

                        if (language === null) {
                            let transformed = await maybePromise(transformer.transform(JSON.parse(docsContent), folder));


                            let examples = yaml.parse(await readFile(path.join(docsPath, "examples.yaml")));

                            let exampleExtractor = new ExampleExtractor(examples);
                            let extractedExamples = exampleExtractor.getExamples(version);
                            exampleExtractor.injectExamples(transformed.result, extractedExamples, version);

                            await executeFile(transformed.result, path.join(docsPath, "overrider"), "docs", version);
                            let result = JSON.stringify(transformed.result);

                            result = result.substring(1, result.length - 1); // take off {}

                            transformed.languages.push("en_uwu");

                            if (!transformed.languages.includes("en_us")) {
                                throw "Docs has no \"en_us\" language, which is mandatory"
                            }
                            let entries: string[] = [];
                            
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
                            if (language === "en_uwu") {
                                let transformed = await maybePromise(transformer.language(docsJson, "en_us", folder));
                                
                                let entries = Object.entries(transformed);
                                for (let i = 0; i < entries.length; i++) {
                                    transformed[entries[i][0]] = transformContent(entries[i][1]);
                                }

                                return `export default ${JSON.stringify(transformed)}`;
                            }
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