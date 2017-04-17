import store from '../store'

export default {
  // checkAll发生更改时
  inserted (el) {
    el.addEventListener('click', function () {
      let file = document.querySelector('#uploadFile')
      if (!file) {
        document.body.appendChild(createInput())
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
                let imgEl = el.querySelector('img')
                imgEl.src = data
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
    }, false)

    function createInput () {
      let input = document.createElement('input')
      input.type = 'file'
      input.id = 'uploadFile'
      input.style.opacity = 0
      return input
    }
  }
}
