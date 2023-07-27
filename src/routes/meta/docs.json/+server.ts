import { json } from "@sveltejs/kit";
import versions from "docs:all";
export const prerender = true
export async function GET() {
    return json(Object.keys(versions));
}