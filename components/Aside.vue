<template>
  <aside class="aside">
    <div class="px-10">
      <div v-for="(x, index) in 4" :key="index">
        <NewsItem :item="item" />
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
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
.aside {
  padding: 128px 0 20px;
}
</style>