import{S as ue,i as ce,s as fe,k as g,q as B,a as S,w as he,l as b,m as $,r as N,h as u,c as q,x as pe,n as p,b as I,G as h,y as me,K as X,f as de,t as _e,L as ve,z as ge,H as ke,o as ye,u as C,M as we,e as ne,I as $e,B as Ie}from"../../../../chunks/index-8cf49659.js";import{u as Te}from"../../../../chunks/store-5d6b215d.js";import{g as De}from"../../../../chunks/navigation-a2e8446c.js";import{S as Le,t as Se}from"../../../../chunks/SvelteToast-321309d1.js";function ae(e,t,n){const a=e.slice();return a[9]=t[n],a[10]=t,a[11]=n,a}function ie(e,t,n){const a=e.slice();return a[12]=t[n],a}function qe(e){let t,n=e[12].string+"",a;return{c(){t=g("li"),a=B(n),this.h()},l(s){t=b(s,"LI",{class:!0});var l=$(t);a=N(l,n),l.forEach(u),this.h()},h(){p(t,"class","list-group-item list-group-item-danger")},m(s,l){I(s,t,l),h(t,a)},p(s,l){l&1&&n!==(n=s[12].string+"")&&C(a,n)},d(s){s&&u(t)}}}function Ve(e){let t,n=e[12].string+"",a;return{c(){t=g("li"),a=B(n),this.h()},l(s){t=b(s,"LI",{class:!0});var l=$(t);a=N(l,n),l.forEach(u),this.h()},h(){p(t,"class","list-group-item list-group-item-primary")},m(s,l){I(s,t,l),h(t,a)},p(s,l){l&1&&n!==(n=s[12].string+"")&&C(a,n)},d(s){s&&u(t)}}}function oe(e){let t;function n(l,r){if(l[12].label=="+")return Ve;if(l[12].label=="-")return qe}let a=n(e),s=a&&a(e);return{c(){s&&s.c(),t=ne()},l(l){s&&s.l(l),t=ne()},m(l,r){s&&s.m(l,r),I(l,t,r)},p(l,r){a===(a=n(l))&&s?s.p(l,r):(s&&s.d(1),s=a&&a(l),s&&(s.c(),s.m(t.parentNode,t)))},d(l){s&&s.d(l),l&&u(t)}}}function re(e){let t,n,a,s=e[11]+1+"",l,r,y,O,V,E,m,D,P,T,c,i,k,f,L,j=e[9].opt1+"",H,G,_,J,A,z,Q=e[9].opt2+"",W,K,Y,M=e[9].examples,w=[];for(let o=0;o<M.length;o+=1)w[o]=oe(ie(e,M,o));e[4][0][e[11]]=[];function be(){e[3].call(i,e[9])}function Ee(){e[5].call(_,e[9])}return{c(){t=g("div"),n=g("h2"),a=B("Question "),l=B(s),r=S(),y=g("h3"),O=B("Examples"),V=S(),E=g("div");for(let o=0;o<w.length;o+=1)w[o].c();m=S(),D=g("p"),P=B("Which description is of a regular expression that is consistent with the given set of examples??"),T=S(),c=g("div"),i=g("input"),k=S(),f=g("label"),L=g("tt"),H=B(j),G=S(),_=g("input"),J=S(),A=g("label"),z=g("tt"),W=B(Q),this.h()},l(o){t=b(o,"DIV",{class:!0});var v=$(t);n=b(v,"H2",{});var d=$(n);a=N(d,"Question "),l=N(d,s),d.forEach(u),v.forEach(u),r=q(o),y=b(o,"H3",{});var R=$(y);O=N(R,"Examples"),R.forEach(u),V=q(o),E=b(o,"DIV",{class:!0});var Z=$(E);for(let F=0;F<w.length;F+=1)w[F].l(Z);Z.forEach(u),m=q(o),D=b(o,"P",{});var x=$(D);P=N(x,"Which description is of a regular expression that is consistent with the given set of examples??"),x.forEach(u),T=q(o),c=b(o,"DIV",{class:!0});var U=$(c);i=b(U,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),k=q(U),f=b(U,"LABEL",{class:!0,for:!0});var ee=$(f);L=b(ee,"TT",{});var te=$(L);H=N(te,j),te.forEach(u),ee.forEach(u),G=q(U),_=b(U,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),J=q(U),A=b(U,"LABEL",{class:!0,for:!0});var le=$(A);z=b(le,"TT",{});var se=$(z);W=N(se,Q),se.forEach(u),le.forEach(u),U.forEach(u),this.h()},h(){p(t,"class","col-lg-10 pt-md-5 pb-md-1"),p(E,"class","list-group col-lg-10 py-md-3"),p(i,"type","radio"),p(i,"class","btn-check"),p(i,"name","utterance-set-"+e[11]),i.__value="1",i.value=i.__value,p(i,"id",e[11]+"-opt1"),p(i,"autocomplete","off"),e[4][0][e[11]].push(i),p(f,"class","btn btn-outline-dark"),p(f,"for",e[11]+"-opt1"),p(_,"type","radio"),p(_,"class","btn-check"),p(_,"name","utterance-set-"+e[11]),_.__value="2",_.value=_.__value,p(_,"id",e[11]+"-opt2"),p(_,"autocomplete","off"),e[4][0][e[11]].push(_),p(A,"class","btn btn-outline-dark"),p(A,"for",e[11]+"-opt2"),p(c,"class","btn-group-vertical col-lg-10 py-md-3")},m(o,v){I(o,t,v),h(t,n),h(n,a),h(n,l),I(o,r,v),I(o,y,v),h(y,O),I(o,V,v),I(o,E,v);for(let d=0;d<w.length;d+=1)w[d].m(E,null);I(o,m,v),I(o,D,v),h(D,P),I(o,T,v),I(o,c,v),h(c,i),i.checked=i.__value===e[1][e[9].id],h(c,k),h(c,f),h(f,L),h(L,H),h(c,G),h(c,_),_.checked=_.__value===e[1][e[9].id],h(c,J),h(c,A),h(A,z),h(z,W),K||(Y=[X(i,"change",be),X(_,"change",Ee)],K=!0)},p(o,v){if(e=o,v&1){M=e[9].examples;let d;for(d=0;d<M.length;d+=1){const R=ie(e,M,d);w[d]?w[d].p(R,v):(w[d]=oe(R),w[d].c(),w[d].m(E,null))}for(;d<w.length;d+=1)w[d].d(1);w.length=M.length}v&3&&(i.checked=i.__value===e[1][e[9].id]),v&1&&j!==(j=e[9].opt1+"")&&C(H,j),v&3&&(_.checked=_.__value===e[1][e[9].id]),v&1&&Q!==(Q=e[9].opt2+"")&&C(W,Q)},d(o){o&&u(t),o&&u(r),o&&u(y),o&&u(V),o&&u(E),ve(w,o),o&&u(m),o&&u(D),o&&u(T),o&&u(c),e[4][0][e[11]].splice(e[4][0][e[11]].indexOf(i),1),e[4][0][e[11]].splice(e[4][0][e[11]].indexOf(_),1),K=!1,we(Y)}}}function Be(e){let t,n,a,s,l,r,y,O,V,E,m,D,P,T=e[0],c=[];for(let i=0;i<T.length;i+=1)c[i]=re(ae(e,T,i));return E=new Le({}),{c(){t=g("div"),n=g("div"),a=B("In each of the following questions, you are given a set of examples and English descriptions of two regular expressions. Determine which regular expression described in English the set of examples is consistent with."),s=S();for(let i=0;i<c.length;i+=1)c[i].c();l=S(),r=g("div"),y=g("button"),O=B("Submit"),V=S(),he(E.$$.fragment),this.h()},l(i){t=b(i,"DIV",{class:!0});var k=$(t);n=b(k,"DIV",{class:!0});var f=$(n);a=N(f,"In each of the following questions, you are given a set of examples and English descriptions of two regular expressions. Determine which regular expression described in English the set of examples is consistent with."),f.forEach(u),s=q(k);for(let H=0;H<c.length;H+=1)c[H].l(k);l=q(k),r=b(k,"DIV",{class:!0});var L=$(r);y=b(L,"BUTTON",{class:!0});var j=$(y);O=N(j,"Submit"),j.forEach(u),L.forEach(u),V=q(k),pe(E.$$.fragment,k),k.forEach(u),this.h()},h(){p(n,"class","col-lg-10 pt-md-1 pb-md-1"),p(y,"class","btn btn-success btn-lg float-end"),p(r,"class","col-lg-10 py-md-5"),p(t,"class","col-lg-6 mx-auto p-3 pt-md-5 pb-md-3")},m(i,k){I(i,t,k),h(t,n),h(n,a),h(t,s);for(let f=0;f<c.length;f+=1)c[f].m(t,null);h(t,l),h(t,r),h(r,y),h(y,O),h(t,V),me(E,t,null),m=!0,D||(P=X(y,"click",e[2]),D=!0)},p(i,[k]){if(k&3){T=i[0];let f;for(f=0;f<T.length;f+=1){const L=ae(i,T,f);c[f]?c[f].p(L,k):(c[f]=re(L),c[f].c(),c[f].m(t,l))}for(;f<c.length;f+=1)c[f].d(1);c.length=T.length}},i(i){m||(de(E.$$.fragment,i),m=!0)},o(i){_e(E.$$.fragment,i),m=!1},d(i){i&&u(t),ve(c,i),ge(E),D=!1,P()}}}function Ne(e,t,n){let a;ke(e,Te,m=>n(6,a=m));async function s(){await fetch("https://try-regex-default-rtdb.firebaseio.com/nl-verify-2.json").then(m=>m.json()).then(m=>{n(0,l=m),n(1,r=Object.fromEntries(Object.entries(l).map(([D,P],T)=>[P.id,null])))}).catch(m=>(console.log(m),[]))}let l=[],r=[];async function y(){for(let m in r)if(r[m]===null){Se.push("Please answer all the questions to proceed.",{theme:{"--toastBarHeight":0,"--toastBackground":"red"}});return}await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-nl-verify/${a}.json`,{method:"PUT",body:JSON.stringify(r)}),De(`${base}/annotate/examples`)}ye(s);const O=[[]];function V(m){r[m.id]=this.__value,n(1,r)}function E(m){r[m.id]=this.__value,n(1,r)}return[l,r,y,V,O,E]}class Oe extends ue{constructor(t){super(),ce(this,t,Ne,Be,fe,{})}}function Pe(e){let t,n,a,s;return a=new Oe({}),{c(){t=g("meta"),n=S(),he(a.$$.fragment),this.h()},l(l){const r=$e("svelte-tap1z9",document.head);t=b(r,"META",{name:!0,content:!0}),r.forEach(u),n=q(l),pe(a.$$.fragment,l),this.h()},h(){document.title="Regex from Examples",p(t,"name","description"),p(t,"content","Regular expressions from examples")},m(l,r){h(document.head,t),I(l,n,r),me(a,l,r),s=!0},p:Ie,i(l){s||(de(a.$$.fragment,l),s=!0)},o(l){_e(a.$$.fragment,l),s=!1},d(l){u(t),l&&u(n),ge(a,l)}}}class Me extends ue{constructor(t){super(),ce(this,t,null,Pe,fe,{})}}export{Me as default};