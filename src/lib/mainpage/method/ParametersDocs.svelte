<script type="ts">
    import type {Parameter} from "$lib/rewrite_docs";

    export let params: Parameter[];


</script>

{#each params as parameter, idx}
    {parameter.name}: <span style="color: #0000bb">{parameter.type}</span>{#if idx !== params.length - 1},&nbsp;{/if}
{/each}