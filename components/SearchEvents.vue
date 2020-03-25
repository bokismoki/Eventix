<template>
  <div class="search-events w-full">
    <div class="flex items-center max-w-sm mx-auto">
      <input
        class="bg-main-gray w-full px-2 py-3 rounded rounded-tr-none rounded-br-none text-sm text-white"
        type="text"
        placeholder="Search Events..."
        @mouseenter="focus"
        @mouseleave="blur"
        @focus="focus"
        @blur="blur"
      />
      <button
        class="bg-main-gray opacity-75 ml-4 p-1 rounded w-12 h-12 flex"
        @focus="focus"
        @blur="blur"
      >
        <img class="w-6 h-6 m-auto" :src="image" alt="Magnifying Glass" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchEvents',
  data() {
    return {
      image: require('~/assets/img/magnifying-glass.svg'),
      imageDefault: require('~/assets/img/magnifying-glass.svg'),
      imageHover: require('~/assets/img/magnifying-glass-purple.svg')
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