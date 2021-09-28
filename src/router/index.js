import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GetStarted from '../views/GetStarted.vue'
import Download from '../views/Download.vue'
import Examples from '../views/Examples.vue'
import Themes from '../views/Themes.vue'
import Blog from '../views/Blog.vue'
import Icons from '../views/Icons.vue'
import Docs from '../views/Docs.vue'

import Buttons from '../views/docs/Buttons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getstarted',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples
  },
  {
    path: '/docs/buttons',
    name: 'Buttons',
    component: Buttons
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
