/**
 * 以 commonjs2 规范打包构建类库。

 * 调用命令：webpack --config build/webpack.common.js。
 * 入口文件：src/index.js。
 * 输出文件：以commonjs2规范构建输出到lib/xxqx-ui.common.js（类库主入口文件）。
 */

const path = require('path')
// 构建进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack 公共配置
const config = require('./config')

module.exports = {
  // 模式配置选项， 告知 webpack 使用相应模式的内存优化
  mode: 'production',
  // 入口
  entry: {
    // entry descriptor
    // 如果传入一个对象，对象的属性的值可以是一个字符串、字符串数组或者一个描述符（descriptor）
    app: ['./src/index.js']
  },
  // 输出
  output: {
    path: path.resolve(process.cwd(), './lib'), // 绝对路径
    // 为项目中的所有资源指定一个基础路径
    publicPath: '/dist/',
    // 打包构建的文件名
    filename: 'xxqx-ui.common.js',
    // 对于按需加载的 chunk 文件， 请使用此选项来控制输出
    chunkFilename: '[id].js',
    // libraryTarget 决定暴露哪些模块
    // libraryExport: 'default' - 入口的默认导出将分配给 library target
    libraryExport: 'default',
    // 库的名称
    library: 'ELEMENT',
    // 配置将库暴露的方式
    // 类型默认包括 var、module、assign、assign-properties、this、window、self、global、commonjs、commonjs2、commonjs-module、amd、amd-require、umd、umd2、jsonp、system
    libraryTarget: 'commonjs2'
  },
  // 解析
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules'],
  },
  // 外部扩展
  externals: config.externals,
  // 控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」
  performance: {
    hints: false, // 不展示警告或错误提示
  },
  // 可以在统计输出里指定你想看到的信息
  stats: {
    children: false, // 是否添加关于子模块的信息
  },
  // 据你选择的 mode 来执行不同的优化
  optimization: {
    // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle
    minimize: false,
  },
  // 处理项目中的不同类型的模块
  module: {
    // 配置解析规则
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, 
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  // 添加插件
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()],
}
