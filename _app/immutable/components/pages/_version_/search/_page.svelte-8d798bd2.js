import{S as R,i as W,s as j,a as k,e as b,c as y,b as m,f as g,d as C,t as w,h,I as z,K as E,o as F,a2 as K,r as M,u as P,w as I,x as T,y as v,a6 as V,aa as A,g as H,z as D,l as G,m as J,n as L,p as O,B as Q,R as U,a4 as X}from"../../../../chunks/index-25ab9262.js";import{D as Y}from"../../../../chunks/statistics-03bf7032.js";import{w as Z,p as x}from"../../../../chunks/translator-0859b5fb.js";import"../../../../chunks/paths-6cd3a76e.js";import"../../../../chunks/index-473d5c5c.js";import"../../../../chunks/preload-helper-aa6bc0ce.js";import"../../../../chunks/TranslatableKey-c3651ca3.js";import"../../../../chunks/loading-d3ce8bfb.js";function N(r,e,l){const o=r.slice();return o[11]=e[l],o}function q(r){let e;return{c(){e=M("Waiting for the pool to finish fetching languages")},l(l){e=P(l,"Waiting for the pool to finish fetching languages")},m(l,o){m(l,e,o)},d(l){l&&h(e)}}}function B(r){let e,l,o;const _=[r[11],{classi:r[5]},{setId:!1},{path:r[0].base}];var s=r[11].this;function u(n){let c={};for(let a=0;a<_.length;a+=1)c=X(c,_[a]);return{props:c}}return s&&(e=new s(u())),{c(){e&&I(e.$$.fragment),l=b()},l(n){e&&T(e.$$.fragment,n),l=b()},m(n,c){e&&v(e,n,c),m(n,l,c),o=!0},p(n,c){const a=c&37?V(_,[c&4&&A(n[11]),c&32&&{classi:n[5]},_[2],c&1&&{path:n[0].base}]):{};if(s!==(s=n[11].this)){if(e){H();const t=e;w(t.$$.fragment,1,0,()=>{D(t,1)}),C()}s?(e=new s(u()),I(e.$$.fragment),g(e.$$.fragment,1),v(e,l.parentNode,l)):e=null}else s&&e.$set(a)},i(n){o||(e&&g(e.$$.fragment,n),o=!0)},o(n){e&&w(e.$$.fragment,n),o=!1},d(n){n&&h(l),e&&D(e,n)}}}function S(r){let e;return{c(){e=G("div"),this.h()},l(l){e=J(l,"DIV",{class:!0}),L(e).forEach(h),this.h()},h(){O(e,"class","visibility-notifier")},m(l,o){m(l,e,o),r[8](e)},p:Q,d(l){l&&h(e),r[8](null)}}}function $(r){let e,l,o,_,s=r[3]&&q(),u=r[2],n=[];for(let t=0;t<u.length;t+=1)n[t]=B(N(r,u,t));const c=t=>w(n[t],1,1,()=>{n[t]=null});let a=r[1]!==null&&S(r);return{c(){s&&s.c(),e=k();for(let t=0;t<n.length;t+=1)n[t].c();l=k(),a&&a.c(),o=b()},l(t){s&&s.l(t),e=y(t);for(let i=0;i<n.length;i+=1)n[i].l(t);l=y(t),a&&a.l(t),o=b()},m(t,i){s&&s.m(t,i),m(t,e,i);for(let f=0;f<n.length;f+=1)n[f].m(t,i);m(t,l,i),a&&a.m(t,i),m(t,o,i),_=!0},p(t,[i]){if(t[3]?s||(s=q(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),i&37){u=t[2];let f;for(f=0;f<u.length;f+=1){const d=N(t,u,f);n[f]?(n[f].p(d,i),g(n[f],1)):(n[f]=B(d),n[f].c(),g(n[f],1),n[f].m(l.parentNode,l))}for(H(),f=u.length;f<n.length;f+=1)c(f);C()}t[1]!==null?a?a.p(t,i):(a=S(t),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},i(t){if(!_){for(let i=0;i<u.length;i+=1)g(n[i]);_=!0}},o(t){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)w(n[i]);_=!1},d(t){s&&s.d(t),t&&h(e),z(n,t),t&&h(l),a&&a.d(t),t&&h(o)}}}function ee(r,e,l){let o;E(r,Z,p=>l(7,o=p));let{data:_}=e,s=new Y(_.docs),u=null,n=null,c=[],a=!1,t="",i;function f(){if(u!==null){if(x.activeTransfers.length>0){l(3,a=!0);return}if(l(3,a=!1),console.log(window.innerHeight),i.getBoundingClientRect().top<window.innerHeight*2){let p=u.next();p.done?l(1,u=null):l(2,c=[...c,p.value])}}}F(()=>{n=setInterval(f,1)}),K(()=>{n!==null&&clearInterval(n)});function d(p){U[p?"unshift":"push"](()=>{i=p,l(4,i)})}return r.$$set=p=>{"data"in p&&l(0,_=p.data)},r.$$.update=()=>{r.$$.dirty&193&&t!==o.language&&(l(1,u=null),l(2,c=[]),l(6,t=o.language),_.query!==null&&l(1,u=s.search(_.query)))},[_,u,c,a,i,s,t,o,d]}class fe extends R{constructor(e){super(),W(this,e,ee,$,j,{data:0})}}export{fe as default};
