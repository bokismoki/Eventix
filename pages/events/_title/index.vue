<template>
  <div class="events-title">
    <div class="px-5 py-16 md:px-10">
      <div class="lg:flex">
        <div class="lg:w-1/3">
          <img class="mx-auto w-full rounded" src="~/assets/img/item-bg.jpg" alt="Event Image" />
        </div>
        <div class="lg:w-2/3 lg:ml-10">
          <h2 class="mt-10 font-semibold text-xl lg:mt-0">Event Details</h2>
          <p class="mt-5 text-sm">
            <span class="font-semibold">Date:</span> February 16, 2021 - February 25, 2021
          </p>
          <p class="mt-5 text-sm">
            <span class="font-semibold">Location:</span> Belgrade
          </p>
          <p class="mt-5 text-sm">
            <span class="font-semibold">Venue:</span> Vicar Cafer
          </p>
          <p class="mt-5 text-sm">
            <span class="font-semibold">Address:</span> 26 Bishop Dr.Baton Rouge, LA 70806
          </p>
          <p class="mt-5 text-sm">
            <span class="font-semibold">Price:</span> $ 25.00 USD
          </p>
          <p
            class="mt-5 text-sm"
          >Integer pretium sodales maximus. Etiam vitae dui orci. Maecenas eget fermentum tortor. Fusce maximus tellus vitae eros interdum, nec hendrerit augue rhoncus. Vestibulum mollis hendrerit tincidunt. Proin in scelerisque mi. Etiam ultricies semper mauris, vitae iaculis dui convallis nec. Curabitur massa turpis, viverra aliquam fringilla ut, iaculis ut enim.</p>
          <div class="flex items-center mt-5">
            <input class="bg-gray-400 rounded w-16 px-1 py-3" type="number" value="0" />
            <button
              class="rounded bg-main-purple ml-5 py-3 w-full font-semibold text-white hover:bg-black focus:bg-black"
            >Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.params.title
    }
  }
}
</script>

<style scoped>
img {
  min-width: 250px;
  max-width: 500px;
}
</style>