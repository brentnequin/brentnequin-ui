<template>
    <div class="container py-8">
        <h1 class="text-3xl">{{ page.title }}</h1>
        <nuxt-content class="mt-4 prose max-w-none" :document="page" />
        <ProjectList :categories="page.projects" />
  </div>
</template>

<script>
export default {
  head () {
    return {
        title: "Projects | Brent Nequin"
    }
  },
  async asyncData ({ $content }) {
    const page = await $content('projects').fetch()

    return {
      page
    }
  }
}
</script>