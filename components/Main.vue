<template>
  <main class="main">
    <div class="pt-20">
      <div v-for="section in sections" :key="section.id">
        <EventsSection :section="section" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
  components: {
    EventsSection: () => import('~/components/EventsSection')
  },
  data() {
    return {
      sections: [
        {
          id: 0,
          heading: 'Upcoming Events',
          item: {
            bg: require('~/assets/img/event0-bg.jpg'),
            date: 'JUN 23 - JUN 30',
            title: 'Halloween',
            location: 'Belgrade'
          },
          seeAllRoute: 'events'
        },
        {
          id: 1,
          heading: 'Featured Events',
          item: {
            bg: require('~/assets/img/event0-bg.jpg'),
            date: 'JUL 30',
            title: 'Halloween',
            location: 'Belgrade'
          },
          seeAllRoute: 'events'
        },
        {
          id: 2,
          heading: 'Latest Events',
          item: {
            bg: require('~/assets/img/event0-bg.jpg'),
            date: 'DEC 3',
            title: 'Halloween',
            location: 'Belgrade'
          },
          seeAllRoute: 'events'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>