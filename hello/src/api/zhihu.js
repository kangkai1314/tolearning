import request from '../utils/request'

export function getRecommendArticles () {
  return request({
    url: '/api/zhihu/articles',
    method: 'get'
  })
}

export function getHotArticles () {
  return request({
    url: '/api/zhihu/hotItems',
    method: 'get'
  })
}

let appName='testApp'
export {appName}

export default function () {
  console.log('tetstst')
};


