import hprose from '../../plugins/hprose/hprose-client'
import * as types from '../mutation-types'

// 用户登陆
export const actionsUserlogin = ({dispatch, commit}, postData) => {
  let promise = hprose.get('User_normalLogin', postData)
  return promise.then(data => {
    if (data.once) {
      commit(types.UPDATE_USER_TOKEN, data.once)
      return Promise.resolve(data)
    }
  }).catch((err) => {
    dispatch('logout')
    console.log('@@@@@@@@@ User_nordwadwa', err)
    if (err.hasOwnProperty('code')) return Promise.reject(err.code)
    return Promise.reject(err)
  })
}

// 用户注销
export const logout = ({commit}) => {
  console.error('@@@@@@@@@@@ logout')
  let data = {}
  data.token = ''
  data.userId = ''
  commit(types.UPDATE_USER_TOKEN, data)
}

