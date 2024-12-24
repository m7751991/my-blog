<template>
  <div class="bg-slate-100 height-full">
    <NavHeader />
    <NuxtLayout name="content">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="less" scoped>
  .height-full {
    height: 100vh;
  }
</style>
