import axios from 'axios'
import store from '@/store'
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
    // 如果token存在 注入token
    config.headers.Authorization = `Bearer ${store.getters.token}`
    return config // 必须返回 config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据 success 的成功与否决定下面的操作
    if (success) {
      return data
    }
    return Promise.reject(new Error(message))
  },
  (error) => {
    // 处理 token 超时问题
    if (error.response?.data?.code === 401) {
      store.dispatch('user/logout')
    }
    return Promise.reject(error)
  }
)

export default service
