<script setup>
import { shallowRef, onMounted, watch, unref } from 'vue';
import * as echarts from 'echarts';
import { useMap, useOption } from '@/composables';

const { registerMap, getCoordsMap } = useMap();

// 地图元数据
const coordsMap = getCoordsMap();

console.log({ coordsMap });

const { option, updateOption } = useOption({ coordsMap });

// 注册地图
registerMap(echarts);
// map 实例
let chart = null;
// map ref
const chartRef = shallowRef(null);

const call_updateOption = (action) => {
  updateOption(action);
};

// 监听 echarts option 变化
watch(
  option,
  (value) => {
    const v = unref(value);
    if (v) {
      // TODO: 更新策略
      // https://echarts.apache.org/zh/api.html#echartsInstance.setOption
      setTimeout(() => {
        chart.setOption(v, true);
      }, 0);
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

// 初始化
onMounted(() => {
  chart = echarts.init(chartRef.value);

  // 第一次渲染
  call_updateOption({});
});
</script>

<template>
  <div class="wrapper">
    <div class="chart-container" ref="chartRef"></div>
    <div class="background"></div>
  </div>
</template>

<style scoped>
.wrapper,
.chart-container,
.background {
  width: 100%;
  height: 100%;
}
</style>
