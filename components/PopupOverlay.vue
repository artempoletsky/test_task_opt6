<template>
  <div v-if="store.popupContent" class="inset-0 fixed bg-black/80 flex justify-center items-center z-10">
    <div class="relative">
      <Icon class="absolute top-[-10px] left-[100%] ml-[-20px]" @click="close" pointer img="close" />
      <YouTube video="NjtUkZtHj00" v-if="store.popupContent == 'Youtube'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '~/lib/store';
import YouTube from "~/components/popup/YouTube.vue"

function close() {
  store.popupContent = undefined;
}
</script>