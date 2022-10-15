<script type="ts">
    export let type: string;
</script>
<span class="token {type}"><slot/></span>

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