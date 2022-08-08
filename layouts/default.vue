<template>
  <div class="font-serif">
    <TheHeader :dark="dark" v-if="currentPage != 'index'" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dark: false,
    }
  },
  computed: {
    currentPage: function() {
      return this.$route.name
    }
  }
}
</script>