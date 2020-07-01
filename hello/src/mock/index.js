import Mock from 'mockjs'
function jobs () {
  return {
    data: Mock.mock({
      'dataList|100': {
        'id|+1': 1,
        'date': '@date'
      }
    })
  }
}
function test1 () {
  return {
    data: Mock.mock({
      'dataList|10': {
        'testId|+2': 1,
        'name': '@string'
      }
    })
  }
}
function menus () {
  return {
    data: Mock.mock({
      'dataList|10': {
        'id|+1': 1,
        'name': '@string'
      }
    })
  }
}

function articles () {
  return {
    data: Mock.mock({
      'dataList|100': [
        {
          'id|+1': 1,
          'title': '@ctitle(10)',
          'approve': '@integer(0,1000)',
          'comment': '@integer(0,1000)',
          'url': 'https://pic1.zhimg.com/50/v2-fda58ce57149d037f67baffa97f37075_400x224.jpg'
        }
      ]

    }
    )
  }
}
Mock.mock('/api/jobs', /get/i, jobs)
Mock.mock('/api/test', /get/i, test1)
Mock.mock('/api/menus', /get/i, menus)
Mock.mock('/api/zhihu/articles', /get/i, articles)
