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
Mock.mock('/api/jobs', /get/i, jobs)
Mock.mock('/api/test', /get/i, test1)
Mock.mock('/api/menu', /get/i, menus)
