<template>
  <header class="xx-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'XxHeader',

    componentName: 'XxHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
