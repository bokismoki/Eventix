<template>
  <div class="news">
    <div class="px-5 py-10 md:px-10">
      <div class="grid">
        <div v-for="item in news" :key="item.id">
          <NewsItem :item="item" text="dark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Latest News'
  },
  components: {
    NewsItem: () => import('~/components/NewsItem')
  },
  computed: {
    ...mapGetters(['news'])
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
}

.grid > div {
  margin: 0.4em;
}
</style>