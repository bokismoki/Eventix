<template>
  <div class="news-item">
    <nuxt-link :to="{name: 'news-title', params: {title: titleParam}}">
      <div class="mt-10">
        <div
          class="bg w-full rounded bg-center bg-cover"
          :style="{'background-image': `url(${item.bg})`}"
        ></div>
        <div>
          <p
            class="uppercase text-main-purple text-sm font-semibold tracking-widest mt-5"
          >{{item.date}}</p>
          <h1
            class="font-semibold mt-1"
            :class="{'text-white': text === 'light', 'text-main-dark hover:text-main-purple': text === 'dark'}"
          >{{item.title}}</h1>
          <p
            class="text-white opacity-75 text-sm mt-3"
            :class="{'text-white': text === 'light', 'text-main-dark': text === 'dark'}"
          >{{item.paragraph}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['item', 'text'],
  computed: {
    titleParam() {
      return this.item.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>

<style scoped>
.bg {
  min-height: 200px;
  max-height: 300px;
  height: 25vh;
}
</style>