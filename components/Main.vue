<template>
  <main class="main">
    <Hero />
  </main>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Hero: () => import('~/components/Hero')
  }
}
</script>

<style scoped>
</style>