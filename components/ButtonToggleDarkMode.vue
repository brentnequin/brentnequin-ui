<template>
    <button type="button" class="flex justify-center" v-on:click="toggleDarkMode">
        <div class="self-center">
            <fa :icon="['fas', 'lightbulb']" />
            <p v-if="withLabel" class="text-xs">{{ $colorMode.value == 'light' ? 'Dark' : 'Light' }} Mode</p>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        withLabel: Boolean,
    },
    methods: {
        toggleDarkMode: function () {
            this.$colorMode.preference = this.$colorMode.value == 'light' ? 'dark' : 'light'
        }
    }
}
</script>