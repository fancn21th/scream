<script setup>
import { onBeforeMount } from 'vue';
import { topBarHeight, gutter } from '@/configs/layoutConfig';

onBeforeMount(() => {
  document.documentElement.style.setProperty('--starting-height', `${topBarHeight + gutter * 2}px`);
});
</script>

<template>
  <div class="sidenav">
    <a class="sidenav-item" href="#">Trunk A</a>
    <a class="sidenav-item" href="#">Trunk B</a>
    <a class="sidenav-item" href="#">Trunk C</a>
    <a class="sidenav-item" href="#">Trunk D</a>
  </div>
</template>

<style scoped>
.sidenav {
  position: fixed;
  top: var(--starting-height);
}

.sidenav-item {
  display: block;
  position: relative;
  left: -180px;
  transition: 0.3s;
  padding: 15px;
  width: 200px;
  text-decoration: none;
  font-size: 20px;
  border: 1px solid black;
  margin-top: 10px;
  text-align: right;
}

.sidenav-item:hover {
  left: 0;
  text-align: center;
}
</style>
