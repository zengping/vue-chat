import Wechat from 'views/wechat/Wechat'
import Dialogue from 'views/wechat/Dialogue'

export default {
  router: [
    {
      path: '/wechat',
      component: Wechat
    },
    {
      path: '/wechat/dialogue',
      components: { 'subPage': Dialogue }
    },
    {
      path: '',
      redirect: '/wechat'
    }
  ]
}
