<template>
  <footer class="footer">
    <div class="p-5 pb-0 xl:px-10">
      <div class="border-t-2 border-black opacity-10"></div>
      <div class="py-10 lg:flex lg:items-center">
        <div>
          <SocialNetworks theme="dark" />
        </div>
        <div
          class="bg-gray-400 mt-5 flex justify-center items-center rounded max-w-md mx-auto lg:w-64 lg:mt-0 xl:w-2/5"
        >
          <input
            class="bg-transparent px-1 py-2 w-3/4 text-sm placeholder-black"
            type="text"
            placeholder="Newsletter (Enter Email)"
            @mouseenter="focus"
            @mouseleave="blur"
            @focus="focus"
            @blur="blur"
          />
          <button class="p-3" @mouseenter="focus" @mouseleave="blur" @focus="focus" @blur="blur">
            <img class="w-5 h-5" :src="image" alt="Paper Plane" />
          </button>
        </div>
        <div class="font-semibold text-gray-600 text-center text-base mt-5 lg:mt-0">
          <a class="hover:text-main-purple focus:text-main-purple" href="#">Changelog</a>
          <a class="ml-3 hover:text-main-purple focus:text-main-purple" href="#">Styles</a>
          <a class="ml-3 hover:text-main-purple focus:text-main-purple" href="#">Licensing</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
    SocialNetworks: () => import('~/components/SocialNetworks')
  },
  data() {
    return {
      image: require('~/assets/img/paper-plane.svg'),
      imageDefault: require('~/assets/img/paper-plane.svg'),
      imageHover: require('~/assets/img/paper-plane-purple.svg')
    }
  },
  methods: {
    focus() {
      this.image = this.imageHover
    },
    blur() {
      this.image = this.imageDefault
    }
  }
}
</script>

<style scoped>
</style>