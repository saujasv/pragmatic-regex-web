import{S as We,i as Ze,s as xe,k as u,q as k,a as T,w as et,l as h,m as f,r as w,h as o,c as O,x as tt,n as d,b as U,G as l,T as Je,y as lt,I as he,u as x,f as st,t as rt,U as it,z as at,L as nt,H as ct,o as ut,e as Xe,B as ot,p as fe,Q as ht}from"../../../../chunks/index-0e9e634d.js";import{g as De}from"../../../../chunks/navigation-c15f7844.js";import{u as ft}from"../../../../chunks/store-4445c58a.js";import{d as Ne}from"../../../../chunks/singletons-69107a7c.js";import{S as dt}from"../../../../chunks/SvelteToast-ff19346a.js";import{t as ge}from"../../../../chunks/stores-3e1ed05a.js";function Qe(c,e,t){const a=c.slice();return a[22]=e[t],a}function pt(c){let e,t,a,s,n,r;return{c(){e=u("div"),t=u("h2"),a=k("You are now interacting with the "),s=u("span"),n=k("red"),r=k(" robot."),this.h()},l(i){e=h(i,"DIV",{});var p=f(e);t=h(p,"H2",{});var m=f(t);a=w(m,"You are now interacting with the "),s=h(m,"SPAN",{style:!0});var g=f(s);n=w(g,"red"),g.forEach(o),r=w(m," robot."),m.forEach(o),p.forEach(o),this.h()},h(){fe(s,"color","red")},m(i,p){U(i,e,p),l(e,t),l(t,a),l(t,s),l(s,n),l(t,r)},d(i){i&&o(e)}}}function mt(c){let e,t,a,s,n,r;return{c(){e=u("div"),t=u("h2"),a=k("You are now interacting with the "),s=u("span"),n=k("blue"),r=k(" robot."),this.h()},l(i){e=h(i,"DIV",{});var p=f(e);t=h(p,"H2",{});var m=f(t);a=w(m,"You are now interacting with the "),s=h(m,"SPAN",{style:!0});var g=f(s);n=w(g,"blue"),g.forEach(o),r=w(m," robot."),m.forEach(o),p.forEach(o),this.h()},h(){fe(s,"color","blue")},m(i,p){U(i,e,p),l(e,t),l(t,a),l(t,s),l(s,n),l(t,r)},d(i){i&&o(e)}}}function _t(c){let e,t,a,s,n,r;return{c(){e=u("div"),t=u("h2"),a=k("You are now interacting with the "),s=u("span"),n=k("green"),r=k(" robot."),this.h()},l(i){e=h(i,"DIV",{});var p=f(e);t=h(p,"H2",{});var m=f(t);a=w(m,"You are now interacting with the "),s=h(m,"SPAN",{style:!0});var g=f(s);n=w(g,"green"),g.forEach(o),r=w(m," robot."),m.forEach(o),p.forEach(o),this.h()},h(){fe(s,"color","green")},m(i,p){U(i,e,p),l(e,t),l(t,a),l(t,s),l(s,n),l(t,r)},d(i){i&&o(e)}}}function gt(c){let e,t,a,s,n;return{c(){e=u("div"),t=u("h2"),a=k("System's guess: "),s=u("tt"),n=k(c[6]),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=f(e);t=h(i,"H2",{});var p=f(t);a=w(p,"System's guess: "),s=h(p,"TT",{style:!0});var m=f(s);n=w(m,c[6]),m.forEach(o),p.forEach(o),i.forEach(o),this.h()},h(){fe(s,"color","red"),d(e,"class","col-lg-10 py-md-3")},m(r,i){U(r,e,i),l(e,t),l(t,a),l(t,s),l(s,n)},p(r,i){i&64&&x(n,r[6])},d(r){r&&o(e)}}}function vt(c){let e,t,a,s,n;return{c(){e=u("div"),t=u("h2"),a=k("System's guess: "),s=u("tt"),n=k(c[6]),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=f(e);t=h(i,"H2",{});var p=f(t);a=w(p,"System's guess: "),s=h(p,"TT",{style:!0});var m=f(s);n=w(m,c[6]),m.forEach(o),p.forEach(o),i.forEach(o),this.h()},h(){fe(s,"color","green"),d(e,"class","col-lg-10 py-md-3")},m(r,i){U(r,e,i),l(e,t),l(t,a),l(t,s),l(s,n)},p(r,i){i&64&&x(n,r[6])},d(r){r&&o(e)}}}function bt(c){let e,t,a=c[22].string+"",s,n,r,i,p,m,g,E;return{c(){e=u("div"),t=u("li"),s=k(a),n=T(),r=u("li"),i=u("i"),p=T(),m=u("li"),g=u("i"),E=T(),this.h()},l(v){e=h(v,"DIV",{class:!0});var y=f(e);t=h(y,"LI",{class:!0});var j=f(t);s=w(j,a),j.forEach(o),n=O(y),r=h(y,"LI",{class:!0});var L=f(r);i=h(L,"I",{class:!0}),f(i).forEach(o),L.forEach(o),p=O(y),m=h(y,"LI",{class:!0});var Y=f(m);g=h(Y,"I",{class:!0}),f(g).forEach(o),Y.forEach(o),y.forEach(o),E=O(v),this.h()},h(){d(t,"class","list-group-item list-group-item flex-fill"),d(i,"class","fa-solid fa-plus"),d(r,"class","list-group-item list-group-item"),d(g,"class","fa-solid fa-minus"),d(m,"class","list-group-item list-group-item-danger"),d(e,"class","list-group list-group-horizontal py-md-1")},m(v,y){U(v,e,y),l(e,t),l(t,s),l(e,n),l(e,r),l(r,i),l(e,p),l(e,m),l(m,g),U(v,E,y)},p(v,y){y&32&&a!==(a=v[22].string+"")&&x(s,a)},d(v){v&&o(e),v&&o(E)}}}function yt(c){let e,t,a=c[22].string+"",s,n,r,i,p,m,g,E;return{c(){e=u("div"),t=u("li"),s=k(a),n=T(),r=u("li"),i=u("i"),p=T(),m=u("li"),g=u("i"),E=T(),this.h()},l(v){e=h(v,"DIV",{class:!0});var y=f(e);t=h(y,"LI",{class:!0});var j=f(t);s=w(j,a),j.forEach(o),n=O(y),r=h(y,"LI",{class:!0});var L=f(r);i=h(L,"I",{class:!0}),f(i).forEach(o),L.forEach(o),p=O(y),m=h(y,"LI",{class:!0});var Y=f(m);g=h(Y,"I",{class:!0}),f(g).forEach(o),Y.forEach(o),y.forEach(o),E=O(v),this.h()},h(){d(t,"class","list-group-item list-group-item flex-fill"),d(i,"class","fa-solid fa-plus"),d(r,"class","list-group-item list-group-item-primary"),d(g,"class","fa-solid fa-minus"),d(m,"class","list-group-item list-group-item"),d(e,"class","list-group list-group-horizontal py-md-1")},m(v,y){U(v,e,y),l(e,t),l(t,s),l(e,n),l(e,r),l(r,i),l(e,p),l(e,m),l(m,g),U(v,E,y)},p(v,y){y&32&&a!==(a=v[22].string+"")&&x(s,a)},d(v){v&&o(e),v&&o(E)}}}function Fe(c){let e;function t(n,r){if(n[22].label=="+")return yt;if(n[22].label=="-")return bt}let a=t(c),s=a&&a(c);return{c(){s&&s.c(),e=Xe()},l(n){s&&s.l(n),e=Xe()},m(n,r){s&&s.m(n,r),U(n,e,r)},p(n,r){a===(a=t(n))&&s?s.p(n,r):(s&&s.d(1),s=a&&a(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){s&&s.d(n),n&&o(e)}}}function Ke(c){let e,t,a,s,n;return{c(){e=u("div"),t=u("button"),a=k("Submit"),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=f(e);t=h(i,"BUTTON",{class:!0});var p=f(t);a=w(p,"Submit"),p.forEach(o),i.forEach(o),this.h()},h(){d(t,"class","btn btn-success btn-lg float-end"),d(e,"class","col-lg-6 py-md-5")},m(r,i){U(r,e,i),l(e,t),l(t,a),s||(n=he(t,"click",c[9]),s=!0)},p:ot,d(r){r&&o(e),s=!1,n()}}}function Et(c){let e,t,a,s,n,r,i,p,m,g,E,v,y,j,L,Y,ee,G,z,ie,X,te,ne,S,B,I,A,le,se,R,ve,N,be,Q,ce,ye,P,Ee,F,ue,ke,re,J,we,Ie,ae,K,Te,de,W,Z,Oe,Pe;function Ve(_,b){return _[1]%3==0?_t:_[1]%3==1?mt:pt}let pe=Ve(c),q=pe(c);function He(_,b){return _[7]?vt:gt}let me=He(c),C=me(c),oe=c[5],V=[];for(let _=0;_<oe.length;_+=1)V[_]=Fe(Qe(c,oe,_));let H=(c[5].length>=10||c[7])&&Ke(c);return W=new dt({}),{c(){e=u("div"),t=u("div"),a=u("h4"),s=k("Completed "),n=k(c[1]),r=k(" of "),i=k(c[0]),p=k(" tasks"),m=T(),g=u("div"),E=u("h2"),v=k("You are now the describer"),y=T(),j=u("p"),L=k("Here, you are presented with a regular expression. You need to interact with a system and communicate the regular expression. After each example is provided, a system that is playing the role of a guesser will guess which regular expression you might have been referring to. The game is completed when the system's guess matches the regular expression you were given, or when 10 examples have been provided."),Y=T(),q.c(),ee=T(),G=u("div"),z=u("h2"),ie=k("Regex: "),X=u("tt"),te=k(c[2]),ne=T(),C.c(),S=T(),B=u("div"),I=u("div"),A=u("span"),le=k("Enter example"),se=T(),R=u("input"),ve=T(),N=u("input"),be=T(),Q=u("label"),ce=u("i"),ye=T(),P=u("input"),Ee=T(),F=u("label"),ue=u("i"),ke=T(),re=u("div"),J=u("button"),we=k("Add"),Ie=T(),ae=u("div"),K=u("ul");for(let _=0;_<V.length;_+=1)V[_].c();Te=T(),H&&H.c(),de=T(),et(W.$$.fragment),this.h()},l(_){e=h(_,"DIV",{class:!0});var b=f(e);t=h(b,"DIV",{class:!0});var D=f(t);a=h(D,"H4",{});var $=f(a);s=w($,"Completed "),n=w($,c[1]),r=w($," of "),i=w($,c[0]),p=w($," tasks"),$.forEach(o),D.forEach(o),m=O(b),g=h(b,"DIV",{class:!0});var Le=f(g);E=h(Le,"H2",{});var je=f(E);v=w(je,"You are now the describer"),je.forEach(o),Le.forEach(o),y=O(b),j=h(b,"P",{});var Be=f(j);L=w(Be,"Here, you are presented with a regular expression. You need to interact with a system and communicate the regular expression. After each example is provided, a system that is playing the role of a guesser will guess which regular expression you might have been referring to. The game is completed when the system's guess matches the regular expression you were given, or when 10 examples have been provided."),Be.forEach(o),Y=O(b),q.l(b),ee=O(b),G=h(b,"DIV",{class:!0});var Ue=f(G);z=h(Ue,"H2",{});var Se=f(z);ie=w(Se,"Regex: "),X=h(Se,"TT",{});var Me=f(X);te=w(Me,c[2]),Me.forEach(o),Se.forEach(o),Ue.forEach(o),ne=O(b),C.l(b),S=O(b),B=h(b,"DIV",{class:!0});var _e=f(B);I=h(_e,"DIV",{class:!0});var M=f(I);A=h(M,"SPAN",{class:!0});var Ye=f(A);le=w(Ye,"Enter example"),Ye.forEach(o),se=O(M),R=h(M,"INPUT",{type:!0,class:!0}),ve=O(M),N=h(M,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),be=O(M),Q=h(M,"LABEL",{class:!0,for:!0});var Re=f(Q);ce=h(Re,"I",{class:!0}),f(ce).forEach(o),Re.forEach(o),ye=O(M),P=h(M,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),Ee=O(M),F=h(M,"LABEL",{class:!0,for:!0});var Ce=f(F);ue=h(Ce,"I",{class:!0}),f(ue).forEach(o),Ce.forEach(o),M.forEach(o),ke=O(_e),re=h(_e,"DIV",{class:!0});var ze=f(re);J=h(ze,"BUTTON",{type:!0,class:!0});var qe=f(J);we=w(qe,"Add"),qe.forEach(o),ze.forEach(o),_e.forEach(o),Ie=O(b),ae=h(b,"DIV",{class:!0});var $e=f(ae);K=h($e,"UL",{class:!0});var Ge=f(K);for(let Ae=0;Ae<V.length;Ae+=1)V[Ae].l(Ge);Ge.forEach(o),$e.forEach(o),Te=O(b),H&&H.l(b),de=O(b),tt(W.$$.fragment,b),b.forEach(o),this.h()},h(){d(t,"class","col-lg-10 pt-md-1 pb-md-1 text-center"),d(g,"class","col-lg-10 pt-md-1 pb-md-1 text-center"),d(G,"class","col-lg-10 py-md-3"),d(A,"class","input-group-text"),d(R,"type","text"),d(R,"class","form-control"),d(N,"type","radio"),d(N,"class","btn-check"),d(N,"name","utterance-type"),N.__value="+",N.value=N.__value,d(N,"id","positive"),d(N,"autocomplete","off"),c[12][0].push(N),d(ce,"class","fa-solid fa-plus"),d(Q,"class","btn btn-outline-primary"),d(Q,"for","positive"),d(P,"type","radio"),d(P,"class","btn-check"),d(P,"name","utterance-type"),P.__value="-",P.value=P.__value,d(P,"id","negative"),d(P,"autocomplete","off"),c[12][0].push(P),d(ue,"class","fa-solid fa-minus"),d(F,"class","btn btn-outline-danger"),d(F,"for","negative"),d(I,"class","input-group col"),d(J,"type","submit"),d(J,"class","btn btn-primary col-auto"),d(re,"class","col"),d(B,"class","row gx-1"),d(K,"class","list-group"),d(ae,"class","col-lg-6 py-md-5"),d(e,"class","col-lg-10 mx-auto p-3 py-md-5")},m(_,b){U(_,e,b),l(e,t),l(t,a),l(a,s),l(a,n),l(a,r),l(a,i),l(a,p),l(e,m),l(e,g),l(g,E),l(E,v),l(e,y),l(e,j),l(j,L),l(e,Y),q.m(e,null),l(e,ee),l(e,G),l(G,z),l(z,ie),l(z,X),l(X,te),l(e,ne),C.m(e,null),l(e,S),l(e,B),l(B,I),l(I,A),l(A,le),l(I,se),l(I,R),Je(R,c[3]),l(I,ve),l(I,N),N.checked=N.__value===c[4],l(I,be),l(I,Q),l(Q,ce),l(I,ye),l(I,P),P.checked=P.__value===c[4],l(I,Ee),l(I,F),l(F,ue),l(B,ke),l(B,re),l(re,J),l(J,we),l(e,Ie),l(e,ae),l(ae,K);for(let D=0;D<V.length;D+=1)V[D].m(K,null);l(e,Te),H&&H.m(e,null),l(e,de),lt(W,e,null),Z=!0,Oe||(Pe=[he(R,"input",c[10]),he(N,"change",c[11]),he(P,"change",c[13]),he(J,"click",c[8])],Oe=!0)},p(_,[b]){if((!Z||b&2)&&x(n,_[1]),(!Z||b&1)&&x(i,_[0]),pe!==(pe=Ve(_))&&(q.d(1),q=pe(_),q&&(q.c(),q.m(e,ee))),(!Z||b&4)&&x(te,_[2]),me===(me=He(_))&&C?C.p(_,b):(C.d(1),C=me(_),C&&(C.c(),C.m(e,S))),b&8&&R.value!==_[3]&&Je(R,_[3]),b&16&&(N.checked=N.__value===_[4]),b&16&&(P.checked=P.__value===_[4]),b&32){oe=_[5];let D;for(D=0;D<oe.length;D+=1){const $=Qe(_,oe,D);V[D]?V[D].p($,b):(V[D]=Fe($),V[D].c(),V[D].m(K,null))}for(;D<V.length;D+=1)V[D].d(1);V.length=oe.length}_[5].length>=10||_[7]?H?H.p(_,b):(H=Ke(_),H.c(),H.m(e,de)):H&&(H.d(1),H=null)},i(_){Z||(st(W.$$.fragment,_),Z=!0)},o(_){rt(W.$$.fragment,_),Z=!1},d(_){_&&o(e),q.d(),C.d(),c[12][0].splice(c[12][0].indexOf(N),1),c[12][0].splice(c[12][0].indexOf(P),1),it(V,_),H&&H.d(),at(W),Oe=!1,nt(Pe)}}}function kt(c,e){return c=Math.ceil(c),e=Math.floor(e),Math.floor(Math.random()*(e-c)+c)}function wt(c,e,t){let a;ct(c,ft,S=>t(18,a=S));let s=[],n=1,r=30,i=0,p="",m="",g="",E=null,v=[],y="",j=!1,L=0;function Y(){if(s=[...s,{string:g,label:E,id:L}],g.length>0)if(E===null){ge.push("Label not provided",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}else{for(var S of v)if(g==S.string){ge.push("This example has already been provided",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}if(E=="+"&&g.match(`^${p}$`))t(5,v=[...v,{string:g,label:E,id:L}]),t(3,g=""),t(4,E=null),L+=1;else if(E=="-"&&!g.match(`^${p}$`))t(5,v=[...v,{string:g,label:E,id:L}]),t(3,g=""),t(4,E=null),L+=1;else{ge.push("Label does not match string",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}}else{ge.push("Please enter a valid string",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}ee()}async function ee(){let S=await fetch("http://babel.lti.cs.cmu.edu:8081/synthesize",{method:"POST",headers:{"Content-Type":"application/json","Upgrade-Insecure-Requests":0},body:JSON.stringify({listener_idx:i%3,true_program:p,spec:v})}).then(B=>B.json());console.log(S),t(6,y=S.guess),S.top_1_success&&t(7,j=!0)}async function G(){console.log(m),await fetch(`https://regex-interact-default-rtdb.firebaseio.com/pilot/${m}/interaction/${a}.json`,{method:"PUT",body:JSON.stringify(v)}),t(5,v=[]),await z().then(S=>{})}async function z(){a.length==0&&De(`${Ne}/interact/login`);let S=await fetch("https://regex-interact-default-rtdb.firebaseio.com/pilot.json").then(R=>R.json()),B=new Object,I=new Object;for(var A in S)S[A].hasOwnProperty("interaction")?(S[A].interaction.hasOwnProperty(a)&&(B[A]=S[A]),Object.keys(S[A].interaction).length<n&&(I[A]=S[A])):I[A]=S[A];Object.keys(B).length>r&&De(`${Ne}/interact/finish`),Object.keys(I).length==0&&De(`${Ne}/interact/finish`),t(1,i=Object.keys(B).length);let le=kt(0,Object.keys(I).length);console.log(le);let se=0;for(var A in I){if(se==le){m=A,t(2,p=I[A].program),console.log(A,I[A]),console.log(m,p);return}se+=1}}ut(z);const ie=[[]];function X(){g=this.value,t(3,g)}function te(){E=this.__value,t(4,E)}function ne(){E=this.__value,t(4,E)}return[r,i,p,g,E,v,y,j,Y,G,X,te,ie,ne]}class It extends We{constructor(e){super(),Ze(this,e,wt,Et,xe,{})}}function Tt(c){let e,t,a,s,n;return s=new It({}),{c(){e=u("meta"),t=T(),a=u("main"),et(s.$$.fragment),this.h()},l(r){const i=ht("svelte-jy85c7",document.head);e=h(i,"META",{name:!0,content:!0}),i.forEach(o),t=O(r),a=h(r,"MAIN",{});var p=f(a);tt(s.$$.fragment,p),p.forEach(o),this.h()},h(){document.title="Regex from Examples",d(e,"name","description"),d(e,"content","Collect examples of examples used to communicate about regexes")},m(r,i){l(document.head,e),U(r,t,i),U(r,a,i),lt(s,a,null),n=!0},p:ot,i(r){n||(st(s.$$.fragment,r),n=!0)},o(r){rt(s.$$.fragment,r),n=!1},d(r){o(e),r&&o(t),r&&o(a),at(s)}}}class Vt extends We{constructor(e){super(),Ze(this,e,null,Tt,xe,{})}}export{Vt as default};
