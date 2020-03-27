<template>
  <div class="contact-map">
    <div>
      <iframe
      class="rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.11997329362!2d20.282514873656172!3d44.81515973019706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1585315624996!5m2!1ssr!2srs"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMap'
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 400px;
}
</style>