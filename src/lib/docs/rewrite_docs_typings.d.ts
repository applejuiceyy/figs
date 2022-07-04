export interface Docs {
    [category: string]: Class[];
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