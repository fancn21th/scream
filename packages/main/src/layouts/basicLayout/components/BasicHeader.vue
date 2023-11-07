<script setup>
import { onBeforeMount } from 'vue';

import { topBarHeightPx } from '@/configs/layoutConfig';

onBeforeMount(() => {
  document.documentElement.style.setProperty('--top-row-height', topBarHeightPx);
});
</script>

<template>
  <div class="header"></div>
</template>

<style scoped>
.header {
  width: 100%;
  height: var(--top-row-height);
  border: 1px solid black;
}
</style>
