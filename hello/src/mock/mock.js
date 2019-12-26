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
Mock.mock('/api/jobs', /get/i, jobs)
