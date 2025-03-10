// BoutonCalculatrice.vue
<template>
  <button @click="$emit('send-value', value)">{{ value }}</button>
</template>

<script>
export default {
  props: ['value']
};
</script>

<style>
button {
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background: lightgray;
}
button:hover {
  background: gray;
  color: white;
}
</style>
