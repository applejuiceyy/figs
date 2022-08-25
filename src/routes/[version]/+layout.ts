import { error } from '@sveltejs/kit';

import versions from "docs:all";
import latest from "docs:latest";

import type {LayoutLoad} from "./$types";

import l from "$lib/state/loading";

let load: LayoutLoad = async function ({ params }) {
    if (params.version in versions || params.version === "latest") {
        let canceller = l.request(`Loading ${params.version} docs`);
        let docs;
        try {
            docs = await versions[params.version === "latest" ? latest : params.version]();
        }
        finally {
            canceller();
        }

        return {
            showingEverything: false,
            everythingSwitcher: `/${params.version}/all`,
            docs: docs,
            version: params.version,
            base: `/${params.version}/`
        };
    }

    throw error(404, "Version not found");
}

export {load}
