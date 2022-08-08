<template>
    <li class="flex flex-wrap">
        <span class="icon pt-5 px-3">
            <fa :icon="['fas', 'graduation-cap']" />
        </span>
        <div>
            <p class="pt-5">{{ degree }} in {{ field }}, {{ year }}</p>
            <p class="text-gray-500">{{ at }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        degree: String,
        field: String,
        year: Number,
        at: String
    }
}
</script>