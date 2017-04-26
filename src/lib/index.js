import store from '../store'
import http from '../http'

let Libs = () => {}

Libs.prototype = {
  upload (o) {
    let file = document.querySelector('#uploadFile')
    if (!file) {
      document.body.appendChild(this.createInput())
      file = document.querySelector('#uploadFile')
    }
    file.click()
    file.onchange = function () {
      var _files = this.files[0]
      var extName = _files.name.substr(_files.name.lastIndexOf('.') + 1)
      if (extName !== 'jpg' && extName !== 'png' && extName !== 'jpeg' && extName !== 'gif') {
        store.commit('setJalertText', '不是图片，不能上传！')
        return
      }
      var reader = new FileReader()
      var step = 100 * 1024
      var total = _files.size
      var cuLoaded = 0

      reader.onload = function (e) {
        // 处理读取的结果
        var loaded = e.loaded
        // 将分段数据上传到服务器
        if (e.target.readyState === FileReader.DONE) {
          var data = e.target.result
          uploadFile(data, cuLoaded, function (data) {
            // 如果没有读完，继续
            cuLoaded += loaded
            if (cuLoaded < total) {
              readBlob(cuLoaded)
            } else {
              store.commit('hideLoading')
              cuLoaded = total
              if (o.callback) {
                o.callback(data)
              }
            }
          })
        }
      }
      // 指定开始位置，分块读取文件
      function readBlob (start) {
        // 指定开始位置和结束位置读取文件
        var blob = _files.slice(start, start + step)
        reader.readAsArrayBuffer(blob)
      }
      // 开始读取
      readBlob(0)

      function uploadFile (result, startIndex, onSuccess) {
        var blob = new Blob([result])
        // 提交到服务器
        var fd = new FormData()
        fd.append('data', blob)
        fd.append('loaded', startIndex)

        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/api/file/upload?filename=' + _files.name)
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)
            if (result.status.code !== 200) {
              store.commit('hideLoading')
              store.commit('setJalertText', result.status.msg)
            }
            if (onSuccess) {
              onSuccess(result.data)
            }
          }
        }
        store.commit('showLoading')
        xhr.send(fd)
      }
    }
  },
  createInput () {
    let input = document.createElement('input')
    input.type = 'file'
    input.id = 'uploadFile'
    input.style.opacity = 0
    return input
  },
  updateSession (id) {
    let params = {}
    http.get({ api: '/api/user/info/' + id, params }).then(data => {
      if (data.length === 0) {
        store.commit('setJalertText', '用户信息错误！')
      } else {
        let user = data[0]
        store.commit('setUser', user)
      }
    }, (res) => {
      store.commit('setJalertText', res)
    })
  }
}

export default {
  install (Vue, name = '$lib') {
    Object.defineProperty(Vue.prototype, name, {value: new Libs()})
  }
}
