<script context="module" type="ts">
    let globalMiningSpeed = 200;
</script>

<script type="ts">
    import hammer from "$lib/resource/hammer.svg";
    import RandomisedPlayer from "./RandomisedPlayer.svelte";

    let breakStages = import.meta.globEager("./resource/breaking/*.png");
    let breakingSounds = import.meta.globEager("./resource/audio_breaking/*.ogg");
    let brokeSounds = import.meta.globEager("./resource/break/*.ogg");

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
</script>

{#key gravityAction}
    <code style:outline={gravityAction !== null && fell ? '1px solid black' : ''} style:margin={gravityAction !== null && fell ? '0' : ''} style:background-image={breaking === -1 ? "" : "url(" + breakStages["./resource/breaking/destroy_stage_" + breaking + ".png"].default + ")"} use:conditionalAction={{action: gravityAction, params: {active: true, shadowElement: true}, condition: gravityAction !== null && fell}}>
        <slot/>

        <button aria-hidden="true" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="hammer-button">
            <svg style:color="white" style:touch-action="none" style:user-select="none" href={hammer} width="16" height="16"/>
        </button>
    </code>
{/key}

<RandomisedPlayer bind:this={breakingAudioPlayer} sounds={Object.values(breakingSounds).map(v => v.default)} loop={digging} loopSize={300} volume={0.5}/>
<RandomisedPlayer bind:this={brokeAudioPlayer} sounds={Object.values(brokeSounds).map(v => v.default)} />

<style>
    code {
        display: block;

        font-family: 'Lucida Console', monospace;
        padding: 5px;
        margin: 5px;

        border-radius: 5px;
        background-color: #eeeeee;

        background-size: 10%;
        background-position: 50% 50%;

        box-sizing: border-box;

        color: black;

        position: relative;

        overflow-x: auto;

        word-wrap: normal;
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

    @media (prefers-color-scheme: dark) {
        code {
            background-color: #111111;
            color: white;
        }
    }
</style>