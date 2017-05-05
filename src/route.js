import routeConfig from './route.json'
import store from './vuex/store'

const pageList = {
  home: r => require.ensure([], () => r(require('pages/home.vue')), 'group-admin'),
  backEndAccount: r => require.ensure([], () => r(require('pages/backEndAccount.vue')), 'group-admin'),
  clientAccount: r => require.ensure([], () => r(require('pages/clientAccount.vue')), 'group-admin'),
  clientInfo: r => require.ensure([], () => r(require('pages/clientInfo.vue')), 'group-admin'),
  clientConsumeInfo: r => require.ensure([], () => r(require('pages/clientConsumeInfo.vue')), 'group-admin'),
  stockCourse: r => require.ensure([], () => r(require('pages/stockCourse.vue')), 'group-admin'),
  stockApplication: r => require.ensure([], () => r(require('pages/stockApplication.vue')), 'group-admin'),
  fightList: r => require.ensure([], () => r(require('pages/fightList.vue')), 'group-admin'),
  fightDataSetting: r => require.ensure([], () => r(require('pages/fightDataSetting.vue')), 'group-admin'),
  mockStockAnalyze: r => require.ensure([], () => r(require('pages/mockStockAnalyze.vue')), 'group-admin'),
  mockStockSetting: r => require.ensure([], () => r(require('pages/mockStockSetting.vue')), 'group-admin'),
  masterArticle: r => require.ensure([], () => r(require('pages/masterArticle.vue')), 'group-admin'),
  friendCircle: r => require.ensure([], () => r(require('pages/friendCircle.vue')), 'group-admin'),
  friendCircleComment: r => require.ensure([], () => r(require('pages/friendCircleComment.vue')), 'group-admin'),
  clientFeedback: r => require.ensure([], () => r(require('pages/clientFeedback.vue')), 'group-admin'),
  customerServiceSetting: r => require.ensure([], () => r(require('pages/customerServiceSetting.vue')), 'group-admin'),
  assetAnalysis: r => require.ensure([], () => r(require('pages/assetAnalysis.vue')), 'group-admin'),
  rechargeAnalysis: r => require.ensure([], () => r(require('pages/rechargeAnalysis.vue')), 'group-admin'),
  rechargeRecord: r => require.ensure([], () => r(require('pages/rechargeRecord.vue')), 'group-admin'),
  userDataAnalysis: r => require.ensure([], () => r(require('pages/userDataAnalysis.vue')), 'group-admin'),
  userSourceAnalysis: r => require.ensure([], () => r(require('pages/userSourceAnalysis.vue')), 'group-admin'),
  settingCarousel: r => require.ensure([], () => r(require('pages/settingCarousel.vue')), 'group-admin'),
  settingFight: r => require.ensure([], () => r(require('pages/settingFight.vue')), 'group-admin'),
  settingStock: r => require.ensure([], () => r(require('pages/settingStock.vue')), 'group-admin'),
  settingGeneralize: r => require.ensure([], () => r(require('pages/settingGeneralize.vue')), 'group-admin'),
  settingRegister: r => require.ensure([], () => r(require('pages/settingRegister.vue')), 'group-admin'),
  settingHelp: r => require.ensure([], () => r(require('pages/settingHelp.vue')), 'group-admin'),
  settingAboutUS: r => require.ensure([], () => r(require('pages/settingAboutUS.vue')), 'group-admin'),
  settingMoney: r => require.ensure([], () => r(require('pages/settingMoney.vue')), 'group-admin'),
  settingMessage: r => require.ensure([], () => r(require('pages/settingMessage.vue')), 'group-admin'),
  brokerInfo: r => require.ensure([], () => r(require('pages/brokerInfo.vue')), 'group-admin')
}

const route = []
routeConfig.map(page => {
  if (pageList[page.view]) {
    route.push(Object.assign({component: pageList[page.name], meta: {title: page.title}}, page))
  }
})
route.push({path: '*', redirect: '/home'})

export default route
const commit = store.commit || store.dispatch

export const routeBefore = [
  (to, from, next) => {
    if (/\/http/.test(to.path)) {
      let url = to.path.split('http')[1]
      window.location.href = `http${url}`
      return
    }
    if (to.meta.hasOwnProperty('auth') && to.meta.auth) {
      // 登陆检查
      if (!(store.state.user.token && store.state.user.userId)) {
        commit('UPDATE_TOAST', '亲~，请先登陆哦')
        next({
          replace: true,
          path: '/login',
          append: false
        })
        return
      }
    }
    commit('UPDATE_TITLE', to.title)

    next()
  }
]
