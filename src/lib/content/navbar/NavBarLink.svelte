<script type="ts">
    export let href: string;

    export let inline: boolean = false;
    export let external: boolean = false;
</script>

<a href={href} rel={external ? "external" : ""} class:inline on:click>
    <slot/>
</a>

<style lang="less">
    @import "./constants.less";

    a {
        text-decoration: none;
        text-align: center;
        .nav-item();
    }

    .inline {
        display: inline-block;
        flex-grow: unset;
    }
</style>