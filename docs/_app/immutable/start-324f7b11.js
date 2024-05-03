import{S as xe,i as et,s as tt,a as rt,e as V,c as nt,b as G,g as Q,t as U,d as x,f as C,h as F,j as at,o as Le,k as ot,l as it,m as st,n as $e,p as H,q as lt,r as ct,u as ft,v as K,w as W,x as le,y as z,z as M,A as de}from"./chunks/index-0e9e634d.js";import{g as Ke,f as We,s as Z,a as Se,b as ut,i as pt,c as dt}from"./chunks/singletons-69107a7c.js";function ht(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function mt(n){return n.split("%25").map(decodeURI).join("%25")}function _t(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(n,e){const r=new URL(n);for(const o of gt){let a=r[o];Object.defineProperty(r,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return yt(r),r}function yt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(n){return n.replace(/\/$/,"")+bt}function Et(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ie.delete(o)}return ge(n,e)};const ie=new Map;function kt(n,e){const r=Ze(n,e),o=document.querySelector(r);if(o!=null&&o.textContent){const{body:a,...l}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(r,{body:a,init:l,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,l))}return ge(n,e)}function $t(n,e,r){if(ie.size>0){const o=Ze(n,r),a=ie.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ie.delete(o)}}return ge(e,r)}function Ze(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[],r=[],o=[];let a=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${Lt(n).map((t,c,p)=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(u)return e.push(u[1]),r.push(u[2]),o.push(!1),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(_)return e.push(_[1]),r.push(_[2]),o.push(!0),"(?:/([^/]+))?";const y=c===p.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((L,B)=>{if(B%2){if(L.startsWith("x+"))return Re(String.fromCharCode(parseInt(L.slice(2),16)));if(L.startsWith("u+"))return Re(String.fromCharCode(...L.slice(2).split("-").map(fe=>parseInt(fe,16))));const N=Rt.exec(L);if(!N)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,X,ee,ce,re]=N;return e.push(ce),r.push(re),o.push(!!X),ee?"(.*?)":X?"([^/]*)?":"([^/]+?)"}return y&&L.includes(".")&&(a=!1),Re(L)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:r,optional:o}}function It(n){return!/^\([^)]+\)$/.test(n)}function Lt(n){return n.slice(1).split("/").filter(It)}function St(n,{names:e,types:r,optional:o},a){const l={};for(let t=0;t<e.length;t+=1){const c=e[t],p=r[t];let u=n[t+1];if(u||!o[t]){if(p){const _=a[p];if(!_)throw new Error(`Missing "${p}" param matcher`);if(!_(u))return}l[c]=u??""}}return l}function Re(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(n,e,r,o){const a=new Set(e);return Object.entries(r).map(([c,[p,u,_]])=>{const{pattern:y,names:D,types:R,optional:L}=Ot(c),B={id:c,exec:N=>{const X=y.exec(N);if(X)return St(X,{names:D,types:R,optional:L},o)},errors:[1,..._||[]].map(N=>n[N]),layouts:[0,...u||[]].map(t),leaf:l(p)};return B.errors.length=B.layouts.length=Math.max(B.errors.length,B.layouts.length),B});function l(c){const p=c<0;return p&&(c=~c),[p,n[c]]}function t(c){return c===void 0?c:[a.has(c),n[c]]}}function Pt(n){let e,r,o;var a=n[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=K(a,l(n))),{c(){e&&W(e.$$.fragment),r=V()},l(t){e&&le(e.$$.fragment,t),r=V()},m(t,c){e&&z(e,t,c),G(t,r,c),o=!0},p(t,c){const p={};if(c&4&&(p.data=t[2]),c&2&&(p.form=t[1]),a!==(a=t[0][0])){if(e){Q();const u=e;U(u.$$.fragment,1,0,()=>{M(u,1)}),x()}a?(e=K(a,l(t)),W(e.$$.fragment),C(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(p)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Tt(n){let e,r,o;var a=n[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return a&&(e=K(a,l(n))),{c(){e&&W(e.$$.fragment),r=V()},l(t){e&&le(e.$$.fragment,t),r=V()},m(t,c){e&&z(e,t,c),G(t,r,c),o=!0},p(t,c){const p={};if(c&4&&(p.data=t[2]),c&1051&&(p.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){Q();const u=e;U(u.$$.fragment,1,0,()=>{M(u,1)}),x()}a?(e=K(a,l(t)),W(e.$$.fragment),C(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(p)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function jt(n){let e,r,o;var a=n[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=K(a,l(n))),{c(){e&&W(e.$$.fragment),r=V()},l(t){e&&le(e.$$.fragment,t),r=V()},m(t,c){e&&z(e,t,c),G(t,r,c),o=!0},p(t,c){const p={};if(c&8&&(p.data=t[3]),c&2&&(p.form=t[1]),a!==(a=t[0][1])){if(e){Q();const u=e;U(u.$$.fragment,1,0,()=>{M(u,1)}),x()}a?(e=K(a,l(t)),W(e.$$.fragment),C(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(p)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Dt(n){let e,r,o;var a=n[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return a&&(e=K(a,l(n))),{c(){e&&W(e.$$.fragment),r=V()},l(t){e&&le(e.$$.fragment,t),r=V()},m(t,c){e&&z(e,t,c),G(t,r,c),o=!0},p(t,c){const p={};if(c&8&&(p.data=t[3]),c&1043&&(p.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){Q();const u=e;U(u.$$.fragment,1,0,()=>{M(u,1)}),x()}a?(e=K(a,l(t)),W(e.$$.fragment),C(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(p)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Nt(n){let e,r,o;var a=n[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=K(a,l(n))),{c(){e&&W(e.$$.fragment),r=V()},l(t){e&&le(e.$$.fragment,t),r=V()},m(t,c){e&&z(e,t,c),G(t,r,c),o=!0},p(t,c){const p={};if(c&16&&(p.data=t[4]),c&2&&(p.form=t[1]),a!==(a=t[0][2])){if(e){Q();const u=e;U(u.$$.fragment,1,0,()=>{M(u,1)}),x()}a?(e=K(a,l(t)),W(e.$$.fragment),C(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(p)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Vt(n){let e,r,o,a;const l=[Dt,jt],t=[];function c(p,u){return p[0][2]?0:1}return e=c(n),r=t[e]=l[e](n),{c(){r.c(),o=V()},l(p){r.l(p),o=V()},m(p,u){t[e].m(p,u),G(p,o,u),a=!0},p(p,u){let _=e;e=c(p),e===_?t[e].p(p,u):(Q(),U(t[_],1,1,()=>{t[_]=null}),x(),r=t[e],r?r.p(p,u):(r=t[e]=l[e](p),r.c()),C(r,1),r.m(o.parentNode,o))},i(p){a||(C(r),a=!0)},o(p){U(r),a=!1},d(p){t[e].d(p),p&&F(o)}}}function ze(n){let e,r=n[6]&&Me(n);return{c(){e=ot("div"),r&&r.c(),this.h()},l(o){e=it(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=st(e);r&&r.l(a),a.forEach(F),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,a){G(o,e,a),r&&r.m(e,null)},p(o,a){o[6]?r?r.p(o,a):(r=Me(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&F(e),r&&r.d()}}}function Me(n){let e;return{c(){e=lt(n[7])},l(r){e=ct(r,n[7])},m(r,o){G(r,e,o)},p(r,o){o&128&&ft(e,r[7])},d(r){r&&F(e)}}}function Ut(n){let e,r,o,a,l;const t=[Tt,Pt],c=[];function p(_,y){return _[0][1]?0:1}e=p(n),r=c[e]=t[e](n);let u=n[5]&&ze(n);return{c(){r.c(),o=rt(),u&&u.c(),a=V()},l(_){r.l(_),o=nt(_),u&&u.l(_),a=V()},m(_,y){c[e].m(_,y),G(_,o,y),u&&u.m(_,y),G(_,a,y),l=!0},p(_,[y]){let D=e;e=p(_),e===D?c[e].p(_,y):(Q(),U(c[D],1,1,()=>{c[D]=null}),x(),r=c[e],r?r.p(_,y):(r=c[e]=t[e](_),r.c()),C(r,1),r.m(o.parentNode,o)),_[5]?u?u.p(_,y):(u=ze(_),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i(_){l||(C(r),l=!0)},o(_){U(r),l=!1},d(_){c[e].d(_),_&&F(o),u&&u.d(_),_&&F(a)}}}function Ct(n,e,r){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:p=null}=e,{data_2:u=null}=e;at(o.page.notify);let _=!1,y=!1,D=null;return Le(()=>{const R=o.page.subscribe(()=>{_&&(r(6,y=!0),r(7,D=document.title||"untitled page"))});return r(5,_=!0),R}),n.$$set=R=>{"stores"in R&&r(8,o=R.stores),"page"in R&&r(9,a=R.page),"components"in R&&r(0,l=R.components),"form"in R&&r(1,t=R.form),"data_0"in R&&r(2,c=R.data_0),"data_1"in R&&r(3,p=R.data_1),"data_2"in R&&r(4,u=R.data_2)},n.$$.update=()=>{n.$$.dirty&768&&o.page.set(a)},[l,t,c,p,u,_,y,D,o,a]}class qt extends xe{constructor(e){super(),et(this,e,Ct,Ut,tt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Bt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ft=function(n,e){return new URL(n,e).href},He={},S=function(e,r,o){if(!r||r.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(r.map(l=>{if(l=Ft(l,o),l in He)return;He[l]=!0;const t=l.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let _=a.length-1;_>=0;_--){const y=a[_];if(y.href===l&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":Bt,t||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),t)return new Promise((_,y)=>{u.addEventListener("load",_),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Jt={},we=[()=>S(()=>import("./chunks/0-0c38489b.js"),["./chunks/0-0c38489b.js","./chunks/_layout-da46b06b.js","./components/layout.svelte-a9589a61.js","./chunks/index-0e9e634d.js"],import.meta.url),()=>S(()=>import("./chunks/1-2e672ccf.js"),["./chunks/1-2e672ccf.js","./components/error.svelte-ddb5c979.js","./chunks/index-0e9e634d.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js"],import.meta.url),()=>S(()=>import("./chunks/2-53b7fa84.js"),["./chunks/2-53b7fa84.js","./components/pages/annotate/_layout.svelte-4dad4596.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./assets/_layout-f9089e10.css"],import.meta.url),()=>S(()=>import("./chunks/3-ffd2d506.js"),["./chunks/3-ffd2d506.js","./components/pages/interact/_layout.svelte-b9a75757.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./assets/_layout-f9089e10.css"],import.meta.url),()=>S(()=>import("./chunks/4-a54612e3.js"),["./chunks/4-a54612e3.js","./components/pages/_page.svelte-1ad6307c.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js"],import.meta.url),()=>S(()=>import("./chunks/5-1b4a9462.js"),["./chunks/5-1b4a9462.js","./chunks/_page-2a9d3cfa.js","./components/pages/annotate/_page.svelte-e5fbf7d9.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js"],import.meta.url),()=>S(()=>import("./chunks/6-68acbba7.js"),["./chunks/6-68acbba7.js","./chunks/_page-da46b06b.js","./components/pages/annotate/comm-game/_page.svelte-3ae68dff.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/7-18c0542d.js"),["./chunks/7-18c0542d.js","./chunks/_page-fca24c55.js","./components/pages/annotate/examples/_page.svelte-e6575c86.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/8-b86cb2dc.js"),["./chunks/8-b86cb2dc.js","./chunks/_page-90a7f2f4.js","./components/pages/annotate/finish/_page.svelte-37de65d5.js","./chunks/index-0e9e634d.js"],import.meta.url),()=>S(()=>import("./chunks/9-79004620.js"),["./chunks/9-79004620.js","./chunks/_page-e94d8ac7.js","./components/pages/annotate/login/_page.svelte-0f303d0b.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/10-5f0ec9dc.js"),["./chunks/10-5f0ec9dc.js","./chunks/_page-c0e673fa.js","./components/pages/annotate/nl/_page.svelte-a0117a19.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js"],import.meta.url),()=>S(()=>import("./chunks/11-817cb119.js"),["./chunks/11-817cb119.js","./chunks/_page-b95cbc4a.js","./components/pages/annotate/nl-verify/_page.svelte-b9c534f5.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/12-1673a541.js"),["./chunks/12-1673a541.js","./chunks/_page-7c799ff2.js","./components/pages/annotate/nl-verify-2/_page.svelte-9f697a43.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/13-a50e14b7.js"),["./chunks/13-a50e14b7.js","./chunks/_page-ac8b15c9.js","./components/pages/annotate/tutorial/_page.svelte-4540f824.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./chunks/environment-50df6d54.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/14-edfbe707.js"),["./chunks/14-edfbe707.js","./chunks/_page-134a0c63.js","./components/pages/annotate/verify/_page.svelte-8bb6fc74.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/15-758bb36e.js"),["./chunks/15-758bb36e.js","./chunks/_page-c9e12f54.js","./components/pages/demo/_page.svelte-8d84ad21.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/16-8a6d2f73.js"),["./chunks/16-8a6d2f73.js","./chunks/_page-56160fd5.js","./components/pages/interact/comm-game/_page.svelte-bfb8ec7b.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/17-7e669acd.js"),["./chunks/17-7e669acd.js","./chunks/_page-8f3d95e9.js","./components/pages/interact/examples/_page.svelte-e5b6be81.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/18-fcd8e6dc.js"),["./chunks/18-fcd8e6dc.js","./chunks/_page-8f0fe832.js","./components/pages/interact/finish/_page.svelte-bf146f91.js","./chunks/index-0e9e634d.js"],import.meta.url),()=>S(()=>import("./chunks/19-4988dfb1.js"),["./chunks/19-4988dfb1.js","./chunks/_page-37b1b289.js","./components/pages/interact/login/_page.svelte-9309b179.js","./chunks/index-0e9e634d.js","./chunks/store-b95407d5.js","./chunks/index-5371d31d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/SvelteToast-ff19346a.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url),()=>S(()=>import("./chunks/20-1cc78a4b.js"),["./chunks/20-1cc78a4b.js","./chunks/_page-7f2f0338.js","./components/pages/interact/tutorial/_page.svelte-f30c2393.js","./chunks/index-0e9e634d.js","./chunks/navigation-c15f7844.js","./chunks/singletons-69107a7c.js","./chunks/index-5371d31d.js","./chunks/store-b95407d5.js","./chunks/environment-50df6d54.js","./chunks/stores-3e1ed05a.js","./assets/SvelteToast-42b1db04.css"],import.meta.url)],Gt=[],Kt={"/":[4],"/annotate":[5,[2]],"/annotate/comm-game":[6,[2]],"/annotate/examples":[7,[2]],"/annotate/finish":[8,[2]],"/annotate/login":[9,[2]],"/annotate/nl-verify-2":[12,[2]],"/annotate/nl-verify":[11,[2]],"/annotate/nl":[10,[2]],"/annotate/tutorial":[13,[2]],"/annotate/verify":[14,[2]],"/demo":[15],"/interact/comm-game":[16,[3]],"/interact/examples":[17,[3]],"/interact/finish":[18,[3]],"/interact/login":[19,[3]],"/interact/tutorial":[20,[3]]},Wt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,r){this.status=e,this.location=r}}async function zt(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,a])=>[o,await a])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,Ht=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(n){if(typeof n=="number")return o(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function o(a,l=!1){if(a===Mt)return;if(a===Yt)return NaN;if(a===Xt)return 1/0;if(a===Zt)return-1/0;if(a===Qt)return-0;if(l)throw new Error("Invalid input");if(a in r)return r[a];const t=e[a];if(!t||typeof t!="object")r[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[a]=new Date(t[1]);break;case"Set":const p=new Set;r[a]=p;for(let y=1;y<t.length;y+=1)p.add(o(t[y]));break;case"Map":const u=new Map;r[a]=u;for(let y=1;y<t.length;y+=2)u.set(o(t[y]),o(t[y+1]));break;case"RegExp":r[a]=new RegExp(t[1],t[2]);break;case"Object":r[a]=Object(t[1]);break;case"BigInt":r[a]=BigInt(t[1]);break;case"null":const _=Object.create(null);r[a]=_;for(let y=1;y<t.length;y+=2)_[t[y]]=o(t[y+1]);break}else{const c=new Array(t.length);r[a]=c;for(let p=0;p<t.length;p+=1){const u=t[p];u!==Ht&&(c[p]=o(u))}}else{const c={};r[a]=c;for(const p in t){const u=t[p];c[p]=o(u)}}return r[a]}return o(0)}const Qe="sveltekit:scroll",Y="sveltekit:index",he=At(we,Gt,Kt,Jt),Pe=we[0],Te=we[1];Pe();Te();let se={};try{se=JSON.parse(sessionStorage[Qe])}catch{}function Oe(n){se[n]=Se()}function er({target:n,base:e}){var Fe;const r=[];let o=null;const a={before_navigate:[],after_navigate:[]};let l={branch:[],error:null,url:null},t=!1,c=!1,p=!0,u=!1,_=!1,y=!1,D=!1,R,L=(Fe=history.state)==null?void 0:Fe[Y];L||(L=Date.now(),history.replaceState({...history.state,[Y]:L},"",location.href));const B=se[L];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let N,X,ee;async function ce(){ee=ee||Promise.resolve(),await ee,ee=null;const i=new URL(location.href),f=ve(i,!0);o=null,await je(f,i,[])}async function re(i,{noScroll:f=!1,replaceState:d=!1,keepFocus:s=!1,state:h={},invalidateAll:m=!1},g,b){return typeof i=="string"&&(i=new URL(i,Ke(document))),Ee({url:i,scroll:f?Se():null,keepfocus:s,redirect_chain:g,details:{state:h,replaceState:d},nav_token:b,accepted:()=>{m&&(D=!0)},blocked:()=>{},type:"goto"})}async function fe(i){const f=ve(i,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${i}`);return o={id:f.id,promise:Ve(f).then(d=>(d.type==="loaded"&&d.state.error&&(o=null),d))},o.promise}async function je(i,f,d,s,h={},m){var b,E;X=h;let g=i&&await Ve(i);if(g||(g=await Be(f,{id:null},oe(new Error(`Not found: ${f.pathname}`),{url:f,params:{},route:{id:null}}),404)),f=(i==null?void 0:i.url)||f,X!==h)return!1;if(g.type==="redirect")if(d.length>10||d.includes(f.pathname))g=await ue({status:500,error:oe(new Error("Redirect loop"),{url:f,params:{},route:{id:null}}),url:f,route:{id:null}});else return re(new URL(g.location,f).href,{},[...d,f.pathname],h),!1;else((E=(b=g.props)==null?void 0:b.page)==null?void 0:E.status)>=400&&await Z.updated.check()&&await pe(f);if(r.length=0,D=!1,u=!0,s&&s.details){const{details:w}=s,O=w.replaceState?0:1;w.state[Y]=L+=O,history[w.replaceState?"replaceState":"pushState"](w.state,"",f)}if(o=null,c){l=g.state,g.props.page&&(g.props.page.url=f);const w=_e();R.$set(g.props),w()}else De(g);if(s){const{scroll:w,keepfocus:O}=s;if(O||Ie(),await de(),p){const I=f.hash&&document.getElementById(f.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,g.props.page&&(N=g.props.page),m&&m(),u=!1}function De(i){var h;l=i.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),N=i.props.page;const d=_e();R=new qt({target:n,props:{...i.props,stores:Z},hydrate:!0}),d();const s={from:null,to:me("to",{params:l.params,route:{id:((h=l.route)==null?void 0:h.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(m=>m(s)),c=!0}async function ne({url:i,params:f,branch:d,status:s,error:h,route:m,form:g}){const b=d.filter(Boolean);let E="never";for(const $ of d)($==null?void 0:$.slash)!==void 0&&(E=$.slash);i.pathname=ht(i.pathname,E),i.search=i.search;const w={type:"loaded",state:{url:i,params:f,branch:d,error:h,route:m},props:{components:b.map($=>$.node.component)}};g!==void 0&&(w.props.form=g);let O={},I=!N;for(let $=0;$<b.length;$+=1){const v=b[$];O={...O,...v.data},(I||!l.branch.some(T=>T===v))&&(w.props[`data_${$}`]=O,I=I||Object.keys(v.data??{}).length>0)}if(I||(I=Object.keys(N.data).length!==Object.keys(O).length),!l.url||i.href!==l.url.href||l.error!==h||g!==void 0||I){w.props.page={error:h,params:f,route:m,status:s,url:i,form:g,data:I?O:N.data},Object.defineProperty(w.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(v,T)=>{Object.defineProperty(w.props.page,v,{get:()=>{throw new Error(`$page.${v} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return w}async function ye({loader:i,parent:f,url:d,params:s,route:h,server_data_node:m}){var w,O,I;let g=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await i();if((w=E.shared)!=null&&w.load){let J=function(...v){for(const T of v){const{href:q}=new URL(T,d);b.dependencies.add(q)}};const $={route:{get id(){return b.route=!0,h.id}},params:new Proxy(s,{get:(v,T)=>(b.params.add(T),v[T])}),data:(m==null?void 0:m.data)??null,url:wt(d,()=>{b.url=!0}),async fetch(v,T){let q;v instanceof Request?(q=v.url,T={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...T}):q=v;const k=new URL(q,d).href;return J(k),c?$t(q,k,T):kt(q,T)},setHeaders:()=>{},depends:J,parent(){return b.parent=!0,f()}};Object.defineProperties($,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),g=await E.shared.load.call(null,$)??null,g=g?await zt(g):null}return{node:E,loader:i,server:m,shared:(O=E.shared)!=null&&O.load?{type:"data",data:g,uses:b}:null,data:g??(m==null?void 0:m.data)??null,slash:((I=E.shared)==null?void 0:I.trailingSlash)??(m==null?void 0:m.slash)}}function Ne(i,f,d,s,h){if(D)return!0;if(!s)return!1;if(s.parent&&i||s.route&&f||s.url&&d)return!0;for(const m of s.params)if(h[m]!==l.params[m])return!0;for(const m of s.dependencies)if(r.some(g=>g(new URL(m))))return!0;return!1}function be(i,f){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?f??null:null}async function Ve({id:i,invalidating:f,url:d,params:s,route:h}){if((o==null?void 0:o.id)===i)return o.promise;const{errors:m,layouts:g,leaf:b}=h,E=[...g,b];m.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const O=l.url?i!==l.url.pathname+l.url.search:!1,I=l.route?i!==l.route.id:!1,J=E.reduce((k,P,j)=>{var ae;const A=l.branch[j],te=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||Ne(k.some(Boolean),I,O,(ae=A.server)==null?void 0:ae.uses,s));return k.push(te),k},[]);if(J.some(Boolean)){try{w=await Xe(d,J)}catch(k){return ue({status:500,error:oe(k,{url:d,params:s,route:{id:h.id}}),url:d,route:h})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let v=!1;const T=E.map(async(k,P)=>{var ae;if(!k)return;const j=l.branch[P],A=$==null?void 0:$[P];if((!A||A.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Ne(v,I,O,(ae=j.shared)==null?void 0:ae.uses,s))return j;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:k[1],url:d,params:s,route:h,parent:async()=>{var Ge;const Je={};for(let ke=0;ke<P;ke+=1)Object.assign(Je,(Ge=await T[ke])==null?void 0:Ge.data);return Je},server_data_node:be(A===void 0&&k[0]?{type:"skip"}:A??null,j==null?void 0:j.server)})});for(const k of T)k.catch(()=>{});const q=[];for(let k=0;k<E.length;k+=1)if(E[k])try{q.push(await T[k])}catch(P){if(P instanceof Ye)return{type:"redirect",location:P.location};let j=500,A;$!=null&&$.includes(P)?(j=P.status??j,A=P.error):P instanceof Ae?(j=P.status,A=P.body):A=oe(P,{params:s,url:d,route:{id:h.id}});const te=await Ue(k,q,m);return te?await ne({url:d,params:s,branch:q.slice(0,te.idx).concat(te.node),status:j,error:A,route:h}):await Be(d,{id:h.id},A,j)}else q.push(void 0);return await ne({url:d,params:s,branch:q,status:200,error:null,route:h,form:f?void 0:null})}async function Ue(i,f,d){for(;i--;)if(d[i]){let s=i;for(;!f[s];)s-=1;try{return{idx:s+1,node:{node:await d[i](),loader:d[i],data:{},server:null,shared:null}}}catch{continue}}}async function ue({status:i,error:f,url:d,route:s}){const h={},m=await Pe();let g=null;if(m.server)try{const w=await Xe(d,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=w.nodes[0]??null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||t)&&await pe(d)}const b=await ye({loader:Pe,url:d,params:h,route:s,parent:()=>Promise.resolve({}),server_data_node:be(g)}),E={node:await Te(),loader:Te,shared:null,server:null,data:null};return await ne({url:d,params:h,branch:[b,E],status:i,error:f,route:null})}function ve(i,f){if(Ce(i))return;const d=mt(i.pathname.slice(e.length)||"/");for(const s of he){const h=s.exec(d);if(h)return{id:i.pathname+i.search,invalidating:f,route:s,params:_t(h),url:i}}}function Ce(i){return i.origin!==location.origin||!i.pathname.startsWith(e)}function qe({url:i,type:f,intent:d,delta:s}){var b,E;let h=!1;const m={from:me("from",{params:l.params,route:{id:((b=l.route)==null?void 0:b.id)??null},url:l.url}),to:me("to",{params:(d==null?void 0:d.params)??null,route:{id:((E=d==null?void 0:d.route)==null?void 0:E.id)??null},url:i}),willUnload:!d,type:f};s!==void 0&&(m.delta=s);const g={...m,cancel:()=>{h=!0}};return _||a.before_navigate.forEach(w=>w(g)),h?null:m}async function Ee({url:i,scroll:f,keepfocus:d,redirect_chain:s,details:h,type:m,delta:g,nav_token:b,accepted:E,blocked:w}){const O=ve(i,!1),I=qe({url:i,type:m,delta:g,intent:O});if(!I){w();return}Oe(L),E(),_=!0,c&&Z.navigating.set(I),await je(O,i,s,{scroll:f,keepfocus:d,details:h},b,()=>{_=!1,a.after_navigate.forEach(J=>J(I)),Z.navigating.set(null)})}async function Be(i,f,d,s){return i.origin===location.origin&&i.pathname===location.pathname&&!t?await ue({status:s,error:d,url:i,route:f}):await pe(i)}function pe(i){return location.href=i.href,new Promise(()=>{})}return{after_navigate:i=>{Le(()=>(a.after_navigate.push(i),()=>{const f=a.after_navigate.indexOf(i);a.after_navigate.splice(f,1)}))},before_navigate:i=>{Le(()=>(a.before_navigate.push(i),()=>{const f=a.before_navigate.indexOf(i);a.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(u||!c)&&(p=!1)},goto:(i,f={})=>{if("keepfocus"in f&&!("keepFocus"in f))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in f&&!("noScroll"in f))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return re(i,f,[])},invalidate:i=>{if(i===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof i=="function")r.push(i);else{const{href:f}=new URL(i,location.href);r.push(d=>d.href===f)}return ce()},invalidateAll:()=>(D=!0,ce()),prefetch:async i=>{const f=new URL(i,Ke(document));await fe(f)},prefetch_routes:async i=>{const d=(i?he.filter(s=>i.some(h=>s.exec(h))):he).map(s=>Promise.all([...s.layouts,s.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(d)},apply_action:async i=>{if(i.type==="error"){const f=new URL(location.href),{branch:d,route:s}=l;if(!s)return;const h=await Ue(l.branch.length,d,s.errors);if(h){const m=await ne({url:f,params:l.params,branch:d.slice(0,h.idx).concat(h.node),status:500,error:i.error,route:s});l=m.state;const g=_e();R.$set(m.props),g(),de().then(Ie)}}else if(i.type==="redirect")re(i.location,{invalidateAll:!0},[]);else{const f={form:i.data,page:{...N,form:i.data,status:i.status}},d=_e();R.$set(f),d(),i.type==="success"&&de().then(Ie)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m;let h=!1;if(!_){const g={from:me("from",{params:l.params,route:{id:((m=l.route)==null?void 0:m.id)??null},url:l.url}),to:null,willUnload:!0,type:"leave",cancel:()=>h=!0};a.before_navigate.forEach(b=>b(g))}h?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(L);try{sessionStorage[Qe]=JSON.stringify(se)}catch{}}});const i=s=>{const{url:h,options:m,has:g}=We(s);if(h&&m.prefetch&&!Ce(h)){if(m.reload||g.rel_external||g.target||g.download)return;fe(h)}};let f;const d=s=>{clearTimeout(f),f=setTimeout(()=>{var h;(h=s.target)==null||h.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",i),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",i),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:h,url:m,options:g,has:b}=We(s);if(!h||!m||!(h instanceof SVGAElement)&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:")||b.download)return;if(g.reload||b.rel_external||b.target){qe({url:m,type:"link"})||s.preventDefault(),_=!0;return}const[w,O]=m.href.split("#");if(O!==void 0&&w===location.href.split("#")[0]){y=!0,Oe(L),l.url=m,Z.page.set({...N,url:m}),Z.page.notify();return}Ee({url:m,scroll:g.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{var h;if((h=s.state)!=null&&h[Y]){if(s.state[Y]===L)return;const m=s.state[Y]-L;Ee({url:new URL(location.href),scroll:se[s.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=s.state[Y]},blocked:()=>{history.go(-m)},type:"popstate",delta:m})}}),addEventListener("hashchange",()=>{y&&(y=!1,history.replaceState({...history.state,[Y]:++L},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Z.navigating.set(null)})},_hydrate:async({status:i,error:f,node_ids:d,params:s,route:h,data:m,form:g})=>{t=!0;const b=new URL(location.href);let E;try{const w=d.map(async(O,I)=>{const J=m[I];return ye({loader:we[O],url:b,params:s,route:h,parent:async()=>{const $={};for(let v=0;v<I;v+=1)Object.assign($,(await w[v]).data);return $},server_data_node:be(J)})});E=await ne({url:b,params:s,branch:await Promise.all(w),status:i,error:f,form:g,route:he.find(({id:O})=>O===h.id)??null})}catch(w){if(w instanceof Ye){await pe(new URL(w.location,location.href));return}E=await ue({status:w instanceof Ae?w.status:500,error:oe(w,{url:b,params:s,route:h}),url:b,route:h})}De(E)}}}async function Xe(n,e){var l;const r=new URL(n);r.pathname=vt(n.pathname);const o=await ge(r.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(l=a.nodes)==null||l.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=xt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function oe(n,e){return n instanceof Ae?n.body:Wt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const tr=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function me(n,e){for(const r of tr)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function _e(){return()=>{}}function Ie(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function ar({env:n,hydrate:e,paths:r,target:o,version:a}){ut(r),dt(a);const l=er({target:o,base:r.base});pt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{ar as start};
