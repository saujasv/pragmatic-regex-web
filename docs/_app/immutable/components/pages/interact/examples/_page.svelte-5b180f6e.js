import{S as Oe,i as Ne,s as Ue,k as _,q as S,a as B,w as Ae,l as m,m as g,r as D,h as u,c as M,x as je,n as c,b as Q,G as r,T as ye,y as we,I as q,u as ie,f as Be,t as Me,U as Le,z as Pe,L as Se,H as De,o as Re,e as ke,Q as Ve,B as $e}from"../../../../chunks/index-0e9e634d.js";import{g as re}from"../../../../chunks/navigation-c15f7844.js";import{u as He}from"../../../../chunks/store-cf389518.js";import{d as oe}from"../../../../chunks/singletons-69107a7c.js";import{S as qe}from"../../../../chunks/SvelteToast-ff19346a.js";import{t as Ee}from"../../../../chunks/stores-3e1ed05a.js";function Te(l,e,a){const o=l.slice();return o[18]=e[a],o}function Ce(l){let e,a=l[18].string+"",o,t,s,i,h;function f(){return l[12](l[18])}return{c(){e=_("li"),o=S(a),t=_("button"),s=_("i"),this.h()},l(n){e=m(n,"LI",{class:!0});var d=g(e);o=D(d,a),t=m(d,"BUTTON",{class:!0});var U=g(t);s=m(U,"I",{class:!0}),g(s).forEach(u),U.forEach(u),d.forEach(u),this.h()},h(){c(s,"class","fa fa-times"),c(t,"class","btn btn-default btn-sm float-end"),c(e,"class","list-group-item list-group-item-danger")},m(n,d){Q(n,e,d),r(e,o),r(e,t),r(t,s),i||(h=q(t,"click",f),i=!0)},p(n,d){l=n,d&8&&a!==(a=l[18].string+"")&&ie(o,a)},d(n){n&&u(e),i=!1,h()}}}function Ge(l){let e,a=l[18].string+"",o,t,s,i,h;function f(){return l[11](l[18])}return{c(){e=_("li"),o=S(a),t=_("button"),s=_("i"),this.h()},l(n){e=m(n,"LI",{class:!0});var d=g(e);o=D(d,a),t=m(d,"BUTTON",{class:!0});var U=g(t);s=m(U,"I",{class:!0}),g(s).forEach(u),U.forEach(u),d.forEach(u),this.h()},h(){c(s,"class","fa fa-times"),c(t,"class","btn btn-default btn-sm float-end"),c(e,"class","list-group-item list-group-item-success")},m(n,d){Q(n,e,d),r(e,o),r(e,t),r(t,s),i||(h=q(t,"click",f),i=!0)},p(n,d){l=n,d&8&&a!==(a=l[18].string+"")&&ie(o,a)},d(n){n&&u(e),i=!1,h()}}}function Ie(l){let e;function a(s,i){if(s[18].label=="+")return Ge;if(s[18].label=="-")return Ce}let o=a(l),t=o&&o(l);return{c(){t&&t.c(),e=ke()},l(s){t&&t.l(s),e=ke()},m(s,i){t&&t.m(s,i),Q(s,e,i)},p(s,i){o===(o=a(s))&&t?t.p(s,i):(t&&t.d(1),t=o&&o(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){t&&t.d(s),s&&u(e)}}}function Xe(l){let e,a,o,t,s,i,h,f,n,d,U,R,A,C,b,F,P,K,Z,y,v,O,j,T,L,w,W,ee,G,V,te,X,$,le,se,H,Y,ae,ce,z=l[3],I=[];for(let p=0;p<z.length;p+=1)I[p]=Ie(Te(l,z,p));return H=new qe({}),{c(){e=_("div"),a=_("div"),o=_("h2"),t=S("Regex: "),s=_("tt"),i=S(l[0]),h=B(),f=_("div"),n=_("div"),d=_("span"),U=S("Enter example"),R=B(),A=_("input"),C=B(),b=_("input"),F=B(),P=_("label"),K=S("+"),Z=B(),y=_("input"),v=B(),O=_("label"),j=S("-"),T=B(),L=_("div"),w=_("button"),W=S("Add"),ee=B(),G=_("div"),V=_("ul");for(let p=0;p<I.length;p+=1)I[p].c();te=B(),X=_("div"),$=_("button"),le=S("Submit"),se=B(),Ae(H.$$.fragment),this.h()},l(p){e=m(p,"DIV",{class:!0});var k=g(e);a=m(k,"DIV",{class:!0});var E=g(a);o=m(E,"H2",{});var J=g(o);t=D(J,"Regex: "),s=m(J,"TT",{});var ue=g(s);i=D(ue,l[0]),ue.forEach(u),J.forEach(u),E.forEach(u),h=M(k),f=m(k,"DIV",{class:!0});var x=g(f);n=m(x,"DIV",{class:!0});var N=g(n);d=m(N,"SPAN",{class:!0});var fe=g(d);U=D(fe,"Enter example"),fe.forEach(u),R=M(N),A=m(N,"INPUT",{type:!0,class:!0}),C=M(N),b=m(N,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),F=M(N),P=m(N,"LABEL",{class:!0,for:!0});var de=g(P);K=D(de,"+"),de.forEach(u),Z=M(N),y=m(N,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),v=M(N),O=m(N,"LABEL",{class:!0,for:!0});var he=g(O);j=D(he,"-"),he.forEach(u),N.forEach(u),T=M(x),L=m(x,"DIV",{class:!0});var pe=g(L);w=m(pe,"BUTTON",{type:!0,class:!0});var _e=g(w);W=D(_e,"Add"),_e.forEach(u),pe.forEach(u),x.forEach(u),ee=M(k),G=m(k,"DIV",{class:!0});var me=g(G);V=m(me,"UL",{class:!0});var ge=g(V);for(let ne=0;ne<I.length;ne+=1)I[ne].l(ge);ge.forEach(u),me.forEach(u),te=M(k),X=m(k,"DIV",{class:!0});var be=g(X);$=m(be,"BUTTON",{class:!0});var ve=g($);le=D(ve,"Submit"),ve.forEach(u),be.forEach(u),se=M(k),je(H.$$.fragment,k),k.forEach(u),this.h()},h(){c(a,"class","col-lg-10 py-md-3"),c(d,"class","input-group-text"),c(A,"type","text"),c(A,"class","form-control"),c(b,"type","radio"),c(b,"class","btn-check"),c(b,"name","utterance-type"),b.__value="+",b.value=b.__value,c(b,"id","positive"),c(b,"autocomplete","off"),l[9][0].push(b),c(P,"class","btn btn-outline-primary"),c(P,"for","positive"),c(y,"type","radio"),c(y,"class","btn-check"),c(y,"name","utterance-type"),y.__value="-",y.value=y.__value,c(y,"id","negative"),c(y,"autocomplete","off"),l[9][0].push(y),c(O,"class","btn btn-outline-danger"),c(O,"for","negative"),c(n,"class","input-group col"),c(w,"type","submit"),c(w,"class","btn btn-primary col-auto"),c(L,"class","col"),c(f,"class","row gx-1"),c(V,"class","list-group"),c(G,"class","col-lg-6 py-md-5"),c($,"class","btn btn-success btn-lg float-end"),c(X,"class","col-lg-6 py-md-5"),c(e,"class","col-lg-10 mx-auto p-3 py-md-5")},m(p,k){Q(p,e,k),r(e,a),r(a,o),r(o,t),r(o,s),r(s,i),r(e,h),r(e,f),r(f,n),r(n,d),r(d,U),r(n,R),r(n,A),ye(A,l[1]),r(n,C),r(n,b),b.checked=b.__value===l[2],r(n,F),r(n,P),r(P,K),r(n,Z),r(n,y),y.checked=y.__value===l[2],r(n,v),r(n,O),r(O,j),r(f,T),r(f,L),r(L,w),r(w,W),r(e,ee),r(e,G),r(G,V);for(let E=0;E<I.length;E+=1)I[E].m(V,null);r(e,te),r(e,X),r(X,$),r($,le),r(e,se),we(H,e,null),Y=!0,ae||(ce=[q(A,"input",l[7]),q(b,"change",l[8]),q(y,"change",l[10]),q(w,"click",l[4]),q($,"click",l[6])],ae=!0)},p(p,[k]){if((!Y||k&1)&&ie(i,p[0]),k&2&&A.value!==p[1]&&ye(A,p[1]),k&4&&(b.checked=b.__value===p[2]),k&4&&(y.checked=y.__value===p[2]),k&40){z=p[3];let E;for(E=0;E<z.length;E+=1){const J=Te(p,z,E);I[E]?I[E].p(J,k):(I[E]=Ie(J),I[E].c(),I[E].m(V,null))}for(;E<I.length;E+=1)I[E].d(1);I.length=z.length}},i(p){Y||(Be(H.$$.fragment,p),Y=!0)},o(p){Me(H.$$.fragment,p),Y=!1},d(p){p&&u(e),l[9][0].splice(l[9][0].indexOf(b),1),l[9][0].splice(l[9][0].indexOf(y),1),Le(I,p),Pe(H),ae=!1,Se(ce)}}}let ze=1,Je=3;function Qe(l,e){return l=Math.ceil(l),e=Math.floor(e),Math.floor(Math.random()*(e-l)+l)}function Fe(l,e,a){let o;De(l,He,v=>a(16,o=v));let t=[],s="",i="",h="",f=null,n=[],d=0;function U(){if(t=[...t,{string:h,label:f,id:d}],h.length>0)if(f=="+"&&h.match(`^${s}$`))a(3,n=[...n,{string:h,label:f,id:d}]),a(1,h=""),a(2,f=null),d+=1;else if(f=="-"&&!h.match(`^${s}$`))a(3,n=[...n,{string:h,label:f,id:d}]),a(1,h=""),a(2,f=null),d+=1;else{Ee.push("Label not provided",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}else{Ee.push("Please enter a valid string",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}}function R(v){a(3,n=n.filter(O=>O.id!=v))}async function A(){console.log(i),await fetch(`https://try-regex-default-rtdb.firebaseio.com/heldout-describe-pilot/${i}/descriptions/${o}.json`,{method:"PUT",body:JSON.stringify(n)}),a(3,n=[]),await C().then(v=>{})}async function C(){o.length==0&&re(`${oe}/annotate/login`);let v=await fetch("https://try-regex-default-rtdb.firebaseio.com/heldout-describe-pilot.json").then(W=>W.json()),O=new Object,j=new Object;for(var T in v)v[T].hasOwnProperty("descriptions")?(v[T].descriptions.hasOwnProperty(o)&&(O[T]=v[T]),Object.keys(v[T].descriptions).length<ze&&(j[T]=v[T])):j[T]=v[T];Object.keys(O).length>Je&&re(`${oe}/annotate/finish`),Object.keys(j).length==0&&re(`${oe}/annotate/finish`);let L=Qe(0,Object.keys(j).length);console.log(L);let w=0;for(var T in j){if(w==L){i=T,a(0,s=j[T].program),console.log(T,j[T]),console.log(i,s);return}w+=1}}Re(C);const b=[[]];function F(){h=this.value,a(1,h)}function P(){f=this.__value,a(2,f)}function K(){f=this.__value,a(2,f)}return[s,h,f,n,U,R,A,F,P,b,K,v=>R(v.id),v=>R(v.id)]}class Ke extends Oe{constructor(e){super(),Ne(this,e,Fe,Xe,Ue,{})}}function We(l){let e,a,o,t,s;return t=new Ke({}),{c(){e=_("meta"),a=B(),o=_("main"),Ae(t.$$.fragment),this.h()},l(i){const h=Ve("svelte-jy85c7",document.head);e=m(h,"META",{name:!0,content:!0}),h.forEach(u),a=M(i),o=m(i,"MAIN",{});var f=g(o);je(t.$$.fragment,f),f.forEach(u),this.h()},h(){document.title="Regex from Examples",c(e,"name","description"),c(e,"content","Collect examples of examples used to communicate about regexes")},m(i,h){r(document.head,e),Q(i,a,h),Q(i,o,h),we(t,o,null),s=!0},p:$e,i(i){s||(Be(t.$$.fragment,i),s=!0)},o(i){Me(t.$$.fragment,i),s=!1},d(i){u(e),i&&u(a),i&&u(o),Pe(t)}}}class st extends Oe{constructor(e){super(),Ne(this,e,null,We,Ue,{})}}export{st as default};
