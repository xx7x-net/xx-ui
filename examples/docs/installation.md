## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i xxqx-ui -S
```

### CDN

目前可以通过 [unpkg.com/xxqx-ui](https://unpkg.com/xxqx-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/xxqx-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/xxqx-ui/lib/index.js"></script>
```

:::tip
我们建议使用 CDN 引入 XXUI 的用户在链接地址上锁定版本，以免将来 XXUI 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 XXUI 写出一个 Hello world 页面。[在线演示](https://codepen.io/xxqx-ui/pen/ExQGBKb)

<iframe height="265" style="width: 100%;" scrolling="no" title="XXUI demo" src="https://codepen.io/xxqx-ui/embed/ExQGBKb/?theme-id=light" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/xxqx-ui/pen/ExQGBKb/'>XXUI demo</a> by hetech
  (<a href='https://codepen.io/bofeng'>@bofeng</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/component/quickstart)。