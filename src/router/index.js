import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Accounting_Login.vue'),
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
  ]
})

export default router
