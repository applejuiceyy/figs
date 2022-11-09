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

    append(str: string, options: {id?: number, name?: number, nospace?: boolean}) {
        if (!options.nospace && this.humanizedString.length > 0) {
            this.humanizedString += " ";
        }

        if (options.id !== undefined) {
            e: {
                if (this.humanizedMapping.length > 0) {
                    let last = this.humanizedMapping[this.humanizedMapping.length - 1];
        
                    if (last.stop === this.humanizedString.length && options.id === last.props.id) {
                        last.stop = this.humanizedString.length + str.length;
                        break e;
                    }
                }

                this.humanizedMapping.push({
                    start: this.humanizedString.length,
                    stop: this.humanizedString.length + str.length,
                    props: {id: options.id}
                })
            }
        }
        if (options.name !== undefined) {
            e: {
                if (this.hints.length > 0) {
                    let last = this.hints[this.hints.length - 1];
        
                    if (last.stop === this.humanizedString.length && options.name === last.name) {
                        last.stop = this.humanizedString.length + str.length;
                        break e;
                    }
                }
    
                this.hints.push({
                    start: this.humanizedString.length,
                    stop: this.humanizedString.length + str.length,
                    name: options.name
                })
            }
        }
        this.humanizedString += str;
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