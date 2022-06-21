<template>
  <i :class="'xx-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'XxIcon',

    props: {
      name: String
    }
  }
</script>
