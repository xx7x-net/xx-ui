/**
 * 生成 examples/version.json 记录项目库版本信息。
 * 
 * process.env.VERSION 参数的是怎么传入的？
  当执行命令 npm run pub 发布组件库时，会执行脚本 build/release.sh，
  会手动输入发布本信息(read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r),
  然后执行命令 VERSION=$VERSION npm run dist。
  
  整个执行顺序 
    npm run pub=>sh build/release.sh=>输入$VERSION=>VERSION=$VERSION  npm run dist=> npm run build:file=> node build/bin/version.js 。
  用于网站版头部导航版本切换。
 */

var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.0.0': '1.0' };
if (!content[version]) content[version] = '1.';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
