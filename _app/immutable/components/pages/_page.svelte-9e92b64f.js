import{S as K,i as P,s as T,l as g,w as F,a as A,r as b,m as $,n as k,x as H,h as m,c as O,u as y,p,b as j,G as i,y as J,f as L,t as M,z as N,I as Q,v as R,B as U}from"../../chunks/index-3355e286.js";import{b as G}from"../../chunks/paths-6cd3a76e.js";import{S as W}from"../../chunks/SlottedTranslatableKey-cde67c92.js";import{v as q,l as z}from"../../chunks/_docs_all-160493ab.js";import"../../chunks/preload-helper-aa6bc0ce.js";import"../../chunks/translator-f3b27c77.js";import"../../chunks/index-4c809250.js";import"../../chunks/loading-4af838e0.js";function B(o,e,a){const s=o.slice();return s[0]=e[a],s}function X(o){let e=o[3]+"",a;return{c(){a=b(e)},l(s){a=y(s,e)},m(s,l){j(s,a,l)},p(s,l){l&8&&e!==(e=s[3]+"")&&R(a,e)},d(s){s&&m(a)}}}function C(o){let e,a=o[0]+"",s;return{c(){e=g("a"),s=b(a),this.h()},l(l){e=$(l,"A",{href:!0,class:!0});var _=k(e);s=y(_,a),_.forEach(m),this.h()},h(){p(e,"href",G+"/"+o[0]),p(e,"class","svelte-1cwv0mc")},m(l,_){j(l,e,_),i(e,s)},p:U,d(l){l&&m(e)}}}function Y(o){let e,a,s,l,_,v,f,x,I,D,S,w;l=new W({props:{key:"pick-a-version",$$slots:{default:[X,({value:t})=>({3:t}),({value:t})=>t?8:0]},$$scope:{ctx:o}}});let d=Object.keys(q),r=[];for(let t=0;t<d.length;t+=1)r[t]=C(B(o,d,t));return{c(){e=g("div"),a=g("div"),s=g("div"),F(l.$$.fragment),_=A(),v=g("div"),f=g("a"),x=b("latest ("),I=b(z),D=b(")"),S=A();for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=$(t,"DIV",{class:!0});var h=k(e);a=$(h,"DIV",{class:!0});var n=k(a);s=$(n,"DIV",{class:!0});var c=k(s);H(l.$$.fragment,c),c.forEach(m),_=O(n),v=$(n,"DIV",{class:!0});var u=k(v);f=$(u,"A",{href:!0,class:!0});var E=k(f);x=y(E,"latest ("),I=y(E,z),D=y(E,")"),E.forEach(m),S=O(u);for(let V=0;V<r.length;V+=1)r[V].l(u);u.forEach(m),n.forEach(m),h.forEach(m),this.h()},h(){p(s,"class","version-picker-title svelte-1cwv0mc"),p(f,"href",G+"/latest"),p(f,"class","svelte-1cwv0mc"),p(v,"class","version-picker-list svelte-1cwv0mc"),p(a,"class","version-picker-content svelte-1cwv0mc"),p(e,"class","version-picker svelte-1cwv0mc")},m(t,h){j(t,e,h),i(e,a),i(a,s),J(l,s,null),i(a,_),i(a,v),i(v,f),i(f,x),i(f,I),i(f,D),i(v,S);for(let n=0;n<r.length;n+=1)r[n].m(v,null);w=!0},p(t,[h]){const n={};if(h&24&&(n.$$scope={dirty:h,ctx:t}),l.$set(n),h&0){d=Object.keys(q);let c;for(c=0;c<d.length;c+=1){const u=B(t,d,c);r[c]?r[c].p(u,h):(r[c]=C(u),r[c].c(),r[c].m(v,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=d.length}},i(t){w||(L(l.$$.fragment,t),w=!0)},o(t){M(l.$$.fragment,t),w=!1},d(t){t&&m(e),N(l),Q(r,t)}}}class ne extends K{constructor(e){super(),P(this,e,null,Y,T,{})}}export{ne as default};