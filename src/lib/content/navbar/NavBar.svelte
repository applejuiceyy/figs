<script type="ts">
    import { writable } from "svelte/store";

    import { setContext } from "svelte";

    let expanded = false;

    let state = setContext("navbar", writable({expanded: false}))
</script>

<nav class:expanded>
    <div class="desizer">
        <div class="nav-stick">
            <slot/>
        </div>

        <div class="nav-expanded" class:expanded={$state.expanded}>
            <slot name="expanded"/>
        </div>
    </div>
</nav>

<style lang="less">
    @import "./constants.less";
    @import "src/app.less";

    nav {
        display: flex;

        justify-content: center;

        z-index: 1;

        background-image: linear-gradient(#333333, #222222);

        color: white;

        word-break:break-all;

        font-size: 0.9em;
    }

    .desizer {
        display: flex;

        flex-direction: row;

        width: min(@extended-width, 100%);
    }

    .nav-stick {
        .inline-flex();

        flex-grow: 1;
    }

    @media only screen and (max-width: @collapse-width) {
        .nav-expanded {
            display: none;
        }

        .nav-expanded.expanded {
            .itemised-flex();
        }

        .desizer {
            .itemised-flex();
        }
    }

    @media only screen and (min-width: (@collapse-width + 0.5px)) {
        .nav-expanded {
            display: block;

            .inline-flex();
        }

        .nav-expanded {
            margin-left: auto;
        }
    }
</style>
