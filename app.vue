<script setup lang="ts">
import Header from './components/layout/Header.vue';
// import Footer from './components/layout/Footer.vue';
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
  max-width: 1280px;
  padding: 20px 20px;
  width: 100%;
  flex-grow: 1;
}
</style>

<style>
body {
  font-family: 'PT Sans', sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  margin: 0;
  padding: 0;
}

#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

img {
  vertical-align: middle;
}
</style>