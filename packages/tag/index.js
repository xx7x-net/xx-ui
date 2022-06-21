import XxTag from './src/tag'

/* istanbul ignore next */
XxTag.install = function(Vue) {
  Vue.component(XxTag.name, XxTag)
}

export default XxTag
