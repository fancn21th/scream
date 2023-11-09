<script setup>
import { onBeforeMount } from 'vue';

import { topBarHeightPx } from '@/configs/layoutConfig';

onBeforeMount(() => {
  document.documentElement.style.setProperty('--top-row-height', topBarHeightPx);
});
</script>

<template>
  <div class="header">
    <figure>
      <a href="https://fancn21th.cn/zh/normalization/bigscreen/">
        <img src="https://avatars.githubusercontent.com/u/4645715?v=4" alt="document" class="document" />
      </a>
    </figure>
    <figure>
      <a href="https://github.com/fancn21th/scream">
        <img src="./assets/github-mark.svg" alt="project" class="project" />
      </a>
    </figure>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: var(--top-row-height);
  border: 1px solid black;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.project {
  width: 50px;
  height: 50px;
}

.document {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 20px;
}
</style>
