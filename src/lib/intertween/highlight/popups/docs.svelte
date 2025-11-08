<script lang="ts">
    import {page} from "$app/stores";
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";
    import type DocsInterface from "$lib/docs/statistics";


    let {name, classi}: {
        name: string,
        classi: DocsInterface | null
    } = $props();

    let indexedDoc = $derived(classi?.findFromQualifiedName(name));
    
    let base = $derived($page.data.base);
</script>

{#if classi === null}
    Version is not selected
{:else if indexedDoc !== null && indexedDoc !== undefined}
    <DescribeAny forceSmall classi={classi} what={indexedDoc} path={base} classesShowContent={false} fieldsShowInline={false}/>
{:else}
    Not Found
{/if}