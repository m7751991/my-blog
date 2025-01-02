<template>
  <div class="flex flex-col items-center justify-center bg-white rounded-lg w-400 h-320 shadow-md">
    <NuxtLayout name="card-wrap" title="分类">
      <div class="flex items-center flex-wrap cursor-pointer">
        <div
          v-for="item in categoryList"
          :key="item.id"
          @click="setActiveCategory(item.id)"
          :class="`flex mr-16 items-center border border-gray-300 rounded-full px-16 py-2 bg-white text-sm mb-4 transition-transform transform hover:scale-105 ${activeClass(item.id)}`"
        >
          <div class="text-gray-800 font-semibold">{{ item.name }}</div>
          <div class="text-gray-500 ml-8">({{ item.blogCount }})</div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  import type { CategoryModelType } from '@/types';
  defineProps<{
    categoryList: CategoryModelType[];
  }>();
  const activeCategory = ref<number>(0);
  const router = useRouter();

  const activeClass = (id: number) => {
    return id === activeCategory.value
      ? 'bg-blue-600 text-white  border-blue-600 '
      : 'bg-white text-gray-600  border-gray-400 ';
  };

  const setActiveCategory = (id: number) => {
    router.push(`/blogs/${id}`);
    setValues(id);
  };

  const setValues = (id: number) => {
    activeCategory.value = id;
  };
</script>

<style></style>
