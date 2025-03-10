<template>
    <input class="mon_text" v-model="result"/> 
    <p>{{ result }}</p>
</template>

<script setup >
import { ref } from 'vue';

const result= ref('')
</script>