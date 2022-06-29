<script type="ts">
import Code from "$lib/Code.svelte";

    import type {Parameter} from "$lib/docs/rewrite_docs";
    import ParametersDocs from "./ParametersDocs.svelte";

    export let name: string;
    export let container: string;
    export let parameters: Parameter[];
    export let returns: string;

    let showingParameters: Parameter[];
    let isOOP: boolean;
    $: {
        if(parameters.length > 0 && parameters[0].type === container) {
            isOOP = true;
            showingParameters = [...parameters];
            showingParameters.shift();
        }
        else {
            isOOP = false;
            showingParameters = parameters;
        }
    }
</script>

<Code>
    {#if container !== "globals"}
        {container}{isOOP?":":"."}{/if}{name}(<ParametersDocs params={showingParameters}/>): <span style="color: #0000bb">{returns}</span>
</Code>