<template>
  <aside class="xx-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'XxAside',

    componentName: 'XxAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
