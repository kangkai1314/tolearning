import request from '../utils/request'

export function fetchMenus () {
  return request({
    url: '/api/menus',
    method: 'get'
  })
}

export function postSubmit (data) {
  return request({
    url: '/api/submit',
    method: 'post',
    data: data
  })
}
