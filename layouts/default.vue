<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50">
      <Header />
    </div>
    <div v-if="isSideNavOpen" class="side-nav fixed right-0 w-full max-w-md z-50">
      <SideNav />
    </div>
    <div class="flex">
      <div class="lg:w-3/4">
        <Hero />
        <nuxt />
        <Footer />
      </div>
      <div
        class="aside hidden bg-main-dark w-1/4 overflow-y-auto min-h-screen max-h-screen top-0 right-0 fixed lg:block"
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
    Hero: () => import('~/components/Hero'),
    Footer: () => import('~/components/Footer'),
    Aside: () => import('~/components/Aside')
  },
  computed: {
    ...mapGetters(['isSideNavOpen'])
  }
}
</script>

<style scoped>
.side-nav {
  top: 80px;
  max-height: calc(100vh - 80px);
}

@media (min-width: 768px) {
  .side-nav {
    top: 128px;
  }
}

@media (min-width: 1024px) {
  .side-nav {
    right: 30vw;
  }
}
</style>

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
