import{S as Z,i as x,s as ee,k,q as S,a as L,w as te,l as y,m as I,r as q,h as _,c as V,x as le,n as m,b as w,G as p,y as se,K as ne,f as ie,t as oe,L as M,z as ae,H as re,o as ue,e as P,u as A,I as ce,B as fe}from"../../../../chunks/index-8cf49659.js";import{u as he}from"../../../../chunks/store-5d6b215d.js";import{g as R}from"../../../../chunks/navigation-a2e8446c.js";import{S as _e,t as de}from"../../../../chunks/SvelteToast-321309d1.js";import{d as Y}from"../../../../chunks/singletons-47202174.js";function G(i,e,l){const n=i.slice();return n[8]=e[l],n[9]=e,n[10]=l,n}function J(i,e,l){const n=i.slice();return n[11]=e[l],n}function K(i,e,l){const n=i.slice();return n[14]=e[l],n}function me(i){let e,l=i[14].string+"",n;return{c(){e=k("li"),n=S(l),this.h()},l(s){e=y(s,"LI",{class:!0});var t=I(e);n=q(t,l),t.forEach(_),this.h()},h(){m(e,"class","list-group-item list-group-item-danger")},m(s,t){w(s,e,t),p(e,n)},p(s,t){t&1&&l!==(l=s[14].string+"")&&A(n,l)},d(s){s&&_(e)}}}function pe(i){let e,l=i[14].string+"",n;return{c(){e=k("li"),n=S(l),this.h()},l(s){e=y(s,"LI",{class:!0});var t=I(e);n=q(t,l),t.forEach(_),this.h()},h(){m(e,"class","list-group-item list-group-item-primary")},m(s,t){w(s,e,t),p(e,n)},p(s,t){t&1&&l!==(l=s[14].string+"")&&A(n,l)},d(s){s&&_(e)}}}function X(i){let e;function l(t,a){if(t[14].label=="+")return pe;if(t[14].label=="-")return me}let n=l(i),s=n&&n(i);return{c(){s&&s.c(),e=P()},l(t){s&&s.l(t),e=P()},m(t,a){s&&s.m(t,a),w(t,e,a)},p(t,a){n===(n=l(t))&&s?s.p(t,a):(s&&s.d(1),s=n&&n(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s&&s.d(t),t&&_(e)}}}function ge(i){let e,l,n=i[11].regex+"",s,t;return{c(){e=k("label"),l=k("tt"),s=S(n),this.h()},l(a){e=y(a,"LABEL",{class:!0,for:!0});var c=I(e);l=y(c,"TT",{});var v=I(l);s=q(v,n),v.forEach(_),c.forEach(_),this.h()},h(){m(e,"class","btn btn-outline-dark"),m(e,"for",t=i[10]+"-"+i[11].id)},m(a,c){w(a,e,c),p(e,l),p(l,s)},p(a,c){c&1&&n!==(n=a[11].regex+"")&&A(s,n),c&1&&t!==(t=a[10]+"-"+a[11].id)&&m(e,"for",t)},d(a){a&&_(e)}}}function be(i){let e,l,n=i[11].regex+"",s,t;return{c(){e=k("label"),l=k("tt"),s=S(n),this.h()},l(a){e=y(a,"LABEL",{class:!0,for:!0});var c=I(e);l=y(c,"TT",{});var v=I(l);s=q(v,n),v.forEach(_),c.forEach(_),this.h()},h(){m(e,"class","btn btn-outline-success"),m(e,"for",t=i[10]+"-"+i[11].id)},m(a,c){w(a,e,c),p(e,l),p(l,s)},p(a,c){c&1&&n!==(n=a[11].regex+"")&&A(s,n),c&1&&t!==(t=a[10]+"-"+a[11].id)&&m(e,"for",t)},d(a){a&&_(e)}}}function F(i){let e,l,n,s,t,a,c;i[4][0][i[10]]=[];function v(){i[3].call(e,i[8])}function E(h,f){return h[11].sat?be:ge}let T=E(i),r=T(i);return{c(){e=k("input"),s=L(),r.c(),t=P(),this.h()},l(h){e=y(h,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),s=V(h),r.l(h),t=P(),this.h()},h(){m(e,"type","radio"),m(e,"class","btn-check"),m(e,"name","utterance-type-"+i[10]),e.__value=l=i[11].id,e.value=e.__value,m(e,"id",n=i[10]+"-"+i[11].id),m(e,"autocomplete","off"),i[4][0][i[10]].push(e)},m(h,f){w(h,e,f),e.checked=e.__value===i[1][i[8].id],w(h,s,f),r.m(h,f),w(h,t,f),a||(c=ne(e,"change",v),a=!0)},p(h,f){i=h,f&1&&l!==(l=i[11].id)&&(e.__value=l,e.value=e.__value),f&1&&n!==(n=i[10]+"-"+i[11].id)&&m(e,"id",n),f&3&&(e.checked=e.__value===i[1][i[8].id]),T===(T=E(i))&&r?r.p(i,f):(r.d(1),r=T(i),r&&(r.c(),r.m(t.parentNode,t)))},d(h){h&&_(e),i[4][0][i[10]].splice(i[4][0][i[10]].indexOf(e),1),h&&_(s),r.d(h),h&&_(t),a=!1,c()}}}function W(i){let e,l,n,s=i[10]+1+"",t,a,c,v,E,T=i[8].examples,r=[];for(let o=0;o<T.length;o+=1)r[o]=X(K(i,T,o));let h=i[8].options,f=[];for(let o=0;o<h.length;o+=1)f[o]=F(J(i,h,o));return{c(){e=k("div"),l=k("h2"),n=S("Question "),t=S(s),a=L(),c=k("div");for(let o=0;o<r.length;o+=1)r[o].c();v=L(),E=k("div");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var d=I(e);l=y(d,"H2",{});var u=I(l);n=q(u,"Question "),t=q(u,s),u.forEach(_),d.forEach(_),a=V(o),c=y(o,"DIV",{class:!0});var N=I(c);for(let B=0;B<r.length;B+=1)r[B].l(N);N.forEach(_),v=V(o),E=y(o,"DIV",{class:!0});var j=I(E);for(let B=0;B<f.length;B+=1)f[B].l(j);j.forEach(_),this.h()},h(){m(e,"class","col-lg-10 pt-md-5 pb-md-1"),m(c,"class","list-group col-lg-10 py-md-3"),m(E,"class","btn-group-vertical col-lg-10 py-md-3")},m(o,d){w(o,e,d),p(e,l),p(l,n),p(l,t),w(o,a,d),w(o,c,d);for(let u=0;u<r.length;u+=1)r[u].m(c,null);w(o,v,d),w(o,E,d);for(let u=0;u<f.length;u+=1)f[u].m(E,null)},p(o,d){if(d&1){T=o[8].examples;let u;for(u=0;u<T.length;u+=1){const N=K(o,T,u);r[u]?r[u].p(N,d):(r[u]=X(N),r[u].c(),r[u].m(c,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=T.length}if(d&3){h=o[8].options;let u;for(u=0;u<h.length;u+=1){const N=J(o,h,u);f[u]?f[u].p(N,d):(f[u]=F(N),f[u].c(),f[u].m(E,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=h.length}},d(o){o&&_(e),o&&_(a),o&&_(c),M(r,o),o&&_(v),o&&_(E),M(f,o)}}}function ve(i){let e,l,n,s,t,a,c,v,E,T,r,h,f,o,d,u,N,j,B,D=i[0],$=[];for(let b=0;b<D.length;b+=1)$[b]=W(G(i,D,b));return u=new _e({}),{c(){e=k("div"),l=k("div"),n=S("In each of the following questions, you are given a list of examples of strings. The strings in "),s=k("button"),t=S("blue"),a=S(" are positive examples and those in "),c=k("button"),v=S("red"),E=S(" are negative examples. In each case, you are also given options of regular expressions. You need to determine which regular expression matches the given strings."),T=L();for(let b=0;b<$.length;b+=1)$[b].c();r=L(),h=k("div"),f=k("button"),o=S("Submit"),d=L(),te(u.$$.fragment),this.h()},l(b){e=y(b,"DIV",{class:!0});var O=I(e);l=y(O,"DIV",{class:!0});var g=I(l);n=q(g,"In each of the following questions, you are given a list of examples of strings. The strings in "),s=y(g,"BUTTON",{class:!0});var U=I(s);t=q(U,"blue"),U.forEach(_),a=q(g," are positive examples and those in "),c=y(g,"BUTTON",{class:!0});var Q=I(c);v=q(Q,"red"),Q.forEach(_),E=q(g," are negative examples. In each case, you are also given options of regular expressions. You need to determine which regular expression matches the given strings."),g.forEach(_),T=V(O);for(let H=0;H<$.length;H+=1)$[H].l(O);r=V(O),h=y(O,"DIV",{class:!0});var z=I(h);f=y(z,"BUTTON",{class:!0});var C=I(f);o=q(C,"Submit"),C.forEach(_),z.forEach(_),d=V(O),le(u.$$.fragment,O),O.forEach(_),this.h()},h(){m(s,"class","btn btn-mini btn-primary"),m(c,"class","btn btn-mini btn-danger"),m(l,"class","col-lg-10 pt-md-1 pb-md-1"),m(f,"class","btn btn-success btn-lg float-end"),m(h,"class","col-lg-10 py-md-5"),m(e,"class","col-lg-6 mx-auto p-3 pt-md-5 pb-md-3")},m(b,O){w(b,e,O),p(e,l),p(l,n),p(l,s),p(s,t),p(l,a),p(l,c),p(c,v),p(l,E),p(e,T);for(let g=0;g<$.length;g+=1)$[g].m(e,null);p(e,r),p(e,h),p(h,f),p(f,o),p(e,d),se(u,e,null),N=!0,j||(B=ne(f,"click",i[2]),j=!0)},p(b,[O]){if(O&3){D=b[0];let g;for(g=0;g<D.length;g+=1){const U=G(b,D,g);$[g]?$[g].p(U,O):($[g]=W(U),$[g].c(),$[g].m(e,r))}for(;g<$.length;g+=1)$[g].d(1);$.length=D.length}},i(b){N||(ie(u.$$.fragment,b),N=!0)},o(b){oe(u.$$.fragment,b),N=!1},d(b){b&&_(e),M($,b),ae(u),j=!1,B()}}}let ke=0,ye=5;function Ee(i,e,l){let n;re(i,he,r=>l(6,n=r));let s=[];async function t(){n.length==0&&R(`${Y}/annotate/login`),await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-test-verify-sampled-options/${ke}.json`).then(r=>r.json()).then(r=>{let h=[...r];h.sort((o,d)=>o.n_verifications>d.verifications?1:o.id<d.id?0:Math.random()>.5?1:0);let f=[];for(let o=0;o<ye;o+=1){f=[...f,h[o]];for(let d=0;d<r.length;d+=1)r[d].id==h[o].id&&(s=[...s,d])}console.log(f),l(0,a=f),l(1,c=Object.fromEntries(Object.entries(a).map(([o,d],u)=>[d.id,null]))),console.log(c)}).catch(r=>(console.log(r),[]))}let a=[],c=[];async function v(){for(let r in c)if(c[r]===null){de.push("Please answer all the questions to proceed.",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-test/${n}.json`,{method:"PUT",body:JSON.stringify(c)}),R(`${Y}/annotate/examples`)}ue(t);const E=[[]];function T(r){c[r.id]=this.__value,l(1,c)}return[a,c,v,T,E]}class Te extends Z{constructor(e){super(),x(this,e,Ee,ve,ee,{})}}function $e(i){let e,l,n,s;return n=new Te({}),{c(){e=k("meta"),l=L(),te(n.$$.fragment),this.h()},l(t){const a=ce("svelte-tap1z9",document.head);e=y(a,"META",{name:!0,content:!0}),a.forEach(_),l=V(t),le(n.$$.fragment,t),this.h()},h(){document.title="Regex from Examples",m(e,"name","description"),m(e,"content","Regular expressions from examples")},m(t,a){p(document.head,e),w(t,l,a),se(n,t,a),s=!0},p:fe,i(t){s||(ie(n.$$.fragment,t),s=!0)},o(t){oe(n.$$.fragment,t),s=!1},d(t){_(e),t&&_(l),ae(n,t)}}}class qe extends Z{constructor(e){super(),x(this,e,null,$e,ee,{})}}export{qe as default};