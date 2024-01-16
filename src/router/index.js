import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Training from '../views/trainingTable.vue'
import Clientes from '../views/clientTable.vue'
import Transactions from '../views/transactions.vue'

Vue.use(VueRouter)

const routes = [
  /* { path: '/', redirect: '/login' }, */
  { path: '/', name: 'login-view', component: Login },
  { path: '/home', name: 'home-view', component: Home },
  { path: '/training', name: 'training-view', component: Training },
  { path: '/clientes', name: 'clients-view', component: Clientes },
  { path: '/Transactions', name: 'transactions-view', component: Transactions },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
