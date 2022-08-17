export interface Docs {
    types: {[item: string]: Class}
    lists: {[item: string]: Enum}
    languages: LanguageData
}

export interface Class {
    name: string;
    description: string;
    methods: Method[];
    fields: Field[];
    parent?: string;
    category?: string;
}

export interface Method {
    name: string;
    description: string;
    static: boolean;
    parameters: Parameter[][];
    returns: string[];
}


export interface Field {
    name: string;
    description: string;
    type: string;
    editable: boolean;
}

export interface Parameter {
    name: string;
    type: string;
}

export interface Enum {
    name: string,
    description: string,
    entries: string[]
}

export interface LanguageData {
    en_us: Language
    [item: string]: () => Promise<Language>
}

export interface Language {
    [item: string]: string
}