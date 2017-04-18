import Wechat from 'views/wechat/Wechat'
import Dialogue from 'views/wechat/Dialogue'

export default {
  router: [
    {
      path: '',
      component: Wechat
    },
    {
      path: '/wechat/dialogue',
      components: { 'subPage': Dialogue }
    }
  ]
}
