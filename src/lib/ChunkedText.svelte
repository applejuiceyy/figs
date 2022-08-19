<script type="ts">
    import stores from "$lib/state/stores";
    
    export let value: string;

    let processed: string[] = [];
    $: {
        let characters = [",", ". "];
        processed = [];

        let pos = 0;
        while (true) {
            let found = -1;
            let len = 0;

            for (let c = 0; c < characters.length; c++) {
                let candidate = value.indexOf(characters[c], pos + 50);

                if (candidate !== -1 && (candidate < found || found === -1)) {
                    found = candidate;
                    len = characters[c].length;
                }
            }

            if (found === -1) {
                processed.push(value.substring(pos));
                break;
            }
            else {
                processed.push(value.substring(pos, found + len));
                pos = found + len;
            }
        }
    }
</script>

{#each processed as chunk}
    <span class:enabled={$stores.readerEnabled}>{chunk}</span>
{/each}

<style>
    .enabled {
        opacity: 0.3;
        transition: opacity 0.1s;
    }

    .enabled:hover {
        opacity: 1;
    }

    @media (hover: none) {
        .enabled {
            opacity: 1;
        }
    }
</style>