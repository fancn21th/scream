<script setup>
import { CardsLayout } from '@/layouts';
import { LeafA, LeafB, LeafC, LeafD, LeafE } from '../../../../components';

// grid layout options
const layout = [
  {
    x: 10,
    y: 0,
    w: 6,
    h: 1,
    i: 1,
    static: false,
    component: LeafA,
    meta: {},
  },
  {
    x: 10,
    y: 1,
    w: 6,
    h: 1,
    i: 2,
    static: false,
    component: LeafB,
    meta: {},
  },
  {
    x: 10,
    y: 2,
    w: 6,
    h: 1,
    i: 3,
    static: false,
    component: LeafC,
    meta: {},
  },
  {
    x: 10,
    y: 3,
    w: 3,
    h: 1,
    i: 4,
    static: false,
    component: LeafD,
    meta: {},
  },
  {
    x: 13,
    y: 3,
    w: 3,
    h: 1,
    i: 5,
    static: false,
    component: LeafE,
    meta: {},
  },
];
</script>

<template>
  <CardsLayout :layout="layout"> </CardsLayout>
</template>
