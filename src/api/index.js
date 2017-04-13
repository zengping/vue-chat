let APP_DEV_ENV = 1  // 1开发环境 0生产环境
let DEV_TEST = 0     // 1本地联调 0本地开发
let apiJoin = APP_DEV_ENV && !DEV_TEST ? '?' : ''
let type = {
  'post': 'post',
  'delete': 'delete',
  'get': 'get',
  'update': 'update'
}

if (APP_DEV_ENV && !DEV_TEST) {
  type.post = 'get'
  type.delete = 'get'
  type.update = 'get'
}

function api (code) {
  let appApi = {
    'root_api': APP_DEV_ENV ? (DEV_TEST ? '/api/root' : './static/apiJSON/rootApi.json') : 'api/root',
    'second_api': APP_DEV_ENV ? (DEV_TEST ? '/api/second' : './static/apiJSON/') : 'api/second'
  }
  return appApi[code]
}

export default {
  api,
  apiJoin,
  type
}
