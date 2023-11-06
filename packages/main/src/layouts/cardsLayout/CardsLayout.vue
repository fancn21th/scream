<script setup>
const props = defineProps({
  layout: {
    type: Array,
    required: true,
  },
});

import { ref, markRaw, onBeforeMount } from 'vue';
import { vElementSize } from '@vueuse/components';
import { GridLayout, GridItem } from 'vue3-grid-layout-next';
import { colsNumber, getRowHeight } from '@/configs/cardsConfig';
import { topBarHeightPx } from '@/configs/layoutConfig';

onBeforeMount(() => {
  document.documentElement.style.setProperty('--top-row-height', topBarHeightPx);
});

// calculation for grid layout height by depending on the height of the container
// the height of the grid layout is determined by rowHeight
const rowHeight = ref(0);

function onResize({ height }) {
  if (height > 0) {
    rowHeight.value = getRowHeight(height);
  }
}

// https://cn.vuejs.org/api/reactivity-advanced.html#markraw
const layout = ref(
  props.layout.map((item) => ({
    ...item,
    component: markRaw(item.component),
  }))
);

const draggable = true;
const resizable = true;
</script>

<template>
  <!-- this container is given for calculation of height of the grid layout -->
  <div v-element-size="onResize" class="cards-container">
    <!-- only if rowHeight is greater than 0 -->
    <GridLayout
      v-model:layout="layout"
      :col-num="colsNumber"
      :row-height="rowHeight"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="false"
      :margin="[10, 10]"
    >
      <GridItem v-for="item in layout" :key="item.i" :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
        <component :is="item.component" :meta="item.meta"></component>
      </GridItem>
    </GridLayout>
  </div>
</template>

<style scoped>
.cards-container {
  width: 100%;
  height: 100%;
  /* avoid overlapping with header */
  padding-top: var(--top-row-height);
  pointer-events: none;
}

.vue-grid-item {
  pointer-events: all;
  transition: none;
  /* border */
  border: 1px solid black;
}

.vue-grid-item > div {
  height: 100%;
  width: 100%;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
