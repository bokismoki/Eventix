<template>
  <div class="search-events w-full">
    <form class="flex items-center max-w-sm mx-auto flex justify-center" @submit.prevent="search">
      <input
        class="bg-main-gray w-2/3 px-2 py-3 rounded rounded-tr-none rounded-br-none text-sm text-white"
        type="text"
        placeholder="Search Events..."
        @mouseenter="focus"
        @mouseleave="blur"
        @focus="focus"
        @blur="blur"
        v-model="event"
      />
      <button
        class="bg-main-gray opacity-75 ml-4 p-1 rounded w-12 h-12 flex"
        @mouseenter="focus"
        @mouseleave="blur"
        @focus="focus"
        @blur="blur"
        type="submit"
      >
        <img class="w-6 h-6 m-auto" :src="image" alt="Magnifying Glass" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchEvents',
  data() {
    return {
      image: require('~/assets/img/magnifying-glass.svg'),
      imageDefault: require('~/assets/img/magnifying-glass.svg'),
      imageHover: require('~/assets/img/magnifying-glass-purple.svg'),
      event: ''
    }
  },
  methods: {
    search() {
      if (this.event) {
        const event = this.events.find(event =>
          event.title.toLowerCase().includes(this.event.toLowerCase().trim())
        )
        if (event) {
          this.$router.push({
            name: 'events-title',
            params: { title: event.title.toLowerCase().replace(/ /g, '-') }
          })
        } else {
          this.event = ''
        }
      }
    },
    focus() {
      this.image = this.imageHover
    },
    blur() {
      this.image = this.imageDefault
    }
  },
  computed: {
    ...mapGetters(['events'])
  }
}
</script>

<style scoped>
</style>