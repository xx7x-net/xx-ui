<p align="center">
  <img src="https://github.com/xx7x-net/xx-ui/raw/master/examples/assets/images/logo.svg">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/xxqx-ui">
    <img src="https://img.shields.io/npm/v/xxqx-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/xxqx-ui?minimal=true">
    <img src="http://img.shields.io/npm/dm/xxqx-ui.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/xxqx-ui/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/xxqx-ui/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/xxqx-ui/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/xxqx-ui/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
</p>

> A Vue.js 2.0 UI Toolkit for Web.

XXUI will stay with Vue 2.x 

## Install
```shell
npm install xxqx-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import XXUI from 'xxqx-ui'

Vue.use(XXUI)

// or
import {
  Select,
  Button
  // ...
} from 'xxqx-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```