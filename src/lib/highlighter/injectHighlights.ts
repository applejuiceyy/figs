import type { Hint } from "$lib/docs/examples_typings";
import type prism from "prismjs";

export default function transform(tokens: ReturnType<typeof prism.tokenize>, hints: Hint[]) {
    let ret = tokens.map(val => (
        {
            hints: [] as Hint[],
            type: typeof val === "string" ? null : val.type,
            content: typeof val === "string" ? val : (val.content as string),
        }
    ));

    for (let i = 0; i < hints.length; i++) {
        let hint = hints[i];

        let pos = 0;
        let newRet = [];

        for (let v = 0; v < ret.length; v++) {
            let current = ret[v];

            if ((hint.range[0] <= pos + current.content.length) && (hint.range[1] + 1 >= pos)) {
                if (hint.range[0] - pos > 0)
                {
                    newRet.push({
                        hints: current.hints,
                        type: current.type,
                        content: current.content.substring(0, hint.range[0] - pos)
                    })
                }

                newRet.push({
                    hints: [...current.hints, hint],
                    type: current.type,
                    content: current.content.substring(Math.max(hint.range[0] - pos, 0), Math.min(hint.range[1] + 1 - pos, current.content.length))
                })

                if (hint.range[1] + 1 - pos < current.content.length)
                {
                    newRet.push({
                        hints: current.hints,
                        type: current.type,
                        content: current.content.substring(hint.range[1] + 1 - pos)
                    })
                }
            }
            else {
                newRet.push(current);
            }

            pos += current.content.length;
        }

        ret = newRet;
    }

    return ret;
}
