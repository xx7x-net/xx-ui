## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `xx-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="xx-icon-edit"></i>
<i class="xx-icon-share"></i>
<i class="xx-icon-delete"></i>
<xx-button type="primary" icon="xx-icon-search">搜索</xx-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'xx-icon-' + name"></i>
      <span class="icon-name">{{'xx-icon-' + name}}</span>
    </span>
  </li>
</ul>
