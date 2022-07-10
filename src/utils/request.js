import axios from 'axios'
import { ICODE } from '@/constants'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加 icode
    config.headers.icode = ICODE
    // 在这个位置需要统一的去注入token
    return config // 必须返回 config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  //   要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // TODO：业务错误
    return Promise.reject(new Error(message))
  }
})

export default service
