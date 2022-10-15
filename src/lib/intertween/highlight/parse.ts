//@ts-ignore: no typings
import parser from "luaparse";
import type DocsInterface from "../../docs/statistics";
import type {Property, Range} from "../Intertweener.svelte";
import Highlight from "./Highlight.svelte";


function walk(node: any, fn: (node: any) => boolean) {
    if (typeof node !== 'object') return false;
    if (!fn(node)) return;

    Object.entries(node).forEach(
        ([key, child]: [string, any]) => {

            if (child == null || typeof child !== 'object') return;
            if (typeof child.type === 'string') return walk(child, fn);

            if ("forEach" in child) {
                child.forEach((sub: any) => walk(sub, fn));
            }
        }
    );
};

function walkFor(node: any, entries: {[item: string]: (node: any) => boolean}) {
    return walk(node, (f) => {
        if (f.type in entries) {
            return entries[f.type](f)
        }

        return true
    })
}


export function generateHints(code: string, classi: DocsInterface): Property {
    let content = parser.parse(code, {
        comments: true,
        scope: true,
        ranges: true,
    })

    return {
        ranges: [...collectComments(content), ...collectLocals(content), ...collectIdentifier(content, classi), ...collectPrimitives(content)].sort((a, b) => a.start - b.start),
        component: Highlight
    }
}

function collectComments(node: any): Range[] {
    return node.comments.map((element: any) => ({start: element.range[0], stop: element.range[1], props: {name: "comment", type: "inherent"}}));
}

function collectLocals(node: any): Range[] {
    let ret: Range[] = [];

    walkFor(node.body, {
        Identifier: function(node: any) {
            if (node.isLocal) {
                ret.push({
                    start: node.range[0],
                    stop: node.range[1],

                    props: {
                        name: `# ${node.name} is a local variable\nThere should be a variable declaration somewhere in this example`,
                        type: "inherent",
                    }
                })
            }

            return true;
        }
    })

    return ret
}

function getReferenceAndHints(node: any, classi: DocsInterface): [ReturnType<DocsInterface["searchInClass"]>, Range[]] {
    if (node.type === "Identifier") {
        if (node.islocal) {
            return [null, []]
        }

        let ret = classi.searchInClass(classi.globalType, node.name);

        if (ret === null) {
            return [null, []]
        }

        return [ret, [
            {
                start: node.range[0],
                stop: node.range[1],

                props: {
                    type: "docs",
                    name: ret.value.name
                }
            }
        ]]
    }

    else if (node.type === "MemberExpression") {
        let prev = getReferenceAndHints(node.base, classi);

        if (prev[0] === null) {
            return prev
        }

        if (prev[0].type === "method") {
            return [null, prev[1]];
        }

        let type = prev[0].value.type;
        let cls = classi.findFromQualifiedName(type);

        if (cls === null || cls.type !== "class") {
            return [null, prev[1]];
        }

        let what = classi.searchInClass(cls.value, node.identifier.name);

        if (what === null) {
            return [null, prev[1]];
        }

        return [what, [
            ...prev[1],
            {
                start: node.identifier.range[0],
                stop: node.identifier.range[1],

                props: {
                    type: "docs",
                    name: `${cls.value.name}.${what.value.name}`
                }
            }
        ]]
    }

    return [null, []]
}

function collectIdentifier(node: any, classi: DocsInterface): Range[] {
    let ret: Range[] = [];

    walkFor(node.body, {
        CallExpression: function(node: any) {
            let result = getReferenceAndHints(node.base, classi);

            if (result !== null) {
                ret = [...ret, ...result[1]];
            }

            return true;
        }
    })

    return ret
}

function collectPrimitives(node: any) {
    let ret: Range[] = [];

    walkFor(node.body, {
        NumericLiteral: function(node: any) {
            ret.push({
                start: node.range[0],
                stop: node.range[1],

                props: {
                    name: "Integer",
                    type: "primitive"
                }
            })

            return true;
        },

        BooleanLiteral: function(node: any) {
            ret.push({
                start: node.range[0],
                stop: node.range[1],

                props: {
                    name: "Boolean",
                    type: "primitive"
                }
            })

            return true;
        },

        StringLiteral: function(node: any) {
            ret.push({
                start: node.range[0],
                stop: node.range[1],

                props: {
                    name: "String",
                    type: "primitive"
                }
            })

            return true;
        }
    })

    return ret
}