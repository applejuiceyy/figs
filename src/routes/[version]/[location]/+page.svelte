<script context="module" type="ts">
    import stats from "$lib/docs/statistics";

    import type { Load } from "./[location]";

    let load: Load = function ({ stuff, params }) {
        let docs = (stuff as any).docs;

        let what = new stats(docs).findFromQualifiedName(params.location);

        if (what !== null) {
        return {
            status: 200,
            props: {
                what: what,
                docs: docs,
                base: (stuff as any).base
            },
        };
        }

        return {
            status: 404,
        };
    };

    export { load };
</script>

<script type="ts">
    import { MetaTags } from "svelte-meta-tags";
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";
    import type { Docs } from "$lib/typings/rewrite_docs";
import pool from "$lib/language/translator";

    type Pluck<S, V> = S extends V ? never : S;
    
    export let what: Pluck<ReturnType<stats["findFromQualifiedName"]>, null>;
    export let docs: Docs;
    export let base: string;
</script>

<MetaTags title="{what.value.name}" description="{pool.getPresentableValue(what.value.description)}"/>


<DescribeAny classi={new stats(docs)} what={what} setId={false} path={base}/>

