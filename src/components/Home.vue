<template>
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <button @click="goToUserList()">Voir la liste des utilisateurs</button>
    </div>
    <router-view/>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToUserList = () => {
    router.push({ name: 'UserList' });
  };
  </script>
  