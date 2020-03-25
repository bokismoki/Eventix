<template>
  <div>
    <div class="fixed top-0 left-0 w-full">
      <Header />
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('~/components/Header')
  }
}
</script>

<style>
html {
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

body {
  color: #0f0d19;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
