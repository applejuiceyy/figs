import { Expression } from "./expressions";

export default class HumanizerBuilder {
    humanizedMapping: any[];
    mapping: any[];
    hints: any[];
    nextId: number;
    humanizedString: string;
    lang: any;

    constructor(lang) {
        this.humanizedMapping = [];
        this.mapping = [];
        this.hints = [];
        this.nextId = 0;
        this.humanizedString = "";
        this.lang = lang;
    }

    append(str: string, bindId: number | null, name: string | null) {
        if (bindId !== null && bindId !== undefined) {
            this.humanizedMapping.push({
                start: this.humanizedString.length,
                stop: this.humanizedString.length + str.length,
                props: {id: bindId}
            })
        }
        if (name !== null && name !== undefined) {
            this.hints.push({
                start: this.humanizedString.length,
                stop: this.humanizedString.length + str.length,
                name: name
            })
        }
        this.humanizedString += str + " ";
    }

    addMappedBinding(start: number, stop: number, bindingId: number) {
        this.mapping.push({
            start: start,
            stop: stop,
            props: {id: bindingId}
        })
    }

    generateBindingId() {
        return this.nextId++;
    }

    humanize(exp: Expression, pass: any) {
        let idx = exp.getIndex();

        for (let i = 0; i < idx.length; i++) {
            if (this.lang[idx[i]] !== undefined) {
                this.lang[idx[i]](this, exp, pass);
                return;
            }
        }

        throw "cannot find humanizer for " + idx;
    }
}