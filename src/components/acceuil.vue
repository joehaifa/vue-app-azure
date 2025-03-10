<template>
    <h1>acceuil</h1>
    <button @click="switch">go to profiles</button>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router=useRouter();

    const switch = () =>{
        router.push({
            name:'profile'
        })
    }
</script>