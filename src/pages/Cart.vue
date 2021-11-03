<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "@vue/runtime-core";
import { computed } from "vue";
import LayoutVue from "../components/layouts/Layout.vue";
const store = useStore();
const products = computed(() => store.state.products);
const cart = computed(() => store.getters.cart);
onMounted(() => {
  store.dispatch("getProducts");
});
const addtocart = (item) => store.dispatch("addItemToCart", item);
const reduce = (id) => store.dispatch("reduceQty", id);
const add = (id) => store.dispatch("addQty", id);
const emptyCart = () => store.dispatch("emptyCart");
const removeitem = (id) => store.dispatch("removeItemFromCart", id);
var totalPrice = computed(() =>
  cart.value.reduce((a, b) => a + b.qty * b.price, 0).toLocaleString()
);
var isProcessing = ref(false);
var orderPlaced = ref(true);

const placeOrder = () => {
  isProcessing.value = true;
  setTimeout(() => {
    isProcessing.value = false;
    orderPlaced.value = true;
    emptyCart();
  }, 1000);
};
</script>
<template>
  <LayoutVue>
    <template v-slot:content>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <h3 class="text-6xl font-bold text-left md:text-8xl">Keranjang</h3>
        <p class="text-xl my-10 text-gray-400 text-left">
          Anda memiliki {{ cart.length }} produk pada cart.
        </p>
        <div
          v-for="ca in cart"
          :key="ca.id"
          class="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <div>
            <img
              class="object-contain h-32 w-full rounded-xl"
              :src="ca.imgUrl"
            />
          </div>
          <div class="flex flex-wrap items-center text-left">
            <h2 class="text-4xl w-full font-bold">{{ ca.title }}</h2>
            <p class="w-full text-xl font-light my-5 text-gray-400 text-left">Harga satuan : ${{ca.price}}</p>
            <p class="w-full font-bold text-xl my-5 text-gray-600 text-left">Total : <span class="text-green-500">${{ ca.price * ca.qty }}</span></p>
          </div>
          <div class="grid grid-cols-3">
          
          <div class="col-span-2 flex flex-wrap items-center">
              
            <div class="flex justify-between items-center w-full">
              <button
                class="
                  mr-4
                  text-gray-600 text-md
                  font-bold
                  bg-white
                  border-2 border-gray-200
                  py-3
                  px-5
                  rounded-lg
                  shadow-xl
                "
                @click="reduce(ca.id)"
              >
                -
              </button>
              <p class="mx-4">{{ ca.qty }}</p>
              <button
                class="
                  ml-4
                  text-white text-md
                  font-bold
                  bg-green-500
                  py-3
                  px-5
                  rounded-lg
                  shadow-xl-green
                  hover:shadow-lg
                  transition
                  duration-500
                "
                @click="add(ca.id)"
              >
                +
              </button>
            </div>
          </div>
          <div class="flex flex-wrap p-10 justify-end items-center">
            <button
              @click="removeitem(ca.id)"
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          </div>
        </div>
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <h1 class="uppercase text-2xl font-bold mb-10 md:mb-0">Total Harga : <span class="text-green-500">${{ totalPrice }}</span></h1>
          <button
            v-if="cart.length"
            @click="placeOrder"
            :disabled="isProcessing"
            :class="{ 'opacity-50 cursor-not-allowed': isProcessing }"
            class="
              text-white
              w-full
              text-md
              font-bold
              bg-green-500
              p-6
              rounded-lg
              shadow-xl-green
            "
          >
            <div v-if="isProcessing">Loading...</div>
            <span v-else>Checkout </span>
          </button>
        </div>
      </div>
    </template>
  </LayoutVue>
</template>