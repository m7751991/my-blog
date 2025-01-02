<template>
  <div class="relative h-max-400 overflow-hidden">
    <div class="custome-carousel duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="carousel-item w-full">
        <img :src="image" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="absolute top-1/2 left-0 right-0 flex justify-between translate-y-[-50%]">
      <button @click="prev" class="btn btn-circle">❮</button>
      <button @click="next" class="btn btn-circle">❯</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    images: string[];
    autoplay?: boolean;
  }>();

  const currentIndex = ref(0);
  const autoplayInterval = ref<NodeJS.Timeout | null>(null);

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  };

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  };

  watch(
    () => props.autoplay,
    newVal => {
      if (newVal) {
        startAutoplay();
      } else {
        stopAutoplay();
      }
    }
  );

  const startAutoplay = () => {
    stopAutoplay();
    autoplayInterval.value = setInterval(next, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value);
      autoplayInterval.value = null;
    }
  };

  onMounted(() => {
    if (props.autoplay) {
      startAutoplay();
    }
  });

  onBeforeUnmount(() => {
    stopAutoplay();
  });
</script>

<style scoped>
  .custome-carousel {
    display: flex;
    transition: transform 500ms ease-in-out;
    width: 100%;
  }
  .carousel-item {
    min-width: 100%; /* Ensure each item takes full width */
  }
</style>
