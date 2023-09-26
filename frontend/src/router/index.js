import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import ('../views/LoginUser.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component: () => import ('../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
