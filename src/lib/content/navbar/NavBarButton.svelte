<button on:click|stopPropagation>
    <slot/>
</button>

<style lang="less">
    @import "./constants.less";

    button {
        .nav-item();
    }
</style>