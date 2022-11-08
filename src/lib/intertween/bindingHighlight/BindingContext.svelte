<script>
    import { setContext } from "svelte";
    import { writable } from "svelte/store";


    setContext("__binding", writable([]))
</script>

<slot/>