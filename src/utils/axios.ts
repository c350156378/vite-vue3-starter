import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseUrl = 'https://api.github.com'

const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 20000
})

// 前置拦截,发送请求前干点什么
axios.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截收到响应后干点什么
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code:${code}, Message:${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
