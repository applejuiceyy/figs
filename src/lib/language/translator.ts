import type { Docs, Language, LanguageData } from "$lib/typings/rewrite_docs";
import state from "$lib/state/stores";
import { derived, writable, type Readable, type Writable } from "svelte/store";

import en_us from "./figs/en_us.json";
import load from "$lib/state/loading";

let json = import.meta.glob('./figs/*.json', {import: "default"});

let transformed: LanguageData = {en_us: en_us as Language} as LanguageData;

let entries = Object.entries(json);

entries.forEach(val => {
    let s = val[0].split("/");
    let key = s[s.length - 1].split(".")[0];

    if (!(key in transformed))
    {
        transformed[key] = val[1] as any;
    }
})

function transformContent(str: string) {
    return str.replaceAll("u", "uwu").replaceAll("d", "w").replaceAll("b", "w").replaceAll("g", "w").replaceAll("t", "w") + (Math.random() > 0.8 ? " >w<" : " :3");
}

let en_uwu: Language = {};

Object.entries(en_us).forEach(val => {
    en_uwu[val[0]] = transformContent(val[1])
})

transformed.en_uwu = () => new Promise(res => res(en_uwu))

type TranslationResult = {type: "PROCESSING"} | {type: "RESULT", result: string} | {type: "FALLBACK", result: string} | {type: "NOTFOUND"}

function cacheId(id: string, language: string) {
    return `${id}-${language}`
}

export class TranslatorPool {
    cachedTranslations: {[item: string]: Language};
    providers: {[item: string]: LanguageData}

    stores: {[item: string]: Writable<TranslationResult>}

    languageStore: Readable<string>;
    currentLanguage: string;

    activeTransfers: string[];

    loadCancel: () => any;

    constructor (language: Readable<string>) {
        this.cachedTranslations = {};
        this.providers = {};
        this.stores = {};

        this.languageStore = language;

        this.currentLanguage = "";  // overriden by the subscriber
        this.activeTransfers = [];

        this.loadCancel = () => {};

        this.languageStore.subscribe(async (val) => {
            if (val !== this.currentLanguage) {
                this.currentLanguage = val;

                this.reloadQueue();
                this.updateStores();
            }
        });
    }

    reloadQueue() {
        if (this.currentLanguage !== "en_us") {
            let providers = Object.entries(this.providers);

            for (let i = 0; i < providers.length; i++) {
                let entry = providers[i];

                let cid = cacheId(entry[0], this.currentLanguage);

                if (this.currentLanguage in entry[1] && !(cid in this.cachedTranslations || this.activeTransfers.includes(cid))) {
                    this.transfer(entry[0]);
                }
            }
        }
    }

    async transfer(id: string) {
        let lang = this.currentLanguage;
        let cid = cacheId(id, lang);

        let canceller = load.request(`Fetching language with a cache id of "${cid}"`);

        this.activeTransfers.push(cid);

        let t;
        let l = this.providers[id][lang];

        if (typeof l === "function") {
            try {
                t = await l();
            }
            catch (e) {
                console.error(e);
                this.activeTransfers.splice(this.activeTransfers.findIndex(val => val == cid), 1);
                canceller();
                return;
            }
        }
        else {
            t = l;
        }

        this.cachedTranslations[cid] = t;

        this.activeTransfers.splice(this.activeTransfers.findIndex(val => val == cid), 1);

        if (lang === this.currentLanguage) {
            this.updateStores();
        }

        canceller();
    }

    updateStores() {
        let stores = Object.entries(this.stores);

        for (let i = 0; i < stores.length; i++) {
            stores[i][1].set(this.getStoreValue(stores[i][0]))
        }
    }

    getStoreValue(key: string): TranslationResult {
        let providers = Object.entries(this.providers);

        for (let i = 0; i < providers.length; i++) {
            let entry = providers[i];

            let cid = cacheId(entry[0], this.currentLanguage);

            if (cid in this.cachedTranslations && key in this.cachedTranslations[cid]) {
                return {type: "RESULT", result: this.cachedTranslations[cid][key]}
            }


            cid = cacheId(entry[0], "en_us");

            if (cid in this.cachedTranslations && key in this.cachedTranslations[cid]) {
                return {type: "FALLBACK", result: this.cachedTranslations[cid][key]}
            }
        }

        if (this.activeTransfers.length > 0) {
            return {type: "PROCESSING"}
        }
        else {
            return {type: "NOTFOUND"}
        }
    }

    getPresentableValue(key: string): string {
        let ret = this.getStoreValue(key);

        return this.getPresentableValueFromResult(ret, key);
    }

    getPresentableValueFromResult(ret: TranslationResult, key: string): string {
        if (ret.type === "RESULT") {
            return ret.result;
        };

        return key;
    }

    addProvider (provider: LanguageData, id: string) {
        this.providers[id] = provider;
        let cid = cacheId(id, "en_us");
        this.cachedTranslations[cid] = provider.en_us;
        this.reloadQueue();
        return () => this.removeProvider(id)
    }

    removeProvider (id: string) {
        delete this.providers[id];
        this.reloadQueue();
    }

    createStore (key: string) {
        if (key in this.stores) {
            return this.stores[key];
        }

        let store = writable(this.getStoreValue(key), (setter) => {
            if (!(key in this.stores)) {
                this.stores[key] = store;
                setter(this.getStoreValue(key));
            }

            return () => {
                delete this.stores[key];
            }
        });

        this.stores[key] = store;

        return store;
    }

    getProviderStatistics() {
        let ret: {providers: string[], languages: {[item: string]: string[]}} = {providers: Object.keys(this.providers), languages: {}};

        let providers = Object.entries(this.providers);

        for (let i = 0; i < providers.length; i++) {
            let provider = providers[i];

            let languages = Object.keys(provider[1]);

            for (let j = 0; j < languages.length; j++) {
                if (!(languages[j] in ret.languages)) {
                    ret.languages[languages[j]] = [];
                }

                ret.languages[languages[j]].push(provider[0]);
            }
        }

        return ret;
    }
}

let pool = new TranslatorPool(derived(state, (v) => v.language));
pool.addProvider(transformed, "figs");
export default pool