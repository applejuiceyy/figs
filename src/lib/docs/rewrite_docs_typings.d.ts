export interface Docs {
    [category: string]: Class[];
    lists: Enum[]
}
export interface Class {
    name: string;
    description: string;
    methods: Method[];
    fields: Field[];
    parent?: string;
}

export interface Method {
    name: string;
    description: string;
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