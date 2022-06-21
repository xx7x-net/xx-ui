const Config = require('markdown-it-chain')
const anchorPlugin = require('markdown-it-anchor')
const slugify = require('transliteration').slugify
const containers = require('./containers')
const overWriteFenceRule = require('./fence')

// 实例化配置对象
const config = new Config()

// 使用链式API调用配置
config.options
  .html(true) // 在源码中启用 HTML 标签
  .end()
  // 插件配置
  .plugin('anchor').use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    }
  ]).end()
  .plugin('containers').use(containers).end()

const md = config.toMd()
overWriteFenceRule(md)

module.exports = md
