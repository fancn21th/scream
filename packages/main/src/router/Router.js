import { createRouter, createWebHashHistory } from 'vue-router';
import { BasicLayout } from '@/layouts';

// Trunk A
const trunkA = () => import('@/pages/trunkA/TrunkA.vue');

export const routes = [
  { path: '/', redirect: { name: 'shared' } },
  {
    path: '/shared-screen/',
    name: 'shared-screen',
    component: BasicLayout,
    redirect: { name: 'trunk-a' },
    children: [
      {
        // 帮扶项目监测
        path: 'trunk-a',
        name: 'trunk-a',
        component: trunkA,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
