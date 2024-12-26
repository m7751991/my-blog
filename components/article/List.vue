<template>
  <div class="mt-16 overflow-hidden">
    <div
      v-for="(card, index) in cards"
      :key="index"
      ref="cardRefs"
      class="transition-all duration-500 ease-in-out opacity-0 translate-y-[80%]"
    >
      <Card :id="1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const Card = defineAsyncComponent(() => import('./components/Card.vue'));
  const cards = ref(Array(10).fill(null));
  const cardRefs = ref<HTMLElement[]>([]);

  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-[80%]');
          observer.unobserve(entry.target); // 停止观察
        }
      });
    });
    cardRefs.value.forEach(card => {
      if (card) {
        observer.observe(card); // 观察每个卡片
      }
    });
  });
</script>

<style scoped>
  .card {
    opacity: 0;
    transition: opacity 0.5s ease-in; /* 渐入效果 */
  }

  .card.v-enter-active {
    opacity: 1; /* 进入时的透明度 */
  }
</style>
