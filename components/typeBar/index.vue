<template>
  <div class="card bg-white">
    <div class="card-body p-16">
      <div class="btn-group">
        <button
          v-for="(item, index) in categoryList"
          :key="index"
          @click="setActiveCategory(item.id)"
          :class="`border  rounded-[16px] h-36 pl-16 pr-16 mr-8  hover:shadow-lg transition-shadow duration-200   ${activeClass(item.id)}`"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ResponseType, CategoryModelType } from '@/types';
  defineProps<{
    categoryList: CategoryModelType[];
  }>();

  const activeCategory = ref<number>(1);
  const emit = defineEmits(['filterBlogsByCategory']);
  const router = useRouter();
  const route = useRoute();

  const activeClass = (id: number) => {
    return id === activeCategory.value
      ? 'bg-blue-600 text-white  border-blue-600 '
      : 'bg-white text-gray-600  border-gray-400 ';
  };

  const setActiveCategory = (id: number) => {
    router.push(`/blogs/${id}`);
    activeCategory.value = id;
  };

  onMounted(() => {
    const categoryId = route.params.categoryId;
    if (categoryId) {
      activeCategory.value = Number(categoryId);
    }
  });
</script>
