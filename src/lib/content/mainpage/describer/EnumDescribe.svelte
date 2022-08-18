<script type="ts">
    import { base } from "$app/paths";
    import Code from "$lib/Code.svelte";

    import type { Enum } from "$lib/typings/rewrite_docs";
    import TranslatableKey from "$lib/language/TranslatableKey.svelte";

    import klass_src from "$lib/resource/class.webp?url";
    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";
    
    import DescribeRoot from "../DescribeRoot.svelte";
import type DocsInterface from "$lib/docs/statistics";

    export let enum_: Enum;
    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let classi: DocsInterface;

    export let path: string;

    export let highlight: string[] = [];
</script>

<DescribeRoot classi={classi} forceSmall={forceSmall} id={enum_.name} highlightTitle={highlight.includes("title")} path={path}>
    <StyledItem slot="title" src={klass_src} href={base + path + enum_.name} wrap="h1" color="dark" id={setId ? enum_.name : null}>{enum_.name}</StyledItem>

    <div class:highlight={highlight.includes("description")}>
        <TranslatableKey key={enum_.description} warn focus/>
    </div>

    <div class="entry-list">
        {#each enum_.entries as entry}
            <div class="entry">
                <Code>{entry}</Code>
            </div>
        {/each}
    </div>
</DescribeRoot>

<style lang="less">
    .entry-list {
        margin-left: 10px;
        display: grid;
    }

    @import "src/app";

    .highlight {
        .highlig();
    }
</style>