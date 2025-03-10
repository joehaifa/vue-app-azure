<template>
    <p>{{ userID }}</p>
    <p>{{ userName }}</p>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    const router=useRouter()
    route=useRoute()
    const userID=route.params.id


</script>