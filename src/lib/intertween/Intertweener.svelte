<script lang="ts" module>
    export interface Range<Props> {
        start: number,
        stop: number,
        props: Props
    }

    export interface Property<Props> {
        component: Component<{children: Snippet} & Props>
        ranges: Range<Props>[]
    }
</script>

<script lang="ts">
    import WordBreaker from "./WordBreaker.svelte";
    import Intertweener from "./Intertweener.svelte";
    import type { Component, Snippet } from "svelte";

    let {text, properties, window = null}: {
        text: string,
        properties: Property<any>[],
        window?: [number, number] | null
    } = $props();
    let actualWindow: [number, number] = $derived.by(() => {
        if (window === null) {
            return [0, text.length]
        } else {
            return window;
        }
    });

    let [thisProperty, thisRanges, passingProperties] = $derived.by(() => {
        let passingProperties: Property<any>[];
        let property = (passingProperties = [...properties]).shift() ?? null;
        let ranges: Range<any>[] = [];
        if (property !== null) {
            let lastKnown = 0;
            for (let i = 0; i < property.ranges.length; i++) {
                let range = property.ranges[i];

                if (lastKnown > range.start) {
                    console.log(text);
                    console.log(property);
                    throw new Error("Ranges must not intersect");
                }

                lastKnown = range.stop;

                if ((actualWindow[0] < range.stop) && (actualWindow[1] > range.start)) {
                    ranges.push({
                        start: Math.max(actualWindow[0], range.start),
                        stop: Math.min(actualWindow[1], range.stop),
                        props: range.props
                    })
                }
            }
        }

        return [property, ranges, passingProperties];
    });
</script>

{#if thisProperty === null}{#if text.substring(actualWindow[0], actualWindow[1]).length > 0}<WordBreaker text={text.substring(actualWindow[0], actualWindow[1])}/>{/if}{:else if thisRanges.length === 0}<Intertweener text={text} properties={passingProperties} window={[actualWindow[0], actualWindow[1]]}/>{:else}<Intertweener text={text} properties={passingProperties} window={[actualWindow[0], thisRanges[0].start]}/>{#each thisRanges as range, id (id)}{@const frontTextEnd = id === thisRanges.length - 1 ? actualWindow[1] : thisRanges[id + 1].start}<thisProperty.component this={thisProperty.component} {...range.props}><Intertweener text={text} properties={passingProperties} window={[range.start, range.stop]}/></thisProperty.component><Intertweener text={text} properties={passingProperties} window={[range.stop, frontTextEnd]}/>{/each}{/if}