<script type="ts">
    import {page} from "$app/stores";
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";
    import type DocsInterface from "$lib/docs/statistics";


    export let name: string;
    export let classi: DocsInterface | null;

    let indexedDoc: ReturnType<DocsInterface["findFromQualifiedName"]> | undefined;

    $: {
        indexedDoc = classi?.findFromQualifiedName(name);
    }

    let hashedNavigation: boolean;
    $: hashedNavigation = ($page.stuff as {navigation: string}).navigation === "hashed";
</script>

{#if classi === null}
    Version is not selected
{:else if indexedDoc !== null && indexedDoc !== undefined}
    <DescribeAny classi={classi} what={indexedDoc} path={hashedNavigation ? '/all#' : '/'}/>
{:else}
    Not Found
{/if}