<script type="ts">
import type { HintContent } from "$lib/docs/examples_typings";
import Hint from "./Hint.svelte";


    export let hints: HintContent[];
</script>

{#if hints.length === 0}<slot/>{:else}<Hint type={hints[0].type} name={hints[0].name}><svelte:self hints={hints.filter((v, i) => i > 0)}><slot/></svelte:self></Hint>{/if}

