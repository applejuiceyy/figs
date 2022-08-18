<script>
    import sign from "$lib/resource/blocks/sign.png";
</script>

<div class="block">
    <div class="disclaimer">
        Thanks for enjoying this website :)
    </div>

    <img src={sign} style:width="100%" alt="">
</div>

<style>
    img {
        display: block;
        transform: rotate(10deg) translate(0, 5px);
    }

    .disclaimer {
        display: none;
        color: black;

        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translate(-50%);
        width: max-content;

        background-color: #eeeeee;
        padding: 10px;
        border-radius: 5px;

        pointer-events: none;
    }

    .block:hover .disclaimer {
        display: block;
    }

    @media (prefers-color-scheme: dark) {
        .disclaimer {
            color: white;
            background-color: #111111;
        }
    }
</style>