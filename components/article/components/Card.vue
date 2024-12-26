<template>
  <div class="card-body p-24 bg-white mb-16 rounded-lg customerCard" @click="goToBlogDetail">
    <div class="text-2xl font-bold cursor-pointer">文章标题</div>
    <div class="flex justify-between items-center mt-12 h-124">
      <div class="flex-1 flex flex-col justify-between text-gray-500 mr-8 h-full">
        <div class="mb-2">
          <span>分类: 文章分类</span> | <span>发布日期: {{ new Date().toLocaleDateString() }}</span> |
          <span>观看次数: 0</span> | <span>评论: 0</span>
        </div>
        <div class="line-clamp-2 mb-4">
          <span class="font-medium">文章内容:</span>
          这里是文章的简要内容，最多展示两行，超出的部分将被截断。这里是文章的简要内容，
          这里是文章的简要内容，最多展示两行，超出的部分将被截断。这里是文章的简要内容，
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

  const props = defineProps<{
    id: string | number;
  }>();

  const tags = ['标签1', '标签2', '标签3'];
  const goToBlogDetail = () => {
    router.push(`/blog/${props.id}`);
  };
</script>
