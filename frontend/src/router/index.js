import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import About from '../views/about/About.vue';
import Signup from '../views/signup/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
