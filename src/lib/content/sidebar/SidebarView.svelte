<script lang="ts">
    import {base} from "$app/paths";

    import type DocsInterface from "$lib/docs/statistics";
    import StyledItem from "./StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp";
    import method_src from "$lib/resource/method.webp";
    import field_src from "$lib/resource/field.webp";

    import type { Class } from "$lib/typings/rewrite_docs";

    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import SidebarCategory from "./SidebarCategory.svelte";

    let {classi, path, everything, everythingSwitch, onselect}: {
        classi: DocsInterface,
        path: string;
        everything: boolean;
        everythingSwitch: string;
        onselect?: () => void
    } = $props();


    let [sortedEnums, sortedMethods, sortedFields, groupedClasses] = $derived.by(() => {
        let sortedEnums = Object.values(classi.enums).sort(classi.comparer);

        let sortedMethods = Object.values(classi.globalType.methods).sort(classi.comparer);
        let sortedFields = Object.values(classi.globalType.fields).sort(classi.comparer);

        let groupedClasses: [string, Class[]][] = [];

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

        groupedClasses.forEach((v) => v[1] = v[1].sort(classi.comparer));

        return [sortedEnums, sortedMethods, sortedFields, groupedClasses];
    });
</script>

<div class="sidebar-viewer">
    <div class="fields-container">
        <StyledItem onclick={onselect} href="{base}{everythingSwitch}" src={klass_src}>
            <SlottedTranslatableKey key="show-{everything ? "not-" : ""}everything">
                {#snippet children(value)}
                    {value}
                {/snippet}
            </SlottedTranslatableKey>
        </StyledItem>
    </div>

    <article>
        <h1 class="tab">
            <SlottedTranslatableKey key="global-objects">
                {#snippet children(value)}
                    {value}
                {/snippet}
            </SlottedTranslatableKey>
        </h1>

        {#each sortedMethods as method}
            <StyledItem onclick={onselect} href="{base}{path}{method.name}" src={method_src}>{method.name}</StyledItem>
        {/each}
        {#each sortedFields as field}
            <StyledItem onclick={onselect} href="{base}{path}{field.name}" src={field_src}>{field.name}</StyledItem>
        {/each}
    </article>

    <article>
        <h1 class="tab">
            <SlottedTranslatableKey key="misc-types">
                {#snippet children(value)}
                    {value}
                {/snippet}
            </SlottedTranslatableKey>
        </h1>
        {#each groupedClasses as [name, clss]}
            <SidebarCategory onclick={onselect} name={name} clss={clss} path={path}/>
        {/each}
    </article>

    <article>
        <h1 class="tab">
            <SlottedTranslatableKey key="misc-enums">
                {#snippet children(value)}
                    {value}
                {/snippet}
            </SlottedTranslatableKey>
        </h1>
        {#each sortedEnums as en}
            <StyledItem onclick={onselect} href="{base}{path}{en.name}" src={klass_src}>{en.name}</StyledItem>
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