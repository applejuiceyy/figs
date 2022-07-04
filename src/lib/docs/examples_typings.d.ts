export default interface Examples {
    [item: string]: Example
}

interface Example {
    content: string,
    hints: Hint[]
}

export interface HintContent {
    type: "docs" | "primitive" | "inherent",
    name: string
}

interface Hint extends HintContent {
    range: [number, number]
}

