<script type="ts">
    import pool from "./translator";

    export let key: string;

    let store: ReturnType<typeof pool["createStore"]>;

    $: store = pool.createStore(key);
</script>


<slot value={$store}/>
