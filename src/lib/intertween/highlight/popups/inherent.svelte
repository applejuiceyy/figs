<script type="ts">
    // @ts-ignore: no typings for this one :pensive:
    import {markdown} from "markdown";

    export let name: string;
</script>

{@html markdown.toHTML(name)}