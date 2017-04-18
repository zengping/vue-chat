import App from 'App'
import wechat from '../wechat'
import contact from '../contact'
import explore from '../explore'
import self from '../self'

let router = [{
  path: '/',
  component: App,
  children: []
}]
wechat.router.forEach(function (route) {
  router[0].children.push(route)
})
contact.router.forEach(function (route) {
  router[0].children.push(route)
})
explore.router.forEach(function (route) {
  router[0].children.push(route)
})
self.router.forEach(function (route) {
  router[0].children.push(route)
})

export default {
  router: router
}
