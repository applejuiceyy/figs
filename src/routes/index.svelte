<script type="ts">
    import { MetaTags } from 'svelte-meta-tags';
    import * as processed from "$lib/docs/processor/processed";
    import ClassDescribe from '$lib/content/mainpage/ClassDescribe.svelte';
    import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
    import FieldDescribe from '$lib/content/mainpage/FieldDescribe.svelte';
    import ImageFooter from '$lib/content/mainpage/ImageFooter.svelte';
    import type { Class, Field, Method } from '$lib/docs/rewrite_docs_typings';
    import { comparer } from '$lib/docs/processor/processed';

    let sortedMethods: Method[];
    let sortedFields: Field[];
    let sortedClasses: Class[];

    $: sortedMethods = processed.globalFunctions.sort(comparer);
    $: sortedFields = processed.globalVariables.sort(comparer);
    $: sortedClasses = Object.values(processed.relevantTypes).sort(comparer);
</script>

<MetaTags title="FIGS!!!" description="The thingy applejuice made because they're bored!\n(Now Rewritten :flushed:)"/>


{#each sortedMethods as func}
    <MethodDescribe method={func} hostClass={processed.globalType}/>
{/each}

{#each sortedFields as var_}
    <FieldDescribe field={var_} hostClass={processed.globalType} inlineTypeDocs={true}/>
{/each}

{#each sortedClasses as klass}
    <ClassDescribe klass={klass}/>
{/each}

<ImageFooter/>