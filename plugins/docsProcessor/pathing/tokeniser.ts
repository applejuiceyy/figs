let tokens: [string | RegExp, string | null][] = [
    ["{", "OPEN_BRACKETS"],
    ["}", "CLOSE_BRACKETS"],
    ["[", "OPEN_SQUARE_BRACKETS"],
    ["]", "CLOSE_SQUARE_BRACKETS"],
    ["(", "OPEN_PARENTHESIS"],
    [")", "CLOSE_PARENTHESIS"],
    [/^"(.+?)"/, "STRING"],
    [":", "COLON"],
    [/^([0-9]+(\.[0-9]+)?)/, "NUMBER"],
    [/^(true|false)/, "BOOLEAN"],
    [",", "COMMA"],
    ["!", "EXCLAMATION"],
    ["&", "AMPERSTAND"],
    ["|", "PIPE"],
    

    [".", "DOT"],
    [/^(\w+)/, "IDENTIFIER"],
    [">", "LESS_THAN"],
    ["<", "GREATER_THAN"],
    ["*", "WILDCARD"],
    ["$", "DOLLAR"],
    [/^\s/, null]
]

export type Token = {value: string | null, type: string}

/**
 * 
 * @param {string} text 
 * @returns {{type: string, value: string | null}[]}
 */
export default function tokenise(text) {
    let pos = 0;
    let ret: Token[] = [];
    let i = 0;

    while (pos < text.length && i++ < 100) {
        let done = false;

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            let res;

            if (typeof token[0] === "string") {
                res = text.startsWith(token[0], pos) ? null : undefined;

                if (res !== undefined) {
                    pos += token[0].length;
                }
            } else {
                // javascript regexes are cringe

                let result = token[0].exec(text.substring(pos));

                if (result) {
                    res = result[1] ?? null;
                    pos += result[0].length;
                }
            }

            if (res !== undefined) {
                if (token[1] !== null) {
                    ret.push({value: res, type: token[1]});
                }

                done = true;
                break;
            }
        }

        if (!done) {
            throw "Unknown token"
        }
    }

    return ret;
}