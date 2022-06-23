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
                loadGravity();
            }
            else {
                breaking += 1;

                breakTimeout = setTimeout(z, 1000);
            }
        }
        breakingAudioPlayer.play();
        digging = true;
        breakTimeout = setTimeout(z, 1000);
    }

    function handleMouseUp() {
        breaking = -1;
        digging = false;
        breakTimeout && clearTimeout(breakTimeout);
    }
</script>

{#key gravityAction}
    <span style:background-image={breaking === -1 ? "" : "url(" + breakStages["./resource/breaking/destroy_stage_" + breaking + ".png"].default + ")"} use:conditionalAction={{action: gravityAction, params: {active: true, shadowElement: true}, condition: gravityAction !== null && fell}}>
        <slot/>

        <button aria-hidden="true" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="hammer-button">
            <img draggable="false" src={hammer} alt="hammer"/>
        </button>
    </span>
{/key}

<RandomisedPlayer bind:this={breakingAudioPlayer} sounds={Object.values(breakingSounds).map(v => v.default)} loop={digging} loopSize={300} volume={0.5}/>
<RandomisedPlayer bind:this={brokeAudioPlayer} sounds={Object.values(brokeSounds).map(v => v.default)} />

<style>
    span {
        display: block;

        font-family: 'Lucida Console', monospace;
        padding: 5px;
        margin: 5px;

        border-radius: 5px;
        background-color: darkgray;

        background-size: 10%;
        background-position: 50% 50%;

        color: black;
    }

    .hammer-button {
        opacity: 0;
        background-color: transparent;
        border: 0;
        transition: opacity 0.5s 2s;
    }

    .hammer-button:hover {
        opacity: 0.5;
    }
</style>