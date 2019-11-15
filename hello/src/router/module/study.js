const study = {
  path: '/study',
  component: () => import('@/views/home/index'),
  meta: {title: '学习', icon: 'user', noCache: true, affix: true},
  name: '学习',
  children: [ {
    path: 'bilibili',
    component: () => import('@/views/sim/bilibili'),
    meta: {title: 'b站', noCache: false, affix: false},
    name: 'b站'

  }, {
    path: 'zhihu',
    component: () => import('@/views/sim/zhihu'),
    meta: {title: '知乎', noCache: false, affix: false},
    name: '知乎'
  },
  {
    path: 'soul',
    component: () => import('@/views/sim/soul'),
    meta: {title: 'soul', noCache: false, affix: false},
    name: 'soul'
  }, {
    path: 'zhihupage',
    component: () => import('@/views/sim/zhihu/index'),
    meta: {title: '知乎网页', noCache: false, affix: false},
    name: '知乎网页'
  }]
}

export default study
