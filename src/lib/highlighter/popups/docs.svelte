<script type="ts">
import ClassDescribe from "$lib/content/mainpage/ClassDescribe.svelte";
import MethodDescribe from "$lib/content/mainpage/MethodDescribe.svelte";
import { findFromQualifiedName, globalFunctions } from "$lib/docs/processor/processed";


    export let name: string;

    let indexedDoc: ReturnType<typeof findFromQualifiedName>;

    $: {
        indexedDoc = findFromQualifiedName(name);
    }
</script>

{#if indexedDoc !== null}
    {#if indexedDoc.type === "class"}
        <ClassDescribe klass={indexedDoc.value} forceSmall={true}/>
    {:else if indexedDoc.type === "method"}
        <MethodDescribe hostClass={indexedDoc.klass} method={indexedDoc.value} forceSmall={true}/>
    {/if}
{:else}
    Not Found
{/if}