import { Accessor, BackwardsAccessor, FieldAccessor, InPlaceAccessor, WildCardAccessor } from "./accessor";
import { AndValidator, GenericEqualityValidator, ObjValidator, OrValidator, Validator } from "./validator";

abstract class AbstractQuerier {
    expects: string[];
    abstract currentToken: any;
    constructor() {
        this.expects = [];
    }

    expect(...types: string[]) {
        if (this.expectA(...types)) {
            this.accept();
            return true;
        }
        return false;
    }

    expectA(...types: string[]) {
        this.expects = this.expects.concat(types);
        for (let i = 0; i < types.length; i++) {
            
            if (this.currentToken.type === types[i]) {
                return true;
            }
        }

        return false;
    }

    assert(...types) {
        if (!this.expect(...types)) {
            this.reject();
        }
    }

    accept() {
        this.expects = [];
        return this.currentToken;
    }

    reject(): never {
        throw `Expected ${this.expects.join(", ")}, got ${this.currentToken.type}`
    }
}

class ContextedQuerier extends AbstractQuerier {
    currentToken: any;

    constructor(token) {
        super();
        this.currentToken = token;
    }
}

export default class Lex extends AbstractQuerier {
    tokens: any;
    current: number;

    constructor(tokens) {
        super();
        this.tokens = tokens;
        this.current = 0;
        this.expects = [];
    }

    get currentToken() {
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
        return new ContextedQuerier(this.tokens[this.current + idx] ?? {type: "EOF", value: null});
    }

    pure() {
        return new ContextedQuerier(this.currentToken);
    }



    parse() {
        let acessors: Accessor[] = [];
        while (!this.expectA("EOF")) {
            acessors.push(this.parseAccessor());
            
            if (!this.expect("DOT") && !this.expectA("EOF")) {
                this.reject();
            }
        }

        return acessors;
    }

    parseAccessor() {
        let accessor = this.parseAccessorInstruction();

        if(this.expect("LESS_THAN")) {
            accessor.valueValidator = this.parseJsonValidator();
        }

        return accessor;
    }

    parseAccessorInstruction() {
        if (this.expectA("STRING")) {
            let key = this.accept().value;

            return new FieldAccessor(key);
        }
        else if (this.expect("WILDCARD")) {
            return new WildCardAccessor();
        }
        else if (this.expect("GREATER_THAN")) {
            return new BackwardsAccessor();
        }
        else if(this.expect("DOLLAR")) {
            return new InPlaceAccessor();
        }

        this.reject();
    }

    parseJsonValidator(): Validator {
        let inverted = false;
        let validator: Validator;

        while (this.expect("EXCLAMATION")) {
            inverted = !inverted;
        }

        if (this.expect("OPEN_PARENTHESIS")) {
            validator = this.parseJsonValidator();
            this.assert("CLOSE_PARENTHESIS");
            if (inverted) {
                validator.inverted = !validator.inverted;
            }
        }
        else if (this.expectA("OPEN_BRACKETS", "DOLLAR")) {
            let strict = false;
            if (this.accept().type === "DOLLAR") {
                strict = true;
                this.assert("OPEN_BRACKETS");
            }

            let obj = {};

            while (!this.expect("CLOSE_BRACKETS")) {
                if (this.expectA("IDENTIFIER", "STRING")) {
                    let key = this.accept().value;
                    this.assert("COLON");
                    let value = this.parseJsonValidator();

                    obj[key] = value;
                }

                if (!this.expect("COMMA") && !this.expectA("CLOSE_BRACKETS")) {
                    this.reject();
                }
            }

            validator = new ObjValidator(inverted, obj, strict);
        }
        else if (this.expect("OPEN_SQUARE_BRACKETS")) {
            let obj: Validator[] = [];

            while (!this.expect("CLOSE_SQUARE_BRACKETS")) {
                let value = this.parseJsonValidator();
                obj.push(value);

                if (!this.expect("COMMA") && !this.expectA("CLOSE_SQUARE_BRACKETS")) {
                    this.reject();
                }
            }
            throw "No arrays for now, cope"
        }
        else if (this.expectA("STRING")) {
            validator = new GenericEqualityValidator(inverted, this.accept().value);
        }
        else if (this.expectA("BOOLEAN")) {
            validator = new GenericEqualityValidator(inverted, this.accept().value === "true");
        }
        else if (this.expectA("NUMBER")) {
            validator = new GenericEqualityValidator(inverted, Number.parseFloat(this.accept().value));
        }
        else {
            this.reject();
        }

        if (this.expect("AMPERSTAND")) {
            validator = new AndValidator(inverted, validator, this.parseJsonValidator());
        }
        else if (this.expect("PIPE")) {
            validator = new OrValidator(inverted, validator, this.parseJsonValidator());
        }

        return validator;
    }
}