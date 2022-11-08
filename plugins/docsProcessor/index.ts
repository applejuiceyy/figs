import fs from "node:fs/promises";
import path from "node:path";
import { ExampleExtractor } from "./examples.js";
import yaml from "yaml";
import executeFile from "./overrider/interpreter.js";
import { findAndParseTypings } from "./typings/index.js";

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

const readFile = (file) => {
    return fs.readFile(file, {encoding: "utf-8"});
}

const readDir = (file) => {
    return fs.readdir(file);
}

async function getTransformedDocs(docsPath, version) {
    let folder = path.join(docsPath, "versions", version);

    let docsContent = await readFile(path.join(folder, "docs.json"));
    let docsVersion = await readFile(path.join(folder, "version.txt"));

    let transformer = await import(path.join(import.meta.url, "..", "version", `${docsVersion}.js`));
    let docsJson = JSON.parse(docsContent);

    let transformed = await maybePromise(transformer.transform(docsJson, folder));

    let examples = yaml.parse(await readFile(path.join(docsPath, "examples.yaml")));

    let exampleExtractor = new ExampleExtractor(examples);
    let extractedExamples = exampleExtractor.getExamples(version);
    exampleExtractor.injectExamples(transformed.result, extractedExamples, version);

    await executeFile(transformed.result, path.join(docsPath, "overrider"), "docs", version);

    transformed.languages.push("en_uwu");

    if (!transformed.languages.includes("en_us")) {
        throw "Docs has no \"en_us\" language, which is mandatory"
    }

    let tt = {transformer: transformer, languages: transformed.languages, result: transformed.result, language: async (language) => {
        if (language === "en_uwu") {
            let transformed = await tt.language("en_us");
            
            /*let entries = Object.entries(transformed);
            for (let i = 0; i < entries.length; i++) {
                transformed[entries[i][0]] = transformContent(entries[i][1]);
            }*/

            return `export default ${JSON.stringify(transformed)}`;
        }

        let transformedLang = await maybePromise(transformer.language(JSON.parse(docsContent), language, folder));

        let files = await readDir(path.join(".", "plugins", "docsProcessor", "typings", "lang"));

        if (files.includes(language + ".js")) {
            let genr = findAndParseTypings(transformed.result, (await import(path.join(import.meta.url, "..", "typings", "lang", language + ".js"))).default);
            let m;
            while (!(m = await genr.next()).done) {
                transformedLang["typings." + m.value.key] = m.value.value;
            }
        }

        return transformedLang
    }};

    return tt;
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

            
            if (id.startsWith("\0" + moduleNamespace)) {
                let relevant = id.substring(moduleNamespace.length + 1);

                const folders = (await readFile(path.join(docsPath, "order.txt"))).replace(new RegExp("\r", "g"), "").split("\n");

                if (relevant === "all") {
                    let versions = folders;
                    let entries = versions.map(element => {
                        return `"${element}": (async () => (await import("docs:v-${element}")).default)`
                    });
                    
                    return `export default {${entries.join(",")}}`
                }
                else if(relevant === "latest") {
                    let vers = (await readFile(path.join(docsPath, "order.txt"))).split("\n");
                    return `export default "${vers[vers.length - 1].replace("\\", "\\\\").replace("\"", "\\\"")}"`
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

                        let transformedDocs = await getTransformedDocs(docsPath, version);

                        if (language === null) {
                            ////////
                            ////////
                            ////////
                            ////////
                            ////////
                            ////////
                            ////////
                            ////////

                            let result = JSON.stringify(transformedDocs.result);

                            result = result.substring(1, result.length - 1); // take off {}

                            let entries: string[] = [];
                            
                            for (let i = 0; i < transformedDocs.languages.length; i++) {
                                let el = transformedDocs.languages[i];

                                if (el === "en_us") {
                                    entries.push(`${el}: ${JSON.stringify(await maybePromise(transformedDocs.language(el)))}`);
                                }
                                else {
                                    entries.push(`"${el}": async () => (await import("docs:v-${version}:${el}")).default`);
                                }
                            }

                            return `export default {${result},languages:{${entries.join(",")}}}`;
                        }
                        else {
                            return `export default ${JSON.stringify(await transformedDocs.language(language))}`;
                        }
                    }
                }
            }
        },

        enforce: "pre"
    }
}