import { CONTINUE, SKIP, visit } from 'unist-util-visit'

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function plug() {
    return (tree) => {
        visit(tree, (node, pos, parent) => {

            if (node.type === "inlineCode" && pos !== null) {
                parent.children[pos] = {
                    type: "html",
                    value: `<Chunk><Code inline>${node.value.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</Code></Chunk>`
                }
                return SKIP
            }
            return CONTINUE
        })
    }
}

export default plug;