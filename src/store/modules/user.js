import { loginUser } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    // 登录之后的 token
    token: ''
  }),
  mutations: {
    /**
     * 保存 token
     */
    setToken(state, newToken) {
      state.token = newToken
    }
  },
  actions: {
    /**
     * 登录
     */
    async login({ commit }, payload) {
      const { password } = payload
      const { token } = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })
      commit('setToken', token)
    }
  }
}
