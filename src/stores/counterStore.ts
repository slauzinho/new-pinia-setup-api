import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const counterStore = defineStore('name', () => {
  const count = ref(0);
  const double = computed(() => count.value * 2);
  const triple = computed({
    get: () => count.value * 2,
    set: (tripled) => {
      count.value = Math.round(tripled / 3);
    },
  });

  function increment(amount = 1) {
    count.value += amount;

    return count.value;
  }
  function decrement(amount = 1) {
    count.value += amount;

    return count.value;
  }

  return { count, double, increment, decrement, triple };
});

export default counterStore;
