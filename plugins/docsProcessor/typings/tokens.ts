export type tokensNames = "OPEN_SQUARE_BRACKETS" | "CLOSE_SQUARE_BRACKETS" | "LESS_THAN" | "GREATER_THAN" | "IDENTIFIER" | "PIPE" | "COMMA"

let tokens: [string | RegExp, tokensNames | null][] = [
    ["[", "OPEN_SQUARE_BRACKETS"],
    ["]", "CLOSE_SQUARE_BRACKETS"],
    [">", "LESS_THAN"],
    ["<", "GREATER_THAN"],
    ["|", "PIPE"],
    [",", "COMMA"],
    [/^(\w+)/, "IDENTIFIER"],
    [/^\s/, null]
]

export default tokens;