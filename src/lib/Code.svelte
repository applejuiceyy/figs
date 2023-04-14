<script context="module" type="ts">
    let globalMiningSpeed = 200;
</script>

<script type="ts">
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
    <div style:display={inline ? "contents" : ""}>{#if $$slots.title}<div class="code-title"><slot name="title"/></div>{/if}<div class="code-wrapper" class:inline-code={inline} style:width={inline ? "fit-content" : ""}
            ><code class:inline-code={inline} style={style} style:outline={gravityAction !== null && fell ? '1px solid black' : ''} style:margin={gravityAction !== null && fell ? '0' : ''} style:background-image={breaking === -1 ? "" : "url(" + breakStages["./resource/breaking/destroy_stage_" + breaking + ".png"] + ")"} use:conditionalAction={{action: gravityAction, params: {active: true, shadowElement: true}, condition: gravityAction !== null && fell}}
                ><slot/>
            </code>
            {#if !import.meta.env.SSR}
            <button tabindex="-1" aria-hidden="true" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="hammer-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                </svg>
            </button>
            {/if}
        </div>

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

    .code-wrapper {
        position: relative;
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
        left: 100%;

        background-color: #ffffff55;
        border-radius: 5px;
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