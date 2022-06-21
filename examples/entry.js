// vue 项目环境引入
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入组件库，main 是在 /build/config.js 中配置别名 '../src'
import XXUI from 'main/index.js'
// 语法高亮
import hljs from 'highlight.js'
// 路由配置
import routes from './route.config'
// demo-block 组件，支持示例组件渲染、高亮代码
import DemoBlock from './components/demo-block'
// 网站页面 模板页面组件
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'

import 'packages/theme-chalk/src/index.scss'
import './demo-styles/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import icon from './icon.json'

Vue.use(XXUI)
Vue.use(VueRouter)
Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('SideNav', SideNav)
Vue.component('FooterNav', FooterNav)

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  const data = {
    'home': 'XXUI - 网站快速成型工具',
    'guide': '指南 | XXUI',
    'component': '组件 | XXUI',
    'resource': '资源 | XXUI'
  }
  for (const val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val]
      return
    }
  }
  document.title = 'xxqx-ui'
})

new Vue({ // eslint-disable-line
  router,
  render: (h) => h(App)
}).$mount('#app')
