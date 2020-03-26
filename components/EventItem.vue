<template>
  <div class="event-item">
    <nuxt-link
      :to="{name: 'events', params: {title: item.title}}"
      class="item-bg block relative w-full h-full bg-center bg-cover mt-5 rounded overflow-hidden"
      :style="{'background-image': `url(${item.bg})`}"
    >
      <div class="hidden absolute w-full h-full bg-main-purple opacity-90 rounded"></div>
      <div class="hidden relative p-5 h-full flex-col justify-between">
        <div class="font-semibold text-center">
          <h3 class="text-sm text-gray-400">{{item.date}}</h3>
          <h1 class="text-white font-black text-xl my-3">{{item.title}}</h1>
          <h2 class="uppercase text-sm text-gray-400">{{item.location}}</h2>
        </div>
        <div class="h-20 mb-5 opacity-50" :style="{'background-image': `url(${barsBg})`}"></div>
        <div>
          <button
            class="font-semibold w-full py-3 bg-black text-white rounded hover:bg-white hover:text-main-dark focus:bg-white focus:text-main-dark"
          >Details</button>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'EventItem',
  props: ['item'],
  data() {
    return {
      barsBg: require('~/assets/img/bars.svg')
    }
  }
}
</script>

<style scoped>
.event-item {
  @apply h-full;
}

a:hover > div,
a:focus > div {
  @apply flex;
}
</style>