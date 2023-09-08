import{S as se,i as oe,s as re,k as r,a as I,q as g,w as ne,Q as le,l as n,h as a,c as k,m as l,r as _,x as ie,n as o,G as e,b as N,T as te,y as ue,I as ae,f as ce,t as me,z as pe,L as de}from"../../../../chunks/index-0e9e634d.js";import{u as he}from"../../../../chunks/store-4445c58a.js";import{g as fe}from"../../../../chunks/navigation-c15f7844.js";import{S as ye}from"../../../../chunks/SvelteToast-ff19346a.js";import{t as ve}from"../../../../chunks/stores-3e1ed05a.js";import{d as ge}from"../../../../chunks/singletons-69107a7c.js";function _e($){let i,w,s,u,U,d,q,z,R,b,T,Y,C,D,c,h,f,E,G,H,m,L,x,y,M,O,v,P,Q,F;return v=new ye({}),{c(){i=r("meta"),w=I(),s=r("div"),u=r("p"),U=g("To track your responses and identify them as coming from the same person, you will submit your responses under a username. To generate the username, visit this "),d=r("a"),q=g("UUID generator"),z=g(" and generate a Version 4 UUID. You can copy the generated string and paste it into the box below."),R=I(),b=r("p"),T=r("b"),Y=g("In addition to entering your username here, please note it down in a place where you can refer to it later."),C=g(" If you would like to do the task across multiple sittings or have technical issues, the username will allow you to pick up where you left off. We only tie your responses to your username, but we do not have a way to match your username to you (since it is a randomly generated string). We will not be able to tell you what your username is."),D=I(),c=r("div"),h=r("div"),f=r("div"),E=r("span"),G=g("Enter username"),H=I(),m=r("input"),L=I(),x=r("div"),y=r("button"),M=g("Proceed to task"),O=I(),ne(v.$$.fragment),this.h()},l(t){const p=le("svelte-tap1z9",document.head);i=n(p,"META",{name:!0,content:!0}),p.forEach(a),w=k(t),s=n(t,"DIV",{class:!0});var V=l(s);u=n(V,"P",{});var S=l(u);U=_(S,"To track your responses and identify them as coming from the same person, you will submit your responses under a username. To generate the username, visit this "),d=n(S,"A",{target:!0,rel:!0,href:!0});var J=l(d);q=_(J,"UUID generator"),J.forEach(a),z=_(S," and generate a Version 4 UUID. You can copy the generated string and paste it into the box below."),S.forEach(a),R=k(V),b=n(V,"P",{});var j=l(b);T=n(j,"B",{});var K=l(T);Y=_(K,"In addition to entering your username here, please note it down in a place where you can refer to it later."),K.forEach(a),C=_(j," If you would like to do the task across multiple sittings or have technical issues, the username will allow you to pick up where you left off. We only tie your responses to your username, but we do not have a way to match your username to you (since it is a randomly generated string). We will not be able to tell you what your username is."),j.forEach(a),V.forEach(a),D=k(t),c=n(t,"DIV",{class:!0});var B=l(c);h=n(B,"DIV",{class:!0});var W=l(h);f=n(W,"DIV",{class:!0});var A=l(f);E=n(A,"SPAN",{class:!0});var X=l(E);G=_(X,"Enter username"),X.forEach(a),H=k(A),m=n(A,"INPUT",{type:!0,class:!0}),A.forEach(a),L=k(W),x=n(W,"DIV",{class:!0});var Z=l(x);y=n(Z,"BUTTON",{type:!0,class:!0});var ee=l(y);M=_(ee,"Proceed to task"),ee.forEach(a),Z.forEach(a),W.forEach(a),O=k(B),ie(v.$$.fragment,B),B.forEach(a),this.h()},h(){document.title="Regex from Examples",o(i,"name","description"),o(i,"content","Regular expressions from examples"),o(d,"target","_blank"),o(d,"rel","noopener noreferrer"),o(d,"href","https://www.uuidgenerator.net/version4"),o(s,"class","col-lg-6 mx-auto p-3 pt-md-5 pb-md-3 text-center"),o(E,"class","input-group-text"),o(m,"type","text"),o(m,"class","form-control"),o(f,"class","input-group col"),o(y,"type","submit"),o(y,"class","btn btn-primary col-auto"),o(x,"class","col"),o(h,"class","row gx-1"),o(c,"class","col-lg-6 mx-auto p-3 pt-md-5 pb-md-3 text-center")},m(t,p){e(document.head,i),N(t,w,p),N(t,s,p),e(s,u),e(u,U),e(u,d),e(d,q),e(u,z),e(s,R),e(s,b),e(b,T),e(T,Y),e(b,C),N(t,D,p),N(t,c,p),e(c,h),e(h,f),e(f,E),e(E,G),e(f,H),e(f,m),te(m,$[0]),e(h,L),e(h,x),e(x,y),e(y,M),e(c,O),ue(v,c,null),P=!0,Q||(F=[ae(m,"input",$[2]),ae(y,"click",$[1])],Q=!0)},p(t,[p]){p&1&&m.value!==t[0]&&te(m,t[0])},i(t){P||(ce(v.$$.fragment,t),P=!0)},o(t){me(v.$$.fragment,t),P=!1},d(t){a(i),t&&a(w),t&&a(s),t&&a(D),t&&a(c),pe(v),Q=!1,de(F)}}}function we($,i,w){let s="";function u(){if(s.length>0)he.set(s),fe(`${ge}/interact/tutorial`);else{ve.push("Please enter a valid username",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}}function U(){s=this.value,w(0,s)}return[s,u,U]}class Ue extends se{constructor(i){super(),oe(this,i,we,_e,re,{})}}export{Ue as default};
