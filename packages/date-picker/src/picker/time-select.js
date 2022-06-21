import Picker from '../picker'
import Panel from '../panel/time-select'

export default {
  mixins: [Picker],

  name: 'XxTimeSelect',

  componentName: 'XxTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    }
  },

  beforeCreate() {
    this.panel = Panel
  }
}
