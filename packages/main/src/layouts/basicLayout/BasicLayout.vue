<script setup>
import { Layer } from '@/components/layer';
import BasicHeader from './components/BasicHeader.vue';
import BasicSideNav from './components/BasicSideNav.vue';
</script>

<template>
  <Layer :index="1000">
    <!-- shared layer -->
    <div class="shared-screen">
      <BasicHeader />
      <BasicSideNav />
    </div>
    <!-- router-view is placeholder for nested route -->
    <router-view></router-view>
  </Layer>
  <Layer :index="1">
    <!-- background layer -->
    <div class="background"></div>
  </Layer>
</template>

<style scoped>
.shared-screen {
  width: 100%;
  padding: 10px 10px 10px 10px;
}
/* http://css3pie.com/demos/gradient-patterns/ */
.background {
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-color: white;
  background-image: -webkit-linear-gradient(transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1)),
    -webkit-linear-gradient(0deg, transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1));
  background-image: -moz-linear-gradient(transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1)),
    -moz-linear-gradient(0deg, transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1));
  background-image: linear-gradient(transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1)),
    linear-gradient(90deg, transparent 99%, rgba(0, 0, 0, 0.1) 99%, rgba(0, 0, 0, 0.1));
}
</style>
