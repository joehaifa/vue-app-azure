<template>
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <a @click.prevent="goToUser(user.id)">{{ user.name }}</a>
        </li>
      </ul>
      <button @click="goHome">Retour à l'accueil</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const users = [
    { id: 1, name: 'Joe Haifa' },
    { id: 2, name: 'Candice Giami' },
    { id: 3, name: 'Jean Batiste' }
  ];
  
  const goToUser = (id) => {
    router.push({ name: 'UserProfile', params: { id } });
  };
  
  const goHome = () => {
    router.push({ name: 'Home' });
  };
  </script>
  