import{s as $,e as u,i as g,d as b,K as y,A as D}from"../chunks/scheduler.5e685358.js";import{S as v,i as N,a as c,c as k,t as f,g as w,b as A,d as I,m as S,e as q}from"../chunks/index.d48c456e.js";import{e as _,w as B}from"../chunks/SlottedTranslatableKey.2a615474.js";import{D as C}from"../chunks/DescribeAny.4a35d0c3.js";import{D as F}from"../chunks/statistics.1aa31c95.js";function p(s,o,r){const e=s.slice();e[3]=o[r];const t=e[2].findFromQualifiedName(e[3]);return e[4]=t,e}function h(s){let o,r;return o=new C({props:{classi:s[2],what:s[4],setId:!1,path:s[0].base}}),{c(){A(o.$$.fragment)},l(e){I(o.$$.fragment,e)},m(e,t){S(o,e,t),r=!0},p(e,t){const i={};t&2&&(i.what=e[4]),t&1&&(i.path=e[0].base),o.$set(i)},i(e){r||(c(o.$$.fragment,e),r=!0)},o(e){f(o.$$.fragment,e),r=!1},d(e){q(o,e)}}}function d(s){let o,r,e=s[4]!==null&&h(s);return{c(){e&&e.c(),o=u()},l(t){e&&e.l(t),o=u()},m(t,i){e&&e.m(t,i),g(t,o,i),r=!0},p(t,i){t[4]!==null?e?(e.p(t,i),i&2&&c(e,1)):(e=h(t),e.c(),c(e,1),e.m(o.parentNode,o)):e&&(w(),f(e,1,1,()=>{e=null}),k())},i(t){r||(c(e),r=!0)},o(t){f(e),r=!1},d(t){t&&b(o),e&&e.d(t)}}}function K(s){let o,r,e=_(s[1].favourites),t=[];for(let n=0;n<e.length;n+=1)t[n]=d(p(s,e,n));const i=n=>f(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();o=u()},l(n){for(let l=0;l<t.length;l+=1)t[l].l(n);o=u()},m(n,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,l);g(n,o,l),r=!0},p(n,[l]){if(l&7){e=_(n[1].favourites);let a;for(a=0;a<e.length;a+=1){const m=p(n,e,a);t[a]?(t[a].p(m,l),c(t[a],1)):(t[a]=d(m),t[a].c(),c(t[a],1),t[a].m(o.parentNode,o))}for(w(),a=e.length;a<t.length;a+=1)i(a);k()}},i(n){if(!r){for(let l=0;l<e.length;l+=1)c(t[l]);r=!0}},o(n){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)f(t[l]);r=!1},d(n){n&&b(o),y(t,n)}}}function P(s,o,r){let e;D(s,B,n=>r(1,e=n));let{data:t}=o,i=new F(t.docs);return s.$$set=n=>{"data"in n&&r(0,t=n.data)},[t,e,i]}class H extends v{constructor(o){super(),N(this,o,P,K,$,{data:0})}}export{H as component};
