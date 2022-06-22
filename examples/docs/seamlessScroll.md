## SeamlessScroll 无缝滚动

无缝滚动组件

:::tip
当scrollDirection 为top或bottom时，一定要为 xx-seamless-scroll 组件设置高度。 当scrollDirection 为left或right时，一定要为 xx-seamless-scroll 组件设置宽度。并为嵌入xx-seamless-scroll中的标签设置样式为display:inline-block。
:::


### 基础用法

:::demo 注意：需要给父容器一个`height`和`:data='Array'`和`overfolw:hidden`;左右滚动需要给`ul`容器一个初始化 `css width`。

```html
<xx-seamless-scroll
  class="seamless-warp"
  :data="listData"
  :steep="1"
  scrollDirection="top"
  :isRoller="true"
  :rollerScrollDistance="50"
>
  <div
    v-for="(item, index) in listData"
    :key="'t' + index"
    class="list-item"
  >
    <p>{{ item.title }}</p>
  </div>
</xx-seamless-scroll>

<style>
  .seamless-warp {
    height: 150px
  }
</style>

<script>
  export default {
    data() {
      return {
        listData: [
          {
            'title': '无缝滚动第一行无缝滚动第一行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第二行无缝滚动第二行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第三行无缝滚动第三行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第四行无缝滚动第四行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第五行无缝滚动第五行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第六行无缝滚动第六行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第七行无缝滚动第七行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第八行无缝滚动第八行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第九行无缝滚动第九行',
            'date': '2017-12-16'
          }
        ]
      }
    }
  }
</script>

<style>
  .seamless-warp {
    height: 229px;
    overflow: hidden;
  }
</style>
```

:::

| 参数   | 说明 | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| steep  | 滚动的速率   | number | 为正数即可 | 1 |
| scrollDirection | 滚动的方向   | string | top/bottom/left/right | top |
| isRoller | 是否可以使用滚轮滚动   | boolean | true/false | true |
| rollerScrollDistance | 滚轮滚动的速率   | number |（isRoller 必须为 true）为正数即可  | 20 |
| data | 接收异步数据   | array | 同步任务可不传 | — |

:::warning
  注：如没有显示请为嵌入的标签设置字体大小

  注：  当scrollDirection 为left或right时,是基于行内元素的“white-space: nowrap;” 来控制强制不换行的。有可能会影响其内部的文字排列。可以在list-item 层添加  white-space: normal; 来处理给问题。并为其添加固定宽度，以保证文字可以正常换行及插件的正确计算与显示。如果没有为其添加固定宽度，会造成插件获取父容器层的宽度值错误，导致显示混乱。
:::
