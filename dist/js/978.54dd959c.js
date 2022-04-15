"use strict";(self["webpackChunkfood"]=self["webpackChunkfood"]||[]).push([[978],{6978:function(t,o,a){a.r(o),a.d(o,{default:function(){return A}});var s=a(3396),l=a(7139);const e={class:"container"},d={class:"mt-3"},r=(0,s._)("h3",{class:"mt-3 mb-4"},"購物清單",-1),c={class:"row"},n={class:"col-md-8"},i={class:"table"},p=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col",class:"border-0 ps-0"},"產品"),(0,s._)("th",{scope:"col",class:"border-0"},"數量"),(0,s._)("th",{scope:"col",class:"border-0"},"價錢")])],-1),u={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},b=["src"],h={class:"mb-0 fw-bold ms-3 d-inline-block"},_={class:"border-0 align-middle",style:{"max-width":"160px"}},m={class:"input-group pe-5"},w={class:"input-group-prepend numChangeField"},g=["onClick"],f=(0,s._)("i",{class:"bi bi-caret-up-fill"},null,-1),y=[f],v=["value"],x={class:"input-group-append"},k=["onClick"],C=(0,s._)("i",{class:"bi bi-caret-down-fill"},null,-1),$=[C],D={class:"border-0 align-middle"},q={class:"mb-0 ms-auto"},T=(0,s._)("td",{class:"border-0 align-middle"},[(0,s._)("i",{class:"fas fa-times"})],-1),z={class:"col-md-4"},N={class:"border p-4 mb-4"},Q=(0,s._)("h4",{class:"fw-bold mb-4"},"Order Detail",-1),j={class:"table text-muted border-bottom"},B=(0,s._)("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),I={class:"text-end border-0 px-0 pt-4"},U=(0,s._)("tr",null,[(0,s._)("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"運費"),(0,s._)("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"NT$30")],-1),E={class:"d-flex justify-content-between mt-4"},F=(0,s._)("p",{class:"mb-0 h4 fw-bold"},"Total",-1),H={class:"mb-0 h4 fw-bold"},K=(0,s.Uk)("填寫寄送資料");function O(t,o,a,f,C,O){const W=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",e,[(0,s._)("div",d,[r,(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("table",i,[p,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{class:"border-bottom border-top",key:t.id},[(0,s._)("th",u,[(0,s._)("img",{src:t.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,b),(0,s._)("p",h,(0,l.zw)(t.product.title),1)]),(0,s._)("td",_,[(0,s._)("div",m,[(0,s._)("div",w,[(0,s._)("button",{class:"btn btn-outline-dark border-0 py-2 addItemBtn",onClick:o=>O.addCartQty(t.product.id,t.qty),type:"button",id:"button-addon1"},y,8,g)]),(0,s._)("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:t.qty},null,8,v),(0,s._)("div",x,[(0,s._)("button",{class:"btn btn-outline-dark border-0 py-2 reduceItemBtn",onClick:o=>O.reduceCartQty(t.product.id,t.qty,t.id),type:"button",id:"button-addon2"},$,8,k)])])]),(0,s._)("td",D,[(0,s._)("p",q,"NT$"+(0,l.zw)(t.total),1)]),T])))),128))])])]),(0,s._)("div",z,[(0,s._)("div",N,[Q,(0,s._)("table",j,[(0,s._)("tbody",null,[(0,s._)("tr",null,[B,(0,s._)("td",I,"NT$"+(0,l.zw)(C.total.total),1)]),U])]),(0,s._)("div",E,[F,(0,s._)("p",H,"NT$"+(0,l.zw)(C.total.final_total+30),1)]),(0,s.Wm)(W,{class:"btn btn-dark w-100 mt-4",to:"/checkout"},{default:(0,s.w5)((()=>[K])),_:1})])])])])])}var W={data(){return{carts:[],total:[]}},methods:{getCartsData(){const t="https://vue3-course-api.hexschool.io/v2/api/manson972/cart";this.$http.get(t).then((t=>{console.log(t),this.carts=t.data.data.carts,this.total=t.data.data,console.log(this.total)}))},addCartQty(t,o){const a="https://vue3-course-api.hexschool.io/v2/api/manson972/cart",s={product_id:t,qty:1};this.$http.post(a,{data:s}).then((t=>{console.log(t),this.getCartsData()}))},reduceCartQty(t,o,a){const s="https://vue3-course-api.hexschool.io/v2/api/manson972/cart",l={product_id:t,qty:-1};o-1>0?this.$http.post(s,{data:l}).then((t=>{console.log(t),this.getCartsData()})):(alert("購物品項即將被刪除"),this.$http.delete(`${s}/${a}`).then((t=>{console.log(t),this.getCartsData()})))}},mounted(){this.getCartsData()}},Y=a(89);const Z=(0,Y.Z)(W,[["render",O]]);var A=Z}}]);
//# sourceMappingURL=978.54dd959c.js.map