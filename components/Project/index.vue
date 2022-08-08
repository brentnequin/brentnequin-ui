<template>
    <li class="m-4">
        <div class="flex flex-wrap">
            <a :href="link">
                <strong>{{ name }}</strong>
            </a>
            <div class="mx-2">
                <span v-for="item in stack" v-bind:key="item" class="icon mx-1">
                    <fa :icon="['fab', item]" />
                </span>
            </div>
        </div>
        <p class="prose">{{ description }}</p>
    </li>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
        stack: Array,
        link: String
    }
}
</script>