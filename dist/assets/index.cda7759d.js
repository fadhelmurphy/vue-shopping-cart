var Y=Object.defineProperty,Q=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var A=(e,t,s)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,M=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&A(e,s,t[s]);if(U)for(var s of U(t))X.call(t,s)&&A(e,s,t[s]);return e},N=(e,t)=>Q(e,O(t));import{r as y,o as i,c as w,a as E,b as d,p as P,d as S,e as o,u as $,f as h,g as f,w as g,t as u,h as _,i as H,j as b,k as C,F as L,l as z,m as v,n as T,q as G,s as K,v as R,x as Z,y as J}from"./vendor.06659984.js";const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};ee();const te={setup(e){return(t,s)=>{const a=y("router-view");return i(),w(a)}}};var oe=[{id:1,title:"Dell XPS 13 9380",price:1080,imgUrl:"https://m.media-amazon.com/images/I/719tCHXNiXL._AC_UL320_.jpg"},{id:2,title:"Apple 13 inch MacBook Air",price:799,imgUrl:"https://m.media-amazon.com/images/I/51-oeeCf1zL._AC_UY218_.jpg"},{id:3,title:"Lenovo IdeaPad 3",price:450,imgUrl:"https://m.media-amazon.com/images/I/71MFkYd8TTL._AC_UY218_.jpg"},{id:4,title:"Acer Spin 3 Convertible Laptop",price:176,imgUrl:"https://m.media-amazon.com/images/I/81H9y1pPW6L._AC_UY218_.jpg"},{id:5,title:"CHUWI HeroBook Pro 14.1 inch",price:269,imgUrl:"https://m.media-amazon.com/images/I/71jDooDQHpL._AC_UY218_.jpg"},{id:6,title:"Lenovo Ideapad L340",price:868,imgUrl:"https://m.media-amazon.com/images/I/81XvT+ahkoL._AC_UY218_.jpg"},{id:7,title:"HP 2020 Newest 17.3 Inch",price:699,imgUrl:"https://m.media-amazon.com/images/I/61b7mU3bKbL._AC_UY218_.jpg"},{id:8,title:"ASUS ROG Zephyrus Duo",price:3699,imgUrl:"https://m.media-amazon.com/images/I/81e1pXhTE2L._AC_UY218_.jpg"},{id:9,title:"Acer Aspire 5 Slim Laptop",price:579,imgUrl:"https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg"},{id:10,title:"Alienware New M15",price:1799,imgUrl:"https://m.media-amazon.com/images/I/7159o5Y0GIL._AC_UL320_.jpg"}];const se={products:[],cart:[]},re={products:e=>e.products,cart:e=>e.cart},ne={getProducts({commit:e}){e("getProductData")},addItemToCart({commit:e},t){e("addToCart",t)},removeItemFromCart({commit:e},t){e("removeFromCart",t)},addQty({commit:e},t){e("addQty",t)},reduceQty({commit:e},t){e("reduceQty",t)},emptyCart({commit:e}){e("emptyCart")}},ae={getProductData(e){e.products=oe},addToCart(e,t){const s=e.cart.find(a=>a.id===t.id);s?s.qty++:e.cart.push(N(M({},t),{qty:1}))},removeFromCart(e,t){return e.cart=e.cart.filter(s=>s.id!==t)},addQty(e,t){const s=e.cart.find(a=>a.id===t);s.qty++},reduceQty(e,t){const s=e.cart.find(a=>a.id===t);s.qty--,s.qty===0&&(e.cart=e.cart.filter(a=>a.id!==t))},emptyCart(e){e.cart=[]}},ie=E({state:se,getters:re,actions:ne,mutations:ae});var j=(e,t)=>{for(const[s,a]of t)e[s]=a;return e};const ce={},F=e=>(P("data-v-de969d88"),e=e(),S(),e),de={class:"container flex flex-wrap mx-auto my-40 px-5 min-h-96 items-center"},le=F(()=>o("h1",{class:"header-font mb-20 text-8xl text-left font-bold"},"Selamat datang di Mamang shop",-1)),ue=F(()=>o("p",{class:"text-gray-400"},"Web ini dibuat menggunakan Vue,Vuex,Tailwind",-1)),_e=[le,ue];function me(e,t){return i(),d("div",de,_e)}var pe=j(ce,[["render",me],["__scopeId","data-v-de969d88"]]);const he={class:"bg-green-500"},ge={class:"container mx-auto px-2 sm:px-6 lg:px-8"},xe={class:"relative flex items-center justify-between h-16"},fe=H('<div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg><svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>',1),ve={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},ye=o("div",{class:"flex-shrink-0 flex items-center"},[o("img",{class:"block lg:hidden h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}),o("img",{class:"hidden lg:block h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",alt:"Workflow"})],-1),we={class:"hidden sm:block sm:ml-6"},be={class:"flex space-x-4 menu"},ke=b("Home"),$e=b("Cart"),Ce={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},Le=o("span",{class:"mr-2"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])],-1),je=H('<div class="sm:hidden" id="mobile-menu"><div class="px-2 pt-2 pb-3 space-y-1"><a href="#" class="bg-green-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a><a href="#" class="text-green-50 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a><a href="#" class="text-green-50 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a><a href="#" class="text-green-50 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a></div></div>',1),Ie={setup(e){const t=$(),s=h(()=>t.getters.cart);return(a,n)=>{const r=y("router-link");return i(),d("nav",he,[o("div",ge,[o("div",xe,[fe,o("div",ve,[ye,o("div",we,[o("div",be,[f(r,{class:"text-green-50 text-sm font-medium rounded-md hover:bg-green-700 hover:text-white px-3 py-2",to:"/"},{default:g(()=>[ke]),_:1}),f(r,{class:"text-green-50 text-sm font-medium rounded-md hover:bg-green-700 hover:text-white px-3 py-2",to:"/cart"},{default:g(()=>[$e]),_:1})])])]),o("div",Ce,[f(r,{class:"flex bg-green-800 p-2 px-3 rounded-full text-green-50 hover:text-white",to:"/cart"},{default:g(()=>[Le,o("span",null,u(_(s).length),1)]),_:1})])])]),je])}}},Ue={components:{MenuNavVue:Ie}};function Ae(e,t,s,a,n,r){const c=y("MenuNavVue");return i(),d(L,null,[f(c),C(e.$slots,"header"),C(e.$slots,"content"),C(e.$slots,"default")],64)}var V=j(Ue,[["render",Ae]]);const Me={class:"container my-12 mx-auto px-4 md:px-12"},Ne=o("div",{class:"my-16 text-center"},[o("h1",{class:"text-8xl font-bold"},"Produk"),o("p",{class:"my-10 text-gray-400"},"Daftar Produk yang kami jual")],-1),Pe={class:"grid grid-cols-1"},Se={class:"flex flex-wrap -mx-1 lg:-mx-4"},He={class:"rounded-2xl shadow-lg hover:shadow-xl transition duration-300"},ze=["src","alt"],Te={class:"px-10 py-16 flex-auto items-center"},Fe={class:"text-left"},Ve={class:"my-5 text-2xl truncate text-green-900 font-bold"},qe={class:"my-5 text-xl text-green-500 font-bold"},Be=["onClick"],De=o("div",null,null,-1),Ye={setup(e){const t=$(),s=h(()=>t.state.products),a=h(()=>t.getters.cart);z(()=>{t.dispatch("getProducts")});const n=r=>t.dispatch("addItemToCart",r);return h(()=>a.value.reduce((r,c)=>r+c.qty*c.price,0).toLocaleString()),v(!1),v(!0),(r,c)=>(i(),d("div",Me,[Ne,o("div",Pe,[o("div",Se,[(i(!0),d(L,null,T(_(s),m=>(i(),d("div",{key:m.id,class:"my-10 px-1 w-full md:w-1/2 lg:my-8 lg:px-4 lg:w-1/3"},[o("div",He,[o("img",{class:"object-contain h-32 w-full rounded-xl",src:m.imgUrl,alt:m.title},null,8,ze),o("div",Te,[o("div",Fe,[o("h1",Ve,u(m.title),1),o("p",qe," $ "+u(m.price),1)]),o("button",{class:"text-white w-full text-md font-bold bg-green-500 py-4 px-6 rounded-lg shadow-xl-green",onClick:x=>n(m)}," + Add to cart ",8,Be),De])])]))),128))])])]))}},Qe={setup(e){return v("variable cuy"),(t,s)=>(i(),w(V,null,{header:g(()=>[f(pe)]),content:g(()=>[f(Ye)]),_:1}))}};const Oe={},q=e=>(P("data-v-a5141688"),e=e(),S(),e),We=q(()=>o("h1",null,"Not Found!",-1)),Xe=q(()=>o("p",null,[o("a",{href:"/"},"Go home?")],-1));function Ee(e,t){const s=y("center");return i(),w(s,null,{default:g(()=>[We,Xe]),_:1})}var Ge=j(Oe,[["render",Ee],["__scopeId","data-v-a5141688"]]);const Ke={class:"container my-12 mx-auto px-4 md:px-12"},Re=o("h3",{class:"text-8xl font-bold text-left"},"Keranjang",-1),Ze={class:"text-xl my-10 text-gray-400 text-left"},Je=["src"],et={class:"flex flex-wrap items-center text-left"},tt={class:"text-4xl w-full font-bold"},ot={class:"w-full text-xl font-light my-5 text-gray-400 text-left"},st={class:"w-full font-bold text-xl my-5 text-gray-600 text-left"},rt=b("Total : "),nt={class:"text-green-500"},at={class:"flex flex-wrap items-center"},it={class:"flex justify-between items-center w-full"},ct=["onClick"],dt={class:"mx-4"},lt=["onClick"],ut={class:"flex flex-wrap p-10 justify-end items-center"},_t=["onClick"],mt=o("span",{class:"sr-only"},"Close menu",-1),pt=o("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ht=[mt,pt],gt={class:"grid items-center grid-cols-1 md:grid-cols-2"},xt={class:"uppercase text-2xl font-bold mb-10 md:mb-0"},ft=b("Total Harga : "),vt={class:"text-green-500"},yt=["disabled"],wt={key:0},bt={key:1},kt={setup(e){const t=$();h(()=>t.state.products);const s=h(()=>t.getters.cart);z(()=>{t.dispatch("getProducts")});const a=p=>t.dispatch("reduceQty",p),n=p=>t.dispatch("addQty",p),r=()=>t.dispatch("emptyCart"),c=p=>t.dispatch("removeItemFromCart",p);var m=h(()=>s.value.reduce((p,k)=>p+k.qty*k.price,0).toLocaleString()),x=v(!1),B=v(!0);const D=()=>{x.value=!0,setTimeout(()=>{x.value=!1,B.value=!0,r()},1e3)};return(p,k)=>(i(),w(V,null,{content:g(()=>[o("div",Ke,[Re,o("p",Ze," Anda memiliki "+u(_(s).length)+" produk pada cart. ",1),(i(!0),d(L,null,T(_(s),l=>(i(),d("div",{key:l.id,class:"mb-16 grid grid-cols-4 gap-4"},[o("div",null,[o("img",{class:"object-contain h-32 w-full rounded-xl",src:l.imgUrl},null,8,Je)]),o("div",et,[o("h2",tt,u(l.title),1),o("p",ot,"Harga satuan : $"+u(l.price),1),o("p",st,[rt,o("span",nt,"$"+u(l.price*l.qty),1)])]),o("div",at,[o("div",it,[o("button",{class:"mr-4 text-gray-600 text-md font-bold bg-white border-2 border-gray-200 py-3 px-5 rounded-lg shadow-xl",onClick:I=>a(l.id)}," - ",8,ct),o("p",dt,u(l.qty),1),o("button",{class:"ml-4 text-white text-md font-bold bg-green-500 py-3 px-5 rounded-lg shadow-xl-green hover:shadow-lg transition duration-500",onClick:I=>n(l.id)}," + ",8,lt)])]),o("div",ut,[o("button",{onClick:I=>c(l.id),type:"button",class:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},ht,8,_t)])]))),128)),o("div",gt,[o("h1",xt,[ft,o("span",vt,"$"+u(_(m)),1)]),_(s).length?(i(),d("button",{key:0,onClick:D,disabled:_(x),class:G([{"opacity-50 cursor-not-allowed":_(x)},"text-white w-full text-md font-bold bg-green-500 p-6 rounded-lg shadow-xl-green"])},[_(x)?(i(),d("div",wt,"Loading...")):(i(),d("span",bt,"Checkout "))],10,yt)):K("",!0)])])]),_:1}))}},$t=[{path:"/",name:"Home",component:Qe},{path:"/cart",name:"Cart",component:kt},{path:"/:catchAll(.*)",name:"NotFound",component:Ge}],Ct=R({history:Z("/vue-shopping-cart/"),routes:$t,linkActiveClass:"bg-green-900"});J(te).use(Ct).use(ie).mount("#app");
