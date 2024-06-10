<script setup lang="ts">
import Header from './components/layout/Header.vue';
// import Footer from './components/layout/Footer.vue';

import '~/assets/css/globals.css'
</script>



<template>
  <Header></Header>
  <div class="wrapper">
    <NuxtPage />
  </div>
  <!-- <Footer></Footer> -->
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  @apply max-w-page;
  padding: 20px 20px;
  width: 100%;
  flex-grow: 1;
}
</style>