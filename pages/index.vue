<template>
  <div class="text-center">
    <div class="flex justify-center h-screen">
      <div class="self-center">
        <h1 class="text-6xl">{{ title }}</h1>
        <p class="mt-3">{{ subtitle }}</p>
        <div class="flex text-2xl space-x-6 mt-10 justify-center">
          <nuxt-link :to="icon.link" class="flex border-2 rounded w-20 h-20 justify-center" v-for="(icon, index) in icons" v-bind:key="index">

            <div class="self-center">
              <fa  :icon="[icon.type, icon.name]" />
              <p class="text-xs">{{ icon.title }}</p>
            </div>

          </nuxt-link>
          <button-toggle-dark-mode type="button" class="border-2 rounded w-20 h-20" with-label />
        </div>
      </div>
    </div>
    <!-- <div class="container py-8">
    <h1 class="text-3xl mt-5">Stuff I've been working on</h1>
  </div> -->
  </div>
</template>

<script>
import ButtonToggleDarkMode from '../components/ButtonToggleDarkMode.vue'
export default {
  components: { ButtonToggleDarkMode },

  head() {
    return {
      title: "Brent Nequin"
    }
  },

  computed: {
    colorMode: function () { return this.$colorMode.preference == 'light' ? 'Dark' : 'Light' }
  },

  data() {
    return {
      title: "Brent Nequin",
      subtitle: "Programmer. Guitarist. Pizza enthusiast.",
      icons: [
        {
          "title": "About",
          "name": "user",
          "type": "fas",
          "link": "/about"
        },
        {
          "title": "Projects",
          "name": "building",
          "type": "fas",
          "link": "/projects"
        },
        {
          "title": "Posts",
          "name": "book",
          "type": "fas",
          "link": "/posts"
        },
      ]
    }
  }

}
</script>
