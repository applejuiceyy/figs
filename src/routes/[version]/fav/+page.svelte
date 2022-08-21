
<script type="ts">
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";

    import write from "$lib/state/stores";

    import stats from "$lib/docs/statistics";

    export let data: import("./$types").PageData;

    let s = new stats(data.docs);
</script>

{#each $write.favourites as favourite}
    {@const what = s.findFromQualifiedName(favourite)}

    {#if what !== null}
        <DescribeAny classi={s} what={what} setId={false} path={data.base}/>
    {/if}
{/each}