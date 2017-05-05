/**
 * Created by carry on 16-5-20.
 */
import Util, { options } from '../util'
import Hprose, { init } from './hprose-client'

function plugin (Vue, opt = {}) {
  if (plugin.installed) return
  Util(Vue)
  Vue.hprose = Hprose
  init(opt)
  Object.defineProperties(Vue.prototype, {
    $hprose: {
      get () { return options(Vue.hprose, this, this.$options.hprose) }
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
