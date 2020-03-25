<template>
  <div class="hamburger-menu">
    <button
      class="bg-main-purple p-1 rounded w-12 h-12 flex hover:bg-white focus:bg-white"
      @mouseenter="focus"
      @mouseleave="blur"
      @focus="focus"
      @blur="blur"
    >
      <img class="w-8 h-8 m-auto" :src="image" alt="Hamburger Menu" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {
      image: require('~/assets/img/menu.svg'),
      imageDefault: require('~/assets/img/menu.svg'),
      imageHover: require('~/assets/img/menu-dark.svg')
    }
  },
  methods: {
    focus() {
      this.image = this.imageHover
    },
    blur() {
      this.image = this.imageDefault
    }
  }
}
</script>

<style scoped>
</style>