<script type="ts">
import type DocsInterface from "$lib/docs/statistics";

    import type * as processed from "$lib/docs/statistics";

    import ClassDescribe from "./describer/ClassDescribe.svelte";
    import EnumDescribe from "./describer/EnumDescribe.svelte";
    import FieldDescribe from "./describer/FieldDescribe.svelte";
    import MethodDescribe from "./describer/MethodDescribe.svelte";
        
    type Pluck<S, V> = S extends V ? never : S;

    export let what: Pluck<ReturnType<DocsInterface["findFromQualifiedName"]>, null>;
    export let path: string;
    export let classi: DocsInterface;
</script>

{#if what.type === "class"}
    <ClassDescribe classi={classi} klass={what.value} path={path} {...$$restProps}/>
{:else if what.type === "method"}
    <MethodDescribe classi={classi} hostClass={what.klass} method={what.value} path={path} {...$$restProps}/>
{:else if what.type === "field"}
    <FieldDescribe classi={classi} hostClass={what.klass} field={what.value} inlineTypeDocs={what.klass.name === "globals"} path={path} {...$$restProps}/>
{:else}
    <EnumDescribe enum_={what.value} path={path} {...$$restProps}/>
{/if}
