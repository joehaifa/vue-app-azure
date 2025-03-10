<template>
    <div>
      <h1>Détails de l'utilisateur</h1>
      <p>ID : {{ userId }}</p>
      <p>Nom : {{ userName }}</p>
      <button @click="goHome()">Retour à l'accueil</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  
  const userId = route.params.id;
  
  const users = [
    { id: 1, name: 'Joe Haifa' },
    { id: 2, name: 'Candice Giami' },
    { id: 3, name: 'Jean Batiste' }
  ];
  
  const userName = users.find(user => user.id == userId)?.name || 'Inconnu';
  
  const goHome = () => {
    router.push({ name: 'Home' });
  };
  </script>
  