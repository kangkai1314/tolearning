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
    path: '/alo',
    component: () => import('@/views/kangkai/alo')
  },
  {
    path: '/bili',
    component: () => import('@/views/bili/index')
  }, {
    path: '/buju',
    component: () => import('@/views/kangkai/buju')
  }, {
    path: '/css',
    component: () => import('@/views/kangkai/css')
  }, {
    path: '/exp',
    component: () => import('@/views/kangkai/test')
  },
  {
    path: '/bilibili',
    component: () => import('@/views/bili/biliPage'),
    children: [{
      path: '',
      component: () => import('@/views/bili/page/activity')
    }]
  },

  {
    path: '/test',
    component: () => import('@/views/test/blog/index')
  },
  {
    path: '/kangkai',
    component: () => import('@/views/kangkai/index')
  }, {
    path: '/zhihu',
    component: () => import('@/views/zhihu/index'),
    redirect: '/zhihu/index',
    children: [{
      path: 'index',
      component: () => import('@/views/zhihu/explore')
    }, {
      path: 'find',
      component: () => import('@/views/zhihu/find')
    }, {
      path: 'question',
      component: () => import('@/views/zhihu/question')
    }, {
      path: 'creator',
      component: () => import('@/views/zhihu/creator'),
      children: [{
        path: 'main',
        component: () => import('@/views/zhihu/component/creator/main')
      }, {
        path: 'activity',
        component: () => import('@/views/zhihu/component/creator/activity')
      },
      {
        path: 'invited',
        component: () => import('@/views/zhihu/component/creator/invited')
      },
      {
        path: 'video',
        component: () => import('@/views/zhihu/component/creator/uploadVideo')
      },
      {
        path: 'content',
        component: () => import('@/views/zhihu/component/creator/content')
      },
      {
        path: 'ranks',
        component: () => import('@/views/zhihu/component/creator/ranks')
      }, {
        path: 'banquan',
        component: () => import('@/views/zhihu/component/creator/banQuan')
      }, {
        path: 'wali',
        component: () => import('@/views/zhihu/component/creator/wali')
      }, {
        path: 'comques',
        component: () => import('@/views/zhihu/component/creator/comques')

      }, {
        path: 'account',
        component: () => import('@/views/zhihu/component/creator/account')

      }, {
        path: 'benefit',
        component: () => import('@/views/zhihu/component/creator/benefit')

      }]
    }, {
      path: 'person',
      component: () => import('@/views/zhihu/component/person')
    }, {
      path: 'setting',
      component: () => import('@/views/zhihu/setting')
    }, {
      path: 'question/:id',
      component: () => import('@/views/zhihu/questionItem')
    }, {
      path: 'message',
      component: () => import('@/views/zhihu/message')
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
