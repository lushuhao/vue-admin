import {getUserToken} from '../../vuex/getters/user'
import store from '../../vuex/store'
import 'hprose'

let traceNetData = (data, context, flag) => {
  let retStr = data.substr(1, data.length - 2)
  if (retStr.length) {
    // let callStr = hprose.unserialize(retStr)
    // let result = hprose.unserialize(retStr.substr(callStr.length + (callStr.length + '').length + 3))
  }
  return data
}
let packData = (name, args, context, next) => {
  args = args ? {data: args} : {}
  let {token, userId} = getUserToken(store.state)
  if ((token.length > 0) && (userId > 0)) {
    args['token'] = token
    args['userId'] = userId
  }
  return next(name, [args], context)
}
export default [{
  outputFilter: (data, context) => {
    return traceNetData(data, context, 'send')
  },
  inputFilter: (data, context) => {
    return traceNetData(data, context, 'receive')
  }
}]
export const middleware = [packData]
