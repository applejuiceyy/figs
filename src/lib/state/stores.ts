import { writable } from "svelte/store";

let favourites: string[] = [];
if (!import.meta.env.SSR) {
    let stored = localStorage.getItem("favourites");

    if (stored !== null) {
        favourites = stored === ""? [] : stored.split(";");
    }
}

let write = writable({
    readerEnabled: false,
    favourites: favourites
})


if (!import.meta.env.SSR) {
    write.subscribe(val => {
        localStorage.setItem("favourites", val.favourites.join(";"))
    })
}


export default write;