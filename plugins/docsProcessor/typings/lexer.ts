import { tokensNames } from "./tokens";
import { Pipe, Expression, Reference, ExpArray, OptionalToken, OptionalTokenArray } from "./expressions";
import SimpleLex from "../instrument/lexer";

export default class Lex extends SimpleLex<tokensNames> {
    constructor(tokens) {
        super(tokens);
    }
    parse() {
        let exp = this.parseExpression();

        this.expect("EOF");

        return exp;
    }

    parseExpression(): Expression {
        let expr: Expression
        if (this.expectA("IDENTIFIER")) {
            let token = this.accept();
            let name = token.value as string;

            let generics: Expression[] = [];

            let genericOpen: OptionalToken = null;
            let genericClose: OptionalToken = null;
            let genericCommas: OptionalTokenArray = [];

            if (this.expectA("GREATER_THAN")) {
                genericOpen = this.accept();

                while (!this.expectA("LESS_THAN")) {
                    let exp = this.parseExpression();
    
                    if (!this.expectA("COMMA") && !this.expectA("LESS_THAN")) {
                        this.reject();
                    }

                    if (this.expectA("COMMA")) {
                        genericCommas.push(this.accept());
                    }

                    generics.push(exp);
                }

                genericClose = this.accept();
            }

            let ref = new Reference(name, generics);
            expr = ref;

            ref.identifierToken = token;
            ref.genericOpenToken = genericOpen;
            ref.genericCloseToken = genericClose;
            ref.genericCommasToken = genericCommas;
        }
        else {
            this.reject();
        }

        if (this.expectA("PIPE")) {
            let token = this.accept();

            let other = this.parseExpression();
            if (other instanceof Pipe) {
                other.exprs.splice(0, 0, expr);
                (other as Pipe).operatorToken?.splice(0, 0, token);
            }
            else {
                other = new Pipe([expr, other]);
                (other as Pipe).operatorToken = [token];
            }

            return other;
        }

        while (this.expectA("OPEN_SQUARE_BRACKETS")) {
            let openArray = this.accept();
            let closeArray = this.assert("CLOSE_SQUARE_BRACKETS");

            let arr = new ExpArray(expr);
            expr = arr;

            arr.openArrayToken = openArray;
            arr.closeArrayToken = closeArray;
        }

        return expr;
    }
}