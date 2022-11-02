<script type="ts">
    export let text: string;
</script>

{#each text.split("\n") as chunk, id}<span style="white-space: pre-wrap;">{chunk}</span>{#if id !== text.split("\n").length - 1}<br>{/if}{/each}