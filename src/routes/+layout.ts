import latest from "docs:latest";
import versions from "docs:all";
import type {LayoutLoad} from "./$types";

let load: LayoutLoad = async function () {
    let docs = await versions[latest]();

    return {
        docs: docs,
        base: `/latest/`,
        showingEverything: false,
        everythingSwitcher: `/latest/all`,
        version: "latest",
        forceShowTable: false
    };
}

export {load}
