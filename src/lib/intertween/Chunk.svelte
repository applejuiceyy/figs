<script type="ts">
    import stores from "$lib/state/stores";
</script>

<span class:enabled={$stores.readerEnabled}><slot/></span>

<style>
    .enabled {
        opacity: 0.3;
        transition: opacity 0.1s;
    }

    .enabled:hover {
        opacity: 1;
    }

    @media (hover: none) {
        .enabled {
            opacity: 1;
        }
    }
</style>