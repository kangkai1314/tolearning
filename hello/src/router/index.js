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
          }, {
            path: 'job',
            component: () => import('@/views/content/job')
          }, {
            path: 'date',
            component: () => import('@/views/content/date')
          }, {
            path: 'rent',
            component: () => import('@/views/content/rent')
          }
          ]
        },
        {
          path: 'login',
          component: () => import('@/views/login/login')
        },
        {
          path: 'person',
          component: () => import('@/views/person/index')
        }, {
          path: 'bilibili',
          component: () => import('@/views/sim/bilibili')

        }

      ]
    }
  ]
})
