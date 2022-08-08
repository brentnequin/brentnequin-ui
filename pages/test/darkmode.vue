<template>
    <div class="bg-gray-100 dark:bg-gray-800">
        <p class="text-gray-800 dark:text-gray-100">Light Mode</p>
        <button v-on:click="toggleDarkMode">Toggle</button>
    </div>
</template>

<script>
export default {
    methods: {
        toggleDarkMode: function() {
            console.log(this.$colorMode.preference)
            this.$colorMode.preference = this.$colorMode.preference == 'light' ? 'dark' : 'light'
        }
    }
}
</script>