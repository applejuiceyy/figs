<script type="ts">
    export let button: HTMLButtonElement | null = null;
</script>

<button on:click|stopPropagation bind:this={button}>
    <slot/>
</button>

<style lang="less">
    @import "./constants.less";

    button {
        .nav-item();
        position: relative;
    }
</style>