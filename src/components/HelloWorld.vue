<script setup lang="ts">
import { ref } from 'vue';
import useCounterStore from '../stores/counterStore';

const counterStore = useCounterStore();

const handleIncrement = () => {
  counterStore.increment();
};

const handleDecrement = () => {
  counterStore.decrement();
};
</script>

<template>
  <h1>You counter is: {{ counterStore.counter }}</h1>
  <div>
    <button @click="handleIncrement">+</button>
    <button @click="handleDecrement">-</button>
  </div>
</template>
