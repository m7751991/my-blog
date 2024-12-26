<template>
  <div class="w-400">
    <div class="card">
      <div class="card-body p-0">
        <personal-info-card />
        <category-filter />
        <hot-article />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const PersonalInfoCard = defineAsyncComponent(() => import('./components/PersonalInfoCard.vue'));
  const CategoryFilter = defineAsyncComponent(() => import('./components/CategoryFilter.vue'));
  const HotArticle = defineAsyncComponent(() => import('./components/HotArticle.vue'));
</script>
