<script>
import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";

    import * as processed from "$lib/docs/processor/processed";

    import write from "$lib/state/stores";
</script>

{#each $write.favourites as favourite}
    {@const what = processed.findFromQualifiedName(favourite)}

    {#if what !== null}
        <DescribeAny what={what} setId={false} path={"/"}/>
    {/if}
{/each}