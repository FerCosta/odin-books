import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/Book.vue')
  }, 
  {
    path: '/editarlivro/:id',
    name: 'editarlivro',
    component: () => import('../views/EditarLivro.vue')
  },  
  {
    path: '/editarcapitulo/:id/:idc',
    name: 'editarcapitulo',
    component: () => import('../views/EditarCapitulo.vue')
  },   
  { 
    path: '/vercapitulo/:id/:idc',
    name: 'vercapitulo',
    component: () => import('../views/VerCapitulo.vue')
  },  
  {
    path: '/addcapitulo',
    name: 'addcapitulo',
    component: () => import('../views/AddCapitulo.vue')
  },
  {
    path: '/listarcapitulo/:id',
    name: 'listarcapitulo',
    component: () => import('../views/ListarCapitulo.vue')
  },    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
