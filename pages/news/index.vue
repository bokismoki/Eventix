<template>
  <div class="news">
    <div class="px-5 py-10 md:px-10">
      <div class="grid">
        <div v-for="(x, index) in 4" :key="index">
          <NewsItem :item="item" text="dark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Latest News'
  },
  components: {
    NewsItem: () => import('~/components/NewsItem')
  },
  data() {
    return {
      item: {
        title: 'Aliquam Fermentum Dolor Eget Dolor Ipsum',
        bg: require('~/assets/img/news-bg.jpg'),
        date: 'March 13, 2020',
        paragraph:
          'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
        path: 'news'
      }
    }
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