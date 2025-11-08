<script lang="ts">
    // @ts-ignore: no typings for this one :pensive:
    import {markdown} from "markdown";

    let {name}: {name: string} = $props();
</script>

{@html markdown.toHTML(name)}