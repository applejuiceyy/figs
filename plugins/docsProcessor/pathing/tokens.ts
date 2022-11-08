export type tokensNames = "OPEN_BRACKETS" | "CLOSE_BRACKETS" | "OPEN_SQUARE_BRACKETS" | "OPEN_PARENTHESIS" |
"CLOSE_SQUARE_BRACKETS" | "OPEN_PARENTHESIS" | "CLOSE_PARENTHESIS" | "STRING" | "COLON" | "NUMBER" | "BOOLEAN" |
"COMMA" | "EXCLAMATION" | "AMPERSTAND" | "PIPE" | "DOT" | "IDENTIFIER" | "LESS_THAN" | "GREATER_THAN" | "WILDCARD" |
"DOLLAR"

let tokens: [string | RegExp, tokensNames | null][] = [
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


export default tokens;