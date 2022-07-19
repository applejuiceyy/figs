import cheese from "$lib/resource/cheese.png";
import namespace from "$lib/svgNamespace";

interface Binding<D> {
    element: Element,
    data: D
}

type ElementBinding = Binding<{x: number, y: number}>;

export function starglint(node: Element, breaks: boolean) {
    let data: ElementBinding [] = [];
    let bounds = node.getBoundingClientRect();

    let patience = 20;
    let running = 2;

    let sync = (svg: Element, data: ElementBinding) => {
        svg.setAttributeNS(null, "x1", `0`);
        svg.setAttributeNS(null, "y1", `0`);
        svg.setAttributeNS(null, "x2", `50`);
        svg.setAttributeNS(null, "y2", `50`);

        svg.setAttributeNS(null, "transform", `translate(${data.data.x},${data.data.y})`);
    }

	let execute = () => {
        bounds = node.getBoundingClientRect();

        running += ((breaks ? 0 : 1) - running) / 50;

        if(patience < 0) {
            let element = document.createElementNS(namespace, "line");

            element.setAttributeNS(null, "stroke", "#7d2fbd");
            element.setAttributeNS(null, "stroke-width", "5");
            element.setAttributeNS(null, "stroke-linecap", "round");

            node.appendChild(element);

            let karma = bounds.width + bounds.height;
            let bias = (Math.random() - 0.5) * 30 + karma / 2;

            data.push({
                element,

                data: {
                    x: bias,
                    y: karma - bias,
                }
            });

            patience += 20;
        }
        else {
            patience -= running;
        }

        for(let i = data.length - 1; i >= 0; i--) {
            let element = data[i];
            element.data.y -= running;
            element.data.x -= running;

            if(element.data.x + element.data.y < -100) {
                data.splice(i, 1);
                element.element.remove();
            }

            sync(element.element, element);
        }

        id = requestAnimationFrame(execute);
    }

    let id: number | null = requestAnimationFrame(execute);

	return {
		destroy() {
			id && cancelAnimationFrame(id);
		},

        update(newbreaks: boolean) {
            breaks = newbreaks;
        }
	};
}