<script type="ts">
    import { base } from "$app/paths";
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import state from "$lib/state/stores";
    import landmark from "$lib/state/landmark";

    import versions from "docs:all";
    import latest from "docs:latest";
    import { onDestroy } from "svelte";

    let overrideShowPrompt = false;
    let skillPromptElement: null | HTMLDivElement = null;
    let preferencesIndicator: null | HTMLDivElement = null;

    let scaleFactor: [number, number] = [0, 0];

    function isVisible(e: HTMLElement) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }

    function handleSubmit(ev: SubmitEvent) {
        let data = new FormData(ev.target as HTMLFormElement);
        let v = data.get("skill");
        
        $state.skilled = v == "experienced";
        $state.hasAnsweredSkillCheck = true;
        overrideShowPrompt = true;

        if (skillPromptElement !== null) {
            let rect = skillPromptElement.getBoundingClientRect();

            skillPromptElement.style.transform = "translate(" + rect.left + "px, " + rect.top + "px)";
            skillPromptElement.style.position = "fixed";
            skillPromptElement.style.top = "0px";
            skillPromptElement.style.left = "0px";
            skillPromptElement.style.margin = "0";
            skillPromptElement.style.transformOrigin = "0 0";
            skillPromptElement.style.pointerEvents = "none";
            skillPromptElement.style.zIndex = "999999";

            document.body.append(skillPromptElement);

            requestAnimationFrame(() => {
                let preferencesButton = isVisible($landmark.preferencesButton) ? $landmark.preferencesButton : $landmark.contentButton;
                if (skillPromptElement !== null) {
                    if (preferencesButton === undefined) {
                        overrideShowPrompt = false;
                    }

                    skillPromptElement.style.transition = "transform 1s";
                    let rect = preferencesButton.getBoundingClientRect();
                    let elrect = skillPromptElement.getBoundingClientRect();

                    scaleFactor = [(1 / elrect.width * rect.width), (1 / elrect.height * rect.height)];
                    skillPromptElement.style.transform = "translate(" + rect.left + "px, " + (rect.bottom + 10) + "px) scale(" + (1 / elrect.width * rect.width) + ", " + (1 / elrect.height * rect.height) + ")";
                    
                    if (preferencesIndicator !== null) {
                        document.body.append(preferencesIndicator);
                    }

                    setTimeout(() => {
                        if (preferencesIndicator !== null && skillPromptElement !== null) {
                            let rect = skillPromptElement.getBoundingClientRect();
                            let self = preferencesIndicator.getBoundingClientRect();
                            preferencesIndicator.style.pointerEvents = "initial";
                            preferencesIndicator.style.visibility = "initial";
                            preferencesIndicator.style.transform = "translate(" + (rect.left - self.width - 10) + "px, " + (rect.top + rect.height / 2 - self.height / 2) + "px)";
                            preferencesIndicator.style.zIndex = "999999";
                            preferencesIndicator.style.opacity = "1";
                        }
                    }, 1500)
                }
            })
        }
    }

    function dismissPrompt() {
        let preferencesButton = isVisible($landmark.preferencesButton) ? $landmark.preferencesButton : $landmark.contentButton;
        if (skillPromptElement !== null && preferencesButton !== undefined && preferencesIndicator !== null) {
            let rect = preferencesButton.getBoundingClientRect();

            skillPromptElement.style.transition = "transform 1s, opacity 1s";
            skillPromptElement.style.transform = "translate(" + rect.left + "px, " + rect.top + "px) scale(" + scaleFactor[0] + ", " + scaleFactor[1] + ")";
            skillPromptElement.style.opacity = "0";

            preferencesIndicator.style.pointerEvents = "none";
            preferencesIndicator.style.opacity = "0";

            setTimeout(() => {
                overrideShowPrompt = false;
            }, 1000);
        }
        else {
            overrideShowPrompt = false;
        }
    }

    onDestroy(() => {
        overrideShowPrompt = false;
        skillPromptElement?.remove();
        preferencesIndicator?.remove();
    })
</script>

<div class="version-picker">
    <nav class="version-picker-content">
        <h1 class="version-picker-title">
            <SlottedTranslatableKey key="pick-a-version" let:value>
                {value}
            </SlottedTranslatableKey>
        </h1>
        <div class="version-picker-list">
            <a href="{base}/latest">latest ({latest})</a>
            {#each Object.keys(versions) as version}
                <a href="{base}/{version}">{version}</a>
            {/each}
        </div>
    </nav>
    {#if !$state.hasAnsweredSkillCheck || overrideShowPrompt}
        <div class="skill-prompt" bind:this={skillPromptElement}>
            <form on:submit|preventDefault={handleSubmit}>
                <h1 class="skill-prompt-title">
                    <SlottedTranslatableKey key="skill-level-prompt"/>
                </h1>
                <div class="skill-form">
                    <label><SlottedTranslatableKey key="experienced-user-skill"/><input type="radio" name="skill" value="experienced" required></label><br>
                    <label><SlottedTranslatableKey key="new-user-skill"/><input type="radio" name="skill" value="new" required></label><br>
                    <SlottedTranslatableKey key="submit-skill-check" let:value>
                        <input type="submit" value={value}>
                    </SlottedTranslatableKey>
                </div>
            </form>
        </div>

        <div class="preferences-indicator" bind:this={preferencesIndicator}>
            <SlottedTranslatableKey key="preferences-indicator"/>
            <button on:click={dismissPrompt}>ok</button>
        </div>
    {/if}
</div>

<style>
    .preferences-indicator {
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;

        background-color: var(--window-background);
        padding: 5px;
        border-radius: 5px;

        transition: opacity 1s;
        opacity: 0;

        z-index: 999999;
    }

    .version-picker {
        position: absolute;
        inset: 0;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        flex-wrap: wrap;

        overflow: hidden;
    }

    .version-picker-content {
        height: min(70vh, 70vw);
        width: min(70vh, 70vw);

        background-color: var(--window-background);

        border-radius: 5px;

        display: flex;

        flex-direction: column;

        align-items: stretch;
        justify-content: center;
    }

    .version-picker-list {
        display: flex;

        flex-direction: column;

        align-items: stretch;
        justify-content: center;

        flex-grow: 1;

        overflow-y: auto;
    }

    .version-picker-title {
        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);

        padding: 10px;
        font-size: 1em;

        text-align: center;

        clip-path: polygon(0 0, 100% 0, 100% 100%, 64% 86%, 28% 100%, 0 90%);

        font-weight: bold;

        margin: 0;
    }

    .skill-prompt {
        background-color: var(--window-background);
        border-radius: 5px;
        margin: 5px;
        overflow: hidden;
    }

    .skill-prompt-title {
        background-color: var(--landmark-in-window);
        padding: 10px;
        margin: 0;
        font-size: 1em;
        color: var(--color-in-landmark);
    }

    .skill-form {
        color: var(--color);
        margin: 30px;
        margin-left: 20px;
        margin-top: 0;
        padding-top: 10px;
        padding-bottom: 5px;
        position: relative;

        width:max-content;
    }

    .skill-form::before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        left: -15px;
        width: 10px;
        background-color: var(--landmark-in-window);
        border-radius: 0 0 5px 5px;
    }

    a {
        display: block;
        text-decoration: none;
        padding: 5px;
        text-align: center;

        color: var(--color)
    }
</style>