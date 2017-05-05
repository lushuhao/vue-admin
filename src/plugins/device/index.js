const ua = navigator.userAgent

const isAndroid = /(Android);?[\s\/]+([\d.]+)?/.test(ua)
const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua)
const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua)
const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
const isWechat = /micromessenger/i.test(ua)

let iosMatch = /Mobile\/([\w]+)/
let androidMatch = /Build\/([\w]+)/
let match = (isAndroid ? androidMatch : iosMatch).exec(navigator.userAgent)
let major = !match ? 'unknown' : match[1]

let name = ''
if (isAndroid) name = 'android' + major
if (!name && isIphone) name = 'iPhone' + major
if (!name && isIpad) name = 'iPad' + major
if (!name && isIpod) name = 'iPod' + major
if (!name) name = major
const mark = name

export default function (Vue) {
  Vue.mixin({
    created: function () {
      this.$device = {
        isAndroid,
        isIpad,
        isIpod,
        isIphone,
        isWechat,
        mark
      }
    }
  })
}
