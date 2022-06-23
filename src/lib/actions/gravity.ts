import * as Matter from "matter-js";

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

function rotate(bx: number, by: number, angle: number) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle),
        run = bx,
        rise = by,
        cx = (cos * run) + (sin * rise),
        cy = (cos * rise) - (sin * run);
    return {
        x: cx,
        y: cy
    };
}

function handleResize() {
    walls.forEach((val)=>Matter.Composite.remove(engine.world, val));

    walls = [];
    createWalls();

    Matter.Composite.add(engine.world, walls);
}

function handleWindowFocus() {
    console.log("focus")

    handleWindowLeave();
    lastTick = Date.now();
    runnerTickerFrame = setTimeout(running, 1);
}

function handleWindowLeave() {
    console.log("eee")
    if(runnerTickerFrame !== null) {
        clearTimeout(runnerTickerFrame);
    }
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

function addListener<C extends Node, M extends Parameters<C["addEventListener"]>>(container: C, name: M[0], func: M[1], options?: M[2]) {
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

        if (!body.isStatic && body.position.y >= 500) {

            Matter.Body.setPosition(body, {
                x: body.position.x,
                y: body.position.y - delta
            })
        }
    }
}


type BodyGenerator = (Body: typeof Matter.Body, Bodies: typeof Matter.Bodies, Vertices: typeof Matter.Vertices, idx: number, rect: DOMRect) => Matter.Body;

interface GravityActionProperties {
    active: boolean
    shadowElement?: boolean,
    generateBody?: BodyGenerator
}

export function gravity(node: HTMLElement, props: GravityActionProperties) {
	let isActive = false;
    let hasShadowElement = false;

    let shadowElement: HTMLElement | null = null;
    let mutationObserver: MutationObserver | null = null;

    let body: Matter.Body;
    let generateBody: BodyGenerator;

    let mConstraint: Matter.Constraint | null = null;

    let bodySize: {x: number, y: number} = {x: 0, y: 0};
    
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

        if(hasShadowElement) {
            console.log("remove shadow")
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
        console.log(x, y);

        if(isActive) {
            if(mConstraint !== null) {
                handleMouseUp()
            }

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
    }

    function handleMouseUp() {
        if(mConstraint !== null)
        {
            node.classList.remove("grabbing")
            Matter.Composite.remove(engine.world, mConstraint);
            mConstraint = null;

            node.dispatchEvent(new CustomEvent("gravityrelease"))
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
            console.log(props.active !== isActive);

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

    // @ts-ignore
    events.push(addListener(node,"mousedown", function(ev: MouseEvent) {
        handleMouseDown(ev.clientX, ev.clientY)
    }))

    // @ts-ignore
    events.push(addListener(node, "touchstart", function(ev: TouchEvent) {
        let touch = ev.targetTouches[0]
        handleMouseDown(touch.clientX, touch.clientY)
    }))

    document.addEventListener("mousemove", function(ev) {
        handleMouseMove(ev.clientX, ev.clientY)
    })

    // @ts-ignore
    events.push(addListener(document, "mousemove", function(ev: MouseEvent) {
        handleMouseMove(ev.clientX, ev.clientY)
    }))

    // @ts-ignore
    events.push(addListener(document, "touchmove", function(ev: TouchEvent) {
        let touch = ev.targetTouches[0]
        ev.preventDefault();
        handleMouseMove(touch.clientX, touch.clientY)
    }, {passive: false}))

    events.push(addListener(document, "mouseup", handleMouseUp))

    events.push(addListener(document, "touchcancel", (ev)=>{handleMouseUp()}))
    events.push(addListener(document, "touchend", (ev)=>{handleMouseUp()}))

    updateProps(props);

	return {
		destroy(){
            console.log("destroying");
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