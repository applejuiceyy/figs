<script lang="ts">
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

    let {enum_, forceSmall = false, setId = true, classi, path, titleProperties = [], descriptionProperties = []}: {
        enum_: Enum,
        forceSmall?: boolean,
        setId?: boolean,

        classi: DocsInterface,

        path: string,

        titleProperties?: Property<any>[],
        descriptionProperties?: Property<any>[]
    } = $props();
</script>

<DescribeRoot example={enum_.example} classi={classi} forceSmall={forceSmall} id={enum_.name}>
    {#snippet title()}
        <StyledItem src={klass_src} href={base + path + enum_.name} wrap="h1" color="dark" id={setId ? enum_.name : undefined}>
            <Intertweener text={enum_.name} properties={titleProperties}/>
        </StyledItem>
    {/snippet}


    <div>
        <SlottedTranslatableKey key={enum_.description} warn>
            {#snippet children(value)}
                <Intertweener text={value} properties={[generateChunks(value), ...descriptionProperties]}/>
            {/snippet}
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

    .entry {
        margin-top: 5px;
    }
</style>