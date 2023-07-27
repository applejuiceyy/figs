import { json } from "@sveltejs/kit";
import versions from "docs:all";

export async function GET() {
    return json(Object.keys(versions));
}