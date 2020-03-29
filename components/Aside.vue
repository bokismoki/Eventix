<template>
  <aside class="aside">
    <div class="px-5 xl:px-8">
      <div v-if="!routeIsNews">
        <div v-for="item in news" :key="item.id">
          <NewsItem :item="item" text="light" />
        </div>
      </div>
      <div v-else>
        <div v-for="(item, index) in events.slice(0, 4)" :key="item.id">
          <EventItem :item="item" :index="index" :isInAside="true" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Aside',
  components: {
    NewsItem: () => import('~/components/NewsItem'),
    EventItem: () => import('~/components/EventItem')
  },
  computed: {
    ...mapGetters(['news', 'events']),
    routeIsNews() {
      return this.$route.name === 'news' || this.$route.name === 'news-title'
    }
  }
}
</script>

<style scoped>
.aside {
  padding: 128px 0 20px;
}
</style>