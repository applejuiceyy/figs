import{S as $,i as C,s as w,x as c,k as j,y as f,m as y,z as p,g as D,r as u,p as _,C as d,d as M}from"../../chunks/index-8bf6b353.js";import{r as g}from"../../chunks/Article.svelte_svelte_type_style_lang-99973d4f.js";import{C as S}from"../../chunks/CategoryDocs-38429314.js";import{M as h}from"../../chunks/MetaTags-5b506fe5.js";import"../../chunks/CategoryItemDocs-743d2b49.js";import"../../chunks/preload-helper-a6ef5122.js";function k(e){let t,o,s,r;return t=new h({props:{title:e[1],description:e[0].map(l).join(`


`)}}),s=new S({props:{docs:e[0],name:e[1]}}),{c(){c(t.$$.fragment),o=j(),c(s.$$.fragment)},l(n){f(t.$$.fragment,n),o=y(n),f(s.$$.fragment,n)},m(n,a){p(t,n,a),D(n,o,a),p(s,n,a),r=!0},p(n,[a]){const m={};a&2&&(m.title=n[1]),a&1&&(m.description=n[0].map(l).join(`


`)),t.$set(m);const i={};a&1&&(i.docs=n[0]),a&2&&(i.name=n[1]),s.$set(i)},i(n){r||(u(t.$$.fragment,n),u(s.$$.fragment,n),r=!0)},o(n){_(t.$$.fragment,n),_(s.$$.fragment,n),r=!1},d(n){d(t,n),n&&M(o),d(s,n)}}}let E=function({params:{category:e}}){return e in g?{props:{docs:g[e],name:e}}:{status:404}};const l=e=>e.name+`

`+e.description;function q(e,t,o){let{docs:s}=t,{name:r}=t;return e.$$set=n=>{"docs"in n&&o(0,s=n.docs),"name"in n&&o(1,r=n.name)},[s,r]}class F extends ${constructor(t){super(),C(this,t,q,k,w,{docs:0,name:1})}}export{F as default,E as load};
