import type { Example } from "./examples_typings";

export interface Docs {
    types: {[item: string]: Class}
    lists: {[item: string]: Enum}
    languages: LanguageData
}

export interface WithExample {
    example?: Example
}

export interface Class extends WithExample {
    name: string;
    description: string;
    methods: Method[];
    fields: Field[];
    parent?: string;
    category?: string;
    metatable: {[item: string]: string[]}
}

export interface Method extends WithExample {
    name: string;
    description: string;
    static: boolean;
    parameters: Parameter[][];
    returns: string[];
}


export interface Field extends WithExample {
    name: string;
    description: string;
    type: string;
    editable: boolean;
}

export interface Parameter {
    name: string;
    type: string;
}

export interface Enum extends WithExample {
    name: string,
    description: string,
    entries: string[]
}

export interface LanguageData {
    en_us: Language
    [item: string]: () => Promise<Language>
}

export interface Language {
    [item: string]: any
}