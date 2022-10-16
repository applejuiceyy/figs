<script type="ts">
    export let text: string;
</script>

{#each text.split("\n") as chunk, id}{chunk}{#if id !== text.split("\n").length - 1}<br>{/if}{/each}