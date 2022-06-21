import XxProgress from './src/progress'

/* istanbul ignore next */
XxProgress.install = function(Vue) {
  Vue.component(XxProgress.name, XxProgress)
}

export default XxProgress
