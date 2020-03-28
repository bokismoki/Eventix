<template>
  <aside class="aside">
    <div class="px-10">
      <div v-if="!routeIsNews">
        <div v-for="(x, index) in 4" :key="index">
          <NewsItem :item="news" text="light" />
        </div>
      </div>
      <div v-else>
        <div v-for="(x, index) in 4" :key="index">
          <EventItem :item="event" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  components: {
    NewsItem: () => import('~/components/NewsItem'),
    EventItem: () => import('~/components/EventItem')
  },
  data() {
    return {
      news: {
        title: 'Aliquam Fermentum Dolor Eget Dolor Ipsum',
        bg: require('~/assets/img/news-bg.jpg'),
        date: 'March 13, 2020',
        paragraph:
          'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
        path: 'news'
      },
      event: {
        heading: 'Upcoming Events',
        title: 'Halloween',
        bg: require('~/assets/img/item-bg.jpg'),
        date: 'JUN 23 - JUN 30',
        location: 'Belgrade',
        seeAllRoute: 'events'
      }
    }
  },
  computed: {
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