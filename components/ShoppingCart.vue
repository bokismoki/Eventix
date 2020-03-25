<template>
  <div class="shopping-cart">
    <button
      class="relative bg-main-purple p-1 rounded w-12 h-12 flex hover:bg-white focus:bg-white"
      @mouseenter="focus"
      @mouseleave="blur"
      @focus="focus"
      @blur="blur"
    >
      <img class="w-6 h-6 m-auto" :src="image" alt="Shopping Cart" />
      <div class="absolute top-0 right-0 -mt-2 -mr-2">
        <ShoppingCartSize />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartSize: () => import('~/components/ShoppingCartSize')
  },
  data() {
    return {
      image: require('~/assets/img/shopping-cart.svg'),
      imageDefault: require('~/assets/img/shopping-cart.svg'),
      imageHover: require('~/assets/img/shopping-cart-dark.svg')
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