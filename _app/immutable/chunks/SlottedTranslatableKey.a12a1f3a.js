var te=Object.defineProperty;var se=(l,e,t)=>e in l?te(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var g=(l,e,t)=>(se(l,typeof e!="symbol"?e+"":e,t),t);import{S as le,i as re,s as ae,e as P,b as h,v as ie,d as S,f as ne,g as v,h as u,E as d,ah as oe,Q as O,R as C,T as N,U as F,a as ue,c as ce,k as T,q as m,l as k,m as R,r as b,n as V,C as U,u as I}from"./index.bfbdfae3.js";import{_ as E}from"./preload-helper.41c905a7.js";import{w as D,d as fe}from"./index.ede3e54f.js";import{l as pe}from"./loading.fac8479d.js";let K=[],M="en_us",Q=!0,B=!0,q=!1,z=!0,G=!1,H=2,J=!0;{let l=localStorage.getItem("favourites");l!==null&&(K=l===""?[]:l.split(";")),M=localStorage.getItem("locale")??"en_us",Q=localStorage.getItem("figs-spe")===null,B=localStorage.getItem("figs-epe")===null,q=localStorage.getItem("figs-re")!==null,z=localStorage.getItem("figs-hasc")!==null,G=localStorage.getItem("figs-s")!==null,H=(Number(localStorage.getItem("figs-visits")??"1")??1)+.1,J=localStorage.getItem("figs-STA")!==null}let Y=D({readerEnabled:q,favourites:K,language:M,signaturePopupEnabled:Q,examplePopupEnabled:B,hasAnsweredSkillCheck:z,skilled:G,visits:H,ST_aware:J});Y.subscribe(l=>{localStorage.setItem("favourites",l.favourites.join(";")),localStorage.setItem("locale",l.language),localStorage.setItem("figs-visits",String(l.visits)),l.examplePopupEnabled?localStorage.removeItem("figs-epe"):localStorage.setItem("figs-epe",""),l.signaturePopupEnabled?localStorage.removeItem("figs-spe"):localStorage.setItem("figs-spe",""),l.readerEnabled?localStorage.setItem("figs-re",""):localStorage.removeItem("figs-re"),l.hasAnsweredSkillCheck?localStorage.setItem("figs-hasc",""):localStorage.removeItem("figs-hasc"),l.skilled?localStorage.setItem("figs-s",""):localStorage.removeItem("figs-s"),l.ST_aware?localStorage.setItem("figs-STA",""):localStorage.removeItem("figs-STA")});const W="Favourites",X="Content",Z="Search",x="Preferences",y={favourites:W,"hide-table":"Hide Table","show-table":"Show Table","disable-focus":"Disable Focus","enable-focus":"Enable Focus",content:X,"global-objects":"Global Objects","misc-types":"Miscellaneous Types","misc-enums":"Miscellaneous Enums",search:Z,"pick-a-version":"Pick a version","version-not-selected":"Version not selected","made-by-applejuice":"Made by applejuice","show-everything":"Show everything","show-not-everything":"Show not everything",preferences:x,"jump-to-top":"Jump to top","enable-popup-in-examples":"Show popups in examples","enable-popup-in-signature":"Show popups in signatures","disable-popup-in-examples":"Hide popups in examples","disable-popup-in-signature":"Hide popups in signatures","experienced-user-skill":"Experienced person","new-user-skill":"New person","experienced-user-skill-switch":"I want to be an experienced person","new-user-skill-switch":"I want to be a new person","preferences-indicator":"You can change your option at anytime in preferences!","skill-level-prompt":"Select your skill level","submit-skill-check":"Submit my skill"},ge=Object.freeze(Object.defineProperty({__proto__:null,content:X,default:y,favourites:W,preferences:x,search:Z},Symbol.toStringTag,{value:"Module"}));let he=Object.assign({"./figs/en_us.json":()=>E(()=>Promise.resolve().then(()=>ge),void 0,import.meta.url).then(l=>l.default),"./figs/pt_pt.json":()=>E(()=>import("./pt_pt.cfc632b1.js"),[],import.meta.url).then(l=>l.default)}),w={en_us:y},de=Object.entries(he);de.forEach(l=>{let e=l[0].split("/"),t=e[e.length-1].split(".")[0];t in w||(w[t]=l[1])});function _e(l){return l.replaceAll("u","uwu").replaceAll("d","w").replaceAll("b","w").replaceAll("g","w").replaceAll("t","w")+(Math.random()>.8?" >w<":" :3")}let $={};Object.entries(y).forEach(l=>{$[l[0]]=_e(l[1])});w.en_uwu=()=>new Promise(l=>l($));function _(l,e){return`${l}-${e}`}class me{constructor(e){g(this,"cachedTranslations");g(this,"providers");g(this,"stores");g(this,"languageStore");g(this,"currentLanguage");g(this,"activeTransfers");g(this,"loadCancel");this.cachedTranslations={},this.providers={},this.stores={},this.languageStore=e,this.currentLanguage="",this.activeTransfers=[],this.loadCancel=()=>{},this.languageStore.subscribe(async t=>{t!==this.currentLanguage&&(this.currentLanguage=t,this.reloadQueue(),this.updateStores())})}reloadQueue(){if(this.currentLanguage!=="en_us"){let e=Object.entries(this.providers);for(let t=0;t<e.length;t++){let s=e[t],r=_(s[0],this.currentLanguage);this.currentLanguage in s[1]&&!(r in this.cachedTranslations||this.activeTransfers.includes(r))&&this.transfer(s[0])}}}async transfer(e){let t=this.currentLanguage,s=_(e,t),r=pe.request(`Fetching language with a cache id of "${s}"`);this.activeTransfers.push(s);let a,i=this.providers[e][t];if(typeof i=="function")try{a=await i()}catch(o){console.error(o),this.activeTransfers.splice(this.activeTransfers.findIndex(n=>n==s),1),r();return}else a=i;this.cachedTranslations[s]=a,this.activeTransfers.splice(this.activeTransfers.findIndex(o=>o==s),1),t===this.currentLanguage&&this.updateStores(),r()}updateStores(){let e=Object.entries(this.stores);for(let t=0;t<e.length;t++)e[t][1].set(this.getStoreValue(e[t][0]))}getStoreValue(e){let t=Object.entries(this.providers);for(let s=0;s<t.length;s++){let r=t[s],a=_(r[0],this.currentLanguage);if(a in this.cachedTranslations&&e in this.cachedTranslations[a])return{type:"RESULT",result:this.cachedTranslations[a][e]};if(a=_(r[0],"en_us"),a in this.cachedTranslations&&e in this.cachedTranslations[a])return{type:"FALLBACK",result:this.cachedTranslations[a][e]}}return this.activeTransfers.length>0?{type:"PROCESSING"}:{type:"NOTFOUND"}}getPresentableValue(e){let t=this.getStoreValue(e);return this.getPresentableValueFromResult(t,e)}getPresentableValueFromResult(e,t){return e.type==="RESULT"?e.result:t}addProvider(e,t){this.providers[t]=e;let s=_(t,"en_us");return this.cachedTranslations[s]=e.en_us,this.reloadQueue(),()=>this.removeProvider(t)}removeProvider(e){delete this.providers[e],this.reloadQueue()}createStore(e){if(e in this.stores)return this.stores[e];let t=D(this.getStoreValue(e),s=>(e in this.stores||(this.stores[e]=t,s(this.getStoreValue(e))),()=>{delete this.stores[e]}));return this.stores[e]=t,t}getProviderStatistics(){let e={providers:Object.keys(this.providers),languages:{}},t=Object.entries(this.providers);for(let s=0;s<t.length;s++){let r=t[s],a=Object.keys(r[1]);for(let i=0;i<a.length;i++)a[i]in e.languages||(e.languages[a[i]]=[]),e.languages[a[i]].push(r[0])}return e}}let ee=new me(fe(Y,l=>l.language));ee.addProvider(w,"figs");const be=l=>({value:l&8}),L=l=>({value:l[3].result,type:"RESULT"}),Se=l=>({value:l&8}),j=l=>({value:l[3].result,type:"FALLBACK"});function ve(l){let e;const t=l[5].default,s=O(t,l,l[4],L),r=s||Ie(l);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,i){r&&r.m(a,i),e=!0},p(a,i){s?s.p&&(!e||i&24)&&C(s,t,a,a[4],e?F(t,a[4],i,be):N(a[4]),L):r&&r.p&&(!e||i&8)&&r.p(a,e?i:-1)},i(a){e||(v(r,a),e=!0)},o(a){S(r,a),e=!1},d(a){r&&r.d(a)}}}function we(l){let e,t,s=l[1]&&A();const r=l[5].default,a=O(r,l,l[4],j),i=a||ye(l);return{c(){s&&s.c(),e=ue(),i&&i.c()},l(o){s&&s.l(o),e=ce(o),i&&i.l(o)},m(o,n){s&&s.m(o,n),h(o,e,n),i&&i.m(o,n),t=!0},p(o,n){o[1]?s||(s=A(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),a?a.p&&(!t||n&24)&&C(a,r,o,o[4],t?F(r,o[4],n,Se):N(o[4]),j):i&&i.p&&(!t||n&8)&&i.p(o,t?n:-1)},i(o){t||(v(i,o),t=!0)},o(o){S(i,o),t=!1},d(o){s&&s.d(o),o&&u(e),i&&i.d(o)}}}function Te(l){let e,t;return{c(){e=T("span"),t=m(l[0]),this.h()},l(s){e=k(s,"SPAN",{class:!0});var r=R(e);t=b(r,l[0]),r.forEach(u),this.h()},h(){V(e,"class","svelte-hzmam9")},m(s,r){h(s,e,r),U(e,t)},p(s,r){r&1&&I(t,s[0])},i:d,o:d,d(s){s&&u(e)}}}function ke(l){let e;return{c(){e=m("Loading...")},l(t){e=b(t,"Loading...")},m(t,s){h(t,e,s)},p:d,i:d,o:d,d(t){t&&u(e)}}}function Ie(l){let e=l[3].result+"",t;return{c(){t=m(e)},l(s){t=b(s,e)},m(s,r){h(s,t,r)},p(s,r){r&8&&e!==(e=s[3].result+"")&&I(t,e)},d(s){s&&u(t)}}}function A(l){let e,t,s;return{c(){e=T("span"),t=m("Using a fallback language"),s=T("br"),this.h()},l(r){e=k(r,"SPAN",{class:!0});var a=R(e);t=b(a,"Using a fallback language"),a.forEach(u),s=k(r,"BR",{}),this.h()},h(){V(e,"class","svelte-hzmam9")},m(r,a){h(r,e,a),U(e,t),h(r,s,a)},d(r){r&&u(e),r&&u(s)}}}function ye(l){let e=l[3].result+"",t;return{c(){t=m(e)},l(s){t=b(s,e)},m(s,r){h(s,t,r)},p(s,r){r&8&&e!==(e=s[3].result+"")&&I(t,e)},d(s){s&&u(t)}}}function Pe(l){let e,t,s,r;const a=[ke,Te,we,ve],i=[];function o(n,c){return n[3].type==="PROCESSING"?0:n[3].type==="NOTFOUND"?1:n[3].type==="FALLBACK"?2:3}return e=o(l),t=i[e]=a[e](l),{c(){t.c(),s=P()},l(n){t.l(n),s=P()},m(n,c){i[e].m(n,c),h(n,s,c),r=!0},p(n,[c]){let f=e;e=o(n),e===f?i[e].p(n,c):(ie(),S(i[f],1,1,()=>{i[f]=null}),ne(),t=i[e],t?t.p(n,c):(t=i[e]=a[e](n),t.c()),v(t,1),t.m(s.parentNode,s))},i(n){r||(v(t),r=!0)},o(n){S(t),r=!1},d(n){i[e].d(n),n&&u(s)}}}function Ee(l,e,t){let s,r=d,a=()=>(r(),r=oe(f,p=>t(3,s=p)),f);l.$$.on_destroy.push(()=>r());let{$$slots:i={},$$scope:o}=e,{key:n}=e,{warn:c=!1}=e,f;return l.$$set=p=>{"key"in p&&t(0,n=p.key),"warn"in p&&t(1,c=p.warn),"$$scope"in p&&t(4,o=p.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&a(t(2,f=ee.createStore(n)))},[n,c,f,s,o,i]}class Ne extends le{constructor(e){super(),re(this,e,Ee,Pe,ae,{key:0,warn:1})}}export{Ne as S,ee as p,Y as w};
