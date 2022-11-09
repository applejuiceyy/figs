export default {
    Pipe: (builder, pipe, pass) => {
        let id = builder.generateBindingId();

        builder.append("either", {id});
        for (let i = 0; i < pipe.exprs.length; i++) {
            builder.humanize(pipe.exprs[i], pass);

            if (i !== pipe.exprs.length - 1) {
                builder.addMappedBinding(pipe.operatorToken[i].start, pipe.operatorToken[i].stop, id);
                builder.append("or", {id});
            }
        }
    },

    Array: (builder, arr, pass) => {
        let id = builder.generateBindingId();
        if (pass?.multiple) {
            builder.append("arrays of", {id});
        }
        else {
            builder.append("an array of", {id});
        }
        builder.humanize(arr.reference, {multiple: true});
        builder.addMappedBinding(arr.openArrayToken.start, arr.openArrayToken.stop, id);
        builder.addMappedBinding(arr.closeArrayToken.start, arr.closeArrayToken.stop, id);
    },

    Tuple: (builder, arr, pass) => {
        let id = builder.generateBindingId();
        if (!pass.functionarg) {
            if (pass?.multiple) {
                builder.append("tuples containing", {id});
            }
            else {
                builder.append("a tuple containing", {id});
            }
        }
        else if(arr.exprs.length === 0) {
            builder.append("nothing", {id});
        }

        builder.addMappedBinding(arr.openArrayToken.start, arr.openArrayToken.stop, id);

        for (let i = 0; i < arr.exprs.length; i++) {
            builder.humanize(arr.exprs[i], pass);

            if (i !== arr.exprs.length - 1) {
                builder.addMappedBinding(arr.commasToken[i].start, arr.commasToken[i].stop, id);
                builder.append(",", {id, nospace: true});
            }
        }
        builder.addMappedBinding(arr.closeArrayToken.start, arr.closeArrayToken.stop, id);
    },

    Reference: (builder, ref, pass) => {
        let name = ref.name;
        let c;

        if (refB[name] === undefined) {
            c = (builder) => {
                let id = builder.generateBindingId();

                if (pass.multiple) {
                    builder.append(name + "s", {id, name: ref.name});
                }
                else {
                    builder.append("a" + (["a", "e", "i", "o", "u"].includes(name.at(0).toLowerCase()) ? "n " : " "), {id});
                    builder.append(name, {id, name: ref.name, nospace: true});
                }
                
                builder.addMappedBinding(ref.identifierToken.start, ref.identifierToken.stop, id);
            };
        }
        else {
            c = refB[name];
        }
        c(builder, ref, pass)
    }
}

let refB = {
    nil: (builder, ref, pass) => {
        let id = builder.generateBindingId();
        if (pass.multiple) {
            builder.append("nils", {id, name: ref.name});
        }
        else {
            builder.append("nil", {id, name: ref.name});
        }
        builder.addMappedBinding(ref.identifierToken.start, ref.identifierToken.stop, id);
    },

    AnyType: (builder, ref, pass) => {
        let id = builder.generateBindingId();
        builder.append("anything", {id, name: ref.name});
        builder.addMappedBinding(ref.identifierToken.start, ref.identifierToken.stop, id);
    },

    Table: (builder, ref, pass) => {
        let id = builder.generateBindingId();
        if (pass.multiple) {
            builder.append("tables", {id, name: ref.name});
        }
        else {
            builder.append("a table", {id, name: ref.name});
        }
        builder.addMappedBinding(ref.identifierToken.start, ref.identifierToken.stop, id);

        if (ref.generics.length === 2) {
            id = builder.generateBindingId();
            builder.addMappedBinding(ref.genericOpenToken.start, ref.genericOpenToken.stop, id);
            builder.append("mapping", {id});
            builder.humanize(ref.generics[0], pass);
            builder.addMappedBinding(ref.genericCommasToken[0].start, ref.genericCommasToken[0].stop, id);
            builder.append("to", {id});
            builder.humanize(ref.generics[1], pass);
            builder.addMappedBinding(ref.genericCloseToken.start, ref.genericCloseToken.stop, id);
        }
    },

    Function: (builder, ref, pass) => {
        let id = builder.generateBindingId();
        if (pass.multiple) {
            builder.append("functions", {id, name: ref.name});
        }
        else {
            builder.append("a function", {id, name: ref.name});
        }
        builder.addMappedBinding(ref.identifierToken.start, ref.identifierToken.stop, id);

        if (ref.generics.length === 2) {
            id = builder.generateBindingId();
            builder.addMappedBinding(ref.genericOpenToken.start, ref.genericOpenToken.stop, id);
            builder.append("that takes", {id});
            builder.humanize(ref.generics[0], {functionarg: true, multiple: false});
            builder.addMappedBinding(ref.genericCommasToken[0].start, ref.genericCommasToken[0].stop, id);
            builder.append("and will return", {id});
            builder.humanize(ref.generics[1], pass);
            builder.addMappedBinding(ref.genericCloseToken.start, ref.genericCloseToken.stop, id);
        }
    },
}