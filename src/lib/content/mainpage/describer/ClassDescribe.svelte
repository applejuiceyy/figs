<script type="ts">
    import { base } from "$app/paths";

    import type { Class } from "$lib/docs/rewrite_docs"
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
</script>

<DescribeRoot forceSmall={forceSmall} id={klass.name}>
    <svelte:fragment slot="title">
        <StyledItem src={klass_src} href={base + path + klass.name} wrap="h1" color="dark" id={setId ? klass.name : null} style={klass.parent === undefined ? "" : "margin-bottom: 0px;"}>{klass.name}</StyledItem>
        {#if klass.parent !== undefined}
            <p style:padding-bottom="5px" style:margin-top="0" style:margin-bottom="25px">subclasses <Code style="display: inline;"><Highlight code={klass.parent} hoverHighlight={[{range: [0, klass.parent.length], type: "docs", name: klass.parent}]}></Highlight></Code></p>
        {/if}
    </svelte:fragment>
    
    <TranslatableKey key={klass.description} warn focus/>
</DescribeRoot>

{#each klass.methods as method}
    <MethodDescribe classi={classi} hostClass={klass} method={method} forceSmall={forceSmall} path={path}></MethodDescribe>
{/each}

{#each klass.fields as field}
    <FieldDescribe classi={classi} hostClass={klass} field={field} forceSmall={forceSmall} path={path}></FieldDescribe>
{/each}