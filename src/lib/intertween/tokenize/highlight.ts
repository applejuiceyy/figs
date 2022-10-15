import prism from "prismjs";
import lang from "../lua";
import type { Property, Range } from "../Intertweener.svelte";
import Token from "./Token.svelte";

export function generateHighlightChunks(code: string): Property {
    let tokens = prism.tokenize(code, lang);
    let ret: Range[] = [];

    let pos = 0;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token instanceof prism.Token) {
            ret.push({
                start: pos,
                stop: pos + token.length,
                props: {type: token.type}
            })
        }
        pos += token.length;
    }

    return {
        component: Token,
        ranges: ret
    }
}