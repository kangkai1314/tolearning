import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    store.dispatch('GenerateRoutes').then(routes => {
      next()
    })
  }
})
