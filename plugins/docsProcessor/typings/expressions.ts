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

export class TupleArray extends Expression {
    exprs: Expression[];

    openArrayToken: OptionalToken = null;
    closeArrayToken: OptionalToken = null;
    
    commasToken: OptionalTokenArray = null;

    getIndex(): string[] {
        return ["Tuple"];
    }

    constructor(expr: Expression[]) {
        super();
        this.exprs = expr;
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

export class FunctionExpression extends Expression {
    args: Expression[];
    ret: Expression;
    contracts: Expression[];

    arrowToken: OptionalToken = null;
    openArgsToken: OptionalToken = null;
    closeArgsToken: OptionalToken = null;
    commasToken: OptionalTokenArray = null;

    whereToken: OptionalToken = null;
    andsToken: OptionalTokenArray = null;


    getIndex(): string[] {
        return ["Function"]
     }
 
    constructor(exprs: Expression[], returns: Expression, contracts: Expression[]) {
        super();
        this.args = exprs;
        this.ret = returns;
        this.contracts = contracts;
    }
}