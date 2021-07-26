import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/login/Login.vue'
import Signup from '../views/signup/Signup.vue'
// for categories routhing.....
import Python from '../components/catigories/python/Python.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    children:[
      { path:'/python', name:'Python', component:Python},
    ]
  },
  // { path:'/login', name:'Login', component:Login },
  { path :'/signup', name:'signup', component:Signup }
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
