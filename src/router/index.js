import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Accounting_Login.vue'),
    },
    {
      path: '/Practice',
      name: 'Practice',
      component: () => import('../views/Practice.vue')
    },
    {
      path: '/Accounting',
      name: 'Accounting',
      component: () => import('../views/Accounting.vue'),
    },
    {
      path: '/Accounting_Login',
      name: 'Accounting_Login',
      component: () => import('../components/Accounting_Login.vue'),
    },
    {
      path: '/Accounting_Signup',
      name: 'Accounting_Signup',
      component: () => import('../components/Accounting_Signup.vue'),
    },
    {
      path: '/Accounting_Show',
      name: 'Accounting_Show',
      component: () => import('../components/Accounting_Show.vue'),
    },
    {
      path: '/Practice copy',
      name: 'Practice copy',
      component: () => import('../views/Practice copy.vue')
    },
    {
      path: '/Practice_2',
      name: 'Practice_2',
      component: () => import('../views/Practice_2.vue')
    },
  ]
})

export default router
