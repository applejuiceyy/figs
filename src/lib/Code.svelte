<script context="module" type="ts">
    let globalMiningSpeed = 200;
</script>

<script type="ts">
    import hammer from "$lib/resource/hammer.svg";
    import RandomisedPlayer from "./RandomisedPlayer.svelte";

    let breakStages = import.meta.glob("./resource/breaking/*.png", {eager: true, import: "default"}) as {[item: string]: string};
    let breakingSounds = import.meta.glob("./resource/audio_breaking/*.ogg", {eager: true, import: "default"}) as {[item: string]: string};
    let brokeSounds = import.meta.glob("./resource/break/*.ogg", {eager: true, import: "default"}) as {[item: string]: string};

    let gravityAction: (typeof import("./actions/gravity"))["gravity"] | null = null;
    let fell = false;

    let breakingAudioPlayer: RandomisedPlayer;
    let brokeAudioPlayer: RandomisedPlayer;

    function conditionalAction(node: HTMLElement, { action, params, condition }: { action: any, params: any, condition: boolean }) {
        if (condition) {
            let v = action(node, params);
            return {update: (z: any) => v.update(z.params), destroy: v.destroy};
        }
    }

    async function loadGravity() {
        gravityAction ?? (gravityAction = (await import("./actions/gravity")).gravity);
    }

    let breaking = -1;
    let digging = false;
    let breakTimeout: ReturnType<typeof setTimeout> | null = null;

    function handleMouseDown() {
        if (fell) {
            return;
        }

        let z = () => {
            if (breaking === 9) {
                breaking = -1;
                fell = true;
                digging = false;
                brokeAudioPlayer.play();
                globalMiningSpeed -= 10;
                globalMiningSpeed = Math.max(globalMiningSpeed, 10);
                loadGravity();
            }
            else {
                breaking += 1;

                breakTimeout = setTimeout(z, globalMiningSpeed);
            }
        }
        digging = true;
        breakingAudioPlayer.play();
        breakTimeout = setTimeout(z, globalMiningSpeed);
    }

    function handleMouseUp() {
        breaking = -1;
        digging = false;
        breakTimeout && clearTimeout(breakTimeout);
    }

    export let style = "";
    export let showAddendum = false;
    export let inline = false;
</script>

{#key gravityAction}
    <div style:display={inline ? "contents" : ""}>
        {#if $$slots.title}
            <div class="code-title">
                <slot name="title"/>
            </div>
        {/if}

        <code class:inline-code={inline} style={style} style:outline={gravityAction !== null && fell ? '1px solid black' : ''} style:margin={gravityAction !== null && fell ? '0' : ''} style:background-image={breaking === -1 ? "" : "url(" + breakStages["./resource/breaking/destroy_stage_" + breaking + ".png"] + ")"} use:conditionalAction={{action: gravityAction, params: {active: true, shadowElement: true}, condition: gravityAction !== null && fell}}>
            <slot/><button tabindex="-1" aria-hidden="true" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="hammer-button">
                <svg style:color="white" style:touch-action="none" style:user-select="none" href={hammer} width="16" height="16"/>
            </button>
        </code>

        {#if showAddendum}
            <div class="code-addendum">
                <slot name="addendum"/>
            </div>
        {/if}
    </div>
{/key}

<RandomisedPlayer bind:this={breakingAudioPlayer} sounds={Object.values(breakingSounds)} loop={digging} loopSize={300} volume={0.5}/>
<RandomisedPlayer bind:this={brokeAudioPlayer} sounds={Object.values(brokeSounds)} />

<style>
    code {
        display: block;

        font-family: 'Lucida Console', monospace;
        padding: 5px;

        border-radius: 5px;
        background-color: #eeeeee;

        background-size: 50px;
        background-position: 50% 50%;

        box-sizing: border-box;

        color: black;

        position: relative;

        overflow-x: auto;

        word-wrap: normal;

        image-rendering: crisp-edges;
        background-blend-mode: screen;
    }

    .inline-code {
        display: inline;
    }

    .hammer-button {
        opacity: 0;
        background-color: transparent;
        border: 0;
        transition: opacity 0.5s;

        position: absolute;
        top: 0;
        right: 0;
    }

    .hammer-button:hover {
        opacity: 1;
    }

    .code-title {
        width: max-content;
        padding: 5px;
        margin-left: 5px;

        background-color: #eeeeee;
        color: var(--color);

        border-radius: 5px 5px 0 0;

        user-select: none;
    }

    .code-addendum {
        margin-left: 50px;
        position: relative;

        padding-top: 20px;
        padding-bottom: 20px;
    }

    .code-addendum::before {
        content: "";
        display: block;
        position: absolute;

        left: -20px;
        top: 0;
        bottom: 0;
        width: 10px;

        background-color: #eeeeee;

        border-radius: 0 0 5px 5px;
    }

    @media (prefers-color-scheme: dark) {
        code {
            background-color: #111111;
            color: white;
        }

        .code-title {
            background-color: #111111;
        }

        .code-addendum::before {
            background-color: #111111;
        }
    }

    @media (pointer: coarse) {
        code:not(.inline-code) {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }
</style>