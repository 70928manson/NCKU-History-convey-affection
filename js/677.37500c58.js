"use strict";(self["webpackChunkfood"]=self["webpackChunkfood"]||[]).push([[677],{5677:function(t,s,e){e.r(s),e.d(s,{default:function(){return k}});var o=e(3396),i=e(7139);const a=(0,o._)("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[(0,o._)("div",{class:"position-absolute pictureFix"}),(0,o._)("h2",{class:"fw-bold"},"傳情小物")],-1),c={class:"container mt-md-5 mt-3 mb-7"},r={class:"row"},l={class:"col-md-12"},n={class:"row rows-cols-1 row-cols-md-2 row-cols-lg-4"},d={class:"card border-0 mb-4 position-relative position-relative"},u=(0,o._)("a",{href:"#",class:"text-dark"},[(0,o._)("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),p={class:"card-body p-0"},h={class:"mb-0 mt-3"},m={class:"card-text text-muted mb-0",style:{height:"4.5rem",overflow:"hidden"}},g={class:"card-text mb-0"},v={class:"text-muted"},_=(0,o._)("p",{class:"text-muted mt-3"},null,-1);function w(t,s,e,w,f,b){const x=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("div",c,[(0,o._)("div",r,[(0,o._)("div",l,[(0,o._)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-6",key:t.id},[(0,o._)("div",d,[(0,o._)("div",{style:(0,i.j5)([{backgroundImage:`url(${t.imageUrl})`},{height:"200px","background-size":"cover","background-position":"center center"}])},null,4),u,(0,o._)("div",p,[(0,o._)("h4",h,[(0,o.Wm)(x,{to:`/product/${t.id}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.title),1)])),_:2},1032,["to"])]),(0,o._)("p",m,(0,i.zw)(t.description),1),(0,o._)("p",g,[(0,o.Uk)("NT$"+(0,i.zw)(t.price)+" ",1),(0,o._)("span",v,[(0,o._)("del",null,"NT$"+(0,i.zw)(t.origin_price),1)])]),_])])])))),128))])])])])],64)}var f={data(){return{products:[],pagination:{}}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/v2/api/manson972/products/all";this.$http.get(t).then((t=>{console.log(t),this.products=t.data.products,this.pagination=t.data.pagination}))}},mounted(){this.getProducts()}},b=e(89);const x=(0,b.Z)(f,[["render",w]]);var k=x}}]);
//# sourceMappingURL=677.37500c58.js.map