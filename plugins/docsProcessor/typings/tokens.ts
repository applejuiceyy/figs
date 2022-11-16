let tokens = [
    ["[", "OPEN_SQUARE_BRACKETS"],
    ["]", "CLOSE_SQUARE_BRACKETS"],
    [">", "LESS_THAN"],
    ["<", "GREATER_THAN"],
    ["|", "PIPE"],
    [",", "COMMA"],
    ["(", "OPEN_PARENTHESIS"],
    [")", "CLOSE_PARENTHESIS"],
    ["->", "ARROW"],
    ["where", "WHERE"],
    ["and", "AND"],
    [/^(\w+)/, "IDENTIFIER"],

    [/^\s/, null]
] as const

type NotNull<V> = V extends null ? never : V;



export type tokensNames = NotNull<(typeof tokens)[number][1]>


export default tokens;