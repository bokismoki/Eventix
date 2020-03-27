<template>
  <div class="contact">
    <div class="px-5 pt-20 pb-10 lg:px-10">
      <div class="items-center lg:flex">
        <div class="lg:w-3/5 lg:mr-10">
          <ContactForm />
        </div>
        <div class="mt-20 lg:w-2/5 lg:mt-0">
          <ContactMap />
        </div>
      </div>
      <div class="mt-10 justify-center sm:flex">
        <div class="m-2 text-sm flex items-center justify-center sm:mx-2 lg:mx-5">
          <img class="w-4 h-4" src="~/assets/img/phone.svg" alt="Phone" />
          <p class="ml-2">+1 800 854-7896</p>
        </div>
        <div class="m-2 text-sm flex items-center justify-center sm:mx-2 lg:mx-5">
          <img class="w-4 h-4" src="~/assets/img/location-pin.svg" alt="Location Pin" />
          <p class="ml-2">8186 Foster Ave.Auburn. NY 13021</p>
        </div>
        <div class="m-2 text-sm flex items-center justify-center sm:mx-2 lg:mx-5">
          <img class="w-4 h-4" src="~/assets/img/email.svg" alt="Email" />
          <p class="ml-2">contact@eventix.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact'
  },
  components: {
    ContactForm: () => import('~/components/ContactForm'),
    ContactMap: () => import('~/components/ContactMap')
  }
}
</script>

<style scoped>
</style>