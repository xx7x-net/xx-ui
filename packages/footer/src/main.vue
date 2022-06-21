<template>
  <footer class="xx-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'XxFooter',

    componentName: 'XxFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
