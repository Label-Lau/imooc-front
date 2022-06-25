import axios from 'axios'
import { ICODE } from '@/constants'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

console.log(import.meta.env.VITE_BASE_API)

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

export default service
