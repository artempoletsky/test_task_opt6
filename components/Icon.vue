<template>
  <div :class="resultClass" class="wrapper" :style="{
    width,
    height,
  }">
    <img :src="src" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: "arrow_right" | "yt_border_blue" | "infinity" | "bell" | "shield" | "arrowClock" | "receipt" | "eMap" | "close";
  class?: string;
  size?: "auto" | "md" | "sm" | "lg" | "xl";
  pointer?: boolean;
}>();

let resultClass = props.class || "";

if (props.pointer){
  resultClass += " cursor-pointer";
}

let src = "";
const size = props.size || "auto";
let width = "auto";
let height = "auto";
switch (size) {
  case "md":
    width = height = "66px";
    break;

  default:
    break;
}

switch (props.img) {
  case "arrow_right": src = "/pages/index/one_click_register/arrow_right.png"; break;
  case "yt_border_blue": src = "/pages/index/one_click_register/youtube_border_blue.png"; break;
  case "infinity": src = "/pages/index/one_click_register/infinity.png"; break;
  case "eMap": src = "/pages/index/one_click_register/e_map.png"; break;
  case "bell": src = "/pages/index/one_click_register/bell.png"; break;
  case "shield": src = "/pages/index/one_click_register/shield.png"; break;
  case "arrowClock": src = "/pages/index/one_click_register/arrow_clock.png"; break;
  case "receipt": src = "/pages/index/one_click_register/receipt.png"; break;
  case "close": src = "/components/popup/close.png"; break;
}
</script>
<style scoped>
.wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  vertical-align: middle;
  position: relative;
}
</style>