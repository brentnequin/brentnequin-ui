<template>
    <ul class="mt-4 mx-4">
        <Education
            v-for="(item, degree) in educationList"
            v-bind:key="degree"
            :degree="degree"
            :field="item.field"
            :year="item.year"
            :at="item.at"
        />
    </ul>
</template>

<script>
export default {
    props: ["educationList"],
}
</script>
