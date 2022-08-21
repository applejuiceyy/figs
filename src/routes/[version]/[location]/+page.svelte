<script type="ts">
    import { MetaTags } from "svelte-meta-tags";
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";
    import pool from "$lib/language/translator";
    import stats from "$lib/docs/statistics";

    export let data: import("./$types").PageData;
</script>

<MetaTags title="{data.what.value.name}" description="{pool.getPresentableValue(data.what.value.description)}"/>


<DescribeAny classi={new stats(data.docs)} what={data.what} setId={false} path={data.base}/>

