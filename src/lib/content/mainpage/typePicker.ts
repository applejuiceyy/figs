import type DocsInterface from "$lib/docs/statistics";
import type { Range } from "$lib/intertween/Intertweener.svelte";

let primitive = ["AnyType", "nil", "Table", "Userdata", "Integer", "String", "Boolean", "Function", "Number"]

export function pickType(name: string): "primitive" | "docs" {
    if (primitive.includes(name)) {
        return "primitive";
    }
    else {
        return "docs";
    }
}

export function extractIdentifiers(classi:DocsInterface , str: string, shift: number): Range[] {
    let hints: Range[] = [];
    const reg = /\w+/g
    let m;

    while((m = reg.exec(str))) {
        const picked = pickType(m[0])
        hints.push({
            start: m.index + shift,
            stop: m.index + m[0].length + shift,

            props: {
                type: picked,
                name: m[0],
                travel: picked === "docs" && classi.findFromQualifiedName(m[0]) !== null ? m[0] : undefined
            }
        })
    }

    return hints;
}