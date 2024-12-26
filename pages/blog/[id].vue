<template>
  <div class="flex gap-16">
    <div class="flex-1 p-4 bg-white rounded-lg">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <div class="mt-2 text-gray-500">
        <span>分类: {{ category }}</span> | <span>发布日期: {{ new Date(date).toLocaleDateString() }}</span> |
        <span>观看次数: {{ views }}</span> |
        <span>评论: {{ comments }}</span>
      </div>
      <div class="mt-4">
        <p>{{ content }}</p>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
    category: string;
    date: string;
    views: number;
    comments: number;
    content: string;
  }>();
</script>

<style scoped>
  .flex {
    display: flex;
  }
</style>
