"use strict";(self["webpackChunkfood"]=self["webpackChunkfood"]||[]).push([[603],{2603:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});var l=s(3396),o=s(7139);const a={class:"container"},r=(0,l._)("div",{class:"row justify-content-center"},[(0,l._)("div",{class:"col-md-10"},[(0,l._)("h3",{class:"fw-bold mb-4 pt-3"},"填寫寄送資料")])],-1),c={class:"row flex-row-reverse justify-content-center pb-5"},d={class:"col-md-4"},i={class:"border p-4 mb-4"},m=["src"],n={class:"w-100"},u={class:"d-flex justify-content-between"},p={class:"mb-0 fw-bold"},b={class:"mb-0"},f={class:"mb-0 fw-bold"},h={class:"table mt-4 border-top border-bottom text-muted"},v=(0,l._)("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),w={class:"text-end border-0 px-0 pt-4"},x=(0,l._)("tr",null,[(0,l._)("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"運費"),(0,l._)("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"NT$30")],-1),_={class:"d-flex justify-content-between mt-4"},g=(0,l._)("p",{class:"mb-0 h4 fw-bold"},"Total",-1),y={class:"mb-0 h4 fw-bold"},k={class:"col-md-6"},N=(0,l.uE)('<form><p>Send information</p><div class="mb-2"><label for="customerEmail" class="text-muted mb-0">Email</label><input type="email" class="form-control" id="customerEmail" aria-describedby="emailHelp" placeholder="example@gmail.com"></div><div class="mb-2"><label for="customerAddress" class="text-muted mb-0">Shipping address</label><input type="text" class="form-control" id="customerAddress" placeholder="address"></div><div class="mb-2"><label for="customerName" class="text-muted mb-0">Name</label><input type="text" class="form-control" id="customerName" placeholder="Carmen A. Rose"></div><div class="mb-2"><label for="customerPhone" class="text-muted mb-0">Phone</label><input type="text" class="form-control" id="customerPhone" placeholder="Password"></div><div class="mb-2"><label for="customerMessage" class="text-muted mb-0">Message</label><textarea class="form-control" rows="3" id="customerMessage" placeholder="message ... "></textarea></div></form>',1),T={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},C=(0,l._)("i",{class:"bi bi-chevron-double-left"},null,-1),S=(0,l.Uk)("返回產品列表");function $(e,t,s,$,j,q){const D=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[r,(0,l._)("div",c,[(0,l._)("div",d,[(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(j.carts,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"d-flex",key:e.id},[(0,l._)("img",{src:e.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,m),(0,l._)("div",n,[(0,l._)("div",u,[(0,l._)("p",p,(0,o.zw)(e.product.title),1),(0,l._)("p",b,"NT$"+(0,o.zw)(e.final_total),1)]),(0,l._)("p",f,"x"+(0,o.zw)(e.qty),1)])])))),128)),(0,l._)("table",h,[(0,l._)("tbody",null,[(0,l._)("tr",null,[v,(0,l._)("td",w,"NT$"+(0,o.zw)(j.total.total),1)]),x])]),(0,l._)("div",_,[g,(0,l._)("p",y,"NT$"+(0,o.zw)(j.total.final_total+30),1)])])]),(0,l._)("div",k,[N,(0,l._)("div",T,[(0,l.Wm)(D,{class:"text-dark mt-md-0 mt-3",to:"/products"},{default:(0,l.w5)((()=>[C,S])),_:1}),(0,l._)("div",{class:"btn btn-dark py-3 px-7",to:"/success",onClick:t[0]||(t[0]=(...e)=>q.addToOrder&&q.addToOrder(...e))},"寄出")])])])])}var j={data(){return{carts:[],total:[]}},methods:{getCartsData(){const e="https://vue3-course-api.hexschool.io/v2/api/manson972/cart";this.$http.get(e).then((e=>{console.log(e),this.carts=e.data.data.carts,this.total=e.data.data,console.log(this.total)}))},addToOrder(){const e="https://vue3-course-api.hexschool.io/v2/api/manson972/order",t=document.querySelector("#customerName").value,s=document.querySelector("#customerEmail").value,l=document.querySelector("#customerPhone").value,o=document.querySelector("#customerAddress").value,a=document.querySelector("#customerMessage").value;if(""===t||""===s||""===l)return alert("看一下下資料是否正確 "),0;{const r={user:{name:t,email:s,tel:l,address:o},message:a};this.$http.post(e,{data:r}).then((e=>{console.log(e),this.$router.push({path:"/success"}),this.getCartsData()}))}}},mounted(){this.getCartsData()}},q=s(89);const D=(0,q.Z)(j,[["render",$]]);var z=D}}]);
//# sourceMappingURL=603.cfeb6245.js.map