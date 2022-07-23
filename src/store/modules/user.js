import { loginUser, getProfile, registerUser } from '@/api/sys'
import md5 from 'md5'
import { message } from '@/libs'

export default {
  namespaced: true,
  state: () => ({
    // 登录之后的 token
    token: '',
    // 获取用户信息
    userInfo: {}
  }),
  mutations: {
    /**
     * 保存 token
     */
    setToken(state, newToken) {
      state.token = newToken
    },
    /**
     * 保存用户信息
     */
    setUserInfo(state, newInfo) {
      state.userInfo = newInfo
    }
  },
  actions: {
    /**
     * 登录
     */
    async login({ commit, dispatch }, payload) {
      const { password } = payload
      const { token } = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })
      commit('setToken', token)
      dispatch('profile')
    },
    /**
     * 获取用户信息
     */
    async profile({ commit }) {
      const data = await getProfile()
      commit('setUserInfo', data)
      // 欢迎
      message(
        'success',
        `欢迎您 ${
          data.vipLevel
            ? '尊贵的 VIP' + data.vipLevel + ' 用户 ' + data.nickname
            : data.nickname
        } `,
        6000
      )
    },
    /**
     * 退出登录
     */
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      // 退出登录之后，重新刷新下页面，因为对于前台项目而言，用户是否登录（是否为 VIP）看到的数据可能不同
      location.reload()
    },
    /**
     * 注册
     */
    async register(context, payload) {
      const { password } = payload
      // 注册
      return registerUser({
        ...payload,
        password: password ? md5(password) : ''
      })
    }
  }
}
