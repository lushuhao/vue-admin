/**
 * Service for sending network requests.
 */
// import store from '../../vuex/store'
// import * as types from '../../vuex/mutation-types'
import Map from 'es6-map'
import Set from 'es6-set'
import { Message } from 'element-ui'
require('hprose')
let hprose = global.hprose

let clientMap = new Map()  // hprose client 列表
let tagUriMap = new Map()  // hprose client 标签

export default function Hprose (name, options) {
  let {uri, tag, data: postData} = options
  let client = getHproseClient(uri, tag)
  return client.invoke(name, postData)
    .then(response => {
      console.log('hprose ' + name + ' => ', response)
      if (response) {
        if (('' + response.ret.code) === ('' + 1006)) {
          Message({showClose: true, message: '您已掉线，请刷新重新登陆', type: 'error'})
        }
        if (!response.ret.code) return response

        return hprose.Future.reject(response.ret)
      }
      return hprose.Future.reject('返回值错误')
    }).catch(error => {
      console.log('错误', error)
      Message({showClose: true, message: error.msg, type: 'error'})
      console.log('error ' + name + ' => ', error)
      return hprose.Future.reject(error.msg)
    })
}

void ['get', 'post'].forEach((method) => {
  Hprose[method] = (name, data, success, error, options) => {
    if (typeof data === 'function') {
      options = success
      success = data
      data = undefined
    }

    if (success && (typeof success === 'object')) {
      options = success
      success = undefined
    }
    return Hprose(name, Object.assign({data: data, success: success}, options))
  }
})

let initHprose = (options = {}) => {
  let {default: uri, tag = 'default', middleware = []} = options
  let tagUriSet = tagUriMap.get(tag)
  if (tagUriSet) return clientMap.get(tag)

  if (!uri) throw new Error('hprose uri can\'t empty!')

  tagUriSet = new Set()
  tagUriMap.set(tag, tagUriSet)
  tagUriSet.add(uri)
  let client = hprose.Client.create(uri, [], options)
  middleware.map((cb) => { client.use(cb) })
  clientMap.set(tag, client)
}
export { initHprose as init }

let getHproseClient = (uri = '', tag = 'default') => {
  let tagUriSet = tagUriMap.get(tag)
  if (!tagUriSet) {
    if (!uri) throw new Error('You should init default service')
    tagUriSet = new Set()
    tagUriMap.set(tag, tagUriSet)
    tagUriSet.add(uri)
    clientMap.set(tag, initHprose(uri, []))
  }
  let client = clientMap.get(tag)
  if (!tagUriSet.has(uri)) {
    tagUriSet.add(uri)
    client.useService(uri)
  }
  return client
}
