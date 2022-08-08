<script type="ts">
    export let destination: string;

    export function focus() {
        input.focus();
    }

    let input: HTMLInputElement;
</script>

<div class="search-root" style:flex-grow="1">
    <form class="sizer" action={destination} method="get">
        <input bind:this={input} required name="q" style:min-width="0" style:flex-grow="1" style:flex-shrink="1"><input type="submit" value="Search">
    </form>
</div>

<style>
    .sizer {
        width: max(80%, 50px);
        height: 70%;

        display: flex;
        align-items: stretch;
        justify-content: stretch;
    }

    .search-root {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>