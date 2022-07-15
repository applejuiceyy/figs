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
import ClassDescribe from "$lib/content/mainpage/ClassDescribe.svelte";
import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
import FieldDescribe from "$lib/content/mainpage/FieldDescribe.svelte";
import EnumDescribe from "$lib/content/mainpage/EnumDescribe.svelte";
import { MetaTags } from "svelte-meta-tags";

    type Pluck<S, V> = S extends V ? never : S;
    export let what: Pluck<ReturnType<typeof processed.findFromQualifiedName>, null>;
</script>

<MetaTags title="{what.value.name}" description="{what.value.description}"/>

{#if what.type === "class"}
    <ClassDescribe klass={what.value} setId={false} path={'/'}/>
{:else if what.type === "method"}
    <MethodDescribe hostClass={what.klass} method={what.value} setId={false} path={'/'}/>
{:else if what.type === "field"}
    <FieldDescribe hostClass={what.klass} field={what.value} inlineTypeDocs={what.klass.name === "globals"} setId={false} path={'/'}/>
{:else}
    <EnumDescribe enum_={what.value} setId={false} path={'/'}/>
{/if}
