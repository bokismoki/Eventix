<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50">
      <Header />
    </div>
    <div v-if="isSideNavOpen" class="fixed bottom-0 w-full z-50">
      <SideNav />
    </div>
    <div class="flex">
      <div class="lg:w-3/4">
        <nuxt />
        <Footer />
      </div>
      <div
        class="aside hidden bg-main-dark w-1/4 overflow-scroll min-h-screen max-h-screen top-0 right-0 fixed lg:block"
      >
        <Aside />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Header: () => import('~/components/Header'),
    SideNav: () => import('~/components/SideNav'),
    Footer: () => import('~/components/Footer'),
    Aside: () => import('~/components/Aside')
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
  @apply text-main-dark;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  @apply m-0 p-0;
}
</style>
