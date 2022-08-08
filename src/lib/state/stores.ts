import { writable } from "svelte/store";

let favourites: string[] = [];
let locale = "en_us";

if (!import.meta.env.SSR) {
    let fav = localStorage.getItem("favourites");

    if (fav !== null) {
        favourites = fav === ""? [] : fav.split(";");
    }

    locale = localStorage.getItem("locale") ?? "en_us";
}

let write = writable({
    readerEnabled: false,
    favourites: favourites,
    language: locale
})


if (!import.meta.env.SSR) {
    write.subscribe(val => {
        localStorage.setItem("favourites", val.favourites.join(";"));
        localStorage.setItem("locale", val.language);
    })
}


export default write;