<template>
  <div class="contact-form">
    <div>
      <div class="flex items-center">
        <h2 class="text-main-dark font-black text-lg">Give Us A Shout</h2>
        <div class="line bg-black opacity-10 w-full mx-5"></div>
      </div>
      <div class="mt-10">
        <form>
          <input
            class="block w-full p-2 bg-gray-400 text-sm placeholder-black rounded"
            type="text"
            placeholder="Email"
          />
          <input
            class="block w-full mt-5 p-2 bg-gray-400 text-sm placeholder-black rounded"
            type="text"
            placeholder="Subject"
          />
          <textarea
            class="block w-full mt-5 p-2 bg-gray-400 text-sm placeholder-black rounded max-w-lg lg:max-w-full"
            placeholder="Message"
          ></textarea>
          <button
            class="bg-main-purple w-full py-3 mt-5 text-white font-semibold rounded hover:bg-black focus:bg-main-dark"
          >Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
h2 {
  min-width: max-content;
}
.line {
  height: 1px;
}

textarea {
  min-height: 100px;
  max-height: 200px;
}
</style>