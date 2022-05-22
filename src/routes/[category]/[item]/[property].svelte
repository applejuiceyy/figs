<script context="module" type="ts">
    import CategoryDocs from "$lib/mainpage/CategoryDocs.svelte";
    import rewrite_docs from "$lib/rewrite_docs.json";
    import type { Docs, APIInterface, Method, Field } from "$lib/rewrite_docs";
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
                                container: interf[i].name,
                                kind: "method",
                            },
                        };
                    }
                }

                for (let v = 0; v < interf[i].fields.length; v++) {
                    if (interf[i].fields[v].name == property) {
                        return {
                            props: {
                                docs: interf[i].fields[v],
                                container: interf[i].name,
                                kind: "field",
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
    import { MetaTags } from "svelte-meta-tags";

    export let docs: Method | Field;
    export let container: string;
    export let kind: "field" | "method";

    // workaround for ts typings not working in properties

    let docsMethod: Method;
    let docsField: Field = docs as Field;

    $: docsMethod = docs as Method;
    $: docsField = docs as Field;
</script>

{#if kind === "field"}
    <MetaTags
        title={docs.name}
        description="{docsField.editable
            ? ''
            : 'readonly '}{docsField.name}: {docsField.type}
{docs.description}"
    />
    <ItemFieldDocs container={container} field={docsField} />
{:else}
    {@const methodBody = docsMethod.parameters.map((val, i) => {
            let paramsStr = val
                .map((field) => field.name + ": " + field.type)
                .join(", ");

            return docsMethod.name + "(" + paramsStr + "): " + docsMethod.returns[i]
        })[0]
    }

    <MetaTags
        title={docs.name}
        description="{methodBody}
{docsMethod.parameters.length > 1? "(" + (docsMethod.parameters.length - 1) +  " more overloads)": ""}

{docsMethod.description}"
    />
    <ItemMethodDocs container={container} method={docsMethod} />
{/if}
