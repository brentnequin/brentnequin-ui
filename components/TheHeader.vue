<template>
    <header class="sticky top-4 z-50">
        <paper class="justify-between items-center flex flex-wrap m-4 px-4 py-2">
            <button-toggle-dark-mode class="flex md:hidden text-2xl w-6 justify-center" />
            <NavBrand title="Brent Nequin" />
            <div class="flex flex-wrap md:space-x-8">
                <nav class="hidden md:flex self-center">
                    <ul class="flex flex-wrap space-x-8">
                        <li v-for="(link, name) in navLinks" v-bind:key="name"><NuxtLink :to="link">{{ name }}</NuxtLink></li>
                    </ul>
                </nav>
                <button-toggle-dark-mode class="hidden md:flex md:flex-wrap text-2xl w-6 justify-center hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200" />
                <button type="button" class="flex md:hidden text-2xl w-6 justify-center" v-on:click="showMenu=!showMenu">
                    <fa :icon="['fas', menuIcon]" />
                </button>
            </div>
        </paper>
        <paper v-if="showMenu" class="flex m-4 px-4 py-2 md:hidden origin-top-right absolute right-0 focus:outline-none z-50" tabindex="-1">
            <nav class="">
                <ul class="space-y-2 text-right">
                    <li v-for="(link, name) in navLinks" v-bind:key="name"><NuxtLink :to="link" @click.native="showMenu=false">{{ name }}</NuxtLink></li>
                </ul>
            </nav>
        </paper>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            navLinks: {
                "Home": "/",
                "About": "/about",
                "Posts": "/posts",
                "Projects": "/projects"
            }
        }
    },
    created: function() {
        let num = Math.random()
        this.onCreateMenuIconHamburger = num > 0.1 ? 'bars' : 'burger'
        this.onCreateMenuIconCaret = num > 0.1 ? 'caret-down' : 'carrot'
    },
    computed: {
        menuIcon: function() {
            return this.showMenu ? this.onCreateMenuIconCaret : this.onCreateMenuIconHamburger
        }
    }
}
</script>

<!-- <style scoped>
.icon {
    font-size: 1rem;
}
</style> -->