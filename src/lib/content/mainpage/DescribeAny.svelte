<script type="ts">
    import type * as processed from "$lib/docs/processor/processed";

    import ClassDescribe from "./ClassDescribe.svelte";
    import EnumDescribe from "./EnumDescribe.svelte";
    import FieldDescribe from "./FieldDescribe.svelte";
    import MethodDescribe from "./MethodDescribe.svelte";
        
    type Pluck<S, V> = S extends V ? never : S;

    export let what: Pluck<ReturnType<typeof processed.findFromQualifiedName>, null>;
    export let path: string;
</script>

{#if what.type === "class"}
    <ClassDescribe klass={what.value} path={path} {...$$restProps}/>
{:else if what.type === "method"}
    <MethodDescribe hostClass={what.klass} method={what.value} path={path} {...$$restProps}/>
{:else if what.type === "field"}
    <FieldDescribe hostClass={what.klass} field={what.value} inlineTypeDocs={what.klass.name === "globals"} path={path} {...$$restProps}/>
{:else}
    <EnumDescribe enum_={what.value} path={path} {...$$restProps}/>
{/if}
