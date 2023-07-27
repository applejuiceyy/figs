import{s as Q,f as S,a as C,g as j,h as z,M as ue,c as E,d as k,j as y,L as X,k as D,i as w,v as Y,J as T,Q as _e,B as he,e as K,K as R,p as ge}from"../chunks/scheduler.a6a8292b.js";import{S as A,i as U,a as p,g as H,t as v,c as P,b as N,d as O,m as G,e as q}from"../chunks/index.9cbc43f6.js";import{e as M}from"../chunks/SlottedTranslatableKey.a3ee74c8.js";import{M as me}from"../chunks/MetaTags.3431df83.js";import{D as pe,M as de,F as be,C as $e,E as ve}from"../chunks/statistics.4585bc04.js";import{g as ke}from"../chunks/globals.7f7f1b26.js";let we=function({params:r}){return{base:`/${r.version}/all#`,showingEverything:!0,everythingSwitcher:`/${r.version}/`}};const Ke=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"})),ye="/figs/_app/immutable/assets/dirt.fb045025.png",Ie="/figs/_app/immutable/assets/grass_block.dedaa017.png",De="/figs/_app/immutable/assets/stone.0096954e.png",Me="/figs/_app/immutable/assets/sun.d66e4fcc.png",Te="/figs/_app/immutable/assets/sign.c804ceb9.png";function Ce(r){let e,s,t="Thanks for enjoying this website :)",i,c,g;return{c(){e=S("div"),s=S("div"),s.textContent=t,i=C(),c=S("img"),this.h()},l(m){e=j(m,"DIV",{class:!0});var a=z(e);s=j(a,"DIV",{class:!0,"data-svelte-h":!0}),ue(s)!=="svelte-k5joqn"&&(s.textContent=t),i=E(a),c=j(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(k),this.h()},h(){y(s,"class","disclaimer svelte-7vpor3"),X(c.src,g=Te)||y(c,"src",g),y(c,"alt",""),y(c,"class","svelte-7vpor3"),D(c,"width","100%"),y(e,"class","block svelte-7vpor3")},m(m,a){w(m,e,a),Y(e,s),Y(e,i),Y(e,c)},p:T,i:T,o:T,d(m){m&&k(e)}}}class Ee extends A{constructor(e){super(),U(this,e,null,Ce,Q,{})}}const{window:L}=ke;function W(r,e,s){const t=r.slice();return t[8]=e[s],t}function Z(r){let e,s,t=`translate(calc(20% - ${r[3]/10}px), ${Math.pow(r[3],3)/5e4}px)`,i,c,g,m=M(r[4]),a=[];for(let f=0;f<m.length;f+=1)a[f]=x(W(r,m,f));const h=f=>v(a[f],1,1,()=>{a[f]=null});return{c(){e=S("img"),i=C();for(let f=0;f<a.length;f+=1)a[f].c();c=K(),this.h()},l(f){e=j(f,"IMG",{alt:!0,class:!0,src:!0}),i=E(f);for(let _=0;_<a.length;_+=1)a[_].l(f);c=K(),this.h()},h(){y(e,"alt",""),y(e,"class","sun svelte-1a03df1"),X(e.src,s=Me)||y(e,"src",s),D(e,"transform",t),D(e,"opacity",1-r[3]/500)},m(f,_){w(f,e,_),w(f,i,_);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(f,_);w(f,c,_),g=!0},p(f,_){if(_&8&&t!==(t=`translate(calc(20% - ${f[3]/10}px), ${Math.pow(f[3],3)/5e4}px)`)&&D(e,"transform",t),_&8&&D(e,"opacity",1-f[3]/500),_&48){m=M(f[4]);let u;for(u=0;u<m.length;u+=1){const J=W(f,m,u);a[u]?(a[u].p(J,_),p(a[u],1)):(a[u]=x(J),a[u].c(),p(a[u],1),a[u].m(c.parentNode,c))}for(H(),u=m.length;u<a.length;u+=1)h(u);P()}},i(f){if(!g){for(let _=0;_<m.length;_+=1)p(a[_]);g=!0}},o(f){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)v(a[_]);g=!1},d(f){f&&(k(e),k(i),k(c)),R(a,f)}}}function Se(r){let e,s,t,i;return{c(){e=S("div"),s=S("img"),i=C(),this.h()},l(c){e=j(c,"DIV",{class:!0});var g=z(e);s=j(g,"IMG",{alt:!0,src:!0,class:!0}),i=E(g),g.forEach(k),this.h()},h(){y(s,"alt",""),X(s.src,t=r[5][r[8]])||y(s,"src",t),y(s,"class","svelte-1a03df1"),D(s,"width","100%"),y(e,"class","block")},m(c,g){w(c,e,g),Y(e,s),Y(e,i)},p:T,i:T,o:T,d(c){c&&k(e)}}}function je(r){let e;return{c(){e=S("div")},l(s){e=j(s,"DIV",{}),z(e).forEach(k)},m(s,t){w(s,e,t)},p:T,i:T,o:T,d(s){s&&k(e)}}}function Ve(r){let e,s;return e=new Ee({}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){G(e,t,i),s=!0},p:T,i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function x(r){let e,s,t,i;const c=[Ve,je,Se],g=[];function m(a,h){return a[8]===4?0:a[5][a[8]]===null?1:2}return e=m(r),s=g[e]=c[e](r),{c(){s.c(),t=K()},l(a){s.l(a),t=K()},m(a,h){g[e].m(a,h),w(a,t,h),i=!0},p(a,h){s.p(a,h)},i(a){i||(p(s),i=!0)},o(a){v(s),i=!1},d(a){a&&k(t),g[e].d(a)}}}function Be(r){let e=!1,s=()=>{e=!1},t,i,c=`linear-gradient(#00000000, rgb(00, ${200-r[3]/2}, ${255-r[3]/2}) 80%)`,g,m,a;_e(r[6]);let h=r[1]&&Z(r);return{c(){i=S("div"),h&&h.c(),this.h()},l(f){i=j(f,"DIV",{"aria-hidden":!0,class:!0});var _=z(i);h&&h.l(_),_.forEach(k),this.h()},h(){y(i,"aria-hidden","true"),y(i,"class","sky svelte-1a03df1"),D(i,"visibility",r[1]?"visible":"hidden"),D(i,"background-image",c)},m(f,_){w(f,i,_),h&&h.m(i,null),r[7](i),g=!0,m||(a=he(L,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),r[6]()}),m=!0)},p(f,[_]){_&1&&!e&&(e=!0,clearTimeout(t),scrollTo(L.pageXOffset,f[0]),t=setTimeout(s,100)),f[1]?h?(h.p(f,_),_&2&&p(h,1)):(h=Z(f),h.c(),p(h,1),h.m(i,null)):h&&(H(),v(h,1,1,()=>{h=null}),P()),_&2&&D(i,"visibility",f[1]?"visible":"hidden"),_&8&&c!==(c=`linear-gradient(#00000000, rgb(00, ${200-f[3]/2}, ${255-f[3]/2}) 80%)`)&&D(i,"background-image",c)},i(f){g||(p(h),g=!0)},o(f){v(h),g=!1},d(f){f&&k(i),h&&h.d(),r[7](null),m=!1,a()}}}function Fe(r){return r.getBoundingClientRect().top<=window.innerHeight}function Ne(r,e,s){const t=[0,1,1,1,1,0,0,0,0,4,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],i=[null,Ie,ye,De];let c,g,m=!1,a=null;function h(){s(0,c=L.pageYOffset)}function f(_){ge[_?"unshift":"push"](()=>{a=_,s(2,a)})}return r.$$.update=()=>{r.$$.dirty&7&&(s(1,m=a===null?!1:Fe(a)),m&&s(3,g=document.body.offsetHeight-c-window.innerHeight))},[c,m,a,g,t,i,h,f]}class Oe extends A{constructor(e){super(),U(this,e,Ne,Be,Q,{})}}function ee(r,e,s){const t=r.slice();return t[6]=e[s],t}function te(r,e,s){const t=r.slice();return t[9]=e[s],t}function le(r,e,s){const t=r.slice();return t[12]=e[s],t}function se(r,e,s){const t=r.slice();return t[15]=e[s],t}function ne(r){let e,s;return e=new de({props:{classi:r[5],method:r[15],hostClass:r[5].globalType,path:r[0].base}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){G(e,t,i),s=!0},p(t,i){const c={};i&2&&(c.method=t[15]),i&1&&(c.path=t[0].base),e.$set(c)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function re(r){let e,s;return e=new be({props:{classi:r[5],field:r[12],hostClass:r[5].globalType,inlineTypeDocs:!0,path:r[0].base}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){G(e,t,i),s=!0},p(t,i){const c={};i&4&&(c.field=t[12]),i&1&&(c.path=t[0].base),e.$set(c)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function ie(r){let e,s;return e=new $e({props:{classi:r[5],klass:r[9],path:r[0].base}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){G(e,t,i),s=!0},p(t,i){const c={};i&8&&(c.klass=t[9]),i&1&&(c.path=t[0].base),e.$set(c)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function oe(r){let e,s;return e=new ve({props:{classi:r[5],enum_:r[6],path:r[0].base}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){G(e,t,i),s=!0},p(t,i){const c={};i&16&&(c.enum_=t[6]),i&1&&(c.path=t[0].base),e.$set(c)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Ge(r){let e,s,t,i,c,g,m,a,h,f;e=new me({props:{title:"FIGS!!!",description:"The thingy applejuice made because they're bored!\\n(Now Rewritten :flushed:)"}});let _=M(r[1]),u=[];for(let l=0;l<_.length;l+=1)u[l]=ne(se(r,_,l));const J=l=>v(u[l],1,1,()=>{u[l]=null});let V=M(r[2]),d=[];for(let l=0;l<V.length;l+=1)d[l]=re(le(r,V,l));const ae=l=>v(d[l],1,1,()=>{d[l]=null});let B=M(r[3]),b=[];for(let l=0;l<B.length;l+=1)b[l]=ie(te(r,B,l));const ce=l=>v(b[l],1,1,()=>{b[l]=null});let F=M(r[4]),$=[];for(let l=0;l<F.length;l+=1)$[l]=oe(ee(r,F,l));const fe=l=>v($[l],1,1,()=>{$[l]=null});return h=new Oe({}),{c(){N(e.$$.fragment),s=C();for(let l=0;l<u.length;l+=1)u[l].c();t=C();for(let l=0;l<d.length;l+=1)d[l].c();i=C();for(let l=0;l<b.length;l+=1)b[l].c();c=C(),g=S("div"),m=C();for(let l=0;l<$.length;l+=1)$[l].c();a=C(),N(h.$$.fragment),this.h()},l(l){O(e.$$.fragment,l),s=E(l);for(let o=0;o<u.length;o+=1)u[o].l(l);t=E(l);for(let o=0;o<d.length;o+=1)d[o].l(l);i=E(l);for(let o=0;o<b.length;o+=1)b[o].l(l);c=E(l),g=j(l,"DIV",{}),z(g).forEach(k),m=E(l);for(let o=0;o<$.length;o+=1)$[o].l(l);a=E(l),O(h.$$.fragment,l),this.h()},h(){D(g,"margin-top","100px")},m(l,o){G(e,l,o),w(l,s,o);for(let n=0;n<u.length;n+=1)u[n]&&u[n].m(l,o);w(l,t,o);for(let n=0;n<d.length;n+=1)d[n]&&d[n].m(l,o);w(l,i,o);for(let n=0;n<b.length;n+=1)b[n]&&b[n].m(l,o);w(l,c,o),w(l,g,o),w(l,m,o);for(let n=0;n<$.length;n+=1)$[n]&&$[n].m(l,o);w(l,a,o),G(h,l,o),f=!0},p(l,[o]){if(o&35){_=M(l[1]);let n;for(n=0;n<_.length;n+=1){const I=se(l,_,n);u[n]?(u[n].p(I,o),p(u[n],1)):(u[n]=ne(I),u[n].c(),p(u[n],1),u[n].m(t.parentNode,t))}for(H(),n=_.length;n<u.length;n+=1)J(n);P()}if(o&37){V=M(l[2]);let n;for(n=0;n<V.length;n+=1){const I=le(l,V,n);d[n]?(d[n].p(I,o),p(d[n],1)):(d[n]=re(I),d[n].c(),p(d[n],1),d[n].m(i.parentNode,i))}for(H(),n=V.length;n<d.length;n+=1)ae(n);P()}if(o&41){B=M(l[3]);let n;for(n=0;n<B.length;n+=1){const I=te(l,B,n);b[n]?(b[n].p(I,o),p(b[n],1)):(b[n]=ie(I),b[n].c(),p(b[n],1),b[n].m(c.parentNode,c))}for(H(),n=B.length;n<b.length;n+=1)ce(n);P()}if(o&49){F=M(l[4]);let n;for(n=0;n<F.length;n+=1){const I=ee(l,F,n);$[n]?($[n].p(I,o),p($[n],1)):($[n]=oe(I),$[n].c(),p($[n],1),$[n].m(a.parentNode,a))}for(H(),n=F.length;n<$.length;n+=1)fe(n);P()}},i(l){if(!f){p(e.$$.fragment,l);for(let o=0;o<_.length;o+=1)p(u[o]);for(let o=0;o<V.length;o+=1)p(d[o]);for(let o=0;o<B.length;o+=1)p(b[o]);for(let o=0;o<F.length;o+=1)p($[o]);p(h.$$.fragment,l),f=!0}},o(l){v(e.$$.fragment,l),u=u.filter(Boolean);for(let o=0;o<u.length;o+=1)v(u[o]);d=d.filter(Boolean);for(let o=0;o<d.length;o+=1)v(d[o]);b=b.filter(Boolean);for(let o=0;o<b.length;o+=1)v(b[o]);$=$.filter(Boolean);for(let o=0;o<$.length;o+=1)v($[o]);v(h.$$.fragment,l),f=!1},d(l){l&&(k(s),k(t),k(i),k(c),k(g),k(m),k(a)),q(e,l),R(u,l),R(d,l),R(b,l),R($,l),q(h,l)}}}function qe(r,e,s){let{data:t}=e,i=new pe(t.docs),c,g,m,a;return r.$$set=h=>{"data"in h&&s(0,t=h.data)},s(1,c=i.globalFunctions.sort(i.comparer)),s(2,g=i.globalVariables.sort(i.comparer)),s(3,m=Object.values(i.nonSingletonClasses).sort(i.comparer)),s(4,a=Object.values(i.enums).sort(i.comparer)),[t,c,g,m,a,i]}class Le extends A{constructor(e){super(),U(this,e,qe,Ge,Q,{data:0})}}export{Le as component,Ke as universal};