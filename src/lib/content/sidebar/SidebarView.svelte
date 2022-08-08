<script type="ts">
    import {base} from "$app/paths";

    import type DocsInterface from "$lib/docs/statistics";
    import StyledItem from "./StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp";
    import method_src from "$lib/resource/method.webp";
    import field_src from "$lib/resource/field.webp";

    import type { Class, Enum, Field, Method } from "$lib/docs/rewrite_docs";

    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";
    import {cubicOut} from "svelte/easing";
    import {flip} from "svelte/animate"
import TranslatableKey from "$lib/language/TranslatableKey.svelte";

    let sortedClasses: Class[];
    let sortedEnums: Enum[];

    let sortedMethods: Method[];
    let sortedFields: Field[];

    export let classi: DocsInterface;

    $: sortedClasses = Object.values(classi.nonSingletonClasses).sort(classi.comparer);
    $: sortedEnums = Object.values(classi.enums).sort(classi.comparer);

    $: sortedMethods = Object.values(classi.globalType.methods).sort(classi.comparer);
    $: sortedFields = Object.values(classi.globalType.fields).sort(classi.comparer);

    let everythingArray: any[];

    $: {
        everythingArray = [
            {type: "disclaimer", value: "global-objects", id: "gl"},
            ...sortedMethods.map(val => ({type: "link", value: val.name, link: base + path + val.name, src: method_src, id: val.name})),
            ...sortedFields.map(val => ({type: "link", value: val.name, link: base + path + val.name, src: field_src, id: val.name})),
            {type: "disclaimer", value: "misc-types", id: "types"},
            ...sortedClasses.map(val => ({type: "link", value: val.name, link: base + path + val.name, src: klass_src, id: val.name})),
            {type: "disclaimer", value: "misc-enums", id: "enums"},
            ...sortedEnums.map(val => ({type: "link", value: val.name, link: base + path + val.name, src: klass_src, id: val.name}))
        ]
    }

    export let path: string;
    export let everything: boolean;
    export let everythingSwitch: string;

    let dispatcher = createEventDispatcher();

    const transitionDuration = 1000;
</script>

<div class="sidebar-viewer">
    <div class="fields-container">
        <StyledItem on:click={() => dispatcher("select")} href="{base}{everythingSwitch}" src={klass_src}>Show{everything ? " not" : ""} everything</StyledItem>
    </div>

    {#each everythingArray as what (what.id)}
        <div in:fly|local={{x: 200, duration: transitionDuration, easing: cubicOut }} out:fly|local={{x: -200, duration: transitionDuration, easing: cubicOut }} animate:flip={{duration: transitionDuration, easing: cubicOut}}>
            {#if what.type === "disclaimer"}
                <span class="tab">
                    <TranslatableKey key={what.value}/>
                </span>
            {:else if what.type === "link"}
                <StyledItem on:click={() => dispatcher("select")} href={what.link} src={what.src}>{what.value}</StyledItem>
            {/if}
        </div>
    {/each}
</div>

<style>
    .fields-container {
        padding: 5px;
    }

    .sidebar-viewer {
        color: black;
        overflow-x: clip;
    }

    .tab {
        background-color: #cccccc;
        padding: 5px;
        display: block;

        text-align: center;

        font-weight: 800;
    }

    @media (prefers-color-scheme: dark) {
        .tab {
            background-color: #999999;
        }
    }
</style>