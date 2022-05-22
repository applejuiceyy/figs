<script context="module" type="ts">
    import CategoryDocs from "$lib/mainpage/CategoryDocs.svelte";
    import rewrite_docs from "$lib/rewrite_docs.json";
    import type {Docs, APIInterface} from "$lib/rewrite_docs";
import CategoryItemDocs from "$lib/mainpage/CategoryItemDocs.svelte";

    let load = function ({params: {category, item}}: {params: {category: string, item: string}}) {
        if(!(category in rewrite_docs)) {
            return {
                status: 404
            }
        }

        let interf = (rewrite_docs as Docs)[category];

        for(let i = 0; i < interf.length; i++) {
            if(interf[i].name === item) {
                return {
                    props: {
                        docs: interf[i],
                    }
                };
            }
        }

        if(!(item in interf)) {
            return {
                status: 404
            }
        }


    };

    export { load };
</script>

<script type="ts">
    import { MetaTags } from 'svelte-meta-tags';
    
    export let docs: APIInterface;
</script>

<MetaTags title="{docs.name}" description="{docs.description}"/>

<CategoryItemDocs docs={docs}/>