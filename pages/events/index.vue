<template>
  <div class="events">
    <div class="px-5 py-20 md:px-10">
      <div class="grid">
        <div v-for="(event, index) in 11" :key="index">
          <EventItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Upcoming Events'
  },
  components: {
    EventItem: () => import('~/components/EventItem')
  },
  data() {
    return {
      item: {
        heading: 'Upcoming Events',
        title: 'Halloween',
        bg: require('~/assets/img/item-bg.jpg'),
        date: 'JUN 23 - JUN 30',
        location: 'Belgrade',
        seeAllRoute: 'events'
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
  min-height: 500px;
  margin: 0.4em;
}

@media (min-width: 940px) {
  .grid > div {
    min-height: 450px;
  }
}
</style>