<template>
  <div class="hamburger-menu">
    <button
      class="bg-main-purple p-1 rounded w-12 h-12 flex"
      @click="toggleSideNav"
    >
      <img class="w-8 h-8 m-auto" :src="src" alt="Hamburger Menu" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HamburgerMenu',
  data() {
    return {
      hamburger: require('~/assets/img/menu.svg'),
      cross: require('~/assets/img/cross.svg')
    }
  },
  computed: {
    ...mapGetters(['isSideNavOpen']),
    src() {
      return this.isSideNavOpen ? this.cross : this.hamburger
    }
  },
  methods: {
    ...mapActions(['setIsSideNavOpen']),
    toggleSideNav() {
      this.setIsSideNavOpen(!this.isSideNavOpen)
    }
  }
}
</script>

<style scoped>
</style>