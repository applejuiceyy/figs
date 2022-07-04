<script type="ts">
import { base } from "$app/paths";

    import type { Class } from "$lib/docs/rewrite_docs_typings"
import StyledItem from "../sidebar/StyledItem.svelte";

import klass_src from "$lib/resource/class.webp"
import Background from "./Background.svelte";
import MethodDescribe from "./MethodDescribe.svelte";
import FieldDescribe from "./FieldDescribe.svelte";
    export let klass: Class;

    export let forceSmall: boolean = false;
    export let setId: boolean = true;
</script>

<div style:margin-top="100px"></div>
<Background forceFilled={forceSmall}>
    <StyledItem src={klass_src} href={base + "#" + klass.name} wrap="h1" color="dark" id={setId ? klass.name : null}>{klass.name}</StyledItem>
</Background>

{#each klass.methods as method}
    <MethodDescribe hostClass={klass} method={method} forceSmall={forceSmall}></MethodDescribe>
{/each}

{#each klass.fields as field}
    <FieldDescribe hostClass={klass} field={field} forceSmall={forceSmall}></FieldDescribe>
{/each}