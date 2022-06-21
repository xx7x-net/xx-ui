<template>
  <ul class="xx-select-group__wrap" v-show="visible">
    <li class="xx-select-group__title">{{ label }}</li>
    <li>
      <ul class="xx-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'xxqx-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'XxOptionGroup',

    componentName: 'XxOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('XxOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('XxOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
