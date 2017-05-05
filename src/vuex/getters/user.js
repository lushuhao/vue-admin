export const getUserToken = state => {
  return {token: state.user.token, userId: state.user.userId}
}

export const isLogin = state => {
  if (state.user.token && state.user.userId) {
    let token = '' + state.user.token
    let userId = '' + state.user.userId
    return (token.length > 0 && userId.length > 0)
  }
  return false
}

// 用户登陆
export const gettersUserlogin = state => {
  return state.user.UserLogin
}
