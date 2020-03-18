import request from '../utils/request'

export function fetchMenus () {
  return request({
    url: '/api/menu',
    method: 'get'
  })
}

