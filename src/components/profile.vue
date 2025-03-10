<template>
    <h1>profiles</h1>
    <ul>
        <li v-for="user in users" :key="user.id">
            <a @click=goToUser(user.id)>{{ user.name }}</a>
        </li>
    </ul>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    router=useRouter()

    const users = [
    { id: 1, name: 'Joe Haifa' },
    { id: 2, name: 'Candice Giami' },
    { id: 3, name: 'Jean Batiste' }
  ];

  const goToUser = (id) =>{
    router.push({
        name:'detail',
        params:{id}
    })
  }
  
</script>