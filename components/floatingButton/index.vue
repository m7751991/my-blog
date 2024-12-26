<template>
  <div class="fixed bottom-20 right-20">
    <img src="@/public/svg/backTop.svg" alt="Back to Top" @click="backTop" />
  </div>
</template>

<script lang="ts" setup>
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<style></style>
