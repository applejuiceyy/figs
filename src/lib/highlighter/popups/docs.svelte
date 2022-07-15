<script type="ts">
    import {page} from "$app/stores";
import ClassDescribe from "$lib/content/mainpage/ClassDescribe.svelte";
import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
import { findFromQualifiedName, globalFunctions } from "$lib/docs/processor/processed";


    export let name: string;

    let indexedDoc: ReturnType<typeof findFromQualifiedName>;

    $: {
        indexedDoc = findFromQualifiedName(name);
    }

    let hashedNavigation: boolean;
    $: hashedNavigation = ($page.stuff as {navigation: string}).navigation === "hashed";
</script>

{#if indexedDoc !== null}
    {#if indexedDoc.type === "class"}
        <ClassDescribe klass={indexedDoc.value} forceSmall={true} path={hashedNavigation ? '/all#' : '/'}/>
    {:else if indexedDoc.type === "method"}
        <MethodDescribe hostClass={indexedDoc.klass} method={indexedDoc.value} forceSmall={true} path={hashedNavigation ? '/all#' : '/'}/>
    {/if}
{:else}
    Not Found
{/if}