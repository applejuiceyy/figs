import { Token } from "../instrument/tokeniser";

export type OptionalToken = Token<any> | null;
export type OptionalTokenArray = Token<any>[] | null;

export abstract class Expression {
    abstract getIndex(): string[];
}

export class Reference extends Expression {
    generics: Expression[];
    name: string;


    identifierToken: OptionalToken = null;
    genericOpenToken: OptionalToken = null;
    genericCloseToken: OptionalToken = null;

    genericCommasToken: OptionalTokenArray = null;


    getIndex(): string[] {
        return [this.name, "Reference"];
    }

    constructor(name: string, generics: Expression[]) {
        super();
        this.generics = generics;
        this.name = name;
    }
}

export class ExpArray extends Expression {
    reference: Expression;

    openArrayToken: OptionalToken = null;
    closeArrayToken: OptionalToken = null;

    getIndex(): string[] {
        return ["Array"];
    }

    constructor(reference: Expression) {
        super();
        this.reference = reference;
    }
}

export class Pipe extends Expression {
    exprs: Expression[];


    operatorToken: OptionalTokenArray = null;


    getIndex(): string[] {
       return ["Pipe"]
    }

    constructor(exprs: Expression[]) {
        super();
        this.exprs = exprs;
    }
}