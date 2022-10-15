<script type="ts">
    import { base } from "$app/paths";
    import Code from "$lib/Code.svelte";

    import type { Enum } from "$lib/typings/rewrite_docs";

    import klass_src from "$lib/resource/class.webp?url";
    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";
    
    import DescribeRoot from "../DescribeRoot.svelte";
    import type DocsInterface from "$lib/docs/statistics";

    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import Intertweener, { type Property } from "$lib/intertween/Intertweener.svelte";
    import { generateChunks } from "$lib/intertween/chunker";

    export let enum_: Enum;
    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let classi: DocsInterface;

    export let path: string;

    export let titleProperties: Property[] = [];
    export let descriptionProperties: Property[] = [];
</script>

<DescribeRoot example={enum_.example ?? null} classi={classi} forceSmall={forceSmall} id={enum_.name}>
    <StyledItem slot="title" src={klass_src} href={base + path + enum_.name} wrap="h1" color="dark" id={setId ? enum_.name : null}>
        <Intertweener text={enum_.name} properties={titleProperties}/>
    </StyledItem>

    <div>
        <SlottedTranslatableKey key={enum_.description} warn let:value={value}>
            <Intertweener text={value} properties={[generateChunks(value), ...descriptionProperties]}/>
        </SlottedTranslatableKey>
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
</style>