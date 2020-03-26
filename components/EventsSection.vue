<template>
  <section class="events-section">
    <div class="px-5 pb-20 lg:px-10">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">{{section.heading}}</h1>
        <div class="line bg-black opacity-10 w-full mx-5"></div>
        <SeeAll theme="light" :path="section.seeAllRoute" />
      </div>
      <div class="grid">
        <div v-for="(item, index) in 5" :key="index">
          <EventItem :item="section.item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventsSection',
  props: ['section'],
  components: {
    EventItem: () => import('~/components/EventItem'),
    SeeAll: () => import('~/components/SeeAll')
  }
}
</script>

<style scoped>
h1 {
  min-width: max-content;
}

.line {
  height: 1px;
}

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