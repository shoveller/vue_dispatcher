import { createRouter, createWebHistory } from 'vue-router'

import TestPage from '@/components/pages/TestPage/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'testpage',
      component: TestPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/AboutView.vue'),
    },
  ],
})

export default router
