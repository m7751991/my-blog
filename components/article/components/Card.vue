<template>
  <div class="card-body p-24 bg-white mb-16 rounded-lg customerCard" @click="goToBlogDetail">
    <div class="text-2xl font-bold cursor-pointer">{{ item.title }}</div>
    <div class="flex justify-between items-center mt-12 h-124">
      <div class="flex-1 flex flex-col justify-between text-gray-500 mr-8 h-full">
        <div class="mb-2">
          <span>分类: {{ item.category }}</span> | <span>发布日期: {{ item.createdAt }}</span> |
          <span>观看次数: {{ item.views }}</span> | <span>评论: {{ item.comments }}</span>
        </div>
        <div class="line-clamp-2 mb-4">
          <span class="font-medium">文章内容:</span>
          {{ item.summary }}
        </div>
        <div class="mt-2">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="bg-white text-black-300 border border-black-300 text-xs font-medium mr-6 px-8 py-6 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="bg-red-50 flex items-center justify-center rounded-md">
        <img src="/public/pic.png" alt="" class="max-w-full max-h-124 object-contain" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const props = defineProps<{ item: any }>();

  const tags = ['标签1', '标签2', '标签3'];
  const goToBlogDetail = () => {
    router.push(`/blog/${props.item.id}`);
  };
</script>
