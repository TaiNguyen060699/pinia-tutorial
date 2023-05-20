<template>
  <div class="absolute top-20 right-0 w-1/3 p-4 border rounded-lg bg-white border-gray-300 z-10">
    <h1 class="text-xl font-bold">My Cart</h1>
    <ul>
      <li v-for="[name, key] in Object.entries(cartStore.groupedItems)" :key="key">
        <div class="flex items-center justify-between py-2">
          <span>{{ name }}</span>
          <div class="flex items-center">
            <button @click="cartStore.removeItem(key[0])"
              class="hover:bg-gray-200 rounded-full p-2">
              -
            </button>
            <span class="mx-2">{{ key.length }}</span>
            <button @click="cartStore.addItem(key[0])" class="hover:bg-gray-200 rounded-full p-2">
              +
            </button>
          </div>
          <span>${{ totalPrice }}</span>
        </div>
      </li>
    </ul>
    <hr class="my-2">
    <div class="flex items-center justify-between">
      <span class="font-bold">Total</span>
      <span class="font-bold">${{ totalPrice }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';

const cartStore = useCartStore();

const totalPrice = computed(
  () => cartStore.items
  .map(p => p.price)
  .reduce((acc, curr) => acc + curr, 0)
)

</script>