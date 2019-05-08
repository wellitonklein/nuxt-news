<template>
    <p>{{ $route.params.slug }}</p>
</template>

<script>
export default {
    async fetch({ store, params }) {
        await store.dispatch('loadHeadline', params.slug)
    }
}
</script>
