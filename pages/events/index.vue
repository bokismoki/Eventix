<template>
  <div class="events">
    <div class="px-5 py-20 md:px-10">
      <div class="grid">
        <div v-for="(item, index) in events" :key="item.id">
          <EventItem :item="item" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Upcoming Events'
  },
  components: {
    EventItem: () => import('~/components/EventItem')
  },
  computed: {
    ...mapGetters(['events'])
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