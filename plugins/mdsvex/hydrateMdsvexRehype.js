import { CONTINUE, visit } from 'unist-util-visit'

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function plug() {
    return (tree) => {

        visit(tree, 'element', (node) => {
            if (!['code'].includes(node.tagName)) {
                for (let i = 0; i < node.children.length; i++) {
                    let child = node.children[i];

                    if (child.type === "text" && child.value.trim() !== "") {
                        node.children[i] = {
                            type: "raw",
                            value: `<Intertweener text="${child.value.replaceAll("`", "\`")}" properties={[generateChunks(\`${child.value.replaceAll("`", "\`")}\`)]}/>`
                        }
                    }
                }
            }

            return CONTINUE
        })

        tree.children.push({
            type: "raw",
            value: `
            <script context="module">
            import Intertweener from "$lib/intertween/Intertweener.svelte";
            import AutonomousCode from "$lib/AutonomousCode.svelte";
            import Code from "$lib/Code.svelte";
            import Chunk from "$lib/intertween/Chunk.svelte";
            import { generateChunks } from "$lib/intertween/chunker";
            </script>`
        })

        visit(tree, 'element', (node) => {
            if (['p'].includes(node.tagName)) {
                node.tagName = "div"
                console.log(node);
                node.properties.style = "margin-top: 10px; margin-bottom: 10px;"
            }

            return CONTINUE
        })
    }
}

export default plug;