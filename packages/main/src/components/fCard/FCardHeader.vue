<script setup>
import { inject } from 'vue';
import { CardKey, FCardHeaderHeight } from './shared';

const { tabs, updateTab, activatedTab } = inject(CardKey);
</script>

<template>
  <div class="f-card-header">
    <div class="f-card-header__title">
      <slot />
    </div>
    <div class="f-card-header__tabs">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'f-card-header__tab--activated': activatedTab === tab }"
        :style="{ height: FCardHeaderHeight }"
        class="f-card-header__tab"
        @click="
          () => {
            updateTab(tab);
          }
        "
      >
        {{ tab }}
      </li>
    </div>
  </div>
</template>

<style scoped>
.f-card-header {
  display: flex;
  flex-direction: row;
}
.f-card-header__title {
  position: relative;
  left: -1px;
  top: -1px;
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-bottom-right-radius: 130px 120px;
  padding-left: 10px;
  padding-right: 30px;
  background-color: white;
}
.f-card-header__tab {
  display: inline-block;
  padding: 0 10px;
  margin: 0 10px;
}
.f-card-header__tab--activated {
  border-bottom: 1.5px solid black;
}
</style>
