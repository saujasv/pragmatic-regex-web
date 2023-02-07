import{S as G,i as K,s as L,k as u,q as $,a as N,l as m,m as _,r as M,h as r,c as T,n as f,b as A,G as s,J,K as O,u as X,B as P,M as F,H as Q,o as W,w as Y,I as Z,x as tt,y as et,f as at,t as st,z as nt}from"../../../../chunks/index-8cf49659.js";import{g as z}from"../../../../chunks/navigation-a2e8446c.js";import{u as ot}from"../../../../chunks/store-5d6b215d.js";function rt(h){let t,n,a,l,i,e,d,c,g,o,E,w,v,S,y,x,D,V,R;return{c(){t=u("div"),n=u("div"),a=u("h2"),l=$("Regex: "),i=u("tt"),e=$(h[0]),d=N(),c=u("div"),g=u("div"),o=u("span"),E=$("Enter a natural language description of the regular expression"),w=N(),v=u("input"),S=N(),y=u("div"),x=u("button"),D=$("Submit"),this.h()},l(b){t=m(b,"DIV",{class:!0});var p=_(t);n=m(p,"DIV",{class:!0});var U=_(n);a=m(U,"H2",{});var j=_(a);l=M(j,"Regex: "),i=m(j,"TT",{});var k=_(i);e=M(k,h[0]),k.forEach(r),j.forEach(r),U.forEach(r),d=T(p),c=m(p,"DIV",{class:!0});var q=_(c);g=m(q,"DIV",{class:!0});var I=_(g);o=m(I,"SPAN",{class:!0});var B=_(o);E=M(B,"Enter a natural language description of the regular expression"),B.forEach(r),w=T(I),v=m(I,"INPUT",{type:!0,class:!0}),I.forEach(r),q.forEach(r),S=T(p),y=m(p,"DIV",{class:!0});var C=_(y);x=m(C,"BUTTON",{class:!0});var H=_(x);D=M(H,"Submit"),H.forEach(r),C.forEach(r),p.forEach(r),this.h()},h(){f(n,"class","col-lg-10 py-md-3"),f(o,"class","input-group-text"),f(v,"type","text"),f(v,"class","form-control"),f(g,"class","input-group col"),f(c,"class","row gx-1"),f(x,"class","btn btn-success btn-lg float-end"),f(y,"class","col-lg-6 py-md-5"),f(t,"class","col-lg-10 mx-auto p-3 py-md-5")},m(b,p){A(b,t,p),s(t,n),s(n,a),s(a,l),s(a,i),s(i,e),s(t,d),s(t,c),s(c,g),s(g,o),s(o,E),s(g,w),s(g,v),J(v,h[1]),s(t,S),s(t,y),s(y,x),s(x,D),V||(R=[O(v,"input",h[3]),O(x,"click",h[2])],V=!0)},p(b,[p]){p&1&&X(e,b[0]),p&2&&v.value!==b[1]&&J(v,b[1])},i:P,o:P,d(b){b&&r(t),V=!1,F(R)}}}let lt=1;function it(h,t,n){let a;Q(h,ot,o=>n(5,a=o));let l=0,i="",e="";async function d(){await fetch("https://try-regex-default-rtdb.firebaseio.com/nl.json",{method:"PUT",body:JSON.stringify({program:i,user:a,description:e})}),n(1,e=""),l+=1,l>=lt&&z(`${base}/annotate/finish`),await c().then(o=>{})}async function c(){a.length==0&&z(`${base}/annotate/login`),await fetch("https://try-regex-default-rtdb.firebaseio.com/programs.json").then(o=>o.json()).then(o=>{let E=o.length;n(0,i=o[Math.floor(Math.random()*(E-1))])}).catch(o=>(console.log(o),[]))}W(c);function g(){e=this.value,n(1,e)}return[i,e,d,g]}class ct extends G{constructor(t){super(),K(this,t,it,rt,L,{})}}function ut(h){let t,n,a,l,i;return l=new ct({}),{c(){t=u("meta"),n=N(),a=u("main"),Y(l.$$.fragment),this.h()},l(e){const d=Z("svelte-jy85c7",document.head);t=m(d,"META",{name:!0,content:!0}),d.forEach(r),n=T(e),a=m(e,"MAIN",{});var c=_(a);tt(l.$$.fragment,c),c.forEach(r),this.h()},h(){document.title="Regex from Examples",f(t,"name","description"),f(t,"content","Collect examples of examples used to communicate about regexes")},m(e,d){s(document.head,t),A(e,n,d),A(e,a,d),et(l,a,null),i=!0},p:P,i(e){i||(at(l.$$.fragment,e),i=!0)},o(e){st(l.$$.fragment,e),i=!1},d(e){r(t),e&&r(n),e&&r(a),nt(l)}}}class ft extends G{constructor(t){super(),K(this,t,null,ut,L,{})}}export{ft as default};
