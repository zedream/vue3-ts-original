import { createRouter, createWebHistory } from 'vue-router'
import Storage from '@/utils/storage'
import { store } from '@/store'

const router = createRouter({
  history: createWebHistory(process.env.PUBLIC_PATH),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  // linkExactActiveClass: 'is-active',
  routes: [

  ]
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
