<template>
  <img :class="class" :src="src" />
</template>

<script setup lang="ts">
const props = defineProps<{
  img: "arrow_right" | "yt_border_blue" | "infinity" | "bell" | "shield" | "arrowClock" | "receipt" | "eMap";
  class?: string;
  size?: "md" | "sm" | "lg" | "xl";
}>();

let src = "";

switch (props.img) {
  case "arrow_right": src = "/pages/index/one_click_register/arrow_right.png"; break;
  case "yt_border_blue": src = "/pages/index/one_click_register/youtube_border_blue.png"; break;
  case "infinity": src = "/pages/index/one_click_register/infinity.png"; break;
  case "eMap": src = "/pages/index/one_click_register/e_map.png"; break;
  case "bell": src = "/pages/index/one_click_register/bell.png"; break;
  case "shield": src = "/pages/index/one_click_register/shield.png"; break;
  case "arrowClock": src = "/pages/index/one_click_register/arrow_clock.png"; break;
  case "receipt": src = "/pages/index/one_click_register/receipt.png"; break;
}
</script>
<style scoped>
img {
  display: inline-block;
}
</style>