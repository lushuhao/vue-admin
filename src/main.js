import Vue from 'vue'
import entry from './app'
import VueRouter from 'vue-router'
import { default as route, routeBefore } from './route'
import vueHprose from './plugins/hprose'
import {default as hproseFilter, middleware} from './plugins/hprose/filter'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import appConfig from './common/config'

Vue.use(Element)
Vue.use(VueRouter)

const pathName = window.location.pathname
const router = new VueRouter({
  mode: 'history',
  base: (pathName.lastIndexOf('/') > 0) ? pathName.substr(0, pathName.lastIndexOf('/')) : null,
  routes: route
})
Vue.config.errorHandler = function (err, vm) {
  console.error('componentName: ' + vm.$data.componentName + ' error => ', err)
}
if (routeBefore.length) {
  routeBefore.map(hook => {
    router.beforeEach(hook)
  })
}
const hproseOption = {default: appConfig.server, idempotent: true, retry: 0, middleware: middleware, sync: true}
if (Vue.config.debug) {
  hproseOption['filter'] = hproseFilter
  if (appConfig.local) hproseOption['default'] = appConfig.local
}
Vue.use(vueHprose, hproseOption)

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app')
