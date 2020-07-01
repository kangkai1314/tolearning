import request from '../utils/request'

export function getRecommendArticles () {
  return request({
    url: '/api/zhihu/articles',
    method: 'get'
  })
}
