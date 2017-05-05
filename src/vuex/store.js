import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import * as actionUser from './actions/user'
import * as gettersUser from './getters/user'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

const state = {
  isLoading: false,
  direction: 'forward',
  toast: '',
  title: ''
}
const store = new Vuex.Store({
  state,
  actions: {...actionUser},
  getters: {...gettersUser},
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    },
    UPDATE_TOAST (state, msg) {
      state.toast = '' + msg
    },
    UPDATE_TITLE (state, title) {
      state.title = '' + title
    }
  },
  modules: {user},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept(['./actions/user'], () => {
    store.hotUpdate({
      getters: [...require('./getters/user')],
      actions: [...require('./actions/user')],
      mutations: [...require('./modules/user')]
    })
  })
}
export default store
