<script type="ts">
    import {base} from "$app/paths";

    import type DocsInterface from "$lib/docs/statistics";
    import StyledItem from "./StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp";
    import method_src from "$lib/resource/method.webp";
    import field_src from "$lib/resource/field.webp";

    import type { Class, Enum, Field, Method } from "$lib/docs/rewrite_docs";

    import { createEventDispatcher } from "svelte";
    import TranslatableKey from "$lib/language/TranslatableKey.svelte";
import SidebarCategory from "./SidebarCategory.svelte";
    export let classi: DocsInterface;

    let sortedEnums: Enum[];

    let sortedMethods: Method[];
    let sortedFields: Field[];

    let groupedClasses: [string, Class[]][] = [];

    $: {
        sortedEnums = Object.values(classi.enums).sort(classi.comparer);

        sortedMethods = Object.values(classi.globalType.methods).sort(classi.comparer);
        sortedFields = Object.values(classi.globalType.fields).sort(classi.comparer);

        groupedClasses = [];

        Object.values(classi.nonSingletonClasses).forEach(cls => {
            const category = cls.category ?? "Miscelanous";

            let catObject = groupedClasses.find(v => v[0] === category);

            if (catObject === undefined) {
                groupedClasses.push([category, [cls]])
            }
            else{
                catObject[1].push(cls);
            }
        });

        groupedClasses.forEach((v) => v[1] = v[1].sort(classi.comparer))
    }

    export let path: string;
    export let everything: boolean;
    export let everythingSwitch: string;

    let dispatcher = createEventDispatcher();
</script>

<div class="sidebar-viewer">
    <div class="fields-container">
        <StyledItem on:click={() => dispatcher("select")} href="{base}{everythingSwitch}" src={klass_src}><TranslatableKey key="show-{everything ? "not-" : ""}everything"/></StyledItem>
    </div>

    <article>
        <h1 class="tab">
            <TranslatableKey key="global-objects"/>
        </h1>

        {#each sortedMethods as method}
            <StyledItem on:click={() => dispatcher("select")} href="{base}{path}{method.name}" src={method_src}>{method.name}</StyledItem>
        {/each}
        {#each sortedFields as field}
            <StyledItem on:click={() => dispatcher("select")} href="{base}{path}{field.name}" src={field_src}>{field.name}</StyledItem>
        {/each}
    </article>

    <article>
        <h1 class="tab">
            <TranslatableKey key="misc-types"/>
        </h1>
        {#each groupedClasses as [name, clss]}
            <SidebarCategory name={name} clss={clss} path={path}/>
        {/each}
    </article>

    <article>
        <h1 class="tab">
            <TranslatableKey key="misc-enums"/>
        </h1>
        {#each sortedEnums as en}
            <StyledItem on:click={() => dispatcher("select")} href="{base}{path}{en.name}" src={klass_src}>{en.name}</StyledItem>
        {/each}
    </article>
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
        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);

        padding: 5px;
        display: block;

        text-align: center;

        margin: 0;
    }

</style>