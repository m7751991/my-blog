<!--
 * @Author: m7751991@126.com m7751991@126.com
 * @Date: 2024-12-23 18:38:16
 * @LastEditors: m7751991@126.com m7751991@126.com
 * @LastEditTime: 2024-12-24 12:58:34
 * @FilePath: \my-blog\pages\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container mx-auto flex gap-4">
    <div class="flex-1">
      <div class="card bg-white">
        <div class="card-body p-16">
          <div class="btn-group">
            <button
              v-for="(item, index) in blogList"
              :key="index"
              @click="navTo(item.path)"
              :class="activeClass(item.path) + ' btn'"
            >
              {{ item.title }}
            </button>
          </div>
        </div>
      </div>
      <div class="card bg-white mt-8">
        <div class="card-body p-16">内容区域</div>
      </div>
    </div>
    <div class="w-300">
      <div class="card bg-white">
        <div class="card-body p-16">321</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const blogList = [
    { title: '博客1', path: '/blog/1' },
    { title: '博客2', path: '/blog/2' },
    { title: '博客3', path: '/blog/3' },
  ];

  const navTo = (path: string) => {
    navigateTo(path);
  };

  const activeClass = (path: string) => {
    return path === route.path ? 'btn-active' : '';
  };
</script>
