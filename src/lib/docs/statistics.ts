import type { Docs, Class, Method, Enum, Field } from "../typings/rewrite_docs";

import ClassDescribe from "$lib/content/mainpage/describer/ClassDescribe.svelte";
import EnumDescribe from "$lib/content/mainpage/describer/EnumDescribe.svelte";
import FieldDescribe from "$lib/content/mainpage/describer/FieldDescribe.svelte";
import MethodDescribe from "$lib/content/mainpage/describer/MethodDescribe.svelte";

import pool from "$lib/language/translator";
import TextMarker from "$lib/intertween/TextMarker.svelte";
import type { Property } from "$lib/intertween/Intertweener.svelte";
import { generateRangesFromOcurrences } from "$lib/intertween/chunker";


function generateProperties(what: string, output: string): Property[] {
    return [{component: TextMarker, ranges: generateRangesFromOcurrences(what.toLowerCase(), output.toLowerCase())}]
}

export default class DocsInterface {
    docs: Docs;

    constructor (docs: Docs) {
        this.docs = docs;
    }

    get types() {
        return this.docs.types;
    }

    get enums() {
        return this.docs.lists;
    }

    get globalType() {
        return this.docs.types.globals;
    }

    get globalFunctions() {
        return this.globalType.methods;
    }

    get globalVariables() {
        return this.globalType.fields;
    }

    get nonSingletonClasses() {
        let ret: typeof this.types = Object.assign(Object.create(null), this.types);

        this.globalVariables.forEach((variable: any) => delete ret[variable.type]);
        delete ret.globals;

        return ret;
    }


    getSupers(name: string): string[] {
        let klass = this.types[name];

        if (klass === undefined) {
            return [name];
        }
        if (klass.parent) {
            return [klass.name, ...this.getSupers(klass.parent)];
        }
        else {
            return [name];
        }
    }


    searchInClass(klass: Class, name: string): {value: Method, type: "method"} | {value: Field, type: "field"} | null {
        let method = klass.methods.find(val => val.name === name);
    
        if (method !== undefined) {
            return {
                value: method,
                type: "method"
            }
        }
    
        let variable = klass.fields.find(val => val.name === name);
    
        if (variable !== undefined) {
            return {
                value: variable,
                type: "field"
            }
        }
        
        return null;
    }


    findFromQualifiedName(name: string): {value: Method, type: "method", klass: Class} | {value: Field, type: "field", klass: Class} | {value: Class, type: "class"} | {value: Enum, type: "enum"}  | null {
        if (name.indexOf(".") === -1) {
            let res = this.searchInClass(this.globalType, name);
    
            if (res !== null) {
                //@ts-ignore
                return {
                    value: res.value,
                    type: res.type,
                    klass: this.globalType
                }
            }
    
            if (name in this.types) {
                return {
                    value: this.types[name],
                    type: "class"
                }
            }
    
            if (name in this.enums) {
                return {
                    value: this.enums[name],
                    type: "enum"
                }
            }
        }
        else if (name.split(".")[0] in this.types) {
            let res = this.searchInClass(this.types[name.split(".")[0]], name.split(".")[1]);
    
            if (res !== null) {
                //@ts-ignore
                return {
                    value: res.value,
                    type: res.type,
                    klass: this.types[name.split(".")[0]]
                }
            }
        }
    
        return null;
    }


    isFromSuperClass(hostClass: Class, method: Method) {
        let supers = this.getSupers(hostClass.name);
        supers.shift();
    
        for (let i = 0; i < supers.length; i++) {
            let klass = supers[i];
    
            if (!(klass in this.types)) {
                continue;
            }
    
            if (this.types[klass].methods.findIndex((val) => method.name === val.name) !== -1) {
                return klass;
            }
        }
    
        return null;
    }


    comparer(a: {name: string}, b: {name: string}) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    *search(what: string) {
        what = what.toLowerCase();

        for (const t of Object.values(this.types)) {
            if(t.name === "globals") continue;

            let transformedDescription = pool.getPresentableValue(t.description);

            if(t.name.toLowerCase().includes(what) || transformedDescription.toLowerCase().includes(what)) {
                yield {
                    this: ClassDescribe,
                    classesShowContent: false,
                    klass: t,
                    titleProperties: generateProperties(what, t.name.toLowerCase()),
                    descriptionProperties: generateProperties(what, transformedDescription.toLowerCase())
                }
            }

            for (const method of t.methods) {
                let transformedDescription = pool.getPresentableValue(method.description);
                let fullName =  t.name + "." + method.name;

                if(fullName.toLowerCase().includes(what) || transformedDescription.toLowerCase().includes(what)) {
                    yield {
                        this: MethodDescribe,
                        hostClass: t,
                        method: method,
                        titleProperties: generateProperties(what, fullName.toLowerCase()),
                        descriptionProperties: generateProperties(what, transformedDescription.toLowerCase())
                    }
                }
            }

            for (const field of t.fields) {
                let transformedDescription = pool.getPresentableValue(field.description);
                let fullName = t.name + "." + field.name;

                if(fullName.toLowerCase().includes(what) || transformedDescription.toLowerCase().includes(what)) {
                    yield {
                        this: FieldDescribe,
                        hostClass: t,
                        field: field,
                        titleProperties: generateProperties(what, fullName.toLowerCase()),
                        descriptionProperties: generateProperties(what, transformedDescription.toLowerCase())
                    }
                }
            }
        }

        for (const t of Object.values(this.enums)) {
            let transformedDescription = pool.getPresentableValue(t.description);
            if(t.name.toLowerCase().includes(what) || transformedDescription.toLowerCase().includes(what)) {
                yield {
                    this: EnumDescribe,
                    enum_: t,
                    titleProperties: generateProperties(what, t.name.toLowerCase()),
                    descriptionProperties: generateProperties(what, transformedDescription.toLowerCase())
                }
            }
        }
    }
}