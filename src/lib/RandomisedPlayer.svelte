<script type="ts">
    export let sounds: string[];
    export let loop: boolean = false;
    export let volume: number = 1;
    export let loopSize: number | null = null;

    let timeout: ReturnType<typeof setTimeout> | null = null;

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

    $: {
        if (!loop && timeout !== null) {
            clearTimeout(timeout);
        }
    }
</script>
