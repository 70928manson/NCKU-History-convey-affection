(function(){"use strict";var t={9417:function(t,e,n){var o=n(9242),a=(n(8937),n(6818)),s=n.n(a),r=n(6553),i=n.n(r),c=n(6265),l=n.n(c),d=n(6423),u=n(3396);function f(t,e,n,o,a,s){const r=(0,u.up)("Navbar"),i=(0,u.up)("router-view"),c=(0,u.up)("Footer");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(r),(0,u.Wm)(i),(0,u.Wm)(c)],64)}var m=n(7139);const p={class:"container position-relative"},v={class:"navbar sticky-top navbar-expand-lg navbar-light px-0"},b=(0,u._)("div",{style:{"font-family":"'Noto Sans TC', cursive, '微軟雅黑'"}},[(0,u._)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/565/390/original/love-logo-and-symbols-vector-template.jpg",alt:"",style:{"max-width":"50px"}}),(0,u.Uk)(" 成大歷史傳情 ")],-1),h=(0,u._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,u._)("span",{class:"navbar-toggler-icon"})],-1),g={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",style:{"font-family":"'Noto Sans TC', cursive, '微軟雅黑'"}},w={class:"navbar-nav pt-2"},y=(0,u.Uk)("首頁"),x=(0,u.Uk)("傳情小物"),_={class:"d-flex"},k=(0,u._)("div",null,[(0,u._)("i",{class:"bi bi-cart-fill"})],-1),E={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{"margin-top":"0.5rem"}},B=(0,u._)("span",{class:"visually-hidden"},"unread messages",-1);function j(t,e,n,o,a,s){const r=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("div",p,[(0,u._)("nav",v,[(0,u.Wm)(r,{class:"navbar-brand",to:"/"},{default:(0,u.w5)((()=>[b])),_:1}),h,(0,u._)("div",g,[(0,u._)("div",w,[(0,u.Wm)(r,{class:"nav-item nav-link me-4 active",to:"/"},{default:(0,u.w5)((()=>[y])),_:1}),(0,u.Wm)(r,{class:"nav-item nav-link me-4 active",to:"/products"},{default:(0,u.w5)((()=>[x])),_:1}),(0,u._)("div",_,[(0,u.Wm)(r,{class:"nav-item nav-link me-4 position-relative px-1",to:"/cart"},{default:(0,u.w5)((()=>[k,(0,u._)("span",E,[(0,u.Uk)((0,m.zw)(a.cartData?.carts?.length)+" ",1),B])])),_:1})])])])])])}var O=n(9868),A={data(){return{cartData:{}}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/v2/api/manson972/cart";this.$http.get(t).then((t=>{this.cartData=t.data.data}))}},mounted(){this.getCart(),O.Z.on("get-cart",(()=>{console.log("emiiter"),this.getCart()}))}},C=n(89);const U=(0,C.Z)(A,[["render",j]]);var D=U;const N={class:"py-5",style:{"background-color":"#563c06"}},T=(0,u.uE)('<div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><a class="text-white h4" target="_blank" href="https://www.facebook.com/2022%E6%88%90%E5%A4%A7%E6%AD%B7%E5%8F%B2%E5%82%B3%E6%83%85%E7%B7%A3%E8%B5%B7%E7%99%BE%E5%B9%B4%E4%BB%8A%E7%94%9F%E4%B9%8B%E6%88%80-109943684487680"> LOGO</a><ul class="d-flex list-unstyled mb-0 h4"><li><a href="https://www.facebook.com/2022%E6%88%90%E5%A4%A7%E6%AD%B7%E5%8F%B2%E5%82%B3%E6%83%85%E7%B7%A3%E8%B5%B7%E7%99%BE%E5%B9%B4%E4%BB%8A%E7%94%9F%E4%B9%8B%E6%88%80-109943684487680" class="text-white mx-3" target="_blank"><i class="bi bi-facebook"></i></a></li><li><a href="https://github.com/70928manson" class="text-white ms-3" target="_blank"><i class="bi bi-github"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">02-7426-9570</p><p class="mb-0">manson972@yahoo.com</p></div><div class="mb-md-0 mb-1"><p class="mb-0">© 2022 LOGO All Rights Reserved.</p></div></div></div>',1),S=[T];function W(t,e){return(0,u.wg)(),(0,u.iD)("div",N,S)}const M={},F=(0,C.Z)(M,[["render",W]]);var I=F,P={components:{Navbar:D,Footer:I}};const Z=(0,C.Z)(P,[["render",f]]);var H=Z,G=n(678),L=n(9926),z=n(9395),Y=n(7758),$=n(9042),q=n(6210);const R={class:"position-relative"},V={class:"container d-flex flex-column",style:{"min-height":"100vh"}},K=(0,u._)("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)","background-repeat":"no-repeat","background-size":"cover","background-position":"center center"}},null,-1),J={class:"row justify-content-center my-auto"},Q={class:"position-absolute col-md-4 text-center",style:{width:"400px",margin:"auto"}},X=(0,u._)("h1",{class:"pb-3 wow fadeInUp",style:{"font-family":"cursive, '微軟雅黑'",color:"white"}},"成大歷史傳情",-1),tt=(0,u._)("h6",{class:"mb-0 wow fadeInDown",style:{"font-family":"cursive, '微軟雅黑'",color:"white"}},"星空夜語，一生命定",-1),et={style:{"padding-top":"100px"}},nt=(0,u.uE)('<div class="container wow fadeIn" data-wow-delay="0.1s" id="test" style="font-family:&#39;Noto Sans TC&#39;, cursive, &#39;微軟雅黑&#39;;"><div class="row mt-5"><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+L+'" class="card-img-top rounded-0" alt="..."><div class="card-body text-center"><h4>想與你共寫</h4><div class="d-flex justify-content-center"><p class="card-text text-muted mb-0"> 今生今世的一紙相伴 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+z+'" class="card-img-top rounded-0" alt="..."><div class="card-body text-center"><h4>歷史傳情</h4><div class="d-flex justify-content-center"><p class="card-text mb-0"> 替你將心意傳遞給遠方的他/她 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+Y+'" class="card-img-top rounded-0" alt="..."><div class="card-body text-center"><h4>想聽你的聲音</h4><div class="d-flex justify-content-center"><p class="card-text text-muted mb-0"> 車馬很慢，書信很遠，聽你一言，一生只願愛你一人 </p></div></div></div></div></div></div><div class="mt-7" style="background-color:#fff7eb;font-family:&#39;Noto Sans TC&#39;, cursive, &#39;微軟雅黑&#39;;"><div class="container wow fadeInUp" data-wow-delay="0.45s"><div class="row justify-content-center py-7"><div class="col-md-6 text-center"><h3>《歷史傳情，心繫於你》</h3><p class="my-5">你也有想要一生一世相守的人嗎？<br> 又或是有心儀的的對象？<br> 想表達滿腔的愛意，到嘴邊時卻又羞於開口？<br> 沒問題！<br> 歷史傳情提供各種小物<br> 就讓成大歷史幫助你將全部的心意傳遞給他/她吧！</p><p><small>— 成大歷史傳情 —</small></p></div></div></div></div>',2),ot={class:"container my-7",style:{"font-family":"'Noto Sans TC', cursive, '微軟雅黑'"}},at={class:"row"},st=(0,u._)("div",{class:"col-md-6"},[(0,u._)("img",{src:$,alt:"",class:"img-fluid"})],-1),rt={class:"col-md-4 m-auto text-center wow fadeInUp","data-wow-delay":"0.15s"},it=(0,u._)("h4",{class:"mt-4"},"糖徨恍若初見，紙願與你相戀",-1),ct=(0,u._)("p",{class:"text-muted"},[(0,u.Uk)("老一輩的懷舊零嘴，新一代的奇幻愛戀"),(0,u._)("br"),(0,u.Uk)("讓你/妳回到童年純純的愛戀中！")],-1),lt=(0,u.Uk)(">> 選購傳情小物"),dt={class:"row flex-row-reverse justify-content-between mt-4"},ut=(0,u._)("div",{class:"col-md-6"},[(0,u._)("img",{src:q,alt:"",class:"img-fluid"})],-1),ft={class:"col-md-4 m-auto text-center wow fadeInUp","data-wow-delay":"0.15s"},mt=(0,u._)("h4",{class:"mt-4"},"緣起百年，今生之戀",-1),pt=(0,u._)("p",{class:"text-muted"},[(0,u.Uk)("對你的思念寄予散落的星星"),(0,u._)("br"),(0,u.Uk)("但願那點點的星光能照進你的窗前")],-1),vt=(0,u.Uk)(">> 選購傳情小物");function bt(t,e,n,o,a,s){const r=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",R,[(0,u._)("div",V,[K,(0,u._)("div",J,[(0,u._)("div",Q,[X,tt,(0,u._)("h1",et,[(0,u._)("i",{class:"bi bi-chevron-double-down wow flash","data-wow-delay":"0.6s",onClick:e[0]||(e[0]=(...t)=>s.goDown&&s.goDown(...t)),style:{cursor:"pointer",color:"white"}})])])])])]),nt,(0,u._)("div",ot,[(0,u._)("div",at,[st,(0,u._)("div",rt,[it,ct,(0,u.Wm)(r,{to:"/products",style:{color:"#000080"}},{default:(0,u.w5)((()=>[lt])),_:1})])]),(0,u._)("div",dt,[ut,(0,u._)("div",ft,[mt,pt,(0,u.Wm)(r,{to:"/products",style:{color:"#000080"}},{default:(0,u.w5)((()=>[vt])),_:1})])])])],64)}var ht={data(){return{}},methods:{goDown(){document.getElementById("test").scrollIntoView()}},mounted(){(new this.$wow.WOW).init()}};const gt=(0,C.Z)(ht,[["render",bt]]);var wt=gt;const yt=[{path:"/",name:"home",component:wt},{path:"/products",name:"products",component:()=>n.e(943).then(n.bind(n,9943))},{path:"/product/:id",name:"product",component:()=>n.e(74).then(n.bind(n,4074))},{path:"/cart",name:"cart",component:()=>n.e(76).then(n.bind(n,2076))},{path:"/checkout",name:"checkout",component:()=>n.e(603).then(n.bind(n,2603))},{path:"/success",name:"success",component:()=>n.e(424).then(n.bind(n,4424))}],xt=(0,G.p7)({history:(0,G.r5)(),routes:yt});var _t=xt;const kt=(0,o.ri)(H);kt.config.globalProperties.$wow=s(),kt.use(i()),kt.use(d.Z,l()),kt.use(_t),kt.mount("#app")},9868:function(t,e,n){var o=n(1373);const a=(0,o.Z)();e["Z"]=a},6210:function(t,e,n){t.exports=n.p+"img/couple2.07c01f9e.jpg"},9042:function(t,e,n){t.exports=n.p+"img/handbox1.507bcfea.jpg"},9395:function(t,e,n){t.exports=n.p+"img/headout.d1a0c9c8.jpg"},9926:function(t,e,n){t.exports=n.p+"img/st1.1930e2f0.jpg"},7758:function(t,e,n){t.exports=n.p+"img/st2.2f7ca784.png"}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,a,s){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],s=t[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,s<r&&(r=s));if(i){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{74:"5a4056d8",76:"5b7008df",424:"e5e6554b",603:"cfeb6245",943:"67e5d9e5"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="food:";n.l=function(o,a,s,r){if(t[o])t[o].push(a);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+s){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+s),i.src=o),t[o]=[a];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(m);var a=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/NCKU-History-convey-affection/"}(),function(){var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=s);var r=n.p+n.u(e),i=new Error,c=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}};n.l(r,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,r=o[0],i=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var d=c(n)}for(e&&e(o);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},o=self["webpackChunkfood"]=self["webpackChunkfood"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9417)}));o=n.O(o)})();
//# sourceMappingURL=app.cda26c05.js.map