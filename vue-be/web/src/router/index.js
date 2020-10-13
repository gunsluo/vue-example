import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import PayBill from '@/views/PayBill.vue'
import MtApp from '@/views/MtApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: PayBill
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'bill',
        component: PayBill
      },
      {
        path: 'app',
        component: MtApp
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
