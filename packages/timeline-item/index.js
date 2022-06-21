import XxTimelineItem from '../timeline/src/item'

/* istanbul ignore next */
XxTimelineItem.install = function(Vue) {
  Vue.component(XxTimelineItem.name, XxTimelineItem)
}

export default XxTimelineItem
