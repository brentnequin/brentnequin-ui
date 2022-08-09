<template>
<div class="container py-8">
    <nuxt-content class="mt-4 prose dark:prose-invert max-w-none" :document="page" />
</div>
</template>

<script>
export default {

  head () {
    return {
        title: " | Brent Nequin"
    }
  },

  async asyncData ({ route, $content }) {
    const page = await $content('posts/' + route.params.slug).fetch()

    return {
      page
    }
  }
}
</script>