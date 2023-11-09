<script setup></script>

<template>
  <div class="f-card-half">
    <slot></slot>
    <div class="background">1/2</div>
  </div>
</template>

<style scoped>
.f-card-half {
  position: relative;
  display: flex;
  flex: 1;
}
/* TODO: to be removed with div above */
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  opacity: 0.1;
}
</style>
