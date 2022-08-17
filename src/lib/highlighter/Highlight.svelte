<script context="module">
    import prism from "prismjs"
    import lang from "./lua";
</script>

<script type="ts">
    import transform from "./injectHighlights";
    import type { Hint } from "$lib/docs/examples_typings";
    import ScaffoldingHint from "./ScaffoldingHint.svelte";

    import "prismjs/themes/prism-dark.css"

    export let code: string;
    export let hoverHighlight: Hint[];
    export let path: string;

    let tokens: ReturnType<typeof transform>;
    let ready: string;

    $: {
        tokens = transform(prism.tokenize(code, lang), hoverHighlight);
        
    }
</script>

<!-- html moment -->
{#each tokens as token}{@const format = token.content.replaceAll(" ", "&nbsp;").replaceAll("<", "&gt;").replaceAll(">", "&lt;").replaceAll("\n", "<br>")}<ScaffoldingHint path={path} hints={token.hints}><span class:token={true} class={token.type}>{@html format}</span></ScaffoldingHint>{/each}

<style>
    /* These rules were taken from prismjs's sources except modified to fit dark and white themes */

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: slategray;
    }

    .token.punctuation {
        color: #999;
    }

    .token.namespace {
        opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url {
        color: #9a6e3a;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #07a;
    }

    .token.function,
    .token.class-name {
        color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
        color: #e90;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }

    @media (prefers-color-scheme: dark) {
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: hsl(30, 20%, 50%);
        }

        .token.punctuation {
            opacity: .7;
        }

        .token.namespace {
            opacity: .7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol {
            color: hsl(350, 40%, 70%);
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: hsl(75, 70%, 60%);
        }

        .token.operator,
        .token.entity,
        .token.url,
        .token.variable {
            color: hsl(40, 90%, 60%);
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
            color: hsl(350, 40%, 70%);
        }

        .token.regex,
        .token.important {
            color: #e90;
        }

        .token.important,
        .token.bold {
            font-weight: bold;
        }
        .token.italic {
            font-style: italic;
        }

        .token.entity {
            cursor: help;
        }

        .token.deleted {
            color: red;
        }
    }
</style>