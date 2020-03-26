<template>
  <div class="socia-networks">
    <div
      class="font-semibold"
      :class="{'text-white text-sm': theme === 'light', 'text-gray-600 text-center text-base': theme === 'dark'}"
    >
      <a class="hover:text-main-purple focus:text-main-purple" href="#">Facebook</a>
      <a class="ml-3 hover:text-main-purple focus:text-main-purple" href="#">Twitter</a>
      <a class="ml-3 hover:text-main-purple focus:text-main-purple" href="#">Instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialNetworks',
  props: ['theme']
}
</script>

<style scoped>
</style>