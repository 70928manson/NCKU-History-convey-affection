import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
