<template>
    <h1>Je suis l'enfant</h1>
    <p>Message du parent : {{ msg }}</p>
    <button @click="sendData">Send Data to Parent</button>
</template>

<script setup >
    import { defineEmits } from 'vue';

    const props = defineProps ({
        msg:String
    })

    const emit = defineEmits(['updateData'])

    const data ='hello parent'
    const model = defineModel()

    const sendData = () => {
        emit('updateData',data)
        model.value++
    }

 


</script>