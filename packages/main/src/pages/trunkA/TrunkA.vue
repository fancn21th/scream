<script setup>
import { Layer } from '@/components/layer';
import { Map } from '@scream/map';
</script>

<template>
  <Layer :index="10">
    <!-- map layer -->
    <Map />
  </Layer>
  <router-view></router-view>
</template>

<style scoped></style>
