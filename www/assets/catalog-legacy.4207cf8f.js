System.register(["./index-legacy.8cbfb2b8.js","./vendor-legacy.9a6e2bd7.js"],(function(i){"use strict";var e,t,r,n,c,d,o,s,a,l;return{setters:[function(i){e=i.s},function(i){t=i.az,r=i.j,n=i.P,c=i.a,d=i.N,o=i.L,s=i.b,a=i.B,l=i.aw}],execute:function(){i("default",(()=>{const i=t("products");return r(n,{name:"catalog",children:[c(d,{title:"Catalog"}),c(o,{children:i.map((i=>c(s,{title:i.title,link:`/product/${i.id}/`},i.id)))}),3===i.length&&c(a,{children:c(l,{fill:!0,onClick:()=>{e.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})},children:"Add Product"})})]})}))}}}));