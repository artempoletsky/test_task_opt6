<template>
  <button :class="type">
    <slot />
  </button>
</template>


<script setup lang="ts">
defineProps<{
  type?: "default" | "header" | "bordered";
}>();
</script>

<style scoped>
button {
  /* background: #0584FE; */
  /* border: 1px solid #0584FE; */
  @apply bg-blue-500 border border-blue-500;
  color: white;
  border-radius: 7px;
  padding: 10px 17px;
  cursor: pointer;
  font-size: 18px;
}

button.header {
  padding: 8px 17px;
  font-size: 15px;
}

button.bordered {
  background: white;
  color: black;
}
</style>