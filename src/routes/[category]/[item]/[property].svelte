<script context="module" type="ts">
    import CategoryDocs from "$lib/mainpage/CategoryDocs.svelte";
    import rewrite_docs from "$lib/rewrite_docs.json";
    import type { Docs, APIInterface } from "$lib/rewrite_docs";
    import CategoryItemDocs from "$lib/mainpage/CategoryItemDocs.svelte";
import ItemMethodDocs from "$lib/mainpage/method/ItemMethodDocs.svelte";
import ItemFieldDocs from "$lib/mainpage/field/ItemFieldDocs.svelte";

    let load = function ({
        params: { category, item, property },
    }: {
        params: { category: string; item: string; property: string };
    }) {
        if (!(category in rewrite_docs)) {
            return {
                status: 404,
            };
        }

        let interf = (rewrite_docs as Docs)[category];

        for (let i = 0; i < interf.length; i++) {
            if (interf[i].name === item) {
                for (let v = 0; v < interf[i].methods.length; v++) {
                    if (interf[i].methods[v].name == property) {
                        return {
                            props: {
                                docs: interf[i].methods[v],
                                kind: "method"
                            },
                        };
                    }
                }

                for (let v = 0; v < interf[i].fields.length; v++) {
                    if (interf[i].fields[v].name == property) {
                        return {
                            props: {
                                docs: interf[i].fields[v],
                                kind: "field"
                            },
                        };
                    }
                }

                return {
                    status: 404,
                };
            }
        }

        if (!(item in interf)) {
            return {
                status: 404,
            };
        }
    };

    export { load };
</script>

<script type="ts">
    export let docs: any;
    export let kind: "field" | "method";
</script>

{#if kind === "field"}
    <ItemFieldDocs field={docs} />
{:else}
    <ItemMethodDocs method={docs} />
{/if}