import includes from "./version"

const restrictions = {
    name: function (expected, attribute) {return expected === attribute},
    versions: function (expected, attribute) {return includes(expected, attribute)}
}

const operations = {
    replace: function (config, target, parent, accessKey) {
        if (parent === null) {
            throw "Cannot replace toplevel";
        }
        
        parent[accessKey] = config.value;
    }
}

export default function performOverrides(obj, overrides, objAttributes) {
    overrides.forEach(ev => {
        let restrictionEntries = Object.entries(ev.restrict);
        let filtered = restrictionEntries.filter((name, val) => !(name in objAttributes) || restrictions[name](val, objAttributes[name]));

        if (filtered.length !== restrictionEntries.length) {
            return;
        }

        ev.overrides.forEach(ev => override(ev, obj))
    })
}

function override(overrider, obj) {
    let generator = travel(obj, overrider.query.split("."), [], []);
    
    let m;

    while(!(m = generator.next()).done) {
        let output = m.value;
        let target = output.value;

        operations[overrider.operation](overrider, target, output.values[output.values.length - 2] ?? obj, output.keys[output.keys.length - 1])
    }
}

function *travel(current, remaining, keys, values) {
    let cpy = [...remaining];
    let currentKey = cpy.shift();

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