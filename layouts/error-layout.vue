<template>
  <div class="error">
    <div class="relative h-full">
      <video autoplay loop muted playsinline class="w-screen h-screen object-cover">
        <source :src="videoMp4" />
        <source :src="videoWebm" />
      </video>
      <div
        class="absolute w-full h-full top-0 left-0 opacity-25"
        :style="{'background-image': `url(${dotsBg})`}"
      ></div>
      <div
        class="content absolute h-full mt-10 text-white text-center w-full px-5 bg-center bg-no-repeat flex"
        :style="{'background-image': `url(${brushBg})`}"
      >
        <div class="relative m-auto">
          <h2 class="relative font-semibold uppercase text-xs tracking-widest">Error 404</h2>
          <h1 class="font-black capitalize text-5xl leading-tight mt-5 lg:text-6xl">Page Not Found</h1>
          <nuxt-link
            :to="{name: 'index'}"
            class="inline-block px-5 py-3 mt-5 font-semibold bg-main-purple border border-main-purple rounded hover:bg-white hover:text-main-dark hover:border-white focus:bg-white focus:text-main-dark focus:border-white"
          >Go Back Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head: {
    title: 'Error Page'
  },
  data() {
    return {
      videoMp4: require('~/assets/video/hero-video.mp4'),
      videoWebm: require('~/assets/video/hero-video.webm'),
      dotsBg: require('~/assets/img/hero-dots.svg'),
      brushBg: require('~/assets/img/hero-brush.svg'),
      barsBg: require('~/assets/img/bars.svg')
    }
  }
}
</script>

<style scoped>
.content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 300px;
}

h1::after {
  @apply absolute opacity-50 bg-center;
  content: '';
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  width: 700px;
  height: 70px;
  background-image: url('https://assets.website-files.com/5e6bb7107023eaa038ce209f/5e6bb913b32abe7c38d7135f_eq-bars.svg');
}
</style>