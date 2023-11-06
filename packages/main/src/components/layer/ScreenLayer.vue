<script setup>
defineProps({
  index: {
    type: Number,
    default: 0,
  },
  fullscreen: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <Teleport to="#app">
    <div
      class="layer"
      :style="{
        zIndex: index,
      }"
      :class="{ fullscreen: fullscreen }"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.fullscreen {
  width: 100%;
  height: 100%;
}
</style>

<style>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  overflow: hidden; /* prevent child from overflowing */
  visibility: hidden; /* fix pointer event & overlapping issue  */
}
.layer * {
  visibility: visible; /* fix pointer event & overlapping issue  */
}
</style>
