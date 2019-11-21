import request from '../utils/request'

export function LoginByUserName (userName, password) {
  return request({
    method: 'post',
    url: '/loginByUsername',
    params: {
      userName: userName,
      password: password
    }
  })
}
