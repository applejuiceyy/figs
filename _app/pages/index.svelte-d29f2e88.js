import{S as B,i as F,s as G,e as u,t as b,c as m,a as p,h as x,d as v,b as h,g as R,J as i,E as A,k as O,m as P,ab as H}from"../chunks/index-291ebab7.js";import{b as z}from"../chunks/preload-helper-7fa5b643.js";import{l as S,v as q}from"../chunks/_docs_latest-a2ab2415.js";function C(d,t,c){const r=d.slice();return r[0]=t[c],r}function J(d){let t,c=d[0]+"",r,g;return{c(){t=u("a"),r=b(c),this.h()},l(n){t=m(n,"A",{href:!0,class:!0});var a=p(t);r=x(a,c),a.forEach(v),this.h()},h(){h(t,"href",g=z+"/"+d[0]),h(t,"class","svelte-1cwv0mc")},m(n,a){R(n,t,a),i(t,r)},p:A,d(n){n&&v(t)}}}function K(d){let t,c,r,g,n,a,o,y,D,I,V,f=Object.keys(q),l=[];for(let s=0;s<f.length;s+=1)l[s]=J(C(d,f,s));return{c(){t=u("div"),c=u("div"),r=u("div"),g=b("Pick a version >:/"),n=O(),a=u("div"),o=u("a"),y=b("latest ("),D=b(S),I=b(")"),V=O();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=m(s,"DIV",{class:!0});var _=p(t);c=m(_,"DIV",{class:!0});var e=p(c);r=m(e,"DIV",{class:!0});var k=p(r);g=x(k,"Pick a version >:/"),k.forEach(v),n=P(e),a=m(e,"DIV",{class:!0});var E=p(a);o=m(E,"A",{href:!0,class:!0});var w=p(o);y=x(w,"latest ("),D=x(w,S),I=x(w,")"),w.forEach(v),V=P(E);for(let j=0;j<l.length;j+=1)l[j].l(E);E.forEach(v),e.forEach(v),_.forEach(v),this.h()},h(){h(r,"class","version-picker-title svelte-1cwv0mc"),h(o,"href",z+"/latest"),h(o,"class","svelte-1cwv0mc"),h(a,"class","version-picker-list svelte-1cwv0mc"),h(c,"class","version-picker-content svelte-1cwv0mc"),h(t,"class","version-picker svelte-1cwv0mc")},m(s,_){R(s,t,_),i(t,c),i(c,r),i(r,g),i(c,n),i(c,a),i(a,o),i(o,y),i(o,D),i(o,I),i(a,V);for(let e=0;e<l.length;e+=1)l[e].m(a,null)},p(s,[_]){if(_&0){f=Object.keys(q);let e;for(e=0;e<f.length;e+=1){const k=C(s,f,e);l[e]?l[e].p(k,_):(l[e]=J(k),l[e].c(),l[e].m(a,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=f.length}},i:A,o:A,d(s){s&&v(t),H(l,s)}}}class Q extends B{constructor(t){super(),F(this,t,null,K,G,{})}}export{Q as default};