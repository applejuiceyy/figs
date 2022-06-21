import cheese from "$lib/cheese.png";

interface Binding<D> {
    element: Element,
    data: D
}

type ElementBinding = Binding<{x: number, y: number, ym: number, scale: number, angle: number, anglem: number}>;

const namespace = "http://www.w3.org/2000/svg";

export function cheeseSvg(node: Element, shouldDo: boolean) {
    let data: ElementBinding [] = [];

    let sync = (svg: Element, data: ElementBinding) => {
        svg.setAttributeNS(null, "transform", `translate(${data.data.x},${data.data.y}) rotate(${data.data.angle}) scale(${data.data.scale}, ${data.data.scale})`);
    }

	let execute = () => {
        if(Math.random() > 0.99 && shouldDo) {
            let element = document.createElementNS(namespace, "image");

            element.setAttributeNS(null, "href", cheese);
            node.appendChild(element);

            data.push({
                element,

                data: {
                    x: Math.random() * node.clientWidth,
                    y: -50,
                    ym: Math.random() * 0.1 + 1,
                    scale: Math.random() + (Math.random() > 0.99? 5 : 1),
                    angle: Math.random() * 360,
                    anglem: (Math.random() - 0.5) * 0.1
                }
            });
        }

        for(let i = data.length - 1; i >= 0; i--) {
            let element = data[i];
            element.data.y += element.data.ym;
            element.data.angle += element.data.anglem;

            if(element.data.y > node.clientHeight) {
                data.splice(i, 1);
                element.element.remove();
            }

            sync(element.element, element);
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