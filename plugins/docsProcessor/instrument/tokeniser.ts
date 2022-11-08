
export type Token<T> = {value: string | null, type: T, start: number, stop: number }


export default function tokenise<T>(text: string, tokens: [RegExp | string, T | null][]): Token<T>[] {
    let pos = 0;
    let ret: Token<T>[] = [];
    let i = 0;

    while (pos < text.length && i++ < 100) {
        let done = false;

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            let res;
            let start;
            let stop;

            if (typeof token[0] === "string") {
                res = text.startsWith(token[0], pos) ? null : undefined;

                if (res !== undefined) {
                    start = pos;
                    pos += token[0].length;
                    stop = pos;
                }
            } else {
                // javascript regexes are cringe

                let result = token[0].exec(text.substring(pos));

                if (result) {
                    res = result[1] ?? null;
                    start = pos;
                    pos += result[0].length;
                    stop = pos;
                }
            }

            if (res !== undefined) {
                if (token[1] !== null) {
                    ret.push({value: res, type: token[1], start, stop});
                }

                done = true;
                break;
            }
        }

        if (!done) {
            throw new Error("Unknown token at position " + pos + " on text " + text);
        }
    }

    return ret;
}