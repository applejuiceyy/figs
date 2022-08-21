import type { PageLoad } from "./$types";
import { prerendering } from '$app/env';

let load: PageLoad = async function ({url}) {
    return {
        query: prerendering ? null : url.searchParams.get("q"),
    };
};

export { load };
