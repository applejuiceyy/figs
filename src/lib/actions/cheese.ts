import cheese from "$lib/resource/cheese.png";
import namespace from "$lib/svgNamespace";

interface Binding<D> {
    element: Element,
    data: D
}

type ElementBinding = Binding<{x: number, y: number, ym: number, scale: number, angle: number, anglem: number}>;

function r(v: number, w: number = 100) {
    return v * (Math.random() > 0.99 ? w : 1)
}

export function cheeseSvg(node: Element, shouldDo: boolean) {
    let data: ElementBinding [] = [];
    let bounds = node.getBoundingClientRect();

    let sync = (svg: Element, data: ElementBinding) => {
        if (bounds.top + data.data.y < -data.data.scale * 100 || bounds.top + data.data.y > window.innerHeight + data.data.scale * 100) {
            svg.remove();
            return;
        }

        if (svg.parentElement === null) {
            node.appendChild(svg);
        }

        svg.setAttributeNS(null, "transform", `translate(${data.data.x},${data.data.y}) rotate(${data.data.angle}) scale(${data.data.scale}, ${data.data.scale})`);
    }

	let execute = () => {
        bounds = node.getBoundingClientRect();

        if(Math.random() > Math.pow(0.9999, bounds.width) && shouldDo) {
            let element = document.createElementNS(namespace, "image");

            element.setAttributeNS(null, "href", cheese);
            element.setAttributeNS(null, "transform-origin", "28px 28px");
            node.appendChild(element);

            let scale = r(Math.random() + 1, 10);
            data.push({
                element,

                data: {
                    x: Math.random() * node.clientWidth,
                    y: -scale * 56,
                    ym: r(Math.random() * 0.1 + 1),
                    scale: scale,
                    angle: Math.random() * 360,
                    anglem: r(Math.random() - 0.5)
                }
            });
        }

        for(let i = data.length - 1; i >= 0; i--) {
            let element = data[i];
            element.data.y += element.data.ym;
            element.data.angle += element.data.anglem;

            sync(element.element, element);
            
            if(element.data.y > node.clientHeight + element.data.scale * 56) {
                data.splice(i, 1);
                element.element.remove();
            }
        }

        if(shouldDo || data.length > 0) {
            id = requestAnimationFrame(execute);
        }
        else {
            id = null;
        }
    }

    let id: number | null = requestAnimationFrame(execute);

	return {
		destroy() {
			id && cancelAnimationFrame(id);
		},

        update(newDo: boolean) {
            if(id === null && newDo) {
                id = requestAnimationFrame(execute);
            }

            shouldDo = newDo;
        }
	};
}