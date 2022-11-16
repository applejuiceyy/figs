import { tokensNames } from "./tokens";
import { Pipe, Expression, Reference, ExpArray, OptionalToken, OptionalTokenArray, TupleArray, FunctionExpression } from "./expressions";
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

    parseFunction(): FunctionExpression {
        let openParams = this.accept();
        let closeParams;
        let argCommas: OptionalTokenArray = [];

        let params: Expression[] = [];

        while (!this.expectA("CLOSE_PARENTHESIS")) {
            let exp = this.parseExpression();

            if (!this.expectA("COMMA") && !this.expectA("CLOSE_PARENTHESIS")) {
                this.reject();
            }

            if (this.expectA("COMMA")) {
                argCommas.push(this.accept());
            }

            params.push(exp);
        }
        closeParams = this.accept();
        let arrow = this.assert("ARROW");

        let returnType = this.parseExpression();

        let ref = new FunctionExpression(params, returnType, []);
        
        ref.arrowToken = arrow;
        ref.openArgsToken = openParams;
        ref.closeArgsToken = closeParams;
        ref.commasToken = argCommas;

        return ref;
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
        else if (this.expectA("OPEN_SQUARE_BRACKETS")) {
            let openTuple = this.accept();
            let tupleComma: OptionalTokenArray = [];
            let closeTuple: OptionalToken = null;

            let generics: Expression[] = [];

            while (!this.expectA("CLOSE_SQUARE_BRACKETS")) {
                let exp = this.parseExpression();

                if (!this.expectA("COMMA") && !this.expectA("CLOSE_SQUARE_BRACKETS")) {
                    this.reject();
                }

                if (this.expectA("COMMA")) {
                    tupleComma.push(this.accept());
                }

                generics.push(exp);
            }

            closeTuple = this.accept();

            let ref = new TupleArray(generics);
            expr = ref;

            ref.openArrayToken = openTuple;
            ref.closeArrayToken = closeTuple;
            ref.commasToken = tupleComma;
        }
        else if (this.expectA("OPEN_PARENTHESIS")) {
            let ref = this.parseFunction();

            expr = ref;

            let contracts: FunctionExpression[] = [];
            
            let whereToken: OptionalToken = null;
            let andTokens: OptionalTokenArray = [];

            if (this.expectA("WHERE")) {
                whereToken = this.accept();
                do {
                    let exp = this.parseFunction();
                    contracts.push(exp);

                    if (this.expectA("AND")) {
                        andTokens.push(this.currentToken);
                    }
                } while (this.expect("AND"))
            }

            ref.contracts = contracts;

            ref.whereToken = whereToken;
            ref.andsToken = andTokens;
        }
        else{
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