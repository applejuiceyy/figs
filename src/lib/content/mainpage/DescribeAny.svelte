<script lang="ts">
    import type DocsInterface from "$lib/docs/statistics";

    import ClassDescribe from "./describer/ClassDescribe.svelte";
    import EnumDescribe from "./describer/EnumDescribe.svelte";
    import FieldDescribe from "./describer/FieldDescribe.svelte";
    import MethodDescribe from "./describer/MethodDescribe.svelte";
        
    type Pluck<S, V> = S extends V ? never : S;
    let {what, path, classi, forceSmall = false, classesShowContent = true, fieldsShowInline = true, ...rest}: {
        what: Pluck<ReturnType<DocsInterface["findFromQualifiedName"]>, null>,
        path: string,
        classi: DocsInterface,
        forceSmall?: boolean,

        classesShowContent?: boolean,
        fieldsShowInline?: boolean
    } = $props();
</script>

{#if what.type === "class"}
    <ClassDescribe classesShowContent={classesShowContent} forceSmall={forceSmall} classi={classi} klass={what.value} path={path} {...rest}/>
{:else if what.type === "method"}
    <MethodDescribe forceSmall={forceSmall} classi={classi} hostClass={what.klass} method={what.value} path={path} {...rest}/>
{:else if what.type === "field"}
    <FieldDescribe forceSmall={forceSmall} classi={classi} hostClass={what.klass} field={what.value} inlineTypeDocs={fieldsShowInline && what.klass.name === "globals"} path={path} {...rest}/>
{:else}
    <EnumDescribe forceSmall={forceSmall} classi={classi} enum_={what.value} path={path} {...rest}/>
{/if}
