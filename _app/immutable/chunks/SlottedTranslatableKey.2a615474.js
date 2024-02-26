var he=Object.defineProperty;var ge=(s,e,t)=>e in s?he(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var b=(s,e,t)=>(ge(s,typeof e!="symbol"?e+"":e,t),t);import{t as k,a as T,S as de,i as _e,g as me,c as be}from"./index.d48c456e.js";import{H as ve,s as Se,e as x,i as v,d as _,J as w,a2 as we,r as G,w as q,x as J,y as Y,a as ye,c as ke,f as F,l as j,g as V,h as Te,m as E,j as W,v as Ie,n as R,S as Pe}from"./scheduler.5e685358.js";import{_ as B}from"./preload-helper.080c2815.js";import{w as X,d as Le}from"./paths.d057c3e4.js";import{l as je}from"./loading.8c4fb1cc.js";function We(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Xe(s,e){k(s,1,1,()=>{e.delete(s.key)})}function Ze(s,e,t,l,a,n,r,o,i,f,u,p){let d=s.length,S=n.length,m=d;const O={};for(;m--;)O[s[m].key]=m;const I=[],A=new Map,C=new Map,U=[];for(m=S;m--;){const c=p(a,n,m),h=t(c);let g=r.get(h);g?l&&U.push(()=>g.p(c,e)):(g=f(h,c),g.c()),A.set(h,I[m]=g),h in O&&C.set(h,Math.abs(m-O[h]))}const D=new Set,K=new Set;function N(c){T(c,1),c.m(o,u),r.set(c.key,c),u=c.first,S--}for(;d&&S;){const c=I[S-1],h=s[d-1],g=c.key,P=h.key;c===h?(u=c.first,d--,S--):A.has(P)?!r.has(g)||D.has(g)?N(c):K.has(P)?d--:C.get(g)>C.get(P)?(K.add(g),N(c)):(D.add(P),d--):(i(h,r),d--)}for(;d--;){const c=s[d];A.has(c.key)||i(c,r)}for(;S;)N(I[S-1]);return ve(U),I}let Z=[],$="en_us",ee=!0,te=!0,se=!1,le=!0,ae=!1,ne=2;{let s=localStorage.getItem("favourites");s!==null&&(Z=s===""?[]:s.split(";")),$=localStorage.getItem("locale")??"en_us",ee=localStorage.getItem("figs-spe")===null,te=localStorage.getItem("figs-epe")===null,se=localStorage.getItem("figs-re")!==null,le=localStorage.getItem("figs-hasc")!==null,ae=localStorage.getItem("figs-s")!==null,ne=(Number(localStorage.getItem("figs-visits")??"1")??1)+.1}let re=X({readerEnabled:se,favourites:Z,language:$,signaturePopupEnabled:ee,examplePopupEnabled:te,hasAnsweredSkillCheck:le,skilled:ae,visits:ne});re.subscribe(s=>{localStorage.setItem("favourites",s.favourites.join(";")),localStorage.setItem("locale",s.language),localStorage.setItem("figs-visits",String(s.visits)),s.examplePopupEnabled?localStorage.removeItem("figs-epe"):localStorage.setItem("figs-epe",""),s.signaturePopupEnabled?localStorage.removeItem("figs-spe"):localStorage.setItem("figs-spe",""),s.readerEnabled?localStorage.setItem("figs-re",""):localStorage.removeItem("figs-re"),s.hasAnsweredSkillCheck?localStorage.setItem("figs-hasc",""):localStorage.removeItem("figs-hasc"),s.skilled?localStorage.setItem("figs-s",""):localStorage.removeItem("figs-s")});const ie="Favourites",oe="Content",ce="Search",ue="Preferences",M={favourites:ie,"hide-table":"Hide Table","show-table":"Show Table","disable-focus":"Disable Focus","enable-focus":"Enable Focus",content:oe,"global-objects":"Global Objects","misc-types":"Miscellaneous Types","misc-enums":"Miscellaneous Enums",search:ce,"pick-a-version":"Pick a version","version-not-selected":"Version not selected","made-by-applejuice":"Made by applejuice","show-everything":"Show everything","show-not-everything":"Show not everything",preferences:ue,"jump-to-top":"Jump to top","enable-popup-in-examples":"Show popups in examples","enable-popup-in-signature":"Show popups in signatures","disable-popup-in-examples":"Hide popups in examples","disable-popup-in-signature":"Hide popups in signatures","experienced-user-skill":"Experienced person","new-user-skill":"New person","experienced-user-skill-switch":"I want to be an experienced person","new-user-skill-switch":"I want to be a new person","preferences-indicator":"You can change your option at anytime in preferences!","skill-level-prompt":"Select your skill level","submit-skill-check":"Submit my skill"},Ee=Object.freeze(Object.defineProperty({__proto__:null,content:oe,default:M,favourites:ie,preferences:ue,search:ce},Symbol.toStringTag,{value:"Module"}));let Oe=Object.assign({"./figs/en_us.json":()=>B(()=>Promise.resolve().then(()=>Ee),void 0).then(s=>s.default),"./figs/pt_pt.json":()=>B(()=>import("./pt_pt.cfc632b1.js"),[]).then(s=>s.default)}),L={en_us:M},Ae=Object.entries(Oe);Ae.forEach(s=>{let e=s[0].split("/"),t=e[e.length-1].split(".")[0];t in L||(L[t]=s[1])});function Ce(s){return s.replaceAll("u","uwu").replaceAll("d","w").replaceAll("b","w").replaceAll("g","w").replaceAll("t","w")+(Math.random()>.8?" >w<":" :3")}let fe={};Object.entries(M).forEach(s=>{fe[s[0]]=Ce(s[1])});L.en_uwu=()=>new Promise(s=>s(fe));function y(s,e){return`${s}-${e}`}class Ne{constructor(e){b(this,"cachedTranslations");b(this,"providers");b(this,"stores");b(this,"languageStore");b(this,"currentLanguage");b(this,"activeTransfers");b(this,"loadCancel");this.cachedTranslations={},this.providers={},this.stores={},this.languageStore=e,this.currentLanguage="",this.activeTransfers=[],this.loadCancel=()=>{},this.languageStore.subscribe(async t=>{t!==this.currentLanguage&&(this.currentLanguage=t,this.reloadQueue(),this.updateStores())})}reloadQueue(){if(this.currentLanguage!=="en_us"){let e=Object.entries(this.providers);for(let t=0;t<e.length;t++){let l=e[t],a=y(l[0],this.currentLanguage);this.currentLanguage in l[1]&&!(a in this.cachedTranslations||this.activeTransfers.includes(a))&&this.transfer(l[0])}}}async transfer(e){let t=this.currentLanguage,l=y(e,t),a=je.request(`Fetching language with a cache id of "${l}"`);this.activeTransfers.push(l);let n,r=this.providers[e][t];if(typeof r=="function")try{n=await r()}catch(o){console.error(o),this.activeTransfers.splice(this.activeTransfers.findIndex(i=>i==l),1),a();return}else n=r;this.cachedTranslations[l]=n,this.activeTransfers.splice(this.activeTransfers.findIndex(o=>o==l),1),t===this.currentLanguage&&this.updateStores(),a()}updateStores(){let e=Object.entries(this.stores);for(let t=0;t<e.length;t++)e[t][1].set(this.getStoreValue(e[t][0]))}getStoreValue(e){let t=Object.entries(this.providers);for(let l=0;l<t.length;l++){let a=t[l],n=y(a[0],this.currentLanguage);if(n in this.cachedTranslations&&e in this.cachedTranslations[n])return{type:"RESULT",result:this.cachedTranslations[n][e]};if(n=y(a[0],"en_us"),n in this.cachedTranslations&&e in this.cachedTranslations[n])return{type:"FALLBACK",result:this.cachedTranslations[n][e]}}return this.activeTransfers.length>0?{type:"PROCESSING"}:{type:"NOTFOUND"}}getPresentableValue(e){let t=this.getStoreValue(e);return this.getPresentableValueFromResult(t,e)}getPresentableValueFromResult(e,t){return e.type==="RESULT"?e.result:t}addProvider(e,t){this.providers[t]=e;let l=y(t,"en_us");return this.cachedTranslations[l]=e.en_us,this.reloadQueue(),()=>this.removeProvider(t)}removeProvider(e){delete this.providers[e],this.reloadQueue()}createStore(e){if(e in this.stores)return this.stores[e];let t=X(this.getStoreValue(e),l=>(e in this.stores||(this.stores[e]=t,l(this.getStoreValue(e))),()=>{delete this.stores[e]}));return this.stores[e]=t,t}getProviderStatistics(){let e={providers:Object.keys(this.providers),languages:{}},t=Object.entries(this.providers);for(let l=0;l<t.length;l++){let a=t[l],n=Object.keys(a[1]);for(let r=0;r<n.length;r++)n[r]in e.languages||(e.languages[n[r]]=[]),e.languages[n[r]].push(a[0])}return e}}let pe=new Ne(Le(re,s=>s.language));pe.addProvider(L,"figs");const Fe=s=>({value:s&8}),H=s=>({value:s[3].result,type:"RESULT"}),Ve=s=>({value:s&8}),Q=s=>({value:s[3].result,type:"FALLBACK"});function Re(s){let e;const t=s[5].default,l=G(t,s,s[4],H),a=l||Ke(s);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,r){a&&a.m(n,r),e=!0},p(n,r){l?l.p&&(!e||r&24)&&q(l,t,n,n[4],e?Y(t,n[4],r,Fe):J(n[4]),H):a&&a.p&&(!e||r&8)&&a.p(n,e?r:-1)},i(n){e||(T(a,n),e=!0)},o(n){k(a,n),e=!1},d(n){a&&a.d(n)}}}function Me(s){let e,t,l=s[1]&&z();const a=s[5].default,n=G(a,s,s[4],Q),r=n||xe(s);return{c(){l&&l.c(),e=ye(),r&&r.c()},l(o){l&&l.l(o),e=ke(o),r&&r.l(o)},m(o,i){l&&l.m(o,i),v(o,e,i),r&&r.m(o,i),t=!0},p(o,i){o[1]?l||(l=z(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),n?n.p&&(!t||i&24)&&q(n,a,o,o[4],t?Y(a,o[4],i,Ve):J(o[4]),Q):r&&r.p&&(!t||i&8)&&r.p(o,t?i:-1)},i(o){t||(T(r,o),t=!0)},o(o){k(r,o),t=!1},d(o){o&&_(e),l&&l.d(o),r&&r.d(o)}}}function Ue(s){let e,t;return{c(){e=F("span"),t=j(s[0]),this.h()},l(l){e=V(l,"SPAN",{class:!0});var a=Te(e);t=E(a,s[0]),a.forEach(_),this.h()},h(){W(e,"class","svelte-hzmam9")},m(l,a){v(l,e,a),Ie(e,t)},p(l,a){a&1&&R(t,l[0])},i:w,o:w,d(l){l&&_(e)}}}function De(s){let e;return{c(){e=j("Loading...")},l(t){e=E(t,"Loading...")},m(t,l){v(t,e,l)},p:w,i:w,o:w,d(t){t&&_(e)}}}function Ke(s){let e=s[3].result+"",t;return{c(){t=j(e)},l(l){t=E(l,e)},m(l,a){v(l,t,a)},p(l,a){a&8&&e!==(e=l[3].result+"")&&R(t,e)},d(l){l&&_(t)}}}function z(s){let e,t="Using a fallback language",l;return{c(){e=F("span"),e.textContent=t,l=F("br"),this.h()},l(a){e=V(a,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-19w23xf"&&(e.textContent=t),l=V(a,"BR",{}),this.h()},h(){W(e,"class","svelte-hzmam9")},m(a,n){v(a,e,n),v(a,l,n)},d(a){a&&(_(e),_(l))}}}function xe(s){let e=s[3].result+"",t;return{c(){t=j(e)},l(l){t=E(l,e)},m(l,a){v(l,t,a)},p(l,a){a&8&&e!==(e=l[3].result+"")&&R(t,e)},d(l){l&&_(t)}}}function Be(s){let e,t,l,a;const n=[De,Ue,Me,Re],r=[];function o(i,f){return i[3].type==="PROCESSING"?0:i[3].type==="NOTFOUND"?1:i[3].type==="FALLBACK"?2:3}return e=o(s),t=r[e]=n[e](s),{c(){t.c(),l=x()},l(i){t.l(i),l=x()},m(i,f){r[e].m(i,f),v(i,l,f),a=!0},p(i,[f]){let u=e;e=o(i),e===u?r[e].p(i,f):(me(),k(r[u],1,1,()=>{r[u]=null}),be(),t=r[e],t?t.p(i,f):(t=r[e]=n[e](i),t.c()),T(t,1),t.m(l.parentNode,l))},i(i){a||(T(t),a=!0)},o(i){k(t),a=!1},d(i){i&&_(l),r[e].d(i)}}}function He(s,e,t){let l,a=w,n=()=>(a(),a=we(u,p=>t(3,l=p)),u);s.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:o}=e,{key:i}=e,{warn:f=!1}=e,u;return s.$$set=p=>{"key"in p&&t(0,i=p.key),"warn"in p&&t(1,f=p.warn),"$$scope"in p&&t(4,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&n(t(2,u=pe.createStore(i)))},[i,f,u,l,o,r]}class $e extends de{constructor(e){super(),_e(this,e,He,Be,Se,{key:0,warn:1})}}export{$e as S,We as e,Xe as o,pe as p,Ze as u,re as w};