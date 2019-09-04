import request from '../utils/request'

export function fetchJobs () {
  return request({
    method: 'get',
    url: '/jobs'
  })
}
