// 服务器时间转换
let showTime = (val, onlyDate) => {
  if (!val) return ''
  var dtVal
  if (val.date) {
    dtVal = new Date(val.date.replace(/-/g, '/').replace(/\..*$/, ' +0'))
  } else {
    dtVal = new Date(parseInt(val) * 1000)
  }
  let fullYear = dtVal.getFullYear()
  let fullMonth = ('0' + (1 + dtVal.getMonth())).substr(-2)
  let fullDate = ('0' + dtVal.getDate()).substr(-2)
  let ret = fullYear + '-' + fullMonth + '-' + fullDate
  if (!onlyDate) {
    let fullHour = ('0' + dtVal.getHours()).substr(-2)
    let fullMinute = ('0' + dtVal.getMinutes()).substr(-2)
    let fullSecond = ('0' + dtVal.getSeconds()).substr(-2)
    ret += ' ' + fullHour + ':' + fullMinute + ':' + fullSecond
  }
  return ret
}

export { showTime }
