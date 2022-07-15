<script context="module" type="ts">
    import type { Load } from "./all";

    let load: Load = function () {
        return {
            stuff: {navigation: "hashed"}
        };
    };

    export { load };
</script>

<script type="ts">
    import { MetaTags } from 'svelte-meta-tags';
    import * as processed from "$lib/docs/processor/processed";
    import ClassDescribe from '$lib/content/mainpage/ClassDescribe.svelte';
    import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
    import FieldDescribe from '$lib/content/mainpage/FieldDescribe.svelte';
    import ImageFooter from '$lib/content/mainpage/ImageFooter.svelte';
    import type { Class, Enum, Field, Method } from '$lib/docs/rewrite_docs_typings';
    import { comparer } from '$lib/docs/processor/processed';
import EnumDescribe from '$lib/content/mainpage/EnumDescribe.svelte';

    let sortedMethods: Method[];
    let sortedFields: Field[];
    let sortedClasses: Class[];
    let sortedEnums: Enum[];

    $: sortedMethods = processed.globalFunctions.sort(comparer);
    $: sortedFields = processed.globalVariables.sort(comparer);
    $: sortedClasses = Object.values(processed.relevantTypes).sort(comparer);
    $: sortedEnums = Object.values(processed.enums).sort(comparer);
</script>

<MetaTags title="FIGS!!!" description="The thingy applejuice made because they're bored!\n(Now Rewritten :flushed:)"/>


{#each sortedMethods as func}
    <MethodDescribe method={func} hostClass={processed.globalType} path="/all#"/>
{/each}

{#each sortedFields as var_}
    <FieldDescribe field={var_} hostClass={processed.globalType} inlineTypeDocs={true} path="/all#"/>
{/each}

{#each sortedClasses as klass}
    <ClassDescribe klass={klass} path="/all#"/>
{/each}

<div style:margin-top="100px"></div>
{#each sortedEnums as enum_}
    <EnumDescribe enum_={enum_} path="/all#"/>
{/each}

<ImageFooter/>