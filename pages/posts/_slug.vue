<template>
  <div class="grid grid-cols-1 container md:grid-cols-3">
    <aside slot="aside" class="sticky top-24 mt-32 h-screen">
      <a v-for="(topic, index) in page.toc" v-bind:key="index" :href="'#'+topic.id">{{ topic.text }}</a>
    </aside>
    <div class="col-span-2">
      <h1 class="text-4xl pt-4">{{ page.title }}</h1>
      <small>Last Updated: {{ dateFormatted(page.updatedAt) }} | Created On: {{ dateFormatted(page.createdAt) }}</small>
      <nuxt-content class="mt-4 prose dark:prose-invert max-w-none" :document="page" />
    </div>
  </div>
</template>

<script>
export default {

  head() {
    return {
      title: this.page.title + " | Brent Nequin"
    }
  },

  layout: "blog",

  async asyncData({ route, $content }) {
    const page = await $content('docs/' + route.params.slug).fetch()

    return {
      page
    }
  },

  methods: {
    dateFormatted(dateString) {
      return new Date(dateString).toDateString()
    }
  }
}
</script>