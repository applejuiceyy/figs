import{J as l,a2 as m,H as q,s as k,U as x}from"./scheduler.a6a8292b.js";const c=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(k(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=o(n?s[0]:s,f,t);b?f(u):p=x(u)?u:l},y=a.map((u,_)=>m(u,v=>{s[_]=v,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){q(y),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1vw7bsn)==null?void 0:h.base)??"/figs";var w;const H=((w=globalThis.__sveltekit_1vw7bsn)==null?void 0:w.assets)??T;export{H as a,T as b,E as d,z as r,A as w};
