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
    export let docs: APIInterface;
    export let name: string;
</script>

<CategoryDocs docs={docs} name={name}/>