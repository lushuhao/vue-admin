import * as types from '../mutation-types'

// initial state
const state = {
  token: window.localStorage.getItem('token') || '',
  userId: window.localStorage.getItem('userId') || '',
  info: {},
  UserInfo: {},
  UserLogin: {},
  UserAdmin: {},
  ApplyInfoById: []
}
// mutations
const mutations = {
  [types.UPDATE_USER_TOKEN] (state, info) {
    console.log('9999', info)
    let token = info.token
    let userId = info.userId
    token = '' + token
    state.token = token
    state.userId = userId
    if (token.length > 0) {
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('userId', userId)
    } else {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userId')
    }
  },
  [types.UPDATE_USER_AUTH] (state, data) {
    state.info = data
  },
  // 用户登陆
  [types.UPDATE_ACTION_USERLOGIN] (state, data) {
    state.UserLogin = data
  }
}

export default {
  state,
  mutations
}
