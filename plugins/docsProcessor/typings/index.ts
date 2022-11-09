import tokenise from "../instrument/tokeniser";
import tokensS from "./tokens";
import HumanizerBuilder from "./builder";
import Lex from "./lexer";
import parsePath from "../pathing";

let cache = Object.create(null);

export default function parse(str: string, lang: any): HumanizerBuilder {
    if (str in cache) {
        return cache[str];
    }
    
    let builder = new HumanizerBuilder(lang);
    try {
        let tokens = tokenise(str, tokensS);
        let lex = new Lex(tokens);
        builder.humanize(lex.parse(), {multiple: false});
    }
    catch (e) {
        console.warn("Cannot parse " + str + ": " + e);
    }
    cache[str] = builder;
    return builder;
}

function hash(str: string): number {
    let hash = 0, i, chr;

    if (str.length === 0) return hash;

    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }

    return hash;
}

export async function* findAndParseTypings(docs: any, lang: string) {
    let cache = {};

    let doParse = function* (l: string) {
        let path = parsePath(l);
        let typings = path.get(docs);
    
        for (let i = 0; i < typings.length; i++) {
            let typing = typings[i];
            let hashed = hash(typing);
    
            if (cache[hashed] === undefined) {
                let builder = parse(typing, lang);
                cache[hashed] = true;
    
                yield {key: hash(typing), value: {
                    string: builder.humanizedString,
                    mapping: builder.humanizedMapping,
                    ogmap: builder.mapping,
                    hints: builder.hints
                }}
            }
        }
    }

    yield* doParse('"types".*."methods".*."parameters".*.*."type"');
    yield* doParse('"types".*."methods".*."returns".*');
    yield* doParse('"types".*."fields".*."type"');
}