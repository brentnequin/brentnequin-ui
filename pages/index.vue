<template>
  <div class="bg-gray-300 text-slate-700">
    <div class="container flex justify-center h-screen">
      <div class="self-center">
        <h1 class="text-6xl">{{ title }}</h1>
        <!-- <p class="text-center text-lg">{{ subtitle }}</p> -->
        <div class="flex text-2xl space-x-6 mt-10 justify-center">

          <!-- <nuxt-link :to="link.to" v-for="link in navlinks" v-bind:key="link.title">
            <paper class="flex border-0 rounded w-20 h-20 justify-center">
              <div class="self-center">
                <fa :icon="[link.iconType, link.iconName]" />
                <p class="text-xs">{{ link.title }}</p>
              </div>
            </paper>
          </nuxt-link> -->

          <!-- <paper class="border-0 rounded w-20 h-20 flex justify-center">
            <button-toggle-dark-mode type="button" with-label />
          </paper> -->
          <div class="absolute flex-grow flex bottom-0 right-0 w-full">
            <div class="mx-auto self-start animate-bounce">
              <fa class="text-2xl" :icon="['solid', 'caret-down']" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <section class="bg-slate-700 text-gray-300 py-20">
      <div class="container grid grid-cols-3">
        <div class="space-y-4 text-center">
          <fa class="text-5xl" :icon="['solid', 'keyboard']" />
          <h4 class="text-2xl">Programmer</h4>
        </div>
        <div class="space-y-4 text-center">
          <fa class="text-5xl" :icon="['solid', 'guitar']" />
          <h4 class="text-2xl">Guitarist</h4>
        </div>
        <div class="space-y-4 text-center">
          <fa class="text-5xl" :icon="['solid', 'pizza-slice']" />
          <h4 class="text-2xl">Pizza Lover</h4>
        </div>
      </div>
    </section> -->
    <section class="py-20">
      <div class="container space-y-8">
        <h2 class="text-3xl underline decoration-2 underline-offset-4">About Me</h2>
        <p>Programmer. Guitar Player. Pizza Lover.</p>
        <!-- <div class="grid grid-cols-2 gap-8">
          <div>
            <div v-for="item in timeline" :key="item.year">{{ item.year }}</div>
          </div>
          <div>
            <div v-for="item in timeline" :key="item.description">{{ item.description }}</div>
          </div>
        </div> -->
        <div>
          <div v-for="item, index in timeline" :key="index" class="flex">
            <span class="min-w-[20%]">{{ item.year + (item.present ? " - Present" : "") }}</span>
            <span>{{ item.description }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="container space-y-8">
        <h2 class="text-3xl underline decoration-2 underline-offset-4">Projects</h2>
      </div>
    </section>
    <section class="py-20">
      <div class="container space-y-8">
        <h2 class="text-3xl underline decoration-2 underline-offset-4">Blog</h2>
        <PostCard
          img-src="https://cdn.vox-cdn.com/thumbor/KCM3M4hs7f01BCOspPDVmi7z0hw=/0x0:1024x683/1200x900/filters:focal(431x261:593x423)/cdn.vox-cdn.com/uploads/chorus_image/image/55950361/6777933006_1a4f5489d4_b.0.6.jpg"
          title="Pizza Is The Best"
          excerpt="This article will discuss how pizza is the best food to have ever existed."
          dateCreated="09-21-2022"
          group="FOOD"
          slug="#"
          featured
        />
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PostCard
            v-for="x in 5"
            :key="x"
            img-src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60"
            title="Pizza Is The Best"
            excerpt="This article will discuss how pizza is the best food to have ever existed."
            dateCreated="09-21-2022"
            group="FOOD"
            slug="#"
          />
        </div> -->
        <div class="pt-8 text-right">
          <nuxt-link to="#">
          <button class="bg-slate-700 text-gray-300 px-3 py-2 rounded">
            <div class="flex space-x-2">
              
                <p>View More</p>
                <fa class="text-xl self-center" :icon="['solid', 'caret-right']" />
              
            </div>
          </button>
        </nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-20 ">
      <div class="container space-y-8">
        <h2 class="text-3xl underline decoration-2 underline-offset-4">How To Reach Me</h2>
      </div>
    </section>
    <!-- <div class="container py-8">
    <h1 class="text-3xl mt-5">Stuff I've been working on</h1>
  </div> -->
  </div>
</template>

<script>
import siteParams from '~/static/siteParams.json'

export default {
  layout: 'home',

  head() {
    return {
      title: "Brent Nequin"
    }
  },
  
  data() {
    return {
      title: siteParams.title,
      subtitle: siteParams.subtitle,
      navlinks: siteParams.navlinks,
      timeline: [
        {"year": 1995, "description": "Born in Chicago, Illinois"},
        {"year": 2015, "description": "Worked at Noodles & Company as a Team Member"},
        {"year": 2020, "description": "Graduated from the University of Illinois at Chicago with a Master's degree in Electrical Engineering"},
        {"year": 2021, "description": "Working at The Numina Group as a Software Engineer"},
        {"year": 2021, "present": true, "description": "Working at Epsilon Chicago as a Python/Angular Developer"}
      ]
    }
  },

  computed: {
    colorMode: function () { return this.$colorMode.preference == 'light' ? 'Dark' : 'Light' }
  },

}
</script>
