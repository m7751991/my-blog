<template>
  <div class="container mx-auto pt-90 flex gap-16">
    <slot />
    <div class="hidden xl:block">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
