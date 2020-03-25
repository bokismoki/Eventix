<template>
  <div>
    <div class="fixed top-0 left-0 w-full">
      <Header />
    </div>
    <div v-if="isSideNavOpen" class="fixed bottom-0 w-full">
      <SideNav />
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Header: () => import('~/components/Header'),
    SideNav: () => import('~/components/SideNav')
  },
  computed: {
    ...mapGetters(['isSideNavOpen'])
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
  @apply m-0 p-0;
}
</style>
