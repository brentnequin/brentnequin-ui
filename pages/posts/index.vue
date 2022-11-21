<template>
<div class="container py-8">
  <div v-for="(doc, index) in docs" v-bind:key="index">
    <nuxt-link :to="doc.path">
      <h1 class="text-3xl">{{ doc.title }}</h1>
      <small>{{doc.createdAt}}</small>
      <p class="mt-2">{{ doc.description }}</p>
    </nuxt-link>
  </div>
</div>
</template>

<script>
export default {

  head () {
    return {
        title: "Docs | Brent Nequin"
    }
  },

  name: 'PostsPage',
  async asyncData ({ $content }) {
    const docs = await $content('docs').fetch()
    console.log(docs)

    return {
      docs
    }
  },

}
</script>