import * as Matter from "matter-js";
import namespace from "$lib/svgNamespace";

let bodyIdx = 0;

let engine: Matter.Engine;

let lastTick: number;

let runnerTickerFrame: ReturnType<typeof setTimeout> | null = null;

let afterTickEvents: (() => void)[] = [];  // poor man's solution

let walls: Matter.Body[] = [];

engine = Matter.Engine.create();

lastTick = Date.now();

runnerTickerFrame = setTimeout(running, 1);

createWalls();

Matter.Composite.add(engine.world, walls);

engine.gravity.y = 1.5;

function running() {
    let n = Date.now();
    Matter.Engine.update(engine, 10);
    
    lastTick = n;

    afterTickEvents.forEach((val) => val());
    runnerTickerFrame = setTimeout(running, 1);
}

function handleResize() {
    walls.forEach((val)=>Matter.Composite.remove(engine.world, val));

    walls = [];
    createWalls();

    Matter.Composite.add(engine.world, walls);
}

function getClientSize() {
    return {
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight
    }
}

function createWalls() {
    walls.push(Matter.Bodies.rectangle(getClientSize().x / 2, getClientSize().y + 500, getClientSize().x * 2, 1000, {
        isStatic: true,
        label: "floor",
        id: bodyIdx++
    }));

    walls.push(Matter.Bodies.rectangle(getClientSize().x / 2, -500, getClientSize().x * 2, 1000, {
        isStatic: true,
        label: "ceiling",
        id: bodyIdx++
    }));

    walls.push(Matter.Bodies.rectangle(-500, getClientSize().y / 2, 1000, getClientSize().y * 2, {
        isStatic: true,
        label: "left",
        id: bodyIdx++
    }));

    walls.push(Matter.Bodies.rectangle(getClientSize().x + 500, getClientSize().y / 2, 1000, getClientSize().y * 2, {
        isStatic: true,
        label: "right",
        id: bodyIdx++
    }));
}

function addListener(container: EventTarget, name: string, func: (ev: any)=>void, options?: any) {
    container.addEventListener(name, func, options);
    return ()=>{container.removeEventListener(name, func)}
}

let lastScroll = 0;
function onScroll() {

    var bodies = Matter.Composite.allBodies(engine.world);

    let delta = window.scrollY - lastScroll;
    lastScroll = window.scrollY;

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];

        if (!body.isStatic) {

            Matter.Body.applyForce(body, {x: body.position.x, y: body.position.y}, {
                x: 0,
                y: -delta / 5000 * body.mass
            })
        }
    }
}

function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
    var radians = angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}


type BodyGenerator = (Body: typeof Matter.Body, Bodies: typeof Matter.Bodies, Vertices: typeof Matter.Vertices, idx: number, rect: DOMRect) => Matter.Body;

interface GravityActionProperties {
    active: boolean
    shadowElement?: boolean,
    generateBody?: BodyGenerator
}

class ForceGizmo {
    glasspane: HTMLElement;

    localX: number;
    localY: number;

    mouseX: number;
    mouseY: number;

    pullCircle: SVGCircleElement;
    body: Matter.Body;
    pullingLine: SVGLineElement;
    centerCircle: any;

    constructor(body: Matter.Body, localX: number, localY: number, mouseX: number, mouseY: number) {
        this.glasspane = document.getElementById("root-glasspane") as HTMLElement;

        this.body = body;

        this.localX = localX;
        this.localY = localY;

        this.mouseX = mouseX;
        this.mouseY = mouseY;

        this.pullCircle = document.createElementNS(namespace, "circle");
        this.pullCircle.setAttributeNS(null, "fill", "red");
        this.pullCircle.setAttributeNS(null, "r", "5");

        this.pullingLine = document.createElementNS(namespace, "line");
        this.pullingLine.setAttributeNS(null, "stroke", "red");

        this.centerCircle = document.createElementNS(namespace, "circle");
        this.centerCircle.setAttributeNS(null, "fill", "green");
        this.centerCircle.setAttributeNS(null, "r", "5");

        this.glasspane.appendChild(this.pullCircle);
        this.glasspane.appendChild(this.pullingLine);
        this.glasspane.appendChild(this.centerCircle);

        this.update();
    }

