import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/main.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/content',
    component: Main
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
