<template>
  <div class="header">
    <div class="flex items-center">
      <div class="p-4 bg-main-dark w-full flex justify-between items-center md:p-10 lg:w-3/4">
        <nuxt-link :to="{name: 'index'}">
          <div class="bg-main-purple p-1 rounded w-12 h-12 flex items-center">
            <img class="w-10 h-10 m-auto" src="~/assets/img/logo.svg" alt="Eventix Logo" />
            <h1 class="hidden font-bold text-4xl text-white ml-5 md:block">Eventix</h1>
          </div>
        </nuxt-link>
        <div class="flex justify-between items-center">
          <div class="hidden lg:block">
            <SearchEvents />
          </div>
          <div class="ml-4">
            <ShoppingCart />
          </div>
          <div class="ml-4">
            <HamburgerMenu />
          </div>
        </div>
      </div>
      <div class="hidden bg-black self-stretch px-5 justify-center items-center lg:flex lg:w-1/4">
        <h3 class="text-white text-lg font-semibold">Latest News</h3>
        <div class="ml-5">
          <SeeAll />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
    SearchEvents: () => import('~/components/SearchEvents'),
    ShoppingCart: () => import('~/components/ShoppingCart'),
    HamburgerMenu: () => import('~/components/HamburgerMenu'),
    SeeAll: () => import('~/components/SeeAll')
  }
}
</script>

<style scoped>
</style>