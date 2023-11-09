<script setup>
import { provide, ref } from 'vue';
import { CardKey } from './shared';

// 选中的 tab
const activatedTab = ref(null);
// tabs
const tabs = ref([]);

provide(CardKey, {
  activatedTab,
  tabs,
  addTab: (title) => {
    if (!tabs.value.length) activatedTab.value = title;
    tabs.value.push(title);
  },
  updateTab: (title) => {
    activatedTab.value = title;
  },
});
</script>

<template>
  <div class="f-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.f-card {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
}
</style>
