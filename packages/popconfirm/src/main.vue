<template>
  <xx-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="xx-popconfirm">
    <p class="xx-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="xx-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="xx-popconfirm__action">
      <xx-button 
        size="mini" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{ displayCancelButtonText }}
      </xx-button>
      <xx-button 
        size="mini" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{ displayConfirmButtonText }}
      </xx-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</xx-popover>
</template>

<script>
import XxPopover from 'xxqx-ui/packages/popover';
import XxButton from 'xxqx-ui/packages/button';

export default {
  name: 'XxPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'xx-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    XxPopover,
    XxButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || '确定';
    },
    displayCancelButtonText() {
      return this.cancelButtonText || '取消';
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
