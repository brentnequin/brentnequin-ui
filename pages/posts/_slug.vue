<template>
  <div class="grid grid-cols-1 container md:grid-cols-3">
    <aside slot="aside" class="sticky top-24 mt-32 h-screen">
      <a v-for="(topic, index) in page.toc" v-bind:key="index" :href="'#'+topic.id">{{ topic.text }}</a>
    </aside>
    <div class="col-span-2">
      <nuxt-content class="mt-4 pt-4 prose prose-h2:pt-24 dark:prose-invert max-w-none" :document="page" />
    </div>
  </div>
</template>

<script>
export default {

  head() {
    return {
      title: " | Brent Nequin"
    }
  },

  layout: "blog",

  async asyncData({ route, $content }) {
    const page = await $content('posts/' + route.params.slug).fetch()

    return {
      page
    }
  }
}
</script>