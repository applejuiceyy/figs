<script>
import { base } from "$app/paths";
import TranslatableKey from "$lib/language/TranslatableKey.svelte";

    import versions from "docs:all";
    import latest from "docs:latest";
</script>

<div class="version-picker">
    <div class="version-picker-content">
        <div class="version-picker-title">
            <TranslatableKey key="pick-a-version"/>
        </div>
        <div class="version-picker-list">
            <a href="{base}/latest">latest ({latest})</a>
            {#each Object.keys(versions) as version}
                <a href="{base}/{version}">{version}</a>
            {/each}
        </div>
    </div>
</div>

<style>
    .version-picker {
        position: absolute;
        inset: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
    }

    .version-picker-content {
        height: min(70vh, 70vw);
        width: min(70vh, 70vw);

        background-color: var(--window-background);

        border-radius: 5px;

        display: flex;

        flex-direction: column;

        align-items: stretch;
        justify-content: center;
    }

    .version-picker-list {
        display: flex;

        flex-direction: column;

        align-items: stretch;
        justify-content: center;

        flex-grow: 1;

        overflow-y: auto;
    }

    .version-picker-title {
        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);

        padding: 15px;
        size: 2em;

        text-align: center;

        clip-path: polygon(0 0, 100% 0, 100% 100%, 64% 86%, 28% 100%, 0 90%);

        font-weight: bold;
    }

    a {
        display: block;
        text-decoration: none;
        padding: 5px;
        text-align: center;

        color: var(--color)
    }
</style>