    update() {
        const rotated = rotate(0, 0, this.localX, this.localY, -this.body.angle);
        let gX = rotated[0] + this.body.position.x;
        let gY = rotated[1] + this.body.position.y;

        let xD = Math.abs(gX - this.mouseX);
        let yD = Math.abs(gY - this.mouseY);

        let dist = Math.sqrt(xD * xD + yD * yD);

        this.pullCircle.setAttributeNS(null, "transform", `translate(${gX}, ${gY})`);
        this.pullCircle.setAttributeNS(null, "r", String(dist / 90));

        this.pullingLine.setAttributeNS(null, "x1", String(gX));
        this.pullingLine.setAttributeNS(null, "y1", String(gY));

        this.pullingLine.setAttributeNS(null, "x2", String(this.mouseX));
        this.pullingLine.setAttributeNS(null, "y2", String(this.mouseY));

        this.pullingLine.setAttributeNS(null, "stroke-width", String(Math.max(dist / 100, 1)));

        this.centerCircle.setAttributeNS(null, "transform", `translate(${this.body.position.x}, ${this.body.position.y})`)
    }

    destroy() {
        this.pullCircle.remove();
        this.pullingLine.remove();
        this.centerCircle.remove();
    }

    applyForce() {
        const rotated = rotate(0, 0, this.localX, this.localY, -this.body.angle);
        let gX = rotated[0] + this.body.position.x;
        let gY = rotated[1] + this.body.position.y;

        let xD = gX - this.mouseX;
        let yD = gY - this.mouseY;

        Matter.Body.applyForce(this.body, {x: gX, y: gY}, {
            x: -xD / 80,
            y: -yD / 80
        })
    }
}

