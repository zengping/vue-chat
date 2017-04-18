import Self from 'views/self/Self'
import Profile from 'views/self/Profile'
import MyQrcode from 'views/self/my-qrcode'
import Settings from 'views/self/Settings'
import Album from 'views/self/Album'
import Security from 'views/self/Security'
import Common from 'views/self/Common'
import Notice from 'views/self/Notice'
import Privacy from 'views/self/Privacy'

export default {
  router: [
    {
      path: '/self',
      component: Self
    },
    {
      path: '/self/profile',
      components: { 'subPage': Profile }
    },
    {
      path: '/self/my-qrcode',
      components: { 'subPage': MyQrcode }
    },
    {
      path: '/self/settings',
      components: { 'subPage': Settings }
    },
    {
      path: '/self/album',
      components: { 'subPage': Album }
    },
    {
      path: '/self/security',
      components: { 'subPage': Security }
    },
    {
      path: '/self/common',
      components: { 'subPage': Common }
    },
    {
      path: '/self/notice',
      components: { 'subPage': Notice }
    },
    {
      path: '/self/privacy',
      components: { 'subPage': Privacy }
    }
  ]
}
