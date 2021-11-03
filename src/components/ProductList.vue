<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "@vue/runtime-core";
import { computed } from "vue";
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
var totalPrice = computed(() => cart.value.reduce((a, b) => a + b.qty * b.price, 0).toLocaleString());
var isProcessing = ref(false)
var orderPlaced = ref(true)

const placeOrder= ()=> {
      isProcessing.value = true;
      setTimeout(() => {
        isProcessing.value = false;
        orderPlaced.value = true;
        emptyCart();
      }, 1000);
    }
</script>
<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="my-16 text-center">
      <h1 class="font-bold text-6xl md:text-8xl">Produk</h1>
      <p class="my-10 text-gray-400">Daftar Produk yang kami jual</p>
    </div>
    <div class="grid grid-cols-1">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div
          v-for="item in products"
          :key="item.id"
          class="my-10 px-1 w-full md:w-1/2 lg:my-8 lg:px-4 lg:w-1/3"
        >
          <div
            class="
              rounded-2xl
              shadow-lg
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <img
              class="object-contain h-32 w-full rounded-xl"
              :src="item.imgUrl"
              :alt="item.title"
            />
            <div class="px-10 py-16 flex-auto items-center">
              <div class="text-left">
                <h1 class="my-5 text-2xl truncate text-green-900 font-bold">
                  {{ item.title }}
                </h1>
                <p class="my-5 text-xl text-green-500 font-bold">
                  $ {{ item.price }}
                </p>
              </div>

              <button
                class="
                  text-white
                  w-full
                  text-md
                  font-bold
                  bg-green-500
                  py-4
                  px-6
                  rounded-lg
                  shadow-xl-green
                "
                @click="addtocart(item)"
              >
                + Add to cart
              </button>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>