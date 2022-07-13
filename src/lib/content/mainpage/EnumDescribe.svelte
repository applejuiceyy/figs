<script type="ts">
    import { base } from "$app/paths";
import ChunkedText from "$lib/ChunkedText.svelte";
import Code from "$lib/Code.svelte";

    import type { Enum } from "$lib/docs/rewrite_docs_typings";

    import klass_src from "$lib/resource/class.webp";
    import StyledItem from "../sidebar/StyledItem.svelte";
    import Background from "./Background.svelte";
import DescribeRoot from "./DescribeRoot.svelte";

    export let enum_: Enum;
    export let forceSmall: boolean = false;
    export let setId: boolean = true;
</script>

<Background forceFilled={forceSmall}>
    <DescribeRoot forceSmall={forceSmall}>
        <StyledItem src={klass_src} href={base + "#" + enum_.name} wrap="h1" color="dark" id={setId ? enum_.name : null}>{enum_.name}</StyledItem>
        
        <div></div>

        <div style:margin="5px">
            <ChunkedText value={enum_.description}/>

            <div class="entry-list">
                {#each enum_.entries as entry}
                    <div class="entry">
                        <Code>{entry}</Code>
                    </div>
                {/each}
            </div>
        </div>
    </DescribeRoot>
</Background>

<style>
    .entry-list {
        margin-left: 10px;
        display: grid;
    }
</style>