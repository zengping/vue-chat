export default {
  init (Vue) {
    Vue.filter('timeFormat', this.timeFormat)
  },
  timeFormat (time) {
    let date = new Date(parseInt(time) * 1000)
    let format = date.toLocaleString().replace(/上午|下午/g, ' ')
    return format
  },
  fmtDate (date, fmtExp) {
    var fdate = new Date(date)
    var o = {
      'M+': fdate.getMonth() + 1, // 月份
      'd+': fdate.getDate(), // 日
      'h+': fdate.getHours(), // 小时
      'm+': fdate.getMinutes(), // 分
      's+': fdate.getSeconds(), // 秒
      'q+': Math.floor((fdate.getMonth() + 3) / 3), // 季度
      'S': fdate.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmtExp)) {
      fmtExp = fmtExp.replace(RegExp.$1, (fdate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmtExp)) {
        fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmtExp
  }
}
