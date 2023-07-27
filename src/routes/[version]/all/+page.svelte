<script type="ts">

    import { MetaTags } from 'svelte-meta-tags';
    import ClassDescribe from '$lib/content/mainpage/describer/ClassDescribe.svelte';
    import MethodDescribe from "$lib/content/mainpage/describer/MethodDescribe.svelte";
    import FieldDescribe from '$lib/content/mainpage/describer/FieldDescribe.svelte';
    import EnumDescribe from '$lib/content/mainpage/describer/EnumDescribe.svelte';

    import ImageFooter from '$lib/content/mainpage/ImageFooter.svelte';
    import type { Class, Enum, Field, Method } from '$lib/typings/rewrite_docs';

    import stats from "$lib/docs/statistics";

    export let data: import('./$types').PageData;

    let s = new stats(data.docs);

    let sortedMethods: Method[];
    let sortedFields: Field[];
    let sortedClasses: Class[];
    let sortedEnums: Enum[];

    $: sortedMethods = s.globalFunctions.sort(s.comparer);
    $: sortedFields = s.globalVariables.sort(s.comparer);
    $: sortedClasses = Object.values(s.nonSingletonClasses).sort(s.comparer);
    $: sortedEnums = Object.values(s.enums).sort(s.comparer);
</script>

<MetaTags title="FIGS!!!" description="The thingy applejuice made because they're bored!\n(Now Rewritten :flushed:)"/>


{#each sortedMethods as func}
    <MethodDescribe classi={s} method={func} hostClass={s.globalType} path={data.base}/>
{/each}

{#each sortedFields as var_}
    <FieldDescribe classi={s} field={var_} hostClass={s.globalType} inlineTypeDocs={true} path={data.base}/>
{/each}

{#each sortedClasses as klass}
    <ClassDescribe classi={s} klass={klass} path={data.base}/>
{/each}

<div style:margin-top="100px"></div>
{#each sortedEnums as enum_}
    <EnumDescribe classi={s} enum_={enum_} path={data.base}/>
{/each}

<ImageFooter/>