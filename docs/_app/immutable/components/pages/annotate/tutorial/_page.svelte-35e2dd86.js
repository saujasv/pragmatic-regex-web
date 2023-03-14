import{S as ga,i as ma,s as ba,k as s,q as i,a as v,w as va,l as r,m as o,r as c,h as a,c as _,x as _a,n,p as P,b as Ue,G as e,y as ya,R as da,I as J,u as ka,f as Ea,t as xa,z as wa,L as Aa,H as Ta,o as Ia,Q as Pa,B as Na}from"../../../../chunks/index-8c8999cc.js";import{g as pa}from"../../../../chunks/navigation-8ff8a9af.js";import{d as $e}from"../../../../chunks/singletons-5cc1f033.js";import{u as Ba}from"../../../../chunks/store-5a2d893e.js";/* empty css                                                                   */import{G as Ua}from"../../../../chunks/Guide-1fca03f4.js";function Da(h){let t,l;return{c(){t=s("span"),l=s("i"),this.h()},l(u){t=r(u,"SPAN",{style:!0});var d=o(t);l=r(d,"I",{class:!0}),o(l).forEach(a),d.forEach(a),this.h()},h(){n(l,"class","fa-solid fa-square-xmark"),P(t,"font-size","1.5em"),P(t,"color","red")},m(u,d){Ue(u,t,d),e(t,l)},d(u){u&&a(t)}}}function Ha(h){let t,l;return{c(){t=s("span"),l=s("i"),this.h()},l(u){t=r(u,"SPAN",{style:!0});var d=o(t);l=r(d,"I",{class:!0}),o(l).forEach(a),d.forEach(a),this.h()},h(){n(l,"class","fa-solid fa-square-check"),P(t,"font-size","1.5em"),P(t,"color","green")},m(u,d){Ue(u,t,d),e(t,l)},d(u){u&&a(t)}}}function Ra(h){let t,l;return{c(){t=s("span"),l=s("i"),this.h()},l(u){t=r(u,"SPAN",{style:!0});var d=o(t);l=r(d,"I",{class:!0}),o(l).forEach(a),d.forEach(a),this.h()},h(){n(l,"class","fa-solid fa-square-pen"),P(t,"font-size","1.5em"),P(t,"color","grey")},m(u,d){Ue(u,t,d),e(t,l)},d(u){u&&a(t)}}}function qa(h){let t,l,u,d,m,x,p,K,O,ue,he,$,fe,de,A,pe,Se,ge,Ve,ze,me,Me,Ce,Ye,N,Le,X,Ge,je,Z,We,Qe,Fe,S,Je,Ke,Xe,ee,V,be,Ze,et,b,tt,te,ve,at,ae,_e,st,z,ye,rt,Ee,ot,nt,M,xe,lt,we,it,ct,C,ke,ut,ht,B,ft,Ae,dt,Y,pt,gt,mt,se,H,re,oe,bt,Te,De,vt,R,L,Ie,_t,G,yt,Et,q,w,ne,xt,wt,U,kt,y,At,j,Pe,Tt,E,It,W,Ne,Pt,Q,Nt,le,F,Bt,Be,Ut,Ht;S=new Ua({});function Rt(g,f){return g[3]==0?Ra:g[3]==1&&g[1].length>0?Ha:Da}let He=Rt(h),D=He(h);return{c(){t=s("div"),l=s("header"),u=s("a"),d=s("h1"),m=i("Tutorial"),x=v(),p=s("p"),K=i("A "),O=s("b"),ue=i("regular expression"),he=i(" is an expression that represents a "),$=s("em"),fe=i("regular language"),de=i(". A "),A=s("em"),pe=i("language"),Se=i(" in this context is a set of strings, and a "),ge=s("em"),Ve=i("regular"),ze=i(" language is a specific type of language (the distinction is not critical for the task). Another way to view a regular language is as a "),me=s("em"),Me=i("function"),Ce=i(" that assigns a label to every possible string that indicates whether or not the string belongs to that language. A regular expression is a way of specifying a regular language that allows us to create more complex languages by combining simpler languages in specific ways."),Ye=v(),N=s("p"),Le=i("There are multiple variants of regular expression syntax, each of which allows for a different set of operations. Here, we provide a short tutorial to the regular expressions syntax that you will need to complete this task. You can read about the various constructs you will see as you perform the task along with examples. At the end of the page, you can also try out providing examples and seeing whether they are consistent to get a sense for how the task works. At any point during the task, if you'd like to refer to these instructions, you can click on the "),X=s("button"),Ge=i("Regex cheatsheet"),je=i(" button on the top right corner of the screen to review the instructions. When you have read the tutorial, tried out a few examples, and feel comfortable with the setting, click on the "),Z=s("button"),We=i("Proceed to task"),Qe=i(" button at the end of the page to move on to the next stage of the task."),Fe=v(),va(S.$$.fragment),Je=v(),Ke=s("hr"),Xe=v(),ee=s("header"),V=s("a"),be=s("h1"),Ze=i("Try it out!"),et=v(),b=s("p"),tt=i("Here, you have a regular expression, and a space to enter an example. Each example is a string, and its corresponding label. The string is a sequence of characters (entered in the text box), and the label is binary value that indicates whether the string is a positive example (belonging to the regular language specified by the regular expression, indicated with "),te=s("button"),ve=s("i"),at=i("), or a negative example (not belonging to the regular language specified by the expression, indicated with "),ae=s("button"),_e=s("i"),st=i("). An incomplete example is indicated by the "),z=s("span"),ye=s("i"),rt=i(" icon. A "),Ee=s("b"),ot=i("consistent"),nt=i(" example (where the label is correct for that string) is indicated with the "),M=s("span"),xe=s("i"),lt=i(" icon. An "),we=s("b"),it=i("inconsistent"),ct=i(" example (where the label is incorrect for that string) is indicated with the "),C=s("span"),ke=s("i"),ut=i(" icon. You will only need to provide consistent examples in the task you perform."),ht=v(),B=s("p"),ft=i("Use the refresh button ("),Ae=s("i"),dt=i(") to load a different regular expression. You can also "),Y=s("button"),pt=i("Clear"),gt=i(" the example."),mt=v(),se=s("div"),H=s("div"),re=s("div"),oe=s("h3"),bt=i("Regex: "),Te=s("tt"),De=i(h[0]),vt=v(),R=s("div"),L=s("button"),Ie=s("i"),_t=v(),G=s("button"),yt=i("Clear"),Et=v(),q=s("div"),w=s("div"),ne=s("span"),xt=i("Enter example"),wt=v(),U=s("input"),kt=v(),y=s("input"),At=v(),j=s("label"),Pe=s("i"),Tt=v(),E=s("input"),It=v(),W=s("label"),Ne=s("i"),Pt=v(),Q=s("div"),D.c(),Nt=v(),le=s("div"),F=s("button"),Bt=i("Proceed to task"),this.h()},l(g){t=r(g,"DIV",{class:!0});var f=o(t);l=r(f,"HEADER",{class:!0});var qt=o(l);u=r(qt,"A",{href:!0,class:!0});var Ot=o(u);d=r(Ot,"H1",{});var $t=o(d);m=c($t,"Tutorial"),$t.forEach(a),Ot.forEach(a),qt.forEach(a),x=_(f),p=r(f,"P",{});var T=o(p);K=c(T,"A "),O=r(T,"B",{});var St=o(O);ue=c(St,"regular expression"),St.forEach(a),he=c(T," is an expression that represents a "),$=r(T,"EM",{});var Vt=o($);fe=c(Vt,"regular language"),Vt.forEach(a),de=c(T,". A "),A=r(T,"EM",{});var zt=o(A);pe=c(zt,"language"),zt.forEach(a),Se=c(T," in this context is a set of strings, and a "),ge=r(T,"EM",{});var Mt=o(ge);Ve=c(Mt,"regular"),Mt.forEach(a),ze=c(T," language is a specific type of language (the distinction is not critical for the task). Another way to view a regular language is as a "),me=r(T,"EM",{});var Ct=o(me);Me=c(Ct,"function"),Ct.forEach(a),Ce=c(T," that assigns a label to every possible string that indicates whether or not the string belongs to that language. A regular expression is a way of specifying a regular language that allows us to create more complex languages by combining simpler languages in specific ways."),T.forEach(a),Ye=_(f),N=r(f,"P",{});var ie=o(N);Le=c(ie,"There are multiple variants of regular expression syntax, each of which allows for a different set of operations. Here, we provide a short tutorial to the regular expressions syntax that you will need to complete this task. You can read about the various constructs you will see as you perform the task along with examples. At the end of the page, you can also try out providing examples and seeing whether they are consistent to get a sense for how the task works. At any point during the task, if you'd like to refer to these instructions, you can click on the "),X=r(ie,"BUTTON",{class:!0});var Yt=o(X);Ge=c(Yt,"Regex cheatsheet"),Yt.forEach(a),je=c(ie," button on the top right corner of the screen to review the instructions. When you have read the tutorial, tried out a few examples, and feel comfortable with the setting, click on the "),Z=r(ie,"BUTTON",{class:!0});var Lt=o(Z);We=c(Lt,"Proceed to task"),Lt.forEach(a),Qe=c(ie," button at the end of the page to move on to the next stage of the task."),ie.forEach(a),Fe=_(f),_a(S.$$.fragment,f),Je=_(f),Ke=r(f,"HR",{}),Xe=_(f),ee=r(f,"HEADER",{class:!0});var Gt=o(ee);V=r(Gt,"A",{href:!0,class:!0});var jt=o(V);be=r(jt,"H1",{});var Wt=o(be);Ze=c(Wt,"Try it out!"),Wt.forEach(a),jt.forEach(a),Gt.forEach(a),et=_(f),b=r(f,"P",{});var k=o(b);tt=c(k,"Here, you have a regular expression, and a space to enter an example. Each example is a string, and its corresponding label. The string is a sequence of characters (entered in the text box), and the label is binary value that indicates whether the string is a positive example (belonging to the regular language specified by the regular expression, indicated with "),te=r(k,"BUTTON",{class:!0});var Qt=o(te);ve=r(Qt,"I",{class:!0}),o(ve).forEach(a),Qt.forEach(a),at=c(k,"), or a negative example (not belonging to the regular language specified by the expression, indicated with "),ae=r(k,"BUTTON",{class:!0});var Ft=o(ae);_e=r(Ft,"I",{class:!0}),o(_e).forEach(a),Ft.forEach(a),st=c(k,"). An incomplete example is indicated by the "),z=r(k,"SPAN",{style:!0});var Jt=o(z);ye=r(Jt,"I",{class:!0}),o(ye).forEach(a),Jt.forEach(a),rt=c(k," icon. A "),Ee=r(k,"B",{});var Kt=o(Ee);ot=c(Kt,"consistent"),Kt.forEach(a),nt=c(k," example (where the label is correct for that string) is indicated with the "),M=r(k,"SPAN",{style:!0});var Xt=o(M);xe=r(Xt,"I",{class:!0}),o(xe).forEach(a),Xt.forEach(a),lt=c(k," icon. An "),we=r(k,"B",{});var Zt=o(we);it=c(Zt,"inconsistent"),Zt.forEach(a),ct=c(k," example (where the label is incorrect for that string) is indicated with the "),C=r(k,"SPAN",{style:!0});var ea=o(C);ke=r(ea,"I",{class:!0}),o(ke).forEach(a),ea.forEach(a),ut=c(k," icon. You will only need to provide consistent examples in the task you perform."),k.forEach(a),ht=_(f),B=r(f,"P",{});var ce=o(B);ft=c(ce,"Use the refresh button ("),Ae=r(ce,"I",{class:!0}),o(Ae).forEach(a),dt=c(ce,") to load a different regular expression. You can also "),Y=r(ce,"BUTTON",{class:!0});var ta=o(Y);pt=c(ta,"Clear"),ta.forEach(a),gt=c(ce," the example."),ce.forEach(a),mt=_(f),se=r(f,"DIV",{class:!0});var aa=o(se);H=r(aa,"DIV",{class:!0});var Re=o(H);re=r(Re,"DIV",{class:!0});var sa=o(re);oe=r(sa,"H3",{});var Dt=o(oe);bt=c(Dt,"Regex: "),Te=r(Dt,"TT",{});var ra=o(Te);De=c(ra,h[0]),ra.forEach(a),Dt.forEach(a),sa.forEach(a),vt=_(Re),R=r(Re,"DIV",{class:!0});var qe=o(R);L=r(qe,"BUTTON",{class:!0});var oa=o(L);Ie=r(oa,"I",{class:!0}),o(Ie).forEach(a),oa.forEach(a),_t=_(qe),G=r(qe,"BUTTON",{class:!0});var na=o(G);yt=c(na,"Clear"),na.forEach(a),qe.forEach(a),Re.forEach(a),aa.forEach(a),Et=_(f),q=r(f,"DIV",{class:!0});var Oe=o(q);w=r(Oe,"DIV",{class:!0});var I=o(w);ne=r(I,"SPAN",{class:!0});var la=o(ne);xt=c(la,"Enter example"),la.forEach(a),wt=_(I),U=r(I,"INPUT",{type:!0,class:!0}),kt=_(I),y=r(I,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),At=_(I),j=r(I,"LABEL",{class:!0,for:!0});var ia=o(j);Pe=r(ia,"I",{class:!0}),o(Pe).forEach(a),ia.forEach(a),Tt=_(I),E=r(I,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),It=_(I),W=r(I,"LABEL",{class:!0,for:!0});var ca=o(W);Ne=r(ca,"I",{class:!0}),o(Ne).forEach(a),ca.forEach(a),I.forEach(a),Pt=_(Oe),Q=r(Oe,"DIV",{class:!0});var ua=o(Q);D.l(ua),ua.forEach(a),Oe.forEach(a),Nt=_(f),le=r(f,"DIV",{class:!0});var ha=o(le);F=r(ha,"BUTTON",{class:!0});var fa=o(F);Bt=c(fa,"Proceed to task"),fa.forEach(a),ha.forEach(a),f.forEach(a),this.h()},h(){n(u,"href",$e),n(u,"class","d-flex align-items-center text-dark text-decoration-none"),n(l,"class","d-flex align-items-center pb-3 mb-5 border-bottom"),n(X,"class","btn btn-primary"),n(Z,"class","btn btn-primary"),n(V,"href",$e),n(V,"class","d-flex align-items-center text-dark text-decoration-none"),n(ee,"class","d-flex align-items-center pb-3 mb-5 border-bottom"),n(ve,"class","fa-solid fa-plus"),n(te,"class","btn btn-primary"),n(_e,"class","fa-solid fa-minus"),n(ae,"class","btn btn-danger"),n(ye,"class","fa-solid fa-square-pen"),P(z,"font-size","1.5em"),P(z,"color","grey"),n(xe,"class","fa-solid fa-square-check"),P(M,"font-size","1.5em"),P(M,"color","green"),n(ke,"class","fa-solid fa-square-xmark"),P(C,"font-size","1.5em"),P(C,"color","red"),n(Ae,"class","fa-solid fa-arrows-rotate"),n(Y,"class","btn btn-outline-dark"),n(re,"class","col"),n(Ie,"class","fa-solid fa-arrows-rotate"),n(L,"class","btn btn-outline-dark"),n(G,"class","btn btn-outline-dark"),n(R,"class","col"),n(H,"class","row gx-1"),n(se,"class","col-lg-14 py-md-3"),n(ne,"class","input-group-text"),n(U,"type","text"),n(U,"class","form-control"),n(y,"type","radio"),n(y,"class","btn-check"),n(y,"name","utterance-type"),y.__value="+",y.value=y.__value,n(y,"id","positive"),n(y,"autocomplete","off"),h[8][0].push(y),n(Pe,"class","fa-solid fa-plus"),n(j,"class","btn btn-outline-primary"),n(j,"for","positive"),n(E,"type","radio"),n(E,"class","btn-check"),n(E,"name","utterance-type"),E.__value="-",E.value=E.__value,n(E,"id","negative"),n(E,"autocomplete","off"),h[8][0].push(E),n(Ne,"class","fa-solid fa-minus"),n(W,"class","btn btn-outline-danger"),n(W,"for","negative"),n(w,"class","input-group col"),n(Q,"class","col px-2"),n(q,"class","row gx-1"),n(F,"class","btn btn-primary"),n(le,"class","row-gx-1 py-5 float-right"),n(t,"class","col-lg-10 mx-auto p-3 py-md-5")},m(g,f){Ue(g,t,f),e(t,l),e(l,u),e(u,d),e(d,m),e(t,x),e(t,p),e(p,K),e(p,O),e(O,ue),e(p,he),e(p,$),e($,fe),e(p,de),e(p,A),e(A,pe),e(p,Se),e(p,ge),e(ge,Ve),e(p,ze),e(p,me),e(me,Me),e(p,Ce),e(t,Ye),e(t,N),e(N,Le),e(N,X),e(X,Ge),e(N,je),e(N,Z),e(Z,We),e(N,Qe),e(t,Fe),ya(S,t,null),e(t,Je),e(t,Ke),e(t,Xe),e(t,ee),e(ee,V),e(V,be),e(be,Ze),e(t,et),e(t,b),e(b,tt),e(b,te),e(te,ve),e(b,at),e(b,ae),e(ae,_e),e(b,st),e(b,z),e(z,ye),e(b,rt),e(b,Ee),e(Ee,ot),e(b,nt),e(b,M),e(M,xe),e(b,lt),e(b,we),e(we,it),e(b,ct),e(b,C),e(C,ke),e(b,ut),e(t,ht),e(t,B),e(B,ft),e(B,Ae),e(B,dt),e(B,Y),e(Y,pt),e(B,gt),e(t,mt),e(t,se),e(se,H),e(H,re),e(re,oe),e(oe,bt),e(oe,Te),e(Te,De),e(H,vt),e(H,R),e(R,L),e(L,Ie),e(R,_t),e(R,G),e(G,yt),e(t,Et),e(t,q),e(q,w),e(w,ne),e(ne,xt),e(w,wt),e(w,U),da(U,h[1]),e(w,kt),e(w,y),y.checked=y.__value===h[2],e(w,At),e(w,j),e(j,Pe),e(w,Tt),e(w,E),E.checked=E.__value===h[2],e(w,It),e(w,W),e(W,Ne),e(q,Pt),e(q,Q),D.m(Q,null),e(t,Nt),e(t,le),e(le,F),e(F,Bt),Be=!0,Ut||(Ht=[J(Y,"click",h[5]),J(L,"click",h[4]),J(G,"click",h[5]),J(U,"input",h[6]),J(y,"change",h[7]),J(E,"change",h[9]),J(F,"click",h[10])],Ut=!0)},p(g,[f]){(!Be||f&1)&&ka(De,g[0]),f&2&&U.value!==g[1]&&da(U,g[1]),f&4&&(y.checked=y.__value===g[2]),f&4&&(E.checked=E.__value===g[2]),He!==(He=Rt(g))&&(D.d(1),D=He(g),D&&(D.c(),D.m(Q,null)))},i(g){Be||(Ea(S.$$.fragment,g),Be=!0)},o(g){xa(S.$$.fragment,g),Be=!1},d(g){g&&a(t),wa(S),h[8][0].splice(h[8][0].indexOf(y),1),h[8][0].splice(h[8][0].indexOf(E),1),D.d(),Ut=!1,Aa(Ht)}}}function Oa(h,t,l){return t==="+"?h.match(`^${l}$`)?1:-1:t==="-"?h.match(`^${l}$`)?-1:1:0}function $a(h,t,l){let u,d;Ta(h,Ba,A=>l(11,d=A));let m="",x="",p=0;async function K(){d.length==0&&pa(`${$e}/annotate/login`),await fetch("https://try-regex-default-rtdb.firebaseio.com/programs.json").then(A=>A.json()).then(A=>{let pe=A.length;l(0,m=A[Math.floor(Math.random()*(pe-1))]),l(1,x=""),l(2,p=0)}).catch(A=>(console.log(A),[]))}function O(){l(1,x=""),l(2,p=0)}Ia(K);const ue=[[]];function he(){x=this.value,l(1,x)}function $(){p=this.__value,l(2,p)}function fe(){p=this.__value,l(2,p)}const de=()=>pa(`${$e}/annotate/verify`);return h.$$.update=()=>{h.$$.dirty&7&&l(3,u=Oa(x,p,m))},[m,x,p,u,K,O,he,$,ue,fe,de]}class Sa extends ga{constructor(t){super(),ma(this,t,$a,qa,ba,{})}}function Va(h){let t,l,u,d;return u=new Sa({}),{c(){t=s("meta"),l=v(),va(u.$$.fragment),this.h()},l(m){const x=Pa("svelte-tap1z9",document.head);t=r(x,"META",{name:!0,content:!0}),x.forEach(a),l=_(m),_a(u.$$.fragment,m),this.h()},h(){document.title="Regex from Examples",n(t,"name","description"),n(t,"content","Regular expressions from examples")},m(m,x){e(document.head,t),Ue(m,l,x),ya(u,m,x),d=!0},p:Na,i(m){d||(Ea(u.$$.fragment,m),d=!0)},o(m){xa(u.$$.fragment,m),d=!1},d(m){a(t),m&&a(l),wa(u,m)}}}class ja extends ga{constructor(t){super(),ma(this,t,null,Va,ba,{})}}export{ja as default};
