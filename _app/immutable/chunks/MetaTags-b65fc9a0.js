import{S as st,i as dt,s as bt,l as A,e as T,ab as kt,m as w,h as s,p as a,F as K,B as F,b as k,I as G,a as y,c as L,a4 as ht,a5 as q,a6 as pt}from"./index-087a81d1.js";function V(f,t,i){const e=f.slice();return e[16]=t[i],e}function j(f,t,i){const e=f.slice();return e[16]=t[i],e}function z(f,t,i){const e=f.slice();return e[21]=t[i],e}function H(f,t,i){const e=f.slice();return e[24]=t[i],e}function J(f,t,i){const e=f.slice();return e[16]=t[i],e}function O(f,t,i){const e=f.slice();return e[38]=t[i],e}function Q(f,t,i){const e=f.slice();return e[41]=t[i],e}function R(f,t,i){const e=f.slice();return e[44]=t[i],e}function W(f,t,i){const e=f.slice();return e[16]=t[i],e}function X(f,t,i){const e=f.slice();return e[29]=t[i],e}function Y(f,t,i){const e=f.slice();return e[16]=t[i],e}function Z(f,t,i){const e=f.slice();return e[29]=t[i],e}function $(f,t,i){const e=f.slice();return e[47]=t[i],e}function x(f){let t;return{c(){t=A("meta"),this.h()},l(i){t=w(i,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","description"),a(t,"content",f[2])},m(i,e){k(i,t,e)},p(i,e){e[0]&4&&a(t,"content",i[2])},d(i){i&&s(t)}}}function ee(f){let t;return{c(){t=A("link"),this.h()},l(i){t=w(i,"LINK",{rel:!0,href:!0}),this.h()},h(){a(t,"rel","canonical"),a(t,"href",f[8])},m(i,e){k(i,t,e)},p(i,e){e[0]&256&&a(t,"href",i[8])},d(i){i&&s(t)}}}function te(f){let t,i,e;return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,media:!0,href:!0}),this.h()},h(){a(t,"rel","alternate"),a(t,"media",i=f[3].media),a(t,"href",e=f[3].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&8&&i!==(i=l[3].media)&&a(t,"media",i),o[0]&8&&e!==(e=l[3].href)&&a(t,"href",e)},d(l){l&&s(t)}}}function le(f){let t,i=f[4],e=[];for(let l=0;l<i.length;l+=1)e[l]=ie($(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&16){i=l[4];let n;for(n=0;n<i.length;n+=1){const m=$(l,i,n);e[n]?e[n].p(m,o):(e[n]=ie(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function ie(f){let t,i,e;return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,hreflang:!0,href:!0}),this.h()},h(){a(t,"rel","alternate"),a(t,"hreflang",i=f[47].hrefLang),a(t,"href",e=f[47].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&16&&i!==(i=l[47].hrefLang)&&a(t,"hreflang",i),o[0]&16&&e!==(e=l[47].href)&&a(t,"href",e)},d(l){l&&s(t)}}}function fe(f){let t,i,e,l,o,n,m,p=f[5].cardType&&ne(f),r=f[5].site&&oe(f),u=f[5].handle&&re(f),d=f[5].title&&_e(f),b=f[5].description&&ue(f),c=f[5].image&&ae(f),h=f[5].imageAlt&&ce(f);return{c(){p&&p.c(),t=y(),r&&r.c(),i=y(),u&&u.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),c&&c.c(),n=y(),h&&h.c(),m=T()},l(_){p&&p.l(_),t=L(_),r&&r.l(_),i=L(_),u&&u.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),c&&c.l(_),n=L(_),h&&h.l(_),m=T()},m(_,N){p&&p.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),u&&u.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),c&&c.m(_,N),k(_,n,N),h&&h.m(_,N),k(_,m,N)},p(_,N){_[5].cardType?p?p.p(_,N):(p=ne(_),p.c(),p.m(t.parentNode,t)):p&&(p.d(1),p=null),_[5].site?r?r.p(_,N):(r=oe(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[5].handle?u?u.p(_,N):(u=re(_),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),_[5].title?d?d.p(_,N):(d=_e(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[5].description?b?b.p(_,N):(b=ue(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[5].image?c?c.p(_,N):(c=ae(_),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),_[5].imageAlt?h?h.p(_,N):(h=ce(_),h.c(),h.m(m.parentNode,m)):h&&(h.d(1),h=null)},d(_){p&&p.d(_),_&&s(t),r&&r.d(_),_&&s(i),u&&u.d(_),_&&s(e),d&&d.d(_),_&&s(l),b&&b.d(_),_&&s(o),c&&c.d(_),_&&s(n),h&&h.d(_),_&&s(m)}}}function ne(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:card"),a(t,"content",i=f[5].cardType)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].cardType)&&a(t,"content",i)},d(e){e&&s(t)}}}function oe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:site"),a(t,"content",i=f[5].site)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].site)&&a(t,"content",i)},d(e){e&&s(t)}}}function re(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:creator"),a(t,"content",i=f[5].handle)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].handle)&&a(t,"content",i)},d(e){e&&s(t)}}}function _e(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:title"),a(t,"content",i=f[5].title)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].title)&&a(t,"content",i)},d(e){e&&s(t)}}}function ue(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:description"),a(t,"content",i=f[5].description)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].description)&&a(t,"content",i)},d(e){e&&s(t)}}}function ae(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:image"),a(t,"content",i=f[5].image)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].image)&&a(t,"content",i)},d(e){e&&s(t)}}}function ce(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){a(t,"name","twitter:image:alt"),a(t,"content",i=f[5].imageAlt)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].imageAlt)&&a(t,"content",i)},d(e){e&&s(t)}}}function me(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","fb:app_id"),a(t,"content",i=f[6].appId)},m(e,l){k(e,t,l)},p(e,l){l[0]&64&&i!==(i=e[6].appId)&&a(t,"content",i)},d(e){e&&s(t)}}}function he(f){let t,i,e,l,o,n,m,p,r=(f[7].url||f[8])&&pe(f),u=f[7].type&&se(f),d=(f[7].title||f[12])&&Re(f),b=(f[7].description||f[2])&&We(f),c=f[7].images&&f[7].images.length&&Xe(f),h=f[7].videos&&f[7].videos.length&&et(f),_=f[7].locale&&rt(f),N=f[7].site_name&&_t(f);return{c(){r&&r.c(),t=y(),u&&u.c(),i=y(),d&&d.c(),e=y(),b&&b.c(),l=y(),c&&c.c(),o=y(),h&&h.c(),n=y(),_&&_.c(),m=y(),N&&N.c(),p=T()},l(v){r&&r.l(v),t=L(v),u&&u.l(v),i=L(v),d&&d.l(v),e=L(v),b&&b.l(v),l=L(v),c&&c.l(v),o=L(v),h&&h.l(v),n=L(v),_&&_.l(v),m=L(v),N&&N.l(v),p=T()},m(v,E){r&&r.m(v,E),k(v,t,E),u&&u.m(v,E),k(v,i,E),d&&d.m(v,E),k(v,e,E),b&&b.m(v,E),k(v,l,E),c&&c.m(v,E),k(v,o,E),h&&h.m(v,E),k(v,n,E),_&&_.m(v,E),k(v,m,E),N&&N.m(v,E),k(v,p,E)},p(v,E){v[7].url||v[8]?r?r.p(v,E):(r=pe(v),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),v[7].type?u?u.p(v,E):(u=se(v),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),v[7].title||v[12]?d?d.p(v,E):(d=Re(v),d.c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null),v[7].description||v[2]?b?b.p(v,E):(b=We(v),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),v[7].images&&v[7].images.length?c?c.p(v,E):(c=Xe(v),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null),v[7].videos&&v[7].videos.length?h?h.p(v,E):(h=et(v),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null),v[7].locale?_?_.p(v,E):(_=rt(v),_.c(),_.m(m.parentNode,m)):_&&(_.d(1),_=null),v[7].site_name?N?N.p(v,E):(N=_t(v),N.c(),N.m(p.parentNode,p)):N&&(N.d(1),N=null)},d(v){r&&r.d(v),v&&s(t),u&&u.d(v),v&&s(i),d&&d.d(v),v&&s(e),b&&b.d(v),v&&s(l),c&&c.d(v),v&&s(o),h&&h.d(v),v&&s(n),_&&_.d(v),v&&s(m),N&&N.d(v),v&&s(p)}}}function pe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:url"),a(t,"content",i=f[7].url||f[8])},m(e,l){k(e,t,l)},p(e,l){l[0]&384&&i!==(i=e[7].url||e[8])&&a(t,"content",i)},d(e){e&&s(t)}}}function se(f){let t,i,e,l,o,n,m,p;function r(b,c){if(c[0]&128&&(l=null),c[0]&128&&(o=null),c[0]&128&&(n=null),c[0]&128&&(m=null),l==null&&(l=!!(b[7].type.toLowerCase()==="profile"&&b[7].profile)),l)return At;if(o==null&&(o=!!(b[7].type.toLowerCase()==="book"&&b[7].book)),o)return Tt;if(n==null&&(n=!!(b[7].type.toLowerCase()==="article"&&b[7].article)),n)return Nt;if(m==null&&(m=!!(b[7].type.toLowerCase()==="video.movie"||b[7].type.toLowerCase()==="video.episode"||b[7].type.toLowerCase()==="video.tv_show"||b[7].type.toLowerCase()==="video.other"&&b[7].video)),m)return vt}let u=r(f,[-1,-1]),d=u&&u(f);return{c(){t=A("meta"),e=y(),d&&d.c(),p=T(),this.h()},l(b){t=w(b,"META",{property:!0,content:!0}),e=L(b),d&&d.l(b),p=T(),this.h()},h(){a(t,"property","og:type"),a(t,"content",i=f[7].type.toLowerCase())},m(b,c){k(b,t,c),k(b,e,c),d&&d.m(b,c),k(b,p,c)},p(b,c){c[0]&128&&i!==(i=b[7].type.toLowerCase())&&a(t,"content",i),u===(u=r(b,c))&&d?d.p(b,c):(d&&d.d(1),d=u&&u(b),d&&(d.c(),d.m(p.parentNode,p)))},d(b){b&&s(t),b&&s(e),d&&d.d(b),b&&s(p)}}}function vt(f){let t,i,e,l,o,n,m,p=f[7].video.actors&&f[7].video.actors.length&&de(f),r=f[7].video.directors&&f[7].video.directors.length&&Ne(f),u=f[7].video.writers&&f[7].video.writers.length&&Ae(f),d=f[7].video.duration&&Me(f),b=f[7].video.releaseDate&&ge(f),c=f[7].video.tags&&f[7].video.tags.length&&Ee(f),h=f[7].video.series&&Le(f);return{c(){p&&p.c(),t=y(),r&&r.c(),i=y(),u&&u.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),c&&c.c(),n=y(),h&&h.c(),m=T()},l(_){p&&p.l(_),t=L(_),r&&r.l(_),i=L(_),u&&u.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),c&&c.l(_),n=L(_),h&&h.l(_),m=T()},m(_,N){p&&p.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),u&&u.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),c&&c.m(_,N),k(_,n,N),h&&h.m(_,N),k(_,m,N)},p(_,N){_[7].video.actors&&_[7].video.actors.length?p?p.p(_,N):(p=de(_),p.c(),p.m(t.parentNode,t)):p&&(p.d(1),p=null),_[7].video.directors&&_[7].video.directors.length?r?r.p(_,N):(r=Ne(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[7].video.writers&&_[7].video.writers.length?u?u.p(_,N):(u=Ae(_),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),_[7].video.duration?d?d.p(_,N):(d=Me(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[7].video.releaseDate?b?b.p(_,N):(b=ge(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[7].video.tags&&_[7].video.tags.length?c?c.p(_,N):(c=Ee(_),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),_[7].video.series?h?h.p(_,N):(h=Le(_),h.c(),h.m(m.parentNode,m)):h&&(h.d(1),h=null)},d(_){p&&p.d(_),_&&s(t),r&&r.d(_),_&&s(i),u&&u.d(_),_&&s(e),d&&d.d(_),_&&s(l),b&&b.d(_),_&&s(o),c&&c.d(_),_&&s(n),h&&h.d(_),_&&s(m)}}}function Nt(f){let t,i,e,l,o,n,m=f[7].article.publishedTime&&Se(f),p=f[7].article.modifiedTime&&Ce(f),r=f[7].article.expirationTime&&De(f),u=f[7].article.authors&&f[7].article.authors.length&&Ie(f),d=f[7].article.section&&Ge(f),b=f[7].article.tags&&f[7].article.tags.length&&Ke(f);return{c(){m&&m.c(),t=y(),p&&p.c(),i=y(),r&&r.c(),e=y(),u&&u.c(),l=y(),d&&d.c(),o=y(),b&&b.c(),n=T()},l(c){m&&m.l(c),t=L(c),p&&p.l(c),i=L(c),r&&r.l(c),e=L(c),u&&u.l(c),l=L(c),d&&d.l(c),o=L(c),b&&b.l(c),n=T()},m(c,h){m&&m.m(c,h),k(c,t,h),p&&p.m(c,h),k(c,i,h),r&&r.m(c,h),k(c,e,h),u&&u.m(c,h),k(c,l,h),d&&d.m(c,h),k(c,o,h),b&&b.m(c,h),k(c,n,h)},p(c,h){c[7].article.publishedTime?m?m.p(c,h):(m=Se(c),m.c(),m.m(t.parentNode,t)):m&&(m.d(1),m=null),c[7].article.modifiedTime?p?p.p(c,h):(p=Ce(c),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null),c[7].article.expirationTime?r?r.p(c,h):(r=De(c),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c[7].article.authors&&c[7].article.authors.length?u?u.p(c,h):(u=Ie(c),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null),c[7].article.section?d?d.p(c,h):(d=Ge(c),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),c[7].article.tags&&c[7].article.tags.length?b?b.p(c,h):(b=Ke(c),b.c(),b.m(n.parentNode,n)):b&&(b.d(1),b=null)},d(c){m&&m.d(c),c&&s(t),p&&p.d(c),c&&s(i),r&&r.d(c),c&&s(e),u&&u.d(c),c&&s(l),d&&d.d(c),c&&s(o),b&&b.d(c),c&&s(n)}}}function Tt(f){let t,i,e,l,o=f[7].book.authors&&f[7].book.authors.length&&qe(f),n=f[7].book.isbn&&Fe(f),m=f[7].book.releaseDate&&Ve(f),p=f[7].book.tags&&f[7].book.tags.length&&je(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),m&&m.c(),e=y(),p&&p.c(),l=T()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),m&&m.l(r),e=L(r),p&&p.l(r),l=T()},m(r,u){o&&o.m(r,u),k(r,t,u),n&&n.m(r,u),k(r,i,u),m&&m.m(r,u),k(r,e,u),p&&p.m(r,u),k(r,l,u)},p(r,u){r[7].book.authors&&r[7].book.authors.length?o?o.p(r,u):(o=qe(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].book.isbn?n?n.p(r,u):(n=Fe(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].book.releaseDate?m?m.p(r,u):(m=Ve(r),m.c(),m.m(e.parentNode,e)):m&&(m.d(1),m=null),r[7].book.tags&&r[7].book.tags.length?p?p.p(r,u):(p=je(r),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},d(r){o&&o.d(r),r&&s(t),n&&n.d(r),r&&s(i),m&&m.d(r),r&&s(e),p&&p.d(r),r&&s(l)}}}function At(f){let t,i,e,l,o=f[7].profile.firstName&&He(f),n=f[7].profile.lastName&&Je(f),m=f[7].profile.username&&Oe(f),p=f[7].profile.gender&&Qe(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),m&&m.c(),e=y(),p&&p.c(),l=T()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),m&&m.l(r),e=L(r),p&&p.l(r),l=T()},m(r,u){o&&o.m(r,u),k(r,t,u),n&&n.m(r,u),k(r,i,u),m&&m.m(r,u),k(r,e,u),p&&p.m(r,u),k(r,l,u)},p(r,u){r[7].profile.firstName?o?o.p(r,u):(o=He(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].profile.lastName?n?n.p(r,u):(n=Je(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].profile.username?m?m.p(r,u):(m=Oe(r),m.c(),m.m(e.parentNode,e)):m&&(m.d(1),m=null),r[7].profile.gender?p?p.p(r,u):(p=Qe(r),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},d(r){o&&o.d(r),r&&s(t),n&&n.d(r),r&&s(i),m&&m.d(r),r&&s(e),p&&p.d(r),r&&s(l)}}}function de(f){let t,i=f[7].video.actors,e=[];for(let l=0;l<i.length;l+=1)e[l]=ve(R(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.actors;let n;for(n=0;n<i.length;n+=1){const m=R(l,i,n);e[n]?e[n].p(m,o):(e[n]=ve(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function be(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:actor"),a(t,"content",i=f[44].profile)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].profile)&&a(t,"content",i)},d(e){e&&s(t)}}}function ke(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:actor:role"),a(t,"content",i=f[44].role)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].role)&&a(t,"content",i)},d(e){e&&s(t)}}}function ve(f){let t,i,e=f[44].profile&&be(f),l=f[44].role&&ke(f);return{c(){e&&e.c(),t=y(),l&&l.c(),i=T()},l(o){e&&e.l(o),t=L(o),l&&l.l(o),i=T()},m(o,n){e&&e.m(o,n),k(o,t,n),l&&l.m(o,n),k(o,i,n)},p(o,n){o[44].profile?e?e.p(o,n):(e=be(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),o[44].role?l?l.p(o,n):(l=ke(o),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(o){e&&e.d(o),o&&s(t),l&&l.d(o),o&&s(i)}}}function Ne(f){let t,i=f[7].video.directors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Te(Q(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.directors;let n;for(n=0;n<i.length;n+=1){const m=Q(l,i,n);e[n]?e[n].p(m,o):(e[n]=Te(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function Te(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:director"),a(t,"content",i=f[41])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[41])&&a(t,"content",i)},d(e){e&&s(t)}}}function Ae(f){let t,i=f[7].video.writers,e=[];for(let l=0;l<i.length;l+=1)e[l]=we(O(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.writers;let n;for(n=0;n<i.length;n+=1){const m=O(l,i,n);e[n]?e[n].p(m,o):(e[n]=we(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function we(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:writer"),a(t,"content",i=f[38])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[38])&&a(t,"content",i)},d(e){e&&s(t)}}}function Me(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:duration"),a(t,"content",i=f[7].video.duration.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.duration.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function ge(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:release_date"),a(t,"content",i=f[7].video.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.releaseDate)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ee(f){let t,i=f[7].video.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=ye(J(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.tags;let n;for(n=0;n<i.length;n+=1){const m=J(l,i,n);e[n]?e[n].p(m,o):(e[n]=ye(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function ye(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:tag"),a(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&a(t,"content",i)},d(e){e&&s(t)}}}function Le(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","video:series"),a(t,"content",i=f[7].video.series)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.series)&&a(t,"content",i)},d(e){e&&s(t)}}}function Se(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:published_time"),a(t,"content",i=f[7].article.publishedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.publishedTime)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ce(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:modified_time"),a(t,"content",i=f[7].article.modifiedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.modifiedTime)&&a(t,"content",i)},d(e){e&&s(t)}}}function De(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:expiration_time"),a(t,"content",i=f[7].article.expirationTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.expirationTime)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ie(f){let t,i=f[7].article.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Pe(X(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.authors;let n;for(n=0;n<i.length;n+=1){const m=X(l,i,n);e[n]?e[n].p(m,o):(e[n]=Pe(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function Pe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:author"),a(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&a(t,"content",i)},d(e){e&&s(t)}}}function Ge(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:section"),a(t,"content",i=f[7].article.section)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.section)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ke(f){let t,i=f[7].article.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ue(W(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.tags;let n;for(n=0;n<i.length;n+=1){const m=W(l,i,n);e[n]?e[n].p(m,o):(e[n]=Ue(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function Ue(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","article:tag"),a(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&a(t,"content",i)},d(e){e&&s(t)}}}function qe(f){let t,i=f[7].book.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Be(Z(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.authors;let n;for(n=0;n<i.length;n+=1){const m=Z(l,i,n);e[n]?e[n].p(m,o):(e[n]=Be(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function Be(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","book:author"),a(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&a(t,"content",i)},d(e){e&&s(t)}}}function Fe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","book:isbn"),a(t,"content",i=f[7].book.isbn)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.isbn)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ve(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","book:release_date"),a(t,"content",i=f[7].book.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.releaseDate)&&a(t,"content",i)},d(e){e&&s(t)}}}function je(f){let t,i=f[7].book.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=ze(Y(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.tags;let n;for(n=0;n<i.length;n+=1){const m=Y(l,i,n);e[n]?e[n].p(m,o):(e[n]=ze(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function ze(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","book:tag"),a(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&a(t,"content",i)},d(e){e&&s(t)}}}function He(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","profile:first_name"),a(t,"content",i=f[7].profile.firstName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.firstName)&&a(t,"content",i)},d(e){e&&s(t)}}}function Je(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","profile:last_name"),a(t,"content",i=f[7].profile.lastName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.lastName)&&a(t,"content",i)},d(e){e&&s(t)}}}function Oe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","profile:username"),a(t,"content",i=f[7].profile.username)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.username)&&a(t,"content",i)},d(e){e&&s(t)}}}function Qe(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","profile:gender"),a(t,"content",i=f[7].profile.gender)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.gender)&&a(t,"content",i)},d(e){e&&s(t)}}}function Re(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:title"),a(t,"content",i=f[7].title||f[12])},m(e,l){k(e,t,l)},p(e,l){l[0]&4224&&i!==(i=e[7].title||e[12])&&a(t,"content",i)},d(e){e&&s(t)}}}function We(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:description"),a(t,"content",i=f[7].description||f[2])},m(e,l){k(e,t,l)},p(e,l){l[0]&132&&i!==(i=e[7].description||e[2])&&a(t,"content",i)},d(e){e&&s(t)}}}function Xe(f){let t,i=f[7].images,e=[];for(let l=0;l<i.length;l+=1)e[l]=xe(H(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].images;let n;for(n=0;n<i.length;n+=1){const m=H(l,i,n);e[n]?e[n].p(m,o):(e[n]=xe(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function Ye(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:image:alt"),a(t,"content",i=f[24].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].alt)&&a(t,"content",i)},d(e){e&&s(t)}}}function Ze(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:image:width"),a(t,"content",i=f[24].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].width.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function $e(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:image:height"),a(t,"content",i=f[24].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].height.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function xe(f){let t,i,e,l,o,n,m=f[24].alt&&Ye(f),p=f[24].width&&Ze(f),r=f[24].height&&$e(f);return{c(){t=A("meta"),e=y(),m&&m.c(),l=y(),p&&p.c(),o=y(),r&&r.c(),n=T(),this.h()},l(u){t=w(u,"META",{property:!0,content:!0}),e=L(u),m&&m.l(u),l=L(u),p&&p.l(u),o=L(u),r&&r.l(u),n=T(),this.h()},h(){a(t,"property","og:image"),a(t,"content",i=f[24].url)},m(u,d){k(u,t,d),k(u,e,d),m&&m.m(u,d),k(u,l,d),p&&p.m(u,d),k(u,o,d),r&&r.m(u,d),k(u,n,d)},p(u,d){d[0]&128&&i!==(i=u[24].url)&&a(t,"content",i),u[24].alt?m?m.p(u,d):(m=Ye(u),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),u[24].width?p?p.p(u,d):(p=Ze(u),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),u[24].height?r?r.p(u,d):(r=$e(u),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(u){u&&s(t),u&&s(e),m&&m.d(u),u&&s(l),p&&p.d(u),u&&s(o),r&&r.d(u),u&&s(n)}}}function et(f){let t,i=f[7].videos,e=[];for(let l=0;l<i.length;l+=1)e[l]=ot(z(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].videos;let n;for(n=0;n<i.length;n+=1){const m=z(l,i,n);e[n]?e[n].p(m,o):(e[n]=ot(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function tt(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:video:alt"),a(t,"content",i=f[21].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].alt)&&a(t,"content",i)},d(e){e&&s(t)}}}function lt(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:video:width"),a(t,"content",i=f[21].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].width.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function it(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:video:height"),a(t,"content",i=f[21].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].height.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function ft(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:video:secure_url"),a(t,"content",i=f[21].secureUrl.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].secureUrl.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function nt(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:video:type"),a(t,"content",i=f[21].type.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].type.toString())&&a(t,"content",i)},d(e){e&&s(t)}}}function ot(f){let t,i,e,l,o,n,m,p,r=f[21].alt&&tt(f),u=f[21].width&&lt(f),d=f[21].height&&it(f),b=f[21].secureUrl&&ft(f),c=f[21].type&&nt(f);return{c(){t=A("meta"),e=y(),r&&r.c(),l=y(),u&&u.c(),o=y(),d&&d.c(),n=y(),b&&b.c(),m=y(),c&&c.c(),p=T(),this.h()},l(h){t=w(h,"META",{property:!0,content:!0}),e=L(h),r&&r.l(h),l=L(h),u&&u.l(h),o=L(h),d&&d.l(h),n=L(h),b&&b.l(h),m=L(h),c&&c.l(h),p=T(),this.h()},h(){a(t,"property","og:video"),a(t,"content",i=f[21].url)},m(h,_){k(h,t,_),k(h,e,_),r&&r.m(h,_),k(h,l,_),u&&u.m(h,_),k(h,o,_),d&&d.m(h,_),k(h,n,_),b&&b.m(h,_),k(h,m,_),c&&c.m(h,_),k(h,p,_)},p(h,_){_[0]&128&&i!==(i=h[21].url)&&a(t,"content",i),h[21].alt?r?r.p(h,_):(r=tt(h),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),h[21].width?u?u.p(h,_):(u=lt(h),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),h[21].height?d?d.p(h,_):(d=it(h),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null),h[21].secureUrl?b?b.p(h,_):(b=ft(h),b.c(),b.m(m.parentNode,m)):b&&(b.d(1),b=null),h[21].type?c?c.p(h,_):(c=nt(h),c.c(),c.m(p.parentNode,p)):c&&(c.d(1),c=null)},d(h){h&&s(t),h&&s(e),r&&r.d(h),h&&s(l),u&&u.d(h),h&&s(o),d&&d.d(h),h&&s(n),b&&b.d(h),h&&s(m),c&&c.d(h),h&&s(p)}}}function rt(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:locale"),a(t,"content",i=f[7].locale)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].locale)&&a(t,"content",i)},d(e){e&&s(t)}}}function _t(f){let t,i;return{c(){t=A("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){a(t,"property","og:site_name"),a(t,"content",i=f[7].site_name)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].site_name)&&a(t,"content",i)},d(e){e&&s(t)}}}function ut(f){let t,i=f[9],e=[];for(let l=0;l<i.length;l+=1)e[l]=at(j(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&512){i=l[9];let n;for(n=0;n<i.length;n+=1){const m=j(l,i,n);e[n]?e[n].p(m,o):(e[n]=at(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function at(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=ht(e,i[l]);return{c(){t=A("meta"),this.h()},l(l){t=w(l,"META",{}),this.h()},h(){q(t,e)},m(l,o){k(l,t,o)},p(l,o){q(t,e=pt(i,[o[0]&512&&l[16]]))},d(l){l&&s(t)}}}function ct(f){let t,i=f[10],e=[];for(let l=0;l<i.length;l+=1)e[l]=mt(V(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&1024){i=l[10];let n;for(n=0;n<i.length;n+=1){const m=V(l,i,n);e[n]?e[n].p(m,o):(e[n]=mt(m),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){G(e,l),l&&s(t)}}}function mt(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=ht(e,i[l]);return{c(){t=A("link"),this.h()},l(l){t=w(l,"LINK",{}),this.h()},h(){q(t,e)},m(l,o){k(l,t,o)},p(l,o){q(t,e=pt(i,[o[0]&1024&&l[16]]))},d(l){l&&s(t)}}}function wt(f){var U;let t,i,e,l,o,n,m,p,r,u,d,b,c,h;document.title=t=f[12];let _=f[2]&&x(f),N=f[8]&&ee(f),v=f[3]&&te(f),E=f[4]&&f[4].length>0&&le(f),g=f[5]&&fe(f),C=f[6]&&me(f),D=f[7]&&he(f),I=f[9]&&f[9].length>0&&ut(f),P=((U=f[10])==null?void 0:U.length)&&ct(f);return{c(){i=A("meta"),l=A("meta"),_&&_.c(),n=T(),N&&N.c(),m=T(),v&&v.c(),p=T(),E&&E.c(),r=T(),g&&g.c(),u=T(),C&&C.c(),d=T(),D&&D.c(),b=T(),I&&I.c(),c=T(),P&&P.c(),h=T(),this.h()},l(M){const S=kt('[data-svelte="svelte-1h7w4y4"]',document.head);i=w(S,"META",{name:!0,content:!0}),l=w(S,"META",{name:!0,content:!0}),_&&_.l(S),n=T(),N&&N.l(S),m=T(),v&&v.l(S),p=T(),E&&E.l(S),r=T(),g&&g.l(S),u=T(),C&&C.l(S),d=T(),D&&D.l(S),b=T(),I&&I.l(S),c=T(),P&&P.l(S),h=T(),S.forEach(s),this.h()},h(){a(i,"name","robots"),a(i,"content",e=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`),a(l,"name","googlebot"),a(l,"content",o=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`)},m(M,S){K(document.head,i),K(document.head,l),_&&_.m(document.head,null),K(document.head,n),N&&N.m(document.head,null),K(document.head,m),v&&v.m(document.head,null),K(document.head,p),E&&E.m(document.head,null),K(document.head,r),g&&g.m(document.head,null),K(document.head,u),C&&C.m(document.head,null),K(document.head,d),D&&D.m(document.head,null),K(document.head,b),I&&I.m(document.head,null),K(document.head,c),P&&P.m(document.head,null),K(document.head,h)},p(M,S){var B;S[0]&4096&&t!==(t=M[12])&&(document.title=t),S[0]&2051&&e!==(e=`${M[0]?"noindex":"index"},${M[1]?"nofollow":"follow"}${M[11]}`)&&a(i,"content",e),S[0]&2051&&o!==(o=`${M[0]?"noindex":"index"},${M[1]?"nofollow":"follow"}${M[11]}`)&&a(l,"content",o),M[2]?_?_.p(M,S):(_=x(M),_.c(),_.m(n.parentNode,n)):_&&(_.d(1),_=null),M[8]?N?N.p(M,S):(N=ee(M),N.c(),N.m(m.parentNode,m)):N&&(N.d(1),N=null),M[3]?v?v.p(M,S):(v=te(M),v.c(),v.m(p.parentNode,p)):v&&(v.d(1),v=null),M[4]&&M[4].length>0?E?E.p(M,S):(E=le(M),E.c(),E.m(r.parentNode,r)):E&&(E.d(1),E=null),M[5]?g?g.p(M,S):(g=fe(M),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null),M[6]?C?C.p(M,S):(C=me(M),C.c(),C.m(d.parentNode,d)):C&&(C.d(1),C=null),M[7]?D?D.p(M,S):(D=he(M),D.c(),D.m(b.parentNode,b)):D&&(D.d(1),D=null),M[9]&&M[9].length>0?I?I.p(M,S):(I=ut(M),I.c(),I.m(c.parentNode,c)):I&&(I.d(1),I=null),(B=M[10])!=null&&B.length?P?P.p(M,S):(P=ct(M),P.c(),P.m(h.parentNode,h)):P&&(P.d(1),P=null)},i:F,o:F,d(M){s(i),s(l),_&&_.d(M),s(n),N&&N.d(M),s(m),v&&v.d(M),s(p),E&&E.d(M),s(r),g&&g.d(M),s(u),C&&C.d(M),s(d),D&&D.d(M),s(b),I&&I.d(M),s(c),P&&P.d(M),s(h)}}}function Mt(f,t,i){let e,{title:l=""}=t,{titleTemplate:o=""}=t,{noindex:n=!1}=t,{nofollow:m=!1}=t,{robotsProps:p=void 0}=t,{description:r=void 0}=t,{mobileAlternate:u=void 0}=t,{languageAlternates:d=void 0}=t,{twitter:b=void 0}=t,{facebook:c=void 0}=t,{openGraph:h=void 0}=t,{canonical:_=void 0}=t,{additionalMetaTags:N=void 0}=t,{additionalLinkTags:v=void 0}=t,E="";if(p){const{nosnippet:g,maxSnippet:C,maxImagePreview:D,maxVideoPreview:I,noarchive:P,noimageindex:U,notranslate:M,unavailableAfter:S}=p;E=`${g?",nosnippet":""}${C?`,max-snippet:${C}`:""}${D?`,max-image-preview:${D}`:""}${P?",noarchive":""}${S?`,unavailable_after:${S}`:""}${U?",noimageindex":""}${I?`,max-video-preview:${I}`:""}${M?",notranslate":""}`}return f.$$set=g=>{"title"in g&&i(13,l=g.title),"titleTemplate"in g&&i(14,o=g.titleTemplate),"noindex"in g&&i(0,n=g.noindex),"nofollow"in g&&i(1,m=g.nofollow),"robotsProps"in g&&i(15,p=g.robotsProps),"description"in g&&i(2,r=g.description),"mobileAlternate"in g&&i(3,u=g.mobileAlternate),"languageAlternates"in g&&i(4,d=g.languageAlternates),"twitter"in g&&i(5,b=g.twitter),"facebook"in g&&i(6,c=g.facebook),"openGraph"in g&&i(7,h=g.openGraph),"canonical"in g&&i(8,_=g.canonical),"additionalMetaTags"in g&&i(9,N=g.additionalMetaTags),"additionalLinkTags"in g&&i(10,v=g.additionalLinkTags)},f.$$.update=()=>{f.$$.dirty[0]&24576&&i(12,e=o?o.replace(/%s/g,l):l)},[n,m,r,u,d,b,c,h,_,N,v,E,e,l,o,p]}class Et extends st{constructor(t){super(),dt(this,t,Mt,wt,bt,{title:13,titleTemplate:14,noindex:0,nofollow:1,robotsProps:15,description:2,mobileAlternate:3,languageAlternates:4,twitter:5,facebook:6,openGraph:7,canonical:8,additionalMetaTags:9,additionalLinkTags:10},null,[-1,-1])}}export{Et as M};
