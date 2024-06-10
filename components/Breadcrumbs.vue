<template>
  <div class="mb-3">
    <NuxtLink v-for="item in items" class="item" :to="item.href">{{ item.title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
export type BreadcrumbsItem = {
  href: string;
  title: string;
}
defineProps<{
  items: BreadcrumbsItem[];
}>();
</script>

<style scoped>
.item {
  @apply text-xs;
  position: relative;
  margin-right: 25px;
}

.item::after {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  position: absolute;
  right: -15px;
  top: 8px;
  border-radius: 100%;
  background: black;
}

.item:last-child {
  cursor: default;
  @apply text-gray-400;
}

.item:last-child::after {
  display: none;
  content: none;
}
</style>