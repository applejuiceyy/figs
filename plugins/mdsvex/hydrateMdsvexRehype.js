import { CONTINUE, EXIT, visit } from 'unist-util-visit'

const scriptPrelogue = `import Intertweener from "$lib/intertween/Intertweener.svelte";
import AutonomousCode from "$lib/AutonomousCode.svelte";
import Code from "$lib/Code.svelte";
import Chunk from "$lib/intertween/Chunk.svelte";
import { generateChunks } from "$lib/intertween/chunker";`

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function plug() {
    return (tree) => {
        console.log(tree);
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

        let found = false;
        visit(tree, 'raw', (node) => {
            let result = /<script>(.*)<\/script>/gs.exec(node.value);
            if (result === null) {
                return CONTINUE;
            }
            found = true;
            
            node.value = `<script>
            ${scriptPrelogue}
            ${result[1]}
            </script>`;

            return EXIT
        })
        if (!found) {
            visit(tree, 'element', (node) => {
                if (node.tagName === "script") {
                    node.value = scriptPrelogue + node.value;
                    found = true;
                    return EXIT;
                }

                return CONTINUE;
            })
        }

        if (!found) {
            tree.children.unshift({
                type: "raw",
                value: `
                <script>
                    ${scriptPrelogue}
                </script>`
            })
        }

        visit(tree, 'element', (node) => {
            if (['p'].includes(node.tagName)) {
                node.tagName = "div"
                console.log(node);
                node.properties.style = "margin-top: 20px; margin-bottom: 20px;"
            }

            return CONTINUE
        })
    }
}

export default plug;