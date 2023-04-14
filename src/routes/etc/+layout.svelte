<div class="center-root">
    <div class="center-child">
        <slot/>
    </div>
</div>

<style>
    .center-root {
        display: flex;
        justify-content: center;
    }
    .center-child {
        max-width: 1200px;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>