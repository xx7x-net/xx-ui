import XxOptionGroup from '../select/src/option-group'

/* istanbul ignore next */
XxOptionGroup.install = function(Vue) {
  Vue.component(XxOptionGroup.name, XxOptionGroup)
}

export default XxOptionGroup
