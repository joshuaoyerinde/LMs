import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/login/Login.vue'
// for categories routhing.....
import Python from '../components/catigories/python/Python.vue'
import Notice from '../views/Notice.vue'
import Verify from '../views/Verify.vue'
import Videopage from '../components/videopage/videopage.vue'
// users......
import UserAccount from '../views/users-page/User.vue';
import Course from '../views/users-page/Course.vue'
// for Tutors/.................
import adminLogin from '../Admin/login/Login'
import TutorsBash from '../Admin/tutors/Tutors'

// import TurosDash from '../Admin/tutors/Dash'
Vue.use(VueRouter)
let isAuthenticated = JSON.parse(localStorage.getItem('auth'))
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    children:[
      { path:'/python', name:'Python', component:Python},
    ]
  },
  {path: '/verify/:id', name:'verify', component:Verify},
  {path: '/notice', name:'notice', component:Notice},
  { path : '/videopage', name:'videopage', component:Videopage},

  // route for user acoount
  {path: '/user', name:'user', component:UserAccount},
  {path: '/course/:coursename', name:'Course', component:Course},
  
  // for all admin routes........
  {path:'/admin/login',name:"adminLogin", component:adminLogin},
  // ..........Admin is Using for tutors......... Once they login it takes them to tutors route
  {
    path:'/admin/tutors',  
    name:"tutors", 
    component: TutorsBash,   
      beforeEnter: (to, from, next) => {
          if (!isAuthenticated) {
            next(false);
          }else{
            next()
          }
        },
        children:[
          {path:"/addcourse", name:'Addcourse', component: () => import('../Admin/tutors/Addcourse')},
          {path:"/dash", name:'Dashboard', component: () => import('../Admin/tutors/Dash')}
        ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
