import request from '../utils/request'

export function fetchJobs () {
  return request({
    method: 'get',
    url: '/jobs'
  })
}

export function fetchLiepinJobs () {
  return request({
    method: 'get',
    url: 'api/liepin/jobs'
  })
}
