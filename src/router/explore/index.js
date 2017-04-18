import Explore from 'views/explore/Explore'
import Moments from 'views/explore/Moments'

export default {
  router: [
    {
      path: '/explore',
      component: Explore
    },
    {
      path: '/explore/moments',
      component: Moments
    }
  ]
}
