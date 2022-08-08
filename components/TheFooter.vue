<template>
    <footer class="container my-20">
        <div class="border"></div>
        <div class="text-center my-4 pt-8">
            <small>© Brent Nequin</small>
        </div>
        <div class="flex flex-wrap justify-center">
            <span class="icon text-4xl px-2" v-for="(icon, index) in icons" v-bind:key="index">
                <a :href="icon.link">
                    <fa :icon="[icon.type, icon.name]" />
                </a>
            </span>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            icons: [
                {
                    link: "mailto:brentnequin@gmail.com",
                    type: "fas",
                    name: "envelope"
                },
                {
                    link: "https://www.linkedin.com/in/brentnequin",
                    type: "fab",
                    name: "linkedin"
                },
                {
                    link: "https://github.com/brentnequin",
                    type: "fab",
                    name: "github"
                }
            ]
        }
    }
}
</script>