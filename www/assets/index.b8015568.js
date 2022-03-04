var I=Object.defineProperty,C=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var _=(o,t,a)=>t in o?I(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,b=(o,t)=>{for(var a in t||(t={}))R.call(t,a)&&_(o,a,t[a]);if(g)for(var a of g(t))q.call(t,a)&&_(o,a,t[a]);return o},v=(o,t)=>C(o,T(t));import{j as l,P as d,a as e,N as m,B as h,L as f,b as x,c as D,r as L,f as O,A as V,d as P,V as u,e as N,T as $,g as p,h as F,i as M,k as B,l as j,m as y,n as H,o as U,p as k,F as S,q as K,D as W,s as Y,t as z,u as G,v as X,S as J,w as Q,x as Z,y as ee,z as te,C as ae,E as re,G as oe,H as ie,I as se,J as ne,K as le,M as ce,O as ue,Q as de,R as pe,U as me,W as he,X as fe,Y as ge,Z as _e,_ as be,$ as ve,a0 as Le,a1 as Pe,a2 as ye,a3 as ke,a4 as we,a5 as Se,a6 as Ee,a7 as Ae,a8 as Ie,a9 as Ce,aa as Te,ab as Re,ac as qe,ad as xe,ae as De,af as Oe,ag as Ve,ah as Ne,ai as $e,aj as Fe,ak as Me,al as Be,am as je,an as He,ao as Ue,ap as Ke}from"./vendor.21d8d9e7.js";function et(){import("data:text/javascript,")}const We=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};We();const Ye="modulepreload",w={},ze="",c=function(t,a){return!a||a.length===0?t():Promise.all(a.map(i=>{if(i=`${ze}${i}`,i in w)return;w[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":Ye,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((E,A)=>{n.addEventListener("load",E),n.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Ge=o=>{const{user:t}=o;return l(d,{children:[e(m,{title:`${t.firstName} ${t.lastName}`,backLink:"Back"}),e(h,{strong:!0,children:t.about}),e(f,{children:t.links.map((a,i)=>e(x,{link:a.url,title:a.title,external:!0,target:"_blank"},i))})]})},Xe=[{path:"/",asyncComponent:()=>c(()=>import("./home.e05edf48.js"),["assets/home.e05edf48.js","assets/vendor.21d8d9e7.js"])},{path:"/about/",asyncComponent:()=>c(()=>import("./about.90a58541.js"),["assets/about.90a58541.js","assets/vendor.21d8d9e7.js"])},{path:"/form/",asyncComponent:()=>c(()=>import("./form.6c3ca202.js"),["assets/form.6c3ca202.js","assets/vendor.21d8d9e7.js"])},{path:"/catalog/",asyncComponent:()=>c(()=>import("./catalog.f1abc809.js"),["assets/catalog.f1abc809.js","assets/vendor.21d8d9e7.js"])},{path:"/product/:id/",asyncComponent:()=>c(()=>import("./product.e3f75a74.js"),["assets/product.e3f75a74.js","assets/vendor.21d8d9e7.js"])},{path:"/settings/",asyncComponent:()=>c(()=>import("./settings.92d44301.js"),["assets/settings.92d44301.js","assets/vendor.21d8d9e7.js"])},{path:"/dynamic-route/blog/:blogId/post/:postId/",asyncComponent:()=>c(()=>import("./dynamic-route.e75b5675.js"),["assets/dynamic-route.e75b5675.js","assets/vendor.21d8d9e7.js"])},{path:"/request-and-load/user/:userId/",async({router:o,to:t,resolve:a}){const{app:i}=o;i.preloader.show(),t.params;const r=setTimeout(()=>{const s={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};i.preloader.hide(),a({component:Ge},{props:{user:s}}),clearTimeout(r)},1e3)}},{path:"(.*)",asyncComponent:()=>c(()=>import("./404.4c5abac4.js"),["assets/404.4c5abac4.js","assets/vendor.21d8d9e7.js"])}],Je=D({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:o}){return o.products}},actions:{addProduct({state:o},t){o.products=[...o.products,t]}}}),Qe=()=>{const[o,t]=L.exports.useState(""),[a,i]=L.exports.useState(""),r={name:"react",theme:"ios",store:Je,routes:Xe},s=()=>{k.dialog.alert(`Username: ${o}<br>Password: ${a}`,()=>{k.loginScreen.close()})};return O(()=>{}),l(V,v(b({},r),{children:[e(P,{left:!0,cover:!0,themeDark:!0,children:e(u,{children:l(d,{children:[e(m,{title:"Left Panel"}),e(h,{children:"Left panel content goes here"})]})})}),e(P,{right:!0,reveal:!0,themeDark:!0,children:e(u,{children:l(d,{children:[e(m,{title:"Right Panel"}),e(h,{children:"Right panel content goes here"})]})})}),l(N,{tabs:!0,className:"safe-areas",children:[l($,{tabbar:!0,labels:!0,bottom:!0,children:[e(p,{tabLink:"#view-home",tabLinkActive:!0,iconIos:"f7:house_fill",iconAurora:"f7:house_fill",iconMd:"material:home",text:"Home"}),e(p,{tabLink:"#view-catalog",iconIos:"f7:square_list_fill",iconAurora:"f7:square_list_fill",iconMd:"material:view_list",text:"Catalog"}),e(p,{tabLink:"#view-settings",iconIos:"f7:gear",iconAurora:"f7:gear",iconMd:"material:settings",text:"Settings"})]}),e(u,{id:"view-home",main:!0,tab:!0,tabActive:!0,url:"/"}),e(u,{id:"view-catalog",name:"catalog",tab:!0,url:"/catalog/"}),e(u,{id:"view-settings",name:"settings",tab:!0,url:"/settings/"})]}),e(F,{id:"my-popup",children:e(u,{children:l(d,{children:[e(m,{title:"Popup",children:e(M,{children:e(p,{popupClose:!0,children:"Close"})})}),e(h,{children:e("p",{children:"Popup content goes here."})})]})})}),e(B,{id:"my-login-screen",children:e(u,{children:l(d,{loginScreen:!0,children:[e(j,{children:"Login"}),l(f,{form:!0,children:[e(y,{type:"text",name:"username",placeholder:"Your username",value:o,onInput:n=>t(n.target.value)}),e(y,{type:"password",name:"password",placeholder:"Your password",value:a,onInput:n=>i(n.target.value)})]}),l(f,{children:[e(H,{title:"Sign In",onClick:()=>s()}),e(U,{children:"Some text about login information."})]})]})})})]}))};S.use([K,W,Y,z,G,X,J,Q,Z,ee,te,ae,re,oe,ie,se,ne,le,ce,ue,de,pe,me,he,fe,ge,_e,be,ve,Le,Pe,ye,ke,we,Se,Ee,Ae,Ie,Ce,Te,Re,qe,xe,De,Oe,Ve,Ne,$e,Fe,Me,Be,je]);S.use(He);Ue.render(e(Ke.StrictMode,{children:e(Qe,{})}),document.getElementById("root"));export{et as __vite_legacy_guard,Je as s};
