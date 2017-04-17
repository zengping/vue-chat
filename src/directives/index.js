import imageUpload from './imageUpload'

export default {
  init (Vue) {
    Vue.directive('image-upload', imageUpload)
  }
}
