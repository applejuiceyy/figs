import { json } from "@sveltejs/kit";
import versions from "docs:all";
import latest from "docs:latest";

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
    return json(await versions[params.version === "latest" ? latest : params.version]());
}