import { error } from '@sveltejs/kit';

import stats from "$lib/docs/statistics";

import type { PageLoad } from "./$types";

let load: PageLoad = async function ({ params, parent }) {
    let data = await parent();
    let docs = data.docs;

    let what = new stats(docs).findFromQualifiedName(params.location);

    if (what !== null) {
        return {
            what: what,
            docs: docs,
            base: data.base
        }
    };

    throw error(404);
};

export { load };
