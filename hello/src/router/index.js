import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/home/home'),
      children: [
        {
          path: '',
          component: () => import('@/views/home/index'),
          children: [{
            path: '',
            component: () => import('@/views/home/mainView')
          }]
        },
        {
          path: 'login',
          component: () => import('@/views/login/login')
        }

      ]
    }
  ]
})
