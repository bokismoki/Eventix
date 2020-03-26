<template>
  <nuxt-link
    :to="{name: path}"
    class="see-all bg-transparent border rounded px-2 py-1 flex items-center group"
    :class="{'border-gray-100 hover:bg-white focus:bg-white': theme === 'dark', 'border-gray-400 hover:bg-main-dark focus:bg-main-dark': theme === 'light'}"
  >
    <span
      class="text-sm font-semibold"
      :class="{'text-white group-hover:text-main-dark': theme === 'dark', 'text-main-dark group-hover:text-white': theme === 'light'}"
    >See All</span>
    <span>
      <img class="w-5 h-5" src="~/assets/img/plus.svg" alt="Plus" />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SeeAllBtn',
  props: ['theme', 'path']
}
</script>

<style scoped>
.see-all {
  min-width: max-content;
}
</style>