<template>
  <div
    class="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-400 ease-in-out"
    :class="isScroll ? 'translate-y-[-100%]' : 'translate-y-0'"
    id="nav-header"
  >
    <div class="navbar-start">
      <a
        class="btn btn-ghost text-2xl text-primary font-semibold hover:text-secondary transition duration-300"
        @click="navTo('/')"
        >MyBlog</a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-10 text-lg">
        <li v-for="(item, index) of navList" :key="index">
          <a
            @click="navTo(item.path)"
            :class="activeClass(item) + ' text-gray-600 hover:text-secondary transition duration-300 font-semibold'"
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end pr-16">
      <label class="input input-bordered flex items-center gap-2 bg-white rounded-full shadow-md">
        <input type="text" v-model="keyWord" placeholder="请输入内容" @keyup.enter="search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-24 w-24 text-gray-600 cursor-pointer hover:text-secondary transition duration-300"
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
  const router = useRouter();
  console.log(router, route, '321');

  const navList = ref([
    {
      title: '首页',
      path: '/',
      name: 'index',
    },
    {
      title: '博客',
      path: '/blogs/1',
      name: 'blogs-categoryId-keyWord',
    },
    {
      title: '留言',
      path: '',
      name: 'message',
    },
    {
      title: '归档',
      path: '',
      name: 'archive',
    },
  ]);
  const keyWord = ref(''); // 定义 keyWord 变量
  const isScroll = ref(false);

  const activeClass = computed(() => {
    return (item: (typeof navList.value)[0]): string => {
      return route.name === item.name ? 'bg-primary text-white' : '';
    };
  });

  const search = () => {
    navigateTo(`/blogs/${route.params.categoryId}/${keyWord.value}`);
  };

  const navTo = (path: string): void => {
    navigateTo(path);
  };

  onMounted(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          isScroll.value = window.scrollY > 200;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
</script>
