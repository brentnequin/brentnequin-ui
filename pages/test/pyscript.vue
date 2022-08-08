<template>
<div class="container py-8">
    <py-script>
        print('hi')
    </py-script>
</div>
</template>

<script>
export default {

    // https://vueschool.io/articles/vuejs-tutorials/how-to-load-third-party-scripts-in-nuxt-js/

    head() {
        return {
            script: [
                { src: 'https://pyscript.net/alpha/pyscript.js', defer: true }
            ],
            link: [
                { href: 'https://pyscript.net/alpha/pyscript.css'}
            ]
        }
    } 
}
</script>
