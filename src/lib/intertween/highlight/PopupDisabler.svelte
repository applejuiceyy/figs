<script type="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";


    export let enabled: boolean;

    let store = writable(enabled);
    $: $store = enabled;

    setContext("highlight-popup", store);
</script>

<slot/>