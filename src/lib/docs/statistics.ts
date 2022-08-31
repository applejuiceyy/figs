import type { Docs, Class, Method, Enum, Field } from "../typings/rewrite_docs";

import ClassDescribe from "$lib/content/mainpage/describer/ClassDescribe.svelte";
import EnumDescribe from "$lib/content/mainpage/describer/EnumDescribe.svelte";
import FieldDescribe from "$lib/content/mainpage/describer/FieldDescribe.svelte";
import MethodDescribe from "$lib/content/mainpage/describer/MethodDescribe.svelte";

import pool from "$lib/language/translator";

let classOrEnum = (h: string) => (keys: string[], values: any[]) => {
    if (keys[0] === "types") {
        return { classesShowContent: false, this: ClassDescribe, klass: values[1], highlight: [h] }
    } else {
        return { this: EnumDescribe, enum_: values[1], highlight: [h] }
    }
}

const spots = [
    {
        position: ["*", "*", "name"],
        resolve: classOrEnum("title"),
        id: (keys: string[], values: any[]) => values[1].name
    },

    {
        position: ["*", "*", "description"],
        resolve: classOrEnum("description"),
        id: (keys: string[], values: any[]) => values[1].name,
        transform: (val: string) => pool.getPresentableValue(val)
    },



    {
        position: ["types", "*", "methods", "*", "name"],
        resolve: (keys: string[], values: any[]) => {
            return {this: MethodDescribe, hostClass: values[1], method: values[3], highlight: ["title"]}
        },
        id: (keys: string[], values: any[]) => `${values[1].name}.${values[3].name}`
    },

    {
        position: ["types", "*", "methods", "*", "description"],
        resolve: (keys: string[], values: any[]) => {
            return {this: MethodDescribe, hostClass: values[1], method: values[3], highlight: ["description"]}
        },
        id: (keys: string[], values: any[]) => `${values[1].name}.${values[3].name}`,
        transform: (val: string) => pool.getPresentableValue(val)
    },



    {
        position: ["types", "*", "fields", "*", "name"],
        resolve: (keys: string[], values: any[]) => {
            return {this: FieldDescribe, hostClass: values[1], field: values[3], inlineTypeDocs: values[1].name === "globals", highlight: ["title"]}
        },
        id: (keys: string[], values: any[]) => `${values[1].name}.${values[3].name}`
    },

    {
        position: ["types", "*", "fields", "*", "description"],
        resolve: (keys: string[], values: any[]) => {
            return {this: FieldDescribe, hostClass: values[1], field: values[3], inlineTypeDocs: values[1].name === "globals", highlight: ["description"]}
        },
        id: (keys: string[], values: any[]) => `${values[1].name}.${values[3].name}`,
        transform: (val: string) => pool.getPresentableValue(val)
    },
]

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
                
                return {
                    // @ts-ignore
                    value: res.value,
                    // @ts-ignore
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
                return {
                    // @ts-ignore
                    value: res.value,
                    // @ts-ignore
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

    *search(what: any) {
        let ids = new Set();

        for (let i = 0; i < spots.length; i++) {
            let spot = spots[i];

            let generator = travel(this.docs, spot.position, [], []);
            let r;

            while(!(r = generator.next()).done) {
                let result = r.value;

                if (typeof result.value === "string") {

                    let output = (spot.transform !== undefined ? spot.transform : (val: string) => val)(result.value);
                    
                    let id = spot.id(result.keys, result.values);

                    if ((!ids.has(id)) && typeof result.value === "string" && output.toLowerCase().includes(what.toLowerCase())) {
                        ids.add(id);
                        yield spot.resolve(result.keys, result.values);
                    }
                }
            }
        }
    }
}

function *travel(current: any, remaining: string[], keys: string[], values: any[]): Generator<{value: any, keys: string[], values: any[]}> {
    let cpy = [...remaining];
    let currentKey = cpy.shift() as string;

    if (currentKey === "*") {
        let entries = Object.entries(current);

        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            if (cpy.length === 0) {
                yield {value: entry[1], keys: [...keys, entry[0]], values: [...values, entry[1]]}
            }
            else {
                yield* travel(entry[1], cpy, [...keys, entry[0]], [...values, entry[1]]);
            }
        }
    }
    else {
        if (Object.keys(current).includes(currentKey)) {
            if (cpy.length === 0) {
                yield {value: current[currentKey], keys: [...keys, currentKey], values: [...values, current[currentKey]]}
            }
            else {
                yield* travel(current[currentKey], cpy, [...keys, currentKey], [...values, current[currentKey]]);
            }
        }
    }
}