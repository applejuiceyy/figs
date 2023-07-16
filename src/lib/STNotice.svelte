<script type="ts">
    import { createEventDispatcher, onMount } from "svelte";

    let eh = createEventDispatcher();
    let modal: HTMLDialogElement | null = null;

    onMount(() => {
        modal?.showModal();
    })
</script>

<dialog class="ST_notice" bind:this={modal}>
    <div class="ST_notice_header">
        <h1>Hey hey! Here's an important notice</h1>
        <p>The previous owner of the Figura mod has gone rogue and deleted everything. You can join the <a style="word-wrap: nowrap;" target="_blank" href="https://discord.gg/nbN8KZyhUq" rel="external">new Discord server</a><br>We will continue to develop the mod as normal.</p>
        <p>In another words, pedophilia is not condoned.</p>

        <button on:click={()=>eh("submit")}>ok</button>
    </div>
</dialog>


<style>
    .ST_notice {
        all: unset;

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: var(--background);
        z-index: 999;

        display: grid;
        grid-template-columns: min(max(400px, 50%), 100%) 1fr;
    }

    .ST_notice_header {
        box-sizing: border-box;

        padding: 40px;
    }

    button {
        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);
        padding: 10px 30px 10px 30px;
        border-radius: 5px;
    }
</style>