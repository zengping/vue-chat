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
      let config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
      let params
      if (o.type === 'post') {
        params = new FormData()
        for (let i in o.params) {
          params.append(i, o.params[i])
        }
      } else {
        params = o.params
      }
      axios[o.type](this.getUrl(o), params, config).then((res) => {
        if (res.data.status.code === 200) {
          resolve(res.data.data)
        } else {
          // reject(res.data.status.message)
          reject(res.data.status.msg)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
