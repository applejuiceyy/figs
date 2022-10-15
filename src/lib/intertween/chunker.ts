import Chunk from "./Chunk.svelte";
import type {Property, Range} from "./Intertweener.svelte";

export function generateChunks(text: string): Property {
    let characters = [",", ". "];
    let ret: Range[] = [];

    let pos = 0;
    while (true) {
        let found = -1;
        let len = 0;

        for (let c = 0; c < characters.length; c++) {
            let candidate = text.indexOf(characters[c], pos + 50);

            if (candidate !== -1 && (candidate < found || found === -1)) {
                found = candidate;
                len = characters[c].length;
            }
        }

        if (found === -1) {
            ret.push({start: pos, stop: text.length, props: {}});
            break;
        }
        else {
            ret.push({start: pos, stop: found + len, props: {}});
            pos = found + len;
        }
    }

    return {
        component: Chunk,
        ranges: ret
    }
}

export function generateRangesFromOcurrences(searching: string, text: string): Range[] {
    let ret = [];

    let searchlen = searching.length;
    if (searchlen == 0) {
        return [];
    }
    let pos = 0;
    let index;

    while ((index = text.indexOf(searching, pos)) > -1) {
        ret.push({start: index, stop: index + searchlen, props: {}});
        pos = index + searchlen;
    }
    return ret;
}