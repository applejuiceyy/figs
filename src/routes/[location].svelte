<script context="module" type="ts">
    import * as processed from "$lib/docs/processor/processed";

    import type { Load } from "./[location]";

    let load: Load = function ({ params }) {
        let what = processed.findFromQualifiedName(params.location);

        if (what !== null) {
            return {
                status: 200,
                props: {
                    what: what,
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

    type Pluck<S, V> = S extends V ? never : S;
    export let what: Pluck<ReturnType<typeof processed.findFromQualifiedName>, null>;
</script>

<MetaTags title="{what.value.name}" description="{what.value.description}"/>


<DescribeAny what={what} setId={false} path={"/"}/>

