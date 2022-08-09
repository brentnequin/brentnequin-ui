<template>
<div class="container py-8">
  <div v-for="(post, index) in posts" v-bind:key="index">
    <nuxt-link :to="post.path">
      <h1 class="text-3xl">{{ post.title }}</h1>
    </nuxt-link>
  </div>
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
    const posts = await $content('posts').only(['title', 'path']).fetch()

    return {
      posts
    }
  }
}
</script>