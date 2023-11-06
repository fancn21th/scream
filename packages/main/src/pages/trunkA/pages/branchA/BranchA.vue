<script setup>
import { Layer } from '@/components/layer';
import { Leaves } from './components/leaves';
</script>

<template>
  <Layer :index="100">
    <!-- cards layer -->
    <Leaves />
  </Layer>
</template>
