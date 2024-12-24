<template>
  <div class="navbar bg-white">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl" @click="navTo('/home')">MyBlog</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-10 text-lg">
        <li v-for="(item, index) of navList" :key="index"
          ><a @click="navTo(item.path)" :class="activeClass(item.path)">{{ item.title }}</a></li
        >
      </ul>
    </div>
    <div class="navbar-end pr-16">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" v-model="keyWord" class="grow" placeholder="请输入内容" @keyup.enter="search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-24 w-24 opacity-50"
          @click="search"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  console.log(route.path, 'route');

  const navList = ref([
    {
      title: '首页',
      path: '/home',
    },
    {
      title: '博客',
      path: '/blog',
    },
    {
      title: '留言',
      path: '',
    },
    {
      title: '归档',
      path: '',
    },
  ]);
  const keyWord = ref(''); // 定义 keyWord 变量
  const activeClass = computed(() => {
    return (path: string): string => {
      return route.path === path ? 'bg-base-300' : '';
    };
  });

  const search = () => {
    console.log('Searching for:', keyWord.value); // 在控制台输出搜索关键字
    // 在这里添加搜索逻辑
  };

  const navTo = (path: string): void => {
    navigateTo(path);
  };
</script>
