import{S as je,i as De,s as Ve,a as Ce,e as P,c as qe,b as B,g as J,t as U,d as H,f as I,h as j,j as ze,k as Be,o as de,l as Ke,m as Je,n as He,p as le,q as W,r as We,u as Fe,v as Ge,w as D,x as M,y as V,z as C,A as Le}from"./chunks/index-25ab9262.js";import{w as he}from"./chunks/index-473d5c5c.js";import{a as Me,s as Ye}from"./chunks/paths-6cd3a76e.js";import{H as ce,R as Se,e as Xe}from"./chunks/index-d6fabef0.js";import{_ as F}from"./chunks/preload-helper-aa6bc0ce.js";import{i as Ze}from"./chunks/singletons-e5e57fbd.js";function Qe(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function xe(s){for(const e in s)s[e]=s[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return s}class et extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function Ae(s){let e=s.baseURI;if(!e){const n=s.getElementsByTagName("base");e=n.length?n[0].href:s.URL}return e}function _e(){return{x:pageXOffset,y:pageYOffset}}function Oe(s){return s.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Pe(s){return s instanceof SVGAElement?new URL(s.href.baseVal,document.baseURI):new URL(s.href)}function Ue(s){const e=he(s);let n=!0;function a(){n=!0,e.update(t=>t)}function r(t){n=!1,e.set(t)}function f(t){let i;return e.subscribe(o=>{(i===void 0||n&&o!==i)&&t(i=o)})}return{notify:a,set:r,subscribe:f}}function tt(){const{set:s,subscribe:e}=he(!1);let n;async function a(){clearTimeout(n);const r=await fetch(`${Me}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const{version:f}=await r.json(),t=f!=="1661445334114";return t&&(s(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:e,check:a}}function nt(s){let e=5381,n=s.length;if(typeof s=="string")for(;n;)e=e*33^s.charCodeAt(--n);else for(;n;)e=e*33^s[--n];return(e>>>0).toString(36)}const pe=window.fetch;function rt(s,e){let a=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(a+=`[sveltekit\\:data-body="${nt(e.body)}"]`);const r=document.querySelector(a);if(r&&r.textContent){const{body:f,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(f,t))}return pe(s,e)}const at=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function st(s){const e=[],n=[];let a=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${decodeURIComponent(s).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,t,i)=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(o)return e.push(o[1]),n.push(o[2]),"(?:/(.*))?";const c=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((m,R)=>{if(R%2){const O=at.exec(m);if(!O)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,K,y,N]=O;return e.push(y),n.push(N),K?"(.*?)":"([^/]+?)"}return c&&m.includes(".")&&(a=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${a?"/?":""}$`),names:e,types:n}}function it(s,e,n,a){const r={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],o=s[f+1]||"";if(i){const c=a[i];if(!c)throw new Error(`Missing "${i}" param matcher`);if(!c(o))return}r[t]=o}return r}function ot(s,e,n){return Object.entries(e).map(([a,[r,f,t,i]])=>{const{pattern:o,names:c,types:m}=st(a),R={id:a,exec:O=>{const K=o.exec(O);if(K)return it(K,c,m,n)},errors:r.map(O=>s[O]),layouts:f.map(O=>s[O]),leaf:s[t],uses_server_data:!!i};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R})}function lt(s){let e,n,a;var r=s[0][0];function f(t){return{props:{data:t[1],errors:t[5]}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&2&&(o.data=t[1]),i&32&&(o.errors=t[5]),r!==(r=t[0][0])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function ct(s){let e,n,a;var r=s[0][0];function f(t){return{props:{data:t[1],$$slots:{default:[mt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&2&&(o.data=t[1]),i&2109&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][0])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function ft(s){let e,n,a;var r=s[0][1];function f(t){return{props:{data:t[2],errors:t[5]}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&4&&(o.data=t[2]),i&32&&(o.errors=t[5]),r!==(r=t[0][1])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function ut(s){let e,n,a;var r=s[0][1];function f(t){return{props:{data:t[2],$$slots:{default:[ht]},$$scope:{ctx:t}}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&4&&(o.data=t[2]),i&2105&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][1])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function dt(s){let e,n,a;var r=s[0][2];function f(t){return{props:{data:t[3],errors:t[5]}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&8&&(o.data=t[3]),i&32&&(o.errors=t[5]),r!==(r=t[0][2])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function _t(s){let e,n,a;var r=s[0][2];function f(t){return{props:{data:t[3],$$slots:{default:[pt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&8&&(o.data=t[3]),i&2065&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][2])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function pt(s){let e,n,a;var r=s[0][3];function f(t){return{props:{data:t[4]}}}return r&&(e=new r(f(s))),{c(){e&&D(e.$$.fragment),n=P()},l(t){e&&M(e.$$.fragment,t),n=P()},m(t,i){e&&V(e,t,i),B(t,n,i),a=!0},p(t,i){const o={};if(i&16&&(o.data=t[4]),r!==(r=t[0][3])){if(e){J();const c=e;U(c.$$.fragment,1,0,()=>{C(c,1)}),H()}r?(e=new r(f(t)),D(e.$$.fragment),I(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){a||(e&&I(e.$$.fragment,t),a=!0)},o(t){e&&U(e.$$.fragment,t),a=!1},d(t){t&&j(n),e&&C(e,t)}}}function ht(s){let e,n,a,r;const f=[_t,dt],t=[];function i(o,c){return o[0][3]?0:1}return e=i(s),n=t[e]=f[e](s),{c(){n.c(),a=P()},l(o){n.l(o),a=P()},m(o,c){t[e].m(o,c),B(o,a,c),r=!0},p(o,c){let m=e;e=i(o),e===m?t[e].p(o,c):(J(),U(t[m],1,1,()=>{t[m]=null}),H(),n=t[e],n?n.p(o,c):(n=t[e]=f[e](o),n.c()),I(n,1),n.m(a.parentNode,a))},i(o){r||(I(n),r=!0)},o(o){U(n),r=!1},d(o){t[e].d(o),o&&j(a)}}}function mt(s){let e,n,a,r;const f=[ut,ft],t=[];function i(o,c){return o[0][2]?0:1}return e=i(s),n=t[e]=f[e](s),{c(){n.c(),a=P()},l(o){n.l(o),a=P()},m(o,c){t[e].m(o,c),B(o,a,c),r=!0},p(o,c){let m=e;e=i(o),e===m?t[e].p(o,c):(J(),U(t[m],1,1,()=>{t[m]=null}),H(),n=t[e],n?n.p(o,c):(n=t[e]=f[e](o),n.c()),I(n,1),n.m(a.parentNode,a))},i(o){r||(I(n),r=!0)},o(o){U(n),r=!1},d(o){t[e].d(o),o&&j(a)}}}function Ie(s){let e,n=s[7]&&Ne(s);return{c(){e=Ke("div"),n&&n.c(),this.h()},l(a){e=Je(a,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=He(e);n&&n.l(r),r.forEach(j),this.h()},h(){le(e,"id","svelte-announcer"),le(e,"aria-live","assertive"),le(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(a,r){B(a,e,r),n&&n.m(e,null)},p(a,r){a[7]?n?n.p(a,r):(n=Ne(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(a){a&&j(e),n&&n.d()}}}function Ne(s){let e;return{c(){e=We(s[8])},l(n){e=Fe(n,s[8])},m(n,a){B(n,e,a)},p(n,a){a&256&&Ge(e,n[8])},d(n){n&&j(e)}}}function gt(s){let e,n,a,r,f;const t=[ct,lt],i=[];function o(m,R){return m[0][1]?0:1}e=o(s),n=i[e]=t[e](s);let c=s[6]&&Ie(s);return{c(){n.c(),a=Ce(),c&&c.c(),r=P()},l(m){n.l(m),a=qe(m),c&&c.l(m),r=P()},m(m,R){i[e].m(m,R),B(m,a,R),c&&c.m(m,R),B(m,r,R),f=!0},p(m,[R]){let O=e;e=o(m),e===O?i[e].p(m,R):(J(),U(i[O],1,1,()=>{i[O]=null}),H(),n=i[e],n?n.p(m,R):(n=i[e]=t[e](m),n.c()),I(n,1),n.m(a.parentNode,a)),m[6]?c?c.p(m,R):(c=Ie(m),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(m){f||(I(n),f=!0)},o(m){U(n),f=!1},d(m){i[e].d(m),m&&j(a),c&&c.d(m),m&&j(r)}}}function wt(s,e,n){let{stores:a}=e,{page:r}=e,{components:f}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:o=null}=e,{data_3:c=null}=e,{errors:m}=e;ze("__svelte__",a),Be(a.page.notify);let R=!1,O=!1,K=null;return de(()=>{const y=a.page.subscribe(()=>{R&&(n(7,O=!0),n(8,K=document.title||"untitled page"))});return n(6,R=!0),y}),s.$$set=y=>{"stores"in y&&n(9,a=y.stores),"page"in y&&n(10,r=y.page),"components"in y&&n(0,f=y.components),"data_0"in y&&n(1,t=y.data_0),"data_1"in y&&n(2,i=y.data_1),"data_2"in y&&n(3,o=y.data_2),"data_3"in y&&n(4,c=y.data_3),"errors"in y&&n(5,m=y.errors)},s.$$.update=()=>{s.$$.dirty&1536&&a.page.set(r)},[f,t,i,o,c,m,R,O,K,a,r]}class bt extends je{constructor(e){super(),De(this,e,wt,gt,Ve,{stores:9,page:10,components:0,data_0:1,data_1:2,data_2:3,data_3:4,errors:5})}}const vt={},te=[()=>F(()=>import("./chunks/0-65a0dc74.js"),["chunks/0-65a0dc74.js","chunks/_layout-452a32f5.js","chunks/_docs_all-66b9710e.js","chunks/preload-helper-aa6bc0ce.js","components/pages/_layout.svelte-a734fd1b.js","assets/+layout-3952b423.css","chunks/index-25ab9262.js","chunks/paths-6cd3a76e.js","chunks/statistics-55aa6f78.js","assets/statistics-12bdff4f.css","chunks/index-473d5c5c.js","chunks/translator-0859b5fb.js","chunks/loading-d3ce8bfb.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css","chunks/stores-d171989f.js","chunks/DescribeAny-8156e71b.js","chunks/singletons-e5e57fbd.js"],import.meta.url),()=>F(()=>import("./chunks/1-bcd465fb.js"),["chunks/1-bcd465fb.js","components/error.svelte-6e2972b5.js","chunks/index-25ab9262.js","chunks/stores-d171989f.js"],import.meta.url),()=>F(()=>import("./chunks/2-db199fb2.js"),["chunks/2-db199fb2.js","chunks/_layout-b19ed43a.js","chunks/index-d6fabef0.js","chunks/_docs_all-66b9710e.js","chunks/preload-helper-aa6bc0ce.js","chunks/loading-d3ce8bfb.js","chunks/index-473d5c5c.js","chunks/index-25ab9262.js","components/pages/_version_/_layout.svelte-44d52b96.js","chunks/translator-0859b5fb.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/3-4f74c563.js"),["chunks/3-4f74c563.js","components/pages/_page.svelte-9a3746c3.js","assets/+page-d730451b.css","chunks/index-25ab9262.js","chunks/paths-6cd3a76e.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css","chunks/translator-0859b5fb.js","chunks/preload-helper-aa6bc0ce.js","chunks/index-473d5c5c.js","chunks/loading-d3ce8bfb.js","chunks/_docs_all-66b9710e.js"],import.meta.url),()=>F(()=>import("./chunks/4-a9152314.js"),["chunks/4-a9152314.js","chunks/_page-7d115858.js","components/pages/_version_/_page.svelte-597233a4.js","chunks/index-25ab9262.js"],import.meta.url),()=>F(()=>import("./chunks/5-0a4c46aa.js"),["chunks/5-0a4c46aa.js","chunks/_page-08e60533.js","chunks/index-d6fabef0.js","chunks/statistics-55aa6f78.js","assets/statistics-12bdff4f.css","chunks/index-25ab9262.js","chunks/paths-6cd3a76e.js","chunks/index-473d5c5c.js","chunks/preload-helper-aa6bc0ce.js","chunks/translator-0859b5fb.js","chunks/loading-d3ce8bfb.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css","components/pages/_version_/_location_/_page.svelte-5eca70d0.js","chunks/MetaTags-20cf1dcd.js","chunks/DescribeAny-8156e71b.js"],import.meta.url),()=>F(()=>import("./chunks/6-c3b580a5.js"),["chunks/6-c3b580a5.js","chunks/_page-c35c72ae.js","components/pages/_version_/all/_page.svelte-b0da15d7.js","assets/+page-7408eda2.css","chunks/index-25ab9262.js","chunks/MetaTags-20cf1dcd.js","chunks/statistics-55aa6f78.js","assets/statistics-12bdff4f.css","chunks/paths-6cd3a76e.js","chunks/index-473d5c5c.js","chunks/preload-helper-aa6bc0ce.js","chunks/translator-0859b5fb.js","chunks/loading-d3ce8bfb.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css"],import.meta.url),()=>F(()=>import("./chunks/7-5f5cbf9f.js"),["chunks/7-5f5cbf9f.js","components/pages/_version_/fav/_page.svelte-0b134c22.js","chunks/index-25ab9262.js","chunks/DescribeAny-8156e71b.js","chunks/statistics-55aa6f78.js","assets/statistics-12bdff4f.css","chunks/paths-6cd3a76e.js","chunks/index-473d5c5c.js","chunks/preload-helper-aa6bc0ce.js","chunks/translator-0859b5fb.js","chunks/loading-d3ce8bfb.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css"],import.meta.url),()=>F(()=>import("./chunks/8-498da708.js"),["chunks/8-498da708.js","chunks/_page-78090ecc.js","components/pages/_version_/search/_page.svelte-423644e7.js","chunks/index-25ab9262.js","chunks/statistics-55aa6f78.js","assets/statistics-12bdff4f.css","chunks/paths-6cd3a76e.js","chunks/index-473d5c5c.js","chunks/preload-helper-aa6bc0ce.js","chunks/translator-0859b5fb.js","chunks/loading-d3ce8bfb.js","chunks/TranslatableKey-c3651ca3.js","assets/TranslatableKey-8ab6aa89.css"],import.meta.url)],yt={"":[[1],[0],3],"[version]":[[1],[0,2],4],"[version]/all":[[1],[0,2],6],"[version]/fav":[[1],[0,2],7],"[version]/search":[[1],[0,2],8],"[version]/[location]":[[1],[0,2],5]},Te="sveltekit:scroll",G="sveltekit:index",fe=ot(te,yt,vt),$t=te[0](),kt=te[1]();let Q={};try{Q=JSON.parse(sessionStorage[Te])}catch{}function ue(s){Q[s]=_e()}function Et({target:s,base:e,trailing_slash:n}){var ke;const a=[],r={url:Ue({}),page:Ue({}),navigating:he(null),updated:tt()},f={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},o=!1,c=!0,m=!1,R=1,O=null,K,y=!0,N=(ke=history.state)==null?void 0:ke[G];N||(N=Date.now(),history.replaceState({...history.state,[G]:N},"",location.href));const ne=Q[N];ne&&(history.scrollRestoration="manual",scrollTo(ne.x,ne.y));let re=!1,ae,me;async function ge(l,{noscroll:p=!1,replaceState:g=!1,keepfocus:u=!1,state:d={}},k){if(typeof l=="string"&&(l=new URL(l,Ae(document))),y)return ie({url:l,scroll:p?_e():null,keepfocus:u,redirect_chain:k,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await X(l)}async function we(l){const p=$e(l);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return f.promise=ye(p),f.id=p.id,f.promise}async function be(l,p,g,u){var b,A,L;const d=$e(l),k=me={};let h=d&&await ye(d);if(!h&&l.origin===location.origin&&l.pathname===location.pathname&&(h=await ee({status:404,error:new Error(`Not found: ${l.pathname}`),url:l,routeId:null})),!h)return await X(l),!1;if(l=(d==null?void 0:d.url)||l,me!==k)return!1;if(a.length=0,h.type==="redirect")if(p.length>10||p.includes(l.pathname))h=await ee({status:500,error:new Error("Redirect loop"),url:l,routeId:null});else return y?ge(new URL(h.location,l).href,{},[...p,l.pathname]):await X(new URL(h.location,location.href)),!1;else((A=(b=h.props)==null?void 0:b.page)==null?void 0:A.status)>=400&&await r.updated.check()&&await X(l);if(m=!0,g&&g.details){const{details:S}=g,$=S.replaceState?0:1;S.state[G]=N+=$,history[S.replaceState?"replaceState":"pushState"](S.state,"",l)}if(o?(i=h.state,h.props.page&&(h.props.page.url=l),K.$set(h.props)):ve(h),g){const{scroll:S,keepfocus:$}=g;if(!$){const w=document.body,_=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var v;(v=getSelection())==null||v.removeAllRanges()}),_!==null?w.setAttribute("tabindex",_):w.removeAttribute("tabindex")}if(await Le(),c){const w=l.hash&&document.getElementById(l.hash.slice(1));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Le();f.promise=null,f.id=null,c=!0,h.props.page&&(ae=h.props.page);const E=h.state.branch[h.state.branch.length-1];y=((L=E==null?void 0:E.node.shared)==null?void 0:L.router)!==!1,u&&u(),m=!1}function ve(l){i=l.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),ae=l.props.page,K=new bt({target:s,props:{...l.props,stores:r},hydrate:!0}),y){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(u=>u(g))}o=!0}async function x({url:l,params:p,branch:g,status:u,error:d,routeId:k,validation_errors:h}){const E=g.filter(Boolean),b={type:"loaded",state:{url:l,params:p,branch:g,error:d,session_id:R},props:{components:E.map($=>$.node.component),errors:h}};let A={},L=!1;for(let $=0;$<E.length;$+=1)A={...A,...E[$].data},(L||!i.branch.some(w=>w===E[$]))&&(b.props[`data_${$}`]=A,L=!0);if(!i.url||l.href!==i.url.href||i.error!==d||L){b.props.page={error:d,params:p,routeId:k,status:u,url:l,data:A};const $=(w,_)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${_}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return b}async function se({node:l,parent:p,url:g,params:u,routeId:d,server_data:k}){var S,$;const h={params:new Set,url:!1,dependencies:new Set,parent:!1};function E(...w){for(const _ of w){const{href:v}=new URL(_,g);h.dependencies.add(v)}}let b=null;l.server&&(h.dependencies.add(g.href),h.url=!0);const A={};for(const w in u)Object.defineProperty(A,w,{get(){return h.params.add(w),u[w]},enumerable:!0});const L=new et(g);if((S=l.shared)!=null&&S.load){const w={routeId:d,params:A,data:k,get url(){return h.url=!0,L},async fetch(_,v){let T;typeof _=="string"?T=_:(T=_.url,v={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...v});const q=new URL(T,g).href;return E(q),o?pe(q,v):rt(T,v)},setHeaders:()=>{},depends:E,get parent(){return h.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=($=await l.shared.load.call(null,w))!=null?$:null}return{node:l,data:b||k,uses:h}}async function ye({id:l,url:p,params:g,route:u}){if(f.id===l&&f.promise)return f.promise;const{errors:d,layouts:k,leaf:h}=u,E=i.url&&{url:l!==i.url.pathname+i.url.search,params:Object.keys(g).filter(_=>i.params[_]!==g[_])};[...d,...k,h].forEach(_=>_==null?void 0:_().catch(()=>{}));const b=[...k,h],A=[];for(let _=0;_<b.length;_++)if(!b[_])A.push(!1);else{const v=i.branch[_],T=!v||E.url&&v.uses.url||E.params.some(q=>v.uses.params.has(q))||Array.from(v.uses.dependencies).some(q=>a.some(Z=>Z(q)))||v.uses.parent&&A.includes(!0);A.push(T)}let L=null;if(u.uses_server_data){try{const _=await pe(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(L=await _.json(),!_.ok)throw L}catch{throw new Error("TODO render fallback error page")}if(L.type==="redirect")return L}const S=L==null?void 0:L.nodes,$=b.map(async(_,v)=>Promise.resolve().then(async()=>{var Y;if(!_)return;const T=await _(),q=i.branch[v];if(A[v]||!q||T!==q.node){const z=S==null?void 0:S[v];if(z!=null&&z.status)throw Xe(z.status,z.message);if(z!=null&&z.error)throw z.error;return await se({node:T,url:p,params:g,routeId:u.id,parent:async()=>{var Re;const Ee={};for(let oe=0;oe<v;oe+=1)Object.assign(Ee,(Re=await $[oe])==null?void 0:Re.data);return Ee},server_data:(Y=z==null?void 0:z.data)!=null?Y:null})}else return q}));for(const _ of $)_.catch(()=>{});const w=[];for(let _=0;_<b.length;_+=1)if(b[_])try{w.push(await $[_])}catch(v){const T=v;if(T instanceof Se)return{type:"redirect",location:T.location};const q=v instanceof ce?v.status:500;for(;_--;)if(d[_]){let Z,Y=_;for(;!w[Y];)Y-=1;try{return Z={node:await d[_](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:p,params:g,branch:w.slice(0,Y+1).concat(Z),status:q,error:T,routeId:u.id})}catch{continue}}return await ee({status:q,error:T,url:p,routeId:u.id})}else w.push(void 0);return await x({url:p,params:g,branch:w,status:200,error:null,routeId:u.id})}async function ee({status:l,error:p,url:g,routeId:u}){const d={},k=await se({node:await $t,url:g,params:d,routeId:u,parent:()=>Promise.resolve({}),server_data:null}),h={node:await kt,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:d,branch:[k,h],status:l,error:p,routeId:u})}function $e(l){if(l.origin!==location.origin||!l.pathname.startsWith(e))return;const p=decodeURI(l.pathname.slice(e.length)||"/");for(const g of fe){const u=g.exec(p);if(u){const d=new URL(l.origin+Qe(l.pathname,n)+l.search+l.hash);return{id:d.pathname+d.search,route:g,params:xe(u),url:d}}}}async function ie({url:l,scroll:p,keepfocus:g,redirect_chain:u,details:d,accepted:k,blocked:h}){const E=i.url;let b=!1;const A={from:E,to:l,cancel:()=>b=!0};if(t.before_navigate.forEach(L=>L(A)),b){h();return}ue(N),k(),o&&r.navigating.set({from:i.url,to:l}),await be(l,u,{scroll:p,keepfocus:g,details:d},()=>{const L={from:E,to:l};t.after_navigate.forEach(S=>S(L)),r.navigating.set(null)})}function X(l){return location.href=l.href,new Promise(()=>{})}return{after_navigate:l=>{de(()=>(t.after_navigate.push(l),()=>{const p=t.after_navigate.indexOf(l);t.after_navigate.splice(p,1)}))},before_navigate:l=>{de(()=>(t.before_navigate.push(l),()=>{const p=t.before_navigate.indexOf(l);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(m||!o)&&(c=!1)},goto:(l,p={})=>ge(l,p,[]),invalidate:l=>{if(l===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");a.push(()=>!0)}else if(typeof l=="function")a.push(l);else{const{href:p}=new URL(l,location.href);a.push(g=>g===p)}return O||(O=Promise.resolve().then(async()=>{await be(new URL(location.href),[]),O=null})),O},prefetch:async l=>{const p=new URL(l,Ae(document));await we(p)},prefetch_routes:async l=>{const g=(l?fe.filter(u=>l.some(d=>u.exec(d))):fe).map(u=>Promise.all([...u.layouts,u.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let d=!1;const k={from:i.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(h=>h(k)),d?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ue(N);try{sessionStorage[Te]=JSON.stringify(Q)}catch{}}});const l=u=>{const d=Oe(u);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&we(Pe(d))};let p;const g=u=>{clearTimeout(p),p=setTimeout(()=>{var d;(d=u.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",l),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",l),addEventListener("click",u=>{if(!y||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const d=Oe(u);if(!d||!d.href)return;const k=d instanceof SVGAElement,h=Pe(d);if(!k&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||E.includes("external")||d.hasAttribute("sveltekit:reload")||(k?d.target.baseVal:d.target))return;const[b,A]=h.href.split("#");if(A!==void 0&&b===location.href.split("#")[0]){re=!0,ue(N),r.page.set({...ae,url:h}),r.page.notify();return}ie({url:h,scroll:d.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&y){if(u.state[G]===N)return;ie({url:new URL(location.href),scroll:Q[u.state[G]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=u.state[G]},blocked:()=>{const d=N-u.state[G];history.go(d)}})}}),addEventListener("hashchange",()=>{re&&(re=!1,history.replaceState({...history.state,[G]:++N},"",location.href))});for(const u of document.querySelectorAll("link"))u.rel==="icon"&&(u.href=u.href);addEventListener("pageshow",u=>{u.persisted&&r.navigating.set(null)})},_hydrate:async({status:l,error:p,node_ids:g,params:u,routeId:d})=>{const k=new URL(location.href);let h;try{const E=(S,$)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):$},b=E("server_data",[]),A=E("validation_errors",void 0),L=g.map(async(S,$)=>{var w;return se({node:await te[S](),url:k,params:u,routeId:d,parent:async()=>{const _={};for(let v=0;v<$;v+=1)Object.assign(_,(await L[v]).data);return _},server_data:(w=b[$])!=null?w:null})});h=await x({url:k,params:u,branch:await Promise.all(L),status:l,error:p!=null&&p.__is_http_error?new ce(p.status,p.message):p,validation_errors:A,routeId:d})}catch(E){const b=E;if(b instanceof Se){await X(new URL(E.location,location.href));return}h=await ee({status:b instanceof ce?b.status:500,error:b,url:k,routeId:d})}ve(h)}}}function Ut(s){}async function It({paths:s,target:e,route:n,spa:a,trailing_slash:r,hydrate:f}){const t=Et({target:e,base:s.base,trailing_slash:r});Ze({client:t}),Ye(s),f&&await t._hydrate(f),n&&(a&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ut as set_public_env,It as start};
