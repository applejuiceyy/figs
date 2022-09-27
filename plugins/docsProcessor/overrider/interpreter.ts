import fs from "node:fs/promises";
import path from "node:path";
import parse from "../pathing";
import { HistoryTracker } from "../pathing/accessor";
import includes from "../version";

export default async function executeFile(obj, overrideFolder, name, version) {
    let content = await fs.readFile(path.join(overrideFolder, name + ".txt"), {encoding: "utf-8"});
    await (new FileExecutor(content, obj, overrideFolder, name, version)).run();
}
class FileExecutor {
    content: {command: string, content: string}[];
    obj: any;
    overrideFolder: string;
    name: string;
    version: string;

    constructor(content, obj, overrideFolder, name, version) {
        this.content = content.split("\n").map(val => {
            let pos = val.indexOf("#");

            if (pos === -1) {
                pos = val.length;
            }

            val = val.substring(0, pos);
            val.trim();

            if (val === "") {
                return;
            }

            pos = val.indexOf(" ");

            if (pos === -1) {
                pos = val.length;
            }

            let command = val.substring(0, pos).trim();

            return {command, content: val.substring(pos + 1).trim()};
        }).filter(val => val !== undefined);
        this.obj = obj;
        this.overrideFolder = overrideFolder;
        this.name = name;
        this.version = version;
    }

    async run() {
        for (let i = 0; i < this.content.length; i++) {

            let {command, content} = this.content[i];

            switch(command) {
                case "use":
                    await executeFile(this.obj, this.overrideFolder, content, this.version);
                    break;

                case "---":
                    i = this.performChunk(i + 1) - 1;
                    break;
            }
        }
    }

    performChunk(idx) {
        let applies = true;

        for (let i = idx; i < this.content.length; i++) {
            let {command, content} = this.content[i];

            if (command === "version") {
                let versions = content.split(",").map(val => val.trim());
                console.log(includes(versions, this.version));
                applies = applies && includes(versions, this.version);
            }
            else if (command === "index") {
                let path = parse(content);
                let context = path.getWithHistory([{track: [], current: this.obj}]);
                let l: number | null = null;
                for (let v = 0; v < context.length; v++) {
                    let c = context[v];

                    // l should not change, so it's safe to assign it here
                    l = this.performChunkPerContext(i, c, applies);
                }

                if (l === null) {
                    for (; i < this.content.length; i++) {
                        let {command} = this.content[i];

                        if (command === "---") {
                            return i;
                        }
                    }

                    return this.content.length - 1;
                }

                return l;
            }
        }


        return this.content.length;
    }

    performChunkPerContext(idx: number, context: HistoryTracker, applying: boolean) {
        let storage = {};
        let invalidated = false;

        for (let i = idx; i < this.content.length; i++) {
            let {command, content} = this.content[i];

            if (applying) {
                switch(command) {
                    case "store": {
                        if (invalidated) {
                            throw "Cannot perform a store operation because a modify operation has ocurred that potentially invalidates this path"
                        }
                        let idx = content.lastIndexOf(" ");
                        let vname = content.substring(idx).trim();

                        if (!vname.startsWith("$")) {
                            throw "Variable must start with $"
                        }

                        let storePath = parse(content.substring(0, idx));

                        if (storePath.canBranch) {
                            throw "Cannot store because this path can branch"
                        }

                        storage[vname.substring(1)] = storePath.getWithHistory([context])[0].current;
                        break;
                    }
                    
                    case "modify": {
                        if (invalidated) {
                            throw "Cannot perform a modify operation because a modify operation has ocurred that potentially invalidates this path"
                        }
                        let tildePos = content.indexOf("~");
                        let modifyPath = parse(content.substring(0, tildePos));
                        let val = content.substring(tildePos + 1).trim();
                        let value
                        if (val.startsWith("$")) {
                            value = storage[val.substring(1)]
                        }
                        else {
                            value = JSON.parse(content.substring(tildePos + 1));
                        }

                        invalidated = modifyPath.setWithHistory([context], value);
                        break;
                    }

                    case "append":
                        let tildePos = content.indexOf("~");
                        let appendPath = parse(content.substring(0, tildePos));
                        let val = content.substring(tildePos + 1).trim();
                        let value: any;
                        if (val.startsWith("$")) {
                            value = storage[val.substring(1)]
                        }
                        else {
                            value = JSON.parse(content.substring(tildePos + 1));
                        }

                        appendPath.getWithHistory([context]).forEach(val => {
                            val.current.push(value);
                        })
                }
            }

            if (command === "---") {
                return i;
            }
        }

        return this.content.length;
    }
}