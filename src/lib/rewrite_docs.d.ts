export interface Docs {
    [category: string]: APIInterface[];
}
export interface APIInterface {
    name: string;
    description: string;
    methods: Method[];
    fields: Field[];
}

export interface Method {
    name: string;
    description: string;
    parameters: Parameters[][];
    returns: string[];
}


export interface Field {
    name: string;
    description: string;
    type: string;
    editable: boolean;
}

export interface Parameters {
    name: string;
    type: string;
}