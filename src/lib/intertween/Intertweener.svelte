<script context="module" type="ts">
    export interface Range {
        start: number,
        stop: number,
        props: object
    }

    export interface Property {
        component: ConstructorOfATypedSvelteComponent
        ranges: Range[]
    }
</script>

<script type="ts">
    export let text: string;
    export let properties: Property[];
    export let window: [number, number] | null = null;
    let actualWindow: [number, number];
    $: {
        if (window === null) {
            actualWindow = [0, text.length]
        } else {
            actualWindow = window;
        }
    }


    let thisProperty: Property | null;
    let thisRanges: Range[];

    let passingProperties: Property[];
    $: {
        thisProperty = (passingProperties = [...properties]).shift() ?? null;
        thisRanges = [];
        if (thisProperty !== null) {
            let lastKnown = 0;
            for (let i = 0; i < thisProperty.ranges.length; i++) {
                let range = thisProperty.ranges[i];

                if (lastKnown > range.start) {
                    console.log(thisProperty);
                    throw new Error("Ranges must not intersect");
                }

                lastKnown = range.stop;

                if ((actualWindow[0] < range.stop) && (actualWindow[1] > range.start)) {
                    thisRanges.push({
                        start: Math.max(actualWindow[0], range.start),
                        stop: Math.min(actualWindow[1], range.stop),
                        props: range.props
                    })
                }
            }
        }
    }
</script>

{#if thisProperty === null}{text.substring(actualWindow[0], actualWindow[1])}{:else if thisRanges.length === 0}<svelte:self text={text} properties={passingProperties} window={[actualWindow[0], actualWindow[1]]}/>{:else}<svelte:self text={text} properties={passingProperties} window={[actualWindow[0], thisRanges[0].start]}/>{#each thisRanges as range, id (id)}{@const frontTextEnd = id === thisRanges.length - 1 ? actualWindow[1] : thisRanges[id + 1].start}<svelte:component this={thisProperty.component} {...range.props}><svelte:self text={text} properties={passingProperties} window={[range.start, range.stop]}/></svelte:component><svelte:self text={text} properties={passingProperties} window={[range.stop, frontTextEnd]}/>{/each}{/if}