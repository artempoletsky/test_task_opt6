<template>
  <div :class="class" class="wrapper">
    <label v-if="label">{{ label }}</label>
    <input :class="{
      error: !!error,
    }" :required="required" :name="name" :placeholder="placeholder" @change="onChange" :value="value" />
    <em v-if="error" class="error">{{ error }}</em>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  class?: string;
  error?: string;
  name?: string;
  placeholder?: string;
  "@change"?: (e: Event) => void;
  value?: string;
  required?: boolean;
}>();

const onChange = props['@change'];

</script>


<style scoped>
label {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
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

input.error {
  @apply border-red-500;
}

.wrapper {
  margin-bottom: 16px;
}

.error {
  display: block;
  font-style: normal;
  @apply text-xs text-red-700 mt-1;
}
</style>