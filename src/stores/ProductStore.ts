import { defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import { Product } from "../types/Product";

export const useProductStore = defineStore('product', () => {
  const products: Ref<Product[]> = ref([
    {
      name: 'Iphone 11 Pro Max',
      price: 1099.00,
      image: 'https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png'
    },
    {
      name: 'Iphone 11',
      price: 699.00,
      image: 'https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png'
    },
    {
      name: 'Iphone XR',
      price: 599.00,
      image: 'https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png'
    },
    {
      name: 'Iphone SE',
      price: 399.00,
      image: 'https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png'
    }
  ]);

  const totalPrice = computed(
    () => products.value
    .map(p => p.price)
    .reduce((a, b) => a + b, 0)
  );

  const addProduct = (product: Product) => {
    products.value.push(product)
  };

  return {
    products,
    totalPrice,
    addProduct
  }
})