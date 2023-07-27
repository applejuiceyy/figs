import { building } from '$app/environment';

/** @type {import('./$types').PageLoad} */
export async function load ({url}) {
    return {
        query: building ? null : url.searchParams.get("q"),
    };
};