## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<xx-container>`：外层容器。当子元素中包含 `<xx-header>` 或 `<xx-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<xx-header>`：顶栏容器。

`<xx-aside>`：侧边栏容器。

`<xx-main>`：主要区域容器。

`<xx-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<xx-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<xx-container>`。
:::

### 常见页面布局

:::demo
```html
<xx-container>
  <xx-header>Header</xx-header>
  <xx-main>Main</xx-main>
</xx-container>

<xx-container>
  <xx-header>Header</xx-header>
  <xx-main>Main</xx-main>
  <xx-footer>Footer</xx-footer>
</xx-container>

<xx-container>
  <xx-aside width="200px">Aside</xx-aside>
  <xx-main>Main</xx-main>
</xx-container>

<xx-container>
  <xx-header>Header</xx-header>
  <xx-container>
    <xx-aside width="200px">Aside</xx-aside>
    <xx-main>Main</xx-main>
  </xx-container>
</xx-container>

<xx-container>
  <xx-header>Header</xx-header>
  <xx-container>
    <xx-aside width="200px">Aside</xx-aside>
    <xx-container>
      <xx-main>Main</xx-main>
      <xx-footer>Footer</xx-footer>
    </xx-container>
  </xx-container>
</xx-container>

<xx-container>
  <xx-aside width="200px">Aside</xx-aside>
  <xx-container>
    <xx-header>Header</xx-header>
    <xx-main>Main</xx-main>
  </xx-container>
</xx-container>

<xx-container>
  <xx-aside width="200px">Aside</xx-aside>
  <xx-container>
    <xx-header>Header</xx-header>
    <xx-main>Main</xx-main>
    <xx-footer>Footer</xx-footer>
  </xx-container>
</xx-container>

<style>
  .xx-header, .xx-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .xx-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .xx-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .xx-container {
    margin-bottom: 40px;
  }
  
  .xx-container:nth-child(5) .xx-aside,
  .xx-container:nth-child(6) .xx-aside {
    line-height: 260px;
  }
  
  .xx-container:nth-child(7) .xx-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<xx-container style="height: 500px; border: 1px solid #eee">
  <xx-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <xx-menu :default-openeds="['1', '3']">
      <xx-submenu index="1">
        <template slot="title"><i class="xx-icon-message"></i>导航一</template>
        <xx-menu-item-group>
          <template slot="title">分组一</template>
          <xx-menu-item index="1-1">选项1</xx-menu-item>
          <xx-menu-item index="1-2">选项2</xx-menu-item>
        </xx-menu-item-group>
        <xx-menu-item-group title="分组2">
          <xx-menu-item index="1-3">选项3</xx-menu-item>
        </xx-menu-item-group>
        <xx-submenu index="1-4">
          <template slot="title">选项4</template>
          <xx-menu-item index="1-4-1">选项4-1</xx-menu-item>
        </xx-submenu>
      </xx-submenu>
      <xx-submenu index="2">
        <template slot="title"><i class="xx-icon-menu"></i>导航二</template>
        <xx-menu-item-group>
          <template slot="title">分组一</template>
          <xx-menu-item index="2-1">选项1</xx-menu-item>
          <xx-menu-item index="2-2">选项2</xx-menu-item>
        </xx-menu-item-group>
        <xx-menu-item-group title="分组2">
          <xx-menu-item index="2-3">选项3</xx-menu-item>
        </xx-menu-item-group>
        <xx-submenu index="2-4">
          <template slot="title">选项4</template>
          <xx-menu-item index="2-4-1">选项4-1</xx-menu-item>
        </xx-submenu>
      </xx-submenu>
      <xx-submenu index="3">
        <template slot="title"><i class="xx-icon-setting"></i>导航三</template>
        <xx-menu-item-group>
          <template slot="title">分组一</template>
          <xx-menu-item index="3-1">选项1</xx-menu-item>
          <xx-menu-item index="3-2">选项2</xx-menu-item>
        </xx-menu-item-group>
        <xx-menu-item-group title="分组2">
          <xx-menu-item index="3-3">选项3</xx-menu-item>
        </xx-menu-item-group>
        <xx-submenu index="3-4">
          <template slot="title">选项4</template>
          <xx-menu-item index="3-4-1">选项4-1</xx-menu-item>
        </xx-submenu>
      </xx-submenu>
    </xx-menu>
  </xx-aside>
  
  <xx-container>
    <xx-header style="text-align: right; font-size: 12px">
      <xx-dropdown>
        <i class="xx-icon-setting" style="margin-right: 15px"></i>
        <xx-dropdown-menu slot="dropdown">
          <xx-dropdown-item>查看</xx-dropdown-item>
          <xx-dropdown-item>新增</xx-dropdown-item>
          <xx-dropdown-item>删除</xx-dropdown-item>
        </xx-dropdown-menu>
      </xx-dropdown>
      <span>王小虎</span>
    </xx-header>
    
    <xx-main>
      <xx-table :data="tableData">
        <xx-table-column prop="date" label="日期" width="140">
        </xx-table-column>
        <xx-table-column prop="name" label="姓名" width="120">
        </xx-table-column>
        <xx-table-column prop="address" label="地址">
        </xx-table-column>
      </xx-table>
    </xx-main>
  </xx-container>
</xx-container>

<style>
  .xx-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .xx-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `xx-header` 或 `xx-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |