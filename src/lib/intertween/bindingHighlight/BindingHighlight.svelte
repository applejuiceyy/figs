<script type="ts">
    import { getContext } from "svelte";
    import { writable, type Writable } from "svelte/store";


    export let id: number;

    let binding: Writable<number[]> = getContext("__binding") ?? writable([]);
</script>

<span class:highlighted={$binding.includes(id)}
on:mouseenter={() => {$binding = [...$binding, id]}}
on:mouseleave={() => {$binding = $binding.filter(v => v !== id)}}><slot/></span>

<style>
    span.highlighted {
        background-color: rgb(95, 0, 142);
        color: white;
    }
</style>