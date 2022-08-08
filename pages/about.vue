<template>
<div class="container py-8">
    <h1 class="text-3xl">{{ page.title }}</h1>
    <nuxt-content class="mt-4 prose max-w-none" :document="page" />
    <education-list :educationList="page.educationList" />
    <!-- favorite tech -->
</div>
</template>

<script>
export default {

  head () {
    return {
        title: "About | Brent Nequin"
    }
  },

  async asyncData ({ $content }) {
    const page = await $content('about').fetch()

    return {
      page
    }
  }
}
</script>