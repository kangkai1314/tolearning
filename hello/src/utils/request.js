import axios from 'axios'

const request = axios.create(
  {
    baseURL: 'http://localhost:8080',
  }
)

request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return error
})

export default request
