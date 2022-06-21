import XxMenu from './src/menu'

/* istanbul ignore next */
XxMenu.install = function(Vue) {
  Vue.component(XxMenu.name, XxMenu)
}

export default XxMenu
