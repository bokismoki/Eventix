<template>
  <div class="hamburger-menu">
    <button
      class="bg-main-purple p-1 rounded w-12 h-12 flex hover:bg-white focus:bg-white"
      ref="button"
      @mouseenter="focus"
      @mouseleave="blur"
      @focus="focus"
      @blur="blur"
      @click="toggleSideNav"
    >
      <img class="w-8 h-8 m-auto" :src="image" alt="Hamburger Menu" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HamburgerMenu',
  data() {
    return {
      image: require('~/assets/img/menu.svg'),
      imageDefault: require('~/assets/img/menu.svg'),
      imageHover: require('~/assets/img/menu-dark.svg')
    }
  },
  computed: {
    ...mapGetters(['isSideNavOpen'])
  },
  methods: {
    ...mapActions(['setIsSideNavOpen']),
    focus() {
      this.image = this.imageHover
    },
    blur() {
      this.image = this.imageDefault
    },
    toggleSideNav() {
      this.setIsSideNavOpen(!this.isSideNavOpen)
    }
  }
}
</script>

<style scoped>
</style>