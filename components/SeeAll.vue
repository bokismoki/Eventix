<template>
  <nuxt-link
    :to="{name: path}"
    class="see-all border rounded px-2 py-1 flex items-center"
    :class="{'border-gray-100 hover:border-main-purple focus:border-main-purple': theme === 'dark', 'border-gray-400 hover:border-main-purple focus:border-main-purple': theme === 'light'}"
  >
    <span
      class="text-sm font-semibold"
      :class="{'text-white': theme === 'dark', 'text-main-dark': theme === 'light'}"
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