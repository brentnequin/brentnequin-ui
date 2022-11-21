<template>
    <div :class="featured ? 'grid grid-cols-1 md:grid-cols-3 gap-8' : 'space-y-4'">
        <img class="col-span-2 w-full rounded-md object-cover h-96" :src="imgSrc" />
        <div class="self-center space-y-4">
            <div :class="'text-sm text-gray-500 ' + featured ? 'flex space-x-2' : ''">
                <p>{{ group }}</p>
                <p>•</p>
                <time :datetime="dateCreated">09-21-2022</time>
            </div>
            <div class="space-y-2">
                <nuxt-link :to="slug">
                    <h2 class="text-3xl">{{ title }}</h2>
                </nuxt-link>
                <p class="text-gray-600">{{ excerpt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: [
    //     'featured', 'imgSrc', 'title', 'excerpt', 'dateCreated', 'group', 'slug'
    // ]
    props: {
        featured: {
            type: Boolean
        },
        imgSrc: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        excerpt: {
            type: String,
            default: ""
        },
        group: {
            type: String,
            default: ""
        },
        slug: {
            type: String,
            default: ""
        },
        dateCreated: {
            type: String,
        }
    }
}
</script>