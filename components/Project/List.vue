<template>
    <ul>
        <li v-for="(projects, category) in categories" v-bind:key="category" class="mt-8">
            <h1 class="text-xl">{{ category }}</h1>
            <ul class="mt-4">
                <project
                    v-for="(project, name) in projects"
                    v-bind:key="name" 
                    :name="name"
                    :description="project.description"
                    :stack="project.stack"
                    :link="project.link"
                />
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['categories']
}
</script>

<style scoped>
.icon {
    font-size: 1rem;
}
</style>