<script type="ts">
    import stores from "$lib/state/stores";
    
    export let value: string;

    let processed: string[] = [""];
    $: {
        let characters = [",", ". "];
        processed = [value];

        for (let i = 0; i < characters.length; i++) {
            let finding = characters[i];
            let next = [];

            for (let p = 0; p < processed.length; p++) {
                let text = processed[p];
                let pos = 0;

                while (true) {
                    let found = text.indexOf(finding, pos);

                    if (found === -1) {
                        next.push(text.substring(pos));
                        break;
                    }
                    else {
                        next.push(text.substring(pos, found + finding.length));
                        pos = found + finding.length;
                    }
                }
            }

            processed = next;
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