<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/Card.vue';
import NavBar from './components/NavBar.vue';
import Cart from './components/Cart.vue';
import { useProductStore } from './stores/ProductStore';
import { useCartStore } from './stores/CartStore';

const showCart = ref(false);

const productStore = useProductStore();
const cartStore = useCartStore();

</script>

<template>
  <div class="relative h-screen bg-lime-400">
    <NavBar :show-cart="showCart" @toggleCart="showCart = !showCart"/>
    <Cart v-if="showCart" />
    <main>
      <div class="flex">
        <Card v-for="product in productStore.products" :key="product.name" :product="product"
          @addToCart="cartStore.addItem" />
      </div>
    </main>
  </div>
</template>
