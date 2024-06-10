<template>
  <div class="container">
    <iframe :width="960" :height="540" :src="src" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  video: string;
}>();

const src = `https://www.youtube.com/embed/${props.video}`;

</script>

<style scoped>
.container {
  background: black;
}
</style>