import{F as xe,S as me,i as ve,s as be,w as ne,x as se,y as re,q as j,o as V,B as le,k as K,l as fe,m as x,g as U,n as oe,p as ce,G as Te,d as B,t as X,h as Z,j as de,e as Y,c as Q,a as W,b as P,H as D,I as Ae,E as ge,J as et,K as tt,L as nt,M as $e,N as rt,O as Ue,P as lt,Q as st,R as at,T as it,U as Be,V as Ce,f as _e,W as ye,X as ot,Y as ct,Z as ft,_ as ut,$ as ht,v as pt,a0 as _t,a1 as gt}from"../chunks/index-d1c4e174.js";import{b as ae}from"../chunks/preload-helper-48cdfb0e.js";import{n as dt}from"../chunks/svgNamespace-ebff0b03.js";import{c as Ie,S as we,m as mt,f as vt,g as bt,r as kt,e as yt,k as He,a as $t,M as wt,C as Mt,b as Et,d as St,s as De}from"../chunks/ClassDescribe-544f7ae4.js";var Pe="Pre-5",Tt="/figs/_app/assets/cheese-9bdf176f.png";function At(c,t){let e=[],n=c.getBoundingClientRect(),s=(k,_)=>{if(console.log(n.top+_.data.y),n.top+_.data.y<-_.data.scale*100||n.top+_.data.y>window.innerHeight+_.data.scale*100){k.remove();return}k.parentElement===null&&c.appendChild(k),k.setAttributeNS(null,"transform",`translate(${_.data.x},${_.data.y}) rotate(${_.data.angle}) scale(${_.data.scale}, ${_.data.scale})`)},u=()=>{if(n=c.getBoundingClientRect(),Math.random()>.99&&t){let k=document.createElementNS(dt,"image");k.setAttributeNS(null,"href",Tt),c.appendChild(k),e.push({element:k,data:{x:Math.random()*c.clientWidth,y:-50,ym:Math.random()*.1+1,scale:Math.random()+(Math.random()>.99?5:1),angle:Math.random()*360,anglem:(Math.random()-.5)*.1}})}for(let k=e.length-1;k>=0;k--){let _=e[k];_.data.y+=_.data.ym,_.data.angle+=_.data.anglem,_.data.y>c.clientHeight&&(e.splice(k,1),_.element.remove()),s(_.element,_)}t||e.length>0?v=requestAnimationFrame(u):v=null},v=requestAnimationFrame(u);return{destroy(){v&&cancelAnimationFrame(v)},update(k){v===null&&k&&(v=requestAnimationFrame(u)),t=k}}}const It=()=>{const c=xe("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session,updated:c.updated}},Xe={subscribe(c){return It().page.subscribe(c)}};function Le(c,t,e){const n=c.slice();return n[4]=t[e],n}function je(c,t,e){const n=c.slice();return n[7]=t[e],n}function Ht(c){let t=c[7].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,s){U(n,e,s)},p(n,s){s&2&&t!==(t=n[7].name+"")&&de(e,t)},d(n){n&&B(e)}}}function Fe(c){let t,e;return t=new we({props:{href:ae+c[0]+c[7].name,src:mt,$$slots:{default:[Ht]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&3&&(u.href=ae+n[0]+n[7].name),s&1026&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Nt(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,s){U(n,e,s)},p(n,s){s&4&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&B(e)}}}function Re(c){let t,e;return t=new we({props:{href:ae+c[0]+c[4].name,src:vt,$$slots:{default:[Nt]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&5&&(u.href=ae+n[0]+n[4].name),s&1028&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Ot(c){let t,e,n,s=c[1],u=[];for(let g=0;g<s.length;g+=1)u[g]=Fe(je(c,s,g));const v=g=>V(u[g],1,1,()=>{u[g]=null});let k=c[2],_=[];for(let g=0;g<k.length;g+=1)_[g]=Re(Le(c,k,g));const M=g=>V(_[g],1,1,()=>{_[g]=null});return{c(){for(let g=0;g<u.length;g+=1)u[g].c();t=K();for(let g=0;g<_.length;g+=1)_[g].c();e=fe()},l(g){for(let w=0;w<u.length;w+=1)u[w].l(g);t=x(g);for(let w=0;w<_.length;w+=1)_[w].l(g);e=fe()},m(g,w){for(let m=0;m<u.length;m+=1)u[m].m(g,w);U(g,t,w);for(let m=0;m<_.length;m+=1)_[m].m(g,w);U(g,e,w),n=!0},p(g,[w]){if(w&3){s=g[1];let m;for(m=0;m<s.length;m+=1){const H=je(g,s,m);u[m]?(u[m].p(H,w),j(u[m],1)):(u[m]=Fe(H),u[m].c(),j(u[m],1),u[m].m(t.parentNode,t))}for(oe(),m=s.length;m<u.length;m+=1)v(m);ce()}if(w&5){k=g[2];let m;for(m=0;m<k.length;m+=1){const H=Le(g,k,m);_[m]?(_[m].p(H,w),j(_[m],1)):(_[m]=Re(H),_[m].c(),j(_[m],1),_[m].m(e.parentNode,e))}for(oe(),m=k.length;m<_.length;m+=1)M(m);ce()}},i(g){if(!n){for(let w=0;w<s.length;w+=1)j(u[w]);for(let w=0;w<k.length;w+=1)j(_[w]);n=!0}},o(g){u=u.filter(Boolean);for(let w=0;w<u.length;w+=1)V(u[w]);_=_.filter(Boolean);for(let w=0;w<_.length;w+=1)V(_[w]);n=!1},d(g){Te(u,g),g&&B(t),Te(_,g),g&&B(e)}}}function Bt(c,t,e){let{klass:n}=t,s,u,{path:v}=t;return c.$$set=k=>{"klass"in k&&e(3,n=k.klass),"path"in k&&e(0,v=k.path)},c.$$.update=()=>{c.$$.dirty&8&&e(1,s=n.methods.sort(Ie)),c.$$.dirty&8&&e(2,u=n.fields.sort(Ie))},[v,s,u,n]}class Ct extends me{constructor(t){super(),ve(this,t,Bt,Ot,be,{klass:3,path:0})}}function Ve(c,t,e){const n=c.slice();return n[4]=t[e],n}function Ge(c,t,e){const n=c.slice();return n[4]=t[e],n}function Dt(c){let t,e;return t=new we({props:{href:ae+"/all",src:He,$$slots:{default:[Lt]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&512&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Pt(c){let t,e;return t=new we({props:{href:ae,src:He,$$slots:{default:[jt]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&512&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Lt(c){let t;return{c(){t=X("Show everything")},l(e){t=Z(e,"Show everything")},m(e,n){U(e,t,n)},d(e){e&&B(t)}}}function jt(c){let t;return{c(){t=X("Show not everything")},l(e){t=Z(e,"Show not everything")},m(e,n){U(e,t,n)},d(e){e&&B(t)}}}function Ft(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,s){U(n,e,s)},p(n,s){s&4&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&B(e)}}}function qe(c){let t,e;return t=new we({props:{href:ae+c[0]+c[4].name,src:He,$$slots:{default:[Ft]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&5&&(u.href=ae+n[0]+n[4].name),s&516&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Rt(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,s){U(n,e,s)},p(n,s){s&8&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&B(e)}}}function ze(c){let t,e;return t=new we({props:{href:ae+c[0]+c[4].name,src:He,$$slots:{default:[Rt]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&9&&(u.href=ae+n[0]+n[4].name),s&520&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Vt(c){let t,e,n,s,u,v,k,_,M,g,w,m,H,R,G,J,f,r,l,o,i;const h=[Pt,Dt],d=[];function S(y,$){return y[1]?0:1}n=S(c),s=d[n]=h[n](c),g=new Ct({props:{klass:bt,path:c[0]}});let T=c[2],b=[];for(let y=0;y<T.length;y+=1)b[y]=qe(Ge(c,T,y));const A=y=>V(b[y],1,1,()=>{b[y]=null});let E=c[3],C=[];for(let y=0;y<E.length;y+=1)C[y]=ze(Ve(c,E,y));const I=y=>V(C[y],1,1,()=>{C[y]=null});return{c(){t=Y("div"),e=Y("div"),s.c(),u=K(),v=Y("span"),k=X("Global Objects"),_=K(),M=Y("div"),ne(g.$$.fragment),w=K(),m=Y("span"),H=X("Miscellaneous Types"),R=K(),G=Y("div");for(let y=0;y<b.length;y+=1)b[y].c();J=K(),f=Y("span"),r=X("Miscellaneous Enums"),l=K(),o=Y("div");for(let y=0;y<C.length;y+=1)C[y].c();this.h()},l(y){t=Q(y,"DIV",{class:!0});var $=W(t);e=Q($,"DIV",{class:!0});var F=W(e);s.l(F),F.forEach(B),u=x($),v=Q($,"SPAN",{class:!0});var te=W(v);k=Z(te,"Global Objects"),te.forEach(B),_=x($),M=Q($,"DIV",{class:!0});var O=W(M);se(g.$$.fragment,O),O.forEach(B),w=x($),m=Q($,"SPAN",{class:!0});var ee=W(m);H=Z(ee,"Miscellaneous Types"),ee.forEach(B),R=x($),G=Q($,"DIV",{class:!0});var q=W(G);for(let z=0;z<b.length;z+=1)b[z].l(q);q.forEach(B),J=x($),f=Q($,"SPAN",{class:!0});var N=W(f);r=Z(N,"Miscellaneous Enums"),N.forEach(B),l=x($),o=Q($,"DIV",{class:!0});var L=W(o);for(let z=0;z<C.length;z+=1)C[z].l(L);L.forEach(B),$.forEach(B),this.h()},h(){P(e,"class","fields-container svelte-10srbja"),P(v,"class","tab svelte-10srbja"),P(M,"class","fields-container svelte-10srbja"),P(m,"class","tab svelte-10srbja"),P(G,"class","fields-container svelte-10srbja"),P(f,"class","tab svelte-10srbja"),P(o,"class","fields-container svelte-10srbja"),P(t,"class","sidebar-viewer svelte-10srbja")},m(y,$){U(y,t,$),D(t,e),d[n].m(e,null),D(t,u),D(t,v),D(v,k),D(t,_),D(t,M),re(g,M,null),D(t,w),D(t,m),D(m,H),D(t,R),D(t,G);for(let F=0;F<b.length;F+=1)b[F].m(G,null);D(t,J),D(t,f),D(f,r),D(t,l),D(t,o);for(let F=0;F<C.length;F+=1)C[F].m(o,null);i=!0},p(y,[$]){let F=n;n=S(y),n===F?d[n].p(y,$):(oe(),V(d[F],1,1,()=>{d[F]=null}),ce(),s=d[n],s?s.p(y,$):(s=d[n]=h[n](y),s.c()),j(s,1),s.m(e,null));const te={};if($&1&&(te.path=y[0]),g.$set(te),$&5){T=y[2];let O;for(O=0;O<T.length;O+=1){const ee=Ge(y,T,O);b[O]?(b[O].p(ee,$),j(b[O],1)):(b[O]=qe(ee),b[O].c(),j(b[O],1),b[O].m(G,null))}for(oe(),O=T.length;O<b.length;O+=1)A(O);ce()}if($&9){E=y[3];let O;for(O=0;O<E.length;O+=1){const ee=Ve(y,E,O);C[O]?(C[O].p(ee,$),j(C[O],1)):(C[O]=ze(ee),C[O].c(),j(C[O],1),C[O].m(o,null))}for(oe(),O=E.length;O<C.length;O+=1)I(O);ce()}},i(y){if(!i){j(s),j(g.$$.fragment,y);for(let $=0;$<T.length;$+=1)j(b[$]);for(let $=0;$<E.length;$+=1)j(C[$]);i=!0}},o(y){V(s),V(g.$$.fragment,y),b=b.filter(Boolean);for(let $=0;$<b.length;$+=1)V(b[$]);C=C.filter(Boolean);for(let $=0;$<C.length;$+=1)V(C[$]);i=!1},d(y){y&&B(t),d[n].d(),le(g),Te(b,y),Te(C,y)}}}function Gt(c,t,e){let n,s,{path:u}=t,{everything:v}=t;return c.$$set=k=>{"path"in k&&e(0,u=k.path),"everything"in k&&e(1,v=k.everything)},e(2,n=Object.values(kt).sort(Ie)),e(3,s=Object.values(yt).sort(Ie)),[u,v,n,s]}class qt extends me{constructor(t){super(),ve(this,t,Gt,Vt,be,{path:0,everything:1})}}function zt(c){let t;return{c(){t=X("Not Found")},l(e){t=Z(e,"Not Found")},m(e,n){U(e,t,n)},p:ge,i:ge,o:ge,d(e){e&&B(t)}}}function Wt(c){let t,e,n,s;const u=[Yt,Jt],v=[];function k(_,M){return _[0].type==="class"?0:_[0].type==="method"?1:-1}return~(t=k(c))&&(e=v[t]=u[t](c)),{c(){e&&e.c(),n=fe()},l(_){e&&e.l(_),n=fe()},m(_,M){~t&&v[t].m(_,M),U(_,n,M),s=!0},p(_,M){let g=t;t=k(_),t===g?~t&&v[t].p(_,M):(e&&(oe(),V(v[g],1,1,()=>{v[g]=null}),ce()),~t?(e=v[t],e?e.p(_,M):(e=v[t]=u[t](_),e.c()),j(e,1),e.m(n.parentNode,n)):e=null)},i(_){s||(j(e),s=!0)},o(_){V(e),s=!1},d(_){~t&&v[t].d(_),_&&B(n)}}}function Jt(c){let t,e;return t=new wt({props:{hostClass:c[0].klass,method:c[0].value,forceSmall:!0,path:c[1]?"/all#":"/"}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&1&&(u.hostClass=n[0].klass),s&1&&(u.method=n[0].value),s&2&&(u.path=n[1]?"/all#":"/"),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Yt(c){let t,e;return t=new Mt({props:{klass:c[0].value,forceSmall:!0,path:c[1]?"/all#":"/"}}),{c(){ne(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,s){re(t,n,s),e=!0},p(n,s){const u={};s&1&&(u.klass=n[0].value),s&2&&(u.path=n[1]?"/all#":"/"),t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){le(t,n)}}}function Qt(c){let t,e,n,s;const u=[Wt,zt],v=[];function k(_,M){return _[0]!==null?0:1}return t=k(c),e=v[t]=u[t](c),{c(){e.c(),n=fe()},l(_){e.l(_),n=fe()},m(_,M){v[t].m(_,M),U(_,n,M),s=!0},p(_,[M]){let g=t;t=k(_),t===g?v[t].p(_,M):(oe(),V(v[g],1,1,()=>{v[g]=null}),ce(),e=v[t],e?e.p(_,M):(e=v[t]=u[t](_),e.c()),j(e,1),e.m(n.parentNode,n))},i(_){s||(j(e),s=!0)},o(_){V(e),s=!1},d(_){v[t].d(_),_&&B(n)}}}function Ut(c,t,e){let n;Ae(c,Xe,k=>e(3,n=k));let{name:s}=t,u,v;return c.$$set=k=>{"name"in k&&e(2,s=k.name)},c.$$.update=()=>{c.$$.dirty&4&&e(0,u=$t(s)),c.$$.dirty&8&&e(1,v=n.stuff.navigation==="hashed")},[u,v,s,n]}class Xt extends me{constructor(t){super(),ve(this,t,Ut,Qt,be,{name:2})}}var Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"})),Ne={},Ze={},Kt={},xt=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"})),en=Et(xt);(function(c){(function(t){var e=t.Markdown=function(f){switch(typeof f){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=f;break;default:if(f in e.dialects)this.dialect=e.dialects[f];else throw new Error("Unknown Markdown dialect '"+String(f)+"'");break}this.em_state=[],this.strong_state=[],this.debug_indent=""};t.parse=function(f,r){var l=new e(r);return l.toTree(f)},t.toHTML=function(r,l,o){var i=t.toHTMLTree(r,l,o);return t.renderJsonML(i)},t.toHTMLTree=function(r,l,o){typeof r=="string"&&(r=this.parse(r,l));var i=m(r),h={};i&&i.references&&(h=i.references);var d=G(r,h,o);return J(d),d};function n(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function s(){var f=en;return"Markdown.mk_block( "+f.inspect(this.toString())+", "+f.inspect(this.trailing)+", "+f.inspect(this.lineNumber)+" )"}var u=e.mk_block=function(f,r,l){arguments.length==1&&(r=`

`);var o=new String(f);return o.trailing=r,o.inspect=s,o.toSource=n,l!=null&&(o.lineNumber=l),o};function v(f){for(var r=0,l=-1;(l=f.indexOf(`
`,l+1))!==-1;)r++;return r}e.prototype.split_blocks=function(r,l){r=r.replace(/(\r\n|\n|\r)/g,`
`);var o=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],h,d=1;for((h=/^(\s*\n)/.exec(r))!=null&&(d+=v(h[0]),o.lastIndex=h[0].length);(h=o.exec(r))!==null;)h[2]==`
#`&&(h[2]=`
`,o.lastIndex--),i.push(u(h[1],h[2],d)),d+=v(h[0]);return i},e.prototype.processBlock=function(r,l){var o=this.dialect.block,i=o.__order__;if("__call__"in o)return o.__call__.call(this,r,l);for(var h=0;h<i.length;h++){var d=o[i[h]].call(this,r,l);if(d)return(!M(d)||d.length>0&&!M(d[0]))&&this.debug(i[h],"didn't return a proper array"),d}return[]},e.prototype.processInline=function(r){return this.dialect.inline.__call__.call(this,String(r))},e.prototype.toTree=function(r,l){var o=r instanceof Array?r:this.split_blocks(r),i=this.tree;try{this.tree=l||this.tree||["markdown"];e:for(;o.length;){var h=this.processBlock(o.shift(),o);if(!h.length)continue e;this.tree.push.apply(this.tree,h)}return this.tree}finally{l&&(this.tree=i)}},e.prototype.debug=function(){var f=Array.prototype.slice.call(arguments);f.unshift(this.debug_indent),typeof print!="undefined"&&print.apply(print,f),typeof console!="undefined"&&typeof console.log!="undefined"&&console.log.apply(null,f)},e.prototype.loop_re_over_block=function(f,r,l){for(var o,i=r.valueOf();i.length&&(o=f.exec(i))!=null;)i=i.substr(o[0].length),l.call(this,o);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(r,l){var o=r.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!!o){var i=["header",{level:o[1].length}];return Array.prototype.push.apply(i,this.processInline(o[2])),o[0].length<r.length&&l.unshift(u(r.substr(o[0].length),r.trailing,r.lineNumber+2)),[i]}},setextHeader:function(r,l){var o=r.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!!o){var i=o[2]==="="?1:2,h=["header",{level:i},o[1]];return o[0].length<r.length&&l.unshift(u(r.substr(o[0].length),r.trailing,r.lineNumber+2)),[h]}},code:function(r,l){var o=[],i=/^(?: {0,3}\t| {4})(.*)\n?/;if(!r.match(i))return;e:do{var h=this.loop_re_over_block(i,r.valueOf(),function(d){o.push(d[1])});if(h.length){l.unshift(u(h,r.trailing));break e}else if(l.length){if(!l[0].match(i))break e;o.push(r.trailing.replace(/[^\n]/g,"").substring(2)),r=l.shift()}else break e}while(!0);return[["code_block",o.join(`
`)]]},horizRule:function(r,l){var o=r.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!!o){var i=[["hr"]];return o[1]&&i.unshift.apply(i,this.processBlock(o[1],[])),o[3]&&l.unshift(u(o[3])),i}},lists:function(){var f="[*+-]|\\d+\\.",r=/[*+-]/,l=new RegExp("^( {0,3})("+f+")[ 	]+"),o="(?: {0,3}\\t| {4})";function i(b){return new RegExp("(?:^("+o+"{0,"+b+"} {0,3})("+f+")\\s+)|(^"+o+"{0,"+(b-1)+"}[ ]{0,4})")}function h(b){return b.replace(/ {0,3}\t/g,"    ")}function d(b,A,E,C){if(A){b.push(["para"].concat(E));return}var I=b[b.length-1]instanceof Array&&b[b.length-1][0]=="para"?b[b.length-1]:b;C&&b.length>1&&E.unshift(C);for(var y=0;y<E.length;y++){var $=E[y],F=typeof $=="string";F&&I.length>1&&typeof I[I.length-1]=="string"?I[I.length-1]+=$:I.push($)}}function S(b,A){for(var E=new RegExp("^("+o+"{"+b+"}.*?\\n?)*$"),C=new RegExp("^"+o+"{"+b+"}","gm"),I=[];A.length>0&&E.exec(A[0]);){var y=A.shift(),$=y.replace(C,"");I.push(u($,y.trailing,y.lineNumber))}return I}function T(b,A,E){var C=b.list,I=C[C.length-1];if(!(I[1]instanceof Array&&I[1][0]=="para"))if(A+1==E.length)I.push(["para"].concat(I.splice(1,I.length-1)));else{var y=I.pop();I.push(["para"].concat(I.splice(1,I.length-1)),y)}}return function(b,A){var E=b.match(l);if(!E)return;function C(he){var pe=r.exec(he[2])?["bulletlist"]:["numberlist"];return I.push({list:pe,indent:he[1]}),pe}var I=[],y=C(E),$,F=!1,te=[I[0].list],O;e:for(;;){for(var ee=b.split(/(?=\n)/),q="",N=0;N<ee.length;N++){var L="",z=ee[N].replace(/^\n/,function(he){return L=he,""}),Se=i(I.length);if(E=z.match(Se),E[1]!==void 0){q.length&&(d($,F,this.processInline(q),L),F=!1,q=""),E[1]=h(E[1]);var ie=Math.floor(E[1].length/4)+1;if(ie>I.length)y=C(E),$.push(y),$=y[1]=["listitem"];else{var ke=!1;for(O=0;O<I.length;O++)if(I[O].indent==E[1]){y=I[O].list,I.splice(O+1,I.length-(O+1)),ke=!0;break}ke||(ie++,ie<=I.length?(I.splice(ie,I.length-ie),y=I[ie-1].list):(y=C(E),$.push(y))),$=["listitem"],y.push($)}L=""}z.length>E[0].length&&(q+=L+z.substr(E[0].length))}q.length&&(d($,F,this.processInline(q),L),F=!1,q="");var Me=S(I.length,A);Me.length>0&&(g(I,T,this),$.push.apply($,this.toTree(Me,[])));var Ee=A[0]&&A[0].valueOf()||"";if(Ee.match(l)||Ee.match(/^ /)){b=A.shift();var ue=this.dialect.block.horizRule(b,A);if(ue){te.push.apply(te,ue);break}g(I,T,this),F=!0;continue e}break}return te}}(),blockquote:function(r,l){if(!!r.match(/^>/m)){var o=[];if(r[0]!=">"){for(var i=r.split(/\n/),h=[],d=r.lineNumber;i.length&&i[0][0]!=">";)h.push(i.shift()),d++;var S=u(h.join(`
`),`
`,r.lineNumber);o.push.apply(o,this.processBlock(S,[])),r=u(i.join(`
`),r.trailing,d)}for(;l.length&&l[0][0]==">";){var T=l.shift();r=u(r+r.trailing+T,T.trailing,r.lineNumber)}var b=r.replace(/^> ?/gm,"");this.tree;var A=this.toTree(b,["blockquote"]),E=m(A);return E&&E.references&&(delete E.references,w(E)&&A.splice(1,1)),o.push(A),o}},referenceDefn:function(r,l){var o=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!!r.match(o)){m(this.tree)||this.tree.splice(1,0,{});var i=m(this.tree);i.references===void 0&&(i.references={});var h=this.loop_re_over_block(o,r,function(d){d[2]&&d[2][0]=="<"&&d[2][d[2].length-1]==">"&&(d[2]=d[2].substring(1,d[2].length-1));var S=i.references[d[1].toLowerCase()]={href:d[2]};d[4]!==void 0?S.title=d[4]:d[5]!==void 0&&(S.title=d[5])});return h.length&&l.unshift(u(h,r.trailing)),[]}},para:function(r,l){return[["para"].concat(this.processInline(r))]}}},e.dialects.Gruber.inline={__oneElement__:function(r,l,o){var i,d;l=l||this.dialect.inline.__patterns__;var h=new RegExp("([\\s\\S]*?)("+(l.source||l)+")");if(i=h.exec(r),i){if(i[1])return[i[1].length,i[1]]}else return[r.length,r];var d;return i[2]in this.dialect.inline&&(d=this.dialect.inline[i[2]].call(this,r.substr(i.index),i,o||[])),d=d||[i[2].length,i[2]],d},__call__:function(r,l){var o=[],i;function h(d){typeof d=="string"&&typeof o[o.length-1]=="string"?o[o.length-1]+=d:o.push(d)}for(;r.length>0;)i=this.dialect.inline.__oneElement__.call(this,r,l,o),r=r.substr(i.shift()),g(i,h);return o},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(r){return this.dialect.inline.__escape__.exec(r)?[2,r.charAt(1)]:[1,"\\"]},"![":function(r){var l=r.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(l){l[2]&&l[2][0]=="<"&&l[2][l[2].length-1]==">"&&(l[2]=l[2].substring(1,l[2].length-1)),l[2]=this.dialect.inline.__call__.call(this,l[2],/\\/)[0];var o={alt:l[1],href:l[2]||""};return l[4]!==void 0&&(o.title=l[4]),[l[0].length,["img",o]]}return l=r.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),l?[l[0].length,["img_ref",{alt:l[1],ref:l[2].toLowerCase(),original:l[0]}]]:[2,"!["]},"[":function(r){var l=String(r),o=e.DialectHelpers.inline_until_char.call(this,r.substr(1),"]");if(!o)return[1,"["];var i=1+o[0],h=o[1],d,S;r=r.substr(i);var T=r.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(T){var b=T[1];if(i+=T[0].length,b&&b[0]=="<"&&b[b.length-1]==">"&&(b=b.substring(1,b.length-1)),!T[3])for(var A=1,E=0;E<b.length;E++)switch(b[E]){case"(":A++;break;case")":--A==0&&(i-=b.length-E,b=b.substring(0,E));break}return b=this.dialect.inline.__call__.call(this,b,/\\/)[0],S={href:b||""},T[3]!==void 0&&(S.title=T[3]),d=["link",S].concat(h),[i,d]}return T=r.match(/^\s*\[(.*?)\]/),T?(i+=T[0].length,S={ref:(T[1]||String(h)).toLowerCase(),original:l.substr(0,i)},d=["link_ref",S].concat(h),[i,d]):h.length==1&&typeof h[0]=="string"?(S={ref:h[0].toLowerCase(),original:l.substr(0,i)},d=["link_ref",S,h[0]],[i,d]):[1,"["]},"<":function(r){var l;return(l=r.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null?l[3]?[l[0].length,["link",{href:"mailto:"+l[3]},l[3]]]:l[2]=="mailto"?[l[0].length,["link",{href:l[1]},l[1].substr(7)]]:[l[0].length,["link",{href:l[1]},l[1]]]:[1,"<"]},"`":function(r){var l=r.match(/(`+)(([\s\S]*?)\1)/);return l&&l[2]?[l[1].length+l[2].length,["inlinecode",l[3]]]:[1,"`"]},"  \n":function(r){return[3,["linebreak"]]}};function k(f,r){var l=f+"_state",o=f=="strong"?"em_state":"strong_state";function i(h){this.len_after=h,this.name="close_"+r}return function(h,d){if(this[l][0]==r)return this[l].shift(),[h.length,new i(h.length-r.length)];var S=this[o].slice(),T=this[l].slice();this[l].unshift(r);var b=this.processInline(h.substr(r.length)),A=b[b.length-1];if(this[l].shift(),A instanceof i){b.pop();var E=h.length-A.len_after;return[E,[f].concat(b)]}else return this[o]=S,this[l]=T,[r.length,r]}}e.dialects.Gruber.inline["**"]=k("strong","**"),e.dialects.Gruber.inline.__=k("strong","__"),e.dialects.Gruber.inline["*"]=k("em","*"),e.dialects.Gruber.inline._=k("em","_"),e.buildBlockOrder=function(f){var r=[];for(var l in f)l=="__order__"||l=="__call__"||r.push(l);f.__order__=r},e.buildInlinePatterns=function(f){var r=[];for(var l in f)if(!l.match(/^__.*__$/)){var o=l.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");r.push(l.length==1?o:"(?:"+o+")")}r=r.join("|"),f.__patterns__=r;var i=f.__call__;f.__call__=function(h,d){return d!=null?i.call(this,h,d):i.call(this,h,r)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(f,r){for(var l=0,o=[];;){if(f.charAt(l)==r)return l++,[l,o];if(l>=f.length)return null;var i=this.dialect.inline.__oneElement__.call(this,f.substr(l));l+=i[0],o.push.apply(o,i.slice(1))}},e.subclassDialect=function(f){function r(){}r.prototype=f.block;function l(){}return l.prototype=f.inline,{block:new r,inline:new l}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(r){for(var l=_(r),o={},i=0;i<l.length;++i)if(/^#/.test(l[i]))o.id=l[i].substring(1);else if(/^\./.test(l[i]))o.class?o.class=o.class+l[i].replace(/./," "):o.class=l[i].substring(1);else if(/\=/.test(l[i])){var h=l[i].split(/\=/);o[h[0]]=h[1]}return o};function _(f){for(var r=f.split(""),l=[""],o=!1;r.length;){var i=r.shift();switch(i){case" ":o?l[l.length-1]+=i:l.push("");break;case"'":case'"':o=!o;break;case"\\":i=r.shift();default:l[l.length-1]+=i;break}}return l}e.dialects.Maruku.block.document_meta=function(r,l){if(!(r.lineNumber>1)&&!!r.match(/^(?:\w+:.*\n)*\w+:.*$/)){m(this.tree)||this.tree.splice(1,0,{});var o=r.split(/\n/);for(p in o){var i=o[p].match(/(\w+):\s*(.*)$/),h=i[1].toLowerCase(),d=i[2];this.tree[1][h]=d}return[]}},e.dialects.Maruku.block.block_meta=function(r,l){var o=r.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!!o){var i=this.dialect.processMetaHash(o[2]),h;if(o[1]===""){var d=this.tree[this.tree.length-1];if(h=m(d),typeof d=="string")return;h||(h={},d.splice(1,0,h));for(a in i)h[a]=i[a];return[]}var S=r.replace(/\n.*$/,""),T=this.processBlock(S,[]);h=m(T[0]),h||(h={},T[0].splice(1,0,h));for(a in i)h[a]=i[a];return T}},e.dialects.Maruku.block.definition_list=function(r,l){var o=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"],h,d;if(d=r.match(o)){for(var S=[r];l.length&&o.exec(l[0]);)S.push(l.shift());for(var T=0;T<S.length;++T){var d=S[T].match(o),b=d[1].replace(/\n$/,"").split(/\n/),A=d[2].split(/\n:\s+/);for(h=0;h<b.length;++h)i.push(["dt",b[h]]);for(h=0;h<A.length;++h)i.push(["dd"].concat(this.processInline(A[h].replace(/(\n)\s+/,"$1"))))}}else return;return[i]},e.dialects.Maruku.block.table=function(r,l){var o=function(A,E){E=E||"\\s",E.match(/^[\\|\[\]{}?*.+^$]$/)&&(E="\\"+E);for(var C=[],I=new RegExp("^((?:\\\\.|[^\\\\"+E+"])*)"+E+"(.*)"),y;y=A.match(I);)C.push(y[1]),A=y[2];return C.push(A),C},i=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,h=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,d,S;if(S=r.match(i))S[3]=S[3].replace(/^\s*\|/gm,"");else if(!(S=r.match(h)))return;var T=["table",["thead",["tr"]],["tbody"]];S[2]=S[2].replace(/\|\s*$/,"").split("|");var b=[];for(g(S[2],function(A){A.match(/^\s*-+:\s*$/)?b.push({align:"right"}):A.match(/^\s*:-+\s*$/)?b.push({align:"left"}):A.match(/^\s*:-+:\s*$/)?b.push({align:"center"}):b.push({})}),S[1]=o(S[1].replace(/\|\s*$/,""),"|"),d=0;d<S[1].length;d++)T[1][1].push(["th",b[d]||{}].concat(this.processInline(S[1][d].trim())));return g(S[3].replace(/\|\s*$/mg,"").split(`
`),function(A){var E=["tr"];for(A=o(A,"|"),d=0;d<A.length;d++)E.push(["td",b[d]||{}].concat(this.processInline(A[d].trim())));T[2].push(E)},this),[T]},e.dialects.Maruku.inline["{:"]=function(r,l,o){if(!o.length)return[2,"{:"];var i=o[o.length-1];if(typeof i=="string")return[2,"{:"];var h=r.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!h)return[2,"{:"];var d=this.dialect.processMetaHash(h[1]),S=m(i);S||(S={},i.splice(1,0,S));for(var T in d)S[T]=d[T];return[h[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var M=Array.isArray||function(f){return Object.prototype.toString.call(f)=="[object Array]"},g;Array.prototype.forEach?g=function(f,r,l){return f.forEach(r,l)}:g=function(f,r,l){for(var o=0;o<f.length;o++)r.call(l||f,f[o],o,f)};var w=function(f){for(var r in f)if(hasOwnProperty.call(f,r))return!1;return!0};function m(f){return M(f)&&f.length>1&&typeof f[1]=="object"&&!M(f[1])?f[1]:void 0}t.renderJsonML=function(f,r){r=r||{},r.root=r.root||!1;var l=[];if(r.root)l.push(R(f));else for(f.shift(),f.length&&typeof f[0]=="object"&&!(f[0]instanceof Array)&&f.shift();f.length;)l.push(R(f.shift()));return l.join(`

`)};function H(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R(f){if(typeof f=="string")return H(f);var r=f.shift(),l={},o=[];for(f.length&&typeof f[0]=="object"&&!(f[0]instanceof Array)&&(l=f.shift());f.length;)o.push(R(f.shift()));var i="";for(var h in l)i+=" "+h+'="'+H(l[h])+'"';return r=="img"||r=="br"||r=="hr"?"<"+r+i+"/>":"<"+r+i+">"+o.join("")+"</"+r+">"}function G(f,r,l){var o;l=l||{};var i=f.slice(0);typeof l.preprocessTreeNode=="function"&&(i=l.preprocessTreeNode(i,r));var h=m(i);if(h){i[1]={};for(o in h)i[1][o]=h[o];h=i[1]}if(typeof i=="string")return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",h&&delete h.references;break;case"code_block":i[0]="pre",o=h?2:1;var d=["code"];d.push.apply(d,i.splice(o,i.length-o)),i[o]=d;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var S=r[h.ref];if(S)delete h.ref,h.href=S.href,S.title&&(h.title=S.title),delete h.original;else return h.original;break;case"img_ref":i[0]="img";var S=r[h.ref];if(S)delete h.ref,h.src=S.href,S.title&&(h.title=S.title),delete h.original;else return h.original;break}if(o=1,h){for(var T in i[1]){o=2;break}o===1&&i.splice(o,1)}for(;o<i.length;++o)i[o]=G(i[o],r,l);return i}function J(f){for(var r=m(f)?2:1;r<f.length;)typeof f[r]=="string"?r+1<f.length&&typeof f[r+1]=="string"?f[r]+=f.splice(r+1,1)[0]:++r:(J(f[r]),++r)}})(function(){return c}())})(Ze);(function(c){c.markdown=Ze,c.parse=c.markdown.toHTML})(Ne);function tn(c){let t,e=Ne.markdown.toHTML(c[0])+"",n;return{c(){t=new et(!1),n=fe(),this.h()},l(s){t=tt(s,!1),n=fe(),this.h()},h(){t.a=n},m(s,u){t.m(e,s,u),U(s,n,u)},p(s,[u]){u&1&&e!==(e=Ne.markdown.toHTML(s[0])+"")&&t.p(e)},i:ge,o:ge,d(s){s&&B(n),s&&t.d()}}}function nn(c,t,e){let{name:n}=t;return c.$$set=s=>{"name"in s&&e(0,n=s.name)},[n]}class rn extends me{constructor(t){super(),ve(this,t,nn,tn,be,{name:0})}}var ln=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));function sn(c){let t,e,n;return{c(){t=Y("h1"),e=X(c[0]),n=X(`

A lua Primitive`)},l(s){t=Q(s,"H1",{});var u=W(t);e=Z(u,c[0]),u.forEach(B),n=Z(s,`

A lua Primitive`)},m(s,u){U(s,t,u),D(t,e),U(s,n,u)},p(s,[u]){u&1&&de(e,s[0])},i:ge,o:ge,d(s){s&&B(t),s&&B(n)}}}function an(c,t,e){let{name:n}=t;return c.$$set=s=>{"name"in s&&e(0,n=s.name)},[n]}class on extends me{constructor(t){super(),ve(this,t,an,sn,be,{name:0})}}var cn=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"}));const{clearTimeout:We,setTimeout:Je,window:Oe}=lt;function Ye(c,t,e){const n=c.slice();return n[16]=t[e],n}function Qe(c,t){let e,n,s,u,v;var k=t[2][t[16].type];function _(M){return{props:{name:M[16].name}}}return k&&(s=new k(_(t))),{key:c,first:null,c(){e=Y("div"),n=Y("div"),s&&ne(s.$$.fragment),u=K(),this.h()},l(M){e=Q(M,"DIV",{class:!0});var g=W(e);n=Q(g,"DIV",{class:!0});var w=W(n);s&&se(s.$$.fragment,w),w.forEach(B),u=x(g),g.forEach(B),this.h()},h(){P(n,"class","popup-content svelte-1atb9vj"),P(e,"class","popup svelte-1atb9vj"),this.first=e},m(M,g){U(M,e,g),D(e,n),s&&re(s,n,null),D(e,u),v=!0},p(M,g){t=M;const w={};if(g&16&&(w.name=t[16].name),k!==(k=t[2][t[16].type])){if(s){oe();const m=s;V(m.$$.fragment,1,0,()=>{le(m,1)}),ce()}k?(s=new k(_(t)),ne(s.$$.fragment),j(s.$$.fragment,1),re(s,n,null)):s=null}else k&&s.$set(w)},i(M){v||(s&&j(s.$$.fragment,M),v=!0)},o(M){s&&V(s.$$.fragment,M),v=!1},d(M){M&&B(e),s&&le(s)}}}function fn(c){let t=!1,e=()=>{t=!1},n,s,u=[],v=new Map,k,_,M;nt(c[7]);let g=c[4];const w=m=>m[16].id;for(let m=0;m<g.length;m+=1){let H=Ye(c,g,m),R=w(H);v.set(R,u[m]=Qe(R,H))}return{c(){s=Y("div");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){s=Q(m,"DIV",{class:!0});var H=W(s);for(let R=0;R<u.length;R+=1)u[R].l(H);H.forEach(B),this.h()},h(){P(s,"class","hint-overlay svelte-1atb9vj")},m(m,H){U(m,s,H);for(let R=0;R<u.length;R+=1)u[R].m(s,null);c[8](s),k=!0,_||(M=[$e(Oe,"scroll",()=>{t=!0,We(n),n=Je(e,100),c[7]()}),$e(s,"mouseover",c[9]),$e(s,"mouseout",c[10])],_=!0)},p(m,[H]){H&2&&!t&&(t=!0,We(n),scrollTo(Oe.pageXOffset,m[1]),n=Je(e,100)),H&20&&(g=m[4],oe(),u=rt(u,H,w,1,m,g,v,s,st,Qe,null,Ye),ce())},i(m){if(!k){for(let H=0;H<g.length;H+=1)j(u[H]);k=!0}},o(m){for(let H=0;H<u.length;H+=1)V(u[H]);k=!1},d(m){m&&B(s);for(let H=0;H<u.length;H+=1)u[H].d();c[8](null),_=!1,Ue(M)}}}function un(c,t,e){let n;Ae(c,St,l=>e(6,n=l));let s={"./popups/docs.svelte":Zt,"./popups/inherent.svelte":ln,"./popups/primitive.svelte":cn},u={};Object.entries(s).forEach(([l,o])=>{let i=l.split("/");e(2,u[i[i.length-1].split(".")[0]]=o.default,u)});let v,k=!0,_,M=n;function g(){v!==null&&(M.length===0?(e(3,v.style.display="none",v),e(3,v.style.transition="",v),e(3,v.style.top="",v),e(3,v.style.left="",v)):(e(3,v.style.transition="top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s",v),e(3,v.style.display="",v),H(10),requestAnimationFrame(()=>H())))}function w(){e(4,M=n)}function m(){return M}function H(l=0){if(v===null||M.length===0||M[0].span.parentElement===null)return;let o=M[0].span.getBoundingClientRect().bottom,i=M[0].span.getBoundingClientRect().left;i=Math.min(window.innerWidth-300,i),i=Math.max(10,i),e(3,v.style.top=o+_+l+"px",v),e(3,v.style.left=i+"px",v),e(3,v.style.height=window.innerHeight-o-10+"px",v),e(3,v.style.width=window.innerWidth-i-40+"px",v)}let R=null;function G(){e(1,_=Oe.pageYOffset)}function J(l){at[l?"unshift":"push"](()=>{v=l,e(3,v)})}const f=()=>e(0,k=!1),r=()=>e(0,k=!0);return c.$$.update=()=>{c.$$.dirty&97&&(R!==null&&clearTimeout(R),e(5,R=setTimeout(()=>{k&&(w(),g(),e(0,k=k||m().length==0))},n.length===0?100:1))),c.$$.dirty&2&&H()},[k,_,u,v,M,R,n,G,J,f,r]}class hn extends me{constructor(t){super(),ve(this,t,un,fn,be,{})}}function pn(c){let t,e,n,s,u,v,k=c[2]?"Hide Table":"Show Table",_,M,g,w=c[4].readerEnabled?"Disable":"Enable",m,H,R,G,J,f,r,l,o,i,h,d,S,T,b,A,E,C,I,y,$,F,te,O;o=new qt({props:{everything:c[3],path:c[3]?"/all#":"/"}});const ee=c[8].default,q=it(ee,c,c[7],null);return $=new hn({}),{c(){t=Y("div"),e=Y("nav"),n=Y("a"),s=X("FIGS!!"),u=K(),v=Y("a"),_=X(k),M=K(),g=Y("a"),m=X(w),H=X(" Better Reader"),R=K(),G=Y("a"),J=X(Pe),f=K(),r=Y("div"),l=Y("div"),ne(o.$$.fragment),i=K(),h=Y("footer"),d=X("Made by applejuice"),S=K(),T=Y("div"),q&&q.c(),b=K(),A=Be("svg"),C=K(),I=Be("svg"),y=K(),ne($.$$.fragment),this.h()},l(N){t=Q(N,"DIV",{class:!0});var L=W(t);e=Q(L,"NAV",{class:!0});var z=W(e);n=Q(z,"A",{class:!0,href:!0});var Se=W(n);s=Z(Se,"FIGS!!"),Se.forEach(B),u=x(z),v=Q(z,"A",{class:!0,href:!0,"aria-label":!0});var ie=W(v);_=Z(ie,k),ie.forEach(B),M=x(z),g=Q(z,"A",{class:!0,href:!0});var ke=W(g);m=Z(ke,w),H=Z(ke," Better Reader"),ke.forEach(B),R=x(z),G=Q(z,"A",{class:!0,href:!0});var Me=W(G);J=Z(Me,Pe),Me.forEach(B),z.forEach(B),f=x(L),r=Q(L,"DIV",{class:!0});var Ee=W(r);l=Q(Ee,"DIV",{class:!0});var ue=W(l);se(o.$$.fragment,ue),i=x(ue),h=Q(ue,"FOOTER",{class:!0});var he=W(h);d=Z(he,"Made by applejuice"),he.forEach(B),ue.forEach(B),Ee.forEach(B),S=x(L),T=Q(L,"DIV",{class:!0});var pe=W(T);q&&q.l(pe),b=x(pe),A=Ce(pe,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0});var Ke=W(A);Ke.forEach(B),pe.forEach(B),L.forEach(B),C=x(N),I=Ce(N,"svg",{id:!0,class:!0,width:!0,height:!0}),W(I).forEach(B),y=x(N),se($.$$.fragment,N),this.h()},h(){P(n,"class","nav-item svelte-518g4d"),P(n,"href",ae+"/"),P(v,"class","nav-item expander svelte-518g4d"),P(v,"href","javascript:;"),P(v,"aria-label","Expand"),P(g,"class","nav-item better-reader-button svelte-518g4d"),P(g,"href","javascript:;"),_e(g,"margin-left","auto",!1),P(G,"class","nav-item svelte-518g4d"),P(G,"href","javascript:;"),_e(G,"font-size",Math.max(c[1],10)-9+"em",!1),_e(G,"opacity","0.5",!1),P(e,"class","figura-background svelte-518g4d"),ye(e,"expanded",c[2]),P(h,"class","svelte-518g4d"),P(l,"class","category-inner svelte-518g4d"),P(r,"class","category figura-background svelte-518g4d"),ye(r,"expanded",c[2]),P(A,"class","cheese-svg svelte-518g4d"),P(A,"width","100%"),P(A,"height","100%"),P(A,"aria-hidden","true"),_e(A,"pointer-events","none",!1),_e(A,"touch-action","none",!1),P(T,"class","content svelte-518g4d"),ye(T,"expanded",c[2]),P(t,"class","root svelte-518g4d"),P(I,"id","root-glasspane"),P(I,"class","glasspane svelte-518g4d"),P(I,"width","100%"),P(I,"height","100%"),_e(I,"z-index","99999",!1)},m(N,L){U(N,t,L),D(t,e),D(e,n),D(n,s),D(e,u),D(e,v),D(v,_),D(e,M),D(e,g),D(g,m),D(g,H),D(e,R),D(e,G),D(G,J),D(t,f),D(t,r),D(r,l),re(o,l,null),D(l,i),D(l,h),D(h,d),D(t,S),D(t,T),q&&q.m(T,null),D(T,b),D(T,A),U(N,C,L),U(N,I,L),U(N,y,L),re($,N,L),F=!0,te||(O=[$e(v,"click",c[9]),$e(g,"click",c[10]),$e(G,"click",c[5]),ot(E=At.call(null,A,c[0]))],te=!0)},p(N,[L]){(!F||L&4)&&k!==(k=N[2]?"Hide Table":"Show Table")&&de(_,k),(!F||L&16)&&w!==(w=N[4].readerEnabled?"Disable":"Enable")&&de(m,w),L&2&&_e(G,"font-size",Math.max(N[1],10)-9+"em",!1),L&4&&ye(e,"expanded",N[2]);const z={};L&8&&(z.everything=N[3]),L&8&&(z.path=N[3]?"/all#":"/"),o.$set(z),L&4&&ye(r,"expanded",N[2]),q&&q.p&&(!F||L&128)&&ct(q,ee,N,N[7],F?ut(ee,N[7],L,null):ft(N[7]),null),E&&ht(E.update)&&L&1&&E.update.call(null,N[0]),L&4&&ye(T,"expanded",N[2])},i(N){F||(j(o.$$.fragment,N),j(q,N),j($.$$.fragment,N),F=!0)},o(N){V(o.$$.fragment,N),V(q,N),V($.$$.fragment,N),F=!1},d(N){N&&B(t),le(o),q&&q.d(N),N&&B(C),N&&B(I),N&&B(y),le($,N),te=!1,Ue(O)}}}function _n(c,t,e){let n,s;Ae(c,Xe,J=>e(6,n=J)),Ae(c,De,J=>e(4,s=J));let{$$slots:u={},$$scope:v}=t,k=null,_=!1;pt(()=>{let J=()=>{e(1,g+=w),e(1,g=Math.max(g,0)),w-=.001,w*=.99,g>20&&e(0,_=!0),requestAnimationFrame(J)};k=requestAnimationFrame(J)}),_t(()=>k&&cancelAnimationFrame(k));function M(){_||(w+=.1)}let g=0,w=0,m=!1,H;const R=()=>e(2,m=!m),G=()=>gt(De,s.readerEnabled=!s.readerEnabled,s);return c.$$set=J=>{"$$scope"in J&&e(7,v=J.$$scope)},c.$$.update=()=>{c.$$.dirty&64&&e(3,H=n.stuff.navigation==="hashed")},[_,g,m,H,s,M,n,v,u,R,G]}class bn extends me{constructor(t){super(),ve(this,t,_n,pn,be,{})}}export{bn as default};