import type { PageLoad } from "./$types";
import { building } from '$app/environment';


/** @type {import('./$types').PageLoad} */
export default async function load ({url}) {
    return {
        query: building ? null : url.searchParams.get("q"),
    };
};