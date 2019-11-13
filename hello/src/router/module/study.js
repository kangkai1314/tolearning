const study = {
  path: '/study',
  component: () => import('@/views/home/index'),
  children: [ {
    path: 'bilibili',
    component: () => import('@/views/sim/bilibili')

  }, {
    path: 'zhihu',
    component: () => import('@/views/sim/zhihu')
  },
  {
    path: 'soul',
    component: () => import('@/views/sim/soul')
  }, {
    path: 'zhihupage',
    component: () => import('@/views/sim/zhihu/index')
  }]
}

export default study
