import request from '../utils/request'

export function LoginByUserName (data) {
  return request({
    method: 'post',
    url: '/login/',
    data: data
  }
  )
}

export function loginByUsername (username, password) {
  const data = {
    username,
    password,
    'grant_type': 'merchant_password'
  }
  return request({
    url: '/oauth/token',
    method: 'POST',
    data: data,
    headers: {
      'Authorization': `Basic Authorization`,
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
