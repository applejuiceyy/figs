import docs from "$lib/docs/rewrite_docs.json";
import type { Class, Enum, Field, Method } from "$lib/docs/rewrite_docs_typings";
import type rewrite_docs_typings from "$lib/docs/rewrite_docs_typings";

export let types: {[field: string]: rewrite_docs_typings.Class} = Object.create(null);
export let enums: {[field: string]: rewrite_docs_typings.Enum} = Object.create(null);

docs.lists.forEach(e => enums[e.name] = e);


Object.entries(docs).forEach(([category, value]) => category !== "lists" && value.forEach(type => types[type.name] = type as Class));

export let globalType = types.globals;

export let globalFunctions = globalType.methods;
export let globalVariables = globalType.fields;

export let relevantTypes: typeof types = Object.assign(Object.create(null), types);

globalVariables.forEach((variable: any) => delete relevantTypes[variable.type]);
delete relevantTypes.globals;

export function getSupers(name: string): string[] {
    let klass = types[name];
    if (klass === undefined) {
        return [name];
    }
    if (klass.parent) {
        return [klass.name, ...getSupers(klass.parent)];
    }
    else {
        return [name];
    }
}

export function searchInClass(klass: Class, name: string): {value: Method, type: "method"} | {value: Field, type: "field"} | null {
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

export function findFromQualifiedName(name: string): {value: Method, type: "method", klass: Class} | {value: Field, type: "field", klass: Class} | {value: Class, type: "class"} | {value: Enum, type: "enum"}  | null {
    if (name.indexOf(".") === -1) {
        let res = searchInClass(globalType, name);

        if (res !== null) {
            
            return {
                // @ts-ignore
                value: res.value,
                // @ts-ignore
                type: res.type,
                klass: globalType
            }
        }

        if (name in types) {
            return {
                value: types[name],
                type: "class"
            }
        }

        if (name in enums) {
            return {
                value: enums[name],
                type: "enum"
            }
        }
    }
    else if (name.split(".")[0] in types) {
        let res = searchInClass(types[name.split(".")[0]], name.split(".")[1]);

        if (res !== null) {
            return {
                // @ts-ignore
                value: res.value,
                // @ts-ignore
                type: res.type,
                klass: types[name.split(".")[0]]
            }
        }
    }

    return null;
}

export function isFromSuperClass(hostClass: Class, method: Method) {
    let supers = getSupers(hostClass.name);
    supers.shift();

    for (let i = 0; i < supers.length; i++) {
        let klass = supers[i];

        if (!(klass in types)) {
            continue;
        }

        if (types[klass].methods.findIndex((val) => method.name === val.name) !== -1) {
            return klass;
        }
    }

    return null;
}

export function comparer(a: {name: string}, b: {name: string}) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}