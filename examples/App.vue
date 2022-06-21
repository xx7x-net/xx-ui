<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header />
    <div class="main-cnt">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  render() {
    return (
      <div>
        <h1>Bebal Init</h1>
        <h2>hello, I am JSX!!</h2>
      </div>
    );
  },
  computed: {
    isComponent() {
      return /component/.test(this.$route.path || '')
    }
  }
}
</script>
