<script type="ts">
    import {base} from "$app/paths";

    import * as processed from "$lib/docs/processor/processed";
    import ClassViewer from "./ClassViewer.svelte";
    import StyledItem from "./StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp"
</script>

<div class="sidebar-viewer">
    <span class="tab">Global Objects</span>

    <div class="fields-container">
        <ClassViewer klass={processed.globalType}/>
    </div>

    <span class="tab">Miscellaneous Types</span>

    <div class="fields-container">
        {#each Object.entries(processed.relevantTypes) as [name, value]}
            <StyledItem href={base + "#" + value.name} src={klass_src}>{name}</StyledItem>
        {/each}
    </div>
</div>

<style>
    .fields-container {
        padding: 5px;
        background-color: #eeeeee;
    }

    .sidebar-viewer {
        color: black;
    }

    .tab {
        background-color: #cccccc;
        padding: 5px;
        display: block;

        text-align: center;

        font-weight: 800;
    }

    @media (prefers-color-scheme: dark) {
        .fields-container {
            padding: 5px;
            background-color: #222222;
        }

        .tab {
            background-color: #999999;
        }
    }
</style>