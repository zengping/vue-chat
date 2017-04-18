import Contact from 'views/contact/Contact'
import NewFriends from 'views/contact/new-friends'
import AddFriend from 'views/contact/add-friend'
import GroupList from 'views/contact/group-list'
import OfficialAccounts from 'views/contact/official-accounts'
import Tags from 'views/contact/Tags'
import Details from 'views/contact/Details'

export default {
  router: [
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/contact/new-friends',
      components: { 'subPage': NewFriends }
    },
    {
      path: '/contact/add-friend',
      components: { 'subPage': AddFriend }
    },
    {
      path: '/contact/group-list',
      components: { 'subPage': GroupList }
    },
    {
      path: '/contact/official-account',
      components: { 'subPage': OfficialAccounts }
    },
    {
      path: '/contact/tags',
      components: { 'subPage': Tags }
    },
    {
      path: '/contact/details',
      components: { 'subPage': Details }
    }
  ]
}
