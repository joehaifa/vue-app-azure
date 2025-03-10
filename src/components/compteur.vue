<template>
    <h1>Compteur Interactif</h1><br>
    <button @click="increment" :disabled="compteur == 10">+</button>
    <button @click="decrement" :disabled="compteur ==0">-</button>
    <p>Compteur : {{ compteur }}</p><br>
    <p>Historique des actions :</p><br>
    <button @click="afficherHistorique">Afficher l'historique </button>
    <ul v-if="show">
        <li 
            v-for="(element, index) in myListTrier" 
            :key="index" 
            :class="{ 'blue-text': element.includes('Incrementation'), 'red-text': element.includes('Decrementation') }">
            {{ element }}
        </li> 
    </ul>
    
    
</template>

<script setup>
import { computed, ref } from 'vue';

const compteur = ref(0);
const myList=ref([]);
const show=ref(true);
const increment = () => { 
    if (compteur.value < 10) {
        compteur.value++;
        myList.value.push(new Date().toLocaleDateString() +' Incrementation (+)');
    }
};

const decrement = () => {
    compteur.value--;
    myList.value.push(new Date().toLocaleDateString()+ ' Decrementation (-)');
};

const afficherHistorique=()=>{
    if(show.value==true){
        show.value=false;
    }else{
        show.value=true;
    }
}

const myListTrier=computed ( () => {
    return [...myList.value].reverse()
})

</script>
<style scoped>
.blue-text {
    color: blue;
}

.red-text {
    color: red;
}
</style>