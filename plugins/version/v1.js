
function getSupers(types, name) {
    let klass = types[name];

    if (klass === undefined) {
        return [name];
    }
    if (klass.parent) {
        return [klass.name, ...getSupers(types, klass.parent)];
    }
    else {
        return [name];
    }
}

export function transform(json) {
    let result = {
        types: {},
        lists: {}
    }

    json.lists.forEach(val => {
        result.lists[val.name] = val;
        val.description = "docs." + val.name.toLowerCase()
    });
    delete json.lists;

    Object.values(json).forEach((val) => {
        val.forEach(val => {
            result.types[val.name] = val;
            val.description = "docs." + val.name.toLowerCase();

            val.methods.forEach(c => c.description = "docs." + val.name.toLowerCase() + "." + c.name.toLowerCase());
            val.fields.forEach(c => c.description = "docs." + val.name.toLowerCase() + "." + c.name.toLowerCase());
        })
    })

    Object.values(result.types).forEach(val => {
        let supers = getSupers(result.types, val.name);
        val.methods.forEach(val => {
            val.static = val.parameters.filter(params => {
                return !(params.length > 0 && (supers.includes(params[0].type) || params[0].type === val.name))
            }).length === 0;
            
            if (val.static) {
                val.parameters.forEach(params => params.shift());
            }
        })
    })

    return {
        result: result,
        languages: ["en_us"]
    };
}

export function language(json, language) {
    // language is "en_us" because we only have one language
    let lang = {};

    Object.values(json).forEach((val) => {
        val.forEach(val => {
            lang["docs." + val.name.toLowerCase()] = val.description;

            if ("entries" in val) return;

            val.methods.forEach(c => lang["docs." + val.name.toLowerCase() + "." + c.name.toLowerCase()] = c.description);
            val.fields.forEach(c => lang["docs." + val.name.toLowerCase() + "." + c.name.toLowerCase()] = c.description);
        })
    })

    return lang;
}