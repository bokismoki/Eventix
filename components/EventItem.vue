<template>
  <div class="event-item" :class="{'inAside': isInAside}">
    <nuxt-link
      :to="{name: 'events-title', params: {title: titleParam}}"
      class="item-bg block relative w-full h-full bg-center bg-no-repeat mt-5 rounded transition-all duration-500 ease-in-out"
      :class="{'inAside': isInAside}"
      :style="{'background-image': `url(${item.bg})`}"
    >
      <div
        class="absolute w-full h-full bg-main-purple opacity-0 rounded transition-all duration-500 ease-in-out"
      ></div>
      <div
        class="content relative p-5 h-full flex flex-col opacity-0 justify-between transition-all duration-500 ease-in-out"
        :class="{'inAside': isInAside}"
      >
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
  props: ['item', 'index', 'isInAside'],
  data() {
    return {
      barsBg: require('~/assets/img/bars.svg')
    }
  },
  computed: {
    titleParam() {
      return this.item.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>

<style scoped>
.event-item,
a,
.content {
  min-height: 500px;
}

.inAside {
  min-height: 300px !important;
}

.item-bg {
  background-size: 100%;
}

.event-item:hover .item-bg {
  background-size: 110%;
}

a:hover > div,
a:focus > div {
  @apply opacity-90;
}

@media (min-width: 940px) {
  .event-item,
  a,
  .content {
    min-height: 450px;
  }
}

@media (min-width: 1280px) {
  .inAside {
    min-height: 450px !important;
  }
}
</style>