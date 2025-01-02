<template>
  <div class="container flex flex-col">
    <type-bar :categoryList="categoryList" />
    <article-list />
  </div>
</template>
<script lang="ts" setup>
  import type { ResponseType, CategoryModelType } from '@/types';
  const categoryList = ref<CategoryModelType[]>([]);

  const getCategoryList = async () => {
    const { data } = await useRequest<ResponseType<CategoryModelType[]>, any>('get', `/category`);
    categoryList.value = data.value.data;
  };
  getCategoryList();
</script>
