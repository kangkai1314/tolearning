const work = {
  path: '/work',
  component: () => import('@/views/home/index'),
  meta: {title: '工作', icon: 'work', noCache: true, affix: false},
  name: '工作',
  children: [{
    path: 'date',
    component: () => import('@/views/content/date'),
    meta: {title: '约会', icon: 'date', noCache: false, affix: true},
    name: '约会'

  }, {
    path: 'job',
    component: () => import('@/views/content/job'),
    meta: {title: '职位', noCache: false, affix: false},
    name: '职位'
  },
  {
    path: 'rent',
    component: () => import('@/views/content/rent'),
    meta: {title: '租房', noCache: false, affix: false}
  }]
}

export default work
