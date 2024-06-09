<template>
  <div :class="class" class="wrapper">
    <label v-if="label">{{ label }}</label>
    <input />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  class?: string;
}>();
</script>

<style scoped>
label {
  display: block;
  font-size: 12px;
  margin-bottom: 2px;
}

input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #BCBCBC;
  padding: 4px 10px;
  border-radius: 5px;
}

input:focus {
  border-color: #0584FE;
  outline: none;
}

.wrapper {
  margin-bottom: 16px;
}
</style>