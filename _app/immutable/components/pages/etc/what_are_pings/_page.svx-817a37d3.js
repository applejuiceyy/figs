import{S as Mt,i as qt,s as zt,w as s,x as $,y as f,f as m,t as p,z as u,K as Yt,l as v,a as x,m as d,n as y,h as r,c as _,q as g,b as o,G as V,B as lt,r as St,u as Bt}from"../../../../chunks/index-602fb34f.js";import{P as Gt,D as Kt,b as Nt,I as w,c as ut,d as Wt,e as c,f as Me}from"../../../../chunks/statistics-b5add62e.js";import{w as Ut}from"../../../../chunks/translator-e0270602.js";import{p as Ft}from"../../../../chunks/stores-cd6bc0e5.js";import"../../../../chunks/paths-6cd3a76e.js";import"../../../../chunks/preload-helper-aa6bc0ce.js";import"../../../../chunks/index-e832455d.js";import"../../../../chunks/SlottedTranslatableKey-3886aee5.js";import"../../../../chunks/loading-f7d78dd6.js";function Jt(h){let n,i;return n=new w({props:{text:h[0],properties:h[1]===null?[ut(h[0])]:[ut(h[0]),Wt(h[0],h[1])]}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p(t,l){const b={};l&1&&(b.text=t[0]),l&3&&(b.properties=t[1]===null?[ut(t[0])]:[ut(t[0]),Wt(t[0],t[1])]),n.$set(b)},i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function Ot(h){let n,i;return n=new Nt({props:{style:"box-sizing: border-box;",$$slots:{default:[Jt]},$$scope:{ctx:h}}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p(t,l){const b={};l&19&&(b.$$scope={dirty:l,ctx:t}),n.$set(b)},i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function Qt(h){let n,i;return n=new Gt({props:{enabled:!h[2].examplePopupEnabled,$$slots:{default:[Ot]},$$scope:{ctx:h}}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p(t,[l]){const b={};l&4&&(b.enabled=!t[2].examplePopupEnabled),l&19&&(b.$$scope={dirty:l,ctx:t}),n.$set(b)},i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function Rt(h,n,i){let t,l;Yt(h,Ft,k=>i(3,t=k)),Yt(h,Ut,k=>i(2,l=k));let{value:b}=n,A;return h.$$set=k=>{"value"in k&&i(0,b=k.value)},h.$$.update=()=>{if(h.$$.dirty&8){let k=t.data.docs;k===void 0?i(1,A=null):i(1,A=new Kt(k))}},[b,A,l,t]}class ht extends Mt{constructor(n){super(),qt(this,n,Rt,Qt,zt,{value:0})}}function Xt(h){let n;return{c(){n=St("pings")},l(i){n=Bt(i,"pings")},m(i,t){o(i,n,t)},d(i){i&&r(n)}}}function Zt(h){let n,i;return n=new Nt({props:{inline:!0,$$slots:{default:[Xt]},$$scope:{ctx:h}}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p(t,l){const b={};l&1&&(b.$$scope={dirty:l,ctx:t}),n.$set(b)},i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function en(h){let n,i;return n=new ht({props:{value:`function pings.example()

end

--or

pings.example = function()

end`}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p:lt,i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function tn(h){let n,i;return n=new ht({props:{value:"pings.example()"}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p:lt,i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function nn(h){let n,i;return n=new ht({props:{value:`local page = action_wheel:newPage()

local action = page:newAction()

action:setTitle("Transform")
function action.leftClick()
    print("Transforming!!")
end`}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p:lt,i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function rn(h){let n,i;return n=new ht({props:{value:`function pings.transform()
    print("Transforming!!")
end

local page = action_wheel:newPage()

local action = page:newAction()

action:setTitle("Transform")
function action.leftClick()
    pings.transform()
end`}}),{c(){s(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,l){f(n,t,l),i=!0},p:lt,i(t){i||(m(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){u(n,t)}}}function an(h){let n,i,t,l,b,A,k,qe,H,J,Te,O,ze,P,Q,Ne,E,R,Ve,X,Z,Se,j,ee,Be,_e,te,Ge,C,ne,Ke,Y,re,Ue,L,ae,Ae,ie,Fe,I,oe,W,se,Je,M,Oe,q,$e,Qe,z,Re,be,fe,Xe,N,me,Ze,S,et,D,pe,He,ue,le,tt,B,he,nt,G,ge,rt,K,at,U,we,it,ke,ce,ot,F,ve,st,T,Le,de,gt,Pe,ye,wt,je,xe,$t;return i=new w({props:{text:"Networking, the unavoidable pain",properties:[c("Networking, the unavoidable pain")]}}),b=new w({props:{text:"And that is also true for figura, there is things happening with the avatar in your machine that your avatar in other people\u2019s machines do not know. ",properties:[c("And that is also true for figura, there is things happening with the avatar in your machine that your avatar in other people\u2019s machines do not know. ")]}}),k=new w({props:{text:"And no, this isn\u2019t a way to communicate between avatars",properties:[c("And no, this isn\u2019t a way to communicate between avatars")]}}),J=new w({props:{text:"~ ",properties:[c("~ ")]}}),O=new w({props:{text:"What do you mean?",properties:[c("What do you mean?")]}}),Q=new w({props:{text:"Let me explain:",properties:[c("Let me explain:")]}}),R=new w({props:{text:"Your avatar is not run ",properties:[c("Your avatar is not run ")]}}),X=new w({props:{text:"globally",properties:[c("globally")]}}),Z=new w({props:{text:" for everyone that is seeing it, in fact, every machine seeing your avatar is running your avatar on their machine separately from the avatar running on your machine, and they\u2019re not aware of the properties that only your avatar can access on your machine",properties:[c(" for everyone that is seeing it, in fact, every machine seeing your avatar is running your avatar on their machine separately from the avatar running on your machine, and they\u2019re not aware of the properties that only your avatar can access on your machine")]}}),ee=new w({props:{text:"You need to manually tell these avatars running on other people\u2019s machines when something happened/a value that only the host has",properties:[c("You need to manually tell these avatars running on other people\u2019s machines when something happened/a value that only the host has")]}}),te=new w({props:{text:"Introducing pings",properties:[c("Introducing pings")]}}),ne=new w({props:{text:"When you execute a ping, a notification is sent to the backend, and by extension, to all instances of your avatar currently being run. You can use these pings to notify the other instances of your avatar that something has happened/a value that you would like them to know that only the avatar in your machine can access.",properties:[c("When you execute a ping, a notification is sent to the backend, and by extension, to all instances of your avatar currently being run. You can use these pings to notify the other instances of your avatar that something has happened/a value that you would like them to know that only the avatar in your machine can access.")]}}),re=new w({props:{text:"This is mostly used in conjunction with the action wheel, or keybinds, since they\u2019re only executed on the host-side (\u201Chost\u201D in here means your avatar in your machine), since they\u2019re only executed on the host-side, it\u2019s up to the avatar\u2019s job to let the other instances to know and react to this event. This is just another tool, and like another tool, you can use it when it\u2019s necessary even when you\u2019re not using action wheels or keybinds",properties:[c("This is mostly used in conjunction with the action wheel, or keybinds, since they\u2019re only executed on the host-side (\u201Chost\u201D in here means your avatar in your machine), since they\u2019re only executed on the host-side, it\u2019s up to the avatar\u2019s job to let the other instances to know and react to this event. This is just another tool, and like another tool, you can use it when it\u2019s necessary even when you\u2019re not using action wheels or keybinds")]}}),ae=new w({props:{text:"~ ",properties:[c("~ ")]}}),ie=new w({props:{text:"How do I use these pings?",properties:[c("How do I use these pings?")]}}),oe=new w({props:{text:"In order to use pings, you first have to register them. You simply register them by assigning them to ",properties:[c("In order to use pings, you first have to register them. You simply register them by assigning them to ")]}}),W=new Me({props:{$$slots:{default:[Zt]},$$scope:{ctx:h}}}),se=new w({props:{text:".",properties:[c(".")]}}),M=new Me({props:{$$slots:{default:[en]},$$scope:{ctx:h}}}),$e=new w({props:{text:"And in order to call these pings you just have to call them like ordinary functions",properties:[c("And in order to call these pings you just have to call them like ordinary functions")]}}),z=new Me({props:{$$slots:{default:[tn]},$$scope:{ctx:h}}}),fe=new w({props:{text:"In-field example",properties:[c("In-field example")]}}),me=new w({props:{text:"As explained before, action wheels are only executed in the host, and need to be communicated to the other machines that an action has been performed",properties:[c("As explained before, action wheels are only executed in the host, and need to be communicated to the other machines that an action has been performed")]}}),S=new Me({props:{$$slots:{default:[nn]},$$scope:{ctx:h}}}),pe=new w({props:{text:"Do you see what the problem is here? This example doesn\u2019t make use of pings! And other machines will ",properties:[c("Do you see what the problem is here? This example doesn\u2019t make use of pings! And other machines will ")]}}),ue=new w({props:{text:"never",properties:[c("never")]}}),le=new w({props:{text:" know when the user wants to actually transform.",properties:[c(" know when the user wants to actually transform.")]}}),he=new w({props:{text:"How do we fix this?",properties:[c("How do we fix this?")]}}),ge=new w({props:{text:"Well, we can extract the function that is executed when the action is clicked, turn it into a ping, and when the action is clicked, we call the ping",properties:[c("Well, we can extract the function that is executed when the action is clicked, turn it into a ping, and when the action is clicked, we call the ping")]}}),K=new Me({props:{$$slots:{default:[rn]},$$scope:{ctx:h}}}),we=new w({props:{text:"This way, when the user clicks an action, a notification is sent to the other instances of your avatar, and these avatars also execute the ping, which used to be called when the action is clicked.",properties:[c("This way, when the user clicks an action, a notification is sent to the other instances of your avatar, and these avatars also execute the ping, which used to be called when the action is clicked.")]}}),ce=new w({props:{text:"Limitations",properties:[c("Limitations")]}}),ve=new w({props:{text:"Pings are cool, but they have some potholes, specially if you\u2019re more advanced in the field of programming, namely:",properties:[c("Pings are cool, but they have some potholes, specially if you\u2019re more advanced in the field of programming, namely:")]}}),de=new w({props:{text:"They do not forward the result of the function",properties:[c("They do not forward the result of the function")]}}),ye=new w({props:{text:"They\u2019re not executed immediately after calling the function for the host",properties:[c("They\u2019re not executed immediately after calling the function for the host")]}}),xe=new w({props:{text:"They support passing in arguments, but these arguments must be a vector, matrix, or another lua primitive. They get silently converted to nil if they are not able to be passed",properties:[c("They support passing in arguments, but these arguments must be a vector, matrix, or another lua primitive. They get silently converted to nil if they are not able to be passed")]}}),{c(){n=v("h1"),s(i.$$.fragment),t=x(),l=v("div"),s(b.$$.fragment),A=v("del"),s(k.$$.fragment),qe=x(),H=v("div"),s(J.$$.fragment),Te=v("em"),s(O.$$.fragment),ze=x(),P=v("div"),s(Q.$$.fragment),Ne=x(),E=v("div"),s(R.$$.fragment),Ve=v("em"),s(X.$$.fragment),s(Z.$$.fragment),Se=x(),j=v("div"),s(ee.$$.fragment),Be=x(),_e=v("h2"),s(te.$$.fragment),Ge=x(),C=v("div"),s(ne.$$.fragment),Ke=x(),Y=v("div"),s(re.$$.fragment),Ue=x(),L=v("div"),s(ae.$$.fragment),Ae=v("em"),s(ie.$$.fragment),Fe=x(),I=v("div"),s(oe.$$.fragment),s(W.$$.fragment),s(se.$$.fragment),Je=x(),s(M.$$.fragment),Oe=x(),q=v("div"),s($e.$$.fragment),Qe=x(),s(z.$$.fragment),Re=x(),be=v("h2"),s(fe.$$.fragment),Xe=x(),N=v("div"),s(me.$$.fragment),Ze=x(),s(S.$$.fragment),et=x(),D=v("div"),s(pe.$$.fragment),He=v("em"),s(ue.$$.fragment),s(le.$$.fragment),tt=x(),B=v("div"),s(he.$$.fragment),nt=x(),G=v("div"),s(ge.$$.fragment),rt=x(),s(K.$$.fragment),at=x(),U=v("div"),s(we.$$.fragment),it=x(),ke=v("h2"),s(ce.$$.fragment),ot=x(),F=v("div"),s(ve.$$.fragment),st=x(),T=v("ul"),Le=v("li"),s(de.$$.fragment),gt=x(),Pe=v("li"),s(ye.$$.fragment),wt=x(),je=v("li"),s(xe.$$.fragment),this.h()},l(e){n=d(e,"H1",{});var a=y(n);$(i.$$.fragment,a),a.forEach(r),t=_(e),l=d(e,"DIV",{style:!0});var Ee=y(l);$(b.$$.fragment,Ee),A=d(Ee,"DEL",{});var Ce=y(A);$(k.$$.fragment,Ce),Ce.forEach(r),Ee.forEach(r),qe=_(e),H=d(e,"DIV",{style:!0});var Ie=y(H);$(J.$$.fragment,Ie),Te=d(Ie,"EM",{});var Ye=y(Te);$(O.$$.fragment,Ye),Ye.forEach(r),Ie.forEach(r),ze=_(e),P=d(e,"DIV",{style:!0});var We=y(P);$(Q.$$.fragment,We),We.forEach(r),Ne=_(e),E=d(e,"DIV",{style:!0});var ft=y(E);$(R.$$.fragment,ft),Ve=d(ft,"EM",{});var vt=y(Ve);$(X.$$.fragment,vt),vt.forEach(r),$(Z.$$.fragment,ft),ft.forEach(r),Se=_(e),j=d(e,"DIV",{style:!0});var dt=y(j);$(ee.$$.fragment,dt),dt.forEach(r),Be=_(e),_e=d(e,"H2",{});var yt=y(_e);$(te.$$.fragment,yt),yt.forEach(r),Ge=_(e),C=d(e,"DIV",{style:!0});var xt=y(C);$(ne.$$.fragment,xt),xt.forEach(r),Ke=_(e),Y=d(e,"DIV",{style:!0});var _t=y(Y);$(re.$$.fragment,_t),_t.forEach(r),Ue=_(e),L=d(e,"DIV",{style:!0});var ct=y(L);$(ae.$$.fragment,ct),Ae=d(ct,"EM",{});var bt=y(Ae);$(ie.$$.fragment,bt),bt.forEach(r),ct.forEach(r),Fe=_(e),I=d(e,"DIV",{style:!0});var mt=y(I);$(oe.$$.fragment,mt),$(W.$$.fragment,mt),$(se.$$.fragment,mt),mt.forEach(r),Je=_(e),$(M.$$.fragment,e),Oe=_(e),q=d(e,"DIV",{style:!0});var kt=y(q);$($e.$$.fragment,kt),kt.forEach(r),Qe=_(e),$(z.$$.fragment,e),Re=_(e),be=d(e,"H2",{});var Et=y(be);$(fe.$$.fragment,Et),Et.forEach(r),Xe=_(e),N=d(e,"DIV",{style:!0});var It=y(N);$(me.$$.fragment,It),It.forEach(r),Ze=_(e),$(S.$$.fragment,e),et=_(e),D=d(e,"DIV",{style:!0});var pt=y(D);$(pe.$$.fragment,pt),He=d(pt,"EM",{});var Dt=y(He);$(ue.$$.fragment,Dt),Dt.forEach(r),$(le.$$.fragment,pt),pt.forEach(r),tt=_(e),B=d(e,"DIV",{style:!0});var Tt=y(B);$(he.$$.fragment,Tt),Tt.forEach(r),nt=_(e),G=d(e,"DIV",{style:!0});var Vt=y(G);$(ge.$$.fragment,Vt),Vt.forEach(r),rt=_(e),$(K.$$.fragment,e),at=_(e),U=d(e,"DIV",{style:!0});var At=y(U);$(we.$$.fragment,At),At.forEach(r),it=_(e),ke=d(e,"H2",{});var Ht=y(ke);$(ce.$$.fragment,Ht),Ht.forEach(r),ot=_(e),F=d(e,"DIV",{style:!0});var Lt=y(F);$(ve.$$.fragment,Lt),Lt.forEach(r),st=_(e),T=d(e,"UL",{});var De=y(T);Le=d(De,"LI",{});var Pt=y(Le);$(de.$$.fragment,Pt),Pt.forEach(r),gt=_(De),Pe=d(De,"LI",{});var jt=y(Pe);$(ye.$$.fragment,jt),jt.forEach(r),wt=_(De),je=d(De,"LI",{});var Ct=y(je);$(xe.$$.fragment,Ct),Ct.forEach(r),De.forEach(r),this.h()},h(){g(l,"margin-top","10px"),g(l,"margin-bottom","10px"),g(H,"margin-top","10px"),g(H,"margin-bottom","10px"),g(P,"margin-top","10px"),g(P,"margin-bottom","10px"),g(E,"margin-top","10px"),g(E,"margin-bottom","10px"),g(j,"margin-top","10px"),g(j,"margin-bottom","10px"),g(C,"margin-top","10px"),g(C,"margin-bottom","10px"),g(Y,"margin-top","10px"),g(Y,"margin-bottom","10px"),g(L,"margin-top","10px"),g(L,"margin-bottom","10px"),g(I,"margin-top","10px"),g(I,"margin-bottom","10px"),g(q,"margin-top","10px"),g(q,"margin-bottom","10px"),g(N,"margin-top","10px"),g(N,"margin-bottom","10px"),g(D,"margin-top","10px"),g(D,"margin-bottom","10px"),g(B,"margin-top","10px"),g(B,"margin-bottom","10px"),g(G,"margin-top","10px"),g(G,"margin-bottom","10px"),g(U,"margin-top","10px"),g(U,"margin-bottom","10px"),g(F,"margin-top","10px"),g(F,"margin-bottom","10px")},m(e,a){o(e,n,a),f(i,n,null),o(e,t,a),o(e,l,a),f(b,l,null),V(l,A),f(k,A,null),o(e,qe,a),o(e,H,a),f(J,H,null),V(H,Te),f(O,Te,null),o(e,ze,a),o(e,P,a),f(Q,P,null),o(e,Ne,a),o(e,E,a),f(R,E,null),V(E,Ve),f(X,Ve,null),f(Z,E,null),o(e,Se,a),o(e,j,a),f(ee,j,null),o(e,Be,a),o(e,_e,a),f(te,_e,null),o(e,Ge,a),o(e,C,a),f(ne,C,null),o(e,Ke,a),o(e,Y,a),f(re,Y,null),o(e,Ue,a),o(e,L,a),f(ae,L,null),V(L,Ae),f(ie,Ae,null),o(e,Fe,a),o(e,I,a),f(oe,I,null),f(W,I,null),f(se,I,null),o(e,Je,a),f(M,e,a),o(e,Oe,a),o(e,q,a),f($e,q,null),o(e,Qe,a),f(z,e,a),o(e,Re,a),o(e,be,a),f(fe,be,null),o(e,Xe,a),o(e,N,a),f(me,N,null),o(e,Ze,a),f(S,e,a),o(e,et,a),o(e,D,a),f(pe,D,null),V(D,He),f(ue,He,null),f(le,D,null),o(e,tt,a),o(e,B,a),f(he,B,null),o(e,nt,a),o(e,G,a),f(ge,G,null),o(e,rt,a),f(K,e,a),o(e,at,a),o(e,U,a),f(we,U,null),o(e,it,a),o(e,ke,a),f(ce,ke,null),o(e,ot,a),o(e,F,a),f(ve,F,null),o(e,st,a),o(e,T,a),V(T,Le),f(de,Le,null),V(T,gt),V(T,Pe),f(ye,Pe,null),V(T,wt),V(T,je),f(xe,je,null),$t=!0},p(e,[a]){const Ee={};a&1&&(Ee.$$scope={dirty:a,ctx:e}),W.$set(Ee);const Ce={};a&1&&(Ce.$$scope={dirty:a,ctx:e}),M.$set(Ce);const Ie={};a&1&&(Ie.$$scope={dirty:a,ctx:e}),z.$set(Ie);const Ye={};a&1&&(Ye.$$scope={dirty:a,ctx:e}),S.$set(Ye);const We={};a&1&&(We.$$scope={dirty:a,ctx:e}),K.$set(We)},i(e){$t||(m(i.$$.fragment,e),m(b.$$.fragment,e),m(k.$$.fragment,e),m(J.$$.fragment,e),m(O.$$.fragment,e),m(Q.$$.fragment,e),m(R.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(ne.$$.fragment,e),m(re.$$.fragment,e),m(ae.$$.fragment,e),m(ie.$$.fragment,e),m(oe.$$.fragment,e),m(W.$$.fragment,e),m(se.$$.fragment,e),m(M.$$.fragment,e),m($e.$$.fragment,e),m(z.$$.fragment,e),m(fe.$$.fragment,e),m(me.$$.fragment,e),m(S.$$.fragment,e),m(pe.$$.fragment,e),m(ue.$$.fragment,e),m(le.$$.fragment,e),m(he.$$.fragment,e),m(ge.$$.fragment,e),m(K.$$.fragment,e),m(we.$$.fragment,e),m(ce.$$.fragment,e),m(ve.$$.fragment,e),m(de.$$.fragment,e),m(ye.$$.fragment,e),m(xe.$$.fragment,e),$t=!0)},o(e){p(i.$$.fragment,e),p(b.$$.fragment,e),p(k.$$.fragment,e),p(J.$$.fragment,e),p(O.$$.fragment,e),p(Q.$$.fragment,e),p(R.$$.fragment,e),p(X.$$.fragment,e),p(Z.$$.fragment,e),p(ee.$$.fragment,e),p(te.$$.fragment,e),p(ne.$$.fragment,e),p(re.$$.fragment,e),p(ae.$$.fragment,e),p(ie.$$.fragment,e),p(oe.$$.fragment,e),p(W.$$.fragment,e),p(se.$$.fragment,e),p(M.$$.fragment,e),p($e.$$.fragment,e),p(z.$$.fragment,e),p(fe.$$.fragment,e),p(me.$$.fragment,e),p(S.$$.fragment,e),p(pe.$$.fragment,e),p(ue.$$.fragment,e),p(le.$$.fragment,e),p(he.$$.fragment,e),p(ge.$$.fragment,e),p(K.$$.fragment,e),p(we.$$.fragment,e),p(ce.$$.fragment,e),p(ve.$$.fragment,e),p(de.$$.fragment,e),p(ye.$$.fragment,e),p(xe.$$.fragment,e),$t=!1},d(e){e&&r(n),u(i),e&&r(t),e&&r(l),u(b),u(k),e&&r(qe),e&&r(H),u(J),u(O),e&&r(ze),e&&r(P),u(Q),e&&r(Ne),e&&r(E),u(R),u(X),u(Z),e&&r(Se),e&&r(j),u(ee),e&&r(Be),e&&r(_e),u(te),e&&r(Ge),e&&r(C),u(ne),e&&r(Ke),e&&r(Y),u(re),e&&r(Ue),e&&r(L),u(ae),u(ie),e&&r(Fe),e&&r(I),u(oe),u(W),u(se),e&&r(Je),u(M,e),e&&r(Oe),e&&r(q),u($e),e&&r(Qe),u(z,e),e&&r(Re),e&&r(be),u(fe),e&&r(Xe),e&&r(N),u(me),e&&r(Ze),u(S,e),e&&r(et),e&&r(D),u(pe),u(ue),u(le),e&&r(tt),e&&r(B),u(he),e&&r(nt),e&&r(G),u(ge),e&&r(rt),u(K,e),e&&r(at),e&&r(U),u(we),e&&r(it),e&&r(ke),u(ce),e&&r(ot),e&&r(F),u(ve),e&&r(st),e&&r(T),u(de),u(ye),u(xe)}}}class gn extends Mt{constructor(n){super(),qt(this,n,null,an,zt,{})}}export{gn as default};
