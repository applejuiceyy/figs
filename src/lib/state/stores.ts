import { writable } from "svelte/store";

let favourites: string[] = [];
let locale = "en_us";
let signaturePopupEnabled = true;
let examplePopupEnabled = true;
let readerEnabled = false;
let hasAnsweredSkillCheck = true;
let skilled = false;
let visits: number = 2;
let ST_aware = true;

if (!import.meta.env.SSR) {
    let fav = localStorage.getItem("favourites");

    if (fav !== null) {
        favourites = fav === ""? [] : fav.split(";");
    }

    locale = localStorage.getItem("locale") ?? "en_us";
    signaturePopupEnabled = localStorage.getItem("figs-spe") === null;
    examplePopupEnabled = localStorage.getItem("figs-epe") === null;
    readerEnabled = localStorage.getItem("figs-re") !== null;
    hasAnsweredSkillCheck = localStorage.getItem("figs-hasc") !== null;
    skilled = localStorage.getItem("figs-s") !== null;
    visits = (Number(localStorage.getItem("figs-visits") ?? "1") ?? 1) + 0.1;
    ST_aware = localStorage.getItem("figs-STA") !== null;
}

let write = writable({
    readerEnabled,
    favourites: favourites,
    language: locale,
    signaturePopupEnabled,
    examplePopupEnabled,
    hasAnsweredSkillCheck,
    skilled,
    visits,
    ST_aware
})


if (!import.meta.env.SSR) {
    write.subscribe(val => {
        localStorage.setItem("favourites", val.favourites.join(";"));
        localStorage.setItem("locale", val.language);
        localStorage.setItem("figs-visits", String(val.visits));

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

        if (val.hasAnsweredSkillCheck) {
            localStorage.setItem("figs-hasc", "");
        } else {
            localStorage.removeItem("figs-hasc");
        }

        if (val.skilled) {
            localStorage.setItem("figs-s", "");
        } else {
            localStorage.removeItem("figs-s");
        }

        if (val.ST_aware) {
            localStorage.setItem("figs-STA", "");
        } else {
            localStorage.removeItem("figs-STA");
        }
    })
}


export default write;