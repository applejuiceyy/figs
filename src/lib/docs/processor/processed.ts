import docs from "$lib/docs/rewrite_docs.json";
import type { Class, Field, Method } from "$lib/docs/rewrite_docs_typings";
import type rewrite_docs_typings from "$lib/docs/rewrite_docs_typings";

export let types: {[field: string]: rewrite_docs_typings.Class} = Object.create(null);

Object.values(docs).forEach(value => value.forEach(type => types[type.name] = type));

export let globalType = types.globals;

export let globalFunctions = globalType.methods;
export let globalVariables = globalType.fields;

export let relevantTypes: typeof types = Object.assign(Object.create(null), types);

globalVariables.forEach((variable: any) => delete relevantTypes[variable.type]);
delete relevantTypes.globals;

export function getSupers(name: string): string[] {
    let klass = relevantTypes[name];
    if (klass === undefined) {
        return [name as string];
    }
    if (klass.parent) {
        return [klass.name, ...getSupers(klass.parent)];
    }
    else {
        return [];
    }
}

export function searchInClass(klass: Class, name: string): {value: Method, type: "method"} | {value: Field, type: "field"} | null {
    let method = globalFunctions.find(val => val.name === name);

    if (method !== undefined) {
        return {
            value: method,
            type: "method"
        }
    }

    let variable = globalVariables.find(val => val.name === name);

    if (variable !== undefined) {
        return {
            value: variable,
            type: "field"
        }
    }
    
    return null;
}

export function findFromQualifiedName(name: string): {value: Method, type: "method", klass: Class} | {value: Field, type: "field", klass: Class} | {value: Class, type: "class"} | null {
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

        if (name in relevantTypes) {
            return {
                value: relevantTypes[name],
                type: "class"
            }
        }
    }
    else if (name.split(".")[0] in relevantTypes) {
        let res = searchInClass(relevantTypes[name.split(".")[1]], name.split(".")[1]);

        if (res !== null) {
            return {
                // @ts-ignore
                value: res.value,
                // @ts-ignore
                type: res.type,
                klass: relevantTypes[name.split(".")[1]]
            }
        }
    }

    return null;
}