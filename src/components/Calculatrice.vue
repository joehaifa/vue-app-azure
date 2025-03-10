// Calculatrice.vue
<template>
  <div class="calculator">
    <EcranCalculatrice :result="result" :leftOperator="leftOperator" :operation="operation" :rightOperator="rightOperator" />
    <div class="buttons">
      <BoutonCalculatrice v-for="btn in buttons" :key="btn" :value="btn" @send-value="handleButtonClick" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import EcranCalculatrice from './EcranCalculatrice.vue';
import BoutonCalculatrice from './BoutonCalculatrice.vue';

export default {
  components: {
    EcranCalculatrice,
    BoutonCalculatrice,
  },
  setup() {
    const leftOperator = ref('');
    const rightOperator = ref('');
    const operation = ref('');
    const result = ref('0');
    
    const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'];

    const handleButtonClick = (value) => {
      if (!isNaN(value)) { // Si c'est un chiffre
        if (operation.value) {
          rightOperator.value += value;
        } else {
          leftOperator.value += value;
        }
      } else if (['+', '-', '*', '/'].includes(value)) { // Si c'est un opérateur
        if (leftOperator.value && !rightOperator.value) {
          operation.value = value;
        }
      } else if (value === '=') { // Calculer le résultat
        if (leftOperator.value && rightOperator.value && operation.value) {
          const left = parseFloat(leftOperator.value);
          const right = parseFloat(rightOperator.value);
          if (operation.value === '/' && right === 0) {
            result.value = 'Erreur';
          } else {
            result.value = eval(`${left} ${operation.value} ${right}`);
          }
        }
      } else if (value === 'C') { // Réinitialiser
        leftOperator.value = '';
        rightOperator.value = '';
        operation.value = '';
        result.value = '0';
      }
    };

    return {
      leftOperator,
      rightOperator,
      operation,
      result,
      buttons,
      handleButtonClick,
    };
  },
};
</script>

<style>
.calculator {
  width: 200px;
  margin: auto;
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
</style>