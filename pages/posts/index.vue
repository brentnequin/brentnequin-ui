<template>
<div class="container py-8">
  <h1 class="text-3xl">{{ page.title }}</h1>
  <nuxt-content class="mt-4 prose max-w-none" :document="page" />
</div>
</template>

<script>
export default {

  head () {
    return {
        title: "Posts | Brent Nequin"
    }
  },

  name: 'PostsPage',
  async asyncData ({ $content }) {
    const page = await $content('posts').fetch()

    return {
      page
    }
  }
}
</script>