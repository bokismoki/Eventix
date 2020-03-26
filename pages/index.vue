<template>
  <div class="index">
    <Main />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  },
  components: {
    Main: () => import('~/components/Main')
  }
}
</script>

<style scoped>
</style>
