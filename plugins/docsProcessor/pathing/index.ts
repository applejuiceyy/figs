import tokenise from "../instrument/tokeniser";
import tokensS from "./tokens";
import Lex from "./lexer";
import Path from "./path";

let cache = Object.create(null);

export default function parse(str: string): Path {
    if (str in cache) {
        return cache[str];
    }
    let tokens = tokenise(str, tokensS);
    let lex = new Lex(tokens);
    let path = new Path(lex.parse());
    cache[str] = path;
    return path;
}