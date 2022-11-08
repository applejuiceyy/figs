import { Token } from "./tokeniser";

abstract class AbstractQuerier<V extends string> {
    expects: (V | "EOF")[];
    abstract currentToken: Token<V | "EOF">;
    constructor() {
        this.expects = [];
    }

    expect(...types: (V | "EOF")[]) {
        if (this.expectA(...types)) {
            this.accept();
            return true;
        }
        return false;
    }

    expectA(...types: (V | "EOF")[]) {
        this.expects = this.expects.concat(types);
        for (let i = 0; i < types.length; i++) {
            
            if (this.currentToken.type === types[i]) {
                return true;
            }
        }

        return false;
    }

    assert(...types: (V | "EOF")[]) {
        if (!this.expectA(...types)) {
            this.reject();
        }
        return this.accept();
    }

    accept() {
        this.expects = [];
        return this.currentToken;
    }

    reject(): never {
        throw new Error(`Expected ${this.expects.join(", ")}, got ${this.currentToken.type}`);
    }
}

class ContextedQuerier<V extends string> extends AbstractQuerier<V> {
    currentToken: Token<V>;

    constructor(token: Token<V>) {
        super();
        this.currentToken = token;
    }
}


export default class SimpleLex<V extends string> extends AbstractQuerier<V> {
    tokens: Token<V>[];
    current: number;

    constructor(tokens: Token<V>[]) {
        super();
        this.tokens = tokens;
        this.current = 0;
        this.expects = [];
    }

    get currentToken(): Token<V | "EOF"> {
        return this.tokens[this.current] ?? {type: "EOF", value: null};
    }

    advance() {
        this.current += 1;
    }

    accept() {
        let v = super.accept();
        this.advance();
        return v;
    }

    peek(idx) {
        return new ContextedQuerier<V | "EOF">(this.tokens[this.current + idx] ?? {type: "EOF", value: null});
    }

    pure() {
        return new ContextedQuerier(this.currentToken);
    }
}