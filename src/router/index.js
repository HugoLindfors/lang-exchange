import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (Admin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      // route level code-splitting
      // this generates a separate chunk (Feed.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Feed.vue')
    },
    {
      path: '/log-in',
      name: 'log-in',
      // route level code-splitting
      // this generates a separate chunk (LogIn.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (Register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    },
  ]
})

export default router
