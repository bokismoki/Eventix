<template>
  <nuxt-link
    :to="{name: 'news'}"
    class="see-all bg-transparent border border-gray-100 rounded px-2 py-1 flex items-center group hover:bg-white focus:bg-white"
  >
    <span class="text-white text-sm font-semibold group-hover:text-main-dark">See All</span>
    <span>
      <img class="w-5 h-5" src="~/assets/img/plus.svg" alt="Plus" />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SeeAllBtn'
}
</script>

<style scoped>
</style>