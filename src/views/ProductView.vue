<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-7">
        <img
                :src="product.imageUrl"
                class="d-block w-100"
                :alt="product.title"
              />

      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/products"
                >products</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="
                  form-control
                  border-0
                  text-center
                  my-auto
                  shadow-none
                  bg-light
                "
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              href="#"
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart"
              >加進購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>Product Description:</p>
        <p>{{ product.description }}</p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">Product Content:</p>
        <p>{{ product.content }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      product: [],
      id: ''
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        console.log(res)
        this.product = res.data.product
      })
    },
    addToCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: this.id,
        qty: 1
      }
      this.$http.post(url, { data }).then((res) => {
        console.log(res)
        this.$swal({
          icon: 'success',
          title: '成功加進購物車~!',
          showConfirmButton: false,
          timer: 1500
        })
        // Navbar上顯示購物車數量
        emitter.emit('get-cart')
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
    // const { id } = this.$route.params.id;
  }
}
</script>
