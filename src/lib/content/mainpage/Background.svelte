<script type="ts">
    export let forceFilled: boolean = false;
</script>

<div class="partial-background" class:force-filled={forceFilled}>
    <slot/>
</div>

<style>
    .partial-background {
        position: relative;
        isolation: isolate;
    }

    .partial-background::before {
        content: "";
        display: block;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;

        background-color: #cccccc;
        z-index: -1;

        border-radius: 5px;
    }

    @media (prefers-color-scheme: dark) {
        .partial-background::before {
            background-color: #222222;
        }
    }

    @media only screen and (min-width: 1000px) {
        .partial-background:not(.force-filled)::before {
            width: 50%;
        }
    }
</style>