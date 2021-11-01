<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "@vue/reactivity";
import HelloWorld from "../components/HelloWorld.vue";
import ContentVue from "../components/layouts/Content.vue";
import HeaderVue from "../components/layouts/Header.vue";
import LayoutVue from "../components/layouts/Layout.vue";
import ProductListVue from "../components/ProductList.vue";
const nyoba = ref("variable cuy");
const ubah = (event, str) => {
  const { value } = event;
  console.log(value, str);
  nyoba.value = value;
};
</script>

<template>
  <LayoutVue>
    <template v-slot:header>
      <HeaderVue/>
      </template>
    <template v-slot:content>
      <!-- <ContentVue :text="'asw ' + nyoba" />
      <input @input="ubah($event.target, 'test')" type="text" /> -->
    <ProductListVue/>
    </template>
  </LayoutVue>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

