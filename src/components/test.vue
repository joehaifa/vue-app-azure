<template>
    <h1>Compteur Interactif</h1>
    <button @click="increment" :disabled="compteur==10">+</button>
    <button @click="decrement" :disabled="compteur==0">-</button>
    <p>Compteur : {{ compteur }}</p>
    <button @click="afficherHist">afficher Hist</button>
    <h2>Historique : </h2>
    <ul v-if="show">
        <li v-for="(element,index) in myList"
        :key="index"
        :class="{'blue-text':element.includes('Incrementation'),'red-text':element.includes('Decrementation')}">
        {{ element }}
    </li>
    </ul>
</template>

<script>
    import {ref} from 'vue';
    const compteur = ref(0);
    const show = ref(true);
    const myList = ref([]);
    const date=new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const increment = () =>{
        compteur.value++;
        myList.value.push(time+' Incrementation (+)');

    }
    const decrement = () =>{
        compteur.value--;
        myList.value.push(time+' Decrementation (-)');

    }
    const afficherHist = () =>{
        show.value=!show.value;
    }
</script>

<style>
    .blue-text{
        color: blue;
    }
    .red-text{
        color: red;
    }
</style>