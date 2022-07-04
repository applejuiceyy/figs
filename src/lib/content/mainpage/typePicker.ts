let primitive = ["AnyType", "nil", "Table", "Userdata", "Integer", "String", "Boolean", "Function", "Number"]

export function pickType(name: string) {
    if (primitive.includes(name)) {
        return "primitive";
    }
    else {
        return "docs";
    }
}