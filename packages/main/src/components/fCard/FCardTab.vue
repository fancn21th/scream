<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

import { inject } from 'vue';
import { CardKey, FCardHeaderHeight } from './shared';

const { addTab, activatedTab } = inject(CardKey);

addTab(props.title);
</script>

<template>
  <div v-if="activatedTab === props.title" class="f-card-tab" :style="{ paddingTop: FCardHeaderHeight }">
    <slot></slot>
  </div>
</template>

<style scoped>
.f-card-tab {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  /* 懒得用 zindex 解决覆盖问题 <oo> */
  pointer-events: none;
}
</style>
