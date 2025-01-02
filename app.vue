<template>
  <div class="bg-slate-100 h-full pb-16">
    <NavHeader />
    <NuxtLayout name="content">
      <NuxtPage />
      <template #sidebar>
        <Sidebar :categoryList="categoryList" />
      </template>
    </NuxtLayout>
    <FloatingButton />
  </div>
</template>

<script lang="ts" setup>
  import type { CategoryModelType, ResponseType } from '@/types';
  const categoryList = ref<CategoryModelType[]>([]);
  const getCategoryList = async () => {
    const { data } = await useRequest<ResponseType<CategoryModelType[]>, any>('get', `/category`);
    categoryList.value = data.value.data;
  };
  await getCategoryList();
</script>

<style lang="less">
  body {
    height: 100vh;
    background-color: rgb(241, 245, 249, 1);
  }
</style>
