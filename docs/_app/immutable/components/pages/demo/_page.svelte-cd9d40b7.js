import{S as ie,i as ce,s as ue,k as h,q as R,a as D,w as he,l as f,m as p,r as z,h as u,c as H,x as fe,n as d,b as Y,G as l,y as de,u as Q,f as pe,t as _e,U as ve,z as me,H as be,o as ye,e as re,p as W,T as ae,I as F,L as Ee,B as ge,Q as ke}from"../../../chunks/index-0e9e634d.js";import"../../../chunks/navigation-c15f7844.js";import{u as Ie}from"../../../chunks/store-b95407d5.js";import{S as Te}from"../../../chunks/SvelteToast-ff19346a.js";import{t as Z}from"../../../chunks/stores-3e1ed05a.js";function oe(c,e,t){const a=c.slice();return a[23]=e[t],a}function we(c){let e,t,a,r,i;return{c(){e=h("div"),t=h("h2"),a=R("Literal system's guess: "),r=h("tt"),i=R(c[4]),this.h()},l(s){e=f(s,"DIV",{class:!0});var o=p(e);t=f(o,"H2",{});var n=p(t);a=z(n,"Literal system's guess: "),r=f(n,"TT",{style:!0});var _=p(r);i=z(_,c[4]),_.forEach(u),n.forEach(u),o.forEach(u),this.h()},h(){W(r,"color","red"),d(e,"class","col-lg-10 py-md-3")},m(s,o){Y(s,e,o),l(e,t),l(t,a),l(t,r),l(r,i)},p(s,o){o&16&&Q(i,s[4])},d(s){s&&u(e)}}}function Le(c){let e,t,a,r,i;return{c(){e=h("div"),t=h("h2"),a=R("Literal system's guess: "),r=h("tt"),i=R(c[4]),this.h()},l(s){e=f(s,"DIV",{class:!0});var o=p(e);t=f(o,"H2",{});var n=p(t);a=z(n,"Literal system's guess: "),r=f(n,"TT",{style:!0});var _=p(r);i=z(_,c[4]),_.forEach(u),n.forEach(u),o.forEach(u),this.h()},h(){W(r,"color","green"),d(e,"class","col-sm-10 py-md-3")},m(s,o){Y(s,e,o),l(e,t),l(t,a),l(t,r),l(r,i)},p(s,o){o&16&&Q(i,s[4])},d(s){s&&u(e)}}}function Oe(c){let e,t,a,r,i;return{c(){e=h("div"),t=h("h2"),a=R("PraX guess: "),r=h("tt"),i=R(c[6]),this.h()},l(s){e=f(s,"DIV",{class:!0});var o=p(e);t=f(o,"H2",{});var n=p(t);a=z(n,"PraX guess: "),r=f(n,"TT",{style:!0});var _=p(r);i=z(_,c[6]),_.forEach(u),n.forEach(u),o.forEach(u),this.h()},h(){W(r,"color","red"),d(e,"class","col-lg-10 py-md-3")},m(s,o){Y(s,e,o),l(e,t),l(t,a),l(t,r),l(r,i)},p(s,o){o&64&&Q(i,s[6])},d(s){s&&u(e)}}}function Pe(c){let e,t,a,r,i;return{c(){e=h("div"),t=h("h2"),a=R("PraX guess: "),r=h("tt"),i=R(c[6]),this.h()},l(s){e=f(s,"DIV",{class:!0});var o=p(e);t=f(o,"H2",{});var n=p(t);a=z(n,"PraX guess: "),r=f(n,"TT",{style:!0});var _=p(r);i=z(_,c[6]),_.forEach(u),n.forEach(u),o.forEach(u),this.h()},h(){W(r,"color","green"),d(e,"class","col-lg-10 py-md-3")},m(s,o){Y(s,e,o),l(e,t),l(t,a),l(t,r),l(r,i)},p(s,o){o&64&&Q(i,s[6])},d(s){s&&u(e)}}}function Ae(c){let e,t,a,r,i,s,o,n,_,E,O,I,g,w,A,N,j,U,y,v,M,q;return{c(){e=h("div"),t=h("div"),a=h("span"),r=R("Enter example"),i=D(),s=h("input"),o=D(),n=h("input"),_=D(),E=h("label"),O=h("i"),I=D(),g=h("input"),w=D(),A=h("label"),N=h("i"),j=D(),U=h("div"),y=h("button"),v=R("Add"),this.h()},l(B){e=f(B,"DIV",{class:!0});var k=p(e);t=f(k,"DIV",{class:!0});var m=p(t);a=f(m,"SPAN",{class:!0});var C=p(a);r=z(C,"Enter example"),C.forEach(u),i=H(m),s=f(m,"INPUT",{type:!0,class:!0}),o=H(m),n=f(m,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),_=H(m),E=f(m,"LABEL",{class:!0,for:!0});var L=p(E);O=f(L,"I",{class:!0}),p(O).forEach(u),L.forEach(u),I=H(m),g=f(m,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),w=H(m),A=f(m,"LABEL",{class:!0,for:!0});var P=p(A);N=f(P,"I",{class:!0}),p(N).forEach(u),P.forEach(u),m.forEach(u),j=H(k),U=f(k,"DIV",{class:!0});var J=p(U);y=f(J,"BUTTON",{type:!0,class:!0});var S=p(y);v=z(S,"Add"),S.forEach(u),J.forEach(u),k.forEach(u),this.h()},h(){d(a,"class","input-group-text"),d(s,"type","text"),d(s,"class","form-control"),d(n,"type","radio"),d(n,"class","btn-check"),d(n,"name","utterance-type"),n.__value="+",n.value=n.__value,d(n,"id","positive"),d(n,"autocomplete","off"),c[12][0].push(n),d(O,"class","fa-solid fa-plus"),d(E,"class","btn btn-outline-primary"),d(E,"for","positive"),d(g,"type","radio"),d(g,"class","btn-check"),d(g,"name","utterance-type"),g.__value="-",g.value=g.__value,d(g,"id","negative"),d(g,"autocomplete","off"),c[12][0].push(g),d(N,"class","fa-solid fa-minus"),d(A,"class","btn btn-outline-danger"),d(A,"for","negative"),d(t,"class","input-group col"),d(y,"type","submit"),d(y,"class","btn btn-primary col-auto"),d(U,"class","col"),d(e,"class","row gx-1")},m(B,k){Y(B,e,k),l(e,t),l(t,a),l(a,r),l(t,i),l(t,s),ae(s,c[1]),l(t,o),l(t,n),n.checked=n.__value===c[2],l(t,_),l(t,E),l(E,O),l(t,I),l(t,g),g.checked=g.__value===c[2],l(t,w),l(t,A),l(A,N),l(e,j),l(e,U),l(U,y),l(y,v),M||(q=[F(s,"input",c[10]),F(n,"change",c[11]),F(g,"change",c[13]),F(y,"click",c[8])],M=!0)},p(B,k){k&2&&s.value!==B[1]&&ae(s,B[1]),k&4&&(n.checked=n.__value===B[2]),k&4&&(g.checked=g.__value===B[2])},d(B){B&&u(e),c[12][0].splice(c[12][0].indexOf(n),1),c[12][0].splice(c[12][0].indexOf(g),1),M=!1,Ee(q)}}}function Be(c){let e,t;return{c(){e=h("h2"),t=R("Succeeded!"),this.h()},l(a){e=f(a,"H2",{style:!0});var r=p(e);t=z(r,"Succeeded!"),r.forEach(u),this.h()},h(){W(e,"color","green")},m(a,r){Y(a,e,r),l(e,t)},p:ge,d(a){a&&u(e)}}}function De(c){let e,t,a=c[23].string+"",r,i,s,o,n,_,E,O,I,g,w,A,N,j;function U(){return c[15](c[23])}return{c(){e=h("div"),t=h("li"),r=R(a),i=D(),s=h("li"),o=h("i"),n=D(),_=h("li"),E=h("i"),O=D(),I=h("li"),g=h("button"),w=h("i"),A=D(),this.h()},l(y){e=f(y,"DIV",{class:!0});var v=p(e);t=f(v,"LI",{class:!0});var M=p(t);r=z(M,a),M.forEach(u),i=H(v),s=f(v,"LI",{class:!0});var q=p(s);o=f(q,"I",{class:!0}),p(o).forEach(u),q.forEach(u),n=H(v),_=f(v,"LI",{class:!0});var B=p(_);E=f(B,"I",{class:!0}),p(E).forEach(u),B.forEach(u),O=H(v),I=f(v,"LI",{class:!0});var k=p(I);g=f(k,"BUTTON",{class:!0});var m=p(g);w=f(m,"I",{class:!0}),p(w).forEach(u),m.forEach(u),k.forEach(u),A=H(v),v.forEach(u),this.h()},h(){d(t,"class","list-group-item list-group-item flex-fill"),d(o,"class","fa-solid fa-plus"),d(s,"class","list-group-item list-group-item"),d(E,"class","fa-solid fa-minus"),d(_,"class","list-group-item list-group-item-danger"),d(w,"class","fa fa-times"),d(g,"class","btn btn-default btn-sm float-end"),d(I,"class","list-group-item list-group-item-danger"),d(e,"class","list-group list-group-horizontal py-md-1")},m(y,v){Y(y,e,v),l(e,t),l(t,r),l(e,i),l(e,s),l(s,o),l(e,n),l(e,_),l(_,E),l(e,O),l(e,I),l(I,g),l(g,w),l(e,A),N||(j=F(g,"click",U),N=!0)},p(y,v){c=y,v&8&&a!==(a=c[23].string+"")&&Q(r,a)},d(y){y&&u(e),N=!1,j()}}}function He(c){let e,t,a=c[23].string+"",r,i,s,o,n,_,E,O,I,g,w,A,N,j;function U(){return c[14](c[23])}return{c(){e=h("div"),t=h("li"),r=R(a),i=D(),s=h("li"),o=h("i"),n=D(),_=h("li"),E=h("i"),O=D(),I=h("li"),g=h("button"),w=h("i"),A=D(),this.h()},l(y){e=f(y,"DIV",{class:!0});var v=p(e);t=f(v,"LI",{class:!0});var M=p(t);r=z(M,a),M.forEach(u),i=H(v),s=f(v,"LI",{class:!0});var q=p(s);o=f(q,"I",{class:!0}),p(o).forEach(u),q.forEach(u),n=H(v),_=f(v,"LI",{class:!0});var B=p(_);E=f(B,"I",{class:!0}),p(E).forEach(u),B.forEach(u),O=H(v),I=f(v,"LI",{class:!0});var k=p(I);g=f(k,"BUTTON",{class:!0});var m=p(g);w=f(m,"I",{class:!0}),p(w).forEach(u),m.forEach(u),k.forEach(u),A=H(v),v.forEach(u),this.h()},h(){d(t,"class","list-group-item list-group-item flex-fill"),d(o,"class","fa-solid fa-plus"),d(s,"class","list-group-item list-group-item-primary"),d(E,"class","fa-solid fa-minus"),d(_,"class","list-group-item list-group-item"),d(w,"class","fa fa-times"),d(g,"class","btn btn-default btn-sm float-end"),d(I,"class","list-group-item list-group-item-primary"),d(e,"class","list-group list-group-horizontal py-md-1")},m(y,v){Y(y,e,v),l(e,t),l(t,r),l(e,i),l(e,s),l(s,o),l(e,n),l(e,_),l(_,E),l(e,O),l(e,I),l(I,g),l(g,w),l(e,A),N||(j=F(g,"click",U),N=!0)},p(y,v){c=y,v&8&&a!==(a=c[23].string+"")&&Q(r,a)},d(y){y&&u(e),N=!1,j()}}}function ne(c){let e;function t(i,s){if(i[23].label=="+")return He;if(i[23].label=="-")return De}let a=t(c),r=a&&a(c);return{c(){r&&r.c(),e=re()},l(i){r&&r.l(i),e=re()},m(i,s){r&&r.m(i,s),Y(i,e,s)},p(i,s){a===(a=t(i))&&r?r.p(i,s):(r&&r.d(1),r=a&&a(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){r&&r.d(i),i&&u(e)}}}function Ne(c){let e,t,a,r,i,s,o,n,_,E,O,I,g,w,A,N,j,U,y,v,M;function q(b,T){return b[5]?Le:we}let B=q(c),k=B(c);function m(b,T){return b[7]?Pe:Oe}let C=m(c),L=C(c);function P(b,T){return b[5]||b[7]?Be:Ae}let J=P(c),S=J(c),G=c[3],X=[];for(let b=0;b<G.length;b+=1)X[b]=ne(oe(c,G,b));return v=new Te({}),{c(){e=h("div"),t=h("h1"),a=R("PraX demo"),r=D(),i=h("p"),s=R('Here, you are presented with a regular expression. You can interact with two systems and communicate the regular expression using examples. Each example is a string (which you can type in the text box) and an example (+ to indicate that the string should match the synthesized regex and - to indicate that it should not). Click "Add" once you have entered your example, and both systems will try to guess the regular expression. You can refresh to communite a different regular expression.'),o=D(),n=h("div"),_=h("h2"),E=R("Regex: "),O=h("tt"),I=R(c[0]),g=D(),k.c(),w=D(),L.c(),A=D(),S.c(),N=D(),j=h("div"),U=h("ul");for(let b=0;b<X.length;b+=1)X[b].c();y=D(),he(v.$$.fragment),this.h()},l(b){e=f(b,"DIV",{class:!0});var T=p(e);t=f(T,"H1",{});var V=p(t);a=z(V,"PraX demo"),V.forEach(u),r=H(T),i=f(T,"P",{});var K=p(i);s=z(K,'Here, you are presented with a regular expression. You can interact with two systems and communicate the regular expression using examples. Each example is a string (which you can type in the text box) and an example (+ to indicate that the string should match the synthesized regex and - to indicate that it should not). Click "Add" once you have entered your example, and both systems will try to guess the regular expression. You can refresh to communite a different regular expression.'),K.forEach(u),o=H(T),n=f(T,"DIV",{class:!0});var ee=p(n);_=f(ee,"H2",{});var x=p(_);E=z(x,"Regex: "),O=f(x,"TT",{});var te=p(O);I=z(te,c[0]),te.forEach(u),x.forEach(u),ee.forEach(u),g=H(T),k.l(T),w=H(T),L.l(T),A=H(T),S.l(T),N=H(T),j=f(T,"DIV",{class:!0});var se=p(j);U=f(se,"UL",{class:!0});var le=p(U);for(let $=0;$<X.length;$+=1)X[$].l(le);le.forEach(u),se.forEach(u),y=H(T),fe(v.$$.fragment,T),T.forEach(u),this.h()},h(){d(n,"class","col-10 py-md-3"),d(U,"class","list-group"),d(j,"class","col-lg-6 py-md-5"),d(e,"class","col-lg-10 mx-auto p-3 py-md-5")},m(b,T){Y(b,e,T),l(e,t),l(t,a),l(e,r),l(e,i),l(i,s),l(e,o),l(e,n),l(n,_),l(_,E),l(_,O),l(O,I),l(e,g),k.m(e,null),l(e,w),L.m(e,null),l(e,A),S.m(e,null),l(e,N),l(e,j),l(j,U);for(let V=0;V<X.length;V+=1)X[V].m(U,null);l(e,y),de(v,e,null),M=!0},p(b,[T]){if((!M||T&1)&&Q(I,b[0]),B===(B=q(b))&&k?k.p(b,T):(k.d(1),k=B(b),k&&(k.c(),k.m(e,w))),C===(C=m(b))&&L?L.p(b,T):(L.d(1),L=C(b),L&&(L.c(),L.m(e,A))),J===(J=P(b))&&S?S.p(b,T):(S.d(1),S=J(b),S&&(S.c(),S.m(e,N))),T&520){G=b[3];let V;for(V=0;V<G.length;V+=1){const K=oe(b,G,V);X[V]?X[V].p(K,T):(X[V]=ne(K),X[V].c(),X[V].m(U,null))}for(;V<X.length;V+=1)X[V].d(1);X.length=G.length}},i(b){M||(pe(v.$$.fragment,b),M=!0)},o(b){_e(v.$$.fragment,b),M=!1},d(b){b&&u(e),k.d(),L.d(),S.d(),ve(X,b),me(v)}}}let je=1,Ue="https://c0vmrzlr7laeho8b.us-east-1.aws.endpoints.huggingface.cloud",Ve="https://sqv1rlpqi9lshx3r.us-east-1.aws.endpoints.huggingface.cloud";function Me(c,e){return c=Math.ceil(c),e=Math.floor(e),Math.floor(Math.random()*(e-c)+c)}function Se(c,e,t){let a;be(c,Ie,m=>t(19,a=m));let r=[],i="",s="",o="",n=null,_=[],E="",O=!1,I="",g=!1,w=0;function A(){if(r=[...r,{string:o,label:n,id:w}],o.length>0)if(n===null){Z.push("Label not provided",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}else{for(var m of _)if(o==m.string){Z.push("This example has already been provided",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}if(n=="+"&&o.match(`^${i}$`))t(3,_=[..._,{string:o,label:n,id:w}]),t(1,o=""),t(2,n=null),w+=1;else if(n=="-"&&!o.match(`^${i}$`))t(3,_=[..._,{string:o,label:n,id:w}]),t(1,o=""),t(2,n=null),w+=1;else{Z.push("Label does not match string",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}}else{Z.push("Please enter a valid string",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}N()}async function N(){t(4,E="...");let m=await fetch(Ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:{true_program:i,spec:_}})}).then(L=>L.json());m&&(m.guess?t(4,E=m.guess):t(4,E="<regex not found>"),m.top_1_success&&t(5,O=!0)),t(6,I="...");let C=await fetch(Ve,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:{true_program:i,spec:_}})}).then(L=>L.json());C&&(C.guess?t(6,I=C.guess):t(6,I="<regex not found>"),C.top_1_success&&t(7,g=!0))}function j(m){t(3,_=_.filter(C=>C.id!=m))}async function U(){let m=await fetch("https://regex-interact-default-rtdb.firebaseio.com/user_study.json").then(G=>G.json()),C=new Object,L=new Object;for(var P in m)if(m[P].hasOwnProperty("interaction")){let G=!1;m[P].interaction.hasOwnProperty(a)&&m[P].interaction[a].hasOwnProperty("completed")&&m[P].interaction[a].completed&&(G=!0),m[P].interaction.hasOwnProperty(a)&&G&&(C[P]=m[P]),Object.keys(m[P].interaction).length<je&&(L[P]=m[P])}else L[P]=m[P];let J=Me(0,Object.keys(L).length);console.log(J);let S=0;for(var P in L){if(S==J){s=P,t(0,i=L[P].program),console.log(P,L[P]),console.log(s,i),t(4,E=""),t(5,O=!1),t(6,I=""),t(7,g=!1);return}S+=1}}ye(U);const y=[[]];function v(){o=this.value,t(1,o)}function M(){n=this.__value,t(2,n)}function q(){n=this.__value,t(2,n)}return[i,o,n,_,E,O,I,g,A,j,v,M,y,q,m=>j(m.id),m=>j(m.id)]}class Re extends ie{constructor(e){super(),ce(this,e,Se,Ne,ue,{})}}function ze(c){let e,t,a,r,i;return r=new Re({}),{c(){e=h("meta"),t=D(),a=h("main"),he(r.$$.fragment),this.h()},l(s){const o=ke("svelte-jy85c7",document.head);e=f(o,"META",{name:!0,content:!0}),o.forEach(u),t=H(s),a=f(s,"MAIN",{});var n=p(a);fe(r.$$.fragment,n),n.forEach(u),this.h()},h(){document.title="Regex from Examples",d(e,"name","description"),d(e,"content","Collect examples of examples used to communicate about regexes")},m(s,o){l(document.head,e),Y(s,t,o),Y(s,a,o),de(r,a,null),i=!0},p:ge,i(s){i||(pe(r.$$.fragment,s),i=!0)},o(s){_e(r.$$.fragment,s),i=!1},d(s){u(e),s&&u(t),s&&u(a),me(r)}}}class Je extends ie{constructor(e){super(),ce(this,e,null,ze,ue,{})}}export{Je as default};