export function gravity(node: HTMLElement, props: GravityActionProperties) {
    let originalParent = node.parentElement as Element;

	let isActive = false;
    let hasShadowElement = false;

    let shadowElement: HTMLElement | null = null;
    let mutationObserver: MutationObserver | null = null;

    let body: Matter.Body;
    let generateBody: BodyGenerator;

    let mConstraint: Matter.Constraint | null = null;

    let bodySize: {x: number, y: number} = {x: 0, y: 0};

    let forceGizmo: ForceGizmo | null = null;
    
    // activate / deactivate

    function updateTransform() {
        let rotatePrecision = 100;

        node.style.transformOrigin = `${bodySize.x / 2}px ${bodySize.y / 2}px`;

        node.style.transform = `translate(
            ${Math.round((body.position.x - bodySize.x / 2) * 10) / 10}px,
            ${Math.round((body.position.y - bodySize.y / 2) * 10) / 10}px
        )

        rotate(
            ${Math.round(body.angle * rotatePrecision) / rotatePrecision}rad
        )`;
    }

    function afterTick() {
        updateTransform();

        Matter.Body.setAngle(body, (body.angle) % (Math.PI * 2));

        if(body.position.x < -100 || body.position.x > getClientSize().x + 100 || body.position.y < -100 || body.position.y > getClientSize().y + 100) {
            Matter.Body.setPosition(body, {x: getClientSize().x / 2, y:getClientSize().y / 2});
            Matter.Body.setVelocity(body, {x:0, y:0});
        }

        if (forceGizmo !== null) {
            forceGizmo.update();
        }
    }

    function activate() {
        node.style.width = "fit-content";

        requestAnimationFrame(() => {
            let rect = node.getBoundingClientRect();
        
            body = generateBody(Matter.Body, Matter.Bodies, Matter.Vertices, bodyIdx, rect);

            bodyIdx++

            if(hasShadowElement) {
                createShadowElement();
            }

            node.style.position = "fixed";
            node.style.top = "0";
            node.style.left = "0";
            node.style.touchAction = "none";
            node.style.userSelect = "none";
            node.style.zIndex = "9999";

            document.body.appendChild(node);
    
            node.style.willChange = "transform";


            bodySize = {x: rect.width, y: rect.height};
        
            Matter.Composite.add(engine.world, body);

            updateTransform();
        
            afterTickEvents.push(afterTick);
        });
    }

    function deactivate() {
        afterTickEvents.splice(afterTickEvents.findIndex((val) => val == afterTick), 1)
        node.classList.remove("grabbing");

        Matter.Composite.remove(engine.world, body);

        node.style.transform = "";
        node.style.position = "";
        node.style.willChange = "";
        node.style.touchAction = "";
        node.style.zIndex = "";

        originalParent.appendChild(node);

        if(hasShadowElement) {
            deleteShadowElement();
        }
    }


    // shadowElement

    function cloneToShadowElement() {
        shadowElement = node.cloneNode(true) as HTMLElement;

        shadowElement.style.filter = "invert(50%) drop-shadow(0px 0px 10px gray) opacity(12%)";
        shadowElement.style.position = "";
        shadowElement.style.transform = "";
        shadowElement.style.pointerEvents = "none";
        shadowElement.style.userSelect = "none";
        shadowElement.style.margin = "";

        (node.parentElement as HTMLElement).insertBefore(shadowElement, node);
    }

    function eraseShadowElement() {
        if(shadowElement !== null) {
            shadowElement.remove();
            shadowElement = null;
        }
    }

    function createShadowElement() {
        mutationObserver = new MutationObserver(()=>{
            requestAnimationFrame(()=>{
                let oldBody = body;

                node.style.transform = "";
                let rect = node.getBoundingClientRect();
                
                bodySize = {x: rect.width, y: rect.height};

                Matter.Composite.remove(engine.world, body);

                body = generateBody(Matter.Body, Matter.Bodies, Matter.Vertices, bodyIdx, rect);

                Matter.Composite.add(engine.world, body);
                Matter.Body.setVelocity(body, oldBody.velocity);
                Matter.Body.setPosition(body, oldBody.position);
                Matter.Body.setAngle(body, oldBody.angle);
                Matter.Body.setAngularVelocity(body, oldBody.angularVelocity);

                updateTransform();
                eraseShadowElement();
                cloneToShadowElement();
            })
        })

        mutationObserver.observe(node, {
            subtree: true,
            childList: true,
            characterData: true
        })

        cloneToShadowElement();
    }

    function deleteShadowElement() {
        eraseShadowElement();

        if (mutationObserver !== null) {
            mutationObserver.disconnect();
        }
    }

    // events


    function handleMouseDown(x: number, y: number) {

        if(isActive) {
            mConstraint = Matter.Constraint.create({
                bodyA: body,

                pointA: {
                    x: (x - body.position.x),
                    y: (y - body.position.y)
                },

                pointB: {
                    x: x,
                    y: y
                },
                length: 0.01, 
                stiffness: 0.1
            });
            
            node.dispatchEvent(new CustomEvent("gravitygrab"))
            Matter.Composite.add(engine.world, mConstraint);
        }
    }

    function handleMouseMove(x: number, y: number) {
        if(mConstraint !== null)
        {
            mConstraint.pointB = {
                x: x,
                y: y
            }
        }

        if(forceGizmo !== null) {
            forceGizmo.mouseX = x;
            forceGizmo.mouseY = y;

            forceGizmo.update();
        }
    }

    function destroyConstraint() {
        if(mConstraint !== null)
        {
            node.classList.remove("grabbing");
            Matter.Composite.remove(engine.world, mConstraint);
            mConstraint = null;

            node.dispatchEvent(new CustomEvent("gravityrelease"))
        }
    }

    function applyForceGizmo(ev: MouseEvent) {
        if (forceGizmo !== null) {
            ev.preventDefault();
            ev.stopImmediatePropagation();

            forceGizmo.applyForce();
            forceGizmo.destroy();
            forceGizmo = null;
        }
    }

    function updateProps(props: GravityActionProperties) {
        generateBody = props.generateBody !== undefined? props.generateBody : ((Body, Bodies, Vertices, idx, rect) => {
            return Bodies.rectangle(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height, {
                id: bodyIdx++,
            });
        })

        if (!props.active) {
            // normalise
            props.active = false;
        }

        if(props.active !== isActive)
        {

            (props.active ? activate : deactivate)();

            isActive = props.active;
        };

        if(!props.active || !props.shadowElement) {
            // normalise
            props.shadowElement = false;
        }

        if (props.shadowElement !== hasShadowElement) {
            (shadowElement ? createShadowElement : deleteShadowElement)();

            hasShadowElement = props.shadowElement;
        }
    }

    let events: (() => void)[] = [];

    events.push(addListener(node,"mousedown", function(ev: MouseEvent) {
        if (ev.button === 0) {
            handleMouseDown(ev.clientX, ev.clientY)
        }
        else if (ev.button === 2) {
            const [lX, lY] = rotate(0, 0, ev.clientX - body.position.x, ev.clientY - body.position.y, body.angle);
            forceGizmo = new ForceGizmo(body, lX, lY, ev.clientX, ev.clientY);
        }
    }))

    
    events.push(addListener(node, "contextmenu", function(ev) {
        ev.preventDefault();
    }))


    events.push(addListener(document, "mousemove", function(ev: MouseEvent) {
        handleMouseMove(ev.clientX, ev.clientY);
    }))

    let disableDoc: boolean;
    events.push(addListener(document, "mouseup", (ev) => {
        destroyConstraint();
        disableDoc = forceGizmo !== null;
        applyForceGizmo(ev);
    }))

    events.push(addListener(document, "contextmenu", (ev) => {
        if (disableDoc) {
            disableDoc = false;
            ev.preventDefault();
        }
    }))



    updateProps(props);

	return {
		destroy(){
            events.forEach((val)=>val())
            events = [];

            updateProps({active: false});
		},

        update(props: GravityActionProperties){
            updateProps(props);
        }
	};
}

if(!import.meta.env.SSR) {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", onScroll)
}