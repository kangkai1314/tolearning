const work = {
  path: '/work',
  component: () => import('@/views/home/index'),
  children: [{
    path: 'date',
    component: () => import('@/views/content/date')
  }, {
    path: 'job',
    component: () => import('@/views/content/job')

  },
  {
    path: 'rent',
    component: () => import('@/views/content/rent')

  }]
}

export default work
