<template>
  <div class="flex gap-16">
    <div class="flex-1">
      <Carousel :images="images" autoplay />
      <article-list />
    </div>
    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
  const images = [
    'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
    'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  ];
</script>
