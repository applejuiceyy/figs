<script>
    import { MetaTags } from 'svelte-meta-tags';
    import * as processed from "$lib/docs/processor/processed";
    import ClassDescribe from '$lib/content/mainpage/ClassDescribe.svelte';
import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
import FieldDescribe from '$lib/content/mainpage/FieldDescribe.svelte';
import ImageFooter from '$lib/content/mainpage/ImageFooter.svelte';
</script>

<MetaTags title="FIGS!!!" description="The thingy applejuice made because they're bored!\n(Now Rewritten :flushed:)"/>


{#each Object.entries(processed.globalFunctions) as [name, func]}
    <MethodDescribe method={func} hostClass={processed.globalType}/>
{/each}

{#each Object.entries(processed.globalVariables) as [name, var_]}
    <FieldDescribe field={var_} hostClass={processed.globalType} inlineTypeDocs={true}/>
{/each}

{#each Object.entries(processed.relevantTypes) as [name, klass]}
    <ClassDescribe klass={klass}/>
{/each}

<ImageFooter/>