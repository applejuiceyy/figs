<script type="ts">
    import { base } from "$app/paths";

    import type { Class } from "$lib/typings/rewrite_docs"
    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp?url"
    
    import MethodDescribe from "./MethodDescribe.svelte";
    import FieldDescribe from "./FieldDescribe.svelte";
    import Highlight from "$lib/highlighter/Highlight.svelte";
    import Code from "$lib/Code.svelte";
    import DescribeRoot from "../DescribeRoot.svelte";
    import TranslatableKey from "$lib/language/TranslatableKey.svelte";
import type DocsInterface from "$lib/docs/statistics";


    export let klass: Class;

    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let path: string;
    export let classi: DocsInterface;

    export let highlight: string[] = [];
</script>

<div class="joiner">
    <DescribeRoot example={klass.example ?? null} classi={classi} forceSmall={forceSmall} id={klass.name} highlightTitle={highlight.includes("title")} path={path}>
        <svelte:fragment slot="title">
            <StyledItem src={klass_src} href={base + path + klass.name} wrap="h1" color="dark" id={setId ? klass.name : null} style={klass.parent === undefined ? "" : "margin-bottom: 0px;"}>{klass.name}</StyledItem>
            {#if klass.parent !== undefined}
                <p style:padding-bottom="5px" style:margin-top="0" style:margin-bottom="25px">subclasses <Code style="display: inline;"><Highlight path={path} code={klass.parent} hoverHighlight={[{range: [0, klass.parent.length], type: "docs", name: klass.parent}]}></Highlight></Code></p>
            {/if}
        </svelte:fragment>
        
        <div class:highlight={highlight.includes("description")}>
            <TranslatableKey key={klass.description} warn focus/>
        </div>
    </DescribeRoot>

    {#each klass.methods as method}
        <MethodDescribe classi={classi} hostClass={klass} method={method} forceSmall={forceSmall} path={path}></MethodDescribe>
    {/each}

    {#each klass.fields as field}
        <FieldDescribe classi={classi} hostClass={klass} field={field} forceSmall={forceSmall} path={path}></FieldDescribe>
    {/each}
</div>

<style lang="less">
    @import "src/app";

    .highlight {
        .highlig();
    }

    .joiner {
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;

    }

    .joiner::before {
        content: "";
        position: absolute;
        top: 40px;
        left: 30px;
        bottom: 40px;
        width: 50px;

        background-color: #222222;
        
        box-shadow: inset black 0 0 10px 0;
    }
</style>