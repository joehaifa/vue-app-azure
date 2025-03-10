<template>
    <h1>Je suis le Parent</h1>
    <enfant :msg="message" @updateData="receiveData"></enfant>
    <enfant v-model="count"></enfant>
    <p>{{ count }}</p>
</template>

<script>
    import {ref} from 'vue';
    import enfant from '/ComposantE.vue';

    const message = 'hello enfant'

    const receiveData = (data) =>{
        console.log(data)
    }
    const count = ref('')

</script>