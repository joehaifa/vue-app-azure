// EcranCalculatrice.vue
<template>
  <div class="screen">
    <p>{{ expression }}</p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['leftOperator', 'operation', 'rightOperator', 'result'],
  setup(props) {
    const expression = computed(() => `${props.leftOperator} ${props.operation} ${props.rightOperator}`);
    return { expression };
  }
};
</script>

<style>
.screen {
  background: #222;
  color: white;
  padding: 10px;
  font-size: 20px;
  text-align: right;
  margin-bottom: 10px;
}
</style>
