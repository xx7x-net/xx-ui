import XxOption from '../select/src/option'

/* istanbul ignore next */
XxOption.install = function(Vue) {
  Vue.component(XxOption.name, XxOption)
}

export default XxOption
