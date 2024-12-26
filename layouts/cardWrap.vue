<template>
  <div class="flex flex-col justify-start rounded-lg bg-white p-16 h-full w-full">
    <header class="flex">
      <div class="text-xl font-bold">{{ title }}</div>
    </header>

    <div class="mt-16">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { title } = useAttrs();
</script>

<style></style>
