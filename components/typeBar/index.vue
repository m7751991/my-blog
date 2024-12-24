<template>
  <div class="card bg-white">
    <div class="card-body p-16">
      <div class="btn-group">
        <button
          v-for="(item, index) in typeList"
          :key="index"
          @click="navTo(item.path)"
          :class="`border  rounded-[16px] h-36 pl-16 pr-16 mr-8  hover:shadow-lg transition-shadow duration-200   ${activeClass(item.path)}`"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const typeList = [
    { title: '博客1', path: '/blog/1' },
    { title: '博客2', path: '/blog/2' },
    { title: '博客3', path: '/blog/3' },
  ];

  const navTo = (path: string) => {
    navigateTo(path);
  };

  const activeClass = (path: string) => {
    return path === route.path
      ? 'bg-blue-600 text-white  border-blue-600 '
      : 'bg-white text-gray-600  border-gray-400 ';
  };
</script>
