<script context="module" type="ts">
    import latest from "docs:latest";
</script>

<script type="ts">
    import {base} from "$app/paths";
    import { onDestroy, onMount } from "svelte";

    import { page } from "$app/stores";

    import stores from "$lib/state/stores";
    import landmark from "$lib/state/landmark";

    import state from "$lib/state/stores";

    import versions from "docs:all";

    import NavBar from "$lib/content/navbar/NavBar.svelte";
    import NavBarDropdown from "$lib/content/navbar/NavBarDropdown.svelte";
    import NavBarLink from "$lib/content/navbar/NavBarLink.svelte";
    import NavBarButton from "$lib/content/navbar/NavBarButton.svelte";
    import NavBarFloater from "$lib/content/navbar/NavBarFloater.svelte";
    import NavBarExpandButton from "$lib/content/navbar/NavBarExpandButton.svelte";
    import NavBarSearcher from "$lib/content/navbar/NavBarSearcher.svelte";
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import pool from "$lib/language/translator";

    import eh from "$lib/resource/status/eh.png";
    import ok from "$lib/resource/status/ok.png";


    export let cheeseFalling = false;
    export let expanded: boolean = false;

    let interv: any = null;
    let holdingCtrl: boolean = false;

    onMount(()=> {
        let v = ()=>{
            stamina += staminaMomentum;
            stamina = Math.max(stamina, 0);
            staminaMomentum -= 0.001;
            staminaMomentum *= 0.99;

            if(stamina > 20) {
                cheeseFalling = true;
            }

            requestAnimationFrame(v);
        }
        interv = requestAnimationFrame(v);
    })

    onDestroy(() => interv && cancelAnimationFrame(interv));

    function increaseStamina() {
        if(!cheeseFalling) {
            staminaMomentum += 0.1;
        }
    }

    let stamina: number = 0;
    let staminaMomentum: number = 0;

    let searcher: NavBarSearcher;

    function handleKeyDown (ev: KeyboardEvent) {
        holdingCtrl = ev.ctrlKey;
        // https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript
        if (!ev.altKey && !ev.ctrlKey && (ev.keyCode >= 48 && ev.keyCode <= 57 || ev.keyCode >= 65 && ev.keyCode <= 90 || ev.keyCode >= 97 && ev.keyCode <= 122)) {
            searcher.focus();
        }
    }

    function handleKeyUp (ev: KeyboardEvent) {
        holdingCtrl = ev.ctrlKey;
    }
</script>

<svelte:body on:keydown={handleKeyDown} on:keyup={handleKeyUp}/>

    <NavBar>
        <NavBarLink on:click={increaseStamina} inline href={base + "/"}><span style:font-size={(Math.max(stamina, 10) - 9) + "em"}>FIGS{"!".repeat(Math.min(10, Math.floor($state.visits)))}</span></NavBarLink>
        <div class="big-display">
            <NavBarLink inline external href="https://github.com/applejuiceyy/figs">Github</NavBarLink>
        </div>

        <NavBarSearcher bind:this={searcher} destination="{base}{$page.data.base}search"/>

        <NavBarFloater>
            <div class="table-toggle" class:always-show-toggle={$page.data.hideTable} style:display={$page.data.forceShowTable ? "none" : ""}>
                <NavBarButton on:click={()=>expanded = !expanded}>
                    <SlottedTranslatableKey key={expanded? "hide-table" : "show-table"}/>
                </NavBarButton>
            </div>

            <NavBarExpandButton bind:button={$landmark.contentButton}>
                <SlottedTranslatableKey key="content"/>
            </NavBarExpandButton>
        </NavBarFloater>

        <svelte:fragment slot="expanded">
            <NavBarLink href="{base}{$page.data.base}fav">
                <SlottedTranslatableKey key="favourites"/>
            </NavBarLink>

            <NavBarDropdown bind:button={$landmark.preferencesButton}>
                <SlottedTranslatableKey key="preferences"/>

                <svelte:fragment slot="dropdown">
                    <NavBarButton on:click={()=>$stores.readerEnabled = !$stores.readerEnabled}>
                        <SlottedTranslatableKey key={$stores.readerEnabled ? "disable-focus" : "enable-focus"}/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.signaturePopupEnabled = !$stores.signaturePopupEnabled}>
                        <SlottedTranslatableKey key={($stores.signaturePopupEnabled ? "disable" : "enable") + "-popup-in-signature" }/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.examplePopupEnabled = !$stores.examplePopupEnabled}>
                        <SlottedTranslatableKey key={($stores.examplePopupEnabled ? "disable" : "enable") + "-popup-in-examples" }/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.skilled = !$stores.skilled}>
                        <SlottedTranslatableKey key={($stores.skilled ? "new" : "experienced") + "-user-skill-switch" }/>
                    </NavBarButton>
                </svelte:fragment>
            </NavBarDropdown>

            <NavBarDropdown>
                {($page.data.version ?? "Version").toUpperCase()}

                <svelte:fragment slot="dropdown">
                    <NavBarLink href="{base}/latest">LATEST ({latest})</NavBarLink>
                    {#each Object.keys(versions) as version}
                        <NavBarLink href="{base}/{version}">
                            {version.toUpperCase()}
                        </NavBarLink>
                    {/each}
                </svelte:fragment>
            </NavBarDropdown>

            <NavBarDropdown>
                {$state.language.toUpperCase()}

                <svelte:fragment slot="dropdown">
                    {@const stat = pool.getProviderStatistics()}
                    {#each Object.entries(stat.languages) as lang}
                        {#if holdingCtrl || lang[0] !== "en_uwu"}
                            <div class="button-wrapper" style:width="100%" title={lang[1].length < stat.providers.length ? `There is ${stat.providers.length} language providers registered (${stat.providers.join(", ")}) however only ${lang[1].length} of them (${lang[1].join(", ")}) can provide keys for the ${lang[0]} language` : ""}>
                                <NavBarButton on:click={() => $state.language = lang[0]}>
                                    {lang[0].toUpperCase()}
                                    <img style:position="absolute" style:right="10px" style:top="50%" style:transform="translate(0%, -50%)" src={lang[1].length < stat.providers.length ? eh : ok} alt="">
                                </NavBarButton>
                            </div>
                        {/if}
                    {/each}
                </svelte:fragment>
            </NavBarDropdown>
        </svelte:fragment>
    </NavBar>

<style lang="less">
    // can't $lib
    @import "src/lib/content/navbar/constants.less";

    .button-wrapper {
        .inline-flex();
    }

    .big-display {
        display: none;
    }

    @media only screen and (min-width: 800.5px) {
        .big-display {
            display: contents;
        }
    }

    .table-toggle {
        display: none;
    }
    .table-toggle.always-show-toggle {
        display: contents;
    }

    @media only screen and (max-width: 800px) {
        .table-toggle {
            display: contents;
        }
    }
</style>

