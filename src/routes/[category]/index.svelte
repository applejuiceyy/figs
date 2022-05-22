<script context="module" type="ts">
    import CategoryDocs from "$lib/mainpage/CategoryDocs.svelte";
    import rewrite_docs from "$lib/rewrite_docs.json";
    import type {Docs, APIInterface} from "$lib/rewrite_docs";

    let load = function ({params: {category}}: {params: {category: string}}) {
        if(!(category in rewrite_docs)) {
            return {
                status: 404
            }
        }

        return {
            props: {
                docs: (rewrite_docs as Docs)[category],
                name: category
            }
        };
    };

    export { load };
</script>

<script type="ts">
    import { MetaTags } from 'svelte-meta-tags';
    
    export let docs: APIInterface[];
    export let name: string;
</script>

<MetaTags title="{name}" description="{docs.map((val) => val.name + "\n\n" + val.description).join("\n\n\n")}"/>

<CategoryDocs docs={docs} name={name}/>