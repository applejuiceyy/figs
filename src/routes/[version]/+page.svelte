<script context="module" type="ts">
    let load: import('./index').Load = async function () {
        return {
            stuff: {
                forceShowTable: true
            },
        };
    }

    export {load}
</script>