import axios from 'axios'
export default {
  get (o) {
    o.type = 'get'
    return this.xhr(o)
  },
  post (o) {
    o.type = 'post'
    return this.xhr(o)
  },
  put (o) {
    o.type = 'put'
    return this.xhr(o)
  },
  delete (o) {
    o.type = 'delete'
    return this.xhr(o)
  },
  getUrl (o) {
    let uri = o.api
    if (o.type === 'get' && Object.keys(o.params).length > 0) {
      uri = uri + '&' + this.joinP(o.params)
    }
    return uri
  },
  joinP (o) {
    let x = ''
    for (let i in o) {
      x += i + '=' + o[i] + '&'
    }
    x = encodeURI(x)
    return x
  },
  xhr (o) {
    return new Promise((resolve, reject) => {
      axios[o.type](this.getUrl(o), o.params).then((res) => {
        if (res.data.status.code === 200) {
          resolve(res.data)
        } else {
          // reject(res.data.status.message)
          reject(res)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
