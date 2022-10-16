import { writable } from "svelte/store";

let favourites: string[] = [];
let locale = "en_us";
let signaturePopupEnabled = true;
let examplePopupEnabled = true;
let readerEnabled = false;

if (!import.meta.env.SSR) {
    let fav = localStorage.getItem("favourites");

    if (fav !== null) {
        favourites = fav === ""? [] : fav.split(";");
    }

    locale = localStorage.getItem("locale") ?? "en_us";
    signaturePopupEnabled = localStorage.getItem("figs-spe") === null;
    examplePopupEnabled = localStorage.getItem("figs-epe") === null;
    readerEnabled = localStorage.getItem("figs-re") !== null;
}

let write = writable({
    readerEnabled,
    favourites: favourites,
    language: locale,
    signaturePopupEnabled,
    examplePopupEnabled
})


if (!import.meta.env.SSR) {
    write.subscribe(val => {
        localStorage.setItem("favourites", val.favourites.join(";"));
        localStorage.setItem("locale", val.language);

        if (!val.examplePopupEnabled) {
            localStorage.setItem("figs-epe", "");
        } else {
            localStorage.removeItem("figs-epe");
        }

        if (!val.signaturePopupEnabled) {
            localStorage.setItem("figs-spe", "");
        }
        else {
            localStorage.removeItem("figs-spe");
        }

        if (val.readerEnabled) {
            localStorage.setItem("figs-re", "");
        } else {
            localStorage.removeItem("figs-re");
        }
    })
}


export default write;