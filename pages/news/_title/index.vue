<template>
  <div class="news-title">
    <div class="px-5 py-20 md:px-10">
      <div>
        <img class="mx-auto w-full rounded md:hidden" src="~/assets/img/news-bg.jpg" alt="News Image" />
        <div class="md:flex">
          <div>
            <h1
              class="font-semibold text-xl mt-20 md:mt-0"
            >Voluptatem eligendi nulla ut placeat officiis natus non perferendis.</h1>
            <p
              class="mt-5 text-sm leading-relaxed"
            >Voluptatem corporis consequatur et eaque rerum quae. Eos temporibus est natus labore. Itaque libero harum aut doloremque iure optio expedita. Iste quia eum iste maiores est libero dolore vel quis. Sit amet qui eum dolorem sit reprehenderit enim. Odit fugiat et tempora modi rerum voluptatem ullam. Et corrupti et non odio perspiciatis sunt est voluptatibus velit. Maiores ipsam provident qui voluptatem in dignissimos debitis non quia. Et architecto blanditiis officiis ut nihil. Enim veritatis tenetur id est laboriosam. Temporibus cum est nam molestiae velit est perspiciatis deserunt.</p>
            <h1 class="font-semibold text-xl mt-10">Consequatar Dolorum Ex.</h1>
            <blockquote
              class="mt-5 border-l-4 border-gra-400 pl-5"
              cite="none"
            >For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally.</blockquote>
          </div>
          <img
            class="hidden ml-5 rounded self-start md:inline"
            src="~/assets/img/news-bg.jpg"
            alt="News Image"
          />
        </div>
      </div>
      <p
        class="mt-5 text-sm leading-relaxed md:mt-10"
      >Et nam velit quaerat modi autem et consequatur. Vero voluptatem exercitationem dolorem aspernatur officia. Eos necessitatibus officia molestias neque. Architecto adipisci veritatis eum quibusdam dolor nostrum. Natus error harum neque. Rem qui aut ipsa eos. Aenean id lacus quis leo posuere mattis. Duis malesuada tincidunt ipsum vitae commodo. Sed a mollis quam. Sed nunc magna, condimentum vel augue in, egestas suscipit tortor.</p>
      <h1
        class="font-semibold text-xl mt-10"
      >Aut exercitationem fugiat quo occaecati dicta illum quas rerum.</h1>
      <blockquote
        class="mt-5 border-l-4 border-gra-400 pl-5"
        cite="none"
      >Sed magnam consequatur beatae nostrum in. Optio quam ipsam consectetur dolores deleniti magni blanditiis. Labore laborum qui quia ullam laborum sit qui eius. Libero voluptates deleniti ratione voluptate minus tenetur quae. Temporibus neque consectetur excepturi quo hic omnis officiis. Quasi et dolorem temporibus sint.</blockquote>
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