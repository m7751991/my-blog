<template>
  <div class="bg-slate-100 h-full pb-16">
    <NavHeader />
    <NuxtLayout name="content">
      <NuxtPage />
    </NuxtLayout>
    <FloatingButton />
  </div>
</template>

<style lang="less">
  body {
    height: 100vh;
    background-color: rgb(241, 245, 249, 1);
  }
</style>
