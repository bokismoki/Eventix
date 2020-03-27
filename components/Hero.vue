<template>
  <section class="hero" :class="{'home': !isNotHomePage, 'not-home': isNotHomePage}">
    <div class="relative h-full">
      <video autoplay loop muted playsinline class="w-screen h-full object-cover">
        <source :src="videoMp4" />
        <source :src="videoWebm" />
      </video>
      <div
        class="absolute w-full h-full top-0 left-0 opacity-25"
        :style="{'background-image': `url(${dotsBg})`}"
      ></div>
      <div
        class="content absolute h-full mt-10 text-white text-center w-full px-5 bg-center bg-no-repeat flex"
        :class="{'home': !isNotHomePage, 'not-home': isNotHomePage}"
        :style="{'background-image': `url(${brushBg})`}"
      >
        <div class="relative m-auto">
          <h2
            v-if="!isNotHomePage"
            class="relative font-semibold uppercase text-xs tracking-widest"
          >Partying since 2020</h2>
          <h1 class="font-black capitalize text-5xl leading-tight mt-5 lg:text-6xl">{{heading}}</h1>
          <div v-if="!isNotHomePage" class="mt-10 md:flex md:items-center">
            <button
              class="w-full py-3 font-semibold bg-main-purple border border-main-purple rounded hover:bg-white hover:text-main-dark hover:border-white focus:bg-white focus:text-main-dark focus:border-white"
            >Latest Events</button>
            <button
              class="w-full py-3 font-semibold rounded border border-gray-100 mt-5 hover:bg-white hover:text-main-dark focus:bg-white focus:text-main-dark md:mt-0 md:ml-5"
            >Upcoming Events</button>
          </div>
        </div>
      </div>
      <div
        v-if="!isNotHomePage"
        class="hidden absolute p-10 bottom-0 left-0 w-full justify-between items-center lg:flex"
      >
        <div>
          <p class="text-white text-sm">
            <span class="font-semibold">Phone:</span> +1 800 585 - 8930
          </p>
        </div>
        <SocialNetworks theme="light" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  components: {
    SocialNetworks: () => import('~/components/SocialNetworks')
  },
  data() {
    return {
      videoMp4: require('~/assets/video/hero-video.mp4'),
      videoWebm: require('~/assets/video/hero-video.webm'),
      dotsBg: require('~/assets/img/hero-dots.svg'),
      brushBg: require('~/assets/img/hero-brush.svg')
    }
  },
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'index'
    },
    heading() {
      switch (this.$route.name) {
        case 'contact':
          return 'Contact'
          break
        case 'news':
          return 'Latest News'
          break
        case 'news-title':
          return this.$route.params.title
        case 'events':
          return 'Events'
        case 'events-title':
          return this.$route.params.title
        default:
          return 'Never miss an event'
          break
      }
    }
  }
}
</script>

<style scoped>
.home {
  height: 80vh;
  min-height: 550px;
  max-height: 900px;
}

.not-home {
  height: 55vh;
  min-height: 400px;
  max-height: 600px;
}

.content.home {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 350px;
}
.content.not-home {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 200px;
}

h1::after {
  @apply absolute opacity-50 bg-center;
  content: '';
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  width: 120%;
  height: 70px;
  background-image: url('https://assets.website-files.com/5e6bb7107023eaa038ce209f/5e6bb913b32abe7c38d7135f_eq-bars.svg');
}

@media (min-width: 508px) {
  .content.home {
    background-size: 375px;
  }
  .content.not-home {
    background-size: 250px;
  }
}

@media (min-width: 768px) {
  .content.home {
    background-size: 275px;
  }
  .content.not-home {
    background-size: 200px;
  }
}

@media (min-width: 1024px) {
  .content.home {
    background-size: 325px;
  }
}
</style>