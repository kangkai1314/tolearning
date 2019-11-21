import axios from 'axios'

const request = axios.create(
  {
    baseURL: 'http://localhost:8080'
  }
)

request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
export default request

request.interceptors.response.use(response => {
  console.log('call api')
  console.log(response)
  return response
}, error => {
  console.log(error)
  console.log(error.code)
  return Promise.reject(error)
})
