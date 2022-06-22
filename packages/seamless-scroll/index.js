import SeamlessScroll from './src/main'

/* istanbul ignore next */
SeamlessScroll.install = function(Vue) {
  Vue.component(SeamlessScroll.name, SeamlessScroll)
}

export default SeamlessScroll
