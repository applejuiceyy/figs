<script lang="ts">
    let {sounds, loop = false, volume = 1, loopSize = null}: {
        sounds: string[],
        loop?: boolean,
        volume?: number,
        loopSize?: number | null
    } = $props();

    let timeout: number | null = null;

    export function play() {
        let player = document.createElement("audio");
        player.volume = volume;

        player.setAttribute("src", sounds[Math.floor(Math.random() * sounds.length)]);
        player.play();

        if (loopSize === null) {
            player.addEventListener("ended", () => loop && play());
        }
        else {
            timeout = setTimeout(() => loop && play(), loopSize);
        }
    }

    $effect(() => {
        if (!loop && timeout !== null) {
            clearTimeout(timeout);
        }
    });
</script>
