import type {LayoutLoad} from "./$types";

let load: LayoutLoad = async function () {
    return {
        hideTable: true
    };
}

export {load}
