import{S as $,i as w,s as C,w as c,k as j,x as f,m as q,y as p,g as y,q as u,o as _,B as d,d as B}from"../../chunks/index-642db81b.js";import{r as g}from"../../chunks/Article.svelte_svelte_type_style_lang-94bf7d1f.js";import{C as D}from"../../chunks/CategoryDocs-106461db.js";import{M}from"../../chunks/MetaTags-527ca136.js";import"../../chunks/index-fc234b66.js";import"../../chunks/CategoryItemDocs-3a7adf4b.js";import"../../chunks/preload-helper-a6ef5122.js";function S(e){let t,o,s,r;return t=new M({props:{title:e[1],description:e[0].map(l).join(`


`)}}),s=new D({props:{docs:e[0],name:e[1]}}),{c(){c(t.$$.fragment),o=j(),c(s.$$.fragment)},l(n){f(t.$$.fragment,n),o=q(n),f(s.$$.fragment,n)},m(n,a){p(t,n,a),y(n,o,a),p(s,n,a),r=!0},p(n,[a]){const m={};a&2&&(m.title=n[1]),a&1&&(m.description=n[0].map(l).join(`


`)),t.$set(m);const i={};a&1&&(i.docs=n[0]),a&2&&(i.name=n[1]),s.$set(i)},i(n){r||(u(t.$$.fragment,n),u(s.$$.fragment,n),r=!0)},o(n){_(t.$$.fragment,n),_(s.$$.fragment,n),r=!1},d(n){d(t,n),n&&B(o),d(s,n)}}}let F=function({params:{category:e}}){return e in g?{props:{docs:g[e],name:e}}:{status:404}};const l=e=>e.name+`

`+e.description;function h(e,t,o){let{docs:s}=t,{name:r}=t;return e.$$set=n=>{"docs"in n&&o(0,s=n.docs),"name"in n&&o(1,r=n.name)},[s,r]}class G extends ${constructor(t){super(),w(this,t,h,S,C,{docs:0,name:1})}}export{G as default,F as load};
