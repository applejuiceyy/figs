<script type="ts">
    import type { HintContent } from "$lib/docs/examples_typings";
    import Hint from "./Hint.svelte";


    export let hints: HintContent[];
    export let path: string;
</script>

{#if hints.length === 0}<slot/>{:else}<Hint path={path} travel={hints[0].travel} type={hints[0].type} name={hints[0].name}><svelte:self hints={hints.filter((v, i) => i > 0)}><slot/></svelte:self></Hint>{/if}

