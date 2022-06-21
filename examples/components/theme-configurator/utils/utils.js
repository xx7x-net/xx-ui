import deepmerge from 'deepmerge'

export const filterConfigType = (name) => {
  switch (name) {
    case 'color':
    case 'typography':
    case 'border':
      return 'global'
    default:
      return 'local'
  }
}

export const filterGlobalValue = (defaultConfig, userConfig) => {
  const valueObject = {}
  const globalArr = ['color', 'typography', 'border']
  globalArr.forEach((global) => {
    const configObj = {}
    defaultConfig
      .find(config => (config.name === global))
      .config.forEach(c => (configObj[c.key] = deepmerge({}, c)))
    valueObject[global] = configObj
    Object.keys(configObj).forEach((c) => {
      if (userConfig.global[c]) {
        configObj[c].value = userConfig.global[c]
      }
    })
  })
  return valueObject
}

export const getStyleDisplayValue = (displayValue, global) => {
  if (displayValue.startsWith('$')) {
    return global[displayValue].value
  }
  return displayValue
}

export const getVariableDisplayName = {
  'color-primary': '主题色',
  'color-white': '基础白色',
  'color-black': '基础黑色',
  'color-success': '成功颜色',
  'color-warning': '警告颜色',
  'color-danger': '危险颜色',
  'color-info': '信息颜色',
  'color-text-primary': '主要文字颜色',
  'color-text-regular': '常规文字颜色',
  'color-text-secondary': '次要文字颜色',
  'color-text-placeholder': '占位文字颜色',
  'border-color-base': '一级边框颜色',
  'border-color-light': '二级边框颜色',
  'border-color-lighter': '三级边框颜色',
  'border-color-extra-light': '四级边框颜色',
  'background-color-base': '基础背景色',
  'border-radius-base': '大圆角',
  'border-radius-small': '小圆角',
  'border-radius-zero': '无圆角',
  'border-radius-circle': '圆形圆角',
  'box-shadow-base': '基础投影',
  'box-shadow-dark': '深色投影',
  'box-shadow-light': '浅色投影',
  'font-size-extra-large': '主标题文字大小',
  'font-size-large': '标题文字大小',
  'font-size-medium': '小标题文字大小',
  'font-size-base': '正文文字大小',
  'font-size-small': '正文（小）文字大小',
  'font-size-extra-small': '辅助文字大小',
  'font-weight-primary': '主要文字粗细',
  'font-weight-secondary': '次要文字粗细',
  'font-line-height-primary': '主要文字行高',
  'font-line-height-secondary': '次要文字行高',
  'tooltip-fill': 'Dark 主题背景色',
  'tooltip-color': 'Light 主题背景色',
  'slider-height': '滑块轨道高度',
  'datepicker-off-font-color': '不是当前月份的日期文字颜色'
}

export const getStyleDisplayName = (config, componentName) => {
  const displayNameMap = {
    'border-color': '边框颜色',
    'font-color': '文字颜色',
    'background-color': '背景颜色',
    'font-weight': '文字粗细',
    'font-size': '文字大小',
    'font-line-height': '文字行高',
    'border-radius': '边框圆角',
    'vertical': '纵向',
    'horizontal': '横向',
    'padding': '内间距',
    'margin': '外间距',
    'icon': '图标',
    'placeholder': '占位符',
    'dropdown': '下拉菜单',
    'checked': '选中状态',
    'active': '激活状态',
    'hover': '鼠标悬停状态',
    'max': '最大',
    'medium': '中号',
    'small': '小号',
    'mini': '最小号',
    'min': '最小',
    'focus': '聚焦',
    'selected': '选中',
    'height': '高度',
    'size': '大小',
    'header': '头部',
    'group': '分组',
    'radius': '圆角',
    'width': '宽度',
    'color': '颜色',
    'title': '标题',
    'content': '内容',
    'success': '成功状态',
    'danger': '危险状态',
    'warning': '警告状态',
    'info': '提示状态',
    'customed': '客制化的',
    'disabled': '禁用状态',
    'default': '默认',
    'primary': '主要',
    'inrange': '日期范围'
  }
  if (config.name) {
    return getVariableDisplayName(config.key.replace('$--', ''))
  }
  let displayName = config.key.replace(`$--${componentName}-`, '')
  Object.keys(displayNameMap).forEach((name) => {
    displayName = displayName.replace(name, displayNameMap[name])
  })
  displayName = displayName.replace(/-/g, ' ')
  return displayName.trim()
}

export const getActionDisplayName = {
  'require-them-name': '主题名称是必填项',
  'duplicate-them-name': '主题名称重复',
  'confirm-delete-theme': '确定要删除这个主题?',
  'max-user-theme': '已达自定义主题上限',
  'no-preview-config': '获取主题预览配置错误',
  'undo': '撤销',
  'redo': '重做',
  'notice': '提示',
  'confirm': '确定',
  'cancel': '取消',
  'load-local-theme-config': '正在恢复您上次编辑的自定义主题',
  'upload-theme': '点击上传主题',
  'rename-theme': '修改命名',
  'copy-theme': '复制主题',
  'last-modified': '最近修改',
  'reset-theme': '重置',
  'delete-theme': '删除主题',
  'download-theme': '下载',
  'theme-check': '查看',
  'theme-copy': '复制',
  'theme-edit': '编辑',
  'description-element': '默认主题',
  'description-napos': '深色主题',
  'description-kiwi': 'KIWI 主题'
}
