import{S as K,i as W,s as C,k as b,q as L,a as j,w as Z,l as k,m as E,r as M,h as f,c as V,x as ee,n as _,b as D,G as h,y as te,u as P,f as le,t as se,z as oe,H as ae,o as re,I as ie,U as H,e as Q,Q as ne,B as ce}from"../../../../chunks/index-0e9e634d.js";import{u as ue,d as fe}from"../../../../chunks/store-cf389518.js";import{g as U}from"../../../../chunks/navigation-c15f7844.js";import{S as he}from"../../../../chunks/SvelteToast-ff19346a.js";import{t as pe}from"../../../../chunks/stores-3e1ed05a.js";import{d as B}from"../../../../chunks/singletons-69107a7c.js";function F(c,e,a){const s=c.slice();return s[12]=e[a],s}function G(c,e,a){const s=c.slice();return s[15]=e[a],s}function de(c){let e,a,s=c[15].string+"",r,o,n,g,y,v,d,u;return{c(){e=b("div"),a=b("li"),r=L(s),o=j(),n=b("li"),g=b("i"),y=j(),v=b("li"),d=b("i"),u=j(),this.h()},l(m){e=k(m,"DIV",{class:!0});var l=E(e);a=k(l,"LI",{class:!0});var t=E(a);r=M(t,s),t.forEach(f),o=V(l),n=k(l,"LI",{class:!0});var p=E(n);g=k(p,"I",{class:!0}),E(g).forEach(f),p.forEach(f),y=V(l),v=k(l,"LI",{class:!0});var i=E(v);d=k(i,"I",{class:!0}),E(d).forEach(f),i.forEach(f),u=V(l),l.forEach(f),this.h()},h(){_(a,"class","list-group-item list-group-item flex-fill"),_(g,"class","fa-solid fa-plus"),_(n,"class","list-group-item list-group-item"),_(d,"class","fa-solid fa-minus"),_(v,"class","list-group-item list-group-item-danger"),_(e,"class","list-group list-group-horizontal py-md-1")},m(m,l){D(m,e,l),h(e,a),h(a,r),h(e,o),h(e,n),h(n,g),h(e,y),h(e,v),h(v,d),h(e,u)},p(m,l){l&8&&s!==(s=m[15].string+"")&&P(r,s)},d(m){m&&f(e)}}}function me(c){let e,a,s=c[15].string+"",r,o,n,g,y,v,d,u;return{c(){e=b("div"),a=b("li"),r=L(s),o=j(),n=b("li"),g=b("i"),y=j(),v=b("li"),d=b("i"),u=j(),this.h()},l(m){e=k(m,"DIV",{class:!0});var l=E(e);a=k(l,"LI",{class:!0});var t=E(a);r=M(t,s),t.forEach(f),o=V(l),n=k(l,"LI",{class:!0});var p=E(n);g=k(p,"I",{class:!0}),E(g).forEach(f),p.forEach(f),y=V(l),v=k(l,"LI",{class:!0});var i=E(v);d=k(i,"I",{class:!0}),E(d).forEach(f),i.forEach(f),u=V(l),l.forEach(f),this.h()},h(){_(a,"class","list-group-item list-group-item flex-fill"),_(g,"class","fa-solid fa-plus"),_(n,"class","list-group-item list-group-item-primary"),_(d,"class","fa-solid fa-minus"),_(v,"class","list-group-item list-group-item"),_(e,"class","list-group list-group-horizontal py-md-1")},m(m,l){D(m,e,l),h(e,a),h(a,r),h(e,o),h(e,n),h(n,g),h(e,y),h(e,v),h(v,d),h(e,u)},p(m,l){l&8&&s!==(s=m[15].string+"")&&P(r,s)},d(m){m&&f(e)}}}function X(c){let e;function a(o,n){if(o[15].label=="+")return me;if(o[15].label=="-")return de}let s=a(c),r=s&&s(c);return{c(){r&&r.c(),e=Q()},l(o){r&&r.l(o),e=Q()},m(o,n){r&&r.m(o,n),D(o,e,n)},p(o,n){s===(s=a(o))&&r?r.p(o,n):(r&&r.d(1),r=s&&s(o),r&&(r.c(),r.m(e.parentNode,e)))},d(o){r&&r.d(o),o&&f(e)}}}function x(c){let e,a,s,r,o,n,g=c[12].regex+"",y,v,d,u,m;return{c(){e=b("input"),r=j(),o=b("label"),n=b("tt"),y=L(g),d=j(),this.h()},l(l){e=k(l,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),r=V(l),o=k(l,"LABEL",{class:!0,for:!0});var t=E(o);n=k(t,"TT",{});var p=E(n);y=M(p,g),p.forEach(f),t.forEach(f),d=V(l),this.h()},h(){_(e,"type","radio"),_(e,"class","btn-check"),_(e,"name","utterance-type"),e.__value=a=c[12].id,e.value=e.__value,_(e,"id",s=c[12].id),_(e,"autocomplete","off"),c[7][0].push(e),_(o,"class","btn btn-outline-dark"),_(o,"for",v=c[12].id)},m(l,t){D(l,e,t),e.checked=e.__value===c[4],D(l,r,t),D(l,o,t),h(o,n),h(n,y),D(l,d,t),u||(m=ie(e,"change",c[6]),u=!0)},p(l,t){t&8&&a!==(a=l[12].id)&&(e.__value=a,e.value=e.__value),t&8&&s!==(s=l[12].id)&&_(e,"id",s),t&16&&(e.checked=e.__value===l[4]),t&8&&g!==(g=l[12].regex+"")&&P(y,g),t&8&&v!==(v=l[12].id)&&_(o,"for",v)},d(l){l&&f(e),c[7][0].splice(c[7][0].indexOf(e),1),l&&f(r),l&&f(o),l&&f(d),u=!1,m()}}}function J(c){let e,a,s,r,o,n,g,y,v,d=c[3].examples,u=[];for(let t=0;t<d.length;t+=1)u[t]=X(G(c,d,t));let m=c[3].options,l=[];for(let t=0;t<m.length;t+=1)l[t]=x(F(c,m,t));return{c(){e=b("div");for(let t=0;t<u.length;t+=1)u[t].c();a=j(),s=b("div");for(let t=0;t<l.length;t+=1)l[t].c();r=j(),o=b("div"),n=b("button"),g=L("Submit"),this.h()},l(t){e=k(t,"DIV",{class:!0});var p=E(e);for(let w=0;w<u.length;w+=1)u[w].l(p);p.forEach(f),a=V(t),s=k(t,"DIV",{class:!0});var i=E(s);for(let w=0;w<l.length;w+=1)l[w].l(i);i.forEach(f),r=V(t),o=k(t,"DIV",{class:!0});var $=E(o);n=k($,"BUTTON",{class:!0});var I=E(n);g=M(I,"Submit"),I.forEach(f),$.forEach(f),this.h()},h(){_(e,"class","col-lg-10 py-md-3"),_(s,"class","btn-group-vertical col-lg-10 py-md-3"),_(n,"class","btn btn-success btn-lg float-end"),_(o,"class","col-lg-10 py-md-5")},m(t,p){D(t,e,p);for(let i=0;i<u.length;i+=1)u[i].m(e,null);D(t,a,p),D(t,s,p);for(let i=0;i<l.length;i+=1)l[i].m(s,null);D(t,r,p),D(t,o,p),h(o,n),h(n,g),y||(v=ie(n,"click",c[5]),y=!0)},p(t,p){if(p&8){d=t[3].examples;let i;for(i=0;i<d.length;i+=1){const $=G(t,d,i);u[i]?u[i].p($,p):(u[i]=X($),u[i].c(),u[i].m(e,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=d.length}if(p&24){m=t[3].options;let i;for(i=0;i<m.length;i+=1){const $=F(t,m,i);l[i]?l[i].p($,p):(l[i]=x($),l[i].c(),l[i].m(s,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=m.length}},d(t){t&&f(e),H(u,t),t&&f(a),t&&f(s),H(l,t),t&&f(r),t&&f(o),y=!1,v()}}}function _e(c){let e,a,s,r,o,n,g,y,v,d,u,m,l,t,p,i,$=c[2],I,w,Y,S=J(c);return w=new he({}),{c(){e=b("div"),a=b("div"),s=b("h4"),r=L("Completed "),o=L(c[0]),n=L(" of "),g=L(c[1]),y=L(" tasks in this phase"),v=j(),d=b("div"),u=b("h2"),m=L("You are now the guesser"),l=j(),t=b("div"),p=L("You are given a list of examples provided by a describer. You are also given options of regular expressions. You need to choose which regular expression best fits the given set of examples. If there are multiple correct regular expressions, choose the one you think the describer was most likely trying to communicate about."),i=j(),S.c(),I=j(),Z(w.$$.fragment),this.h()},l(T){e=k(T,"DIV",{class:!0});var O=E(e);a=k(O,"DIV",{class:!0});var R=E(a);s=k(R,"H4",{});var N=E(s);r=M(N,"Completed "),o=M(N,c[0]),n=M(N," of "),g=M(N,c[1]),y=M(N," tasks in this phase"),N.forEach(f),R.forEach(f),v=V(O),d=k(O,"DIV",{class:!0});var q=E(d);u=k(q,"H2",{});var z=E(u);m=M(z,"You are now the guesser"),z.forEach(f),q.forEach(f),l=V(O),t=k(O,"DIV",{class:!0});var A=E(t);p=M(A,"You are given a list of examples provided by a describer. You are also given options of regular expressions. You need to choose which regular expression best fits the given set of examples. If there are multiple correct regular expressions, choose the one you think the describer was most likely trying to communicate about."),A.forEach(f),i=V(O),S.l(O),I=V(O),ee(w.$$.fragment,O),O.forEach(f),this.h()},h(){_(a,"class","col-lg-10 pt-md-1 pb-md-1 text-center"),_(d,"class","col-lg-10 pt-md-1 pb-md-1 text-center"),_(t,"class","col-lg-10 pt-md-1 pb-md-1"),_(e,"class","col-lg-6 mx-auto p-3 pt-md-5 pb-md-3")},m(T,O){D(T,e,O),h(e,a),h(a,s),h(s,r),h(s,o),h(s,n),h(s,g),h(s,y),h(e,v),h(e,d),h(d,u),h(u,m),h(e,l),h(e,t),h(t,p),h(e,i),S.m(e,null),h(e,I),te(w,e,null),Y=!0},p(T,[O]){(!Y||O&1)&&P(o,T[0]),(!Y||O&2)&&P(g,T[1]),O&4&&C($,$=T[2])?(S.d(1),S=J(T),S.c(),S.m(e,I)):S.p(T,O)},i(T){Y||(le(w.$$.fragment,T),Y=!0)},o(T){se(w.$$.fragment,T),Y=!1},d(T){T&&f(e),S.d(T),oe(w)}}}function ve(c,e){return c=Math.ceil(c),e=Math.floor(e),Math.floor(Math.random()*(e-c)+c)}function ge(c,e,a){let s;ae(c,ue,p=>a(10,s=p));let r=0,o=2,n=2,g=0;async function y(){s.length==0&&U(`${B}/annotate/login`);let p=await fetch(`${fe}/pilot-options.json`).then(S=>S.json()).catch(S=>(console.log(S),[])),i=new Object,$=new Object;for(var I in p)p[I].hasOwnProperty("verifications")?(p[I].verifications.hasOwnProperty(s)&&(i[I]=p[I]),Object.keys(p[I].verifications).length<o&&($[I]=p[I])):$[I]=p[I];Object.keys(i).length>=n&&U(`${B}/annotate/examples`),Object.keys($).length==0&&U(`${B}/annotate/examples`),a(0,r=Object.keys(i).length);let w=ve(0,Object.keys($).length);console.log(w);let Y=0;for(var I in $){if(Y==w){v=I,a(3,d=$[I]),a(4,u=null),console.log(I,$[I]),console.log(v,d);return}Y+=1}}let v="",d={examples:[],options:[]},u=null;async function m(){if(u===null){pe.push("Please answer to proceed",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}console.log(v),await fetch(`https://try-regex-default-rtdb.firebaseio.com/pilot-options/${v}/verifications/${s}.json`,{method:"PUT",body:u}),a(2,g+=1),y()}re(y);const l=[[]];function t(){u=this.__value,a(4,u)}return[r,n,g,d,u,m,t,l]}class be extends K{constructor(e){super(),W(this,e,ge,_e,C,{})}}function ke(c){let e,a,s,r;return s=new be({}),{c(){e=b("meta"),a=j(),Z(s.$$.fragment),this.h()},l(o){const n=ne("svelte-tap1z9",document.head);e=k(n,"META",{name:!0,content:!0}),n.forEach(f),a=V(o),ee(s.$$.fragment,o),this.h()},h(){document.title="Regex from Examples",_(e,"name","description"),_(e,"content","Regular expressions from examples")},m(o,n){h(document.head,e),D(o,a,n),te(s,o,n),r=!0},p:ce,i(o){r||(le(s.$$.fragment,o),r=!0)},o(o){se(s.$$.fragment,o),r=!1},d(o){f(e),o&&f(a),oe(s,o)}}}class Te extends K{constructor(e){super(),W(this,e,null,ke,C,{})}}export{Te as default};
