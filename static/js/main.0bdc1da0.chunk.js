(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(104),n(105),n(45)),o=n(16),j=n(65),l=n(3),u=n(175),d=n(188),b=n(19),O=n(187),h=n(176),p=n(177),f=n(178),x=n(174),m=n(59),g=n(180),v=n(179),S=n(88),_=n.n(S),k=n(89),N=n.n(k),C=n(90),w=n.n(C),y=n(181),I=n(91),B=n.n(I),P=n(92),F=n.n(P),L=n(189),M=n(182),J=n(183),z=n(56),R=n.n(z),T=n(58),D=n(11),E=n(57),H=n.n(E),K=n(30),V=n.n(K),W=n(170),q=n(184),G=n(53),U=n.n(G),X=n(4),Y=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),j=(s[0],s[1]),l=Object(a.useState)(""),u=Object(o.a)(l,2),d=(u[0],u[1]),b=function(e){r(e.currentTarget.value)},O=function(){d(c)},h=function(e){13===e.charCode&&d(c)},p=function(e,t,n,a){return"https://farm".concat(e,".staticflickr.com/").concat(t,"/").concat(n,"_").concat(a,".jpg")},f=function(e,t){var n=e.farm,a=e.server,c=e.id,r=e.secret,i=e.title;return Object(X.jsxs)("ul",{children:[Object(X.jsx)("div",{className:V.a.title,children:i}),Object(X.jsx)("img",{src:p(n,a,c,r),width:"300px",height:"300px"}),localStorage.getItem(c)?Object(X.jsx)(W.a,{variant:"contained",startIcon:Object(X.jsx)(U.a,{}),size:"small",color:"secondary",onClick:function(){localStorage.removeItem(c),j(r)},className:V.a.button,children:"Remove it"}):Object(X.jsx)(W.a,{variant:"contained",size:"small",color:"primary",className:V.a.button,onClick:function(){return function(e,t,n,a,c){localStorage.setItem(n,JSON.stringify({farm:e,server:t,id:n,secret:a,title:c})),j(n)}(n,a,c,r,i)},children:"Bookmark it"}),Object(X.jsx)(q.a,{label:"some tag?",className:V.a.field,onChange:b,onBlur:O,onKeyPress:h})]},t)};return Object(X.jsx)("div",{className:V.a.pictureContainer,children:e.pictures.map((function(e){return f(e,e.id)}))})},A=n(87),Q=n.n(A).a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=88511e631d64958716f46a5c31c01824&per_page=20"}),Z={getImg:function(e,t){return Q.get("&page=".concat(t,"&text=").concat(e)).then((function(e){return e.data}))}},$=n(185),ee=function(){var e=ae(),t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(""),j=Object(o.a)(s,2),l=j[0],u=j[1],d=Object(a.useState)([]),b=Object(o.a)(d,2),O=b[0],h=b[1],p=c.a.useState(1),f=Object(o.a)(p,2),x=f[0],m=f[1],g=Object(a.useState)(0),v=Object(o.a)(g,2),S=v[0],_=v[1],k=Object(a.useState)(""),N=Object(o.a)(k,2),C=(N[0],N[1]);Object(a.useEffect)((function(){""!==r&&Z.getImg(r,x).then((function(e){h(e.photos.photo),_(e.photos.pages)})).catch((function(e){C("Some error")}))}),[r,x]);return Object(X.jsxs)("div",{children:[Object(X.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(X.jsx)(q.a,{id:"standard-basic",className:H.a.textField,label:"Find pictures",fullWidth:!0,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){i(l)},onKeyPress:function(e){try{13===e.charCode&&(i(l),e.stopPropagation(),e.preventDefault())}catch(t){console.log(t)}}}),Object(X.jsx)(W.a,{onClick:function(){i(l)},color:"primary",variant:"contained",children:"Find"})]}),Object(X.jsx)("div",{className:H.a.paginator,children:Object(X.jsx)($.a,{count:Math.ceil(S/15),page:x,shape:"rounded",onChange:function(e,t){m(t)}})}),Object(X.jsx)("div",{className:H.a.container,children:Object(X.jsx)(Y,{pictures:O})})]})},te=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=(t[0],t[1]),c=function(e,t,n,a){return"https://farm".concat(e,".staticflickr.com/").concat(t,"/").concat(n,"_").concat(a,".jpg")};return Object(X.jsx)("div",{className:V.a.pictureContainer,children:function(){for(var e=[],t=Object.keys(localStorage),n=t.length;n--;)e.push(JSON.parse(localStorage.getItem(t[n])));return e}().map((function(e){return function(e,t){var a=e.farm,r=e.server,i=e.id,s=e.secret,o=e.title;return Object(X.jsx)("ul",{children:Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{className:"title",children:o}),Object(X.jsx)("img",{src:c(a,r,i,s),width:"300px"}),Object(X.jsx)(W.a,{variant:"contained",className:V.a.button,size:"small",startIcon:Object(X.jsx)(U.a,{}),color:"secondary",onClick:function(){localStorage.removeItem(i),n(i)},children:"Remove it"})]})},t)}(e,e.id)}))})},ne=240,ae=Object(u.a)((function(e){return Object(d.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(ne,"px)"),marginLeft:ne,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ne,flexShrink:0},drawerPaper:{width:ne},drawerHeader:Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})})),ce=function(){var e=ae(),t=Object(b.a)(),n=c.a.useState(!1),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(X.jsxs)(T.a,{basename:"",children:[Object(X.jsxs)("div",{className:e.root,children:[Object(X.jsx)(h.a,{}),Object(X.jsx)(p.a,{position:"fixed",className:Object(l.a)(e.appBar,Object(s.a)({},e.appBarShift,r)),children:Object(X.jsxs)(f.a,{children:[Object(X.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(l.a)(e.menuButton,r&&e.hide),children:Object(X.jsx)(_.a,{})}),Object(X.jsx)(m.a,{variant:"h6",noWrap:!0,children:"Image Finder"}),Object(X.jsxs)("span",{className:R.a.span,children:[" ",Object(X.jsx)(L.a,{src:"/broken-image.jpg"})]})]})}),Object(X.jsxs)(O.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(X.jsx)("div",{className:e.drawerHeader,children:Object(X.jsx)(v.a,{onClick:function(){i(!1)},children:"ltr"===t.direction?Object(X.jsx)(N.a,{}):Object(X.jsx)(w.a,{})})}),Object(X.jsx)(g.a,{}),Object(X.jsxs)(x.a,{children:[Object(X.jsx)(T.b,{to:"/search",className:R.a.link,children:Object(X.jsxs)(y.a,{button:!0,children:[Object(X.jsx)(M.a,{children:Object(X.jsx)(B.a,{})}),Object(X.jsx)(J.a,{primary:"Search"})]})}),Object(X.jsx)(T.b,{to:"/bookmarks",className:R.a.link,children:Object(X.jsxs)(y.a,{button:!0,children:[Object(X.jsx)(M.a,{children:Object(X.jsx)(F.a,{})}),Object(X.jsx)(J.a,{primary:"Bookmarks"})]})})]}),Object(X.jsx)(g.a,{})]}),Object(X.jsx)("main",{className:Object(l.a)(e.content,Object(s.a)({},e.contentShift,r)),children:Object(X.jsx)("div",{className:e.drawerHeader})})]}),Object(X.jsx)(D.b,{path:"/",render:function(){return Object(X.jsx)(D.a,{to:"/search"})}}),Object(X.jsx)(D.b,{path:"/search",render:function(){return Object(X.jsx)(ee,{})}}),Object(X.jsx)(D.b,{path:"/bookmarks",render:function(){return Object(X.jsx)(te,{})}})]})};var re=function(){return Object(X.jsx)("div",{children:Object(X.jsx)(ce,{})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(re,{})}),document.getElementById("root")),ie()},30:function(e,t,n){e.exports={pictureContainer:"Picture_pictureContainer__29e2u",button:"Picture_button__3oVO3",field:"Picture_field__3PKzc",title:"Picture_title__1S1Mq"}},56:function(e,t,n){e.exports={span:"Menu_span__3DLMo",link:"Menu_link__24YcE"}},57:function(e,t,n){e.exports={paginator:"Search_paginator__2lbJ5",container:"Search_container__2-ctL",textField:"Search_textField__2Xfpe"}}},[[132,1,2]]]);
//# sourceMappingURL=main.0bdc1da0.chunk.js.map