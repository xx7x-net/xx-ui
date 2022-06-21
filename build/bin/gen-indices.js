/**
 * 使用 algoliasearch 轻松实现文档全站搜索。
 */

'use strict'

const fs = require('fs')
const path = require('path')
const algoliasearch = require('algoliasearch')
const slugify = require('transliteration').slugify // 中文转拼音

const key = '3d033f85457f25354363e6f0fcf05f8c' // require('./algolia-key')

const client = algoliasearch('8VOTLWOI0Y', key)

// 把/examples/docs下的.md文件内容按照约定格式上传给algolia
const index = client.initIndex('xxqx-ui') // 初始化一个索引库
// 清除索引
index.clearIndex(err => {
  if (err) return
  fs.readdir(path.resolve(__dirname, `../../examples/docs`), (err, files) => {
    if (err) return
    let indices = []
    files.forEach(file => {
      const component = file.replace('.md', '');
      const content = fs.readFileSync(path.resolve(__dirname, `../../examples/docs/${ file }`), 'utf8')
      // 页面内容提取，移除自定义容器 ::: demo 、 ```(fence)内容。
      // 提取h2 h3标题和描述信息，输入格式如下
      // [
      //   [ '## Button 按钮\r', '常用的操作按钮。\r\r' ],
      //   [ '### 基础用法\r', '\r基础的按钮用法。\r\r\r' ]
      // ]
      const matches = content
        .replace(/:::[\s\S]*?:::/g, '')
        .replace(/```[\s\S]*?```/g, '')
        .match(/#{2,4}[^#]*/g)
        .map(match => match.replace(/\n+/g, '\n').split('\n').filter(part => !!part))
        .map(match => {
          const length = match.length
          if (length > 2) {
            const desc = match.slice(1, length).join('')
            return [match[0], desc]
          }
          return match
        })
      // 将匹配内容格式化
      // {
      //   component: 'button',
      //   title: 'Button 按钮',
      //   ranking: 2,
      //   anchor: 'button-an-niu',
      //   content: '常用的操作按钮。\r\r'
      // }
      indices = indices.concat(matches.map(match => {
        const isComponent = match[0].indexOf('###') < 0
        const title = match[0].replace(/#{2,4}/, '').trim()
        const index = { component, title }
        index.ranking = isComponent ? 2 : 1
        index.anchor = slugify(title)
        index.content = (match[1] || title).replace(/<[^>]+>/g, '')
        return index
      }))
    })
    // 索引中添加信息新信息
    index.addObjects(indices, (err, res) => {
      console.log(err, res)
    })
  })
})
