<template>
  <div class="flex gap-16">
    <div class="flex-1 p-16 bg-white rounded-lg" v-if="blog">
      <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
      <div class="text-gray-500 mt-8">
        <span>分类: {{ blog.categoryId }}</span> | <span>发布日期: {{ blog.createdAt }}</span> |
        <!-- <span>观看次数: {{ blog.views }}</span> | -->
        <!-- <span>评论: {{ blog.comments }}</span> -->
      </div>
      <div class="mt-4">
        <div class="custom-html-style" v-html="content"></div>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
  import 'react-markdown-editor-lite/lib/index.css';
  import markdown from 'markdown-it';

  import type { BlogResponseType, BlogModelType } from '@/types';
  const md = markdown();

  const route = useRoute();
  const blog = ref<BlogModelType>({
    title: '',
    content: '',
  });

  const content = ref('');
  console.log(route.params.id, 'route.params.id');
  const { data, status } = await useRequest<BlogResponseType<BlogModelType>, any>('get', `/blogs/${route.params.id}`);
  console.log(data, 'data');
  if (data.value.status) {
    blog.value = data.value.data;
    content.value = md.render(blog.value.content);
  }

  console.log(content.value, 'htmlt');
</script>

<style scoped>
  .flex {
    display: flex;
  }
</style>
