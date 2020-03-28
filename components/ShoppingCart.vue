<template>
  <div class="shopping-cart">
    <button class="relative bg-main-purple p-1 rounded w-12 h-12 flex cursor-not-allowed">
      <img class="w-6 h-6 m-auto" :src="shoppingCart" alt="Shopping Cart" />
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
      shoppingCart: require('~/assets/img/shopping-cart.svg')
    }
  }
}
</script>

<style scoped>
</style>