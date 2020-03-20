import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouter = [
  {
    path: '/',
    component: () => import('@/views/test/index'),
    name: '首页'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/kangkai',
    component: () => import('@/views/kangkai/index')
  }, {
    path: '/zhihu',
    component: () => import('@/views/zhihu/index'),
    children: [{
      path: 'index',
      component: () => import('@/views/zhihu/explore')
    }]

  },

  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    name: '404',
    hidden: true
  },
  /** inject new routes**/
  require('./module/study.js').default,
  require('./module/work.js').default
  // {
  //   path: '*',
  //   redirect: {name: '404'}
  // }
]

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'main',
//       component: () => import('@/views/home/home'),
//       children: [
//         {
//           path: '',
//           component: () => import('@/views/home/index'),
//           children: [{
//             path: '',
//             component: () => import('@/views/home/mainView'),
//             meta: []
//           }, {
//             path: 'job',
//             component: () => import('@/views/content/job'),
//             meta: ['index', 'job']
//           }, {
//             path: 'date',
//             component: () => import('@/views/content/date'),
//             meta: ['index,date']
//           }, {
//             path: 'rent',
//             component: () => import('@/views/content/rent'),
//             meta: ['index', 'rent']
//           }
//           ]
//         },
//         {
//           path: 'login',
//           component: () => import('@/views/login/login')
//         },
//         {
//           path: 'person',
//           component: () => import('@/views/person/index')
//         }, {
//           path: 'bilibili',
//           component: () => import('@/views/sim/bilibili')
//
//         }, {
//           path: 'zhihu',
//           component: () => import('@/views/sim/zhihu')
//         },
//         {
//           path: 'soul',
//           component: () => import('@/views/sim/soul')
//         }, {
//           path: 'zhihupage',
//           component: () => import('@/views/sim/zhihu/index')
//         },
//         {
//           path: '404',
//           component: () => import('@/views/errorPage/404')
//         }
//
//       ]
//     }
//   ]
// })

const router = new Router({
  routes: constantRouter,
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
