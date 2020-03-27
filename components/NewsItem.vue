<template>
  <div class="news-item">
    <nuxt-link :to="{name: 'news', params: {title: titleParam}}">
      <div class="mt-10">
        <div
          class="bg w-full rounded bg-center bg-cover"
          :style="{'background-image': `url(${item.bg})`}"
        ></div>
        <div>
          <p
            class="uppercase text-main-purple text-sm font-semibold tracking-widest mt-5"
          >{{item.date}}</p>
          <h1 class="text-white font-semibold mt-1">{{item.title}}</h1>
          <p class="text-white opacity-75 text-sm mt-3">{{item.paragraph}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['item'],
  computed: {
    titleParam() {
      return this.item.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>

<style scoped>
.bg {
  height: 20vh;
}
</style>