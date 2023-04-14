import type { PageLoad } from "./$types";
import { building } from '$app/environment';

let load: PageLoad = async function ({url}) {
    return {
        query: building ? null : url.searchParams.get("q"),
    };
};

export { load };
