<template>
  <nav class="side-nav overflow-y-auto">
    <div class="bg-main-dark p-5">
      <div class="flex justify-center lg:hidden">
        <SearchEvents />
      </div>
      <ul>
        <li>
          <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
        </li>
        <li @click="toggleDropdown('events')">
          <span>Events</span>
          <img src="~/assets/img/chevron-down.svg" alt="Chewron Down" />
        </li>
        <ul v-if="isEventsOpen">
          <li>
            <span>Latest</span>
          </li>
          <li>
            <span>Upcoming</span>
          </li>
          <li>
            <span>Featured</span>
          </li>
        </ul>
        <li @click="toggleDropdown('locations')">
          <span>Locations</span>
          <img src="~/assets/img/chevron-down.svg" alt="Chewron Down" />
        </li>
        <ul v-if="isLocationsOpen">
          <li>
            <span>Beijing</span>
          </li>
          <li>
            <span>Berlin</span>
          </li>
          <li>
            <span>London</span>
          </li>
          <li>
            <span>Tokyo</span>
          </li>
        </ul>
        <li @click="toggleDropdown('venues')">
          <span>Venues</span>
          <img src="~/assets/img/chevron-down.svg" alt="Chewron Down" />
        </li>
        <ul v-if="isVenuesOpen">
          <li>
            <span>The 100 Club</span>
          </li>
          <li>
            <span>The Orpheum</span>
          </li>
          <li>
            <span>Vicar Cafer</span>
          </li>
        </ul>
        <li>
          <nuxt-link :to="{name: 'news'}">News</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'contact'}">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SideNav',
  components: {
    SearchEvents: () => import('~/components/SearchEvents')
  },
  data() {
    return {
      isEventsOpen: false,
      isLocationsOpen: false,
      isVenuesOpen: false
    }
  },
  methods: {
    toggleDropdown(dropdown) {
      if (dropdown === 'events') {
        this.isLocationsOpen = false
        this.isVenuesOpen = false
        this.isEventsOpen = !this.isEventsOpen
      } else if (dropdown === 'locations') {
        this.isEventsOpen = false
        this.isVenuessOpen = false
        this.isLocationsOpen = !this.isLocationsOpen
      } else {
        this.isEventsOpen = false
        this.isLocationsOpen = false
        this.isVenuesOpen = !this.isVenuesOpen
      }
    }
  }
}
</script>

<style scoped>
li {
  @apply relative text-white flex items-center mb-1;
}

li:hover {
  @apply bg-black text-main-purple;
}

li > a {
  @apply text-sm font-semibold block w-full text-center py-5;
}

li > span {
  @apply text-sm font-semibold w-full text-center cursor-pointer py-5;
}

li > img {
  @apply absolute w-5 h-5 cursor-pointer;
  left: 65%;
}

ul > ul {
  @apply bg-black;
}

ul > ul > li > span {
  @apply text-xs;
}
</style>