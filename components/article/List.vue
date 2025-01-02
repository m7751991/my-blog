<template>
  <div class="mt-16 overflow-hidden">
    <div
      v-for="(item, index) in blogList"
      :key="index"
      ref="cardRefs"
      class="transition-all duration-500 ease-in-out opacity-0 translate-y-[80%]"
    >
      <Card :item="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ResponseType, BlogModelType } from '@/types';
  const observer = ref<IntersectionObserver | null>(null);
  const Card = defineAsyncComponent(() => import('./components/Card.vue'));
  const route = useRoute();

  const blogList = ref<BlogModelType[]>([]);
  const cardRefs = ref<HTMLElement[]>([]);

  const observerFn = () => {
    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-[80%]');
          observer.value?.unobserve(entry.target); // 停止观察
        }
      });
    });
    cardRefs.value.forEach(card => {
      if (card) {
        observer.value?.observe(card); // 观察每个卡片
      }
    });
  };

  const fetchBlogList = async () => {
    const categoryId = route.params.categoryId;
    const keyWord = route.params.keyWord;
    const params = {
      categoryId: categoryId,
      title: keyWord,
    };

    const { data, status } = await useRequest<ResponseType<BlogModelType[]>, typeof params>(
      'get',
      '/blogs/search',
      params
    );
    blogList.value = data.value.data;
  };
  await fetchBlogList();

  onMounted(() => {
    observerFn();
  });

  onBeforeUnmount(() => {
    observer.value?.disconnect();
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
