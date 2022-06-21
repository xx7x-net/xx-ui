<template>
  <div class="xx-page-header">
    <div class="xx-page-header__left" @click="$emit('back')">
      <i class="xx-icon-back"></i>
      <div class="xx-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="xx-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XxPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return '返回'
      }
    },
    content: String
  }
};
</script>
