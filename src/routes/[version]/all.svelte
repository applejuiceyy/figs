<script context="module" type="ts">
    import type { Load } from "./all";

    let load: Load = function ({params, stuff}) {
        return {
            stuff: {
                base: `/${params.version}/all#`,
                showingEverything: true,
                everythingSwitcher: `/${params.version}/`
            },
            props: {
                docs: (stuff as any).docs,
                base: `/${params.version}/all#`
            }
        };
    };

    export { load };
</script>

<script type="ts">
    import { MetaTags } from 'svelte-meta-tags';
    import ClassDescribe from '$lib/content/mainpage/describer/ClassDescribe.svelte';
    import MethodDescribe from "$lib/content/mainpage/describer/MethodDescribe.svelte";
    import FieldDescribe from '$lib/content/mainpage/describer/FieldDescribe.svelte';
    import EnumDescribe from '$lib/content/mainpage/describer/EnumDescribe.svelte';

    import ImageFooter from '$lib/content/mainpage/ImageFooter.svelte';
    import type { Class, Docs, Enum, Field, Method } from '$lib/docs/rewrite_docs';

    import stats from "$lib/docs/statistics";

    export let docs: Docs;
    export let base: string;

    let s = new stats(docs);

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
    <MethodDescribe classi={s} method={func} hostClass={s.globalType} path={base}/>
{/each}

{#each sortedFields as var_}
    <FieldDescribe classi={s} field={var_} hostClass={s.globalType} inlineTypeDocs={true} path={base}/>
{/each}

{#each sortedClasses as klass}
    <ClassDescribe classi={s} klass={klass} path={base}/>
{/each}

<div style:margin-top="100px"></div>
{#each sortedEnums as enum_}
    <EnumDescribe enum_={enum_} path={base}/>
{/each}

<ImageFooter/>