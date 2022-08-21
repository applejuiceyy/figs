import type {PageLoad} from "./$types";

let load: PageLoad = async function () {
    return {
        forceShowTable: true
    };
}

export {load}
