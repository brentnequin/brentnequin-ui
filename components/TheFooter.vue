<template>
    <footer class="text-slate-700 bg-gray-300">
        <div class="container py-20">
            <div class="border"></div>
            <div class="pt-8 grid grid-cols-2">
                <div class="">
                    <small>© Brent Nequin 2022</small>
                </div>
                <div class="flex flex-col">
                    <a href="https://vercel.com">
                        <small>Powered By Vercel</small>
                    </a>
                    <a href="https://paypal.me/turtlx?country.x=US&locale.x=en_US">
                        <small>Buy me a cup of coffee</small>
                    </a>
                </div>
                <!-- <div class="flex flex-wrap justify-center">
                    <span class="icon text-4xl px-2" v-for="(icon, index) in icons" v-bind:key="index">
                        <a :href="icon.link">
                            <fa :icon="[icon.type, icon.name]" />
                        </a>
                    </span>
                </div> -->
            </div>
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