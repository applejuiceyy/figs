import{S as j,i as O,s as $,e as b,b as d,B as h,I as re,h as f,J as ne,l as k,r as m,m as S,n as L,u as v,p as E,T as U,F as A,v as w,R as le,U as ae,V as ie,W as oe,f as p,t as g,C as ce,w as N,x as I,y as V,z as C,g as z,d as J,a as ue,c as fe}from"./index-087a81d1.js";import{w as q,d as _e}from"./paths-fcd7ce4f.js";import{_ as D}from"./preload-helper-aa6bc0ce.js";let x=[],H="en_us";var G;{let n=localStorage.getItem("favourites");n!==null&&(x=n===""?[]:n.split(";")),H=(G=localStorage.getItem("locale"))!=null?G:"en_us"}let F=q({readerEnabled:!1,favourites:x,language:H});F.subscribe(n=>{localStorage.setItem("favourites",n.favourites.join(";")),localStorage.setItem("locale",n.language)});function K(n,e,s){const t=n.slice();return t[3]=e[s],t}function M(n){let e,s=n[3]+"",t;return{c(){e=k("span"),t=m(s),this.h()},l(r){e=S(r,"SPAN",{class:!0});var l=L(e);t=v(l,s),l.forEach(f),this.h()},h(){E(e,"class","svelte-1ifvv27"),U(e,"enabled",n[1].readerEnabled)},m(r,l){d(r,e,l),A(e,t)},p(r,l){l&1&&s!==(s=r[3]+"")&&w(t,s),l&2&&U(e,"enabled",r[1].readerEnabled)},d(r){r&&f(e)}}}function he(n){let e,s=n[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=M(K(n,s,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=b()},l(r){for(let l=0;l<t.length;l+=1)t[l].l(r);e=b()},m(r,l){for(let a=0;a<t.length;a+=1)t[a].m(r,l);d(r,e,l)},p(r,[l]){if(l&3){s=r[0];let a;for(a=0;a<s.length;a+=1){const c=K(r,s,a);t[a]?t[a].p(c,l):(t[a]=M(c),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},i:h,o:h,d(r){re(t,r),r&&f(e)}}}function de(n,e,s){let t;ne(n,F,a=>s(1,t=a));let{value:r}=e,l=[];return n.$$set=a=>{"value"in a&&s(2,r=a.value)},n.$$.update=()=>{if(n.$$.dirty&5){let a=[",",". "];s(0,l=[]);let c=0;for(;;){let i=-1,u=0;for(let o=0;o<a.length;o++){let _=r.indexOf(a[o],c+50);_!==-1&&(_<i||i===-1)&&(i=_,u=a[o].length)}if(i===-1){l.push(r.substring(c));break}else l.push(r.substring(c,i+u)),c=i+u}}},[l,t,r]}class W extends j{constructor(e){super(),O(this,e,de,he,$,{value:2})}}const X="Favourites",Y="Content",Z="Search",ee="Preferences",R={favourites:X,"hide-table":"Hide Table","show-table":"Show Table","disable-focus":"Disable Focus","enable-focus":"Enable Focus",content:Y,"global-objects":"Global Objects","misc-types":"Miscellaneous Types","misc-enums":"Miscellaneous Enums",search:Z,"pick-a-version":"Pick a version","version-not-selected":"Version not selected","made-by-applejuice":"Made by applejuice","show-everything":"Show everything","show-not-everything":"Show not everything",preferences:ee,"jump-to-top":"Jump to top"},pe=Object.freeze(Object.defineProperty({__proto__:null,favourites:X,content:Y,search:Z,preferences:ee,default:R},Symbol.toStringTag,{value:"Module"}));let ge=Object.assign({"./figs/en_us.json":()=>D(()=>Promise.resolve().then(()=>pe),void 0,import.meta.url).then(n=>n.default),"./figs/pt_pt.json":()=>D(()=>import("./pt_pt-23182b15.js"),[],import.meta.url).then(n=>n.default)}),T={en_us:R},be=Object.entries(ge);be.forEach(n=>{let e=n[0].split("/"),s=e[e.length-1].split(".")[0];s in T||(T[s]=n[1])});function me(n){return n.replaceAll("u","uwu").replaceAll("d","w").replaceAll("b","w").replaceAll("g","w").replaceAll("t","w")+(Math.random()>.8?" >w<":" :3")}let te={};Object.entries(R).forEach(n=>{te[n[0]]=me(n[1])});T.en_uwu=()=>new Promise(n=>n(te));function y(n,e){return`${n}-${e}`}class ve{constructor(e){this.cachedTranslations={},this.providers={},this.stores={},this.languageStore=e,this.currentLanguage="",this.activeTransfers=[],this.languageStore.subscribe(async s=>{s!==this.currentLanguage&&(this.currentLanguage=s,this.reloadQueue(),this.updateStores())})}reloadQueue(){if(this.currentLanguage!=="en_us"){let e=Object.entries(this.providers);for(let s=0;s<e.length;s++){let t=e[s],r=y(t[0],this.currentLanguage);this.currentLanguage in t[1]&&!(r in this.cachedTranslations||this.activeTransfers.includes(r))&&this.transfer(t[0])}}}async transfer(e){let s=this.currentLanguage,t=y(e,s);this.activeTransfers.push(t);let r,l=this.providers[e][s];if(typeof l=="function")try{r=await l()}catch(a){console.error(a),this.activeTransfers.splice(this.activeTransfers.findIndex(c=>c==t),1);return}else r=l;this.cachedTranslations[t]=r,this.activeTransfers.splice(this.activeTransfers.findIndex(a=>a==t),1),s===this.currentLanguage&&this.updateStores()}updateStores(){let e=Object.entries(this.stores);for(let s=0;s<e.length;s++)e[s][1].set(this.getStoreValue(e[s][0]))}getStoreValue(e){let s=Object.entries(this.providers);for(let t=0;t<s.length;t++){let r=s[t],l=y(r[0],this.currentLanguage);if(l in this.cachedTranslations&&e in this.cachedTranslations[l])return{type:"RESULT",result:this.cachedTranslations[l][e]};if(l=y(r[0],"en_us"),l in this.cachedTranslations&&e in this.cachedTranslations[l])return{type:"FALLBACK",result:this.cachedTranslations[l][e]}}return this.activeTransfers.length>0?{type:"PROCESSING"}:{type:"NOTFOUND"}}getPresentableValue(e){let s=this.getStoreValue(e);return this.getPresentableValueFromResult(s,e)}getPresentableValueFromResult(e,s){return e.type==="RESULT"?e.result:s}addProvider(e,s){this.providers[s]=e;let t=y(s,"en_us");return this.cachedTranslations[t]=e.en_us,this.reloadQueue(),()=>this.removeProvider(s)}removeProvider(e){delete this.providers[e],this.reloadQueue()}createStore(e){if(e in this.stores)return this.stores[e];let s=q(this.getStoreValue(e),t=>(e in this.stores||(this.stores[e]=s,t(this.getStoreValue(e))),()=>{delete this.stores[e]}));return this.stores[e]=s,s}getProviderStatistics(){let e={providers:Object.keys(this.providers),languages:{}},s=Object.entries(this.providers);for(let t=0;t<s.length;t++){let r=s[t],l=Object.keys(r[1]);for(let a=0;a<l.length;a++)l[a]in e.languages||(e.languages[l[a]]=[]),e.languages[l[a]].push(r[0])}return e}}let se=new ve(_e(F,n=>n.language));se.addProvider(T,"figs");const ye=n=>({value:n&2}),B=n=>({value:n[1]});function ke(n){let e;const s=n[4].default,t=le(s,n,n[3],B);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,[l]){t&&t.p&&(!e||l&10)&&ae(t,s,r,r[3],e?oe(s,r[3],l,ye):ie(r[3]),B)},i(r){e||(p(t,r),e=!0)},o(r){g(t,r),e=!1},d(r){t&&t.d(r)}}}function Se(n,e,s){let t,r=h,l=()=>(r(),r=ce(u,o=>s(1,t=o)),u);n.$$.on_destroy.push(()=>r());let{$$slots:a={},$$scope:c}=e,{key:i}=e,u;return n.$$set=o=>{"key"in o&&s(2,i=o.key),"$$scope"in o&&s(3,c=o.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&l(s(0,u=se.createStore(i)))},[u,t,i,c,a]}class Te extends j{constructor(e){super(),O(this,e,Se,ke,$,{key:2})}}function we(n){let e=n[3].result+"",s;return{c(){s=m(e)},l(t){s=v(t,e)},m(t,r){d(t,s,r)},p(t,r){r&8&&e!==(e=t[3].result+"")&&w(s,e)},i:h,o:h,d(t){t&&f(s)}}}function Pe(n){let e,s;return e=new W({props:{value:n[3].result}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){V(e,t,r),s=!0},p(t,r){const l={};r&8&&(l.value=t[3].result),e.$set(l)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function je(n){let e,s,t,r,l,a=n[1]&&Q();const c=[Ee,Le],i=[];function u(o,_){return o[2]?0:1}return s=u(n),t=i[s]=c[s](n),{c(){a&&a.c(),e=ue(),t.c(),r=b()},l(o){a&&a.l(o),e=fe(o),t.l(o),r=b()},m(o,_){a&&a.m(o,_),d(o,e,_),i[s].m(o,_),d(o,r,_),l=!0},p(o,_){o[1]?a||(a=Q(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);let P=s;s=u(o),s===P?i[s].p(o,_):(z(),g(i[P],1,1,()=>{i[P]=null}),J(),t=i[s],t?t.p(o,_):(t=i[s]=c[s](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){l||(p(t),l=!0)},o(o){g(t),l=!1},d(o){a&&a.d(o),o&&f(e),i[s].d(o),o&&f(r)}}}function Oe(n){let e,s;return{c(){e=k("span"),s=m(n[0]),this.h()},l(t){e=S(t,"SPAN",{class:!0});var r=L(e);s=v(r,n[0]),r.forEach(f),this.h()},h(){E(e,"class","svelte-demb7k")},m(t,r){d(t,e,r),A(e,s)},p(t,r){r&1&&w(s,t[0])},i:h,o:h,d(t){t&&f(e)}}}function $e(n){let e;return{c(){e=m("Loading...")},l(s){e=v(s,"Loading...")},m(s,t){d(s,e,t)},p:h,i:h,o:h,d(s){s&&f(e)}}}function Q(n){let e,s,t;return{c(){e=k("span"),s=m("Using a fallback language"),t=k("br"),this.h()},l(r){e=S(r,"SPAN",{class:!0});var l=L(e);s=v(l,"Using a fallback language"),l.forEach(f),t=S(r,"BR",{}),this.h()},h(){E(e,"class","svelte-demb7k")},m(r,l){d(r,e,l),A(e,s),d(r,t,l)},d(r){r&&f(e),r&&f(t)}}}function Le(n){let e=n[3].result+"",s;return{c(){s=m(e)},l(t){s=v(t,e)},m(t,r){d(t,s,r)},p(t,r){r&8&&e!==(e=t[3].result+"")&&w(s,e)},i:h,o:h,d(t){t&&f(s)}}}function Ee(n){let e,s;return e=new W({props:{value:n[3].result}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){V(e,t,r),s=!0},p(t,r){const l={};r&8&&(l.value=t[3].result),e.$set(l)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Ae(n){let e,s,t,r;const l=[$e,Oe,je,Pe,we],a=[];function c(i,u){return i[3].type==="PROCESSING"?0:i[3].type==="NOTFOUND"?1:i[3].type==="FALLBACK"?2:i[2]?3:4}return e=c(n),s=a[e]=l[e](n),{c(){s.c(),t=b()},l(i){s.l(i),t=b()},m(i,u){a[e].m(i,u),d(i,t,u),r=!0},p(i,u){let o=e;e=c(i),e===o?a[e].p(i,u):(z(),g(a[o],1,1,()=>{a[o]=null}),J(),s=a[e],s?s.p(i,u):(s=a[e]=l[e](i),s.c()),p(s,1),s.m(t.parentNode,t))},i(i){r||(p(s),r=!0)},o(i){g(s),r=!1},d(i){a[e].d(i),i&&f(t)}}}function Ne(n){let e,s;return e=new Te({props:{key:n[0],$$slots:{default:[Ae,({value:t})=>({3:t}),({value:t})=>t?8:0]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){V(e,t,r),s=!0},p(t,[r]){const l={};r&1&&(l.key=t[0]),r&31&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Ie(n,e,s){let{key:t}=e,{warn:r=!1}=e,{focus:l=!1}=e;return n.$$set=a=>{"key"in a&&s(0,t=a.key),"warn"in a&&s(1,r=a.warn),"focus"in a&&s(2,l=a.focus)},[t,r,l]}class Re extends j{constructor(e){super(),O(this,e,Ie,Ne,$,{key:0,warn:1,focus:2})}}export{Te as S,Re as T,se as p,F as w};
