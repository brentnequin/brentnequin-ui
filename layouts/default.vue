<template>
  <div class="font-serif">
    <TheHeader v-if="currentPage != 'index'" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  computed: {
    currentPage: function() {
      return this.$route.name
    }
  }
}
</script>