<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import { writable, type Writable } from "svelte/store";


    let {id, children}: {id: number, children: Snippet} = $props();

    let binding: Writable<number[]> = getContext("__binding") ?? writable([]);
</script>

<span class:highlighted={$binding.includes(id)}
onmouseenter={() => {$binding = [...$binding, id]}}
onmouseleave={() => {$binding = $binding.filter(v => v !== id)}} role="none">{@render children()}</span>

<style>
    span.highlighted {
        background-color: rgb(95, 0, 142);
        color: white;
        outline: black solid 1px;
    }

    @media (prefers-color-scheme: dark) {
        span.highlighted {
            outline: white solid 1px;
        }
    }
</style>