import latest from "docs:latest";
import versions from "docs:all";
import type {LayoutLoad} from "./$types";

export const trailingSlash = 'always';
export const prerender = true;

let load: LayoutLoad = async function () {
    let docs = await versions[latest]();

    return {
        docs: docs,
        base: `/latest/`,
        showingEverything: false,
        everythingSwitcher: `/latest/all`,
        version: "latest",
        forceShowTable: false,
        hideTable: false
    };
}

export {load}
