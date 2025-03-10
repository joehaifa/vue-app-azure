<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TextInput from './components/TextInput.vue'
import compteur from './components/compteur.vue'
import test from './components/test.vue'
import Calculatrice from './components/Calculatrice.vue'
import Home from './components/Home.vue'
</script>

<template>
  <div>
    <!-- Barre de navigation -->
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/users">Liste des utilisateurs</router-link></li>
      </ul>
    </nav>

    <!-- Contenu de la page actuelle -->
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
