var path = require('path')
var fs = require('fs')
// 排除 node_modules 目录中的所有模块
var nodeExternals = require('webpack-node-externals')
// 项目组件清单
var Components = require('../components.json')
// 源码 工具方法文件列表
var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
// 源码 混入方法文件列表
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
// 源码 动画文件列表
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'))
// 外部扩展
var externals = {}

// 组件遍历
Object.keys(Components).forEach(function(key) {
  externals[`xxqx-ui/packages/${key}`] = `xxqx-ui/lib/${key}`;
})
// 工具方法文件遍历
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`xxqx-ui/src/utils/${file}`] = `xxqx-ui/lib/utils/${file}`;
})
// 混入方法文件遍历
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`xxqx-ui/src/mixins/${file}`] = `xxqx-ui/lib/mixins/${file}`;
})
// 动画方法文件遍历
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`xxqx-ui/src/transitions/${file}`] = `xxqx-ui/lib/transitions/${file}`;
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'xxqx-ui': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
