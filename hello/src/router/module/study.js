const study = {
  path: '/study',
  component: () => import('@/views/home/index'),
  meta: {title: '学习', icon: 'user'},
  children: [ {
    path: 'bilibili',
    component: () => import('@/views/sim/bilibili'),
    meta: {title: 'b站'}

  }, {
    path: 'zhihu',
    component: () => import('@/views/sim/zhihu'),
    meta: {title: '知乎'}
  },
  {
    path: 'soul',
    component: () => import('@/views/sim/soul'),
    meta: {title: 'soul'}
  }, {
    path: 'zhihupage',
    component: () => import('@/views/sim/zhihu/index'),
    meta: {title: '知乎网页'}
  }]
}

export default study
